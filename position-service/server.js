import path from "node:path";
import { fileURLToPath } from "node:url";

import { GmxSdk } from "@gmx-io/sdk";
import { getOracleKeeperUrl } from "@gmx-io/sdk/configs/oracleKeeper";
import { megaeth } from "@gmx-io/sdk/configs/chains";
import { Exchange, Portfolio } from "./sdk-bundle.js";
import dotenv from "dotenv";
import { JsonRpcProvider, VoidSigner } from "ethers";
import express from "express";
import { createPublicClient, http } from "viem";


const currentDir = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(currentDir, "..", ".env") });

const SYMBOLS = ["ETH", "BTC", "SOL", "MEGA"];
const WORLD_TOKENS = { ETH: 4, BTC: 6, SOL: 7, MEGA: 10 };
const GMX_MARKETS = {
  ETH: "0x9b1B72720f6D277F3b1e607a0c5fab1B300248b1",
  BTC: "0x31EdCc52bE2Fa55Ba68f50409F9e6b7d9EbF3D59",
  SOL: "0xe8E716F1cddfFD0698B86919D41A8228d701fEe9",
  MEGA: "0x1b997cb4841c4cb360E384192fFd7fb26eb10e5f",
};
const USD_SCALE = 1e30;

const RPC_URL = required("RPC_URL");
const WALLET_ADDRESS = required("DASHBOARD_WALLET_ADDRESS");
const WORLD_EXCHANGE_ADDRESS = required("WORLD_EXCHANGE_ADDRESS");
const CHAIN_ID = Number(process.env.CHAIN_ID ?? "4326");
const PORT = Number(process.env.POSITION_PORT ?? "3001");

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required in .env`);
  return value;
}

function finite(value) {
  if (value === null || value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function sdkNumber(value) {
  if (value === null || value === undefined) return null;
  if (typeof value.toNumber === "function") return value.toNumber();
  return finite(value.toString());
}

function scaled(value, scale = USD_SCALE) {
  const parsed = finite(value);
  return parsed === null ? null : parsed / scale;
}

function isoTime(value) {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) return value.toISOString();
  const numeric = Number(value);
  if (Number.isFinite(numeric)) {
    const milliseconds = numeric > 10_000_000_000 ? numeric : numeric * 1000;
    return new Date(milliseconds).toISOString();
  }
  const parsed = new Date(value.toString());
  return Number.isNaN(parsed.getTime()) ? value.toString() : parsed.toISOString();
}

const provider = new JsonRpcProvider(RPC_URL);
const readOnlySigner = new VoidSigner(WALLET_ADDRESS, provider);
const world = new Exchange({
  contractAddress: WORLD_EXCHANGE_ADDRESS,
  signer: readOnlySigner,
});

const publicClient = createPublicClient({
  chain: megaeth,
  transport: http(RPC_URL),
});

const gmx = new GmxSdk({
  chainId: CHAIN_ID,
  rpcUrl: RPC_URL,
  oracleUrl: getOracleKeeperUrl(CHAIN_ID),
  publicClient,
  account: WALLET_ADDRESS,
  markets: {
    "0xBc7edFa7491cFbF317a65788e0E0cd89E91eC8a7": {
      isListed: false,
    },
  },
});
gmx.setAccount(WALLET_ADDRESS);

let worldReady = null;
async function prepareWorld() {
  if (!worldReady) {
    worldReady = (async () => {
      const accountId = await world.getAccountId({ address: WALLET_ADDRESS });
      world.setDefaultAccountId(accountId);
      const portfolio = await Portfolio.init(world);
      return { accountId, portfolio };
    })();
  }
  return worldReady;
}

async function getWorldPositions() {
  const { accountId, portfolio } = await prepareWorld();
  const nowSec = Math.floor(Date.now() / 1000);

  const rows = await Promise.all(
    SYMBOLS.map(async (symbol) => {
      const tokenId = WORLD_TOKENS[symbol];
      const [position, markPrice, liquidation] = await Promise.all([
        world.getAggregatedPerpPosition({ tokenId, accountId }),
        world.getTokenMarkPrice({ tokenId }),
        portfolio.findLiquidationPrice({ tokenId }).catch(() => null),
      ]);

      const quantity = sdkNumber(position.quantity);
      if (quantity === null || Math.abs(quantity) < 1e-12) return null;

      const entryPrice = sdkNumber(position.price);
      const mark = sdkNumber(markPrice);
      const owedNom = sdkNumber(position.owedNom);
      const owedBase = sdkNumber(position.owedBase);
      const openedAt = isoTime(position.startTime);
      const startSec = openedAt
        ? Math.floor(new Date(openedAt).getTime() / 1000)
        : null;

      let fundingUsd = null;
      if (startSec && startSec < nowSec && owedNom !== null && mark !== null) {
        const historyRate = await world
          .getSummedFundingRate({ fromSec: startSec, toSec: nowSec, tokenId })
          .catch(() => null);
        const history = sdkNumber(historyRate);
        if (history !== null) {
          fundingUsd = (owedNom - quantity * history) * mark;
        }
      }

      const pnlUsd =
        mark !== null && entryPrice !== null
          ? mark * quantity - (entryPrice * quantity - (owedBase ?? 0))
          : null;

      return {
        venue: "world",
        symbol,
        side: quantity > 0 ? "long" : "short",
        quantity: Math.abs(quantity),
        notionalUsd: mark === null ? null : Math.abs(quantity * mark),
        entryPrice,
        markPrice: mark,
        liquidationPrice: liquidation ? sdkNumber(liquidation.price) : null,
        collateralUsd: null,
        pnlUsd,
        fundingUsd,
        openedAt,
        details: {
          tokenId,
          accountId: accountId.toString(),
          signedQuantity: quantity,
          owedNom,
          owedBase,
          liquidationBalancePrice: liquidation
            ? sdkNumber(liquidation.balancePrice)
            : null,
        },
      };
    }),
  );

  return rows.filter(Boolean);
}

async function getGmxPositions() {
  const { marketsInfoData, tokensData } = await gmx.markets.getMarketsInfo();
  if (!marketsInfoData || !tokensData) {
    throw new Error("GMX markets or token data is unavailable");
  }
  const positions = await gmx.positions.getPositionsInfo({
    marketsInfoData,
    tokensData,
    showPnlInLeverage: true,
  });

  const symbolByMarket = Object.fromEntries(
    Object.entries(GMX_MARKETS).map(([symbol, address]) => [
      address.toLowerCase(),
      symbol,
    ]),
  );

  return Object.values(positions)
    .map((position) => {
      const symbol = symbolByMarket[position.marketAddress.toLowerCase()];
      if (!symbol) return null;
      const tokenDecimals = Number(position.indexToken?.decimals ?? 18);
      return {
        venue: "gmx",
        symbol,
        side: position.isLong ? "long" : "short",
        quantity: scaled(position.sizeInTokens, 10 ** tokenDecimals),
        notionalUsd: scaled(position.sizeInUsd),
        entryPrice: scaled(position.entryPrice),
        markPrice: scaled(position.markPrice),
        liquidationPrice: scaled(position.liquidationPrice),
        collateralUsd: scaled(position.collateralUsd),
        pnlUsd: scaled(position.pnlAfterAllFees),
        fundingUsd: scaled(position.pendingFundingFeesUsd),
        openedAt: isoTime(position.increasedAtTime),
        details: {
          key: position.key,
          marketAddress: position.marketAddress,
          market: position.marketInfo?.name ?? position.indexName ?? symbol,
          leverage: scaled(position.leverage, 10_000),
          remainingCollateralUsd: scaled(position.remainingCollateralUsd),
          pendingClaimableFundingFeesUsd: scaled(
            position.pendingClaimableFundingFeesUsd,
          ),
          hasLowCollateral: position.hasLowCollateral,
        },
      };
    })
    .filter(Boolean);
}

const app = express();

app.get("/health", async (_request, response) => {
  try {
    const [chainId, blockNumber] = await Promise.all([
      publicClient.getChainId(),
      publicClient.getBlockNumber(),
    ]);
    response.json({
      status: "ok",
      wallet: WALLET_ADDRESS,
      chainId,
      blockNumber: blockNumber.toString(),
      readOnly: true,
    });
  } catch (error) {
    response.status(503).json({ status: "error", error: String(error) });
  }
});

app.get("/positions", async (_request, response) => {
  const [worldResult, gmxResult] = await Promise.allSettled([
    getWorldPositions(),
    getGmxPositions(),
  ]);
  const positions = [];
  const errors = {};

  if (worldResult.status === "fulfilled") {
    positions.push(...worldResult.value);
  } else {
    errors.world = String(worldResult.reason);
  }
  if (gmxResult.status === "fulfilled") {
    positions.push(...gmxResult.value);
  } else {
    errors.gmx = String(gmxResult.reason);
  }

  positions.sort(
    (left, right) =>
      SYMBOLS.indexOf(left.symbol) - SYMBOLS.indexOf(right.symbol) ||
      left.venue.localeCompare(right.venue),
  );

  response.json({
    timestamp: new Date().toISOString(),
    wallet: WALLET_ADDRESS,
    positions,
    errors,
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(
    `Read-only position service listening on http://127.0.0.1:${PORT}`,
  );
});
