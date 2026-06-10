# MegaETH Funding Dashboard

Standalone, read-only Streamlit dashboard for the production World/GMX wallet.
It does not import or modify the `megaeth-bot` project and contains no trading
routes.

## What It Shows

- Live APR for ETH, BTC, SOL, and MEGA
- Signed gross spread for the fixed `long World / short GMX` strategy
- Confirmed World and GMX positions
- Entry, mark, liquidation, size, notional, collateral, PnL, and funding fields
- Historical gross spread chart

Gross spread is recalculated from the source APRs:

```text
gross spread = GMX APR - World APR
```

The API's existing absolute `spread` field is deliberately ignored.

## Setup

```bash
cd /Users/Ken/megaeth-dashboard
./setup.sh
```

### Secrets (choose one)

**Option A — AWS SSM (recommended):**
```bash
# One-time: push local secrets to SSM
./fetch-secrets.sh --project dashboard --profile your-profile  # actually use push-secrets.sh from megaeth-bot

# Every start: fetch from SSM (run.sh does this automatically)
./fetch-secrets.sh --project dashboard
```

**Option B — Local .env (dev only):**
Edit `.env` and set:
- `HISTORY_API_KEY`
- `RPC_URL`
- `DASHBOARD_WALLET_ADDRESS`
- `WORLD_EXCHANGE_ADDRESS`

Only public/read-only chain configuration belongs here. Do not add private keys.

## Run

```bash
./run.sh
```

Open [http://localhost:8501](http://localhost:8501).

The dashboard refreshes positions every five seconds. Historical API data is
cached for one minute to avoid downloading the full history on every refresh.
Confirmed live orders should appear after the exchange indexes or confirms the
position.

## Checks

```bash
.venv/bin/pytest
npm run check --prefix position-service
```

The Node service binds only to `127.0.0.1:3001` and exposes read-only
`/health` and `/positions` endpoints.
