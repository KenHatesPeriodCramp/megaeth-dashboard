var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// node_modules/@wcm-inc/sdk/dist/index.js
var index_exports = {};
__export(index_exports, {
  $enum: () => K,
  AggregatedLendingPosition: () => Ie2,
  AggregatedPerpPosition: () => Ee2,
  BigNumber: () => uo,
  BulkAggregatedLendingPosition: () => Ce,
  BulkVaultTokenConfig: () => re,
  DUST_THRESHOLD_BASE: () => Y,
  ERC20: () => ee2,
  EventEmitter: () => w,
  Exchange: () => T2,
  FUNDING_INTERVAL_SEC: () => Vn,
  FundingRateStats: () => pe,
  GaapFund: () => Tt2,
  InMemoryPersistor: () => Oe,
  LendFeeSchedule: () => xe,
  LendMatch: () => q2,
  LendOrderBook: () => he,
  LendingPosition: () => _2,
  Listener: () => L2,
  MAX_RISK_PERCENT: () => X,
  MIN_LENDER_RETENTION: () => W,
  MarkPriceConfig: () => we,
  OrderBookType: () => K2,
  OrderType: () => te,
  PERMILLE_SCALE: () => p,
  PRICE_OR_RATE_PRECISION: () => g,
  PerpOrderBook: () => ge,
  PerpPosition: () => ue,
  PerpTrueUp: () => Be2,
  Portfolio: () => D2,
  PromiseQueue: () => R,
  RouteType: () => V3,
  SIXTEEN_BIT_MASK: () => ke,
  SIXTY_FOUR_BIT_MASK: () => Ne,
  SpotOrderBook: () => le2,
  SwapAggregator: () => U2,
  SwapQuote: () => I2,
  SwapRoute: () => b3,
  SwapRouter: () => S2,
  THIRTY_TWO_BIT_MASK: () => ye,
  TokenType: () => Ht,
  TransactionError: () => fe,
  VaultTokenConfig: () => Q2,
  alignToLotQuantity: () => yn,
  applyLenderHaircut: () => Kn,
  applyRiskAdjustment: () => Wn,
  calcAssetRisk: () => zn,
  calcBorrowerObligation: () => Xn,
  calcBuyFee: () => E,
  calcNav: () => er,
  calcPerpAmountOwed: () => On,
  calcRts22TradeId: () => ce,
  calcSellFee: () => h,
  calcShockPrice: () => or,
  calcSpotOrderFee: () => cn,
  calcTwoHopFee: () => ee,
  clampPriceOrRatePrecision: () => an,
  clampQuantityPrecision: () => xn,
  convertBaseToToken: () => Br,
  convertTokenToBase: () => Rr,
  createAsyncIterator: () => se,
  debounce: () => ae,
  decodeFloat27E4: () => kt,
  decodePrice: () => _r,
  decodeSign: () => bt,
  deepOmit: () => U,
  duration: () => _t,
  encodePrice: () => Ir,
  hasPerpElapsedFundingInterval: () => In,
  iife: () => ut,
  invariant: () => u,
  isBoolean: () => Ie,
  isDivisible: () => $e,
  isDust: () => ur,
  isEqual: () => N,
  isFunction: () => _e,
  isMegaETH: () => ne,
  isNumber: () => De,
  isWebSocketUrl: () => jt,
  match: () => mt,
  merge: () => j,
  nbitmask: () => m,
  omit: () => wt,
  pack: () => Ee,
  scale: () => ze,
  scaleRiskCapped: () => pr,
  sleep: () => le,
  toUnsigned160: () => Nt,
  toUnsigned32: () => dt,
  toUnsigned8: () => Tt,
  unpack: () => Be,
  unpackFundParams: () => yt,
  unscale: () => Ge,
  waitForTransaction: () => jt2
});

// node_modules/@wcm-inc/sdk/dist/chunk-YW7OEO4H.js
import { toBeHex as rn } from "ethers";

// node_modules/@wcm/tools/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  $enum: () => K,
  DUST_THRESHOLD_BASE: () => Y,
  EventEmitter: () => w,
  FUNDING_INTERVAL_SEC: () => Vn,
  MAX_RISK_PERCENT: () => X,
  MIN_LENDER_RETENTION: () => W,
  PERMILLE_SCALE: () => p,
  PRICE_OR_RATE_PRECISION: () => g,
  PromiseQueue: () => R,
  SIXTEEN_BIT_MASK: () => ke,
  SIXTY_FOUR_BIT_MASK: () => Ne,
  THIRTY_TWO_BIT_MASK: () => ye,
  alignToLotQuantity: () => yn,
  applyLenderHaircut: () => Kn,
  applyRiskAdjustment: () => Wn,
  calcAssetRisk: () => zn,
  calcBorrowerObligation: () => Xn,
  calcBuyFee: () => E,
  calcNav: () => er,
  calcPerpAmountOwed: () => On,
  calcSellFee: () => h,
  calcShockPrice: () => or,
  calcSpotOrderFee: () => cn,
  calcTwoHopFee: () => ee,
  clampPriceOrRatePrecision: () => an,
  clampQuantityPrecision: () => xn,
  convertBaseToToken: () => Br,
  convertTokenToBase: () => Rr,
  createAsyncIterator: () => se,
  debounce: () => ae,
  decodeFloat27E4: () => kt,
  decodePrice: () => _r,
  decodeSign: () => bt,
  deepOmit: () => U,
  duration: () => _t,
  encodePrice: () => Ir,
  hasPerpElapsedFundingInterval: () => In,
  iife: () => ut,
  invariant: () => u,
  isBoolean: () => Ie,
  isDivisible: () => $e,
  isDust: () => ur,
  isEqual: () => N,
  isFunction: () => _e,
  isMegaETH: () => ne,
  isNumber: () => De,
  isWebSocketUrl: () => jt,
  match: () => mt,
  merge: () => j,
  nbitmask: () => m,
  omit: () => wt,
  pack: () => Ee,
  scale: () => ze,
  scaleRiskCapped: () => pr,
  sleep: () => le,
  toUnsigned160: () => Nt,
  toUnsigned32: () => dt,
  toUnsigned8: () => Tt,
  unpack: () => Be,
  unscale: () => Ge
});
__reExport(dist_exports, bignumber_star);
import * as bignumber_star from "bignumber.js";
import y from "bignumber.js";
import O from "bignumber.js";
import f from "bignumber.js";
import k from "bignumber.js";
import I from "bignumber.js";
import b from "bignumber.js";
import P from "bignumber.js";
import $ from "bignumber.js";
import S from "bignumber.js";
import Q from "bignumber.js";
import D from "bignumber.js";
import z from "bignumber.js";
import v from "bignumber.js";
import G from "bignumber.js";
import B from "bignumber.js";
import A from "bignumber.js";
import J from "bignumber.js";
import _ from "bignumber.js";
import Z from "bignumber.js";
var C = Object.defineProperty;
var F = (t2, e2, n3) => e2 in t2 ? C(t2, e2, { enumerable: true, configurable: true, writable: true, value: n3 }) : t2[e2] = n3;
var c = (t2, e2, n3) => F(t2, typeof e2 != "symbol" ? e2 + "" : e2, n3);
var H = [4326, 6342, 6343];
function ne(t2) {
  return t2 == null ? false : H.includes(Number(t2));
}
function se(t2) {
  let { next: e2, init: n3, iterations: r2 = 1 / 0 } = t2, o2 = false, i2 = 0, s2 = null;
  return { next: async (a2) => {
    if (o2 || i2 === r2) return { value: [], done: true };
    i2 === 0 && n3 && (s2 = await n3()), i2++;
    let { value: l2, done: M2 } = await e2({ ...s2, ...a2 });
    return o2 = !!M2, { value: l2, done: !!(i2 === 1 && o2 && l2.length === 0) };
  }, [Symbol.asyncIterator]: function() {
    return this;
  } };
}
function ae(t2, e2) {
  let n3;
  return { debounced: function(...i2) {
    let s2 = () => {
      n3 = void 0, t2.apply(this, i2);
    };
    n3 !== void 0 && clearTimeout(n3), n3 = setTimeout(s2, e2);
  }, cleanup: () => {
    n3 !== void 0 && (clearTimeout(n3), n3 = void 0);
  } };
}
var R = class {
  constructor() {
    c(this, "queue", []);
    c(this, "busy", false);
  }
  push(e2, n3) {
    this.queue.push([e2, n3]), !this.busy && this.run();
  }
  async run() {
    for (this.busy = true; this.queue.length > 0; ) {
      let [e2, n3] = this.queue.shift();
      n3(await e2);
    }
    this.busy = false;
  }
};
function le(t2) {
  return new Promise((e2) => setTimeout(e2, t2));
}
function m(t2) {
  return (1n << BigInt(t2)) - 1n;
}
var Ne = m(64);
var ye = m(32);
var ke = m(16);
function Be(t2, e2) {
  let n3 = new Array(e2.length);
  for (let r2 = e2.length - 1; r2 >= 0; r2--) {
    let o2 = e2[r2];
    n3[r2] = t2 & m(o2), t2 >>= BigInt(o2);
  }
  return n3;
}
function Ee(t2, e2) {
  let n3 = 0n;
  return t2.forEach((r2, o2) => {
    let i2 = e2[o2];
    n3 <<= BigInt(i2), n3 |= BigInt(r2) & m(i2);
  }), n3;
}
function u(t2, e2, n3) {
  if (!t2) throw new Error(`${e2 ?? "Invariant violation"}${n3 ? `
This is an internal error, please report it here: https://github.com/Composite-Labs/frontend/issues` : ""}`);
}
function Ie(t2) {
  return typeof t2 == "boolean";
}
function De(t2) {
  return typeof t2 == "number";
}
function _e(t2) {
  return typeof t2 == "function";
}
function $e(t2, e2) {
  return u(!O(e2).isZero(), "Division by zero", true), O(t2).div(e2).isInteger();
}
function ze(t2, e2) {
  return u(e2 >= 0, "You can only use positive exponent here, to unscale use `unscale` function"), f(t2).multipliedBy(new f(10).pow(e2)).dp(0, 4);
}
function Ge(t2, e2) {
  return f(t2).dividedBy(new f(10).pow(e2));
}
var x = class {
  constructor(e2) {
    this.enumObj = e2;
  }
  getKeys() {
    return Object.keys(this.enumObj).filter((e2) => isNaN(Number(e2)));
  }
  getValues() {
    let e2 = Object.values(this.enumObj);
    return e2.some((n3) => typeof n3 == "number") ? e2.filter((n3) => typeof n3 == "number") : e2;
  }
  asValueOrDefault(e2, n3) {
    return this.getValues().includes(e2) ? e2 : n3;
  }
};
var d = class {
  constructor(e2) {
    this.value = e2;
  }
  with(e2) {
    return e2[this.value];
  }
};
function K(t2) {
  return new x(t2);
}
K.mapValue = (t2) => new d(t2);
var w = class {
  constructor() {
    c(this, "events", /* @__PURE__ */ new Map());
  }
  on(e2, n3) {
    this.events.has(e2) || this.events.set(e2, []), this.events.get(e2).push(n3);
  }
  off(e2, n3) {
    if (!this.events.has(e2)) {
      console.warn("There is no subscription on this event", `
This is an internal error, please report it here: https://github.com/World-Markets-Inc/client/issues`);
      return;
    }
    let r2 = this.events.get(e2), o2 = r2.indexOf(n3);
    o2 > -1 && (r2.splice(o2, 1), this.events.get(e2).length === 0 && this.events.delete(e2));
  }
  emit(e2, n3) {
    if (this.events.has(e2)) for (let r2 of [...this.events.get(e2) || []]) r2(n3);
  }
};
var ut = (t2) => t2();
function mt(t2, e2) {
  return e2[t2] ? e2[t2](t2) : e2.__nomatch?.(t2);
}
function bt(t2, e2) {
  return e2 = BigInt(e2), u(e2 <= 256n, "Bit length exceeds 256"), u(e2 > 0, "Bit length must be greater than 0"), (t2 & 1n << e2 - 1n) !== 0n ? t2 - (1n << e2) : t2;
}
function dt(t2) {
  return Number(t2 & 0xffffffffn);
}
function Tt(t2) {
  return Number(t2 & 0xffn);
}
function Nt(t2) {
  let e2 = (1n << 160n) - 1n;
  return t2 & e2;
}
var T = 4n;
var V = 27n;
var L = T + V;
function kt(t2) {
  let e2 = t2 >> L & 1n, n3 = (1n << V) - 1n, r2 = t2 >> T & n3, o2 = (1n << T) - 1n, i2 = t2 & o2, s2 = r2 * 10n ** i2;
  return e2 === 1n ? -s2 : s2;
}
function N(t2, e2) {
  if (t2 === e2 || typeof t2 == "number" && typeof e2 == "number" && Number.isNaN(t2) && Number.isNaN(e2)) return true;
  if (t2 == null || e2 == null) return t2 === e2;
  if (typeof t2 != typeof e2) return false;
  if (t2 instanceof Date && e2 instanceof Date) {
    let s2 = t2.getTime(), a2 = e2.getTime();
    return Number.isNaN(s2) && Number.isNaN(a2) ? true : s2 === a2;
  }
  if (t2 instanceof RegExp && e2 instanceof RegExp) return t2.source === e2.source && t2.flags === e2.flags;
  if (typeof t2 != "object") return t2 === e2;
  if (Array.isArray(t2) && Array.isArray(e2)) {
    if (t2.length !== e2.length) return false;
    for (let s2 = 0; s2 < t2.length; s2++) if (!N(t2[s2], e2[s2])) return false;
    return true;
  }
  if (Array.isArray(t2) !== Array.isArray(e2)) return false;
  if (t2 instanceof Map && e2 instanceof Map) {
    if (t2.size !== e2.size) return false;
    for (let [s2, a2] of t2) if (!e2.has(s2) || !N(a2, e2.get(s2))) return false;
    return true;
  }
  if (t2 instanceof Set && e2 instanceof Set) {
    if (t2.size !== e2.size) return false;
    for (let s2 of t2) if (!e2.has(s2)) return false;
    return true;
  }
  let n3 = t2, r2 = e2, o2 = Object.keys(n3), i2 = Object.keys(r2);
  if (o2.length !== i2.length) return false;
  for (let s2 of o2) if (!Object.prototype.hasOwnProperty.call(r2, s2) || !N(n3[s2], r2[s2])) return false;
  return true;
}
function j(t2, e2) {
  let n3 = { ...t2 };
  for (let r2 in e2) {
    if (!Object.prototype.hasOwnProperty.call(e2, r2) || e2[r2] === void 0) continue;
    let o2 = t2[r2], i2 = e2[r2];
    typeof o2 == "object" && o2 !== null && !Array.isArray(o2) && typeof i2 == "object" && i2 !== null && !Array.isArray(i2) ? n3[r2] = j(o2, i2) : n3[r2] = i2;
  }
  return n3;
}
function wt(t2, ...e2) {
  let n3 = {};
  for (let r2 of Object.keys(t2)) e2.includes(r2) || (n3[r2] = t2[r2]);
  return n3;
}
function U(t2, ...e2) {
  let n3 = {}, r2 = /* @__PURE__ */ new Set(), o2 = /* @__PURE__ */ new Map();
  for (let i2 of e2) {
    let s2 = i2.indexOf(".");
    if (s2 === -1) r2.add(i2);
    else {
      let a2 = i2.slice(0, s2), l2 = i2.slice(s2 + 1);
      o2.has(a2) || o2.set(a2, []), o2.get(a2).push(l2);
    }
  }
  for (let i2 of Object.keys(t2)) {
    if (r2.has(i2)) continue;
    let s2 = t2[i2];
    o2.has(i2) && typeof s2 == "object" && s2 !== null && !Array.isArray(s2) ? n3[i2] = U(s2, ...o2.get(i2)) : n3[i2] = s2;
  }
  return n3;
}
function _t(t2) {
  let { days: e2 = 0, hours: n3 = 0, minutes: r2 = 0, seconds: o2 = 0, ms: i2 = 0 } = t2;
  return e2 * 24 * 60 * 60 * 1e3 + n3 * 60 * 60 * 1e3 + r2 * 60 * 1e3 + o2 * 1e3 + i2;
}
function jt(t2) {
  return t2.startsWith("ws://") || t2.startsWith("wss://");
}
var g = 2;
function an(t2) {
  return t2 = y(t2), u(t2.gte(0), "Price or interest rate cannot be negative", true), y(t2).dp(g, y.ROUND_DOWN);
}
function cn(t2) {
  let { quantity: e2, takerFeeMultiplier: n3, positionDecimals: r2, fromMaxFee: o2 } = t2;
  return k.min(k(e2).times(n3).dp(r2, k.ROUND_DOWN), o2);
}
function xn(t2, e2) {
  t2 = I(t2), u(t2.gte(0), "Quantity cannot be negative", true), u(e2 >= g, "positionDecimals must be at least PRICE_OR_RATE_PRECISION", true);
  let n3 = Math.min(t2.dp(), e2 - g);
  return t2.dp(n3, I.ROUND_DOWN);
}
function yn(t2, e2) {
  return t2 = b(t2), e2 = b(e2), u(t2.gte(0), "orderQuantity cannot be negative", true), u(e2.gt(0), "minOrderQuantity must be positive", true), b(t2).div(e2).dp(0, b.ROUND_DOWN).times(e2);
}
function On(t2) {
  let { tokenMarkPrice: e2, perpPositionPrice: n3, perpPositionQuantity: r2, perpPositionOwedNom: o2, perpPositionOwedBase: i2 } = t2;
  return P(r2).times(P(e2).minus(n3)).plus(P(o2).times(e2)).plus(i2);
}
var Vn = 28800;
function In(t2) {
  let { currentTimeSec: e2, positionStartTimeSec: n3 } = t2, r2 = Math.floor(e2 / 28800), o2 = Math.floor(n3 / 28800);
  return r2 > o2;
}
var p = 1e3;
var W = 0.05;
function Kn(t2) {
  let { loanLenderQuantity: e2, riskMultiplier: n3, lenderHaircut: r2 } = t2;
  return u(n3 >= 0, "multiplier must be non-negative", true), $(e2).times(Math.max((1e3 - (1e3 - r2) * n3) / 1e3, W));
}
function Wn(t2) {
  let { baseQuantity: e2, riskDeltaPermille: n3, basePositionDecimals: r2 } = t2;
  return u(n3 >= -1e3, "riskDeltaPermille must be >= -1000", true), S(e2).times(1e3 + n3).div(1e3).dp(r2, S.ROUND_DOWN);
}
function zn(t2) {
  let { tokenRiskPricePercent: e2, tokenRiskSlippagePercent: n3 } = t2;
  return Q(e2).plus(n3);
}
var q = 365;
function Xn(t2) {
  let { loanBorrowerQuantity: e2, loanHighestInterestRate: n3, lendDurationDays: r2, tokenPositionDecimals: o2 } = t2, i2 = D(e2), s2 = i2.times(n3).times(r2).div(q).dp(o2, D.ROUND_DOWN);
  return i2.plus(s2);
}
function er(t2) {
  let { spotBalance: e2, tokenMarkPrice: n3, loanAmountLent: r2, loanAmountBorrowed: o2, perpAmountOwed: i2 } = t2;
  return z(e2).plus(r2).minus(o2).times(n3).plus(i2);
}
function or(t2) {
  let { tokenMarkPrice: e2, tokenRiskPricePercent: n3, goHigh: r2 } = t2;
  u(n3 >= 0, "tokenRiskPricePercent must be non-negative", true);
  let o2 = v(n3).div(100);
  return o2 = r2 ? o2 : o2.negated(), o2 = v(e2).times(v(1).plus(o2)), o2;
}
var Y = 25;
function ur({ baseQuantity: t2 }) {
  return G(t2).abs().lt(Y);
}
var X = 100;
function pr(t2) {
  let { riskPercent: e2, riskMultiplier: n3 } = t2;
  return u(e2 >= 0, "risk must be non-negative", true), u(n3 >= 0, "multiplier must be non-negative", true), Math.min(e2 * n3, X);
}
function Br(t2) {
  let { tokenPrice: e2, baseQuantity: n3, tokenPositionDecimals: r2 } = t2;
  return u(B(e2).gt(0), "tokenPrice must be positive", true), B(n3).div(e2).dp(r2, B.ROUND_DOWN);
}
function Rr(t2) {
  let { tokenPrice: e2, tokenQuantity: n3, basePositionDecimals: r2 } = t2;
  return A(e2).times(n3).dp(r2, A.ROUND_DOWN);
}
function Ir(t2) {
  let e2 = J(t2), n3 = e2.dp();
  u(n3 !== null, `Invalid number: ${e2.toString()}`), u(n3 <= 31, `Scale is too high for price ${e2.toString()} at scale ${n3}?`);
  let r2 = BigInt(e2.toFixed().replace(".", "").replace(/^0/, ""));
  return u(r2 <= 1n << 59n, `Mantissa too big for price ${e2.toString()}`), r2 << 5n | BigInt(n3);
}
function _r(t2) {
  let e2 = Number(t2 & m(5)), n3 = _(10).pow(-e2);
  return _((t2 >> 5n).toString()).multipliedBy(n3);
}
function E(t2, e2) {
  return t2.minus(e2);
}
function h(t2, e2, n3) {
  return n3.gt(0) ? t2.minus(e2.div(n3)) : Z(0);
}
function ee(t2) {
  let { firstHop: e2, firstHopMarkPriceAmountOut: n3, secondHop: r2 } = t2, o2 = h(e2.orderQuantity, e2.amountOut, n3), i2 = E(r2.orderQuantity, r2.amountOut), s2 = e2.amountOut.times(r2.amountOut).div(e2.amountIn.times(r2.amountIn));
  return o2.times(s2).plus(i2);
}

// node_modules/ethers-decode-error/dist/index.mjs
import { Result as r, ErrorDescription as e, AbiCoder as n, ErrorFragment as t, Interface as a } from "ethers";
var o;
function i() {
  return i = Object.assign ? Object.assign.bind() : function(r2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n3 = arguments[e2];
      for (var t2 in n3) Object.prototype.hasOwnProperty.call(n3, t2) && (r2[t2] = n3[t2]);
    }
    return r2;
  }, i.apply(this, arguments);
}
function u2(r2, e2) {
  (null == e2 || e2 > r2.length) && (e2 = r2.length);
  for (var n3 = 0, t2 = new Array(e2); n3 < e2; n3++) t2[n3] = r2[n3];
  return t2;
}
!(function(r2) {
  r2.EmptyError = "EmptyError", r2.RevertError = "RevertError", r2.PanicError = "PanicError", r2.CustomError = "CustomError", r2.UserRejectError = "UserRejectError", r2.RpcError = "RpcError", r2.UnknownError = "UnknownError";
})(o || (o = {}));
var c2 = "0x08c379a0";
var s = "0x4e487b71";
var l = function(r2, e2) {
  return r2 && "" !== r2.trim() ? r2 : e2;
};
var d2 = function(n3) {
  var t2 = n3.data, a2 = n3.fragment, o2 = n3.args, u3 = n3.selector, c3 = n3.name, s2 = { type: n3.type, reason: l(n3.reason, null), data: null != t2 ? t2 : null, fragment: null, args: null != o2 ? o2 : new r(), selector: null != u3 ? u3 : null, name: null != c3 ? c3 : null, signature: null };
  return a2 && (s2 = i({}, s2, new e(a2, a2.selector, o2))), s2;
};
var f2 = function(r2) {
  var e2 = r2.data, n3 = r2.name;
  return d2({ type: o.UnknownError, reason: l(r2.reason, "Unknown error"), data: e2, name: n3 });
};
var v2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3) {
    return "0x" === r3;
  }, e2.handle = function(r3) {
    return d2({ type: o.EmptyError, data: { data: r3 }.data });
  }, r2;
})();
var m2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3) {
    return null == r3 ? void 0 : r3.startsWith(c2);
  }, e2.handle = function(r3) {
    var e3, a2 = r3.slice(10), i2 = new n();
    try {
      var u3 = t.from("Error(string)"), c3 = i2.decode(u3.inputs, "0x" + a2);
      return d2({ type: o.RevertError, reason: (e3 = { data: r3, fragment: u3, reason: c3[0], args: c3 }).reason, data: e3.data, fragment: e3.fragment, args: e3.args });
    } catch (e4) {
      return f2({ reason: "Unknown error returned", data: r3 });
    }
  }, r2;
})();
var p2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3) {
    return null == r3 ? void 0 : r3.startsWith(s);
  }, e2.handle = function(r3) {
    var e3, a2 = r3.slice(10), i2 = new n();
    try {
      var u3, c3 = t.from("Panic(uint256)"), s2 = i2.decode(c3.inputs, "0x" + a2), l2 = null != (u3 = (function(r4) {
        switch (r4) {
          case 0x0n:
            return "Generic compiler inserted panic";
          case 0x1n:
            return "Assertion error";
          case 0x11n:
            return "Arithmetic operation underflowed or overflowed outside of an unchecked block";
          case 0x12n:
            return "Division or modulo division by zero";
          case 0x21n:
            return "Tried to convert a value into an enum, but the value was too big or negative";
          case 0x22n:
            return "Incorrectly encoded storage byte array";
          case 0x31n:
            return ".pop() was called on an empty array";
          case 0x32n:
            return "Array accessed at an out-of-bounds or negative index";
          case 0x41n:
            return "Too much memory was allocated, or an array was created that is too large";
          case 0x51n:
            return "Called a zero-initialized variable of internal function type";
        }
      })(s2[0])) ? u3 : "Unknown panic code";
      return d2({ type: o.PanicError, reason: (e3 = { data: r3, fragment: c3, reason: l2, args: s2 }).reason, data: e3.data, args: e3.args });
    } catch (e4) {
      return f2({ reason: "Unknown panic error", data: r3 });
    }
  }, r2;
})();
var g2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3) {
    return r3 && "0x" !== r3 && !(null != r3 && r3.startsWith(c2)) && !(null != r3 && r3.startsWith(s));
  }, e2.handle = function(r3, e3) {
    var n3 = e3.errorInterface, t2 = { data: r3 };
    if (n3) {
      var a2 = n3.parseError(r3);
      a2 && (t2 = i({}, t2, { fragment: a2.fragment, reason: a2.name, args: a2.args }));
    }
    return (function(r4) {
      var e4 = r4.data, n4 = r4.reason, t3 = r4.fragment, a3 = r4.args, i2 = e4.slice(0, 10);
      return d2({ type: o.CustomError, reason: l(n4, "No ABI for custom error " + i2), data: e4, fragment: t3, args: a3, selector: i2, name: i2 });
    })(t2);
  }, r2;
})();
var y2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3, e3) {
    var n3;
    return !r3 && (null == e3 || null == (n3 = e3.message) ? void 0 : n3.includes("rejected transaction"));
  }, e2.handle = function(r3, e3) {
    var n3, t2, a2, i2;
    return i2 = void 0 === (a2 = (t2 = { data: null, reason: null != (n3 = e3.error.message) ? n3 : "The transaction was rejected" }).data) ? null : a2, d2({ type: o.UserRejectError, reason: l(t2.reason, "User has rejected the transaction"), data: i2 });
  }, r2;
})();
var h2 = /* @__PURE__ */ (function() {
  function r2() {
  }
  var e2 = r2.prototype;
  return e2.predicate = function(r3, e3) {
    var n3;
    return !r3 && e3.message && !(null != e3 && null != (n3 = e3.message) && n3.includes("rejected transaction")) && void 0 !== e3.code;
  }, e2.handle = function(r3, e3) {
    var n3, t2, a2, i2, u3, c3, s2, f3 = e3.error, v5 = null != (n3 = null != (t2 = null == (a2 = f3.info) || null == (i2 = a2.error) ? void 0 : i2.message) ? t2 : f3.shortMessage) ? n3 : f3.message;
    return s2 = (u3 = { data: null, name: f3.code, reason: v5 }).name, d2({ type: o.RpcError, reason: l(u3.reason, "Error from JSON RPC provider"), data: null, name: null != (c3 = null == s2 ? void 0 : s2.toString()) ? c3 : null });
  }, r2;
})();
var E2 = /* @__PURE__ */ (function() {
  function r2(r3, e3) {
    this.errorInterface = void 0, this.errorHandlers = [], this.errorInterface = e3, this.errorHandlers = r3.map(function(r4) {
      return { predicate: r4.predicate, handle: r4.handle };
    });
  }
  var e2 = r2.prototype;
  return e2.getContractOrTransactionError = function(r3) {
    try {
      var e3 = r3.receipt;
      return e3 ? Promise.resolve(this.getTransactionError(e3)).then(function(e4) {
        return e4 || r3;
      }) : Promise.resolve(r3);
    } catch (r4) {
      return Promise.reject(r4);
    }
  }, e2.getTransactionError = function(r3) {
    try {
      if (!r3 || 0 !== r3.status) return Promise.resolve(void 0);
      var e3 = r3.provider;
      return Promise.resolve(e3.getTransaction(r3.hash)).then(function(r4) {
        return (function(n3, t2) {
          try {
            var a2 = Promise.resolve(e3.call(i({}, r4, { maxFeePerGas: void 0, maxPriorityFeePerGas: void 0 }))).then(function() {
              return null;
            });
          } catch (r5) {
            return r5;
          }
          return a2 && a2.then ? a2.then(void 0, function(r5) {
            return r5;
          }) : a2;
        })();
      });
    } catch (r4) {
      return Promise.reject(r4);
    }
  }, e2.getDataFromError = function(r3) {
    var e3, n3, t2 = null != (e3 = r3.data) ? e3 : null == (n3 = r3.error) ? void 0 : n3.data;
    if (void 0 !== t2) {
      var a2 = "string" == typeof t2 ? t2 : t2.data;
      if ("object" == typeof a2 && a2.data && (a2 = a2.data), void 0 !== a2 && "string" == typeof a2) return a2;
    }
  }, e2.decode = function(r3) {
    try {
      var e3, n3 = this;
      return r3 instanceof Error ? Promise.resolve(n3.getContractOrTransactionError(r3)).then(function(r4) {
        for (var e4, t2, a2 = n3.getDataFromError(r4), o2 = (function(r5, e5) {
          var n4 = "undefined" != typeof Symbol && r5[Symbol.iterator] || r5["@@iterator"];
          if (n4) return (n4 = n4.call(r5)).next.bind(n4);
          if (Array.isArray(r5) || (n4 = (function(r6, e6) {
            if (r6) {
              if ("string" == typeof r6) return u2(r6, e6);
              var n5 = Object.prototype.toString.call(r6).slice(8, -1);
              return "Object" === n5 && r6.constructor && (n5 = r6.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(r6) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? u2(r6, e6) : void 0;
            }
          })(r5))) {
            n4 && (r5 = n4);
            var t3 = 0;
            return function() {
              return t3 >= r5.length ? { done: true } : { done: false, value: r5[t3++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })(n3.errorHandlers); !(t2 = o2()).done; ) {
          var i2 = t2.value, c3 = i2.handle;
          if ((0, i2.predicate)(a2, r4)) return c3(a2, { errorInterface: n3.errorInterface, error: r4 });
        }
        return f2({ data: a2, reason: null != (e4 = null == r4 ? void 0 : r4.message) ? e4 : "Unexpected error", name: null == r4 ? void 0 : r4.name });
      }) : Promise.resolve(f2({ data: void 0, reason: null != (e3 = r3.message) ? e3 : "Invalid error" }));
    } catch (r4) {
      return Promise.reject(r4);
    }
  }, r2.create = function(e3, n3) {
    void 0 === n3 && (n3 = {});
    var o2, i2 = n3.additionalErrorHandlers;
    if (e3) {
      var u3 = e3.flatMap(function(r3) {
        return r3 instanceof a ? r3.fragments.filter(function(r4) {
          return t.isFragment(r4);
        }) : r3.filter(function(r4) {
          return "error" === r4.type || t.isFragment(r4);
        });
      });
      o2 = new a(u3);
    }
    return new r2([new v2(), new m2(), new p2(), new g2(), new y2(), new h2()].concat(null != i2 ? i2 : []), o2);
  }, r2;
})();

// node_modules/@composite/abi/generated/index.js
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var factories_exports = {};
__export2(factories_exports, {
  CompositeExchangeAbi__factory: () => CompositeExchangeAbi__factory,
  CompositeExchangeAdminAbi__factory: () => CompositeExchangeAdminAbi__factory,
  CompositeExchangeBulkAbi__factory: () => CompositeExchangeBulkAbi__factory,
  CompositeExchangeExtAbi__factory: () => CompositeExchangeExtAbi__factory,
  CompositeExchangeReadOnlyAbi__factory: () => CompositeExchangeReadOnlyAbi__factory,
  CompositeExchangeUserAbi__factory: () => CompositeExchangeUserAbi__factory,
  ERC20Abi__factory: () => ERC20Abi__factory,
  ExchangeErrorsAbi__factory: () => ExchangeErrorsAbi__factory,
  FuncVariationAbi__factory: () => FuncVariationAbi__factory,
  GaapFundAbi__factory: () => GaapFundAbi__factory,
  GenericErc20Abi__factory: () => GenericErc20Abi__factory,
  IChainLinkV3Abi__factory: () => IChainLinkV3Abi__factory,
  ICompExchForBooksAbi__factory: () => ICompExchForBooksAbi__factory,
  ICompositeExchangeAdminAbi__factory: () => ICompositeExchangeAdminAbi__factory,
  ICompositeExchangeBulkAbi__factory: () => ICompositeExchangeBulkAbi__factory,
  ICompositeExchangeFullAbi__factory: () => ICompositeExchangeFullAbi__factory,
  ICompositeExchangePubAbi__factory: () => ICompositeExchangePubAbi__factory,
  ICompositeExchangeReadOnlyAbi__factory: () => ICompositeExchangeReadOnlyAbi__factory,
  ICompositeExchangeTradingAbi__factory: () => ICompositeExchangeTradingAbi__factory,
  ICompositeExchangeUserAbi__factory: () => ICompositeExchangeUserAbi__factory,
  ICompositeInternalAbi__factory: () => ICompositeInternalAbi__factory,
  IERC20Abi__factory: () => IERC20Abi__factory,
  IERC20MetadataAbi__factory: () => IERC20MetadataAbi__factory,
  IGaapFundAbi__factory: () => IGaapFundAbi__factory,
  IGaapFundManagerAbi__factory: () => IGaapFundManagerAbi__factory,
  ILendBookForExchAbi__factory: () => ILendBookForExchAbi__factory,
  ILendOrderBookAbi__factory: () => ILendOrderBookAbi__factory,
  IMulticall3Abi__factory: () => IMulticall3Abi__factory,
  INavComputeAbi__factory: () => INavComputeAbi__factory,
  IOrderBookAbstractAbi__factory: () => IOrderBookAbstractAbi__factory,
  IPriceHelperAbi__factory: () => IPriceHelperAbi__factory,
  ISpotOrderBookAbi__factory: () => ISpotOrderBookAbi__factory,
  ISwapRouterAbi__factory: () => ISwapRouterAbi__factory,
  ITradeCheckerAbi__factory: () => ITradeCheckerAbi__factory,
  ITwoTokenBookForExchAbi__factory: () => ITwoTokenBookForExchAbi__factory,
  IWcmPriceAbi__factory: () => IWcmPriceAbi__factory,
  LendOrderBookAbi__factory: () => LendOrderBookAbi__factory,
  LendingNavComputeAbi__factory: () => LendingNavComputeAbi__factory,
  LendingTradeCheckerAbi__factory: () => LendingTradeCheckerAbi__factory,
  LiquidationHelperAbi__factory: () => LiquidationHelperAbi__factory,
  MockChainLinkOracleAbi__factory: () => MockChainLinkOracleAbi__factory,
  MockIChainLinkV3Abi__factory: () => MockIChainLinkV3Abi__factory,
  Multicall3Abi__factory: () => Multicall3Abi__factory,
  NativeWrapperErc20Abi__factory: () => NativeWrapperErc20Abi__factory,
  OhlcStoreAbi__factory: () => OhlcStoreAbi__factory,
  OrderBookAbstractAbi__factory: () => OrderBookAbstractAbi__factory,
  OwnableAbi__factory: () => OwnableAbi__factory,
  PerpOrderBookAbi__factory: () => PerpOrderBookAbi__factory,
  PriceHelperAbi__factory: () => PriceHelperAbi__factory,
  ProxyAbi__factory: () => ProxyAbi__factory,
  SpotOrderBookAbi__factory: () => SpotOrderBookAbi__factory,
  SwapErrorsAbi__factory: () => SwapErrorsAbi__factory,
  SwapRouterAbi__factory: () => SwapRouterAbi__factory,
  TwoTokenOrderBookAbi__factory: () => TwoTokenOrderBookAbi__factory,
  UpgradableExchangeAbi__factory: () => UpgradableExchangeAbi__factory,
  UpgradableFundAbi__factory: () => UpgradableFundAbi__factory
});
var version = "6.16.0";
function checkType(value, type, name) {
  const types = type.split("|").map((t2) => t2.trim());
  for (let i2 = 0; i2 < types.length; i2++) {
    switch (type) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof value === type) {
          return;
        }
    }
  }
  const error = new Error(`invalid value for type ${type}`);
  error.code = "INVALID_ARGUMENT";
  error.argument = `value.${name}`;
  error.value = value;
  throw error;
}
async function resolveProperties(value) {
  const keys = Object.keys(value);
  const results = await Promise.all(keys.map((k2) => Promise.resolve(value[k2])));
  return results.reduce((accum, v5, index) => {
    accum[keys[index]] = v5;
    return accum;
  }, {});
}
function defineProperties(target, values, types) {
  for (let key in values) {
    let value = values[key];
    const type = types ? types[key] : null;
    if (type) {
      checkType(value, type, key);
    }
    Object.defineProperty(target, key, { enumerable: true, value, writable: false });
  }
}
function stringify(value, seen) {
  if (value == null) {
    return "null";
  }
  if (seen == null) {
    seen = /* @__PURE__ */ new Set();
  }
  if (typeof value === "object") {
    if (seen.has(value)) {
      return "[Circular]";
    }
    seen.add(value);
  }
  if (Array.isArray(value)) {
    return "[ " + value.map((v5) => stringify(v5, seen)).join(", ") + " ]";
  }
  if (value instanceof Uint8Array) {
    const HEX = "0123456789abcdef";
    let result = "0x";
    for (let i2 = 0; i2 < value.length; i2++) {
      result += HEX[value[i2] >> 4];
      result += HEX[value[i2] & 15];
    }
    return result;
  }
  if (typeof value === "object" && typeof value.toJSON === "function") {
    return stringify(value.toJSON(), seen);
  }
  switch (typeof value) {
    case "boolean":
    case "number":
    case "symbol":
      return value.toString();
    case "bigint":
      return BigInt(value).toString();
    case "string":
      return JSON.stringify(value);
    case "object": {
      const keys = Object.keys(value);
      keys.sort();
      return "{ " + keys.map((k2) => `${stringify(k2, seen)}: ${stringify(value[k2], seen)}`).join(", ") + " }";
    }
  }
  return `[ COULD NOT SERIALIZE ]`;
}
function isError(error, code) {
  return error && error.code === code;
}
function isCallException(error) {
  return isError(error, "CALL_EXCEPTION");
}
function makeError(message, code, info) {
  let shortMessage = message;
  {
    const details = [];
    if (info) {
      if ("message" in info || "code" in info || "name" in info) {
        throw new Error(`value will overwrite populated values: ${stringify(info)}`);
      }
      for (const key in info) {
        if (key === "shortMessage") {
          continue;
        }
        const value = info[key];
        details.push(key + "=" + stringify(value));
      }
    }
    details.push(`code=${code}`);
    details.push(`version=${version}`);
    if (details.length) {
      message += " (" + details.join(", ") + ")";
    }
  }
  let error;
  switch (code) {
    case "INVALID_ARGUMENT":
      error = new TypeError(message);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      error = new RangeError(message);
      break;
    default:
      error = new Error(message);
  }
  defineProperties(error, { code });
  if (info) {
    Object.assign(error, info);
  }
  if (error.shortMessage == null) {
    defineProperties(error, { shortMessage });
  }
  return error;
}
function assert(check, message, code, info) {
  if (!check) {
    throw makeError(message, code, info);
  }
}
function assertArgument(check, message, name, value) {
  assert(check, message, "INVALID_ARGUMENT", { argument: name, value });
}
function assertArgumentCount(count, expectedCount, message) {
  if (message == null) {
    message = "";
  }
  if (message) {
    message = ": " + message;
  }
  assert(count >= expectedCount, "missing argument" + message, "MISSING_ARGUMENT", {
    count,
    expectedCount
  });
  assert(count <= expectedCount, "too many arguments" + message, "UNEXPECTED_ARGUMENT", {
    count,
    expectedCount
  });
}
var _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
  try {
    if ("test".normalize(form) !== "test") {
      throw new Error("bad");
    }
    ;
    if (form === "NFD") {
      const check = String.fromCharCode(233).normalize("NFD");
      const expected = String.fromCharCode(101, 769);
      if (check !== expected) {
        throw new Error("broken");
      }
    }
    accum.push(form);
  } catch (error) {
  }
  return accum;
}, []);
function assertNormalize(form) {
  assert(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form }
  });
}
function assertPrivate(givenGuard, guard, className) {
  if (className == null) {
    className = "";
  }
  if (givenGuard !== guard) {
    let method = className, operation = "new";
    if (className) {
      method += ".";
      operation += " " + className;
    }
    assert(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
      operation
    });
  }
}
function _getBytes(value, name, copy) {
  if (value instanceof Uint8Array) {
    if (copy) {
      return new Uint8Array(value);
    }
    return value;
  }
  if (typeof value === "string" && value.length % 2 === 0 && value.match(/^0x[0-9a-f]*$/i)) {
    const result = new Uint8Array((value.length - 2) / 2);
    let offset = 2;
    for (let i2 = 0; i2 < result.length; i2++) {
      result[i2] = parseInt(value.substring(offset, offset + 2), 16);
      offset += 2;
    }
    return result;
  }
  assertArgument(false, "invalid BytesLike value", name || "value", value);
}
function getBytes(value, name) {
  return _getBytes(value, name, false);
}
function getBytesCopy(value, name) {
  return _getBytes(value, name, true);
}
function isHexString(value, length) {
  if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (typeof length === "number" && value.length !== 2 + 2 * length) {
    return false;
  }
  if (length === true && value.length % 2 !== 0) {
    return false;
  }
  return true;
}
function isBytesLike(value) {
  return isHexString(value, true) || value instanceof Uint8Array;
}
var HexCharacters = "0123456789abcdef";
function hexlify(data) {
  const bytes2 = getBytes(data);
  let result = "0x";
  for (let i2 = 0; i2 < bytes2.length; i2++) {
    const v5 = bytes2[i2];
    result += HexCharacters[(v5 & 240) >> 4] + HexCharacters[v5 & 15];
  }
  return result;
}
function concat(datas) {
  return "0x" + datas.map((d3) => hexlify(d3).substring(2)).join("");
}
function dataSlice(data, start, end) {
  const bytes2 = getBytes(data);
  if (end != null && end > bytes2.length) {
    assert(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: bytes2,
      length: bytes2.length,
      offset: end
    });
  }
  return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
}
function zeroPad(data, length, left) {
  const bytes2 = getBytes(data);
  assert(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(bytes2),
    length,
    offset: length + 1
  });
  const result = new Uint8Array(length);
  result.fill(0);
  if (left) {
    result.set(bytes2, length - bytes2.length);
  } else {
    result.set(bytes2, 0);
  }
  return hexlify(result);
}
function zeroPadValue(data, length) {
  return zeroPad(data, length, true);
}
function zeroPadBytes(data, length) {
  return zeroPad(data, length, false);
}
var BN_0 = BigInt(0);
var BN_1 = BigInt(1);
var maxValue = 9007199254740991;
function fromTwos(_value, _width) {
  const value = getUint(_value, "value");
  const width = BigInt(getNumber(_width, "width"));
  assert(value >> width === BN_0, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: _value
  });
  if (value >> width - BN_1) {
    const mask2 = (BN_1 << width) - BN_1;
    return -((~value & mask2) + BN_1);
  }
  return value;
}
function toTwos(_value, _width) {
  let value = getBigInt(_value, "value");
  const width = BigInt(getNumber(_width, "width"));
  const limit = BN_1 << width - BN_1;
  if (value < BN_0) {
    value = -value;
    assert(value <= limit, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value
    });
    const mask2 = (BN_1 << width) - BN_1;
    return (~value & mask2) + BN_1;
  } else {
    assert(value < limit, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value
    });
  }
  return value;
}
function mask(_value, _bits) {
  const value = getUint(_value, "value");
  const bits = BigInt(getNumber(_bits, "bits"));
  return value & (BN_1 << bits) - BN_1;
}
function getBigInt(value, name) {
  switch (typeof value) {
    case "bigint":
      return value;
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return BigInt(value);
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        if (value[0] === "-" && value[1] !== "-") {
          return -BigInt(value.substring(1));
        }
        return BigInt(value);
      } catch (e2) {
        assertArgument(false, `invalid BigNumberish string: ${e2.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid BigNumberish value", name || "value", value);
}
function getUint(value, name) {
  const result = getBigInt(value, name);
  assert(result >= BN_0, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value
  });
  return result;
}
var Nibbles = "0123456789abcdef";
function toBigInt(value) {
  if (value instanceof Uint8Array) {
    let result = "0x0";
    for (const v5 of value) {
      result += Nibbles[v5 >> 4];
      result += Nibbles[v5 & 15];
    }
    return BigInt(result);
  }
  return getBigInt(value);
}
function getNumber(value, name) {
  switch (typeof value) {
    case "bigint":
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return Number(value);
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return value;
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        return getNumber(BigInt(value), name);
      } catch (e2) {
        assertArgument(false, `invalid numeric string: ${e2.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid numeric value", name || "value", value);
}
function toNumber(value) {
  return getNumber(toBigInt(value));
}
function toBeHex(_value, _width) {
  const value = getUint(_value, "value");
  let result = value.toString(16);
  if (_width == null) {
    if (result.length % 2) {
      result = "0" + result;
    }
  } else {
    const width = getNumber(_width, "width");
    if (width === 0 && value === BN_0) {
      return "0x";
    }
    assert(width * 2 >= result.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: _value
    });
    while (result.length < width * 2) {
      result = "0" + result;
    }
  }
  return "0x" + result;
}
function toBeArray(_value, _width) {
  const value = getUint(_value, "value");
  if (value === BN_0) {
    const width = _width != null ? getNumber(_width, "width") : 0;
    return new Uint8Array(width);
  }
  let hex = value.toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }
  if (_width != null) {
    const width = getNumber(_width, "width");
    while (hex.length < width * 2) {
      hex = "00" + hex;
    }
    assert(width * 2 === hex.length, `value exceeds width (${width} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeArray",
      fault: "overflow",
      value: _value
    });
  }
  const result = new Uint8Array(hex.length / 2);
  for (let i2 = 0; i2 < result.length; i2++) {
    const offset = i2 * 2;
    result[i2] = parseInt(hex.substring(offset, offset + 2), 16);
  }
  return result;
}
var EventPayload = class {
  /**
   *  The event filter.
   */
  filter;
  /**
   *  The **EventEmitterable**.
   */
  emitter;
  #listener;
  /**
   *  Create a new **EventPayload** for %%emitter%% with
   *  the %%listener%% and for %%filter%%.
   */
  constructor(emitter, listener, filter) {
    this.#listener = listener;
    defineProperties(this, { emitter, filter });
  }
  /**
   *  Unregister the triggered listener for future events.
   */
  async removeListener() {
    if (this.#listener == null) {
      return;
    }
    await this.emitter.off(this.filter, this.#listener);
  }
};
function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
  assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
}
function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
    let i2 = 0;
    for (let o2 = offset + 1; o2 < bytes2.length; o2++) {
      if (bytes2[o2] >> 6 !== 2) {
        break;
      }
      i2++;
    }
    return i2;
  }
  if (reason === "OVERRUN") {
    return bytes2.length - offset - 1;
  }
  return 0;
}
function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "OVERLONG") {
    assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
    output2.push(badCodepoint);
    return 0;
  }
  output2.push(65533);
  return ignoreFunc(reason, offset, bytes2, output2, badCodepoint);
}
var Utf8ErrorFuncs = Object.freeze({
  error: errorFunc,
  ignore: ignoreFunc,
  replace: replaceFunc
});
function getUtf8CodePoints(_bytes, onError) {
  if (onError == null) {
    onError = Utf8ErrorFuncs.error;
  }
  const bytes2 = getBytes(_bytes, "bytes");
  const result = [];
  let i2 = 0;
  while (i2 < bytes2.length) {
    const c3 = bytes2[i2++];
    if (c3 >> 7 === 0) {
      result.push(c3);
      continue;
    }
    let extraLength = null;
    let overlongMask = null;
    if ((c3 & 224) === 192) {
      extraLength = 1;
      overlongMask = 127;
    } else if ((c3 & 240) === 224) {
      extraLength = 2;
      overlongMask = 2047;
    } else if ((c3 & 248) === 240) {
      extraLength = 3;
      overlongMask = 65535;
    } else {
      if ((c3 & 192) === 128) {
        i2 += onError("UNEXPECTED_CONTINUE", i2 - 1, bytes2, result);
      } else {
        i2 += onError("BAD_PREFIX", i2 - 1, bytes2, result);
      }
      continue;
    }
    if (i2 - 1 + extraLength >= bytes2.length) {
      i2 += onError("OVERRUN", i2 - 1, bytes2, result);
      continue;
    }
    let res = c3 & (1 << 8 - extraLength - 1) - 1;
    for (let j2 = 0; j2 < extraLength; j2++) {
      let nextChar = bytes2[i2];
      if ((nextChar & 192) != 128) {
        i2 += onError("MISSING_CONTINUE", i2, bytes2, result);
        res = null;
        break;
      }
      ;
      res = res << 6 | nextChar & 63;
      i2++;
    }
    if (res === null) {
      continue;
    }
    if (res > 1114111) {
      i2 += onError("OUT_OF_RANGE", i2 - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res >= 55296 && res <= 57343) {
      i2 += onError("UTF16_SURROGATE", i2 - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res <= overlongMask) {
      i2 += onError("OVERLONG", i2 - 1 - extraLength, bytes2, result, res);
      continue;
    }
    result.push(res);
  }
  return result;
}
function toUtf8Bytes(str, form) {
  assertArgument(typeof str === "string", "invalid string value", "str", str);
  if (form != null) {
    assertNormalize(form);
    str = str.normalize(form);
  }
  let result = [];
  for (let i2 = 0; i2 < str.length; i2++) {
    const c3 = str.charCodeAt(i2);
    if (c3 < 128) {
      result.push(c3);
    } else if (c3 < 2048) {
      result.push(c3 >> 6 | 192);
      result.push(c3 & 63 | 128);
    } else if ((c3 & 64512) == 55296) {
      i2++;
      const c22 = str.charCodeAt(i2);
      assertArgument(i2 < str.length && (c22 & 64512) === 56320, "invalid surrogate pair", "str", str);
      const pair = 65536 + ((c3 & 1023) << 10) + (c22 & 1023);
      result.push(pair >> 18 | 240);
      result.push(pair >> 12 & 63 | 128);
      result.push(pair >> 6 & 63 | 128);
      result.push(pair & 63 | 128);
    } else {
      result.push(c3 >> 12 | 224);
      result.push(c3 >> 6 & 63 | 128);
      result.push(c3 & 63 | 128);
    }
  }
  return new Uint8Array(result);
}
function _toUtf8String(codePoints) {
  return codePoints.map((codePoint) => {
    if (codePoint <= 65535) {
      return String.fromCharCode(codePoint);
    }
    codePoint -= 65536;
    return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
  }).join("");
}
function toUtf8String(bytes2, onError) {
  return _toUtf8String(getUtf8CodePoints(bytes2, onError));
}
var WordSize = 32;
var Padding = new Uint8Array(WordSize);
var passProperties = ["then"];
var _guard = {};
var resultNames = /* @__PURE__ */ new WeakMap();
function getNames(result) {
  return resultNames.get(result);
}
function setNames(result, names) {
  resultNames.set(result, names);
}
function throwError(name, error) {
  const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
  wrapped.error = error;
  throw wrapped;
}
function toObject(names, items, deep) {
  if (names.indexOf(null) >= 0) {
    return items.map((item, index) => {
      if (item instanceof Result) {
        return toObject(getNames(item), item, deep);
      }
      return item;
    });
  }
  return names.reduce((accum, name, index) => {
    let item = items.getValue(name);
    if (!(name in accum)) {
      if (deep && item instanceof Result) {
        item = toObject(getNames(item), item, deep);
      }
      accum[name] = item;
    }
    return accum;
  }, {});
}
var Result = class _Result extends Array {
  // No longer used; but cannot be removed as it will remove the
  // #private field from the .d.ts which may break backwards
  // compatibility
  #names;
  /**
   *  @private
   */
  constructor(...args) {
    const guard = args[0];
    let items = args[1];
    let names = (args[2] || []).slice();
    let wrap = true;
    if (guard !== _guard) {
      items = args;
      names = [];
      wrap = false;
    }
    super(items.length);
    items.forEach((item, index) => {
      this[index] = item;
    });
    const nameCounts = names.reduce((accum, name) => {
      if (typeof name === "string") {
        accum.set(name, (accum.get(name) || 0) + 1);
      }
      return accum;
    }, /* @__PURE__ */ new Map());
    setNames(this, Object.freeze(items.map((item, index) => {
      const name = names[index];
      if (name != null && nameCounts.get(name) === 1) {
        return name;
      }
      return null;
    })));
    this.#names = [];
    if (this.#names == null) {
      void this.#names;
    }
    if (!wrap) {
      return;
    }
    Object.freeze(this);
    const proxy = new Proxy(this, {
      get: (target, prop, receiver) => {
        if (typeof prop === "string") {
          if (prop.match(/^[0-9]+$/)) {
            const index = getNumber(prop, "%index");
            if (index < 0 || index >= this.length) {
              throw new RangeError("out of result range");
            }
            const item = target[index];
            if (item instanceof Error) {
              throwError(`index ${index}`, item);
            }
            return item;
          }
          if (passProperties.indexOf(prop) >= 0) {
            return Reflect.get(target, prop, receiver);
          }
          const value = target[prop];
          if (value instanceof Function) {
            return function(...args2) {
              return value.apply(this === receiver ? target : this, args2);
            };
          } else if (!(prop in target)) {
            return target.getValue.apply(this === receiver ? target : this, [prop]);
          }
        }
        return Reflect.get(target, prop, receiver);
      }
    });
    setNames(proxy, getNames(this));
    return proxy;
  }
  /**
   *  Returns the Result as a normal Array. If %%deep%%, any children
   *  which are Result objects are also converted to a normal Array.
   *
   *  This will throw if there are any outstanding deferred
   *  errors.
   */
  toArray(deep) {
    const result = [];
    this.forEach((item, index) => {
      if (item instanceof Error) {
        throwError(`index ${index}`, item);
      }
      if (deep && item instanceof _Result) {
        item = item.toArray(deep);
      }
      result.push(item);
    });
    return result;
  }
  /**
   *  Returns the Result as an Object with each name-value pair. If
   *  %%deep%%, any children which are Result objects are also
   *  converted to an Object.
   *
   *  This will throw if any value is unnamed, or if there are
   *  any outstanding deferred errors.
   */
  toObject(deep) {
    const names = getNames(this);
    return names.reduce((accum, name, index) => {
      assert(name != null, `value at index ${index} unnamed`, "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      });
      return toObject(names, this, deep);
    }, {});
  }
  /**
   *  @_ignore
   */
  slice(start, end) {
    if (start == null) {
      start = 0;
    }
    if (start < 0) {
      start += this.length;
      if (start < 0) {
        start = 0;
      }
    }
    if (end == null) {
      end = this.length;
    }
    if (end < 0) {
      end += this.length;
      if (end < 0) {
        end = 0;
      }
    }
    if (end > this.length) {
      end = this.length;
    }
    const _names = getNames(this);
    const result = [], names = [];
    for (let i2 = start; i2 < end; i2++) {
      result.push(this[i2]);
      names.push(_names[i2]);
    }
    return new _Result(_guard, result, names);
  }
  /**
   *  @_ignore
   */
  filter(callback, thisArg) {
    const _names = getNames(this);
    const result = [], names = [];
    for (let i2 = 0; i2 < this.length; i2++) {
      const item = this[i2];
      if (item instanceof Error) {
        throwError(`index ${i2}`, item);
      }
      if (callback.call(thisArg, item, i2, this)) {
        result.push(item);
        names.push(_names[i2]);
      }
    }
    return new _Result(_guard, result, names);
  }
  /**
   *  @_ignore
   */
  map(callback, thisArg) {
    const result = [];
    for (let i2 = 0; i2 < this.length; i2++) {
      const item = this[i2];
      if (item instanceof Error) {
        throwError(`index ${i2}`, item);
      }
      result.push(callback.call(thisArg, item, i2, this));
    }
    return result;
  }
  /**
   *  Returns the value for %%name%%.
   *
   *  Since it is possible to have a key whose name conflicts with
   *  a method on a [[Result]] or its superclass Array, or any
   *  JavaScript keyword, this ensures all named values are still
   *  accessible by name.
   */
  getValue(name) {
    const index = getNames(this).indexOf(name);
    if (index === -1) {
      return void 0;
    }
    const value = this[index];
    if (value instanceof Error) {
      throwError(`property ${JSON.stringify(name)}`, value.error);
    }
    return value;
  }
  /**
   *  Creates a new [[Result]] for %%items%% with each entry
   *  also accessible by its corresponding name in %%keys%%.
   */
  static fromItems(items, keys) {
    return new _Result(_guard, items, keys);
  }
};
function getValue(value) {
  let bytes2 = toBeArray(value);
  assert(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
  if (bytes2.length !== WordSize) {
    bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
  }
  return bytes2;
}
var Coder = class {
  // The coder name:
  //   - address, uint256, tuple, array, etc.
  name;
  // The fully expanded type, including composite types:
  //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
  type;
  // The localName bound in the signature, in this example it is "baz":
  //   - tuple(address foo, uint bar) baz
  localName;
  // Whether this type is dynamic:
  //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
  //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
  dynamic;
  constructor(name, type, localName, dynamic) {
    defineProperties(this, { name, type, localName, dynamic }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(message, value) {
    assertArgument(false, message, this.localName, value);
  }
};
var Writer = class {
  // An array of WordSize lengthed objects to concatenation
  #data;
  #dataLength;
  constructor() {
    this.#data = [];
    this.#dataLength = 0;
  }
  get data() {
    return concat(this.#data);
  }
  get length() {
    return this.#dataLength;
  }
  #writeData(data) {
    this.#data.push(data);
    this.#dataLength += data.length;
    return data.length;
  }
  appendWriter(writer) {
    return this.#writeData(getBytesCopy(writer.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(value) {
    let bytes2 = getBytesCopy(value);
    const paddingOffset = bytes2.length % WordSize;
    if (paddingOffset) {
      bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
    }
    return this.#writeData(bytes2);
  }
  // Numeric item; pad on the left *to* WordSize
  writeValue(value) {
    return this.#writeData(getValue(value));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const offset = this.#data.length;
    this.#data.push(Padding);
    this.#dataLength += WordSize;
    return (value) => {
      this.#data[offset] = getValue(value);
    };
  }
};
var Reader = class _Reader {
  // Allows incomplete unpadded data to be read; otherwise an error
  // is raised if attempting to overrun the buffer. This is required
  // to deal with an old Solidity bug, in which event data for
  // external (not public thoguh) was tightly packed.
  allowLoose;
  #data;
  #offset;
  #bytesRead;
  #parent;
  #maxInflation;
  constructor(data, allowLoose, maxInflation) {
    defineProperties(this, { allowLoose: !!allowLoose });
    this.#data = getBytesCopy(data);
    this.#bytesRead = 0;
    this.#parent = null;
    this.#maxInflation = maxInflation != null ? maxInflation : 1024;
    this.#offset = 0;
  }
  get data() {
    return hexlify(this.#data);
  }
  get dataLength() {
    return this.#data.length;
  }
  get consumed() {
    return this.#offset;
  }
  get bytes() {
    return new Uint8Array(this.#data);
  }
  #incrementBytesRead(count) {
    if (this.#parent) {
      return this.#parent.#incrementBytesRead(count);
    }
    this.#bytesRead += count;
    assert(this.#maxInflation < 1 || this.#bytesRead <= this.#maxInflation * this.dataLength, `compressed ABI data exceeds inflation ratio of ${this.#maxInflation} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
      buffer: getBytesCopy(this.#data),
      offset: this.#offset,
      length: count,
      info: {
        bytesRead: this.#bytesRead,
        dataLength: this.dataLength
      }
    });
  }
  #peekBytes(offset, length, loose) {
    let alignedLength = Math.ceil(length / WordSize) * WordSize;
    if (this.#offset + alignedLength > this.#data.length) {
      if (this.allowLoose && loose && this.#offset + length <= this.#data.length) {
        alignedLength = length;
      } else {
        assert(false, "data out-of-bounds", "BUFFER_OVERRUN", {
          buffer: getBytesCopy(this.#data),
          length: this.#data.length,
          offset: this.#offset + alignedLength
        });
      }
    }
    return this.#data.slice(this.#offset, this.#offset + alignedLength);
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(offset) {
    const reader = new _Reader(this.#data.slice(this.#offset + offset), this.allowLoose, this.#maxInflation);
    reader.#parent = this;
    return reader;
  }
  // Read bytes
  readBytes(length, loose) {
    let bytes2 = this.#peekBytes(0, length, !!loose);
    this.#incrementBytesRead(length);
    this.#offset += bytes2.length;
    return bytes2.slice(0, length);
  }
  // Read a numeric values
  readValue() {
    return toBigInt(this.readBytes(WordSize));
  }
  readIndex() {
    return toNumber(this.readBytes(WordSize));
  }
};
function number(n22) {
  if (!Number.isSafeInteger(n22) || n22 < 0)
    throw new Error(`Wrong positive integer: ${n22}`);
}
function bytes(b22, ...lengths) {
  if (!(b22 instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b22.length))
    throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b22.length}`);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
var _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n22, le3 = false) {
  if (le3)
    return { h: Number(n22 & U32_MASK64), l: Number(n22 >> _32n & U32_MASK64) };
  return { h: Number(n22 >> _32n & U32_MASK64) | 0, l: Number(n22 & U32_MASK64) | 0 };
}
function split(lst, le3 = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i2 = 0; i2 < lst.length; i2++) {
    const { h: h3, l: l2 } = fromBig(lst[i2], le3);
    [Ah[i2], Al[i2]] = [h3, l2];
  }
  return [Ah, Al];
}
var rotlSH = (h3, l2, s2) => h3 << s2 | l2 >>> 32 - s2;
var rotlSL = (h3, l2, s2) => l2 << s2 | h3 >>> 32 - s2;
var rotlBH = (h3, l2, s2) => l2 << s2 - 32 | h3 >>> 64 - s2;
var rotlBL = (h3, l2, s2) => h3 << s2 - 32 | l2 >>> 64 - s2;
var u8a = (a2) => a2 instanceof Uint8Array;
var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
var isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!u8a(data))
    throw new Error(`expected Uint8Array, got ${typeof data}`);
  return data;
}
var Hash = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
var toStr = {}.toString;
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
var _0n = /* @__PURE__ */ BigInt(0);
var _1n = /* @__PURE__ */ BigInt(1);
var _2n = /* @__PURE__ */ BigInt(2);
var _7n = /* @__PURE__ */ BigInt(7);
var _256n = /* @__PURE__ */ BigInt(256);
var _0x71n = /* @__PURE__ */ BigInt(113);
for (let round = 0, R3 = _1n, x5 = 1, y3 = 0; round < 24; round++) {
  [x5, y3] = [y3, (2 * x5 + 3 * y3) % 5];
  SHA3_PI.push(2 * (5 * y3 + x5));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t2 = _0n;
  for (let j2 = 0; j2 < 7; j2++) {
    R3 = (R3 << _1n ^ (R3 >> _7n) * _0x71n) % _256n;
    if (R3 & _2n)
      t2 ^= _1n << (_1n << /* @__PURE__ */ BigInt(j2)) - _1n;
  }
  _SHA3_IOTA.push(t2);
}
var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
var rotlH = (h3, l2, s2) => s2 > 32 ? rotlBH(h3, l2, s2) : rotlSH(h3, l2, s2);
var rotlL = (h3, l2, s2) => s2 > 32 ? rotlBL(h3, l2, s2) : rotlSL(h3, l2, s2);
function keccakP(s2, rounds = 24) {
  const B2 = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x5 = 0; x5 < 10; x5++)
      B2[x5] = s2[x5] ^ s2[x5 + 10] ^ s2[x5 + 20] ^ s2[x5 + 30] ^ s2[x5 + 40];
    for (let x5 = 0; x5 < 10; x5 += 2) {
      const idx1 = (x5 + 8) % 10;
      const idx0 = (x5 + 2) % 10;
      const B0 = B2[idx0];
      const B1 = B2[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B2[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
      for (let y3 = 0; y3 < 50; y3 += 10) {
        s2[x5 + y3] ^= Th;
        s2[x5 + y3 + 1] ^= Tl;
      }
    }
    let curH = s2[2];
    let curL = s2[3];
    for (let t2 = 0; t2 < 24; t2++) {
      const shift = SHA3_ROTL[t2];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t2];
      curH = s2[PI];
      curL = s2[PI + 1];
      s2[PI] = Th;
      s2[PI + 1] = Tl;
    }
    for (let y3 = 0; y3 < 50; y3 += 10) {
      for (let x5 = 0; x5 < 10; x5++)
        B2[x5] = s2[y3 + x5];
      for (let x5 = 0; x5 < 10; x5++)
        s2[y3 + x5] ^= ~B2[(x5 + 2) % 10] & B2[(x5 + 4) % 10];
    }
    s2[0] ^= SHA3_IOTA_H[round];
    s2[1] ^= SHA3_IOTA_L[round];
  }
  B2.fill(0);
}
var Keccak = class _Keccak extends Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    number(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    keccakP(this.state32, this.rounds);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    exists(this);
    const { blockLen, state } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i2 = 0; i2 < take; i2++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    exists(this, false);
    bytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes2) {
    number(bytes2);
    return this.xofInto(new Uint8Array(bytes2));
  }
  digestInto(out) {
    output(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
};
var gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
var sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
var sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
var sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
var sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
var keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
var keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
var keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
var keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
var genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
var shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
var shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);
var locked = false;
var _keccak256 = function(data) {
  return keccak_256(data);
};
var __keccak256 = _keccak256;
function keccak256(_data) {
  const data = getBytes(_data, "data");
  return hexlify(__keccak256(data));
}
keccak256._ = _keccak256;
keccak256.lock = function() {
  locked = true;
};
keccak256.register = function(func) {
  if (locked) {
    throw new TypeError("keccak256 is locked");
  }
  __keccak256 = func;
};
Object.freeze(keccak256);
var BN_02 = BigInt(0);
var BN_36 = BigInt(36);
function getChecksumAddress(address) {
  address = address.toLowerCase();
  const chars = address.substring(2).split("");
  const expanded = new Uint8Array(40);
  for (let i2 = 0; i2 < 40; i2++) {
    expanded[i2] = chars[i2].charCodeAt(0);
  }
  const hashed = getBytes(keccak256(expanded));
  for (let i2 = 0; i2 < 40; i2 += 2) {
    if (hashed[i2 >> 1] >> 4 >= 8) {
      chars[i2] = chars[i2].toUpperCase();
    }
    if ((hashed[i2 >> 1] & 15) >= 8) {
      chars[i2 + 1] = chars[i2 + 1].toUpperCase();
    }
  }
  return "0x" + chars.join("");
}
var ibanLookup = {};
for (let i2 = 0; i2 < 10; i2++) {
  ibanLookup[String(i2)] = String(i2);
}
for (let i2 = 0; i2 < 26; i2++) {
  ibanLookup[String.fromCharCode(65 + i2)] = String(10 + i2);
}
var safeDigits = 15;
function ibanChecksum(address) {
  address = address.toUpperCase();
  address = address.substring(4) + address.substring(0, 2) + "00";
  let expanded = address.split("").map((c3) => {
    return ibanLookup[c3];
  }).join("");
  while (expanded.length >= safeDigits) {
    let block = expanded.substring(0, safeDigits);
    expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
  }
  let checksum = String(98 - parseInt(expanded, 10) % 97);
  while (checksum.length < 2) {
    checksum = "0" + checksum;
  }
  return checksum;
}
var Base36 = (function() {
  ;
  const result = {};
  for (let i2 = 0; i2 < 36; i2++) {
    const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i2];
    result[key] = BigInt(i2);
  }
  return result;
})();
function fromBase36(value) {
  value = value.toLowerCase();
  let result = BN_02;
  for (let i2 = 0; i2 < value.length; i2++) {
    result = result * BN_36 + Base36[value[i2]];
  }
  return result;
}
function getAddress(address) {
  assertArgument(typeof address === "string", "invalid address", "address", address);
  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    if (!address.startsWith("0x")) {
      address = "0x" + address;
    }
    const result = getChecksumAddress(address);
    assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
    return result;
  }
  if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
    let result = fromBase36(address.substring(4)).toString(16);
    while (result.length < 40) {
      result = "0" + result;
    }
    return getChecksumAddress("0x" + result);
  }
  assertArgument(false, "invalid address", "address", address);
}
function isAddressable(value) {
  return value && typeof value.getAddress === "function";
}
async function checkAddress(target, promise) {
  const result = await promise;
  if (result == null || result === "0x0000000000000000000000000000000000000000") {
    assert(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
    assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
  }
  return getAddress(result);
}
function resolveAddress(target, resolver) {
  if (typeof target === "string") {
    if (target.match(/^0x[0-9a-f]{40}$/i)) {
      return getAddress(target);
    }
    assert(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
    return checkAddress(target, resolver.resolveName(target));
  } else if (isAddressable(target)) {
    return checkAddress(target, target.getAddress());
  } else if (target && typeof target.then === "function") {
    return checkAddress(target, target);
  }
  assertArgument(false, "unsupported addressable value", "target", target);
}
var _gaurd = {};
function n2(value, width) {
  let signed = false;
  if (width < 0) {
    signed = true;
    width *= -1;
  }
  return new Typed(_gaurd, `${signed ? "" : "u"}int${width}`, value, { signed, width });
}
function b2(value, size) {
  return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
}
var _typedSymbol = /* @__PURE__ */ Symbol.for("_ethers_typed");
var Typed = class _Typed {
  /**
   *  The type, as a Solidity-compatible type.
   */
  type;
  /**
   *  The actual value.
   */
  value;
  #options;
  /**
   *  @_ignore:
   */
  _typedSymbol;
  /**
   *  @_ignore:
   */
  constructor(gaurd, type, value, options) {
    if (options == null) {
      options = null;
    }
    assertPrivate(_gaurd, gaurd, "Typed");
    defineProperties(this, { _typedSymbol, type, value });
    this.#options = options;
    this.format();
  }
  /**
   *  Format the type as a Human-Readable type.
   */
  format() {
    if (this.type === "array") {
      throw new Error("");
    } else if (this.type === "dynamicArray") {
      throw new Error("");
    } else if (this.type === "tuple") {
      return `tuple(${this.value.map((v5) => v5.format()).join(",")})`;
    }
    return this.type;
  }
  /**
   *  The default value returned by this type.
   */
  defaultValue() {
    return 0;
  }
  /**
   *  The minimum value for numeric types.
   */
  minValue() {
    return 0;
  }
  /**
   *  The maximum value for numeric types.
   */
  maxValue() {
    return 0;
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].
   */
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedData]].
   */
  isData() {
    return this.type.startsWith("bytes");
  }
  /**
   *  Returns ``true`` and provides a type guard is this is a [[TypedString]].
   */
  isString() {
    return this.type === "string";
  }
  /**
   *  Returns the tuple name, if this is a tuple. Throws otherwise.
   */
  get tupleName() {
    if (this.type !== "tuple") {
      throw TypeError("not a tuple");
    }
    return this.#options;
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  /**
   *  Returns the length of the array type or ``-1`` if it is dynamic.
   *
   *  Throws if the type is not an array.
   */
  get arrayLength() {
    if (this.type !== "array") {
      throw TypeError("not an array");
    }
    if (this.#options === true) {
      return -1;
    }
    if (this.#options === false) {
      return this.value.length;
    }
    return null;
  }
  /**
   *  Returns a new **Typed** of %%type%% with the %%value%%.
   */
  static from(type, value) {
    return new _Typed(_gaurd, type, value);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static uint8(v5) {
    return n2(v5, 8);
  }
  /**
   *  Return a new ``uint16`` type for %%v%%.
   */
  static uint16(v5) {
    return n2(v5, 16);
  }
  /**
   *  Return a new ``uint24`` type for %%v%%.
   */
  static uint24(v5) {
    return n2(v5, 24);
  }
  /**
   *  Return a new ``uint32`` type for %%v%%.
   */
  static uint32(v5) {
    return n2(v5, 32);
  }
  /**
   *  Return a new ``uint40`` type for %%v%%.
   */
  static uint40(v5) {
    return n2(v5, 40);
  }
  /**
   *  Return a new ``uint48`` type for %%v%%.
   */
  static uint48(v5) {
    return n2(v5, 48);
  }
  /**
   *  Return a new ``uint56`` type for %%v%%.
   */
  static uint56(v5) {
    return n2(v5, 56);
  }
  /**
   *  Return a new ``uint64`` type for %%v%%.
   */
  static uint64(v5) {
    return n2(v5, 64);
  }
  /**
   *  Return a new ``uint72`` type for %%v%%.
   */
  static uint72(v5) {
    return n2(v5, 72);
  }
  /**
   *  Return a new ``uint80`` type for %%v%%.
   */
  static uint80(v5) {
    return n2(v5, 80);
  }
  /**
   *  Return a new ``uint88`` type for %%v%%.
   */
  static uint88(v5) {
    return n2(v5, 88);
  }
  /**
   *  Return a new ``uint96`` type for %%v%%.
   */
  static uint96(v5) {
    return n2(v5, 96);
  }
  /**
   *  Return a new ``uint104`` type for %%v%%.
   */
  static uint104(v5) {
    return n2(v5, 104);
  }
  /**
   *  Return a new ``uint112`` type for %%v%%.
   */
  static uint112(v5) {
    return n2(v5, 112);
  }
  /**
   *  Return a new ``uint120`` type for %%v%%.
   */
  static uint120(v5) {
    return n2(v5, 120);
  }
  /**
   *  Return a new ``uint128`` type for %%v%%.
   */
  static uint128(v5) {
    return n2(v5, 128);
  }
  /**
   *  Return a new ``uint136`` type for %%v%%.
   */
  static uint136(v5) {
    return n2(v5, 136);
  }
  /**
   *  Return a new ``uint144`` type for %%v%%.
   */
  static uint144(v5) {
    return n2(v5, 144);
  }
  /**
   *  Return a new ``uint152`` type for %%v%%.
   */
  static uint152(v5) {
    return n2(v5, 152);
  }
  /**
   *  Return a new ``uint160`` type for %%v%%.
   */
  static uint160(v5) {
    return n2(v5, 160);
  }
  /**
   *  Return a new ``uint168`` type for %%v%%.
   */
  static uint168(v5) {
    return n2(v5, 168);
  }
  /**
   *  Return a new ``uint176`` type for %%v%%.
   */
  static uint176(v5) {
    return n2(v5, 176);
  }
  /**
   *  Return a new ``uint184`` type for %%v%%.
   */
  static uint184(v5) {
    return n2(v5, 184);
  }
  /**
   *  Return a new ``uint192`` type for %%v%%.
   */
  static uint192(v5) {
    return n2(v5, 192);
  }
  /**
   *  Return a new ``uint200`` type for %%v%%.
   */
  static uint200(v5) {
    return n2(v5, 200);
  }
  /**
   *  Return a new ``uint208`` type for %%v%%.
   */
  static uint208(v5) {
    return n2(v5, 208);
  }
  /**
   *  Return a new ``uint216`` type for %%v%%.
   */
  static uint216(v5) {
    return n2(v5, 216);
  }
  /**
   *  Return a new ``uint224`` type for %%v%%.
   */
  static uint224(v5) {
    return n2(v5, 224);
  }
  /**
   *  Return a new ``uint232`` type for %%v%%.
   */
  static uint232(v5) {
    return n2(v5, 232);
  }
  /**
   *  Return a new ``uint240`` type for %%v%%.
   */
  static uint240(v5) {
    return n2(v5, 240);
  }
  /**
   *  Return a new ``uint248`` type for %%v%%.
   */
  static uint248(v5) {
    return n2(v5, 248);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint256(v5) {
    return n2(v5, 256);
  }
  /**
   *  Return a new ``uint256`` type for %%v%%.
   */
  static uint(v5) {
    return n2(v5, 256);
  }
  /**
   *  Return a new ``int8`` type for %%v%%.
   */
  static int8(v5) {
    return n2(v5, -8);
  }
  /**
   *  Return a new ``int16`` type for %%v%%.
   */
  static int16(v5) {
    return n2(v5, -16);
  }
  /**
   *  Return a new ``int24`` type for %%v%%.
   */
  static int24(v5) {
    return n2(v5, -24);
  }
  /**
   *  Return a new ``int32`` type for %%v%%.
   */
  static int32(v5) {
    return n2(v5, -32);
  }
  /**
   *  Return a new ``int40`` type for %%v%%.
   */
  static int40(v5) {
    return n2(v5, -40);
  }
  /**
   *  Return a new ``int48`` type for %%v%%.
   */
  static int48(v5) {
    return n2(v5, -48);
  }
  /**
   *  Return a new ``int56`` type for %%v%%.
   */
  static int56(v5) {
    return n2(v5, -56);
  }
  /**
   *  Return a new ``int64`` type for %%v%%.
   */
  static int64(v5) {
    return n2(v5, -64);
  }
  /**
   *  Return a new ``int72`` type for %%v%%.
   */
  static int72(v5) {
    return n2(v5, -72);
  }
  /**
   *  Return a new ``int80`` type for %%v%%.
   */
  static int80(v5) {
    return n2(v5, -80);
  }
  /**
   *  Return a new ``int88`` type for %%v%%.
   */
  static int88(v5) {
    return n2(v5, -88);
  }
  /**
   *  Return a new ``int96`` type for %%v%%.
   */
  static int96(v5) {
    return n2(v5, -96);
  }
  /**
   *  Return a new ``int104`` type for %%v%%.
   */
  static int104(v5) {
    return n2(v5, -104);
  }
  /**
   *  Return a new ``int112`` type for %%v%%.
   */
  static int112(v5) {
    return n2(v5, -112);
  }
  /**
   *  Return a new ``int120`` type for %%v%%.
   */
  static int120(v5) {
    return n2(v5, -120);
  }
  /**
   *  Return a new ``int128`` type for %%v%%.
   */
  static int128(v5) {
    return n2(v5, -128);
  }
  /**
   *  Return a new ``int136`` type for %%v%%.
   */
  static int136(v5) {
    return n2(v5, -136);
  }
  /**
   *  Return a new ``int144`` type for %%v%%.
   */
  static int144(v5) {
    return n2(v5, -144);
  }
  /**
   *  Return a new ``int52`` type for %%v%%.
   */
  static int152(v5) {
    return n2(v5, -152);
  }
  /**
   *  Return a new ``int160`` type for %%v%%.
   */
  static int160(v5) {
    return n2(v5, -160);
  }
  /**
   *  Return a new ``int168`` type for %%v%%.
   */
  static int168(v5) {
    return n2(v5, -168);
  }
  /**
   *  Return a new ``int176`` type for %%v%%.
   */
  static int176(v5) {
    return n2(v5, -176);
  }
  /**
   *  Return a new ``int184`` type for %%v%%.
   */
  static int184(v5) {
    return n2(v5, -184);
  }
  /**
   *  Return a new ``int92`` type for %%v%%.
   */
  static int192(v5) {
    return n2(v5, -192);
  }
  /**
   *  Return a new ``int200`` type for %%v%%.
   */
  static int200(v5) {
    return n2(v5, -200);
  }
  /**
   *  Return a new ``int208`` type for %%v%%.
   */
  static int208(v5) {
    return n2(v5, -208);
  }
  /**
   *  Return a new ``int216`` type for %%v%%.
   */
  static int216(v5) {
    return n2(v5, -216);
  }
  /**
   *  Return a new ``int224`` type for %%v%%.
   */
  static int224(v5) {
    return n2(v5, -224);
  }
  /**
   *  Return a new ``int232`` type for %%v%%.
   */
  static int232(v5) {
    return n2(v5, -232);
  }
  /**
   *  Return a new ``int240`` type for %%v%%.
   */
  static int240(v5) {
    return n2(v5, -240);
  }
  /**
   *  Return a new ``int248`` type for %%v%%.
   */
  static int248(v5) {
    return n2(v5, -248);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int256(v5) {
    return n2(v5, -256);
  }
  /**
   *  Return a new ``int256`` type for %%v%%.
   */
  static int(v5) {
    return n2(v5, -256);
  }
  /**
   *  Return a new ``bytes1`` type for %%v%%.
   */
  static bytes1(v5) {
    return b2(v5, 1);
  }
  /**
   *  Return a new ``bytes2`` type for %%v%%.
   */
  static bytes2(v5) {
    return b2(v5, 2);
  }
  /**
   *  Return a new ``bytes3`` type for %%v%%.
   */
  static bytes3(v5) {
    return b2(v5, 3);
  }
  /**
   *  Return a new ``bytes4`` type for %%v%%.
   */
  static bytes4(v5) {
    return b2(v5, 4);
  }
  /**
   *  Return a new ``bytes5`` type for %%v%%.
   */
  static bytes5(v5) {
    return b2(v5, 5);
  }
  /**
   *  Return a new ``bytes6`` type for %%v%%.
   */
  static bytes6(v5) {
    return b2(v5, 6);
  }
  /**
   *  Return a new ``bytes7`` type for %%v%%.
   */
  static bytes7(v5) {
    return b2(v5, 7);
  }
  /**
   *  Return a new ``bytes8`` type for %%v%%.
   */
  static bytes8(v5) {
    return b2(v5, 8);
  }
  /**
   *  Return a new ``bytes9`` type for %%v%%.
   */
  static bytes9(v5) {
    return b2(v5, 9);
  }
  /**
   *  Return a new ``bytes10`` type for %%v%%.
   */
  static bytes10(v5) {
    return b2(v5, 10);
  }
  /**
   *  Return a new ``bytes11`` type for %%v%%.
   */
  static bytes11(v5) {
    return b2(v5, 11);
  }
  /**
   *  Return a new ``bytes12`` type for %%v%%.
   */
  static bytes12(v5) {
    return b2(v5, 12);
  }
  /**
   *  Return a new ``bytes13`` type for %%v%%.
   */
  static bytes13(v5) {
    return b2(v5, 13);
  }
  /**
   *  Return a new ``bytes14`` type for %%v%%.
   */
  static bytes14(v5) {
    return b2(v5, 14);
  }
  /**
   *  Return a new ``bytes15`` type for %%v%%.
   */
  static bytes15(v5) {
    return b2(v5, 15);
  }
  /**
   *  Return a new ``bytes16`` type for %%v%%.
   */
  static bytes16(v5) {
    return b2(v5, 16);
  }
  /**
   *  Return a new ``bytes17`` type for %%v%%.
   */
  static bytes17(v5) {
    return b2(v5, 17);
  }
  /**
   *  Return a new ``bytes18`` type for %%v%%.
   */
  static bytes18(v5) {
    return b2(v5, 18);
  }
  /**
   *  Return a new ``bytes19`` type for %%v%%.
   */
  static bytes19(v5) {
    return b2(v5, 19);
  }
  /**
   *  Return a new ``bytes20`` type for %%v%%.
   */
  static bytes20(v5) {
    return b2(v5, 20);
  }
  /**
   *  Return a new ``bytes21`` type for %%v%%.
   */
  static bytes21(v5) {
    return b2(v5, 21);
  }
  /**
   *  Return a new ``bytes22`` type for %%v%%.
   */
  static bytes22(v5) {
    return b2(v5, 22);
  }
  /**
   *  Return a new ``bytes23`` type for %%v%%.
   */
  static bytes23(v5) {
    return b2(v5, 23);
  }
  /**
   *  Return a new ``bytes24`` type for %%v%%.
   */
  static bytes24(v5) {
    return b2(v5, 24);
  }
  /**
   *  Return a new ``bytes25`` type for %%v%%.
   */
  static bytes25(v5) {
    return b2(v5, 25);
  }
  /**
   *  Return a new ``bytes26`` type for %%v%%.
   */
  static bytes26(v5) {
    return b2(v5, 26);
  }
  /**
   *  Return a new ``bytes27`` type for %%v%%.
   */
  static bytes27(v5) {
    return b2(v5, 27);
  }
  /**
   *  Return a new ``bytes28`` type for %%v%%.
   */
  static bytes28(v5) {
    return b2(v5, 28);
  }
  /**
   *  Return a new ``bytes29`` type for %%v%%.
   */
  static bytes29(v5) {
    return b2(v5, 29);
  }
  /**
   *  Return a new ``bytes30`` type for %%v%%.
   */
  static bytes30(v5) {
    return b2(v5, 30);
  }
  /**
   *  Return a new ``bytes31`` type for %%v%%.
   */
  static bytes31(v5) {
    return b2(v5, 31);
  }
  /**
   *  Return a new ``bytes32`` type for %%v%%.
   */
  static bytes32(v5) {
    return b2(v5, 32);
  }
  /**
   *  Return a new ``address`` type for %%v%%.
   */
  static address(v5) {
    return new _Typed(_gaurd, "address", v5);
  }
  /**
   *  Return a new ``bool`` type for %%v%%.
   */
  static bool(v5) {
    return new _Typed(_gaurd, "bool", !!v5);
  }
  /**
   *  Return a new ``bytes`` type for %%v%%.
   */
  static bytes(v5) {
    return new _Typed(_gaurd, "bytes", v5);
  }
  /**
   *  Return a new ``string`` type for %%v%%.
   */
  static string(v5) {
    return new _Typed(_gaurd, "string", v5);
  }
  /**
   *  Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.
   */
  static array(v5, dynamic) {
    throw new Error("not implemented yet");
    return new _Typed(_gaurd, "array", v5, dynamic);
  }
  /**
   *  Return a new ``tuple`` type for %%v%%, with the optional %%name%%.
   */
  static tuple(v5, name) {
    throw new Error("not implemented yet");
    return new _Typed(_gaurd, "tuple", v5, name);
  }
  /**
   *  Return a new ``uint8`` type for %%v%%.
   */
  static overrides(v5) {
    return new _Typed(_gaurd, "overrides", Object.assign({}, v5));
  }
  /**
   *  Returns true only if %%value%% is a [[Typed]] instance.
   */
  static isTyped(value) {
    return value && typeof value === "object" && "_typedSymbol" in value && value._typedSymbol === _typedSymbol;
  }
  /**
   *  If the value is a [[Typed]] instance, validates the underlying value
   *  and returns it, otherwise returns value directly.
   *
   *  This is useful for functions that with to accept either a [[Typed]]
   *  object or values.
   */
  static dereference(value, type) {
    if (_Typed.isTyped(value)) {
      if (value.type !== type) {
        throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
      }
      return value.value;
    }
    return value;
  }
};
var AddressCoder = class extends Coder {
  constructor(localName) {
    super("address", "address", localName, false);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(writer, _value) {
    let value = Typed.dereference(_value, "string");
    try {
      value = getAddress(value);
    } catch (error) {
      return this._throwError(error.message, _value);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    return getAddress(toBeHex(reader.readValue(), 20));
  }
};
var AnonymousCoder = class extends Coder {
  coder;
  constructor(coder) {
    super(coder.name, coder.type, "_", coder.dynamic);
    this.coder = coder;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(writer, value) {
    return this.coder.encode(writer, value);
  }
  decode(reader) {
    return this.coder.decode(reader);
  }
};
function pack(writer, coders, values) {
  let arrayValues = [];
  if (Array.isArray(values)) {
    arrayValues = values;
  } else if (values && typeof values === "object") {
    let unique = {};
    arrayValues = coders.map((coder) => {
      const name = coder.localName;
      assert(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      assert(!unique[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      unique[name] = true;
      return values[name];
    });
  } else {
    assertArgument(false, "invalid tuple value", "tuple", values);
  }
  assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
  let staticWriter = new Writer();
  let dynamicWriter = new Writer();
  let updateFuncs = [];
  coders.forEach((coder, index) => {
    let value = arrayValues[index];
    if (coder.dynamic) {
      let dynamicOffset = dynamicWriter.length;
      coder.encode(dynamicWriter, value);
      let updateFunc = staticWriter.writeUpdatableValue();
      updateFuncs.push((baseOffset) => {
        updateFunc(baseOffset + dynamicOffset);
      });
    } else {
      coder.encode(staticWriter, value);
    }
  });
  updateFuncs.forEach((func) => {
    func(staticWriter.length);
  });
  let length = writer.appendWriter(staticWriter);
  length += writer.appendWriter(dynamicWriter);
  return length;
}
function unpack(reader, coders) {
  let values = [];
  let keys = [];
  let baseReader = reader.subReader(0);
  coders.forEach((coder) => {
    let value = null;
    if (coder.dynamic) {
      let offset = reader.readIndex();
      let offsetReader = baseReader.subReader(offset);
      try {
        value = coder.decode(offsetReader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    } else {
      try {
        value = coder.decode(reader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    }
    if (value == void 0) {
      throw new Error("investigate");
    }
    values.push(value);
    keys.push(coder.localName || null);
  });
  return Result.fromItems(values, keys);
}
var ArrayCoder = class extends Coder {
  coder;
  length;
  constructor(coder, length, localName) {
    const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
    const dynamic = length === -1 || coder.dynamic;
    super("array", type, localName, dynamic);
    defineProperties(this, { coder, length });
  }
  defaultValue() {
    const defaultChild = this.coder.defaultValue();
    const result = [];
    for (let i2 = 0; i2 < this.length; i2++) {
      result.push(defaultChild);
    }
    return result;
  }
  encode(writer, _value) {
    const value = Typed.dereference(_value, "array");
    if (!Array.isArray(value)) {
      this._throwError("expected array value", value);
    }
    let count = this.length;
    if (count === -1) {
      count = value.length;
      writer.writeValue(value.length);
    }
    assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
    let coders = [];
    for (let i2 = 0; i2 < value.length; i2++) {
      coders.push(this.coder);
    }
    return pack(writer, coders, value);
  }
  decode(reader) {
    let count = this.length;
    if (count === -1) {
      count = reader.readIndex();
      assert(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
    }
    let coders = [];
    for (let i2 = 0; i2 < count; i2++) {
      coders.push(new AnonymousCoder(this.coder));
    }
    return unpack(reader, coders);
  }
};
var BooleanCoder = class extends Coder {
  constructor(localName) {
    super("bool", "bool", localName, false);
  }
  defaultValue() {
    return false;
  }
  encode(writer, _value) {
    const value = Typed.dereference(_value, "bool");
    return writer.writeValue(value ? 1 : 0);
  }
  decode(reader) {
    return !!reader.readValue();
  }
};
var DynamicBytesCoder = class extends Coder {
  constructor(type, localName) {
    super(type, type, localName, true);
  }
  defaultValue() {
    return "0x";
  }
  encode(writer, value) {
    value = getBytesCopy(value);
    let length = writer.writeValue(value.length);
    length += writer.writeBytes(value);
    return length;
  }
  decode(reader) {
    return reader.readBytes(reader.readIndex(), true);
  }
};
var BytesCoder = class extends DynamicBytesCoder {
  constructor(localName) {
    super("bytes", localName);
  }
  decode(reader) {
    return hexlify(super.decode(reader));
  }
};
var FixedBytesCoder = class extends Coder {
  size;
  constructor(size, localName) {
    let name = "bytes" + String(size);
    super(name, name, localName, false);
    defineProperties(this, { size }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(writer, _value) {
    let data = getBytesCopy(Typed.dereference(_value, this.type));
    if (data.length !== this.size) {
      this._throwError("incorrect data length", _value);
    }
    return writer.writeBytes(data);
  }
  decode(reader) {
    return hexlify(reader.readBytes(this.size));
  }
};
var Empty = new Uint8Array([]);
var NullCoder = class extends Coder {
  constructor(localName) {
    super("null", "", localName, false);
  }
  defaultValue() {
    return null;
  }
  encode(writer, value) {
    if (value != null) {
      this._throwError("not null", value);
    }
    return writer.writeBytes(Empty);
  }
  decode(reader) {
    reader.readBytes(0);
    return null;
  }
};
var BN_03 = BigInt(0);
var BN_12 = BigInt(1);
var BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
var NumberCoder = class extends Coder {
  size;
  signed;
  constructor(size, signed, localName) {
    const name = (signed ? "int" : "uint") + size * 8;
    super(name, name, localName, false);
    defineProperties(this, { size, signed }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(writer, _value) {
    let value = getBigInt(Typed.dereference(_value, this.type));
    let maxUintValue = mask(BN_MAX_UINT256, WordSize * 8);
    if (this.signed) {
      let bounds = mask(maxUintValue, this.size * 8 - 1);
      if (value > bounds || value < -(bounds + BN_12)) {
        this._throwError("value out-of-bounds", _value);
      }
      value = toTwos(value, 8 * WordSize);
    } else if (value < BN_03 || value > mask(maxUintValue, this.size * 8)) {
      this._throwError("value out-of-bounds", _value);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    let value = mask(reader.readValue(), this.size * 8);
    if (this.signed) {
      value = fromTwos(value, this.size * 8);
    }
    return value;
  }
};
var StringCoder = class extends DynamicBytesCoder {
  constructor(localName) {
    super("string", localName);
  }
  defaultValue() {
    return "";
  }
  encode(writer, _value) {
    return super.encode(writer, toUtf8Bytes(Typed.dereference(_value, "string")));
  }
  decode(reader) {
    return toUtf8String(super.decode(reader));
  }
};
var TupleCoder = class extends Coder {
  coders;
  constructor(coders, localName) {
    let dynamic = false;
    const types = [];
    coders.forEach((coder) => {
      if (coder.dynamic) {
        dynamic = true;
      }
      types.push(coder.type);
    });
    const type = "tuple(" + types.join(",") + ")";
    super("tuple", type, localName, dynamic);
    defineProperties(this, { coders: Object.freeze(coders.slice()) });
  }
  defaultValue() {
    const values = [];
    this.coders.forEach((coder) => {
      values.push(coder.defaultValue());
    });
    const uniqueNames = this.coders.reduce((accum, coder) => {
      const name = coder.localName;
      if (name) {
        if (!accum[name]) {
          accum[name] = 0;
        }
        accum[name]++;
      }
      return accum;
    }, {});
    this.coders.forEach((coder, index) => {
      let name = coder.localName;
      if (!name || uniqueNames[name] !== 1) {
        return;
      }
      if (name === "length") {
        name = "_length";
      }
      if (values[name] != null) {
        return;
      }
      values[name] = values[index];
    });
    return Object.freeze(values);
  }
  encode(writer, _value) {
    const value = Typed.dereference(_value, "tuple");
    return pack(writer, this.coders, value);
  }
  decode(reader) {
    return unpack(reader, this.coders);
  }
};
function accessSetify(addr, storageKeys) {
  return {
    address: getAddress(addr),
    storageKeys: storageKeys.map((storageKey, index) => {
      assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index}]`, storageKey);
      return storageKey.toLowerCase();
    })
  };
}
function accessListify(value) {
  if (Array.isArray(value)) {
    return value.map((set, index) => {
      if (Array.isArray(set)) {
        assertArgument(set.length === 2, "invalid slot set", `value[${index}]`, set);
        return accessSetify(set[0], set[1]);
      }
      assertArgument(set != null && typeof set === "object", "invalid address-slot set", "value", value);
      return accessSetify(set.address, set.storageKeys);
    });
  }
  assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
  const result = Object.keys(value).map((addr) => {
    const storageKeys = value[addr].reduce((accum, storageKey) => {
      accum[storageKey] = true;
      return accum;
    }, {});
    return accessSetify(addr, Object.keys(storageKeys).sort());
  });
  result.sort((a2, b22) => a2.address.localeCompare(b22.address));
  return result;
}
function id(value) {
  return keccak256(toUtf8Bytes(value));
}
function setify(items) {
  const result = /* @__PURE__ */ new Set();
  items.forEach((k2) => result.add(k2));
  return Object.freeze(result);
}
var _kwVisibDeploy = "external public payable override";
var KwVisibDeploy = setify(_kwVisibDeploy.split(" "));
var _kwVisib = "constant external internal payable private public pure view override";
var KwVisib = setify(_kwVisib.split(" "));
var _kwTypes = "constructor error event fallback function receive struct";
var KwTypes = setify(_kwTypes.split(" "));
var _kwModifiers = "calldata memory storage payable indexed";
var KwModifiers = setify(_kwModifiers.split(" "));
var _kwOther = "tuple returns";
var _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
var Keywords = setify(_keywords.split(" "));
var SimpleTokens = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
};
var regexWhitespacePrefix = new RegExp("^(\\s*)");
var regexNumberPrefix = new RegExp("^([0-9]+)");
var regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
var regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
var regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var TokenString = class _TokenString {
  #offset;
  #tokens;
  get offset() {
    return this.#offset;
  }
  get length() {
    return this.#tokens.length - this.#offset;
  }
  constructor(tokens) {
    this.#offset = 0;
    this.#tokens = tokens.slice();
  }
  clone() {
    return new _TokenString(this.#tokens);
  }
  reset() {
    this.#offset = 0;
  }
  #subTokenString(from = 0, to = 0) {
    return new _TokenString(this.#tokens.slice(from, to).map((t2) => {
      return Object.freeze(Object.assign({}, t2, {
        match: t2.match - from,
        linkBack: t2.linkBack - from,
        linkNext: t2.linkNext - from
      }));
    }));
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(allowed) {
    const top = this.peek();
    if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
      throw new Error(`expected keyword ${top.text}`);
    }
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(type) {
    if (this.peek().type !== type) {
      const top = this.peek();
      throw new Error(`expected ${type}; got ${top.type} ${JSON.stringify(top.text)}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = this.#subTokenString(this.#offset + 1, top.match + 1);
    this.#offset = top.match + 1;
    return result;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = [];
    while (this.#offset < top.match - 1) {
      const link = this.peek().linkNext;
      result.push(this.#subTokenString(this.#offset + 1, link));
      this.#offset = link;
    }
    this.#offset = top.match + 1;
    return result;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (this.#offset >= this.#tokens.length) {
      throw new Error("out-of-bounds");
    }
    return this.#tokens[this.#offset];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(allowed) {
    const top = this.peekType("KEYWORD");
    return top != null && allowed.has(top) ? top : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(type) {
    if (this.length === 0) {
      return null;
    }
    const top = this.peek();
    return top.type === type ? top.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const result = this.peek();
    this.#offset++;
    return result;
  }
  toString() {
    const tokens = [];
    for (let i2 = this.#offset; i2 < this.#tokens.length; i2++) {
      const token = this.#tokens[i2];
      tokens.push(`${token.type}:${token.text}`);
    }
    return `<TokenString ${tokens.join(" ")}>`;
  }
};
function lex(text) {
  const tokens = [];
  const throwError2 = (message) => {
    const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
    throw new Error(`invalid token ${token} at ${offset}: ${message}`);
  };
  let brackets = [];
  let commas = [];
  let offset = 0;
  while (offset < text.length) {
    let cur = text.substring(offset);
    let match = cur.match(regexWhitespacePrefix);
    if (match) {
      offset += match[1].length;
      cur = text.substring(offset);
    }
    const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
    tokens.push(token);
    let type = SimpleTokens[cur[0]] || "";
    if (type) {
      token.type = type;
      token.text = cur[0];
      offset++;
      if (type === "OPEN_PAREN") {
        brackets.push(tokens.length - 1);
        commas.push(tokens.length - 1);
      } else if (type == "CLOSE_PAREN") {
        if (brackets.length === 0) {
          throwError2("no matching open bracket");
        }
        token.match = brackets.pop();
        tokens[token.match].match = tokens.length - 1;
        token.depth--;
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
      } else if (type === "COMMA") {
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
        commas.push(tokens.length - 1);
      } else if (type === "OPEN_BRACKET") {
        token.type = "BRACKET";
      } else if (type === "CLOSE_BRACKET") {
        let suffix = tokens.pop().text;
        if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
          const value = tokens.pop().text;
          suffix = value + suffix;
          tokens[tokens.length - 1].value = getNumber(value);
        }
        if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
          throw new Error("missing opening bracket");
        }
        tokens[tokens.length - 1].text += suffix;
      }
      continue;
    }
    match = cur.match(regexIdPrefix);
    if (match) {
      token.text = match[1];
      offset += token.text.length;
      if (Keywords.has(token.text)) {
        token.type = "KEYWORD";
        continue;
      }
      if (token.text.match(regexType)) {
        token.type = "TYPE";
        continue;
      }
      token.type = "ID";
      continue;
    }
    match = cur.match(regexNumberPrefix);
    if (match) {
      token.text = match[1];
      token.type = "NUMBER";
      offset += token.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
  }
  return new TokenString(tokens.map((t2) => Object.freeze(t2)));
}
function allowSingle(set, allowed) {
  let included = [];
  for (const key in allowed.keys()) {
    if (set.has(key)) {
      included.push(key);
    }
  }
  if (included.length > 1) {
    throw new Error(`conflicting types: ${included.join(", ")}`);
  }
}
function consumeName(type, tokens) {
  if (tokens.peekKeyword(KwTypes)) {
    const keyword = tokens.pop().text;
    if (keyword !== type) {
      throw new Error(`expected ${type}, got ${keyword}`);
    }
  }
  return tokens.popType("ID");
}
function consumeKeywords(tokens, allowed) {
  const keywords = /* @__PURE__ */ new Set();
  while (true) {
    const keyword = tokens.peekType("KEYWORD");
    if (keyword == null || allowed && !allowed.has(keyword)) {
      break;
    }
    tokens.pop();
    if (keywords.has(keyword)) {
      throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
    }
    keywords.add(keyword);
  }
  return Object.freeze(keywords);
}
function consumeMutability(tokens) {
  let modifiers = consumeKeywords(tokens, KwVisib);
  allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
  allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
  if (modifiers.has("view")) {
    return "view";
  }
  if (modifiers.has("pure")) {
    return "pure";
  }
  if (modifiers.has("payable")) {
    return "payable";
  }
  if (modifiers.has("nonpayable")) {
    return "nonpayable";
  }
  if (modifiers.has("constant")) {
    return "view";
  }
  return "nonpayable";
}
function consumeParams(tokens, allowIndexed) {
  return tokens.popParams().map((t2) => ParamType.from(t2, allowIndexed));
}
function consumeGas(tokens) {
  if (tokens.peekType("AT")) {
    tokens.pop();
    if (tokens.peekType("NUMBER")) {
      return getBigInt(tokens.pop().text);
    }
    throw new Error("invalid gas");
  }
  return null;
}
function consumeEoi(tokens) {
  if (tokens.length) {
    throw new Error(`unexpected tokens at offset ${tokens.offset}: ${tokens.toString()}`);
  }
}
var regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
function verifyBasicType(type) {
  const match = type.match(regexType);
  assertArgument(match, "invalid type", "type", type);
  if (type === "uint") {
    return "uint256";
  }
  if (type === "int") {
    return "int256";
  }
  if (match[2]) {
    const length = parseInt(match[2]);
    assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
  } else if (match[3]) {
    const size = parseInt(match[3]);
    assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
  }
  return type;
}
var _guard2 = {};
var internal = /* @__PURE__ */ Symbol.for("_ethers_internal");
var ParamTypeInternal = "_ParamTypeInternal";
var ErrorFragmentInternal = "_ErrorInternal";
var EventFragmentInternal = "_EventInternal";
var ConstructorFragmentInternal = "_ConstructorInternal";
var FallbackFragmentInternal = "_FallbackInternal";
var FunctionFragmentInternal = "_FunctionInternal";
var StructFragmentInternal = "_StructInternal";
var ParamType = class _ParamType {
  /**
   *  The local name of the parameter (or ``""`` if unbound)
   */
  name;
  /**
   *  The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
   *  ``"uint256[3][]"``)
   */
  type;
  /**
   *  The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)
   */
  baseType;
  /**
   *  True if the parameters is indexed.
   *
   *  For non-indexable types this is ``null``.
   */
  indexed;
  /**
   *  The components for the tuple.
   *
   *  For non-tuple types this is ``null``.
   */
  components;
  /**
   *  The array length, or ``-1`` for dynamic-lengthed arrays.
   *
   *  For non-array types this is ``null``.
   */
  arrayLength;
  /**
   *  The type of each child in the array.
   *
   *  For non-array types this is ``null``.
   */
  arrayChildren;
  /**
   *  @private
   */
  constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
    assertPrivate(guard, _guard2, "ParamType");
    Object.defineProperty(this, internal, { value: ParamTypeInternal });
    if (components) {
      components = Object.freeze(components.slice());
    }
    if (baseType === "array") {
      if (arrayLength == null || arrayChildren == null) {
        throw new Error("");
      }
    } else if (arrayLength != null || arrayChildren != null) {
      throw new Error("");
    }
    if (baseType === "tuple") {
      if (components == null) {
        throw new Error("");
      }
    } else if (components != null) {
      throw new Error("");
    }
    defineProperties(this, {
      name,
      type,
      baseType,
      indexed,
      components,
      arrayLength,
      arrayChildren
    });
  }
  /**
   *  Return a string representation of this type.
   *
   *  For example,
   *
   *  ``sighash" => "(uint256,address)"``
   *
   *  ``"minimal" => "tuple(uint256,address) indexed"``
   *
   *  ``"full" => "tuple(uint256 foo, address bar) indexed baz"``
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      const name = this.name || "";
      if (this.isArray()) {
        const result3 = JSON.parse(this.arrayChildren.format("json"));
        result3.name = name;
        result3.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
        return JSON.stringify(result3);
      }
      const result2 = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name
      };
      if (typeof this.indexed === "boolean") {
        result2.indexed = this.indexed;
      }
      if (this.isTuple()) {
        result2.components = this.components.map((c3) => JSON.parse(c3.format(format)));
      }
      return JSON.stringify(result2);
    }
    let result = "";
    if (this.isArray()) {
      result += this.arrayChildren.format(format);
      result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
    } else {
      if (this.isTuple()) {
        result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
      } else {
        result += this.type;
      }
    }
    if (format !== "sighash") {
      if (this.indexed === true) {
        result += " indexed";
      }
      if (format === "full" && this.name) {
        result += " " + this.name;
      }
    }
    return result;
  }
  /**
   *  Returns true if %%this%% is an Array type.
   *
   *  This provides a type gaurd ensuring that [[arrayChildren]]
   *  and [[arrayLength]] are non-null.
   */
  isArray() {
    return this.baseType === "array";
  }
  /**
   *  Returns true if %%this%% is a Tuple type.
   *
   *  This provides a type gaurd ensuring that [[components]]
   *  is non-null.
   */
  isTuple() {
    return this.baseType === "tuple";
  }
  /**
   *  Returns true if %%this%% is an Indexable type.
   *
   *  This provides a type gaurd ensuring that [[indexed]]
   *  is non-null.
   */
  isIndexable() {
    return this.indexed != null;
  }
  /**
   *  Walks the **ParamType** with %%value%%, calling %%process%%
   *  on each type, destructing the %%value%% recursively.
   */
  walk(value, process) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v5) => _this.arrayChildren.walk(v5, process));
    }
    if (this.isTuple()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid tuple value");
      }
      if (value.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v5, i2) => _this.components[i2].walk(v5, process));
    }
    return process(this.type, value);
  }
  #walkAsync(promises, value, process, setValue) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invalid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const childType = this.arrayChildren;
      const result2 = value.slice();
      result2.forEach((value2, index) => {
        childType.#walkAsync(promises, value2, process, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    if (this.isTuple()) {
      const components = this.components;
      let result2;
      if (Array.isArray(value)) {
        result2 = value.slice();
      } else {
        if (value == null || typeof value !== "object") {
          throw new Error("invalid tuple value");
        }
        result2 = components.map((param) => {
          if (!param.name) {
            throw new Error("cannot use object value with unnamed components");
          }
          if (!(param.name in value)) {
            throw new Error(`missing value for component ${param.name}`);
          }
          return value[param.name];
        });
      }
      if (result2.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      result2.forEach((value2, index) => {
        components[index].#walkAsync(promises, value2, process, (value3) => {
          result2[index] = value3;
        });
      });
      setValue(result2);
      return;
    }
    const result = process(this.type, value);
    if (result.then) {
      promises.push((async function() {
        setValue(await result);
      })());
    } else {
      setValue(result);
    }
  }
  /**
   *  Walks the **ParamType** with %%value%%, asynchronously calling
   *  %%process%% on each type, destructing the %%value%% recursively.
   *
   *  This can be used to resolve ENS names by walking and resolving each
   *  ``"address"`` type.
   */
  async walkAsync(value, process) {
    const promises = [];
    const result = [value];
    this.#walkAsync(promises, value, process, (value2) => {
      result[0] = value2;
    });
    if (promises.length) {
      await Promise.all(promises);
    }
    return result[0];
  }
  /**
   *  Creates a new **ParamType** for %%obj%%.
   *
   *  If %%allowIndexed%% then the ``indexed`` keyword is permitted,
   *  otherwise the ``indexed`` keyword will throw an error.
   */
  static from(obj, allowIndexed) {
    if (_ParamType.isParamType(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      try {
        return _ParamType.from(lex(obj), allowIndexed);
      } catch (error) {
        assertArgument(false, "invalid param type", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      let type2 = "", baseType = "";
      let comps = null;
      if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
        baseType = "tuple";
        comps = obj.popParams().map((t2) => _ParamType.from(t2));
        type2 = `tuple(${comps.map((c3) => c3.format()).join(",")})`;
      } else {
        type2 = verifyBasicType(obj.popType("TYPE"));
        baseType = type2;
      }
      let arrayChildren = null;
      let arrayLength = null;
      while (obj.length && obj.peekType("BRACKET")) {
        const bracket = obj.pop();
        arrayChildren = new _ParamType(_guard2, "", type2, baseType, null, comps, arrayLength, arrayChildren);
        arrayLength = bracket.value;
        type2 += bracket.text;
        baseType = "array";
        comps = null;
      }
      let indexed2 = null;
      const keywords = consumeKeywords(obj, KwModifiers);
      if (keywords.has("indexed")) {
        if (!allowIndexed) {
          throw new Error("");
        }
        indexed2 = true;
      }
      const name2 = obj.peekType("ID") ? obj.pop().text : "";
      if (obj.length) {
        throw new Error("leftover tokens");
      }
      return new _ParamType(_guard2, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
    }
    const name = obj.name;
    assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
    let indexed = obj.indexed;
    if (indexed != null) {
      assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
      indexed = !!indexed;
    }
    let type = obj.type;
    let arrayMatch = type.match(regexArrayType);
    if (arrayMatch) {
      const arrayLength = parseInt(arrayMatch[2] || "-1");
      const arrayChildren = _ParamType.from({
        type: arrayMatch[1],
        components: obj.components
      });
      return new _ParamType(_guard2, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
    }
    if (type === "tuple" || type.startsWith(
      "tuple("
      /* fix: ) */
    ) || type.startsWith(
      "("
      /* fix: ) */
    )) {
      const comps = obj.components != null ? obj.components.map((c3) => _ParamType.from(c3)) : null;
      const tuple = new _ParamType(_guard2, name || "", type, "tuple", indexed, comps, null, null);
      return tuple;
    }
    type = verifyBasicType(obj.type);
    return new _ParamType(_guard2, name || "", type, type, indexed, null, null, null);
  }
  /**
   *  Returns true if %%value%% is a **ParamType**.
   */
  static isParamType(value) {
    return value && value[internal] === ParamTypeInternal;
  }
};
var Fragment = class _Fragment {
  /**
   *  The type of the fragment.
   */
  type;
  /**
   *  The inputs for the fragment.
   */
  inputs;
  /**
   *  @private
   */
  constructor(guard, type, inputs) {
    assertPrivate(guard, _guard2, "Fragment");
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { type, inputs });
  }
  /**
   *  Creates a new **Fragment** for %%obj%%, wich can be any supported
   *  ABI frgament type.
   */
  static from(obj) {
    if (typeof obj === "string") {
      try {
        _Fragment.from(JSON.parse(obj));
      } catch (e2) {
      }
      return _Fragment.from(lex(obj));
    }
    if (obj instanceof TokenString) {
      const type = obj.peekKeyword(KwTypes);
      switch (type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
    } else if (typeof obj === "object") {
      switch (obj.type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
      assert(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    assertArgument(false, "unsupported frgament object", "obj", obj);
  }
  /**
   *  Returns true if %%value%% is a [[ConstructorFragment]].
   */
  static isConstructor(value) {
    return ConstructorFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is an [[ErrorFragment]].
   */
  static isError(value) {
    return ErrorFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is an [[EventFragment]].
   */
  static isEvent(value) {
    return EventFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is a [[FunctionFragment]].
   */
  static isFunction(value) {
    return FunctionFragment.isFragment(value);
  }
  /**
   *  Returns true if %%value%% is a [[StructFragment]].
   */
  static isStruct(value) {
    return StructFragment.isFragment(value);
  }
};
var NamedFragment = class extends Fragment {
  /**
   *  The name of the fragment.
   */
  name;
  /**
   *  @private
   */
  constructor(guard, type, name, inputs) {
    super(guard, type, inputs);
    assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { name });
  }
};
function joinParams(format, params) {
  return "(" + params.map((p8) => p8.format(format)).join(format === "full" ? ", " : ",") + ")";
}
var ErrorFragment = class _ErrorFragment extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, inputs) {
    super(guard, "error", name, inputs);
    Object.defineProperty(this, internal, { value: ErrorFragmentInternal });
  }
  /**
   *  The Custom Error selector.
   */
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this fragment as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("error");
    }
    result.push(this.name + joinParams(format, this.inputs));
    return result.join(" ");
  }
  /**
   *  Returns a new **ErrorFragment** for %%obj%%.
   */
  static from(obj) {
    if (_ErrorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return _ErrorFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("error", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new _ErrorFragment(_guard2, name, inputs);
    }
    return new _ErrorFragment(_guard2, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **ErrorFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === ErrorFragmentInternal;
  }
};
var EventFragment = class _EventFragment extends NamedFragment {
  /**
   *  Whether this event is anonymous.
   */
  anonymous;
  /**
   *  @private
   */
  constructor(guard, name, inputs, anonymous) {
    super(guard, "event", name, inputs);
    Object.defineProperty(this, internal, { value: EventFragmentInternal });
    defineProperties(this, { anonymous });
  }
  /**
   *  The Event topic hash.
   */
  get topicHash() {
    return id(this.format("sighash"));
  }
  /**
   *  Returns a string representation of this event as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((i2) => JSON.parse(i2.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("event");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash" && this.anonymous) {
      result.push("anonymous");
    }
    return result.join(" ");
  }
  /**
   *  Return the topic hash for an event with %%name%% and %%params%%.
   */
  static getTopicHash(name, params) {
    params = (params || []).map((p8) => ParamType.from(p8));
    const fragment = new _EventFragment(_guard2, name, params, false);
    return fragment.topicHash;
  }
  /**
   *  Returns a new **EventFragment** for %%obj%%.
   */
  static from(obj) {
    if (_EventFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      try {
        return _EventFragment.from(lex(obj));
      } catch (error) {
        assertArgument(false, "invalid event fragment", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      const name = consumeName("event", obj);
      const inputs = consumeParams(obj, true);
      const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
      consumeEoi(obj);
      return new _EventFragment(_guard2, name, inputs, anonymous);
    }
    return new _EventFragment(_guard2, obj.name, obj.inputs ? obj.inputs.map((p8) => ParamType.from(p8, true)) : [], !!obj.anonymous);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is an
   *  **EventFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === EventFragmentInternal;
  }
};
var ConstructorFragment = class _ConstructorFragment extends Fragment {
  /**
   *  Whether the constructor can receive an endowment.
   */
  payable;
  /**
   *  The recommended gas limit for deployment or ``null``.
   */
  gas;
  /**
   *  @private
   */
  constructor(guard, type, inputs, payable, gas) {
    super(guard, type, inputs);
    Object.defineProperty(this, internal, { value: ConstructorFragmentInternal });
    defineProperties(this, { payable, gas });
  }
  /**
   *  Returns a string representation of this constructor as %%format%%.
   */
  format(format) {
    assert(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
    if (format === "json") {
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i2) => JSON.parse(i2.format(format)))
      });
    }
    const result = [`constructor${joinParams(format, this.inputs)}`];
    if (this.payable) {
      result.push("payable");
    }
    if (this.gas != null) {
      result.push(`@${this.gas.toString()}`);
    }
    return result.join(" ");
  }
  /**
   *  Returns a new **ConstructorFragment** for %%obj%%.
   */
  static from(obj) {
    if (_ConstructorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      try {
        return _ConstructorFragment.from(lex(obj));
      } catch (error) {
        assertArgument(false, "invalid constuctor fragment", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      consumeKeywords(obj, setify(["constructor"]));
      const inputs = consumeParams(obj);
      const payable = !!consumeKeywords(obj, KwVisibDeploy).has("payable");
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new _ConstructorFragment(_guard2, "constructor", inputs, payable, gas);
    }
    return new _ConstructorFragment(_guard2, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **ConstructorFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === ConstructorFragmentInternal;
  }
};
var FallbackFragment = class _FallbackFragment extends Fragment {
  /**
   *  If the function can be sent value during invocation.
   */
  payable;
  constructor(guard, inputs, payable) {
    super(guard, "fallback", inputs);
    Object.defineProperty(this, internal, { value: FallbackFragmentInternal });
    defineProperties(this, { payable });
  }
  /**
   *  Returns a string representation of this fallback as %%format%%.
   */
  format(format) {
    const type = this.inputs.length === 0 ? "receive" : "fallback";
    if (format === "json") {
      const stateMutability = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type, stateMutability });
    }
    return `${type}()${this.payable ? " payable" : ""}`;
  }
  /**
   *  Returns a new **FallbackFragment** for %%obj%%.
   */
  static from(obj) {
    if (_FallbackFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      try {
        return _FallbackFragment.from(lex(obj));
      } catch (error) {
        assertArgument(false, "invalid fallback fragment", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      const errorObj = obj.toString();
      const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
      assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
      const type = obj.popKeyword(setify(["fallback", "receive"]));
      if (type === "receive") {
        const inputs2 = consumeParams(obj);
        assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
        consumeKeywords(obj, setify(["payable"]));
        consumeEoi(obj);
        return new _FallbackFragment(_guard2, [], true);
      }
      let inputs = consumeParams(obj);
      if (inputs.length) {
        assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i2) => i2.format("minimal")).join(", "));
      } else {
        inputs = [ParamType.from("bytes")];
      }
      const mutability = consumeMutability(obj);
      assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        const outputs = consumeParams(obj);
        assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i2) => i2.format("minimal")).join(", "));
      }
      consumeEoi(obj);
      return new _FallbackFragment(_guard2, inputs, mutability === "payable");
    }
    if (obj.type === "receive") {
      return new _FallbackFragment(_guard2, [], true);
    }
    if (obj.type === "fallback") {
      const inputs = [ParamType.from("bytes")];
      const payable = obj.stateMutability === "payable";
      return new _FallbackFragment(_guard2, inputs, payable);
    }
    assertArgument(false, "invalid fallback description", "obj", obj);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FallbackFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === FallbackFragmentInternal;
  }
};
var FunctionFragment = class _FunctionFragment extends NamedFragment {
  /**
   *  If the function is constant (e.g. ``pure`` or ``view`` functions).
   */
  constant;
  /**
   *  The returned types for the result of calling this function.
   */
  outputs;
  /**
   *  The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
   *  or ``pure``)
   */
  stateMutability;
  /**
   *  If the function can be sent value during invocation.
   */
  payable;
  /**
   *  The recommended gas limit to send when calling this function.
   */
  gas;
  /**
   *  @private
   */
  constructor(guard, name, stateMutability, inputs, outputs, gas) {
    super(guard, "function", name, inputs);
    Object.defineProperty(this, internal, { value: FunctionFragmentInternal });
    outputs = Object.freeze(outputs.slice());
    const constant = stateMutability === "view" || stateMutability === "pure";
    const payable = stateMutability === "payable";
    defineProperties(this, { constant, gas, outputs, payable, stateMutability });
  }
  /**
   *  The Function selector.
   */
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  /**
   *  Returns a string representation of this function as %%format%%.
   */
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i2) => JSON.parse(i2.format(format))),
        outputs: this.outputs.map((o2) => JSON.parse(o2.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("function");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash") {
      if (this.stateMutability !== "nonpayable") {
        result.push(this.stateMutability);
      }
      if (this.outputs && this.outputs.length) {
        result.push("returns");
        result.push(joinParams(format, this.outputs));
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
    }
    return result.join(" ");
  }
  /**
   *  Return the selector for a function with %%name%% and %%params%%.
   */
  static getSelector(name, params) {
    params = (params || []).map((p8) => ParamType.from(p8));
    const fragment = new _FunctionFragment(_guard2, name, "view", params, [], null);
    return fragment.selector;
  }
  /**
   *  Returns a new **FunctionFragment** for %%obj%%.
   */
  static from(obj) {
    if (_FunctionFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      try {
        return _FunctionFragment.from(lex(obj));
      } catch (error) {
        assertArgument(false, "invalid function fragment", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      const name = consumeName("function", obj);
      const inputs = consumeParams(obj);
      const mutability = consumeMutability(obj);
      let outputs = [];
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        outputs = consumeParams(obj);
      }
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new _FunctionFragment(_guard2, name, mutability, inputs, outputs, gas);
    }
    let stateMutability = obj.stateMutability;
    if (stateMutability == null) {
      stateMutability = "payable";
      if (typeof obj.constant === "boolean") {
        stateMutability = "view";
        if (!obj.constant) {
          stateMutability = "payable";
          if (typeof obj.payable === "boolean" && !obj.payable) {
            stateMutability = "nonpayable";
          }
        }
      } else if (typeof obj.payable === "boolean" && !obj.payable) {
        stateMutability = "nonpayable";
      }
    }
    return new _FunctionFragment(_guard2, obj.name, stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
  }
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **FunctionFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === FunctionFragmentInternal;
  }
};
var StructFragment = class _StructFragment extends NamedFragment {
  /**
   *  @private
   */
  constructor(guard, name, inputs) {
    super(guard, "struct", name, inputs);
    Object.defineProperty(this, internal, { value: StructFragmentInternal });
  }
  /**
   *  Returns a string representation of this struct as %%format%%.
   */
  format() {
    throw new Error("@TODO");
  }
  /**
   *  Returns a new **StructFragment** for %%obj%%.
   */
  static from(obj) {
    if (typeof obj === "string") {
      try {
        return _StructFragment.from(lex(obj));
      } catch (error) {
        assertArgument(false, "invalid struct fragment", "obj", obj);
      }
    } else if (obj instanceof TokenString) {
      const name = consumeName("struct", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new _StructFragment(_guard2, name, inputs);
    }
    return new _StructFragment(_guard2, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  // @TODO: fix this return type
  /**
   *  Returns ``true`` and provides a type guard if %%value%% is a
   *  **StructFragment**.
   */
  static isFragment(value) {
    return value && value[internal] === StructFragmentInternal;
  }
};
var PanicReasons = /* @__PURE__ */ new Map();
PanicReasons.set(0, "GENERIC_PANIC");
PanicReasons.set(1, "ASSERT_FALSE");
PanicReasons.set(17, "OVERFLOW");
PanicReasons.set(18, "DIVIDE_BY_ZERO");
PanicReasons.set(33, "ENUM_RANGE_ERROR");
PanicReasons.set(34, "BAD_STORAGE_DATA");
PanicReasons.set(49, "STACK_UNDERFLOW");
PanicReasons.set(50, "ARRAY_RANGE_ERROR");
PanicReasons.set(65, "OUT_OF_MEMORY");
PanicReasons.set(81, "UNINITIALIZED_FUNCTION_CALL");
var paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
var paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
var defaultCoder = null;
var defaultMaxInflation = 1024;
function getBuiltinCallException(action, tx, data, abiCoder) {
  let message = "missing revert data";
  let reason = null;
  const invocation = null;
  let revert = null;
  if (data) {
    message = "execution reverted";
    const bytes2 = getBytes(data);
    data = hexlify(data);
    if (bytes2.length === 0) {
      message += " (no data present; likely require(false) occurred";
      reason = "require(false)";
    } else if (bytes2.length % 32 !== 4) {
      message += " (could not decode reason; invalid data length)";
    } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
      try {
        reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
        revert = {
          signature: "Error(string)",
          name: "Error",
          args: [reason]
        };
        message += `: ${JSON.stringify(reason)}`;
      } catch (error) {
        message += " (could not decode reason; invalid string data)";
      }
    } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
      try {
        const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
        revert = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [code]
        };
        reason = `Panic due to ${PanicReasons.get(code) || "UNKNOWN"}(${code})`;
        message += `: ${reason}`;
      } catch (error) {
        message += " (could not decode panic code)";
      }
    } else {
      message += " (unknown custom error)";
    }
  }
  const transaction = {
    to: tx.to ? getAddress(tx.to) : null,
    data: tx.data || "0x"
  };
  if (tx.from) {
    transaction.from = getAddress(tx.from);
  }
  return makeError(message, "CALL_EXCEPTION", {
    action,
    data,
    reason,
    transaction,
    invocation,
    revert
  });
}
var AbiCoder = class _AbiCoder {
  #getCoder(param) {
    if (param.isArray()) {
      return new ArrayCoder(this.#getCoder(param.arrayChildren), param.arrayLength, param.name);
    }
    if (param.isTuple()) {
      return new TupleCoder(param.components.map((c3) => this.#getCoder(c3)), param.name);
    }
    switch (param.baseType) {
      case "address":
        return new AddressCoder(param.name);
      case "bool":
        return new BooleanCoder(param.name);
      case "string":
        return new StringCoder(param.name);
      case "bytes":
        return new BytesCoder(param.name);
      case "":
        return new NullCoder(param.name);
    }
    let match = param.type.match(paramTypeNumber);
    if (match) {
      let size = parseInt(match[2] || "256");
      assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
      return new NumberCoder(size / 8, match[1] === "int", param.name);
    }
    match = param.type.match(paramTypeBytes);
    if (match) {
      let size = parseInt(match[1]);
      assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
      return new FixedBytesCoder(size, param.name);
    }
    assertArgument(false, "invalid type", "type", param.type);
  }
  /**
   *  Get the default values for the given %%types%%.
   *
   *  For example, a ``uint`` is by default ``0`` and ``bool``
   *  is by default ``false``.
   */
  getDefaultValue(types) {
    const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.defaultValue();
  }
  /**
   *  Encode the %%values%% as the %%types%% into ABI data.
   *
   *  @returns DataHexstring
   */
  encode(types, values) {
    assertArgumentCount(values.length, types.length, "types/values length mismatch");
    const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    const writer = new Writer();
    coder.encode(writer, values);
    return writer.data;
  }
  /**
   *  Decode the ABI %%data%% as the %%types%% into values.
   *
   *  If %%loose%% decoding is enabled, then strict padding is
   *  not enforced. Some older versions of Solidity incorrectly
   *  padded event data emitted from ``external`` functions.
   */
  decode(types, data, loose) {
    const coders = types.map((type) => this.#getCoder(ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.decode(new Reader(data, loose, defaultMaxInflation));
  }
  static _setDefaultMaxInflation(value) {
    assertArgument(typeof value === "number" && Number.isInteger(value), "invalid defaultMaxInflation factor", "value", value);
    defaultMaxInflation = value;
  }
  /**
   *  Returns the shared singleton instance of a default [[AbiCoder]].
   *
   *  On the first call, the instance is created internally.
   */
  static defaultAbiCoder() {
    if (defaultCoder == null) {
      defaultCoder = new _AbiCoder();
    }
    return defaultCoder;
  }
  /**
   *  Returns an ethers-compatible [[CallExceptionError]] Error for the given
   *  result %%data%% for the [[CallExceptionAction]] %%action%% against
   *  the Transaction %%tx%%.
   */
  static getBuiltinCallException(action, tx, data) {
    return getBuiltinCallException(action, tx, data, _AbiCoder.defaultAbiCoder());
  }
};
var LogDescription = class {
  /**
   *  The matching fragment for the ``topic0``.
   */
  fragment;
  /**
   *  The name of the Event.
   */
  name;
  /**
   *  The full Event signature.
   */
  signature;
  /**
   *  The topic hash for the Event.
   */
  topic;
  /**
   *  The arguments passed into the Event with ``emit``.
   */
  args;
  /**
   *  @_ignore:
   */
  constructor(fragment, topic, args) {
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      signature,
      topic,
      args
    });
  }
};
var TransactionDescription = class {
  /**
   *  The matching fragment from the transaction ``data``.
   */
  fragment;
  /**
   *  The name of the Function from the transaction ``data``.
   */
  name;
  /**
   *  The arguments passed to the Function from the transaction ``data``.
   */
  args;
  /**
   *  The full Function signature from the transaction ``data``.
   */
  signature;
  /**
   *  The selector for the Function from the transaction ``data``.
   */
  selector;
  /**
   *  The ``value`` (in wei) from the transaction.
   */
  value;
  /**
   *  @_ignore:
   */
  constructor(fragment, selector, args, value) {
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector,
      value
    });
  }
};
var ErrorDescription = class {
  /**
   *  The matching fragment.
   */
  fragment;
  /**
   *  The name of the Error.
   */
  name;
  /**
   *  The arguments passed to the Error with ``revert``.
   */
  args;
  /**
   *  The full Error signature.
   */
  signature;
  /**
   *  The selector for the Error.
   */
  selector;
  /**
   *  @_ignore:
   */
  constructor(fragment, selector, args) {
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector
    });
  }
};
var Indexed = class {
  /**
   *  The ``keccak256`` of the value logged.
   */
  hash;
  /**
   *  @_ignore:
   */
  _isIndexed;
  /**
   *  Returns ``true`` if %%value%% is an **Indexed**.
   *
   *  This provides a Type Guard for property access.
   */
  static isIndexed(value) {
    return !!(value && value._isIndexed);
  }
  /**
   *  @_ignore:
   */
  constructor(hash) {
    defineProperties(this, { hash, _isIndexed: true });
  }
};
var PanicReasons2 = {
  "0": "generic panic",
  "1": "assert(false)",
  "17": "arithmetic overflow",
  "18": "division or modulo by zero",
  "33": "enum overflow",
  "34": "invalid encoded storage byte array accessed",
  "49": "out-of-bounds array access; popping on an empty array",
  "50": "out-of-bounds access of an array or bytesN",
  "65": "out of memory",
  "81": "uninitialized function"
};
var BuiltinErrors = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (message) => {
      return `reverted with reason string ${JSON.stringify(message)}`;
    }
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (code) => {
      let reason = "unknown panic code";
      if (code >= 0 && code <= 255 && PanicReasons2[code.toString()]) {
        reason = PanicReasons2[code.toString()];
      }
      return `reverted with panic code 0x${code.toString(16)} (${reason})`;
    }
  }
};
var Interface = class _Interface {
  /**
   *  All the Contract ABI members (i.e. methods, events, errors, etc).
   */
  fragments;
  /**
   *  The Contract constructor.
   */
  deploy;
  /**
   *  The Fallback method, if any.
   */
  fallback;
  /**
   *  If receiving ether is supported.
   */
  receive;
  #errors;
  #events;
  #functions;
  //    #structs: Map<string, StructFragment>;
  #abiCoder;
  /**
   *  Create a new Interface for the %%fragments%%.
   */
  constructor(fragments) {
    let abi = [];
    if (typeof fragments === "string") {
      abi = JSON.parse(fragments);
    } else {
      abi = fragments;
    }
    this.#functions = /* @__PURE__ */ new Map();
    this.#errors = /* @__PURE__ */ new Map();
    this.#events = /* @__PURE__ */ new Map();
    const frags = [];
    for (const a2 of abi) {
      try {
        frags.push(Fragment.from(a2));
      } catch (error) {
        console.log(`[Warning] Invalid Fragment ${JSON.stringify(a2)}:`, error.message);
      }
    }
    defineProperties(this, {
      fragments: Object.freeze(frags)
    });
    let fallback = null;
    let receive = false;
    this.#abiCoder = this.getAbiCoder();
    this.fragments.forEach((fragment, index) => {
      let bucket;
      switch (fragment.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          defineProperties(this, { deploy: fragment });
          return;
        case "fallback":
          if (fragment.inputs.length === 0) {
            receive = true;
          } else {
            assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index}]`, fragment);
            fallback = fragment;
            receive = fallback.payable;
          }
          return;
        case "function":
          bucket = this.#functions;
          break;
        case "event":
          bucket = this.#events;
          break;
        case "error":
          bucket = this.#errors;
          break;
        default:
          return;
      }
      const signature = fragment.format();
      if (bucket.has(signature)) {
        return;
      }
      bucket.set(signature, fragment);
    });
    if (!this.deploy) {
      defineProperties(this, {
        deploy: ConstructorFragment.from("constructor()")
      });
    }
    defineProperties(this, { fallback, receive });
  }
  /**
   *  Returns the entire Human-Readable ABI, as an array of
   *  signatures, optionally as %%minimal%% strings, which
   *  removes parameter names and unneceesary spaces.
   */
  format(minimal) {
    const format = minimal ? "minimal" : "full";
    const abi = this.fragments.map((f3) => f3.format(format));
    return abi;
  }
  /**
   *  Return the JSON-encoded ABI. This is the format Solidiy
   *  returns.
   */
  formatJson() {
    const abi = this.fragments.map((f3) => f3.format("json"));
    return JSON.stringify(abi.map((j2) => JSON.parse(j2)));
  }
  /**
   *  The ABI coder that will be used to encode and decode binary
   *  data.
   */
  getAbiCoder() {
    return AbiCoder.defaultAbiCoder();
  }
  // Find a function definition by any means necessary (unless it is ambiguous)
  #getFunction(key, values, forceUnique) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      for (const fragment of this.#functions.values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of this.#functions) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        const lastValue = values.length > 0 ? values[values.length - 1] : null;
        let valueLength = values.length;
        let allowOptions = true;
        if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
          allowOptions = false;
          valueLength--;
        }
        for (let i2 = matching.length - 1; i2 >= 0; i2--) {
          const inputs = matching[i2].inputs.length;
          if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
            matching.splice(i2, 1);
          }
        }
        for (let i2 = matching.length - 1; i2 >= 0; i2--) {
          const inputs = matching[i2].inputs;
          for (let j2 = 0; j2 < values.length; j2++) {
            if (!Typed.isTyped(values[j2])) {
              continue;
            }
            if (j2 >= inputs.length) {
              if (values[j2].type === "overrides") {
                continue;
              }
              matching.splice(i2, 1);
              break;
            }
            if (values[j2].type !== inputs[j2].baseType) {
              matching.splice(i2, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
        const lastArg = values[values.length - 1];
        if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
          matching.splice(0, 1);
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m5) => JSON.stringify(m5.format())).join(", ");
        assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = this.#functions.get(FunctionFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  }
  /**
   *  Get the function name for %%key%%, which may be a function selector,
   *  function name or function signature that belongs to the ABI.
   */
  getFunctionName(key) {
    const fragment = this.#getFunction(key, null, false);
    assertArgument(fragment, "no matching function", "key", key);
    return fragment.name;
  }
  /**
   *  Returns true if %%key%% (a function selector, function name or
   *  function signature) is present in the ABI.
   *
   *  In the case of a function name, the name may be ambiguous, so
   *  accessing the [[FunctionFragment]] may require refinement.
   */
  hasFunction(key) {
    return !!this.#getFunction(key, null, false);
  }
  /**
   *  Get the [[FunctionFragment]] for %%key%%, which may be a function
   *  selector, function name or function signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple functions match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single function in
   *  the ABI, this will throw.
   */
  getFunction(key, values) {
    return this.#getFunction(key, values || null, true);
  }
  /**
   *  Iterate over all functions, calling %%callback%%, sorted by their name.
   */
  forEachFunction(callback) {
    const names = Array.from(this.#functions.keys());
    names.sort((a2, b22) => a2.localeCompare(b22));
    for (let i2 = 0; i2 < names.length; i2++) {
      const name = names[i2];
      callback(this.#functions.get(name), i2);
    }
  }
  // Find an event definition by any means necessary (unless it is ambiguous)
  #getEvent(key, values, forceUnique) {
    if (isHexString(key)) {
      const eventTopic = key.toLowerCase();
      for (const fragment of this.#events.values()) {
        if (eventTopic === fragment.topicHash) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of this.#events) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (values) {
        for (let i2 = matching.length - 1; i2 >= 0; i2--) {
          if (matching[i2].inputs.length < values.length) {
            matching.splice(i2, 1);
          }
        }
        for (let i2 = matching.length - 1; i2 >= 0; i2--) {
          const inputs = matching[i2].inputs;
          for (let j2 = 0; j2 < values.length; j2++) {
            if (!Typed.isTyped(values[j2])) {
              continue;
            }
            if (values[j2].type !== inputs[j2].baseType) {
              matching.splice(i2, 1);
              break;
            }
          }
        }
      }
      if (matching.length === 0) {
        return null;
      }
      if (matching.length > 1 && forceUnique) {
        const matchStr = matching.map((m5) => JSON.stringify(m5.format())).join(", ");
        assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
      }
      return matching[0];
    }
    const result = this.#events.get(EventFragment.from(key).format());
    if (result) {
      return result;
    }
    return null;
  }
  /**
   *  Get the event name for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   */
  getEventName(key) {
    const fragment = this.#getEvent(key, null, false);
    assertArgument(fragment, "no matching event", "key", key);
    return fragment.name;
  }
  /**
   *  Returns true if %%key%% (an event topic hash, event name or
   *  event signature) is present in the ABI.
   *
   *  In the case of an event name, the name may be ambiguous, so
   *  accessing the [[EventFragment]] may require refinement.
   */
  hasEvent(key) {
    return !!this.#getEvent(key, null, false);
  }
  /**
   *  Get the [[EventFragment]] for %%key%%, which may be a topic hash,
   *  event name or event signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple events match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single event in
   *  the ABI, this will throw.
   */
  getEvent(key, values) {
    return this.#getEvent(key, values || null, true);
  }
  /**
   *  Iterate over all events, calling %%callback%%, sorted by their name.
   */
  forEachEvent(callback) {
    const names = Array.from(this.#events.keys());
    names.sort((a2, b22) => a2.localeCompare(b22));
    for (let i2 = 0; i2 < names.length; i2++) {
      const name = names[i2];
      callback(this.#events.get(name), i2);
    }
  }
  /**
   *  Get the [[ErrorFragment]] for %%key%%, which may be an error
   *  selector, error name or error signature that belongs to the ABI.
   *
   *  If %%values%% is provided, it will use the Typed API to handle
   *  ambiguous cases where multiple errors match by name.
   *
   *  If the %%key%% and %%values%% do not refine to a single error in
   *  the ABI, this will throw.
   */
  getError(key, values) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      if (BuiltinErrors[selector]) {
        return ErrorFragment.from(BuiltinErrors[selector].signature);
      }
      for (const fragment of this.#errors.values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of this.#errors) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (matching.length === 0) {
        if (key === "Error") {
          return ErrorFragment.from("error Error(string)");
        }
        if (key === "Panic") {
          return ErrorFragment.from("error Panic(uint256)");
        }
        return null;
      } else if (matching.length > 1) {
        const matchStr = matching.map((m5) => JSON.stringify(m5.format())).join(", ");
        assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
      }
      return matching[0];
    }
    key = ErrorFragment.from(key).format();
    if (key === "Error(string)") {
      return ErrorFragment.from("error Error(string)");
    }
    if (key === "Panic(uint256)") {
      return ErrorFragment.from("error Panic(uint256)");
    }
    const result = this.#errors.get(key);
    if (result) {
      return result;
    }
    return null;
  }
  /**
   *  Iterate over all errors, calling %%callback%%, sorted by their name.
   */
  forEachError(callback) {
    const names = Array.from(this.#errors.keys());
    names.sort((a2, b22) => a2.localeCompare(b22));
    for (let i2 = 0; i2 < names.length; i2++) {
      const name = names[i2];
      callback(this.#errors.get(name), i2);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(params, data) {
    return this.#abiCoder.decode(params, data);
  }
  _encodeParams(params, values) {
    return this.#abiCoder.encode(params, values);
  }
  /**
   *  Encodes a ``tx.data`` object for deploying the Contract with
   *  the %%values%% as the constructor arguments.
   */
  encodeDeploy(values) {
    return this._encodeParams(this.deploy.inputs, values || []);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified error (see [[getError]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeErrorResult(fragment, data) {
    if (typeof fragment === "string") {
      const f3 = this.getError(fragment);
      assertArgument(f3, "unknown error", "fragment", fragment);
      fragment = f3;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  /**
   *  Encodes the transaction revert data for a call result that
   *  reverted from the the Contract with the sepcified %%error%%
   *  (see [[getError]] for valid values for %%fragment%%) with the %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeErrorResult(fragment, values) {
    if (typeof fragment === "string") {
      const f3 = this.getError(fragment);
      assertArgument(f3, "unknown error", "fragment", fragment);
      fragment = f3;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  /**
   *  Decodes the %%data%% from a transaction ``tx.data`` for
   *  the function specified (see [[getFunction]] for valid values
   *  for %%fragment%%).
   *
   *  Most developers should prefer the [[parseTransaction]] method
   *  instead, which will automatically detect the fragment.
   */
  decodeFunctionData(fragment, data) {
    if (typeof fragment === "string") {
      const f3 = this.getFunction(fragment);
      assertArgument(f3, "unknown function", "fragment", fragment);
      fragment = f3;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  /**
   *  Encodes the ``tx.data`` for a transaction that calls the function
   *  specified (see [[getFunction]] for valid values for %%fragment%%) with
   *  the %%values%%.
   */
  encodeFunctionData(fragment, values) {
    if (typeof fragment === "string") {
      const f3 = this.getFunction(fragment);
      assertArgument(f3, "unknown function", "fragment", fragment);
      fragment = f3;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  /**
   *  Decodes the result %%data%% (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values for
   *  %%key%%).
   *
   *  Most developers should prefer the [[parseCallResult]] method instead,
   *  which will automatically detect a ``CALL_EXCEPTION`` and throw the
   *  corresponding error.
   */
  decodeFunctionResult(fragment, data) {
    if (typeof fragment === "string") {
      const f3 = this.getFunction(fragment);
      assertArgument(f3, "unknown function", "fragment", fragment);
      fragment = f3;
    }
    let message = "invalid length for result data";
    const bytes2 = getBytesCopy(data);
    if (bytes2.length % 32 === 0) {
      try {
        return this.#abiCoder.decode(fragment.outputs, bytes2);
      } catch (error) {
        message = "could not decode result data";
      }
    }
    assert(false, message, "BAD_DATA", {
      value: hexlify(bytes2),
      info: { method: fragment.name, signature: fragment.format() }
    });
  }
  makeError(_data, tx) {
    const data = getBytes(_data, "data");
    const error = AbiCoder.getBuiltinCallException("call", tx, data);
    const customPrefix = "execution reverted (unknown custom error)";
    if (error.message.startsWith(customPrefix)) {
      const selector = hexlify(data.slice(0, 4));
      const ef = this.getError(selector);
      if (ef) {
        try {
          const args = this.#abiCoder.decode(ef.inputs, data.slice(4));
          error.revert = {
            name: ef.name,
            signature: ef.format(),
            args
          };
          error.reason = error.revert.signature;
          error.message = `execution reverted: ${error.reason}`;
        } catch (e2) {
          error.message = `execution reverted (coult not decode custom error)`;
        }
      }
    }
    const parsed = this.parseTransaction(tx);
    if (parsed) {
      error.invocation = {
        method: parsed.name,
        signature: parsed.signature,
        args: parsed.args
      };
    }
    return error;
  }
  /**
   *  Encodes the result data (e.g. from an ``eth_call``) for the
   *  specified function (see [[getFunction]] for valid values
   *  for %%fragment%%) with %%values%%.
   *
   *  This is generally not used by most developers, unless trying to mock
   *  a result from a Contract.
   */
  encodeFunctionResult(fragment, values) {
    if (typeof fragment === "string") {
      const f3 = this.getFunction(fragment);
      assertArgument(f3, "unknown function", "fragment", fragment);
      fragment = f3;
    }
    return hexlify(this.#abiCoder.encode(fragment.outputs, values || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(fragment, values) {
    if (typeof fragment === "string") {
      const f3 = this.getEvent(fragment);
      assertArgument(f3, "unknown event", "eventFragment", fragment);
      fragment = f3;
    }
    assert(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
    const topics = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    const encodeTopic = (param, value) => {
      if (param.type === "string") {
        return id(value);
      } else if (param.type === "bytes") {
        return keccak256(hexlify(value));
      }
      if (param.type === "bool" && typeof value === "boolean") {
        value = value ? "0x01" : "0x00";
      } else if (param.type.match(/^u?int/)) {
        value = toBeHex(value);
      } else if (param.type.match(/^bytes/)) {
        value = zeroPadBytes(value, 32);
      } else if (param.type === "address") {
        this.#abiCoder.encode(["address"], [value]);
      }
      return zeroPadValue(hexlify(value), 32);
    };
    values.forEach((value, index) => {
      const param = fragment.inputs[index];
      if (!param.indexed) {
        assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
        return;
      }
      if (value == null) {
        topics.push(null);
      } else if (param.baseType === "array" || param.baseType === "tuple") {
        assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
      } else if (Array.isArray(value)) {
        topics.push(value.map((value2) => encodeTopic(param, value2)));
      } else {
        topics.push(encodeTopic(param, value));
      }
    });
    while (topics.length && topics[topics.length - 1] === null) {
      topics.pop();
    }
    return topics;
  }
  encodeEventLog(fragment, values) {
    if (typeof fragment === "string") {
      const f3 = this.getEvent(fragment);
      assertArgument(f3, "unknown event", "eventFragment", fragment);
      fragment = f3;
    }
    const topics = [];
    const dataTypes = [];
    const dataValues = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
    fragment.inputs.forEach((param, index) => {
      const value = values[index];
      if (param.indexed) {
        if (param.type === "string") {
          topics.push(id(value));
        } else if (param.type === "bytes") {
          topics.push(keccak256(value));
        } else if (param.baseType === "tuple" || param.baseType === "array") {
          throw new Error("not implemented");
        } else {
          topics.push(this.#abiCoder.encode([param.type], [value]));
        }
      } else {
        dataTypes.push(param);
        dataValues.push(value);
      }
    });
    return {
      data: this.#abiCoder.encode(dataTypes, dataValues),
      topics
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(fragment, data, topics) {
    if (typeof fragment === "string") {
      const f3 = this.getEvent(fragment);
      assertArgument(f3, "unknown event", "eventFragment", fragment);
      fragment = f3;
    }
    if (topics != null && !fragment.anonymous) {
      const eventTopic = fragment.topicHash;
      assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
      topics = topics.slice(1);
    }
    const indexed = [];
    const nonIndexed = [];
    const dynamic = [];
    fragment.inputs.forEach((param, index) => {
      if (param.indexed) {
        if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
          indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
          dynamic.push(true);
        } else {
          indexed.push(param);
          dynamic.push(false);
        }
      } else {
        nonIndexed.push(param);
        dynamic.push(false);
      }
    });
    const resultIndexed = topics != null ? this.#abiCoder.decode(indexed, concat(topics)) : null;
    const resultNonIndexed = this.#abiCoder.decode(nonIndexed, data, true);
    const values = [];
    const keys = [];
    let nonIndexedIndex = 0, indexedIndex = 0;
    fragment.inputs.forEach((param, index) => {
      let value = null;
      if (param.indexed) {
        if (resultIndexed == null) {
          value = new Indexed(null);
        } else if (dynamic[index]) {
          value = new Indexed(resultIndexed[indexedIndex++]);
        } else {
          try {
            value = resultIndexed[indexedIndex++];
          } catch (error) {
            value = error;
          }
        }
      } else {
        try {
          value = resultNonIndexed[nonIndexedIndex++];
        } catch (error) {
          value = error;
        }
      }
      values.push(value);
      keys.push(param.name || null);
    });
    return Result.fromItems(values, keys);
  }
  /**
   *  Parses a transaction, finding the matching function and extracts
   *  the parameter values along with other useful function details.
   *
   *  If the matching function cannot be found, return null.
   */
  parseTransaction(tx) {
    const data = getBytes(tx.data, "tx.data");
    const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
    const fragment = this.getFunction(hexlify(data.slice(0, 4)));
    if (!fragment) {
      return null;
    }
    const args = this.#abiCoder.decode(fragment.inputs, data.slice(4));
    return new TransactionDescription(fragment, fragment.selector, args, value);
  }
  parseCallResult(data) {
    throw new Error("@TODO");
  }
  /**
   *  Parses a receipt log, finding the matching event and extracts
   *  the parameter values along with other useful event details.
   *
   *  If the matching event cannot be found, returns null.
   */
  parseLog(log) {
    const fragment = this.getEvent(log.topics[0]);
    if (!fragment || fragment.anonymous) {
      return null;
    }
    return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
  }
  /**
   *  Parses a revert data, finding the matching error and extracts
   *  the parameter values along with other useful error details.
   *
   *  If the matching error cannot be found, returns null.
   */
  parseError(data) {
    const hexData = hexlify(data);
    const fragment = this.getError(dataSlice(hexData, 0, 4));
    if (!fragment) {
      return null;
    }
    const args = this.#abiCoder.decode(fragment.inputs, dataSlice(hexData, 4));
    return new ErrorDescription(fragment, fragment.selector, args);
  }
  /**
   *  Creates a new [[Interface]] from the ABI %%value%%.
   *
   *  The %%value%% may be provided as an existing [[Interface]] object,
   *  a JSON-encoded ABI or any Human-Readable ABI format.
   */
  static from(value) {
    if (value instanceof _Interface) {
      return value;
    }
    if (typeof value === "string") {
      return new _Interface(JSON.parse(value));
    }
    if (typeof value.formatJson === "function") {
      return new _Interface(value.formatJson());
    }
    if (typeof value.format === "function") {
      return new _Interface(value.format("json"));
    }
    return new _Interface(value);
  }
};
var BN_04 = BigInt(0);
function toJson(value) {
  if (value == null) {
    return null;
  }
  return value.toString();
}
function copyRequest(req) {
  const result = {};
  if (req.to) {
    result.to = req.to;
  }
  if (req.from) {
    result.from = req.from;
  }
  if (req.data) {
    result.data = hexlify(req.data);
  }
  const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
  for (const key of bigIntKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getBigInt(req[key], `request.${key}`);
  }
  const numberKeys = "type,nonce".split(/,/);
  for (const key of numberKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getNumber(req[key], `request.${key}`);
  }
  if (req.accessList) {
    result.accessList = accessListify(req.accessList);
  }
  if (req.authorizationList) {
    result.authorizationList = req.authorizationList.slice();
  }
  if ("blockTag" in req) {
    result.blockTag = req.blockTag;
  }
  if ("enableCcipRead" in req) {
    result.enableCcipRead = !!req.enableCcipRead;
  }
  if ("customData" in req) {
    result.customData = req.customData;
  }
  if ("blobVersionedHashes" in req && req.blobVersionedHashes) {
    result.blobVersionedHashes = req.blobVersionedHashes.slice();
  }
  if ("kzg" in req) {
    result.kzg = req.kzg;
  }
  if ("blobWrapperVersion" in req) {
    result.blobWrapperVersion = req.blobWrapperVersion;
  }
  if ("blobs" in req && req.blobs) {
    result.blobs = req.blobs.map((b22) => {
      if (isBytesLike(b22)) {
        return hexlify(b22);
      }
      return Object.assign({}, b22);
    });
  }
  return result;
}
var Log = class {
  /**
   *  The provider connected to the log used to fetch additional details
   *  if necessary.
   */
  provider;
  /**
   *  The transaction hash of the transaction this log occurred in. Use the
   *  [[Log-getTransaction]] to get the [[TransactionResponse]].
   */
  transactionHash;
  /**
   *  The block hash of the block this log occurred in. Use the
   *  [[Log-getBlock]] to get the [[Block]].
   */
  blockHash;
  /**
   *  The block number of the block this log occurred in. It is preferred
   *  to use the [[Block-hash]] when fetching the related [[Block]],
   *  since in the case of an orphaned block, the block at that height may
   *  have changed.
   */
  blockNumber;
  /**
   *  If the **Log** represents a block that was removed due to an orphaned
   *  block, this will be true.
   *
   *  This can only happen within an orphan event listener.
   */
  removed;
  /**
   *  The address of the contract that emitted this log.
   */
  address;
  /**
   *  The data included in this log when it was emitted.
   */
  data;
  /**
   *  The indexed topics included in this log when it was emitted.
   *
   *  All topics are included in the bloom filters, so they can be
   *  efficiently filtered using the [[Provider-getLogs]] method.
   */
  topics;
  /**
   *  The index within the block this log occurred at. This is generally
   *  not useful to developers, but can be used with the various roots
   *  to proof inclusion within a block.
   */
  index;
  /**
   *  The index within the transaction of this log.
   */
  transactionIndex;
  /**
   *  @_ignore:
   */
  constructor(log, provider) {
    this.provider = provider;
    const topics = Object.freeze(log.topics.slice());
    defineProperties(this, {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      removed: log.removed,
      address: log.address,
      data: log.data,
      topics,
      index: log.index,
      transactionIndex: log.transactionIndex
    });
  }
  /**
   *  Returns a JSON-compatible object.
   */
  toJSON() {
    const { address, blockHash, blockNumber, data, index, removed, topics, transactionHash, transactionIndex } = this;
    return {
      _type: "log",
      address,
      blockHash,
      blockNumber,
      data,
      index,
      removed,
      topics,
      transactionHash,
      transactionIndex
    };
  }
  /**
   *  Returns the block that this log occurred in.
   */
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    assert(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
    return block;
  }
  /**
   *  Returns the transaction that this log occurred in.
   */
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.transactionHash);
    assert(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
    return tx;
  }
  /**
   *  Returns the transaction receipt fot the transaction that this
   *  log occurred in.
   */
  async getTransactionReceipt() {
    const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
    assert(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
    return receipt;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return createRemovedLogFilter(this);
  }
};
var TransactionReceipt = class {
  /**
   *  The provider connected to the log used to fetch additional details
   *  if necessary.
   */
  provider;
  /**
   *  The address the transaction was sent to.
   */
  to;
  /**
   *  The sender of the transaction.
   */
  from;
  /**
   *  The address of the contract if the transaction was directly
   *  responsible for deploying one.
   *
   *  This is non-null **only** if the ``to`` is empty and the ``data``
   *  was successfully executed as initcode.
   */
  contractAddress;
  /**
   *  The transaction hash.
   */
  hash;
  /**
   *  The index of this transaction within the block transactions.
   */
  index;
  /**
   *  The block hash of the [[Block]] this transaction was included in.
   */
  blockHash;
  /**
   *  The block number of the [[Block]] this transaction was included in.
   */
  blockNumber;
  /**
   *  The bloom filter bytes that represent all logs that occurred within
   *  this transaction. This is generally not useful for most developers,
   *  but can be used to validate the included logs.
   */
  logsBloom;
  /**
   *  The actual amount of gas used by this transaction.
   *
   *  When creating a transaction, the amount of gas that will be used can
   *  only be approximated, but the sender must pay the gas fee for the
   *  entire gas limit. After the transaction, the difference is refunded.
   */
  gasUsed;
  /**
   *  The gas used for BLObs. See [[link-eip-4844]].
   */
  blobGasUsed;
  /**
   *  The amount of gas used by all transactions within the block for this
   *  and all transactions with a lower ``index``.
   *
   *  This is generally not useful for developers but can be used to
   *  validate certain aspects of execution.
   */
  cumulativeGasUsed;
  /**
   *  The actual gas price used during execution.
   *
   *  Due to the complexity of [[link-eip-1559]] this value can only
   *  be caluclated after the transaction has been mined, snce the base
   *  fee is protocol-enforced.
   */
  gasPrice;
  /**
   *  The price paid per BLOB in gas. See [[link-eip-4844]].
   */
  blobGasPrice;
  /**
   *  The [[link-eip-2718]] transaction type.
   */
  type;
  //readonly byzantium!: boolean;
  /**
   *  The status of this transaction, indicating success (i.e. ``1``) or
   *  a revert (i.e. ``0``).
   *
   *  This is available in post-byzantium blocks, but some backends may
   *  backfill this value.
   */
  status;
  /**
   *  The root hash of this transaction.
   *
   *  This is no present and was only included in pre-byzantium blocks, but
   *  could be used to validate certain parts of the receipt.
   */
  root;
  #logs;
  /**
   *  @_ignore:
   */
  constructor(tx, provider) {
    this.#logs = Object.freeze(tx.logs.map((log) => {
      return new Log(log, provider);
    }));
    let gasPrice = BN_04;
    if (tx.effectiveGasPrice != null) {
      gasPrice = tx.effectiveGasPrice;
    } else if (tx.gasPrice != null) {
      gasPrice = tx.gasPrice;
    }
    defineProperties(this, {
      provider,
      to: tx.to,
      from: tx.from,
      contractAddress: tx.contractAddress,
      hash: tx.hash,
      index: tx.index,
      blockHash: tx.blockHash,
      blockNumber: tx.blockNumber,
      logsBloom: tx.logsBloom,
      gasUsed: tx.gasUsed,
      cumulativeGasUsed: tx.cumulativeGasUsed,
      blobGasUsed: tx.blobGasUsed,
      gasPrice,
      blobGasPrice: tx.blobGasPrice,
      type: tx.type,
      //byzantium: tx.byzantium,
      status: tx.status,
      root: tx.root
    });
  }
  /**
   *  The logs for this transaction.
   */
  get logs() {
    return this.#logs;
  }
  /**
   *  Returns a JSON-compatible representation.
   */
  toJSON() {
    const {
      to,
      from,
      contractAddress,
      hash,
      index,
      blockHash,
      blockNumber,
      logsBloom,
      logs,
      //byzantium, 
      status,
      root
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash,
      blockNumber,
      //byzantium, 
      contractAddress,
      cumulativeGasUsed: toJson(this.cumulativeGasUsed),
      from,
      gasPrice: toJson(this.gasPrice),
      blobGasUsed: toJson(this.blobGasUsed),
      blobGasPrice: toJson(this.blobGasPrice),
      gasUsed: toJson(this.gasUsed),
      hash,
      index,
      logs,
      logsBloom,
      root,
      status,
      to
    };
  }
  /**
   *  @_ignore:
   */
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.length) {
          return { value: this.logs[index++], done: false };
        }
        return { value: void 0, done: true };
      }
    };
  }
  /**
   *  The total fee for this transaction, in wei.
   */
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  /**
   *  Resolves to the block this transaction occurred in.
   */
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  /**
   *  Resolves to the transaction this transaction occurred in.
   */
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.hash);
    if (tx == null) {
      throw new Error("TODO");
    }
    return tx;
  }
  /**
   *  Resolves to the return value of the execution of this transaction.
   *
   *  Support for this feature is limited, as it requires an archive node
   *  with the ``debug_`` or ``trace_`` API enabled.
   */
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  /**
   *  Resolves to the number of confirmations this transaction has.
   */
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  /**
   *  @_ignore:
   */
  removedEvent() {
    return createRemovedTransactionFilter(this);
  }
  /**
   *  @_ignore:
   */
  reorderedEvent(other) {
    assert(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
    return createReorderedTransactionFilter(this, other);
  }
};
var TransactionResponse = class _TransactionResponse {
  /**
   *  The provider this is connected to, which will influence how its
   *  methods will resolve its async inspection methods.
   */
  provider;
  /**
   *  The block number of the block that this transaction was included in.
   *
   *  This is ``null`` for pending transactions.
   */
  blockNumber;
  /**
   *  The blockHash of the block that this transaction was included in.
   *
   *  This is ``null`` for pending transactions.
   */
  blockHash;
  /**
   *  The index within the block that this transaction resides at.
   */
  index;
  /**
   *  The transaction hash.
   */
  hash;
  /**
   *  The [[link-eip-2718]] transaction envelope type. This is
   *  ``0`` for legacy transactions types.
   */
  type;
  /**
   *  The receiver of this transaction.
   *
   *  If ``null``, then the transaction is an initcode transaction.
   *  This means the result of executing the [[data]] will be deployed
   *  as a new contract on chain (assuming it does not revert) and the
   *  address may be computed using [[getCreateAddress]].
   */
  to;
  /**
   *  The sender of this transaction. It is implicitly computed
   *  from the transaction pre-image hash (as the digest) and the
   *  [[signature]] using ecrecover.
   */
  from;
  /**
   *  The nonce, which is used to prevent replay attacks and offer
   *  a method to ensure transactions from a given sender are explicitly
   *  ordered.
   *
   *  When sending a transaction, this must be equal to the number of
   *  transactions ever sent by [[from]].
   */
  nonce;
  /**
   *  The maximum units of gas this transaction can consume. If execution
   *  exceeds this, the entries transaction is reverted and the sender
   *  is charged for the full amount, despite not state changes being made.
   */
  gasLimit;
  /**
   *  The gas price can have various values, depending on the network.
   *
   *  In modern networks, for transactions that are included this is
   *  the //effective gas price// (the fee per gas that was actually
   *  charged), while for transactions that have not been included yet
   *  is the [[maxFeePerGas]].
   *
   *  For legacy transactions, or transactions on legacy networks, this
   *  is the fee that will be charged per unit of gas the transaction
   *  consumes.
   */
  gasPrice;
  /**
   *  The maximum priority fee (per unit of gas) to allow a
   *  validator to charge the sender. This is inclusive of the
   *  [[maxFeeFeePerGas]].
   */
  maxPriorityFeePerGas;
  /**
   *  The maximum fee (per unit of gas) to allow this transaction
   *  to charge the sender.
   */
  maxFeePerGas;
  /**
   *  The [[link-eip-4844]] max fee per BLOb gas.
   */
  maxFeePerBlobGas;
  /**
   *  The data.
   */
  data;
  /**
   *  The value, in wei. Use [[formatEther]] to format this value
   *  as ether.
   */
  value;
  /**
   *  The chain ID.
   */
  chainId;
  /**
   *  The signature.
   */
  signature;
  /**
   *  The [[link-eip-2930]] access list for transaction types that
   *  support it, otherwise ``null``.
   */
  accessList;
  /**
   *  The [[link-eip-4844]] BLOb versioned hashes.
   */
  blobVersionedHashes;
  /**
   *  The [[link-eip-7702]] authorizations (if any).
   */
  authorizationList;
  #startBlock;
  /**
   *  @_ignore:
   */
  constructor(tx, provider) {
    this.provider = provider;
    this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
    this.blockHash = tx.blockHash != null ? tx.blockHash : null;
    this.hash = tx.hash;
    this.index = tx.index;
    this.type = tx.type;
    this.from = tx.from;
    this.to = tx.to || null;
    this.gasLimit = tx.gasLimit;
    this.nonce = tx.nonce;
    this.data = tx.data;
    this.value = tx.value;
    this.gasPrice = tx.gasPrice;
    this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
    this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
    this.maxFeePerBlobGas = tx.maxFeePerBlobGas != null ? tx.maxFeePerBlobGas : null;
    this.chainId = tx.chainId;
    this.signature = tx.signature;
    this.accessList = tx.accessList != null ? tx.accessList : null;
    this.blobVersionedHashes = tx.blobVersionedHashes != null ? tx.blobVersionedHashes : null;
    this.authorizationList = tx.authorizationList != null ? tx.authorizationList : null;
    this.#startBlock = -1;
  }
  /**
   *  Returns a JSON-compatible representation of this transaction.
   */
  toJSON() {
    const { blockNumber, blockHash, index, hash, type, to, from, nonce, data, signature, accessList, blobVersionedHashes } = this;
    return {
      _type: "TransactionResponse",
      accessList,
      blockNumber,
      blockHash,
      blobVersionedHashes,
      chainId: toJson(this.chainId),
      data,
      from,
      gasLimit: toJson(this.gasLimit),
      gasPrice: toJson(this.gasPrice),
      hash,
      maxFeePerGas: toJson(this.maxFeePerGas),
      maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
      maxFeePerBlobGas: toJson(this.maxFeePerBlobGas),
      nonce,
      signature,
      to,
      index,
      type,
      value: toJson(this.value)
    };
  }
  /**
   *  Resolves to the Block that this transaction was included in.
   *
   *  This will return null if the transaction has not been included yet.
   */
  async getBlock() {
    let blockNumber = this.blockNumber;
    if (blockNumber == null) {
      const tx = await this.getTransaction();
      if (tx) {
        blockNumber = tx.blockNumber;
      }
    }
    if (blockNumber == null) {
      return null;
    }
    const block = this.provider.getBlock(blockNumber);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  /**
   *  Resolves to this transaction being re-requested from the
   *  provider. This can be used if you have an unmined transaction
   *  and wish to get an up-to-date populated instance.
   */
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  /**
   *  Resolve to the number of confirmations this transaction has.
   */
  async confirmations() {
    if (this.blockNumber == null) {
      const { tx, blockNumber: blockNumber2 } = await resolveProperties({
        tx: this.getTransaction(),
        blockNumber: this.provider.getBlockNumber()
      });
      if (tx == null || tx.blockNumber == null) {
        return 0;
      }
      return blockNumber2 - tx.blockNumber + 1;
    }
    const blockNumber = await this.provider.getBlockNumber();
    return blockNumber - this.blockNumber + 1;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(_confirms, _timeout) {
    const confirms = _confirms == null ? 1 : _confirms;
    const timeout = _timeout == null ? 0 : _timeout;
    let startBlock = this.#startBlock;
    let nextScan = -1;
    let stopScanning = startBlock === -1 ? true : false;
    const checkReplacement = async () => {
      if (stopScanning) {
        return null;
      }
      const { blockNumber, nonce } = await resolveProperties({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (nonce < this.nonce) {
        startBlock = blockNumber;
        return;
      }
      if (stopScanning) {
        return null;
      }
      const mined = await this.getTransaction();
      if (mined && mined.blockNumber != null) {
        return;
      }
      if (nextScan === -1) {
        nextScan = startBlock - 3;
        if (nextScan < this.#startBlock) {
          nextScan = this.#startBlock;
        }
      }
      while (nextScan <= blockNumber) {
        if (stopScanning) {
          return null;
        }
        const block = await this.provider.getBlock(nextScan, true);
        if (block == null) {
          return;
        }
        for (const hash of block) {
          if (hash === this.hash) {
            return;
          }
        }
        for (let i2 = 0; i2 < block.length; i2++) {
          const tx = await block.getTransaction(i2);
          if (tx.from === this.from && tx.nonce === this.nonce) {
            if (stopScanning) {
              return null;
            }
            const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
            if (receipt2 == null) {
              return;
            }
            if (blockNumber - receipt2.blockNumber + 1 < confirms) {
              return;
            }
            let reason = "replaced";
            if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
              reason = "repriced";
            } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_04) {
              reason = "cancelled";
            }
            assert(false, "transaction was replaced", "TRANSACTION_REPLACED", {
              cancelled: reason === "replaced" || reason === "cancelled",
              reason,
              replacement: tx.replaceableTransaction(startBlock),
              hash: tx.hash,
              receipt: receipt2
            });
          }
        }
        nextScan++;
      }
      return;
    };
    const checkReceipt = (receipt2) => {
      if (receipt2 == null || receipt2.status !== 0) {
        return receipt2;
      }
      assert(false, "transaction execution reverted", "CALL_EXCEPTION", {
        action: "sendTransaction",
        data: null,
        reason: null,
        invocation: null,
        revert: null,
        transaction: {
          to: receipt2.to,
          from: receipt2.from,
          data: ""
          // @TODO: in v7, split out sendTransaction properties
        },
        receipt: receipt2
      });
    };
    const receipt = await this.provider.getTransactionReceipt(this.hash);
    if (confirms === 0) {
      return checkReceipt(receipt);
    }
    if (receipt) {
      if (confirms === 1 || await receipt.confirmations() >= confirms) {
        return checkReceipt(receipt);
      }
    } else {
      await checkReplacement();
      if (confirms === 0) {
        return null;
      }
    }
    const waiter = new Promise((resolve, reject) => {
      const cancellers = [];
      const cancel = () => {
        cancellers.forEach((c3) => c3());
      };
      cancellers.push(() => {
        stopScanning = true;
      });
      if (timeout > 0) {
        const timer = setTimeout(() => {
          cancel();
          reject(makeError("wait for transaction timeout", "TIMEOUT"));
        }, timeout);
        cancellers.push(() => {
          clearTimeout(timer);
        });
      }
      const txListener = async (receipt2) => {
        if (await receipt2.confirmations() >= confirms) {
          cancel();
          try {
            resolve(checkReceipt(receipt2));
          } catch (error) {
            reject(error);
          }
        }
      };
      cancellers.push(() => {
        this.provider.off(this.hash, txListener);
      });
      this.provider.on(this.hash, txListener);
      if (startBlock >= 0) {
        const replaceListener = async () => {
          try {
            await checkReplacement();
          } catch (error) {
            if (isError(error, "TRANSACTION_REPLACED")) {
              cancel();
              reject(error);
              return;
            }
          }
          if (!stopScanning) {
            this.provider.once("block", replaceListener);
          }
        };
        cancellers.push(() => {
          this.provider.off("block", replaceListener);
        });
        this.provider.once("block", replaceListener);
      }
    });
    return await waiter;
  }
  /**
   *  Returns ``true`` if this transaction has been included.
   *
   *  This is effective only as of the time the TransactionResponse
   *  was instantiated. To get up-to-date information, use
   *  [[getTransaction]].
   *
   *  This provides a Type Guard that this transaction will have
   *  non-null property values for properties that are null for
   *  unmined transactions.
   */
  isMined() {
    return this.blockHash != null;
  }
  /**
   *  Returns true if the transaction is a legacy (i.e. ``type == 0``)
   *  transaction.
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if the transaction is a Berlin (i.e. ``type == 1``)
   *  transaction. See [[link-eip-2070]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if the transaction is a London (i.e. ``type == 2``)
   *  transaction. See [[link-eip-1559]].
   *
   *  This provides a Type Guard that this transaction will have
   *  the ``null``-ness for hardfork-specific properties set correctly.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
   *  transaction. See [[link-eip-4844]].
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that evict this transaction.
   */
  removedEvent() {
    assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createRemovedTransactionFilter(this);
  }
  /**
   *  Returns a filter which can be used to listen for orphan events
   *  that re-order this event against %%other%%.
   */
  reorderedEvent(other) {
    assert(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    assert(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createReorderedTransactionFilter(this, other);
  }
  /**
   *  Returns a new TransactionResponse instance which has the ability to
   *  detect (and throw an error) if the transaction is replaced, which
   *  will begin scanning at %%startBlock%%.
   *
   *  This should generally not be used by developers and is intended
   *  primarily for internal use. Setting an incorrect %%startBlock%% can
   *  have devastating performance consequences if used incorrectly.
   */
  replaceableTransaction(startBlock) {
    assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
    const tx = new _TransactionResponse(this, this.provider);
    tx.#startBlock = startBlock;
    return tx;
  }
};
function createReorderedTransactionFilter(tx, other) {
  return { orphan: "reorder-transaction", tx, other };
}
function createRemovedTransactionFilter(tx) {
  return { orphan: "drop-transaction", tx };
}
function createRemovedLogFilter(log) {
  return { orphan: "drop-log", log: {
    transactionHash: log.transactionHash,
    blockHash: log.blockHash,
    blockNumber: log.blockNumber,
    address: log.address,
    data: log.data,
    topics: Object.freeze(log.topics.slice()),
    index: log.index
  } };
}
var EventLog = class extends Log {
  /**
   *  The Contract Interface.
   */
  interface;
  /**
   *  The matching event.
   */
  fragment;
  /**
   *  The parsed arguments passed to the event by ``emit``.
   */
  args;
  /**
   * @_ignore:
   */
  constructor(log, iface, fragment) {
    super(log, log.provider);
    const args = iface.decodeEventLog(fragment, log.data, log.topics);
    defineProperties(this, { args, fragment, interface: iface });
  }
  /**
   *  The name of the event.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The signature of the event.
   */
  get eventSignature() {
    return this.fragment.format();
  }
};
var UndecodedEventLog = class extends Log {
  /**
   *  The error encounted when trying to decode the log.
   */
  error;
  /**
   * @_ignore:
   */
  constructor(log, error) {
    super(log, log.provider);
    defineProperties(this, { error });
  }
};
var ContractTransactionReceipt = class extends TransactionReceipt {
  #iface;
  /**
   *  @_ignore:
   */
  constructor(iface, provider, tx) {
    super(tx, provider);
    this.#iface = iface;
  }
  /**
   *  The parsed logs for any [[Log]] which has a matching event in the
   *  Contract ABI.
   */
  get logs() {
    return super.logs.map((log) => {
      const fragment = log.topics.length ? this.#iface.getEvent(log.topics[0]) : null;
      if (fragment) {
        try {
          return new EventLog(log, this.#iface, fragment);
        } catch (error) {
          return new UndecodedEventLog(log, error);
        }
      }
      return log;
    });
  }
};
var ContractTransactionResponse = class extends TransactionResponse {
  #iface;
  /**
   *  @_ignore:
   */
  constructor(iface, provider, tx) {
    super(tx, provider);
    this.#iface = iface;
  }
  /**
   *  Resolves once this transaction has been mined and has
   *  %%confirms%% blocks including it (default: ``1``) with an
   *  optional %%timeout%%.
   *
   *  This can resolve to ``null`` only if %%confirms%% is ``0``
   *  and the transaction has not been mined, otherwise this will
   *  wait until enough confirmations have completed.
   */
  async wait(confirms, timeout) {
    const receipt = await super.wait(confirms, timeout);
    if (receipt == null) {
      return null;
    }
    return new ContractTransactionReceipt(this.#iface, this.provider, receipt);
  }
};
var ContractUnknownEventPayload = class extends EventPayload {
  /**
   *  The log with no matching events.
   */
  log;
  /**
   *  @_event:
   */
  constructor(contract, listener, filter, log) {
    super(contract, listener, filter);
    defineProperties(this, { log });
  }
  /**
   *  Resolves to the block the event occured in.
   */
  async getBlock() {
    return await this.log.getBlock();
  }
  /**
   *  Resolves to the transaction the event occured in.
   */
  async getTransaction() {
    return await this.log.getTransaction();
  }
  /**
   *  Resolves to the transaction receipt the event occured in.
   */
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
};
var ContractEventPayload = class extends ContractUnknownEventPayload {
  /**
   *  @_ignore:
   */
  constructor(contract, listener, filter, fragment, _log) {
    super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
    const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
    defineProperties(this, { args, fragment });
  }
  /**
   *  The event name.
   */
  get eventName() {
    return this.fragment.name;
  }
  /**
   *  The event signature.
   */
  get eventSignature() {
    return this.fragment.format();
  }
};
var BN_05 = BigInt(0);
function canCall(value) {
  return value && typeof value.call === "function";
}
function canEstimate(value) {
  return value && typeof value.estimateGas === "function";
}
function canResolve(value) {
  return value && typeof value.resolveName === "function";
}
function canSend(value) {
  return value && typeof value.sendTransaction === "function";
}
function getResolver(value) {
  if (value != null) {
    if (canResolve(value)) {
      return value;
    }
    if (value.provider) {
      return value.provider;
    }
  }
  return void 0;
}
var PreparedTopicFilter = class {
  #filter;
  fragment;
  constructor(contract, fragment, args) {
    defineProperties(this, { fragment });
    if (fragment.inputs.length < args.length) {
      throw new Error("too many arguments");
    }
    const runner = getRunner(contract.runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    this.#filter = (async function() {
      const resolvedArgs = await Promise.all(fragment.inputs.map((param, index) => {
        const arg = args[index];
        if (arg == null) {
          return null;
        }
        return param.walkAsync(args[index], (type, value) => {
          if (type === "address") {
            if (Array.isArray(value)) {
              return Promise.all(value.map((v5) => resolveAddress(v5, resolver)));
            }
            return resolveAddress(value, resolver);
          }
          return value;
        });
      }));
      return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
    })();
  }
  getTopicFilter() {
    return this.#filter;
  }
};
function getRunner(value, feature) {
  if (value == null) {
    return null;
  }
  if (typeof value[feature] === "function") {
    return value;
  }
  if (value.provider && typeof value.provider[feature] === "function") {
    return value.provider;
  }
  return null;
}
function getProvider(value) {
  if (value == null) {
    return null;
  }
  return value.provider || null;
}
async function copyOverrides(arg, allowed) {
  const _overrides = Typed.dereference(arg, "overrides");
  assertArgument(typeof _overrides === "object", "invalid overrides parameter", "overrides", arg);
  const overrides = copyRequest(_overrides);
  assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
  assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
  if (overrides.from) {
    overrides.from = overrides.from;
  }
  return overrides;
}
async function resolveArgs(_runner, inputs, args) {
  const runner = getRunner(_runner, "resolveName");
  const resolver = canResolve(runner) ? runner : null;
  return await Promise.all(inputs.map((param, index) => {
    return param.walkAsync(args[index], (type, value) => {
      value = Typed.dereference(value, type);
      if (type === "address") {
        return resolveAddress(value, resolver);
      }
      return value;
    });
  }));
}
function buildWrappedFallback(contract) {
  const populateTransaction = async function(overrides) {
    const tx = await copyOverrides(overrides, ["data"]);
    tx.to = await contract.getAddress();
    if (tx.from) {
      tx.from = await resolveAddress(tx.from, getResolver(contract.runner));
    }
    const iface = contract.interface;
    const noValue = getBigInt(tx.value || BN_05, "overrides.value") === BN_05;
    const noData = (tx.data || "0x") === "0x";
    if (iface.fallback && !iface.fallback.payable && iface.receive && !noData && !noValue) {
      assertArgument(false, "cannot send data to receive or send value to non-payable fallback", "overrides", overrides);
    }
    assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
    const payable = iface.receive || iface.fallback && iface.fallback.payable;
    assertArgument(payable || noValue, "cannot send value to non-payable fallback", "overrides.value", tx.value);
    assertArgument(iface.fallback || noData, "cannot send data to receive-only contract", "overrides.data", tx.data);
    return tx;
  };
  const staticCall = async function(overrides) {
    const runner = getRunner(contract.runner, "call");
    assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await populateTransaction(overrides);
    try {
      return await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
  };
  const send = async function(overrides) {
    const runner = contract.runner;
    assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await populateTransaction(overrides));
    const provider = getProvider(contract.runner);
    return new ContractTransactionResponse(contract.interface, provider, tx);
  };
  const estimateGas = async function(overrides) {
    const runner = getRunner(contract.runner, "estimateGas");
    assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await populateTransaction(overrides));
  };
  const method = async (overrides) => {
    return await send(overrides);
  };
  defineProperties(method, {
    _contract: contract,
    estimateGas,
    populateTransaction,
    send,
    staticCall
  });
  return method;
}
function buildWrappedMethod(contract, key) {
  const getFragment = function(...args) {
    const fragment = contract.interface.getFunction(key, args);
    assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key, args }
    });
    return fragment;
  };
  const populateTransaction = async function(...args) {
    const fragment = getFragment(...args);
    let overrides = {};
    if (fragment.inputs.length + 1 === args.length) {
      overrides = await copyOverrides(args.pop());
      if (overrides.from) {
        overrides.from = await resolveAddress(overrides.from, getResolver(contract.runner));
      }
    }
    if (fragment.inputs.length !== args.length) {
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    }
    const resolvedArgs = await resolveArgs(contract.runner, fragment.inputs, args);
    return Object.assign({}, overrides, await resolveProperties({
      to: contract.getAddress(),
      data: contract.interface.encodeFunctionData(fragment, resolvedArgs)
    }));
  };
  const staticCall = async function(...args) {
    const result = await staticCallResult(...args);
    if (result.length === 1) {
      return result[0];
    }
    return result;
  };
  const send = async function(...args) {
    const runner = contract.runner;
    assert(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await populateTransaction(...args));
    const provider = getProvider(contract.runner);
    return new ContractTransactionResponse(contract.interface, provider, tx);
  };
  const estimateGas = async function(...args) {
    const runner = getRunner(contract.runner, "estimateGas");
    assert(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await populateTransaction(...args));
  };
  const staticCallResult = async function(...args) {
    const runner = getRunner(contract.runner, "call");
    assert(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await populateTransaction(...args);
    let result = "0x";
    try {
      result = await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
    const fragment = getFragment(...args);
    return contract.interface.decodeFunctionResult(fragment, result);
  };
  const method = async (...args) => {
    const fragment = getFragment(...args);
    if (fragment.constant) {
      return await staticCall(...args);
    }
    return await send(...args);
  };
  defineProperties(method, {
    name: contract.interface.getFunctionName(key),
    _contract: contract,
    _key: key,
    getFragment,
    estimateGas,
    populateTransaction,
    send,
    staticCall,
    staticCallResult
  });
  Object.defineProperty(method, "fragment", {
    configurable: false,
    enumerable: true,
    get: () => {
      const fragment = contract.interface.getFunction(key);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key }
      });
      return fragment;
    }
  });
  return method;
}
function buildWrappedEvent(contract, key) {
  const getFragment = function(...args) {
    const fragment = contract.interface.getEvent(key, args);
    assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment",
      info: { key, args }
    });
    return fragment;
  };
  const method = function(...args) {
    return new PreparedTopicFilter(contract, getFragment(...args), args);
  };
  defineProperties(method, {
    name: contract.interface.getEventName(key),
    _contract: contract,
    _key: key,
    getFragment
  });
  Object.defineProperty(method, "fragment", {
    configurable: false,
    enumerable: true,
    get: () => {
      const fragment = contract.interface.getEvent(key);
      assert(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
        operation: "fragment",
        info: { key }
      });
      return fragment;
    }
  });
  return method;
}
var internal2 = /* @__PURE__ */ Symbol.for("_ethersInternal_contract");
var internalValues = /* @__PURE__ */ new WeakMap();
function setInternal(contract, values) {
  internalValues.set(contract[internal2], values);
}
function getInternal(contract) {
  return internalValues.get(contract[internal2]);
}
function isDeferred(value) {
  return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
}
async function getSubInfo(contract, event) {
  let topics;
  let fragment = null;
  if (Array.isArray(event)) {
    const topicHashify = function(name) {
      if (isHexString(name, 32)) {
        return name;
      }
      const fragment2 = contract.interface.getEvent(name);
      assertArgument(fragment2, "unknown fragment", "name", name);
      return fragment2.topicHash;
    };
    topics = event.map((e2) => {
      if (e2 == null) {
        return null;
      }
      if (Array.isArray(e2)) {
        return e2.map(topicHashify);
      }
      return topicHashify(e2);
    });
  } else if (event === "*") {
    topics = [null];
  } else if (typeof event === "string") {
    if (isHexString(event, 32)) {
      topics = [event];
    } else {
      fragment = contract.interface.getEvent(event);
      assertArgument(fragment, "unknown fragment", "event", event);
      topics = [fragment.topicHash];
    }
  } else if (isDeferred(event)) {
    topics = await event.getTopicFilter();
  } else if ("fragment" in event) {
    fragment = event.fragment;
    topics = [fragment.topicHash];
  } else {
    assertArgument(false, "unknown event name", "event", event);
  }
  topics = topics.map((t2) => {
    if (t2 == null) {
      return null;
    }
    if (Array.isArray(t2)) {
      const items = Array.from(new Set(t2.map((t22) => t22.toLowerCase())).values());
      if (items.length === 1) {
        return items[0];
      }
      items.sort();
      return items;
    }
    return t2.toLowerCase();
  });
  const tag = topics.map((t2) => {
    if (t2 == null) {
      return "null";
    }
    if (Array.isArray(t2)) {
      return t2.join("|");
    }
    return t2;
  }).join("&");
  return { fragment, tag, topics };
}
async function hasSub(contract, event) {
  const { subs } = getInternal(contract);
  return subs.get((await getSubInfo(contract, event)).tag) || null;
}
async function getSub(contract, operation, event) {
  const provider = getProvider(contract.runner);
  assert(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
  const { fragment, tag, topics } = await getSubInfo(contract, event);
  const { addr, subs } = getInternal(contract);
  let sub = subs.get(tag);
  if (!sub) {
    const address = addr ? addr : contract;
    const filter = { address, topics };
    const listener = (log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = contract.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        const _foundFragment = foundFragment;
        const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
        emit(contract, event, args, (listener2) => {
          return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
        });
      } else {
        emit(contract, event, [], (listener2) => {
          return new ContractUnknownEventPayload(contract, listener2, event, log);
        });
      }
    };
    let starting = [];
    const start = () => {
      if (starting.length) {
        return;
      }
      starting.push(provider.on(filter, listener));
    };
    const stop = async () => {
      if (starting.length == 0) {
        return;
      }
      let started = starting;
      starting = [];
      await Promise.all(started);
      provider.off(filter, listener);
    };
    sub = { tag, listeners: [], start, stop };
    subs.set(tag, sub);
  }
  return sub;
}
var lastEmit = Promise.resolve();
async function _emit(contract, event, args, payloadFunc) {
  await lastEmit;
  const sub = await hasSub(contract, event);
  if (!sub) {
    return false;
  }
  const count = sub.listeners.length;
  sub.listeners = sub.listeners.filter(({ listener, once }) => {
    const passArgs = Array.from(args);
    if (payloadFunc) {
      passArgs.push(payloadFunc(once ? null : listener));
    }
    try {
      listener.call(contract, ...passArgs);
    } catch (error) {
    }
    return !once;
  });
  if (sub.listeners.length === 0) {
    sub.stop();
    getInternal(contract).subs.delete(sub.tag);
  }
  return count > 0;
}
async function emit(contract, event, args, payloadFunc) {
  try {
    await lastEmit;
  } catch (error) {
  }
  const resultPromise = _emit(contract, event, args, payloadFunc);
  lastEmit = resultPromise;
  return await resultPromise;
}
var passProperties2 = ["then"];
var BaseContract = class _BaseContract {
  /**
   *  The target to connect to.
   *
   *  This can be an address, ENS name or any [[Addressable]], such as
   *  another contract. To get the resolved address, use the ``getAddress``
   *  method.
   */
  target;
  /**
   *  The contract Interface.
   */
  interface;
  /**
   *  The connected runner. This is generally a [[Provider]] or a
   *  [[Signer]], which dictates what operations are supported.
   *
   *  For example, a **Contract** connected to a [[Provider]] may
   *  only execute read-only operations.
   */
  runner;
  /**
   *  All the Events available on this contract.
   */
  filters;
  /**
   *  @_ignore:
   */
  [internal2];
  /**
   *  The fallback or receive function if any.
   */
  fallback;
  /**
   *  Creates a new contract connected to %%target%% with the %%abi%% and
   *  optionally connected to a %%runner%% to perform operations on behalf
   *  of.
   */
  constructor(target, abi, runner, _deployTx) {
    assertArgument(typeof target === "string" || isAddressable(target), "invalid value for Contract target", "target", target);
    if (runner == null) {
      runner = null;
    }
    const iface = Interface.from(abi);
    defineProperties(this, { target, runner, interface: iface });
    Object.defineProperty(this, internal2, { value: {} });
    let addrPromise;
    let addr = null;
    let deployTx = null;
    if (_deployTx) {
      const provider = getProvider(runner);
      deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
    }
    let subs = /* @__PURE__ */ new Map();
    if (typeof target === "string") {
      if (isHexString(target)) {
        addr = target;
        addrPromise = Promise.resolve(target);
      } else {
        const resolver = getRunner(runner, "resolveName");
        if (!canResolve(resolver)) {
          throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        }
        addrPromise = resolver.resolveName(target).then((addr2) => {
          if (addr2 == null) {
            throw makeError("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
              value: target
            });
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
    } else {
      addrPromise = target.getAddress().then((addr2) => {
        if (addr2 == null) {
          throw new Error("TODO");
        }
        getInternal(this).addr = addr2;
        return addr2;
      });
    }
    setInternal(this, { addrPromise, addr, deployTx, subs });
    const filters = new Proxy({}, {
      get: (target2, prop, receiver) => {
        if (typeof prop === "symbol" || passProperties2.indexOf(prop) >= 0) {
          return Reflect.get(target2, prop, receiver);
        }
        try {
          return this.getEvent(prop);
        } catch (error) {
          if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
            throw error;
          }
        }
        return void 0;
      },
      has: (target2, prop) => {
        if (passProperties2.indexOf(prop) >= 0) {
          return Reflect.has(target2, prop);
        }
        return Reflect.has(target2, prop) || this.interface.hasEvent(String(prop));
      }
    });
    defineProperties(this, { filters });
    defineProperties(this, {
      fallback: iface.receive || iface.fallback ? buildWrappedFallback(this) : null
    });
    return new Proxy(this, {
      get: (target2, prop, receiver) => {
        if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
          return Reflect.get(target2, prop, receiver);
        }
        try {
          return target2.getFunction(prop);
        } catch (error) {
          if (!isError(error, "INVALID_ARGUMENT") || error.argument !== "key") {
            throw error;
          }
        }
        return void 0;
      },
      has: (target2, prop) => {
        if (typeof prop === "symbol" || prop in target2 || passProperties2.indexOf(prop) >= 0) {
          return Reflect.has(target2, prop);
        }
        return target2.interface.hasFunction(prop);
      }
    });
  }
  /**
   *  Return a new Contract instance with the same target and ABI, but
   *  a different %%runner%%.
   */
  connect(runner) {
    return new _BaseContract(this.target, this.interface, runner);
  }
  /**
   *  Return a new Contract instance with the same ABI and runner, but
   *  a different %%target%%.
   */
  attach(target) {
    return new _BaseContract(target, this.interface, this.runner);
  }
  /**
   *  Return the resolved address of this Contract.
   */
  async getAddress() {
    return await getInternal(this).addrPromise;
  }
  /**
   *  Return the deployed bytecode or null if no bytecode is found.
   */
  async getDeployedCode() {
    const provider = getProvider(this.runner);
    assert(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const code = await provider.getCode(await this.getAddress());
    if (code === "0x") {
      return null;
    }
    return code;
  }
  /**
   *  Resolve to this Contract once the bytecode has been deployed, or
   *  resolve immediately if already deployed.
   */
  async waitForDeployment() {
    const deployTx = this.deploymentTransaction();
    if (deployTx) {
      await deployTx.wait();
      return this;
    }
    const code = await this.getDeployedCode();
    if (code != null) {
      return this;
    }
    const provider = getProvider(this.runner);
    assert(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
    return new Promise((resolve, reject) => {
      const checkCode = async () => {
        try {
          const code2 = await this.getDeployedCode();
          if (code2 != null) {
            return resolve(this);
          }
          provider.once("block", checkCode);
        } catch (error) {
          reject(error);
        }
      };
      checkCode();
    });
  }
  /**
   *  Return the transaction used to deploy this contract.
   *
   *  This is only available if this instance was returned from a
   *  [[ContractFactory]].
   */
  deploymentTransaction() {
    return getInternal(this).deployTx;
  }
  /**
   *  Return the function for a given name. This is useful when a contract
   *  method name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programmatically.
   */
  getFunction(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    const func = buildWrappedMethod(this, key);
    return func;
  }
  /**
   *  Return the event for a given name. This is useful when a contract
   *  event name conflicts with a JavaScript name such as ``prototype`` or
   *  when using a Contract programmatically.
   */
  getEvent(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    return buildWrappedEvent(this, key);
  }
  /**
   *  @_ignore:
   */
  async queryTransaction(hash) {
    throw new Error("@TODO");
  }
  /*
      // @TODO: this is a non-backwards compatible change, but will be added
      //        in v7 and in a potential SmartContract class in an upcoming
      //        v6 release
      async getTransactionReceipt(hash: string): Promise<null | ContractTransactionReceipt> {
          const provider = getProvider(this.runner);
          assert(provider, "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION", { operation: "queryTransaction" });
  
          const receipt = await provider.getTransactionReceipt(hash);
          if (receipt == null) { return null; }
  
          return new ContractTransactionReceipt(this.interface, provider, receipt);
      }
      */
  /**
   *  Provide historic access to event data for %%event%% in the range
   *  %%fromBlock%% (default: ``0``) to %%toBlock%% (default: ``"latest"``)
   *  inclusive.
   */
  async queryFilter(event, fromBlock, toBlock) {
    if (fromBlock == null) {
      fromBlock = 0;
    }
    if (toBlock == null) {
      toBlock = "latest";
    }
    const { addr, addrPromise } = getInternal(this);
    const address = addr ? addr : await addrPromise;
    const { fragment, topics } = await getSubInfo(this, event);
    const filter = { address, topics, fromBlock, toBlock };
    const provider = getProvider(this.runner);
    assert(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
    return (await provider.getLogs(filter)).map((log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = this.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        try {
          return new EventLog(log, this.interface, foundFragment);
        } catch (error) {
          return new UndecodedEventLog(log, error);
        }
      }
      return new Log(log, provider);
    });
  }
  /**
   *  Add an event %%listener%% for the %%event%%.
   */
  async on(event, listener) {
    const sub = await getSub(this, "on", event);
    sub.listeners.push({ listener, once: false });
    sub.start();
    return this;
  }
  /**
   *  Add an event %%listener%% for the %%event%%, but remove the listener
   *  after it is fired once.
   */
  async once(event, listener) {
    const sub = await getSub(this, "once", event);
    sub.listeners.push({ listener, once: true });
    sub.start();
    return this;
  }
  /**
   *  Emit an %%event%% calling all listeners with %%args%%.
   *
   *  Resolves to ``true`` if any listeners were called.
   */
  async emit(event, ...args) {
    return await emit(this, event, args, null);
  }
  /**
   *  Resolves to the number of listeners of %%event%% or the total number
   *  of listeners if unspecified.
   */
  async listenerCount(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return 0;
      }
      return sub.listeners.length;
    }
    const { subs } = getInternal(this);
    let total = 0;
    for (const { listeners } of subs.values()) {
      total += listeners.length;
    }
    return total;
  }
  /**
   *  Resolves to the listeners subscribed to %%event%% or all listeners
   *  if unspecified.
   */
  async listeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return [];
      }
      return sub.listeners.map(({ listener }) => listener);
    }
    const { subs } = getInternal(this);
    let result = [];
    for (const { listeners } of subs.values()) {
      result = result.concat(listeners.map(({ listener }) => listener));
    }
    return result;
  }
  /**
   *  Remove the %%listener%% from the listeners for %%event%% or remove
   *  all listeners if unspecified.
   */
  async off(event, listener) {
    const sub = await hasSub(this, event);
    if (!sub) {
      return this;
    }
    if (listener) {
      const index = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
      if (index >= 0) {
        sub.listeners.splice(index, 1);
      }
    }
    if (listener == null || sub.listeners.length === 0) {
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    }
    return this;
  }
  /**
   *  Remove all the listeners for %%event%% or remove all listeners if
   *  unspecified.
   */
  async removeAllListeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    } else {
      const { subs } = getInternal(this);
      for (const { tag, stop } of subs.values()) {
        stop();
        subs.delete(tag);
      }
    }
    return this;
  }
  /**
   *  Alias for [on].
   */
  async addListener(event, listener) {
    return await this.on(event, listener);
  }
  /**
   *  Alias for [off].
   */
  async removeListener(event, listener) {
    return await this.off(event, listener);
  }
  /**
   *  Create a new Class for the %%abi%%.
   */
  static buildClass(abi) {
    class CustomContract extends _BaseContract {
      constructor(address, runner = null) {
        super(address, abi, runner);
      }
    }
    return CustomContract;
  }
  /**
   *  Create a new BaseContract with a specified Interface.
   */
  static from(target, abi, runner) {
    if (runner == null) {
      runner = null;
    }
    const contract = new this(target, abi, runner);
    return contract;
  }
};
function _ContractBase() {
  return BaseContract;
}
var Contract = class extends _ContractBase() {
};
var _abi = [
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerIsNotTrader",
    type: "error"
  },
  {
    inputs: [],
    name: "CantStoreZero",
    type: "error"
  },
  {
    inputs: [],
    name: "FromTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidErc20Address",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidUserId",
    type: "error"
  },
  {
    inputs: [],
    name: "ListTooLong",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoOrderBookRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "OpsRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "OrderbookAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "PositionDecimalsTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "ToTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotDefined",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyTokens",
    type: "error"
  },
  {
    inputs: [],
    name: "TotalLimitOrdersTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "ValueNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "VaultDecimalsTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongOrderBook",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongSequesterAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAmountSequestered",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      }
    ],
    name: "Erc20Enabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "LendOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "liquidationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "caseId",
        type: "uint256"
      }
    ],
    name: "LiquidationFeesReverted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "OrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "PerpOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "longUserId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "shortUserId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "PerpTrueUpData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "PerpTrueUp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "VaultTokenConfig",
        name: "newConfig",
        type: "uint256"
      }
    ],
    name: "TokenRiskChanged",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "makeDefault",
        type: "bool"
      }
    ],
    name: "admitErc20ToTrading",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "po",
        type: "uint256"
      }
    ],
    name: "cancelPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "po",
        type: "uint256"
      }
    ],
    name: "cancelPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "computeFundingRateNow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "Price59EN5",
        name: "mark",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBal",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBalFeesOnly",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      }
    ],
    name: "configureBaseErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "MarkPriceConfig",
        name: "config",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "configureMarkPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      }
    ],
    name: "getDefaultErc20TokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighestTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "getUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "int16",
        name: "fundingRate",
        type: "int16"
      }
    ],
    name: "initFundingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "po",
        type: "uint256"
      }
    ],
    name: "newPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "po",
        type: "uint256"
      }
    ],
    name: "newPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readLedger",
    outputs: [
      {
        internalType: "VaultLedger",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readLendingAggregation",
    outputs: [
      {
        internalType: "LendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address"
      }
    ],
    name: "readOrderBookConfig",
    outputs: [
      {
        internalType: "OrderBookConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readPerpAggPosition",
    outputs: [
      {
        internalType: "PerpAggPosition",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readTokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "reconfigureLendBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "reconfigureTwoTokenBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "registerLendOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "registerOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "registerPerpOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "releasePerp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "longId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "shortId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "requestPerpTrueUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "sequester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "sequesterPerp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    name: "setOpsAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "setTokenIdAsDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "UserFeeSchedule",
        name: "ufs",
        type: "uint256"
      }
    ],
    name: "setUserFeeSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "totalBuyerQuantity",
        type: "uint64"
      }
    ],
    name: "settleLendMatch",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var CompositeExchangeAbi__factory = class {
  static abi = _abi;
  static createInterface() {
    return new Interface(_abi);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi,
      runner
    );
  }
};
var _abi2 = [
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "FromTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidErc20Address",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidUserId",
    type: "error"
  },
  {
    inputs: [],
    name: "NoOrderBookRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "OpsRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "OrderbookAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "PositionDecimalsTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "ToTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotDefined",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyTokens",
    type: "error"
  },
  {
    inputs: [],
    name: "VaultDecimalsTooLarge",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      }
    ],
    name: "Erc20Enabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "LendOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "liquidationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "caseId",
        type: "uint256"
      }
    ],
    name: "LiquidationFeesReverted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "OrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "PerpOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "VaultTokenConfig",
        name: "newConfig",
        type: "uint256"
      }
    ],
    name: "TokenRiskChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "makeDefault",
        type: "bool"
      }
    ],
    name: "admitErc20ToTrading",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      }
    ],
    name: "configureBaseErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "MarkPriceConfig",
        name: "config",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "configureMarkPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "int16",
        name: "fundingRate",
        type: "int16"
      }
    ],
    name: "initFundingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "reconfigureLendBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "reconfigureTwoTokenBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "registerLendOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "registerOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "registerPerpOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    name: "setOpsAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "setTokenIdAsDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "UserFeeSchedule",
        name: "ufs",
        type: "uint256"
      }
    ],
    name: "setUserFeeSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var CompositeExchangeAdminAbi__factory = class {
  static abi = _abi2;
  static createInterface() {
    return new Interface(_abi2);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi2,
      runner
    );
  }
};
var _abi3 = [
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerHasNoAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerIsNotTrader",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "DustNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FundingRateNotInitialized",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidErc20Address",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTimeValues",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapHasSpotBook",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapOnlyToLowerRisk",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapUnfairPrice",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationNotSuccessful",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "OrderbookAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "PortfolioNotEligibleForLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "StartTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotDefined",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotErc20",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyUsers",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UserAlreadyExists",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "LendOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiqSwapTrade",
        name: "trade",
        type: "uint256"
      }
    ],
    name: "LiqSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "NewUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "VaultTokenConfig",
        name: "newConfig",
        type: "uint256"
      }
    ],
    name: "TokenRiskChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permissioned",
        type: "bool"
      }
    ],
    name: "TraderPermission",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldBookAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "newBookAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendOrder[]",
        name: "buySide",
        type: "uint256[]"
      },
      {
        internalType: "LendOrder[]",
        name: "sellSide",
        type: "uint256[]"
      }
    ],
    name: "bulkAdminSwitchLendBook_5162910367",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "bulkReadLendingAgg_9676672908",
    outputs: [
      {
        internalType: "BulkLendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadMaxUserId_5445644137",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadTokenConfigs_3423260018",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "bulkTraders_5523718714",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "changeAdmin_4970362591",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "LiqSwapTrade",
        name: "offer",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqSwap_7381398119",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateHistory_4648699482",
    outputs: [
      {
        internalType: "int16[]",
        name: "",
        type: "int16[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      }
    ],
    name: "setTokenConfig_7367129508",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "users",
        type: "uint64[]"
      }
    ],
    name: "switchTokenAddress_1740783989",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var CompositeExchangeBulkAbi__factory = class {
  static abi = _abi3;
  static createInterface() {
    return new Interface(_abi3);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi3,
      runner
    );
  }
};
var _abi4 = [
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerIsNotTrader",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "CantStoreZero",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationNotSuccessful",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "ListTooLong",
    type: "error"
  },
  {
    inputs: [],
    name: "LoanNotEligibleForRenew",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchPosition",
    type: "error"
  },
  {
    inputs: [],
    name: "PortfolioNotEligibleForLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityNotMultipleOfMin",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "ReduceQuantityTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "StartTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "ValueNotFound",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyDebtLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyDebtLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "BankruptcySequesterEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "InterestPaidData",
        name: "interestAndFees",
        type: "uint256"
      }
    ],
    name: "InterestPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "LendMatchNonReturnable",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendingEventData",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionClosed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "srcPositionId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "newPosition",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "paymentInLieuOfInterest",
        type: "uint128"
      }
    ],
    name: "LenderSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiquidationPayoff",
        name: "liquidatoinPayoff",
        type: "uint256"
      }
    ],
    name: "Liquidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrowerId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "RenewLoanData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "RenewLoan",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      }
    ],
    name: "bankruptcy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "calculateInterestAndFeesDue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      }
    ],
    name: "executeExtBatch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendFeeSchedule",
    outputs: [
      {
        internalType: "LendFeeSchedule",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPriceConfig",
    outputs: [
      {
        internalType: "MarkPriceConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getPerpOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getSpotOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "lentPositionId",
        type: "uint64"
      }
    ],
    name: "lifoLenderSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "markLendPositionAsNonReturnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "reduceQuantity",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "extendPeriod",
        type: "bool"
      }
    ],
    name: "payInterestAndFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readBorrowerPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRate",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateStats",
    outputs: [
      {
        internalType: "FundingRateStats",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readLenderPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "readLendingPosition",
    outputs: [
      {
        internalType: "LendMatch",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readPerpPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "almostDueLendingId",
        type: "uint64"
      }
    ],
    name: "renewLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "riskAdjustedPortfolioValue",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "from",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "to",
        type: "uint32"
      }
    ],
    name: "summedFundingRate",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "userBits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var CompositeExchangeExtAbi__factory = class {
  static abi = _abi4;
  static createInterface() {
    return new Interface(_abi4);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi4,
      runner
    );
  }
};
var _abi5 = [
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchPosition",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "StartTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "calculateInterestAndFeesDue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendFeeSchedule",
    outputs: [
      {
        internalType: "LendFeeSchedule",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPriceConfig",
    outputs: [
      {
        internalType: "MarkPriceConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getPerpOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getSpotOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readBorrowerPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRate",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateStats",
    outputs: [
      {
        internalType: "FundingRateStats",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readLenderPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "readLendingPosition",
    outputs: [
      {
        internalType: "LendMatch",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readPerpPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "riskAdjustedPortfolioValue",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "from",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "to",
        type: "uint32"
      }
    ],
    name: "summedFundingRate",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "userBits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var CompositeExchangeReadOnlyAbi__factory = class {
  static abi = _abi5;
  static createInterface() {
    return new Interface(_abi5);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi5,
      runner
    );
  }
};
var _abi6 = [
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerHasNoAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "DustNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidErc20Address",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotErc20",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyUsers",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UserAlreadyExists",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "NewUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permissioned",
        type: "bool"
      }
    ],
    name: "TraderPermission",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var CompositeExchangeUserAbi__factory = class {
  static abi = _abi6;
  static createInterface() {
    return new Interface(_abi6);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi6,
      runner
    );
  }
};
var _abi7 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ERC20Abi__factory = class {
  static abi = _abi7;
  static createInterface() {
    return new Interface(_abi7);
  }
  static connect(address, runner) {
    return new Contract(address, _abi7, runner);
  }
};
var _abi8 = [
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "BorrowLiquidationTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "BuyLiquidationTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerHasNoAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerIsNotTrader",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "CantStoreZero",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    name: "DebugInt",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "DebugUint",
    type: "error"
  },
  {
    inputs: [],
    name: "DustNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "EscrowRedeemTooSoon",
    type: "error"
  },
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [],
    name: "FromTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "FundingRateNotInitialized",
    type: "error"
  },
  {
    inputs: [],
    name: "InsertionHintStale",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidErc20Address",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTimeValues",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidUserId",
    type: "error"
  },
  {
    inputs: [],
    name: "LimitOrderNotAllowedForLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapHasSpotBook",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapOnlyToLowerRisk",
    type: "error"
  },
  {
    inputs: [],
    name: "LiqSwapUnfairPrice",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationCloseBorrowBeforeSell",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationMustReducePerp",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationNotSuccessful",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "ListTooLong",
    type: "error"
  },
  {
    inputs: [],
    name: "LoanNotEligibleForRenew",
    type: "error"
  },
  {
    inputs: [],
    name: "MarkPriceNotConfigured",
    type: "error"
  },
  {
    inputs: [],
    name: "NoLiquidationLending",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoOrderBookRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSelfDealing",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchOrder",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchPosition",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyLimitWithInsertionHint",
    type: "error"
  },
  {
    inputs: [],
    name: "OpsRoleOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "OrderbookAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [],
    name: "PaymentTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "PortfolioNotEligibleForLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "PositionDecimalsTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceNotNormalized",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceTooBig",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityNotMultipleOfMin",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "ReduceQuantityTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "RestartPointerCorrupt",
    type: "error"
  },
  {
    inputs: [],
    name: "StartTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "ToTokenInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotDefined",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenNotErc20",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyTokens",
    type: "error"
  },
  {
    inputs: [],
    name: "TooManyUsers",
    type: "error"
  },
  {
    inputs: [],
    name: "TotalLimitOrdersTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "TradeOrWithdrawCausesLiquidation",
    type: "error"
  },
  {
    inputs: [],
    name: "TradingHalted",
    type: "error"
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnableToFillCompletely",
    type: "error"
  },
  {
    inputs: [],
    name: "UserAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ValueNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "VaultDecimalsTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongOrderBook",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongQuantityReduction",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongSequesterAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAmountSequestered",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroMaxDepth",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroPriceNotAllowed",
    type: "error"
  }
];
var ExchangeErrorsAbi__factory = class {
  static abi = _abi8;
  static createInterface() {
    return new Interface(_abi8);
  }
  static connect(address, runner) {
    return new Contract(address, _abi8, runner);
  }
};
var _abi9 = [
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "dec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "inc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "incWith",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "payExactToIncrement",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256"
      }
    ],
    name: "paymeToIncrement",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var FuncVariationAbi__factory = class {
  static abi = _abi9;
  static createInterface() {
    return new Interface(_abi9);
  }
  static connect(address, runner) {
    return new Contract(address, _abi9, runner);
  }
};
var _abi10 = [
  {
    inputs: [],
    name: "AdminOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "AllowanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountNotMultipleOfLot",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountTooSmall",
    type: "error"
  },
  {
    inputs: [],
    name: "BadDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "BadTokenConfig",
    type: "error"
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CantDepositAndWithdraw",
    type: "error"
  },
  {
    inputs: [],
    name: "DepositsDisabled",
    type: "error"
  },
  {
    inputs: [],
    name: "DonationsNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "Erc20TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "FundsQueuedForWithdraw",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error"
  },
  {
    inputs: [],
    name: "LotSizeTooSmall",
    type: "error"
  },
  {
    inputs: [],
    name: "ManagerOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "ManagerOrTraderOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "MissingApproval",
    type: "error"
  },
  {
    inputs: [],
    name: "MustInitializeFirst",
    type: "error"
  },
  {
    inputs: [],
    name: "NeedToWithdrawMoreForSettlement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoInitialDeposits",
    type: "error"
  },
  {
    inputs: [],
    name: "ProcessQueueTooSoon",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "SettleTooSoon",
    type: "error"
  },
  {
    inputs: [],
    name: "SuperAdminOnly",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountCanceled",
        type: "uint256"
      }
    ],
    name: "CancelDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountCanceled",
        type: "uint256"
      }
    ],
    name: "CancelWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "goodDepositCount",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "badDepositCount",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nextNode",
        type: "uint32"
      }
    ],
    name: "CleanDepositsResult",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "DepositRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "InitialDepositFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LostTokens",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "managerFees",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "perfFees",
        type: "uint256"
      }
    ],
    name: "ManagerPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawTooSmall",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "withdrawAmountErc20",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "settleFlag",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "batchCommandsAndProcessQueues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32"
      }
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "cancelDepositRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "cancelWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "startingNode",
        type: "uint32"
      }
    ],
    name: "cleanDepositQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "depositTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "exchangeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositErc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxAum",
        type: "uint256"
      },
      {
        internalType: "FundParams",
        name: "_fundParams",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "fundTokenSymbol",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "fundTokenName",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "managerAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_exchangeAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "navComputeAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "tradeCheckerAddress",
        type: "address"
      }
    ],
    name: "fundAdminInit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "fundParams",
    outputs: [
      {
        internalType: "FundParams",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCumAdjPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighWaterMark",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaxAum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traderAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "initializeFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "lastManagerSettleTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastNavTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "swapQuantity",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawAmountErc20",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "settleFlag",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "processQueues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256"
      }
    ],
    name: "requestDeposit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256"
      }
    ],
    name: "requestWithdraw",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "requestedDepositForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "requestedWithdrawForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      }
    ],
    name: "rescueErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "managerAddress",
        type: "address"
      }
    ],
    name: "setManagerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxAum",
        type: "uint256"
      }
    ],
    name: "setMaxAum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "navComputeAddress",
        type: "address"
      }
    ],
    name: "setNavCompute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tradeCheckerAddress",
        type: "address"
      }
    ],
    name: "setTradeChecker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traderAddress",
        type: "address"
      }
    ],
    name: "setTraderAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "trader",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unconfirmedNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    name: "waitingToDepositWithCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    name: "waitingToWithdrawWithCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawAndBurnOwnTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var GaapFundAbi__factory = class {
  static abi = _abi10;
  static createInterface() {
    return new Interface(_abi10);
  }
  static connect(address, runner) {
    return new Contract(address, _abi10, runner);
  }
};
var _abi11 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "deci",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "xfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var GenericErc20Abi__factory = class {
  static abi = _abi11;
  static createInterface() {
    return new Interface(_abi11);
  }
  static connect(address, runner) {
    return new Contract(address, _abi11, runner);
  }
};
var _abi12 = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var IChainLinkV3Abi__factory = class {
  static abi = _abi12;
  static createInterface() {
    return new Interface(_abi12);
  }
  static connect(address, runner) {
    return new Contract(address, _abi12, runner);
  }
};
var _abi13 = [
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "Price59EN5",
        name: "mark",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "minQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBal",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBalFeesOnly",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "releasePerp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "sequester",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "token",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "amount",
        type: "uint64"
      }
    ],
    name: "sequesterPerp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "totalBuyerQuantity",
        type: "uint64"
      }
    ],
    name: "settleLendMatch",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompExchForBooksAbi__factory = class {
  static abi = _abi13;
  static createInterface() {
    return new Interface(_abi13);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi13,
      runner
    );
  }
};
var _abi14 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      }
    ],
    name: "Erc20Enabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "LendOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "liquidationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "caseId",
        type: "uint256"
      }
    ],
    name: "LiquidationFeesReverted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "OrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "PerpOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "VaultTokenConfig",
        name: "newConfig",
        type: "uint256"
      }
    ],
    name: "TokenRiskChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "makeDefault",
        type: "bool"
      }
    ],
    name: "admitErc20ToTrading",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      }
    ],
    name: "configureBaseErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "MarkPriceConfig",
        name: "config",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "extraConfig",
        type: "uint256"
      }
    ],
    name: "configureMarkPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "int16",
        name: "fundingRate",
        type: "int16"
      }
    ],
    name: "initFundingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "reconfigureLendBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "reconfigureTwoTokenBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "registerLendOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "registerOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "registerPerpOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    name: "setOpsAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "setTokenIdAsDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "UserFeeSchedule",
        name: "ufs",
        type: "uint256"
      }
    ],
    name: "setUserFeeSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangeAdminAbi__factory = class {
  static abi = _abi14;
  static createInterface() {
    return new Interface(_abi14);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi14,
      runner
    );
  }
};
var _abi15 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "oldBookAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "newBookAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendOrder[]",
        name: "buySide",
        type: "uint256[]"
      },
      {
        internalType: "LendOrder[]",
        name: "sellSide",
        type: "uint256[]"
      }
    ],
    name: "bulkAdminSwitchLendBook_5162910367",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "bulkReadLendingAgg_9676672908",
    outputs: [
      {
        internalType: "BulkLendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadMaxUserId_5445644137",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadTokenConfigs_3423260018",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "bulkTraders_5523718714",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "changeAdmin_4970362591",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "LiqSwapTrade",
        name: "offer",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqSwap_7381398119",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateHistory_4648699482",
    outputs: [
      {
        internalType: "int16[]",
        name: "",
        type: "int16[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      }
    ],
    name: "setTokenConfig_7367129508",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "users",
        type: "uint64[]"
      }
    ],
    name: "switchTokenAddress_1740783989",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangeBulkAbi__factory = class {
  static abi = _abi15;
  static createInterface() {
    return new Interface(_abi15);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi15,
      runner
    );
  }
};
var _abi16 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyDebtLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyDebtLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "BankruptcySequesterEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      }
    ],
    name: "Erc20Enabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "InterestPaidData",
        name: "interestAndFees",
        type: "uint256"
      }
    ],
    name: "InterestPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "LendMatchNonReturnable",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "LendOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendingEventData",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionClosed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "srcPositionId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "newPosition",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "paymentInLieuOfInterest",
        type: "uint128"
      }
    ],
    name: "LenderSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiqSwapTrade",
        name: "trade",
        type: "uint256"
      }
    ],
    name: "LiqSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiquidationPayoff",
        name: "liquidatoinPayoff",
        type: "uint256"
      }
    ],
    name: "Liquidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "liquidationId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "caseId",
        type: "uint256"
      }
    ],
    name: "LiquidationFeesReverted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "NewUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "OrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "buyTokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "payTokenId",
        type: "uint32"
      }
    ],
    name: "PerpOrderBookRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "longUserId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "shortUserId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "PerpTrueUpData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "PerpTrueUp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrowerId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "RenewLoanData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "RenewLoan",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "VaultTokenConfig",
        name: "newConfig",
        type: "uint256"
      }
    ],
    name: "TokenRiskChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permissioned",
        type: "bool"
      }
    ],
    name: "TraderPermission",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      },
      {
        internalType: "bool",
        name: "makeDefault",
        type: "bool"
      }
    ],
    name: "admitErc20ToTrading",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      }
    ],
    name: "bankruptcy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldBookAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "newBookAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendOrder[]",
        name: "buySide",
        type: "uint256[]"
      },
      {
        internalType: "LendOrder[]",
        name: "sellSide",
        type: "uint256[]"
      }
    ],
    name: "bulkAdminSwitchLendBook_5162910367",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "bulkReadLendingAgg_9676672908",
    outputs: [
      {
        internalType: "BulkLendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadMaxUserId_5445644137",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadTokenConfigs_3423260018",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "bulkTraders_5523718714",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "calculateInterestAndFeesDue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "changeAdmin_4970362591",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "computeFundingRateNow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "vaultDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "positionDecimals",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "sequestrationMultiplier",
        type: "uint8"
      }
    ],
    name: "configureBaseErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "MarkPriceConfig",
        name: "config",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "extraConfig",
        type: "uint256"
      }
    ],
    name: "configureMarkPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      }
    ],
    name: "getDefaultErc20TokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighestTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendFeeSchedule",
    outputs: [
      {
        internalType: "LendFeeSchedule",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPriceConfig",
    outputs: [
      {
        internalType: "MarkPriceConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getPerpOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getSpotOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "getUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "int16",
        name: "fundingRate",
        type: "int16"
      }
    ],
    name: "initFundingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "lentPositionId",
        type: "uint64"
      }
    ],
    name: "lifoLenderSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "LiqSwapTrade",
        name: "offer",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqSwap_7381398119",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "markLendPositionAsNonReturnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "reduceQuantity",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "extendPeriod",
        type: "bool"
      }
    ],
    name: "payInterestAndFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readBorrowerPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRate",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateHistory_4648699482",
    outputs: [
      {
        internalType: "int16[]",
        name: "",
        type: "int16[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateStats",
    outputs: [
      {
        internalType: "FundingRateStats",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readLenderPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readLendingAggregation",
    outputs: [
      {
        internalType: "LendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "readLendingPosition",
    outputs: [
      {
        internalType: "LendMatch",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address"
      }
    ],
    name: "readOrderBookConfig",
    outputs: [
      {
        internalType: "OrderBookConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readPerpAggPosition",
    outputs: [
      {
        internalType: "PerpAggPosition",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readPerpPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readTokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "reconfigureLendBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "reconfigureTwoTokenBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendFeeSchedule",
        name: "fees",
        type: "uint256"
      }
    ],
    name: "registerLendOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "registerOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "OrderBookConfig",
        name: "orderBookConfig",
        type: "uint256"
      }
    ],
    name: "registerPerpOrderBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "almostDueLendingId",
        type: "uint64"
      }
    ],
    name: "renewLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "longId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "shortId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "requestPerpTrueUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "riskAdjustedPortfolioValue",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    name: "setOpsAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      }
    ],
    name: "setTokenConfig_7367129508",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "setTokenIdAsDefault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "UserFeeSchedule",
        name: "ufs",
        type: "uint256"
      }
    ],
    name: "setUserFeeSchedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "from",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "to",
        type: "uint32"
      }
    ],
    name: "summedFundingRate",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "users",
        type: "uint64[]"
      }
    ],
    name: "switchTokenAddress_1740783989",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "userBits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangeFullAbi__factory = class {
  static abi = _abi16;
  static createInterface() {
    return new Interface(_abi16);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi16,
      runner
    );
  }
};
var _abi17 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyDebtLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyDebtLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "BankruptcySequesterEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "InterestPaidData",
        name: "interestAndFees",
        type: "uint256"
      }
    ],
    name: "InterestPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "LendMatchNonReturnable",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendingEventData",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionClosed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "srcPositionId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "newPosition",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "paymentInLieuOfInterest",
        type: "uint128"
      }
    ],
    name: "LenderSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiqSwapTrade",
        name: "trade",
        type: "uint256"
      }
    ],
    name: "LiqSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiquidationPayoff",
        name: "liquidatoinPayoff",
        type: "uint256"
      }
    ],
    name: "Liquidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "NewUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "longUserId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "shortUserId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "PerpTrueUpData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "PerpTrueUp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrowerId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "RenewLoanData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "RenewLoan",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permissioned",
        type: "bool"
      }
    ],
    name: "TraderPermission",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      }
    ],
    name: "bankruptcy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldBookAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "newBookAddr",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "LendOrder[]",
        name: "buySide",
        type: "uint256[]"
      },
      {
        internalType: "LendOrder[]",
        name: "sellSide",
        type: "uint256[]"
      }
    ],
    name: "bulkAdminSwitchLendBook_5162910367",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "bulkReadLendingAgg_9676672908",
    outputs: [
      {
        internalType: "BulkLendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadMaxUserId_5445644137",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bulkReadTokenConfigs_3423260018",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "bulkTraders_5523718714",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "calculateInterestAndFeesDue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "changeAdmin_4970362591",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "computeFundingRateNow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      }
    ],
    name: "getDefaultErc20TokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighestTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendFeeSchedule",
    outputs: [
      {
        internalType: "LendFeeSchedule",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPriceConfig",
    outputs: [
      {
        internalType: "MarkPriceConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getPerpOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getSpotOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "getUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "lentPositionId",
        type: "uint64"
      }
    ],
    name: "lifoLenderSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "LiqSwapTrade",
        name: "offer",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqSwap_7381398119",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "markLendPositionAsNonReturnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "reduceQuantity",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "extendPeriod",
        type: "bool"
      }
    ],
    name: "payInterestAndFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readBorrowerPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRate",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateHistory_4648699482",
    outputs: [
      {
        internalType: "int16[]",
        name: "",
        type: "int16[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateStats",
    outputs: [
      {
        internalType: "FundingRateStats",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readLenderPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readLendingAggregation",
    outputs: [
      {
        internalType: "LendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "readLendingPosition",
    outputs: [
      {
        internalType: "LendMatch",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address"
      }
    ],
    name: "readOrderBookConfig",
    outputs: [
      {
        internalType: "OrderBookConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readPerpAggPosition",
    outputs: [
      {
        internalType: "PerpAggPosition",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readPerpPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readTokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "almostDueLendingId",
        type: "uint64"
      }
    ],
    name: "renewLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "longId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "shortId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "requestPerpTrueUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "riskAdjustedPortfolioValue",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint8",
        name: "riskPricePercent",
        type: "uint8"
      },
      {
        internalType: "uint8",
        name: "riskSlippagePercentx10",
        type: "uint8"
      }
    ],
    name: "setTokenConfig_7367129508",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "from",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "to",
        type: "uint32"
      }
    ],
    name: "summedFundingRate",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "users",
        type: "uint64[]"
      }
    ],
    name: "switchTokenAddress_1740783989",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "userBits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangePubAbi__factory = class {
  static abi = _abi17;
  static createInterface() {
    return new Interface(_abi17);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi17,
      runner
    );
  }
};
var _abi18 = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "calculateInterestAndFeesDue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      }
    ],
    name: "getDefaultErc20TokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighestTokenId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendFeeSchedule",
    outputs: [
      {
        internalType: "LendFeeSchedule",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getLendOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPriceConfig",
    outputs: [
      {
        internalType: "MarkPriceConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getPerpOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "token1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "token2",
        type: "uint32"
      }
    ],
    name: "getSpotOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "buyToken",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "payToken",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "getUserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address"
      }
    ],
    name: "getUserId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readBorrowerPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "time",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRate",
    outputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readFundingRateStats",
    outputs: [
      {
        internalType: "FundingRateStats",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readLenderPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readLendingAggregation",
    outputs: [
      {
        internalType: "LendAggPosition",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "readLendingPosition",
    outputs: [
      {
        internalType: "LendMatch",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "book",
        type: "address"
      }
    ],
    name: "readOrderBookConfig",
    outputs: [
      {
        internalType: "OrderBookConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readPerpAggPosition",
    outputs: [
      {
        internalType: "PerpAggPosition",
        name: "",
        type: "uint256"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "max",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "startPosition",
        type: "uint32"
      }
    ],
    name: "readPerpPositions",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "readTokenConfig",
    outputs: [
      {
        internalType: "VaultTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "riskAdjustedPortfolioValue",
    outputs: [
      {
        internalType: "int64",
        name: "",
        type: "int64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "from",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "to",
        type: "uint32"
      }
    ],
    name: "summedFundingRate",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "userBits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var ICompositeExchangeReadOnlyAbi__factory = class {
  static abi = _abi18;
  static createInterface() {
    return new Interface(_abi18);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi18,
      runner
    );
  }
};
var _abi19 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyDebtLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyDebtLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "BankruptcyLoss",
        name: "loss",
        type: "uint256"
      }
    ],
    name: "BankruptcyLossEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "BankruptcySequesterEvent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "InterestPaidData",
        name: "interestAndFees",
        type: "uint256"
      }
    ],
    name: "InterestPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "LendMatchNonReturnable",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendingEventData",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      }
    ],
    name: "LendPositionClosed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "srcPositionId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newPositionId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "newPosition",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "paymentInLieuOfInterest",
        type: "uint128"
      }
    ],
    name: "LenderSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiqSwapTrade",
        name: "trade",
        type: "uint256"
      }
    ],
    name: "LiqSwap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LiquidationPayoff",
        name: "liquidatoinPayoff",
        type: "uint256"
      }
    ],
    name: "Liquidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "longUserId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "shortUserId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "PerpTrueUpData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "PerpTrueUp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrowerId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "RenewLoanData",
        name: "data",
        type: "uint256"
      }
    ],
    name: "RenewLoan",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      }
    ],
    name: "bankruptcy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "computeFundingRateNow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "lentPositionId",
        type: "uint64"
      }
    ],
    name: "lifoLenderSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "markLendPositionAsNonReturnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newBorrowOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "PerpOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newPerpSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orderBook",
        type: "address"
      },
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "reduceQuantity",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "extendPeriod",
        type: "bool"
      }
    ],
    name: "payInterestAndFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "userToPay",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "almostDueLendingId",
        type: "uint64"
      }
    ],
    name: "renewLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "longId",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "shortId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "requestPerpTrueUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangeTradingAbi__factory = class {
  static abi = _abi19;
  static createInterface() {
    return new Interface(_abi19);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi19,
      runner
    );
  }
};
var _abi20 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Erc20Withdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      }
    ],
    name: "NewUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "permissioned",
        type: "bool"
      }
    ],
    name: "TraderPermission",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "allowTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "createAccount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "createAccountAndDeposit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "accountId",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "tradingAddress",
        type: "address"
      }
    ],
    name: "revokeTradingForAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeExchangeUserAbi__factory = class {
  static abi = _abi20;
  static createInterface() {
    return new Interface(_abi20);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi20,
      runner
    );
  }
};
var _abi21 = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      }
    ],
    name: "executeExtBatch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ICompositeInternalAbi__factory = class {
  static abi = _abi21;
  static createInterface() {
    return new Interface(_abi21);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi21,
      runner
    );
  }
};
var _abi22 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var IERC20Abi__factory = class {
  static abi = _abi22;
  static createInterface() {
    return new Interface(_abi22);
  }
  static connect(address, runner) {
    return new Contract(address, _abi22, runner);
  }
};
var _abi23 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var IERC20MetadataAbi__factory = class {
  static abi = _abi23;
  static createInterface() {
    return new Interface(_abi23);
  }
  static connect(address, runner) {
    return new Contract(address, _abi23, runner);
  }
};
var _abi24 = [
  {
    inputs: [],
    name: "AdminOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "AllowanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountNotMultipleOfLot",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountTooLarge",
    type: "error"
  },
  {
    inputs: [],
    name: "AmountTooSmall",
    type: "error"
  },
  {
    inputs: [],
    name: "BadDecimals",
    type: "error"
  },
  {
    inputs: [],
    name: "BadTokenConfig",
    type: "error"
  },
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "CantDepositAndWithdraw",
    type: "error"
  },
  {
    inputs: [],
    name: "DepositsDisabled",
    type: "error"
  },
  {
    inputs: [],
    name: "DonationsNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "Erc20TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "FundsQueuedForWithdraw",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientFunds",
    type: "error"
  },
  {
    inputs: [],
    name: "LotSizeTooSmall",
    type: "error"
  },
  {
    inputs: [],
    name: "ManagerOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "ManagerOrTraderOnly",
    type: "error"
  },
  {
    inputs: [],
    name: "MissingApproval",
    type: "error"
  },
  {
    inputs: [],
    name: "MustInitializeFirst",
    type: "error"
  },
  {
    inputs: [],
    name: "NeedToWithdrawMoreForSettlement",
    type: "error"
  },
  {
    inputs: [],
    name: "NoInitialDeposits",
    type: "error"
  },
  {
    inputs: [],
    name: "ProcessQueueTooSoon",
    type: "error"
  },
  {
    inputs: [],
    name: "SettleTooSoon",
    type: "error"
  },
  {
    inputs: [],
    name: "SuperAdminOnly",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountCanceled",
        type: "uint256"
      }
    ],
    name: "CancelDeposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountCanceled",
        type: "uint256"
      }
    ],
    name: "CancelWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "goodDepositCount",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "badDepositCount",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nextNode",
        type: "uint32"
      }
    ],
    name: "CleanDepositsResult",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "DepositRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "InitialDepositFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "LostTokens",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "managerFees",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "perfFees",
        type: "uint256"
      }
    ],
    name: "ManagerPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawFailed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawRequest",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawTooSmall",
    type: "event"
  },
  {
    inputs: [],
    name: "cancelDepositRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "cancelWithdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "startingNode",
        type: "uint32"
      }
    ],
    name: "cleanDepositQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "depositTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "exchangeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "fundParams",
    outputs: [
      {
        internalType: "FundParams",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCumAdjPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getHighWaterMark",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaxAum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastManagerSettleTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastNavTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userToLiquidate",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "swapQuantity",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "pastDueLendingId",
        type: "uint64"
      }
    ],
    name: "liqWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256"
      }
    ],
    name: "requestDeposit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256"
      }
    ],
    name: "requestWithdraw",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "requestedDepositForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "requestedWithdrawForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "trader",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unconfirmedNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    name: "waitingToDepositWithCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256"
      }
    ],
    name: "waitingToWithdrawWithCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var IGaapFundAbi__factory = class {
  static abi = _abi24;
  static createInterface() {
    return new Interface(_abi24);
  }
  static connect(address, runner) {
    return new Contract(address, _abi24, runner);
  }
};
var _abi25 = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      }
    ],
    name: "batchCommands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "withdrawAmountErc20",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "settleFlag",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "batchCommandsAndProcessQueues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traderAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "initializeFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawAmountErc20",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "settleFlag",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "maxEntriesToProcess",
        type: "uint256"
      }
    ],
    name: "processQueues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxAum",
        type: "uint256"
      }
    ],
    name: "setMaxAum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "traderAddress",
        type: "address"
      }
    ],
    name: "setTraderAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawAndBurnOwnTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var IGaapFundManagerAbi__factory = class {
  static abi = _abi25;
  static createInterface() {
    return new Interface(_abi25);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi25,
      runner
    );
  }
};
var _abi26 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "interestRate",
        type: "uint16"
      }
    ],
    name: "LendSelfMatchAutoCancel",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "matchData",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelBuys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelSells",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchLendCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "cancelLendBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "cancelLendSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendBuyOrder",
    outputs: [
      {
        internalType: "BuyLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendSellOrder",
    outputs: [
      {
        internalType: "SellLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readBorrowQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readLendQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ILendBookForExchAbi__factory = class {
  static abi = _abi26;
  static createInterface() {
    return new Interface(_abi26);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi26,
      runner
    );
  }
};
var _abi27 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "interestRate",
        type: "uint16"
      }
    ],
    name: "LendSelfMatchAutoCancel",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "matchData",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readBorrowQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readLendQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ILendOrderBookAbi__factory = class {
  static abi = _abi27;
  static createInterface() {
    return new Interface(_abi27);
  }
  static connect(address, runner) {
    return new Contract(address, _abi27, runner);
  }
};
var _abi28 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3Value",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  }
];
var IMulticall3Abi__factory = class {
  static abi = _abi28;
  static createInterface() {
    return new Interface(_abi28);
  }
  static connect(address, runner) {
    return new Contract(address, _abi28, runner);
  }
};
var _abi29 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "ownerId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "valueTokenId",
        type: "uint32"
      }
    ],
    name: "computeNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var INavComputeAbi__factory = class {
  static abi = _abi29;
  static createInterface() {
    return new Interface(_abi29);
  }
  static connect(address, runner) {
    return new Contract(address, _abi29, runner);
  }
};
var _abi30 = [
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var IOrderBookAbstractAbi__factory = class {
  static abi = _abi30;
  static createInterface() {
    return new Interface(_abi30);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi30,
      runner
    );
  }
};
var _abi31 = [
  {
    inputs: [],
    name: "WrongPriceType",
    type: "error"
  },
  {
    inputs: [],
    name: "clear",
    outputs: [],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeAddress",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "batch",
        type: "uint256[]"
      }
    ],
    name: "estimatePrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var IPriceHelperAbi__factory = class {
  static abi = _abi31;
  static createInterface() {
    return new Interface(_abi31);
  }
  static connect(address, runner) {
    return new Contract(address, _abi31, runner);
  }
};
var _abi32 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "buyer",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "seller",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "SpotMatchQuantities",
        name: "spotMatchQuantities",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotMatchData",
        name: "spotMatchData",
        type: "uint256"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcBuyInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcSellInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveBuyOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveSellOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ISpotOrderBookAbi__factory = class {
  static abi = _abi32;
  static createInterface() {
    return new Interface(_abi32);
  }
  static connect(address, runner) {
    return new Contract(address, _abi32, runner);
  }
};
var _abi33 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256"
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160"
          }
        ],
        internalType: "struct ExactInputSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256"
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160"
          }
        ],
        internalType: "struct ExactOutputSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountIn",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "priceByAmountIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountOut",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "priceByAmountOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountIn",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "swapByAmountInViaMinOut",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountOut",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "swapByAmountOutViaMaxIn",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ISwapRouterAbi__factory = class {
  static abi = _abi33;
  static createInterface() {
    return new Interface(_abi33);
  }
  static connect(address, runner) {
    return new Contract(address, _abi33, runner);
  }
};
var _abi34 = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      },
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      }
    ],
    name: "checkTrades",
    outputs: [],
    stateMutability: "view",
    type: "function"
  }
];
var ITradeCheckerAbi__factory = class {
  static abi = _abi34;
  static createInterface() {
    return new Interface(_abi34);
  }
  static connect(address, runner) {
    return new Contract(address, _abi34, runner);
  }
};
var _abi35 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "buyer",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "seller",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "SpotMatchQuantities",
        name: "spotMatchQuantities",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotMatchData",
        name: "spotMatchData",
        type: "uint256"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchTwoTokenCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcBuyInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcSellInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveBuyOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveSellOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var ITwoTokenBookForExchAbi__factory = class {
  static abi = _abi35;
  static createInterface() {
    return new Interface(_abi35);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi35,
      runner
    );
  }
};
var _abi36 = [
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var IWcmPriceAbi__factory = class {
  static abi = _abi36;
  static createInterface() {
    return new Interface(_abi36);
  }
  static connect(address, runner) {
    return new Contract(address, _abi36, runner);
  }
};
var _abi37 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "vault",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "BorrowLiquidationTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "NoLiquidationLending",
    type: "error"
  },
  {
    inputs: [],
    name: "NoNextElement",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceTooBig",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityNotMultipleOfMin",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "RestartPointerCorrupt",
    type: "error"
  },
  {
    inputs: [],
    name: "TradingHalted",
    type: "error"
  },
  {
    inputs: [],
    name: "UnableToFillCompletely",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongQuantityReduction",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroMaxDepth",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroPriceNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "interestRate",
        type: "uint16"
      }
    ],
    name: "LendSelfMatchAutoCancel",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "borrower",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "lender",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "LendMatch",
        name: "matchData",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelBuys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelSells",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchLendCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "cancelLendBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "cancelLendSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendBuyOrder",
    outputs: [
      {
        internalType: "BuyLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendSellOrder",
    outputs: [
      {
        internalType: "SellLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newLendSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellLendOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readBorrowQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint16",
        name: "interest",
        type: "uint16"
      }
    ],
    name: "readLendQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readLendTokenConfig",
    outputs: [
      {
        internalType: "LendTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "maxDepth",
        type: "uint16"
      },
      {
        internalType: "uint16",
        name: "restartPosition",
        type: "uint16"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blockId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "positionId",
        type: "uint64"
      }
    ],
    name: "rts22TradeId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var LendOrderBookAbi__factory = class {
  static abi = _abi37;
  static createInterface() {
    return new Interface(_abi37);
  }
  static connect(address, runner) {
    return new Contract(address, _abi37, runner);
  }
};
var _abi38 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "ownerId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "valueTokenId",
        type: "uint32"
      }
    ],
    name: "computeNav",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var LendingNavComputeAbi__factory = class {
  static abi = _abi38;
  static createInterface() {
    return new Interface(_abi38);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi38,
      runner
    );
  }
};
var _abi39 = [
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "uint256[]",
        name: "commands",
        type: "uint256[]"
      },
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      }
    ],
    name: "checkTrades",
    outputs: [],
    stateMutability: "view",
    type: "function"
  }
];
var LendingTradeCheckerAbi__factory = class {
  static abi = _abi39;
  static createInterface() {
    return new Interface(_abi39);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi39,
      runner
    );
  }
};
var _abi40 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "FiveUsers[]",
        name: "users",
        type: "uint256[]"
      }
    ],
    name: "batchReadPortfolios",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      }
    ],
    name: "readAllMarks",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "firstUser",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "probeCount",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxUsers",
        type: "uint32"
      }
    ],
    name: "readUserPortfolios",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var LiquidationHelperAbi__factory = class {
  static abi = _abi40;
  static createInterface() {
    return new Interface(_abi40);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi40,
      runner
    );
  }
};
var _abi41 = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "deci",
        type: "uint8"
      },
      {
        internalType: "int256",
        name: "price",
        type: "int256"
      },
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "price",
        type: "int256"
      }
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var MockChainLinkOracleAbi__factory = class {
  static abi = _abi41;
  static createInterface() {
    return new Interface(_abi41);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi41,
      runner
    );
  }
};
var _abi42 = [
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
var MockIChainLinkV3Abi__factory = class {
  static abi = _abi42;
  static createInterface() {
    return new Interface(_abi42);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi42,
      runner
    );
  }
};
var _abi43 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3Value",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool"
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes"
          }
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  }
];
var Multicall3Abi__factory = class {
  static abi = _abi43;
  static createInterface() {
    return new Interface(_abi43);
  }
  static connect(address, runner) {
    return new Contract(address, _abi43, runner);
  }
};
var _abi44 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "deci",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
var NativeWrapperErc20Abi__factory = class {
  static abi = _abi44;
  static createInterface() {
    return new Interface(_abi44);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi44,
      runner
    );
  }
};
var _abi45 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "MaxLengthIsZero",
    type: "error"
  },
  {
    inputs: [],
    name: "NotEnoughData",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "streamId",
        type: "uint64"
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]"
      },
      {
        internalType: "uint64",
        name: "lastDataTime",
        type: "uint64"
      }
    ],
    name: "bulkAppend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      }
    ],
    name: "createExchangeId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      },
      {
        internalType: "bool",
        name: "isPerp",
        type: "bool"
      },
      {
        internalType: "uint16",
        name: "timePeriod",
        type: "uint16"
      }
    ],
    name: "getStreamId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "exchange",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "dataId",
        type: "uint64"
      }
    ],
    name: "getStreamIdWithCustomDataId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "streamId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "skipCount",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "len",
        type: "uint32"
      }
    ],
    name: "readFromHead",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "streamId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "skipCount",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "len",
        type: "uint32"
      }
    ],
    name: "readFromTail",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "streamId",
        type: "uint64"
      }
    ],
    name: "readMeta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "streamId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxLen",
        type: "uint32"
      }
    ],
    name: "setMaxLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ops",
        type: "address"
      }
    ],
    name: "setOps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "payload",
        type: "uint256[]"
      }
    ],
    name: "updateStreams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var OhlcStoreAbi__factory = class {
  static abi = _abi45;
  static createInterface() {
    return new Interface(_abi45);
  }
  static connect(address, runner) {
    return new Contract(address, _abi45, runner);
  }
};
var _abi46 = [
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var OrderBookAbstractAbi__factory = class {
  static abi = _abi46;
  static createInterface() {
    return new Interface(_abi46);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi46,
      runner
    );
  }
};
var _abi47 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var OwnableAbi__factory = class {
  static abi = _abi47;
  static createInterface() {
    return new Interface(_abi47);
  }
  static connect(address, runner) {
    return new Contract(address, _abi47, runner);
  }
};
var _abi48 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "vault",
        type: "address"
      },
      {
        internalType: "TokenPair",
        name: "tokenPair",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InsertionHintStale",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSelfDealing",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchOrder",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyLimitWithInsertionHint",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceNotNormalized",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityNotMultipleOfMin",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "RestartPointerCorrupt",
    type: "error"
  },
  {
    inputs: [],
    name: "TradingHalted",
    type: "error"
  },
  {
    inputs: [],
    name: "UnableToFillCompletely",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "buyer",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "seller",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "SpotMatchQuantities",
        name: "spotMatchQuantities",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotMatchData",
        name: "spotMatchData",
        type: "uint256"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelBuys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelSells",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchTwoTokenCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcBuyInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "sellPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcSellInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readSpotTokenConfig",
    outputs: [
      {
        internalType: "SpotTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveBuyOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveSellOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blockId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "tradeSeq",
        type: "uint32"
      }
    ],
    name: "rts22TradeId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var PerpOrderBookAbi__factory = class {
  static abi = _abi48;
  static createInterface() {
    return new Interface(_abi48);
  }
  static connect(address, runner) {
    return new Contract(address, _abi48, runner);
  }
};
var _abi49 = [
  {
    inputs: [],
    name: "BalanceTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "NotImplemented",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "WrongPriceType",
    type: "error"
  },
  {
    inputs: [],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "Price59EN5",
        name: "mark",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBal",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotNode",
        name: "node",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "computePerpBalFeesOnly",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "quantity",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "feeSoFar",
        type: "uint64"
      }
    ],
    name: "estimateFeeFromQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeAddress",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "batch",
        type: "uint256[]"
      }
    ],
    name: "estimatePrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "user",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tokenId",
        type: "uint32"
      }
    ],
    name: "getMarkPrice",
    outputs: [
      {
        internalType: "Price59EN5",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "release",
    outputs: [],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "releasePerp",
    outputs: [],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "sequester",
    outputs: [],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "sequesterPerp",
    outputs: [],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "LendMatch",
        name: "lendMatch",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "settleLendMatch",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settlePerpMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerBuyer",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MakerSpotMatch",
        name: "makerSpotMatch",
        type: "uint256"
      },
      {
        internalType: "TakerSpotMatch",
        name: "takerSpotMatch",
        type: "uint256"
      }
    ],
    name: "settleSpotMakerSeller",
    outputs: [
      {
        internalType: "SpotMatchQuantities",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var PriceHelperAbi__factory = class {
  static abi = _abi49;
  static createInterface() {
    return new Interface(_abi49);
  }
  static connect(address, runner) {
    return new Contract(address, _abi49, runner);
  }
};
var _abi50 = [
  {
    stateMutability: "nonpayable",
    type: "fallback"
  }
];
var ProxyAbi__factory = class {
  static abi = _abi50;
  static createInterface() {
    return new Interface(_abi50);
  }
  static connect(address, runner) {
    return new Contract(address, _abi50, runner);
  }
};
var _abi51 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "vault",
        type: "address"
      },
      {
        internalType: "TokenPair",
        name: "tokenPair",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InsertionHintStale",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSelfDealing",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchOrder",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyLimitWithInsertionHint",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceNotNormalized",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "RestartPointerCorrupt",
    type: "error"
  },
  {
    inputs: [],
    name: "TradingHalted",
    type: "error"
  },
  {
    inputs: [],
    name: "UnableToFillCompletely",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "buyer",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "seller",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "SpotMatchQuantities",
        name: "spotMatchQuantities",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotMatchData",
        name: "spotMatchData",
        type: "uint256"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelBuys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelSells",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchTwoTokenCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcBuyInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "sellPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcSellInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readSpotTokenConfig",
    outputs: [
      {
        internalType: "SpotTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveBuyOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveSellOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blockId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "tradeSeq",
        type: "uint32"
      }
    ],
    name: "rts22TradeId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var SpotOrderBookAbi__factory = class {
  static abi = _abi51;
  static createInterface() {
    return new Interface(_abi51);
  }
  static connect(address, runner) {
    return new Contract(address, _abi51, runner);
  }
};
var _abi52 = [
  {
    inputs: [],
    name: "BadTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "CantSwapForAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "DeadlinePassed",
    type: "error"
  },
  {
    inputs: [],
    name: "Erc20TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "NativeCurrencyNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "SqrtPriceNotSupported",
    type: "error"
  }
];
var SwapErrorsAbi__factory = class {
  static abi = _abi52;
  static createInterface() {
    return new Interface(_abi52);
  }
  static connect(address, runner) {
    return new Contract(address, _abi52, runner);
  }
};
var _abi53 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchangeAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_priceHelperAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_ops",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "BadTokenId",
    type: "error"
  },
  {
    inputs: [],
    name: "CantSwapForAmount",
    type: "error"
  },
  {
    inputs: [],
    name: "DeadlinePassed",
    type: "error"
  },
  {
    inputs: [],
    name: "Erc20TransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "NativeCurrencyNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "SqrtPriceNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "accountId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256"
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160"
          }
        ],
        internalType: "struct ExactInputSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256"
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160"
          }
        ],
        internalType: "struct ExactOutputSingleParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "exchangeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountIn",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "priceByAmountIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountOut",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "priceByAmountOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountIn",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "swapByAmountInViaMinOut",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SwapInputAmountOut",
        name: "orderParams",
        type: "uint256"
      }
    ],
    name: "swapByAmountOutViaMaxIn",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "vacuumDust",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var SwapRouterAbi__factory = class {
  static abi = _abi53;
  static createInterface() {
    return new Interface(_abi53);
  }
  static connect(address, runner) {
    return new Contract(address, _abi53, runner);
  }
};
var _abi54 = [
  {
    inputs: [],
    name: "CallerNotPermissioned",
    type: "error"
  },
  {
    inputs: [],
    name: "ExchangeOnlyCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InsertionHintStale",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidBatchCommand",
    type: "error"
  },
  {
    inputs: [],
    name: "LiquidationPriceOutOfRange",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSelfDealing",
    type: "error"
  },
  {
    inputs: [],
    name: "NoSuchOrder",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyLimitWithInsertionHint",
    type: "error"
  },
  {
    inputs: [],
    name: "PriceNotNormalized",
    type: "error"
  },
  {
    inputs: [],
    name: "QuantityTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "RestartPointerCorrupt",
    type: "error"
  },
  {
    inputs: [],
    name: "TradingHalted",
    type: "error"
  },
  {
    inputs: [],
    name: "UnableToFillCompletely",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "CancelSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewBuyOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotOrderData",
        name: "eventOrderData",
        type: "uint256"
      }
    ],
    name: "NewSellOrder",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "buyer",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "seller",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "SpotMatchQuantities",
        name: "spotMatchQuantities",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "SpotMatchData",
        name: "spotMatchData",
        type: "uint256"
      }
    ],
    name: "NewTrade",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelBuys",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256"
      }
    ],
    name: "adminCancelSells",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "BatchCommand",
        name: "command",
        type: "uint256"
      },
      {
        internalType: "BatchTwoTokenCancelRebook",
        name: "rebook",
        type: "uint256"
      }
    ],
    name: "batchCancelRebook",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "bestBidOffer",
    outputs: [
      {
        internalType: "BestBidOffer",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "buyPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcBuyInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "Price59EN5",
        name: "sellPrice",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "minLength",
        type: "uint32"
      }
    ],
    name: "calcSellInsertionHint",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotBuyOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotCancelOrderData",
        name: "cancelOrderData",
        type: "uint256"
      }
    ],
    name: "cancelSpotSellOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeBuyMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyIn",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "MarketOrderPrice",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "computeSellMarketOrderSpecifyOut",
    outputs: [
      {
        internalType: "MarketOrderPriceResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "countBuyOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countBuyOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "countSellOrders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxCount",
        type: "uint32"
      }
    ],
    name: "countSellOrdersUpTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "halt",
        type: "bool"
      }
    ],
    name: "haltTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isHalted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrder",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotBuyOrderLiquidation",
    outputs: [
      {
        internalType: "BuyOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrder",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "SpotOrder",
        name: "orderData",
        type: "uint256"
      }
    ],
    name: "newSpotSellOrderLiquidation",
    outputs: [
      {
        internalType: "SellOrderResult",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "readMinOrderQuantity",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readSpotTokenConfig",
    outputs: [
      {
        internalType: "SpotTokenConfig",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "readVaultAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveBuyDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveBuyOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "retrieveSellDepthChart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "orderId",
        type: "uint64"
      }
    ],
    name: "retrieveSellOrder",
    outputs: [
      {
        internalType: "SpotOrder",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blockId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "chainId",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "tradeSeq",
        type: "uint32"
      }
    ],
    name: "rts22TradeId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchBuyOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "userId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "maxDepth",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxOrders",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "restartPosition",
        type: "uint64"
      }
    ],
    name: "searchSellOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "minOrderQuantity",
        type: "uint64"
      }
    ],
    name: "setMinOrderQuantity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var TwoTokenOrderBookAbi__factory = class {
  static abi = _abi54;
  static createInterface() {
    return new Interface(_abi54);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi54,
      runner
    );
  }
};
var _abi55 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "superAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "admin",
        type: "address"
      },
      {
        internalType: "address",
        name: "exchangeContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "extContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "viewContract",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "exchangeContract",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "extContract",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "viewContract",
        type: "address"
      }
    ],
    name: "Upgrade",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "extContract",
        type: "address"
      },
      {
        internalType: "address",
        name: "viewContract",
        type: "address"
      }
    ],
    name: "proxyUpgradeContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var UpgradableExchangeAbi__factory = class {
  static abi = _abi55;
  static createInterface() {
    return new Interface(_abi55);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi55,
      runner
    );
  }
};
var _abi56 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "superAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "admin",
        type: "address"
      },
      {
        internalType: "address",
        name: "implContract",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "AdminRoleOnly",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "implContract",
        type: "address"
      }
    ],
    name: "Upgrade",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implContract",
        type: "address"
      }
    ],
    name: "proxyUpgradeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var UpgradableFundAbi__factory = class {
  static abi = _abi56;
  static createInterface() {
    return new Interface(_abi56);
  }
  static connect(address, runner) {
    return new Contract(address, _abi56, runner);
  }
};

// node_modules/@wcm-inc/sdk/dist/chunk-YW7OEO4H.js
import { toBigInt as ln } from "ethers";
import mn from "bignumber.js";
import { ContractEventPayload as hn } from "ethers";
import R2 from "bignumber.js";
import { isAddress as Oi, toBigInt as Nt2 } from "ethers";
import { resolveAddress as z2 } from "ethers";
import En from "bignumber.js";
import { resolveAddress as bt2 } from "ethers";
import Jt from "bignumber.js";
import "ethers";
import yn2 from "@isaacs/ttlcache";
import mr from "bignumber.js";
import hr from "bignumber.js";
import Mn from "bignumber.js";
import Wn2 from "bignumber.js";
import { toBeHex as kr, toUtf8String as Pr } from "ethers";
import Or from "bignumber.js";
import vr from "bignumber.js";
import { toBeHex as Hn } from "ethers";
import w2 from "bignumber.js";
import "ethers";
import H2 from "bignumber.js";
import si from "bignumber.js";
import O2 from "bignumber.js";
import Ar from "bignumber.js";
import "ethers";
import C2 from "bignumber.js";
import { ContractEventPayload as De2 } from "ethers";
import Y2 from "bignumber.js";
import { toBigInt as gi } from "ethers";
import ki from "bignumber.js";
import { isAddressable as Bi } from "ethers";
import { ethers as Yr } from "ethers";
var zr = Object.create;
var pt = Object.defineProperty;
var Zr = Object.getOwnPropertyDescriptor;
var qt = (p8, e2) => (e2 = Symbol[p8]) ? e2 : /* @__PURE__ */ Symbol.for("Symbol." + p8);
var Pe = (p8) => {
  throw TypeError(p8);
};
var Qt = (p8, e2, t2) => e2 in p8 ? pt(p8, e2, { enumerable: true, configurable: true, writable: true, value: t2 }) : p8[e2] = t2;
var Ft = (p8, e2) => pt(p8, "name", { value: e2, configurable: true });
var Vt = (p8) => [, , , zr(p8?.[qt("metadata")] ?? null)];
var Ut = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var ke2 = (p8) => p8 !== void 0 && typeof p8 != "function" ? Pe("Function expected") : p8;
var Jr = (p8, e2, t2, r2, n3) => ({ kind: Ut[p8], name: e2, metadata: r2, addInitializer: (i2) => t2._ ? Pe("Already initialized") : n3.push(ke2(i2 || null)) });
var lt = (p8, e2) => Qt(e2, qt("metadata"), p8[3]);
var Kt = (p8, e2, t2, r2) => {
  for (var n3 = 0, i2 = p8[e2 >> 1], a2 = i2 && i2.length; n3 < a2; n3++) e2 & 1 ? i2[n3].call(t2) : r2 = i2[n3].call(t2, r2);
  return r2;
};
var mt2 = (p8, e2, t2, r2, n3, i2) => {
  var a2, o2, s2, c3, u3, d3 = e2 & 7, l2 = !!(e2 & 8), h3 = !!(e2 & 16), g3 = d3 > 3 ? p8.length + 1 : d3 ? l2 ? 1 : 2 : 0, b4 = Ut[d3 + 5], y3 = d3 > 3 && (p8[g3 - 1] = []), P2 = p8[g3] || (p8[g3] = []), k2 = d3 && (!h3 && !l2 && (n3 = n3.prototype), d3 < 5 && (d3 > 3 || !h3) && Zr(d3 < 4 ? n3 : { get [t2]() {
    return Wt(this, i2);
  }, set [t2](f3) {
    return _t2(this, i2, f3);
  } }, t2));
  d3 ? h3 && d3 < 4 && Ft(i2, (d3 > 2 ? "set " : d3 > 1 ? "get " : "") + t2) : Ft(n3, t2);
  for (var B2 = r2.length - 1; B2 >= 0; B2--) c3 = Jr(d3, t2, s2 = {}, p8[3], P2), d3 && (c3.static = l2, c3.private = h3, u3 = c3.access = { has: h3 ? (f3) => en(n3, f3) : (f3) => t2 in f3 }, d3 ^ 3 && (u3.get = h3 ? (f3) => (d3 ^ 1 ? Wt : tn)(f3, n3, d3 ^ 4 ? i2 : k2.get) : (f3) => f3[t2]), d3 > 2 && (u3.set = h3 ? (f3, N3) => _t2(f3, n3, N3, d3 ^ 4 ? i2 : k2.set) : (f3, N3) => f3[t2] = N3)), o2 = (0, r2[B2])(d3 ? d3 < 4 ? h3 ? i2 : k2[b4] : d3 > 4 ? void 0 : { get: k2.get, set: k2.set } : n3, c3), s2._ = 1, d3 ^ 4 || o2 === void 0 ? ke2(o2) && (d3 > 4 ? y3.unshift(o2) : d3 ? h3 ? i2 = o2 : k2[b4] = o2 : n3 = o2) : typeof o2 != "object" || o2 === null ? Pe("Object expected") : (ke2(a2 = o2.get) && (k2.get = a2), ke2(a2 = o2.set) && (k2.set = a2), ke2(a2 = o2.init) && y3.unshift(a2));
  return d3 || lt(p8, n3), k2 && pt(n3, t2, k2), h3 ? d3 ^ 4 ? i2 : k2 : n3;
};
var m3 = (p8, e2, t2) => Qt(p8, typeof e2 != "symbol" ? e2 + "" : e2, t2);
var ht = (p8, e2, t2) => e2.has(p8) || Pe("Cannot " + t2);
var en = (p8, e2) => Object(e2) !== e2 ? Pe('Cannot use the "in" operator on this value') : p8.has(e2);
var Wt = (p8, e2, t2) => (ht(p8, e2, "read from private field"), t2 ? t2.call(p8) : e2.get(p8));
var _t2 = (p8, e2, t2, r2) => (ht(p8, e2, "write to private field"), r2 ? r2.call(p8, t2) : e2.set(p8, t2), t2);
var tn = (p8, e2, t2) => (ht(p8, e2, "access private method"), t2);
var Ht = ((t2) => (t2[t2.Erc20 = 10] = "Erc20", t2[t2.Vault = 20] = "Vault", t2))(Ht || {});
var Q2 = class {
  static unpack(e2) {
    return { tokenId: dt(e2 >> 200n), sequestrationMultiplier: Tt(e2 >> 160n), tokenType: Tt(e2 >> 192n), positionDecimals: Tt(e2 >> 168n), vaultDecimals: Tt(e2 >> 176n), erc20Decimals: Tt(e2 >> 184n), riskPricePercent: Tt(e2 >> 232n), riskSlippagePercent: Tt(e2 >> 240n) / 10, tokenAddress: rn(Nt(e2), 20) };
  }
};
var un = E2.create([ExchangeErrorsAbi__factory.abi, GaapFundAbi__factory.abi, SwapErrorsAbi__factory.abi]);
async function pn(p8) {
  try {
    return await (typeof p8 == "function" ? p8() : p8);
  } catch (e2) {
    if (e2 && typeof e2 == "object" && "__decoded" in e2) throw e2;
    let t2 = await un.decode(e2).catch(() => {
      throw e2;
    });
    throw t2.type === o.EmptyError || t2.type === o.RpcError ? e2 : (t2.__decoded = true, t2);
  }
}
function gt(p8) {
  return async function(...t2) {
    return pn(p8.call(this, ...t2));
  };
}
var fe = class p3 extends Error {
  constructor(t2, r2) {
    super(t2);
    this.receipt = r2;
  }
  toJSON() {
    return JSON.stringify({ name: p3.name, message: this.message, receipt: this.receipt, cause: this.cause, stack: this.stack });
  }
};
async function jt2(p8, e2) {
  let r2 = await (await p8).wait(e2?.confirmations ?? 1);
  if (r2?.status === 0) throw new fe("Transaction is not successful", r2);
  return r2;
}
var Xt = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function ce(p8) {
  let { address: e2, block: t2, chainId: r2, tradeSeq: n3 } = p8, i2 = "", a2 = ln(e2);
  for (let s2 = 0; s2 < 28; s2++) i2 += Xt[Number(a2 >> BigInt(160 - s2 * 5 - 5) & 0x1fn)];
  let o2 = BigInt(t2) << 60n | BigInt(r2) << 28n | BigInt(n3);
  for (let s2 = 28; s2 < 52; s2++) i2 += Xt[Number(o2 >> BigInt(120 - (s2 - 27) * 5) & 0x1fn)];
  return i2;
}
function V2(p8) {
  let e2 = mn(p8);
  return u(!e2.isNaN(), `Invalid value: ${p8.toString()}`), u(!e2.isZero(), "You cannot input zero"), e2;
}
function zt(p8, e2) {
  try {
    let t2 = p8();
    return t2 instanceof Promise ? t2.catch((r2) => {
      throw Yt(r2, e2);
    }) : t2;
  } catch (t2) {
    throw Yt(t2, e2);
  }
}
function Yt(p8, e2) {
  let t2 = { cause: p8 };
  return p8 instanceof Error ? new Error(`[Context: ${e2}] ${p8.message}`, t2) : p8 && typeof p8 == "object" && "reason" in p8 && typeof p8.reason == "string" ? new Error(`[Context: ${e2}] ${p8.reason}`, t2) : new Error(`[Context: ${e2}]: See \`cause\` field.`, t2);
}
var L2 = class p4 {
  constructor(e2, t2, r2 = {}, n3 = {}) {
    this.contract = e2;
    this.resolvers = r2;
    this.eventRenames = n3;
    m3(this, "filterIndices");
    m3(this, "reverseEventRenames");
    m3(this, "abi");
    this.abi = t2, this.reverseEventRenames = Object.entries(n3).reduce((i2, [a2, o2]) => (i2[o2] = a2, i2), {}), this.filterIndices = t2.reduce((i2, a2) => (a2.type !== "event" || (i2[a2.name] = a2.inputs.reduce((o2, s2, c3) => (s2.indexed && (o2[s2.name] = c3), o2), {})), i2), {});
  }
  withProvider(e2) {
    let t2 = this.contract.connect(e2);
    return new p4(t2, this.abi, this.resolvers, this.eventRenames);
  }
  async subscribe(e2, t2, r2) {
    let n3 = new R(), i2 = false, a2 = (...s2) => {
      let c3 = s2.at(-1);
      n3.push(this.resolve(e2, c3), (u3) => {
        i2 || t2(u3, c3);
      });
    }, o2 = this.eventNameLookup(e2, true);
    return r2?.filters && (o2 = this.encodeFilterTopics(o2, r2.filters)), await this.contract.addListener(o2, a2), async () => {
      await this.contract.removeListener(o2, a2), i2 = true;
    };
  }
  async subscribeAll(e2) {
    let t2 = new R(), r2 = false, n3 = (i2) => {
      let a2 = i2.fragment.name;
      if (!(a2 in this.contract.filters)) return;
      let o2 = this.eventNameLookup(a2);
      t2.push(this.resolve(o2, i2), (s2) => {
        r2 || e2({ name: o2, data: s2 }, i2);
      });
    };
    return await this.contract.addListener("*", n3), async () => {
      await this.contract.removeListener("*", n3), r2 = true;
    };
  }
  async getLogs(e2) {
    let { events: t2 = Object.keys(this.filterIndices), ...r2 } = e2 || {}, n3 = this.contract.getAddress(), i2 = await Promise.all(t2.map((a2) => {
      let o2 = this.eventNameLookup(typeof a2 == "string" ? a2 : a2.name, true);
      return this.contract.runner.provider.getLogs({ ...r2, address: n3, topics: this.encodeFilterTopics(o2, typeof a2 == "string" ? {} : a2.filter || {}) });
    }));
    return Promise.all(i2.flat().toSorted((a2, o2) => a2.blockNumber === o2.blockNumber ? a2.transactionIndex === o2.transactionIndex ? a2.index - o2.index : a2.transactionIndex - o2.transactionIndex : a2.blockNumber - o2.blockNumber).map(async (a2) => {
      let s2 = this.contract.interface.parseLog(a2).name, c3 = new hn(this.contract, null, s2, this.contract.getEvent(s2).fragment, a2), u3 = this.eventNameLookup(s2), d3 = await this.resolve(u3, c3);
      return { name: u3, payload: c3, data: d3 };
    }));
  }
  async combineSubscriptions(...e2) {
    let t2 = await Promise.all(e2);
    return async () => {
      await Promise.all(t2.map((r2) => r2()));
    };
  }
  eventNameLookup(e2, t2 = false) {
    return t2 ? e2 in this.reverseEventRenames ? this.reverseEventRenames[e2] : e2 : e2 in this.eventRenames ? this.eventRenames[e2] : e2;
  }
  resolve(e2, t2) {
    let r2 = bn(t2), n3 = this.eventNameLookup(e2);
    if (n3 in this.resolvers) {
      let i2 = this.resolvers[n3];
      switch (typeof i2) {
        case "object": {
          let a2 = Object.keys(i2), o2 = {};
          for (let s2 of a2) o2[i2[s2]] = r2[s2];
          return Promise.resolve({ ...wt(r2, ...a2), ...o2 });
        }
        case "function":
          return Promise.resolve(i2(r2, t2));
        default:
          throw new Error(`Unknown resolver type: ${typeof i2}`);
      }
    }
    return Promise.resolve(r2);
  }
  encodeFilterTopics(e2, t2) {
    let r2 = Object.entries(t2);
    if (!r2.length) return this.contract.interface.encodeFilterTopics(e2, []);
    let n3 = this.filterIndices[e2], i2 = new Array(Object.keys(n3).length).fill(null);
    return r2.forEach(([a2, o2]) => {
      a2 in n3 && (i2[n3[a2]] = o2);
    }), this.contract.interface.encodeFilterTopics(e2, i2);
  }
};
function bn(p8) {
  return p8.fragment.inputs.reduce((e2, t2, r2) => (e2[t2.name] = p8.args[r2], e2), {});
}
var Oe = class {
  constructor() {
    m3(this, "cache", new yn2({ checkAgeOnGet: true }));
  }
  extract(e2) {
    return this.cache.get(e2);
  }
  has(e2) {
    return this.cache.has(e2);
  }
  put(e2, t2, r2) {
    let { ttl: n3 } = r2;
    this.cache.set(e2, t2, { ttl: n3 });
  }
  remove(e2) {
    this.cache.delete(e2);
  }
  nuke() {
    this.cache.clear();
  }
};
var er2 = 10;
var tr;
var rr;
var We;
rr = [gt], tr = [gt];
var F2 = class {
  constructor(e2) {
    Kt(We, 5, this);
    m3(this, "estimateGas");
    m3(this, "confirmations", 1);
    m3(this, "combineReads");
    m3(this, "pendings", /* @__PURE__ */ new Map());
    m3(this, "cache");
    m3(this, "listeners", /* @__PURE__ */ new Set());
    m3(this, "prefix", null);
    m3(this, "nonpayable", this.override.bind(this));
    let { confirmations: t2, estimateGas: r2, combineReads: n3, cache: i2 } = e2;
    this.combineReads = n3 ?? true, De(t2) && (this.confirmations = t2), r2 && (Ie(r2) ? r2 && (this.estimateGas = { margin: er2 }) : this.estimateGas = { margin: r2.margin }), Ie(i2) ? this.cache = { enabled: i2, persistor: new Oe(), ttl: _t({ minutes: 10 }) } : this.cache = { enabled: i2?.enabled ?? true, persistor: i2?.persistor ?? new Oe(), ttl: De(i2?.ttl) ? i2.ttl : i2?.ttl ? _t(i2.ttl) : _t({ minutes: 10 }) };
  }
  withPrefix(e2) {
    let t2 = Object.create(Object.getPrototypeOf(this));
    return Object.assign(t2, this), t2.prefix = e2, t2;
  }
  onTransaction(e2) {
    return this.listeners.add(e2), () => {
      this.listeners.delete(e2);
    };
  }
  async tx(e2, t2, r2, ...n3) {
    let i2 = r2?.overrides, a2 = r2?.estimateGas === false;
    if ((!i2 || !De(i2.gasLimit)) && !a2 && (this.estimateGas || r2?.estimateGas)) {
      let d3 = await this.nonpayable(e2.estimateGas.bind(e2), i2 ? wt(i2, "gasLimit") : void 0, ...n3), l2 = this.estimateGas?.margin ?? er2;
      r2?.estimateGas && typeof r2.estimateGas == "object" && (l2 = r2.estimateGas.margin), i2 = { ...i2, gasLimit: Jt(d3.toString()).multipliedBy(Jt(100).plus(l2).div(100)).toFixed(0) };
    }
    let o2 = await this.nonpayable(e2, i2, ...n3);
    r2?.onTransactionResponse?.(o2);
    let s2 = this.wait(Promise.resolve(o2), r2?.confirmations), u3 = await (r2?.emitTransactionEvent ?? true ? this.emitTransaction(s2, t2) : s2);
    return r2?.invalidate?.forEach((d3) => this.cache.persistor.remove(this.constructKey(d3))), u3;
  }
  async withCache(e2, t2) {
    let { options: r2, key: n3, resolveKey: i2 } = e2;
    if (Ie(r2?.cache) ? !r2.cache : !this.cache.enabled) return t2();
    let a2 = Array.isArray(n3) ? n3 : [n3];
    for (let c3 of a2) {
      let u3 = this.constructKey({ options: r2, ...c3 });
      if (this.cache.persistor.has(u3)) return this.cache.persistor.extract(u3);
    }
    let o2 = await t2(), s2;
    if (i2) {
      let c3 = i2(o2);
      Array.isArray(c3) ? a2.push(...c3) : a2.push(c3);
    }
    De(r2?.ttl) ? s2 = r2?.ttl : r2?.ttl && typeof r2.ttl == "object" ? s2 = _t(r2.ttl) : s2 = this.cache.ttl;
    for (let c3 of a2) {
      let u3 = this.constructKey({ options: r2, ...c3 }), d3 = "value" in c3 ? c3.value : o2;
      this.cache.persistor.put(u3, d3, { ttl: s2 });
    }
    return o2;
  }
  view(e2, t2, ...r2) {
    return this.withPending({ key: { name: e2.name, params: r2 }, options: t2 }, () => this.override(e2, t2?.overrides, ...r2));
  }
  async withPending(e2, t2) {
    let { options: r2, key: n3 } = e2;
    if (Ie(r2?.combine) ? !r2.combine : !this.combineReads) return t2();
    let i2 = Array.isArray(n3) ? n3 : [n3];
    for (let o2 of i2) {
      let s2 = this.constructKey({ options: r2, ...o2 });
      if (this.pendings.has(s2)) return this.pendings.get(s2);
    }
    let a2 = t2();
    for (let o2 of i2) {
      let s2 = this.constructKey({ options: r2, ...o2 });
      this.pendings.set(s2, a2);
    }
    try {
      return await a2;
    } finally {
      for (let o2 of i2) {
        let s2 = this.constructKey({ options: r2, ...o2 });
        this.pendings.delete(s2);
      }
    }
  }
  async emitTransaction(e2, t2) {
    let r2 = await e2;
    return r2 && this.listeners.forEach((n3) => n3({ receipt: r2, context: t2 })), r2;
  }
  wait(e2, t2) {
    return jt2(e2, { confirmations: De(t2) ? t2 : this.confirmations });
  }
  override(e2, t2, ...r2) {
    let n3 = t2 ? [...r2, t2] : r2;
    return e2(...n3);
  }
  constructKey(e2) {
    let { name: t2, options: r2, params: n3 = [] } = e2, { overrides: i2 } = r2 || {}, { blockTag: a2 } = i2 || {};
    return `${this.wrapWithPrefix(t2)}(${n3.join()}):::[${a2 ? a2.toString() : ""}]`;
  }
  wrapWithPrefix(e2) {
    return this.prefix ? `${this.prefix}:${e2}` : e2;
  }
};
We = Vt(null), mt2(We, 1, "tx", rr, F2), mt2(We, 1, "view", tr, F2), lt(We, F2);
var ee2 = class {
  constructor(e2) {
    m3(this, "address");
    m3(this, "event");
    m3(this, "contract");
    m3(this, "runner");
    m3(this, "signer", null);
    let { address: t2, ...r2 } = e2;
    this.runner = new F2(r2);
    let n3;
    if ("signer" in e2) n3 = e2.signer, this.signer = e2.signer;
    else if ("provider" in e2) n3 = e2.provider;
    else throw new Error("You must provide either a signer or a provider");
    this.contract = ERC20Abi__factory.connect(t2, n3), this.event = new L2(this.contract, ERC20Abi__factory.abi, { Approval: async ({ value: i2, ...a2 }) => ({ ...a2, amount: Ge(i2, await this.getDecimals()) }), Transfer: async ({ value: i2, ...a2 }) => ({ ...a2, amount: Ge(i2, await this.getDecimals()) }) }, {}), this.address = t2;
  }
  onTransaction(e2) {
    return this.runner.onTransaction(e2);
  }
  getName(e2) {
    return this.runner.withCache({ key: { name: this.getName.name, params: [] }, options: e2 }, () => this.runner.view(this.contract.name, e2));
  }
  getSymbol(e2) {
    return this.runner.withCache({ key: { name: this.getSymbol.name, params: [] }, options: e2 }, () => this.runner.view(this.contract.symbol, e2));
  }
  getDecimals(e2) {
    return this.runner.withCache({ key: { name: this.getDecimals.name, params: [] }, options: e2 }, () => this.runner.view(this.contract.decimals, e2).then(Number));
  }
  async getBalance(e2 = {}, t2) {
    let { address: r2 } = e2;
    r2 ? r2 = await bt2(r2) : (u(this.signer, "Address or signer is expected"), r2 = await this.signer.getAddress());
    let [n3, i2] = await Promise.all([this.runner.view(this.contract.balanceOf, t2, r2), this.getDecimals(t2)]);
    return Ge(n3, i2);
  }
  async getAllowance(e2, t2) {
    let { address: r2 } = e2, { spender: n3 } = e2;
    r2 || (u(this.signer, "Address or signer is expected"), r2 = this.signer);
    let [i2, a2] = await Promise.all([this.runner.view(this.contract.allowance, t2, await bt2(r2), await bt2(n3)), this.getDecimals(t2)]);
    return Ge(i2, a2);
  }
  async safeApprove(e2, t2) {
    let { amount: r2, spender: n3 } = e2;
    u(this.signer, "There is no signer to perform this transaction!");
    let [i2, a2] = await Promise.all([this.getDecimals(), this.getAllowance({ spender: n3 })]);
    return String(r2) !== "0" && !a2.isZero() && await this.runner.tx(this.contract.approve, this.getTxContext(this.safeApprove.name), t2, n3, 0), this.runner.tx(this.contract.approve, this.getTxContext(this.safeApprove.name), t2, n3, ze(r2, i2).toFixed());
  }
  async approve(e2, t2) {
    let { amount: r2, spender: n3 } = e2;
    u(this.signer, "There is no signer to perform this transaction!");
    let i2 = await this.getDecimals();
    return this.runner.tx(this.contract.approve, this.getTxContext(this.approve.name), t2, n3, ze(r2, i2).toFixed());
  }
  getTxContext(e2) {
    return { source: "ERC20", fn: e2 };
  }
};
var Qe = class extends ee2 {
  constructor(e2) {
    let { runner: t2, ...r2 } = e2;
    super(r2), this.runner = t2;
  }
};
var Pn = m(128);
function yt(p8) {
  return { fundTokenDecimals: Tt(p8), depositTokenErc20Decimals: Tt(p8 >> 8n), queueProcessPeriodSeconds: dt(p8 >> 16n), managerSettlePeriodSeconds: dt(p8 >> 48n), managerFeeBips: Number(p8 >> 80n & ke), performanceFeeBips: Number(p8 >> 96n & ke), depositLotSize: p8 >> 112n & Pn };
}
var Ve = class {
  constructor(e2, t2, r2) {
    this.fn = r2;
    m3(this, "identifier");
    this.identifier = BigInt(t2) << 6n | BigInt(e2);
  }
  async encode() {
    let e2 = this.fn();
    return e2 instanceof Promise ? this.appendIdentifier(await e2) : this.appendIdentifier(e2);
  }
  appendIdentifier(e2) {
    return Array.isArray(e2) ? [BigInt(e2[0]) << 16n | this.identifier, ...e2.map(BigInt).slice(1)] : [BigInt(e2) << 16n | this.identifier];
  }
};
var de = class {
  constructor() {
    m3(this, "commands", []);
    m3(this, "isRunning", false);
  }
  static isEmpty(e2) {
    return e2.commands.length === 0;
  }
  static run(e2, t2) {
    e2.isRunning = true, t2(e2), e2.isRunning = false;
  }
  static async encodeBatch(e2) {
    return (await Promise.all(e2.commands.map((r2) => r2.encode()))).flat();
  }
  appendCommand(e2, t2, r2) {
    u(this.isRunning, "You cannot call a batch-related function outside the `batch` function!"), this.commands.push(new Ve(e2, t2, r2));
  }
};
var Tt2 = class {
  constructor(e2) {
    m3(this, "address");
    m3(this, "contract");
    m3(this, "runner");
    m3(this, "signer", null);
    m3(this, "depositTokenDecimals");
    m3(this, "fundTokenDecimals");
    let { address: t2, depositTokenDecimals: r2 = 0, fundTokenDecimals: n3 = 0, ...i2 } = e2;
    this.runner = new F2(i2).withPrefix(t2), this.depositTokenDecimals = r2, this.fundTokenDecimals = n3;
    let a2;
    if ("signer" in e2) a2 = e2.signer, this.signer = e2.signer;
    else if ("provider" in e2) a2 = e2.provider;
    else throw new Error("You must provide either a signer or a provider");
    this.contract = GaapFundAbi__factory.connect(t2, a2), this.address = t2;
  }
  onTransaction(e2) {
    return this.runner.onTransaction(e2);
  }
  getFundTokenDecimals(e2) {
    return this.runner.withCache({ key: { name: this.getFundTokenDecimals.name, params: [] }, options: e2 }, async () => Tt(await this.runner.view(this.contract.fundParams, e2)));
  }
  getDepositTokenAddress(e2) {
    return this.runner.withCache({ key: { name: this.getDepositTokenAddress.name, params: [] }, options: e2 }, async () => this.runner.view(this.contract.depositTokenAddress, e2));
  }
  getAum(e2) {
    return this.runner.withCache({ key: { name: this.getAum.name, params: [] }, options: e2 }, async () => Ge(await this.runner.view(this.contract.getAum, e2), this.depositTokenDecimals));
  }
  getMaxAum(e2) {
    return this.runner.withCache({ key: { name: this.getMaxAum.name, params: [] }, options: e2 }, async () => Ge(await this.runner.view(this.contract.getMaxAum, e2), this.depositTokenDecimals));
  }
  async getBalanceOf(e2, t2) {
    return Ge(await this.runner.view(this.contract.balanceOf, t2, e2.address), this.fundTokenDecimals);
  }
  getTotalSupply(e2) {
    return this.runner.withCache({ key: { name: this.getTotalSupply.name, params: [] }, options: e2 }, async () => Ge(await this.runner.view(this.contract.totalSupply, e2), this.fundTokenDecimals));
  }
  async getRequestedDeposit(e2, t2) {
    return Ge(await this.runner.view(this.contract.requestedDepositForUser, t2, e2.address), this.depositTokenDecimals);
  }
  async getRequestedWithdraw(e2, t2) {
    return Ge(await this.runner.view(this.contract.requestedWithdrawForUser, t2, e2.address), this.fundTokenDecimals);
  }
  getLastNavTime(e2) {
    return this.runner.withCache({ key: { name: this.getLastNavTime.name, params: [] }, options: e2 }, async () => Number(await this.runner.view(this.contract.lastNavTime, e2)));
  }
  getFundParams(e2) {
    return this.runner.withCache({ key: { name: this.getFundParams.name, params: [] }, options: e2 }, async () => yt(await this.runner.view(this.contract.fundParams, e2)));
  }
  getLastNav(e2) {
    return this.runner.withCache({ key: { name: this.getLastNav.name, params: [] }, options: e2 }, async () => Ge(await this.runner.view(this.contract.lastNav, e2), this.depositTokenDecimals));
  }
  getManager(e2) {
    return this.runner.withCache({ key: { name: this.getManager.name, params: [] }, options: e2 }, async () => this.runner.view(this.contract.manager, e2));
  }
  getTrader(e2) {
    return this.runner.withCache({ key: { name: this.getTrader.name, params: [] }, options: e2 }, async () => this.runner.view(this.contract.trader, e2));
  }
  getCumAdjPnl(e2) {
    return this.runner.withCache({ key: { name: this.getCumAdjPnl.name, params: [] }, options: e2 }, async () => Ge(bt(await this.runner.view(this.contract.getCumAdjPnl, e2), 256), this.depositTokenDecimals));
  }
  getHighWaterMark(e2) {
    return this.runner.withCache({ key: { name: this.getHighWaterMark.name, params: [] }, options: e2 }, async () => Ge(bt(await this.runner.view(this.contract.getHighWaterMark, e2), 256), this.depositTokenDecimals));
  }
  getUnconfirmedNav(e2) {
    return this.runner.withCache({ key: { name: this.getUnconfirmedNav.name, params: [] }, options: e2 }, async () => {
      let [t2, r2] = await this.runner.view(this.contract.unconfirmedNav, e2);
      return { nav: Ge(t2, this.depositTokenDecimals), managerFees: Ge(r2, this.depositTokenDecimals) };
    });
  }
  getLastManagerSettleTime(e2) {
    return this.runner.withCache({ key: { name: this.getLastManagerSettleTime.name, params: [] }, options: e2 }, async () => Number(await this.runner.view(this.contract.lastManagerSettleTime, e2)));
  }
  async getWaitingToDeposit(e2, t2) {
    return Ge(await this.runner.view(this.contract.waitingToDepositWithCount, t2, e2.count), this.depositTokenDecimals);
  }
  async getWaitingToWithdraw(e2, t2) {
    return Ge(await this.runner.view(this.contract.waitingToWithdrawWithCount, t2, e2.count), this.fundTokenDecimals);
  }
  async requestDeposit(e2, t2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.requestDeposit, this.getTxContext(this.requestDeposit.name), t2, ze(e2.amount, this.depositTokenDecimals).toFixed());
  }
  async requestWithdraw(e2, t2) {
    u(this.signer, "There is no signer to perform this transaction!");
    let r2 = ze(e2.amount, this.fundTokenDecimals).toFixed();
    return this.runner.tx(this.contract.requestWithdraw, this.getTxContext(this.requestWithdraw.name), t2, r2);
  }
  async cancelDepositRequest(e2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.cancelDepositRequest, this.getTxContext(this.cancelDepositRequest.name), e2);
  }
  async cancelWithdrawRequest(e2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.cancelWithdrawRequest, this.getTxContext(this.cancelWithdrawRequest.name), e2);
  }
  async initializeFund(e2, t2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.initializeFund, this.getTxContext(this.initializeFund.name), { ...t2, invalidate: [{ name: this.getLastNavTime.name, params: [] }] }, e2.traderAddress, e2.maxEntriesToProcess);
  }
  async processQueues(e2, t2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.processQueues, this.getTxContext(this.processQueues.name), { ...t2, invalidate: [{ name: this.getAum.name, params: [] }] }, ze(e2.withdrawAmount, this.depositTokenDecimals).toFixed(), e2.settleFlag, e2.maxEntriesToProcess);
  }
  async batchCommands(e2, t2) {
    u(this.signer, "There is no signer to perform this transaction!");
    let r2 = await de.encodeBatch(e2.batch);
    return this.runner.tx(this.contract.batchCommands, this.getTxContext(this.batchCommands.name), t2, r2);
  }
  async setMaxAum(e2, t2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.setMaxAum, this.getTxContext(this.setMaxAum.name), { ...t2, invalidate: [{ name: this.getMaxAum.name, params: [] }] }, ze(e2.maxAum, this.depositTokenDecimals).toFixed());
  }
  async setTraderAddress(e2, t2) {
    return u(this.signer, "There is no signer to perform this transaction!"), this.runner.tx(this.contract.setTraderAddress, this.getTxContext(this.setTraderAddress.name), t2, e2.traderAddress);
  }
  getTxContext(e2) {
    return { source: "GaapFund", fn: e2 };
  }
};
var _2 = class {
  static unpack(e2, t2) {
    let r2 = Number(e2 >> 156n & ye), n3 = new Date(T2.EPOCH);
    n3.setUTCMinutes(r2);
    let i2 = Number(e2 >> 220n & ke), a2 = new Date(n3);
    return a2.setUTCMinutes(a2.getUTCMinutes() + i2 * 60), { interestRate: new En((e2 & ke).toString()).dividedBy(T2.INTEREST_DIVISOR), quantity: Ge(e2 >> 16n & Ne, t2), tokenId: Number(e2 >> 80n & ye), counterPartyId: e2 >> 112n & m(44), startTime: n3, endTime: a2, seqId: Number(e2 >> 188n & ye), returnable: (e2 >> 252n & m(1)) !== 0n, lendHoursDuration: i2, hoursPaid: Number(e2 >> 236n & ke), positionId: e2 >> 156n & Ne };
  }
};
var ue = class {
  static unpack(e2, t2) {
    let r2 = Number(e2 >> 128n & ye), n3 = new Date(Date.UTC(2024, 0, 1));
    return n3.setUTCSeconds(r2 * 60 * 60 * 8), { price: _r(e2 & Ne), quantity: Ge(e2 >> 64n & Ne, t2), shortAccountId: e2 >> 160n & m(44), longAccountId: e2 >> 204n & m(44), startTime: n3 };
  }
};
var Ee2 = class {
  static unpack(e2, t2, r2) {
    let [n3, i2] = e2, [a2, o2, s2, c3] = Be(n3, [32, 96, 64, 64]), u3 = Number(a2), d3 = new Date(Date.UTC(2024, 0, 1));
    return d3.setUTCSeconds(u3 * 60 * 60 * 8), { price: _r(bt(c3, 64)), owedNom: Ge(bt(o2, 96), t2).div(T2.FUNDING_RATE_DIVISOR).dp(t2, mr.ROUND_DOWN), owedBase: Ge(i2, t2 + 31).dp(r2, mr.ROUND_DOWN), quantity: Ge(bt(s2, 64), t2), startTime: d3 };
  }
};
var q2 = class p5 {
  static unpack(e2, t2, r2) {
    let n3 = Number(t2 & ye), i2 = new Date(Date.UTC(2024, 0, 1));
    i2.setUTCMinutes(n3);
    let a2 = Number(e2 >> 200n & ke), o2 = new Date(i2);
    return o2.setUTCMinutes(o2.getUTCMinutes() + a2 * 60), { seqId: Number(t2 >> 32n & ye), positionId: t2, lenderId: e2 >> 156n & m(44), borrowerId: e2 >> 112n & m(44), interestRate: new hr((e2 & ke).toString()).dividedBy(T2.INTEREST_DIVISOR), lenderInterestRate: new hr((e2 >> 234n & ke).toString()).dividedBy(T2.INTEREST_DIVISOR), quantity: Ge(e2 >> 16n & Ne, r2), tokenId: p5.extractTokenId(e2), buyerIsMaker: (e2 >> 232n & m(1)) !== 0n, returnable: (e2 >> 233n & m(1)) !== 0n, hoursPaid: Number(e2 >> 216n & ke), lendHoursDuration: a2, startTime: i2, endTime: o2 };
  }
  static extractTokenId(e2) {
    return Number(e2 >> 80n & ye);
  }
};
var Be2 = class {
  static unpack(e2, t2, r2, n3) {
    return { longAccountId: t2, shortAccountId: r2, paymentLongToShort: Ge(bt(e2 & Ne, 64n), n3), tokenId: Number(e2 >> 64n & ye), debtIssuedKey: e2 >> 96n & Ne, trueUpPrice: _r(e2 >> 160n & Ne), fundingFee: Ge(kt(e2 >> 224n & ye), n3) };
  }
};
var Ie2 = class {
  static unpack(e2, t2) {
    let [r2, n3, i2] = Be(e2, [16, 64, 64]);
    return { highestInterestRate: new Mn(r2.toString()).dividedBy(T2.INTEREST_DIVISOR), borrowerQuantity: Ge(i2, t2), lenderQuantity: Ge(n3, t2) };
  }
};
var Ce = class {
  static unpack(e2, t2) {
    let [r2, n3, i2, a2, o2] = Be(e2, [32, 32, 16, 64, 64]), s2 = new Date(T2.EPOCH);
    return s2.setUTCMinutes(Number(r2)), { soonestDueDate: s2, tokenId: Number(n3), highestInterestRate: new Wn2(i2.toString()).dividedBy(T2.INTEREST_DIVISOR), borrowerQuantity: Ge(o2, t2), lenderQuantity: Ge(a2, t2) };
  }
};
var re = class extends Q2 {
  static unpack(e2, t2, r2) {
    let [n3, i2] = Be(t2, [247, 8]), [a2, o2] = Be(r2, [247, 8]), s2 = Math.min(Number(i2), this.MAX_STRING_LEN_BYTES), c3 = Math.min(Number(o2), this.MAX_STRING_LEN_BYTES);
    return { ...Q2.unpack(e2), name: Pr(kr(this.truncate(a2, c3), c3)), isNameTruncated: o2 === this.STRING_TRUNCATION_SIGN, symbol: Pr(kr(this.truncate(n3, s2), s2)), isSymbolTruncated: i2 === this.STRING_TRUNCATION_SIGN };
  }
  static truncate(e2, t2) {
    return e2 >> BigInt(31 - t2) * 8n;
  }
};
m3(re, "MAX_STRING_LEN_BYTES", 31), m3(re, "STRING_TRUNCATION_SIGN", 255n);
var xe = class {
  static unpack(e2, t2) {
    let [r2, n3, i2, a2] = Be(e2, [16, 16, 8, 8]);
    return { minBorrowHours: Number(r2), maxFeeExponent: Number(i2), maxFeeMantissa: Number(a2), maxFee: Ge(Or(Number(a2)).times(Or(10).pow(Number(i2))), t2), feeRate: Number(n3) / T2.FEE_DIVISOR };
  }
};
var pe = class {
  static unpack(e2, t2) {
    let [r2, n3, i2] = Be(e2, this.layout), a2 = new Date(T2.EPOCH);
    return a2.setUTCHours(Number(r2) * 8), { startTime: a2, totalQuantity: Ge(n3, t2), currentDeltaSum: Ge(vr(i2.toString()).div(vr(2).pow(30)), t2) };
  }
};
m3(pe, "layout", [32, 96, 128]);
var we = class {
  static unpack(e2) {
    return { oracleAddress: Hn(Nt(e2 >> 8n), 20), priceType: Tt(e2) };
  }
};
var Re = class {
  static unpack({ spotMatchQuantities: e2, spotMatchData: t2, buyer: r2, seller: n3 }, i2, a2) {
    return { buyerId: r2, sellerId: n3, ...this.unpackQuantities(e2, i2, a2), ...this.unpackData(t2) };
  }
  static unpackQuantities(e2, t2, r2) {
    return { fromFee: Ge(e2 & Ne, t2), fromQuantity: Ge(e2 >> 128n & Ne, t2), toFee: Ge(e2 >> 64n & Ne, r2), toQuantity: Ge(e2 >> 192n & Ne, r2) };
  }
  static unpackData(e2) {
    let [t2, r2, n3, i2, a2] = Be(e2, [1, 64, 64, 64, 32]);
    return { buyerIsMaker: t2 === 1n, tradeSeq: Number(a2), sellerOrderId: i2, buyerOrderId: n3, price: _r(r2) };
  }
};
var ne2 = class {
  static unpack(e2, t2, r2) {
    let [n3, i2, a2, o2] = Be(e2, [4, 64, 64, 64]);
    return { accountId: t2, type: Number(n3), orderId: i2, quantity: Ge(a2, r2), price: _r(o2) };
  }
};
var ie = class {
  static unpack(e2, t2) {
    return { sellPrice: _r(e2 & Ne), sellQuantity: Ge(e2 >> 64n & Ne, t2), buyPrice: _r(e2 >> 128n & Ne), buyQuantity: Ge(e2 >> 192n & Ne, t2) };
  }
};
var A2 = class {
  static unpack(e2, t2) {
    let [r2, n3, i2, a2, o2] = Be(e2, this.layout);
    return { price: _r(o2), quantity: Ge(a2, t2), accountId: i2, type: Number(n3), insertionHint: r2 };
  }
  static pack(e2, t2) {
    let { insertionHint: r2, type: n3, accountId: i2, quantity: a2, price: o2 } = e2;
    return Ee([r2, n3, i2, ze(a2, t2).toFixed(), Ir(o2)], this.layout);
  }
};
m3(A2, "layout", [64, 4, 44, 64, 64]);
var ae2 = class {
  static unpack(e2, t2) {
    let [r2, n3, i2, a2] = Be(e2, [4, 64, 64, 64]);
    return { price: _r(a2), quantity: Ge(i2, t2), orderId: n3, type: Number(r2) };
  }
};
var le2 = class p6 {
  constructor(e2, t2, r2, n3, i2, a2) {
    this.exchange = e2;
    this.chainId = t2;
    this.address = r2;
    this.buyToken = n3;
    this.sellToken = i2;
    this.runner = a2;
    m3(this, "event");
    m3(this, "spotOrderBook");
    let o2 = ISpotOrderBookAbi__factory.connect(r2, this.exchange.provider), s2 = ({ eventOrderData: c3, accountId: u3 }) => ne2.unpack(c3, u3, n3.positionDecimals);
    this.event = new L2(o2, ISpotOrderBookAbi__factory.abi, { NewBuyOrder: s2, NewSellOrder: s2, CancelBuyOrder: s2, CancelSellOrder: s2, NewTrade: (c3, u3) => {
      let d3 = Re.unpack(c3, n3.positionDecimals, i2.positionDecimals);
      return { ...d3, rts22id: ce({ chainId: this.chainId, address: this.address, block: u3.log.blockNumber, tradeSeq: d3.tradeSeq }) };
    } }, {}), this.spotOrderBook = o2;
  }
  async createSellOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().newSpotSellOrder, this.getTxContext(this.createSellOrder.name), t2, this.address, A2.pack(await this.convertOrderData(e2), this.buyToken.positionDecimals));
  }
  async getMaxSellTradeQuantity(e2) {
    let { price: t2 } = e2, { portfolio: r2, applyFee: n3, calcValue: i2, resolveQuantity: a2 } = await this.prepareMaxTradeQuantity("sell"), o2 = r2[this.sellToken.tokenId].balance, s2 = r2[this.buyToken.tokenId].balance;
    if ((await i2({ baseBalance: n3(o2.plus(s2.times(t2)), this.sellToken), tokenQuantity: w2(0) })).gt(0)) return { quantity: a2(s2), riskOfLiquidation: false };
    let u3 = s2, d3 = w2(0), l2 = 20;
    for (; l2 > 0; ) {
      l2--;
      let h3 = u3.plus(d3).div(2).dp(this.buyToken.positionDecimals), g3 = n3(h3.times(t2), this.sellToken), b4 = await i2({ baseBalance: o2.plus(g3), tokenQuantity: s2.minus(h3) });
      if (b4.gt(0)) {
        if (b4.lte(5)) return { quantity: a2(h3), riskOfLiquidation: true };
        d3 = h3;
      } else u3 = h3;
    }
    return { quantity: a2(d3), riskOfLiquidation: true };
  }
  async getMaxBuyTradeQuantity(e2) {
    let { price: t2 } = e2, { portfolio: r2, applyFee: n3, calcValue: i2, resolveQuantity: a2 } = await this.prepareMaxTradeQuantity("buy"), o2 = r2[this.sellToken.tokenId].balance, s2 = r2[this.buyToken.tokenId].balance;
    if ((await i2({ baseBalance: w2(0), tokenQuantity: n3(s2.plus(o2.div(t2)), this.buyToken) })).gt(0)) return { quantity: a2(o2.div(t2)), riskOfLiquidation: false };
    let u3 = o2, d3 = w2(0), l2 = 20;
    for (; l2 > 0; ) {
      l2--;
      let h3 = u3.plus(d3).div(2).dp(this.sellToken.positionDecimals), g3 = n3(h3.div(t2), this.buyToken), b4 = await i2({ baseBalance: o2.minus(h3), tokenQuantity: s2.plus(g3) });
      if (b4.gt(0)) {
        if (b4.lte(5)) return { quantity: a2(h3.div(t2)), riskOfLiquidation: true };
        d3 = h3;
      } else u3 = h3;
    }
    return { quantity: a2(d3), riskOfLiquidation: true };
  }
  async getMaxBuyTradeQuantityForBundle(e2) {
    let { price: t2 } = e2, [r2, n3, { timestamp: i2 }] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), a2 = i2 * 1e3, s2 = (await r2.evaluate({ time: a2, riskMultiplier: 0 })).div(t2).dp(this.buyToken.positionDecimals, w2.ROUND_DOWN);
    return { quantity: s2.lt(n3) ? w2(0) : s2, riskOfLiquidation: false };
  }
  async getMaxSellTradeQuantityForBundle(e2) {
    let [t2, r2] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity()]), i2 = t2.get()[this.buyToken.tokenId].balance, a2 = e2?.bundleBorrows ? w2(e2.bundleBorrows) : w2(0), o2 = i2.plus(a2).dp(this.buyToken.positionDecimals, w2.ROUND_DOWN);
    return { quantity: o2.lt(r2) ? w2(0) : o2, riskOfLiquidation: false };
  }
  async cancelSellOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().cancelSpotSellOrder, this.getTxContext(this.cancelSellOrder.name), t2, this.address, await this.encodeCancelParams(e2));
  }
  cancelAndRebookSellOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ spot: o2 }) => {
      o2.cancelAndRebookSellOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookSellOrder.name)) : i2;
  }
  getSellOrdersCount(e2) {
    return this.runner.view(this.spotOrderBook.countSellOrders, e2).then(Number);
  }
  async getBestOrderOffer(e2) {
    let t2 = await this.runner.view(this.spotOrderBook.bestBidOffer, e2);
    return ie.unpack(t2, this.buyToken.positionDecimals);
  }
  createSellDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.spotOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createSellDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.spotOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createBuyDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.spotOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createBuyDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.spotOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createSellOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.spotOrderBook.searchSellOrders, t2, ...r2));
  }
  createSellOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.spotOrderBook.searchSellOrders, t2, ...r2));
  }
  createBuyOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.spotOrderBook.searchBuyOrders, t2, ...r2));
  }
  createBuyOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.spotOrderBook.searchBuyOrders, t2, ...r2));
  }
  async createBuyOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().newSpotBuyOrder, this.getTxContext(this.createBuyOrder.name), t2, this.address, A2.pack(await this.convertOrderData(e2), this.buyToken.positionDecimals));
  }
  async cancelBuyOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().cancelSpotBuyOrder, this.getTxContext(this.cancelBuyOrder.name), t2, this.address, await this.encodeCancelParams(e2));
  }
  cancelAndRebookBuyOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ spot: o2 }) => {
      o2.cancelAndRebookBuyOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookBuyOrder.name)) : i2;
  }
  getBuyOrdersCount(e2) {
    return this.runner.view(this.spotOrderBook.countBuyOrders, e2).then(Number);
  }
  async getMinOrderQuantity(e2) {
    let t2 = await this.runner.withCache({ key: { name: this.getMinOrderQuantity.name, params: [] }, options: e2 }, () => this.runner.view(this.spotOrderBook.readMinOrderQuantity, e2));
    return Ge(t2, this.buyToken.positionDecimals);
  }
  getBuyInsertionHint(e2, t2) {
    let { minOffset: r2, price: n3 } = e2;
    return this.runner.view(this.spotOrderBook.calcBuyInsertionHint, t2, Ir(n3), r2);
  }
  getSellInsertionHint(e2, t2) {
    let { minOffset: r2, price: n3 } = e2;
    return this.runner.view(this.spotOrderBook.calcSellInsertionHint, t2, Ir(n3), r2);
  }
  async getBuyOrder(e2, t2) {
    let { id: r2 } = e2, n3 = await this.runner.view(this.spotOrderBook.retrieveBuyOrder, t2, r2);
    return n3 === 0n ? null : A2.unpack(n3, this.buyToken.positionDecimals);
  }
  async getSellOrder(e2, t2) {
    let { id: r2 } = e2, n3 = await this.runner.view(this.spotOrderBook.retrieveSellOrder, t2, r2);
    return n3 === 0n ? null : A2.unpack(n3, this.buyToken.positionDecimals);
  }
  async getMarketSellOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createBuyDepthChartIter(t2, r2))).flat(), [i2, a2] = p6.findMarketOrder(n3, w2(e2.quantity));
    return { fillingPrice: i2.times(1 - e2.slippage), filledQuantity: a2 };
  }
  async getMarketBuyOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createSellDepthChartIter(t2, r2))).flat(), [i2, a2] = p6.findMarketOrder(n3, w2(e2.quantity));
    return { fillingPrice: i2.times(1 + e2.slippage), filledQuantity: a2 };
  }
  static findMarketOrder(e2, t2) {
    let r2 = w2(t2);
    for (let n3 = 0; n3 < e2.length; n3++) {
      if (r2 = r2.minus(e2[n3].quantity), r2.lte(0)) return [e2[n3].price, t2];
      if (n3 === e2.length - 1) return [e2[n3].price, t2.minus(r2)];
    }
    return [w2(0), t2];
  }
  getConfig(e2) {
    return this.exchange.getOrderBookConfig({ address: this.address }, e2);
  }
  async encodeCancelParams(e2) {
    let { orderId: t2, silent: r2 = false, accountId: n3 = await this.exchange.getActiveAccountId() } = e2;
    return (r2 ? 1n : 0n) << 108n | n3 << 64n | t2;
  }
  async convertOrderData(e2) {
    let { price: t2, quantity: r2, accountId: n3 = await this.exchange.getActiveAccountId(), type: i2 = 0, insertionHint: a2 = 0n } = e2;
    return { price: V2(t2), quantity: V2(r2), accountId: n3, type: i2, insertionHint: a2 };
  }
  createDepthChartPagination(e2, t2) {
    let { pageSize: r2 } = e2, n3 = [], i2 = 0n, a2 = true;
    return { entries: n3, fetchNext: async () => {
      if (!a2) return { entries: [], hasMore: a2 };
      let { restart: o2, entries: s2 } = await this.decodeDepthChart(t2(r2, i2));
      return i2 = o2, a2 = i2 !== 0n, n3.push(...s2), { entries: s2, hasMore: a2 };
    } };
  }
  createDepthChartIter(e2, t2) {
    let { iterations: r2 } = e2, n3 = 0n;
    return se({ next: async ({ limit: i2 }) => {
      let { restart: a2, entries: o2 } = await this.decodeDepthChart(t2(i2 ?? e2.limit, n3));
      return n3 = a2, { value: o2, done: n3 === 0n };
    }, iterations: r2 });
  }
  async decodeDepthChart(e2) {
    let [t2, ...r2] = await e2, n3 = t2 >> 32n & Ne, i2 = Number(t2 & ye), o2 = r2.slice(0, Math.ceil(i2 / 2)).reduce((s2, c3) => (s2.push({ quantity: Ge(c3 >> 192n & Ne, this.buyToken.positionDecimals), price: _r(c3 >> 128n & Ne) }), s2.length !== i2 && s2.push({ quantity: Ge(c3 >> 64n & Ne, this.buyToken.positionDecimals), price: _r(c3 & Ne) }), s2), []);
    return { restart: n3, entries: o2 };
  }
  createOrdersPagination(e2, t2) {
    this.assertSearchOrdersParams(e2);
    let { depth: r2, limit: n3, accountId: i2 } = e2, a2 = i2 ?? null, o2 = [], s2 = 0n, c3 = true;
    return { orders: o2, fetchNext: async () => {
      if (!c3) return { orders: [], hasMore: c3 };
      a2 === null && (a2 = await this.exchange.getActiveAccountId());
      let { restart: u3, entries: d3 } = await this.decodeOrders(t2(a2, r2, n3, s2));
      return s2 = u3, c3 = s2 !== Ne, o2.push(...d3), { orders: d3, hasMore: c3 };
    } };
  }
  createOrdersIter(e2, t2) {
    this.assertSearchOrdersParams(e2);
    let { depth: r2, limit: n3, accountId: i2, iterations: a2 } = e2, o2 = 0n;
    return se({ iterations: a2, init: async () => ({ accountId: i2 ?? await this.exchange.getActiveAccountId() }), next: async ({ accountId: s2, ...c3 }) => {
      let { entries: u3, restart: d3 } = await this.decodeOrders(t2(s2, c3?.depth ?? r2, c3?.limit ?? n3, o2));
      return o2 = d3, { value: u3, restart: o2, done: o2 === Ne };
    } });
  }
  async decodeOrders(e2) {
    let [t2, ...r2] = await e2, n3 = t2 >> 32n & Ne, i2 = Number(t2 & ye), a2 = [];
    for (let o2 = 0; o2 < i2; o2++) {
      let s2 = r2[o2], c3 = ae2.unpack(s2, this.buyToken.positionDecimals);
      a2.push(c3);
    }
    return { restart: n3, entries: a2 };
  }
  assertSearchOrdersParams(e2) {
    let { depth: t2, limit: r2 } = e2;
    u(r2 > 0, `Limit should be bigger than 0. Passed value: ${r2}`), u(t2 > 0, `Depth should be bigger than 0. Passed value: ${t2}`), u(r2 <= t2, `Limit (${r2}) should be smaller or equal to depth (${t2})`);
  }
  async prepareMaxTradeQuantity(e2) {
    let [t2, { takerFeeMultiplier: r2, fromMaxFee: n3, toMaxFee: i2 }, a2, { timestamp: o2 }] = await Promise.all([D2.init(this.exchange), this.getConfig(), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), s2 = e2 === "sell" ? i2 : n3, c3 = o2 * 1e3, u3 = ({ baseBalance: d3, tokenQuantity: l2 }) => t2.modify((h3) => ({ ...h3, [this.buyToken.tokenId]: { ...h3[this.buyToken.tokenId], balance: l2 }, [this.sellToken.tokenId]: { ...h3[this.sellToken.tokenId], balance: d3 } })).evaluate({ time: c3 });
    return { resolveQuantity: (d3) => {
      let l2 = d3.precision(6, w2.ROUND_DOWN).dp(this.buyToken.positionDecimals);
      return l2.lt(a2) ? w2(0) : l2;
    }, portfolio: t2.get(), calcValue: u3, applyFee: (d3, l2) => d3.minus(cn({ fromMaxFee: s2, positionDecimals: l2.positionDecimals, quantity: d3, takerFeeMultiplier: r2 })).dp(l2.positionDecimals) };
  }
  getTxContext(e2) {
    return { source: "SpotOrderBook", fn: e2 };
  }
};
var me = class {
  static pack(e2, t2) {
    let { accountId: r2, quantity: n3, interestRate: i2, type: a2 } = e2;
    return Ee([a2, V2(r2).toFixed(), ze(n3, t2).toFixed(), V2(i2.multipliedBy(T2.INTEREST_DIVISOR)).toFixed()], this.layout);
  }
  static unpack(e2, t2) {
    let [r2, n3, i2, a2] = Be(e2, this.layout);
    return { interestRate: new si(a2.toString()).dividedBy(T2.INTEREST_DIVISOR), quantity: Ge(i2, t2), accountId: n3, type: Number(r2) };
  }
};
m3(me, "layout", [4, 44, 64, 16]);
var Ye = class {
  static unpack(e2, t2) {
    return { lendInterestRate: new Ar((e2 & Ne).toString()).dividedBy(T2.INTEREST_DIVISOR), lendQuantity: Ge(e2 >> 64n & Ne, t2), borrowInterestRate: new Ar((e2 >> 128n & Ne).toString()).dividedBy(T2.INTEREST_DIVISOR), borrowQuantity: Ge(e2 >> 192n & Ne, t2) };
  }
};
var Ze = { NewBuyOrder: "NewBorrowOrder", NewSellOrder: "NewLendOrder", CancelBuyOrder: "CancelBorrowOrder", CancelSellOrder: "CancelLendOrder" };
var W2 = class W3 {
  constructor(e2, t2, r2, n3, i2) {
    this.exchange = e2;
    this.chainId = t2;
    this.address = r2;
    this.token = n3;
    this.runner = i2;
    m3(this, "event");
    m3(this, "lendOrderBook");
    let a2 = ILendOrderBookAbi__factory.connect(r2, this.exchange.provider), o2 = (s2) => me.unpack(s2.orderData, n3.positionDecimals);
    this.event = new L2(a2, ILendOrderBookAbi__factory.abi, { NewBorrowOrder: o2, NewLendOrder: o2, CancelBorrowOrder: o2, CancelLendOrder: o2, NewTrade: (s2, c3) => {
      let u3 = q2.unpack(s2.matchData, s2.positionId, n3.positionDecimals);
      return { ...u3, rts22id: ce({ chainId: this.chainId, address: this.address, block: c3.log.blockNumber, tradeSeq: u3.seqId }) };
    }, LendSelfMatchAutoCancel: ({ userId: s2, quantity: c3, interestRate: u3 }) => ({ accountId: s2, interestRate: O2(u3).div(T2.INTEREST_DIVISOR), quantity: Ge(c3, n3.positionDecimals) }) }, Ze), this.lendOrderBook = a2;
  }
  static isInterestRateValid(e2) {
    let t2 = O2.isBigNumber(e2) ? e2 : new O2(e2);
    return t2.gte(W3.MIN_INTEREST_RATE) && t2.lt(W3.MAX_INTEREST_RATE);
  }
  async getMaxBorrowTradeQuantity(e2) {
    let { interestRate: t2 } = e2, [r2, n3, i2, { timestamp: a2 }] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity(), this.token.tokenId === T2.BASE_TOKEN_ID ? Promise.resolve(null) : this.exchange.getSpotOrderBook(this.token.tokenId, T2.BASE_TOKEN_ID).then((y3) => y3.getConfig()), this.exchange.getLatestBlock()]), o2 = a2 * 1e3, s2 = r2.get()[this.token.tokenId], c3 = s2.balance, { initialQuantity: u3, calc: d3 } = await (async () => this.token.tokenId === T2.BASE_TOKEN_ID ? { initialQuantity: (await r2.evaluate({ time: o2 })).times(10), calc: (y3) => r2.modify((P2) => ({ ...P2, [this.token.tokenId]: { ...s2, balance: c3.plus(y3), aggLend: { ...s2.aggLend, borrowerQuantity: s2.aggLend.borrowerQuantity.plus(y3), highestInterestRate: s2.aggLend.highestInterestRate.lt(t2) ? O2(t2) : s2.aggLend.highestInterestRate } } })).evaluate({ time: o2 }) } : { initialQuantity: (await r2.evaluate({ time: o2 })).times(3).div(this.token.riskPricePercent).dp(this.token.positionDecimals, O2.ROUND_DOWN), calc: (y3) => r2.modify((P2) => {
      let k2 = P2[T2.BASE_TOKEN_ID];
      return { ...P2, [T2.BASE_TOKEN_ID]: { ...k2, balance: k2.balance.plus(y3.times(s2.markPrice).times(i2.takerFeeMultiplier.minus(1).abs()).dp(k2.config.positionDecimals, O2.ROUND_DOWN)) }, [this.token.tokenId]: { ...s2, aggLend: { ...s2.aggLend, borrowerQuantity: s2.aggLend.borrowerQuantity.plus(y3), highestInterestRate: s2.aggLend.highestInterestRate.lt(t2) ? O2(t2) : s2.aggLend.highestInterestRate } } };
    }).evaluate({ time: o2 }) })();
    if (u3.lt(n3)) return { quantity: O2(0), riskOfLiquidation: false };
    let l2 = await d3(u3), h3, g3;
    if (l2.gt(0)) {
      g3 = u3, h3 = u3.times(2);
      let y3 = false, P2 = 20;
      for (; P2 > 0; ) {
        if (P2--, (await d3(h3.dp(this.token.positionDecimals, O2.ROUND_DOWN))).lte(0)) {
          y3 = true;
          break;
        }
        g3 = h3, h3 = h3.times(2);
      }
      if (!y3) return { quantity: this.resolveMaxTradeQuantity(h3.dp(this.token.positionDecimals, O2.ROUND_DOWN), n3), riskOfLiquidation: false };
    } else h3 = u3, g3 = O2(0);
    let b4 = 20;
    for (; b4 > 0; ) {
      b4--;
      let y3 = h3.plus(g3).div(2).dp(this.token.positionDecimals, O2.ROUND_DOWN), P2 = await d3(y3);
      if (P2.gt(0)) {
        if (P2.lte(5)) return { quantity: this.resolveMaxTradeQuantity(y3, n3), riskOfLiquidation: true };
        g3 = y3;
      } else h3 = y3;
    }
    return { quantity: this.resolveMaxTradeQuantity(g3, n3), riskOfLiquidation: true };
  }
  async getMaxLendTradeQuantity() {
    let [e2, t2, { timestamp: r2 }] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), n3 = r2 * 1e3, i2 = e2.get()[this.token.tokenId], a2 = i2.balance, o2 = i2.aggLend.borrowerQuantity, s2 = O2.max(a2.minus(o2), 0);
    if (s2.lt(t2)) return { quantity: O2(0), riskOfLiquidation: false };
    if ((await ((b4) => e2.modify((y3) => ({ ...y3, [this.token.tokenId]: { ...i2, balance: a2.minus(b4), aggLend: { ...i2.aggLend, lenderQuantity: i2.aggLend.lenderQuantity.plus(b4) } } })).evaluate({ time: n3 }))(s2)).gt(0)) return { quantity: this.resolveMaxTradeQuantity(s2, t2), riskOfLiquidation: false };
    let d3 = s2, l2 = O2(0), h3 = 20;
    for (; h3 > 0; ) {
      h3--;
      let b4 = d3.plus(l2).div(2), y3 = await e2.modify((P2) => ({ ...P2, [this.token.tokenId]: { ...i2, balance: a2.minus(b4), aggLend: { ...i2.aggLend, lenderQuantity: i2.aggLend.lenderQuantity.plus(b4) } } })).evaluate({ time: n3 });
      if (y3.gt(0)) {
        if (y3.lte(5)) {
          let P2 = O2.min(b4, s2);
          return { quantity: this.resolveMaxTradeQuantity(P2, t2), riskOfLiquidation: true };
        }
        l2 = b4;
      } else d3 = b4;
    }
    let g3 = O2.min(l2, s2);
    return { quantity: this.resolveMaxTradeQuantity(g3, t2), riskOfLiquidation: true };
  }
  async createLendOrder(e2, t2) {
    return this.assertCreateOrderParams(e2), this.runner.tx(this.exchange.getContractWithSigner().newLendOrder, this.getTxContext(this.createLendOrder.name), t2, this.address, await this.encodeOrderData(e2));
  }
  async createBorrowOrder(e2, t2) {
    return this.assertCreateOrderParams(e2), this.runner.tx(this.exchange.getContractWithSigner().newBorrowOrder, this.getTxContext(this.createBorrowOrder.name), t2, this.address, await this.encodeOrderData(e2));
  }
  getLendOrdersCount(e2) {
    return this.runner.view(this.lendOrderBook.countSellOrders, e2).then(Number);
  }
  async getLendOrderQuantity(e2, t2) {
    let { interestRate: r2, accountId: n3 = await this.exchange.getActiveAccountId() } = e2, i2 = await this.runner.view(this.lendOrderBook.readLendQuantity, t2, n3, O2(r2).multipliedBy(T2.INTEREST_DIVISOR).toFixed());
    return Ge(i2, this.token.positionDecimals);
  }
  async getBorrowOrderQuantity(e2, t2) {
    let { interestRate: r2, accountId: n3 = await this.exchange.getActiveAccountId() } = e2, i2 = await this.runner.view(this.lendOrderBook.readBorrowQuantity, t2, n3, O2(r2).multipliedBy(T2.INTEREST_DIVISOR).toFixed());
    return Ge(i2, this.token.positionDecimals);
  }
  getBorrowOrdersCount(e2) {
    return this.runner.view(this.lendOrderBook.countBuyOrders, e2).then(Number);
  }
  async decreaseLendOrderQuantity(e2, t2) {
    let { decreaseBy: r2, interestRate: n3, accountId: i2 } = e2;
    return this.assertDecreaseOrderQuantityParams(r2), this.runner.tx(this.exchange.getContractWithSigner().cancelLendOrder, this.getTxContext(this.decreaseLendOrderQuantity.name), t2, this.address, await this.encodeOrderData({ interestRate: n3, accountId: i2, quantity: r2 }));
  }
  async decreaseBorrowOrderQuantity(e2, t2) {
    let { decreaseBy: r2, interestRate: n3, accountId: i2 } = e2;
    return this.assertDecreaseOrderQuantityParams(r2), this.runner.tx(this.exchange.getContractWithSigner().cancelBorrowOrder, this.getTxContext(this.decreaseBorrowOrderQuantity.name), t2, this.address, await this.encodeOrderData({ interestRate: n3, accountId: i2, quantity: r2 }));
  }
  async cancelLendOrder(e2, t2) {
    let { interestRate: r2, accountId: n3 } = e2;
    return this.runner.tx(this.exchange.getContractWithSigner().cancelLendOrder, this.getTxContext(this.cancelLendOrder.name), t2, this.address, await this.encodeOrderData({ interestRate: r2, accountId: n3, quantity: 0 }));
  }
  cancelAndRebookLendOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ lend: o2 }) => {
      o2.cancelAndRebookLendOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookLendOrder.name)) : i2;
  }
  async cancelBorrowOrder(e2, t2) {
    let { interestRate: r2, accountId: n3 } = e2;
    return this.runner.tx(this.exchange.getContractWithSigner().cancelBorrowOrder, this.getTxContext(this.cancelBorrowOrder.name), t2, this.address, await this.encodeOrderData({ interestRate: r2, accountId: n3, quantity: 0 }));
  }
  cancelAndRebookBorrowOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ lend: o2 }) => {
      o2.cancelAndRebookBorrowOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookBorrowOrder.name)) : i2;
  }
  createLendDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.lendOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createLendDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.lendOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createLendOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.lendOrderBook.searchSellOrders, t2, ...r2));
  }
  createLendOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.lendOrderBook.searchSellOrders, t2, ...r2));
  }
  createBorrowDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.lendOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createBorrowDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.lendOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createBorrowOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.lendOrderBook.searchBuyOrders, t2, ...r2));
  }
  createBorrowOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.lendOrderBook.searchBuyOrders, t2, ...r2));
  }
  async getBestOrderOffer(e2) {
    let t2 = await this.runner.view(this.lendOrderBook.bestBidOffer, e2);
    return Ye.unpack(t2, this.token.positionDecimals);
  }
  async getMinOrderQuantity(e2) {
    let t2 = await this.runner.withCache({ key: { name: this.getMinOrderQuantity.name, params: [] }, options: e2 }, () => this.runner.view(this.lendOrderBook.readMinOrderQuantity, e2));
    return Ge(t2, this.token.positionDecimals);
  }
  async getMarketLendOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createBorrowDepthChartIter(t2, r2))).flat(), [i2, a2] = W3.findMarketOrder(n3, O2(e2.quantity));
    return { fillingInterestRate: i2.times(1 - e2.slippage), filledQuantity: a2 };
  }
  async getMarketBorrowOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createLendDepthChartIter(t2, r2))).flat(), [i2, a2] = W3.findMarketOrder(n3, O2(e2.quantity));
    return { fillingInterestRate: i2.times(1 + e2.slippage), filledQuantity: a2 };
  }
  static findMarketOrder(e2, t2) {
    let r2 = O2(t2);
    for (let n3 = 0; n3 < e2.length; n3++) {
      if (r2 = r2.minus(e2[n3].quantity), r2.lte(0)) return [e2[n3].interestRate, t2];
      if (n3 === e2.length - 1) return [e2[n3].interestRate, t2.minus(r2)];
    }
    return [O2(0), t2];
  }
  getConfig(e2) {
    return this.exchange.getOrderBookConfig({ address: this.address }, e2);
  }
  async encodeOrderData(e2) {
    let { interestRate: t2, quantity: r2, accountId: n3, type: i2 = 0 } = e2;
    return me.pack({ interestRate: new O2(t2), quantity: new O2(r2), accountId: n3 || await this.exchange.getActiveAccountId(), type: i2 }, this.token.positionDecimals);
  }
  assertCreateOrderParams(e2) {
    let t2 = new O2(e2.interestRate);
    u(W3.isInterestRateValid(t2), `Interest rate is in invalid range: ${W3.MIN_INTEREST_RATE} <= rate < ${W3.MAX_INTEREST_RATE}. Specified: ${t2.toFixed()}`), u(new O2(e2.quantity).gt(0), "Quantity is in invalid range: 0 < quantity");
  }
  assertDecreaseOrderQuantityParams(e2) {
    u(new O2(e2).gt(0), "Quantity is in invalid range: 0 < quantity");
  }
  createDepthChartPagination(e2, t2) {
    let { pageSize: r2 } = e2, n3 = [], i2 = 0n, a2 = true;
    return { entries: n3, fetchNext: async () => {
      if (!a2) return { entries: [], hasMore: a2 };
      let { entries: o2, restart: s2 } = await this.decodeDepthChart(t2(r2, i2));
      return i2 = s2, a2 = s2 !== 0n, n3.push(...o2), { entries: o2, hasMore: a2 };
    } };
  }
  createDepthChartIter(e2, t2) {
    let { limit: r2, iterations: n3 } = e2, i2 = 0n;
    return se({ iterations: n3, next: async (a2) => {
      let { entries: o2, restart: s2 } = await this.decodeDepthChart(t2(a2.limit ?? r2, i2));
      return i2 = s2, { value: o2, done: s2 === 0n };
    } });
  }
  async decodeDepthChart(e2) {
    let t2 = await e2, r2 = t2.at(0), i2 = t2.at(-1) >> 240n & ke, a2 = Number(r2 >> 240n & ke), o2 = [];
    return a2 && this.parseTriplets(t2, (s2) => {
      o2.push(s2);
    }, a2), { entries: o2, restart: i2 };
  }
  createOrdersPagination(e2, t2) {
    let { limit: r2, accountId: n3 } = e2;
    u(r2 > 0, `Limit should be bigger than 0. Passed value: ${r2}`);
    let i2 = n3 ?? null, a2 = [], o2 = 0n, s2 = true;
    return { orders: a2, fetchNext: async () => {
      if (!s2) return { orders: [], hasMore: s2 };
      i2 === null && (i2 = await this.exchange.getActiveAccountId());
      let { entries: c3, restart: u3 } = await this.decodeOrders(t2(i2, r2, o2));
      return a2.push(...c3), o2 = u3, s2 = o2 !== Ne, { orders: c3, hasMore: s2 };
    } };
  }
  createOrdersIter(e2, t2) {
    let { limit: r2, accountId: n3, iterations: i2 } = e2;
    u(r2 > 0, `Limit should be bigger than 0. Passed value: ${r2}`);
    let a2 = 0n;
    return se({ iterations: i2, init: async () => ({ accountId: n3 ?? await this.exchange.getActiveAccountId() }), next: async ({ accountId: o2, ...s2 }) => {
      let { entries: c3, restart: u3 } = await this.decodeOrders(t2(o2, s2?.limit ?? r2, a2));
      return a2 = u3, { value: c3, done: a2 === Ne };
    } });
  }
  async decodeOrders(e2) {
    let [t2, ...r2] = await e2, n3 = t2 >> 32n & Ne, i2 = Number(t2 & ye), a2 = [];
    return i2 && this.parseTriplets(r2, (o2) => a2.push(o2), i2, true), { entries: a2, restart: n3 };
  }
  parseTriplets(e2, t2, r2, n3) {
    let i2 = 0, a2 = n3 ? 0n : 2n;
    e: for (let o2 of e2) {
      let s2 = 0n;
      for (; s2 !== 3n; ) {
        let c3 = o2 >> BigInt(Math.abs(Number(a2 - s2))) * 80n, u3 = c3 & ke, d3 = c3 >> 16n & Ne, l2 = { quantity: Ge(d3, this.token.positionDecimals), interestRate: new O2(Number(u3)).dividedBy(T2.INTEREST_DIVISOR) };
        if (t2(l2), ++i2 === r2) break e;
        s2++;
      }
    }
  }
  resolveMaxTradeQuantity(e2, t2) {
    return e2.lt(t2) ? O2(0) : e2.precision(6).div(t2).dp(0, O2.ROUND_DOWN).times(t2);
  }
  getTxContext(e2) {
    return { source: "LendOrderBook", fn: e2 };
  }
};
m3(W2, "MIN_INTEREST_RATE", 1e-4), m3(W2, "MAX_INTEREST_RATE", 1);
var he = W2;
var tt = class {
  static unpack({ spotMatchQuantities: e2, spotMatchData: t2, buyer: r2, seller: n3 }, i2, a2) {
    return { buyerId: r2, sellerId: n3, ...this.unpackQuantities(e2, i2, a2), ...this.unpackData(t2) };
  }
  static unpackQuantities(e2, t2, r2) {
    return { buyerFee: Ge(e2 & Ne, r2), buyerQuantity: Ge(e2 >> 128n & Ne, t2), sellerFee: Ge(e2 >> 64n & Ne, r2), sellerQuantity: Ge(e2 >> 192n & Ne, r2) };
  }
  static unpackData(e2) {
    let [t2, r2, n3, i2, a2] = Be(e2, [1, 64, 64, 64, 32]);
    return { buyerIsMaker: t2 === 1n, tradeSeq: Number(a2), sellerOrderId: i2, buyerOrderId: n3, price: _r(r2) };
  }
};
var Se = class extends A2 {
};
var rt = { NewBuyOrder: "NewLongOrder", NewSellOrder: "NewShortOrder", CancelBuyOrder: "CancelLongOrder", CancelSellOrder: "CancelShortOrder" };
var ge = class p7 {
  constructor(e2, t2, r2, n3, i2, a2) {
    this.exchange = e2;
    this.chainId = t2;
    this.address = r2;
    this.buyToken = n3;
    this.sellToken = i2;
    this.runner = a2;
    m3(this, "perpOrderBook");
    m3(this, "event");
    let o2 = ISpotOrderBookAbi__factory.connect(r2, this.exchange.provider), s2 = ({ eventOrderData: c3, accountId: u3 }) => ne2.unpack(c3, u3, n3.positionDecimals);
    this.event = new L2(o2, ISpotOrderBookAbi__factory.abi, { NewLongOrder: s2, NewShortOrder: s2, CancelLongOrder: s2, CancelShortOrder: s2, NewTrade: (c3, u3) => {
      let d3 = tt.unpack(c3, n3.positionDecimals, i2.positionDecimals);
      return { ...d3, rts22id: ce({ chainId: this.chainId, address: this.address, block: u3.log.blockNumber, tradeSeq: d3.tradeSeq }) };
    } }, rt), this.perpOrderBook = o2;
  }
  async createShortOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().newPerpSellOrder, this.getTxContext(this.createShortOrder.name), t2, this.address, A2.pack(await this.convertOrderData(e2), this.buyToken.positionDecimals));
  }
  async cancelShortOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().cancelPerpSellOrder, this.getTxContext(this.cancelShortOrder.name), t2, this.address, await this.encodeCancelParams(e2));
  }
  cancelAndRebookShortOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ perp: o2 }) => {
      o2.cancelAndRebookShortOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookShortOrder.name)) : i2;
  }
  getShortOrdersCount(e2) {
    return this.runner.view(this.perpOrderBook.countSellOrders, e2).then(Number);
  }
  async getBestOrderOffer(e2) {
    let t2 = await this.runner.view(this.perpOrderBook.bestBidOffer, e2);
    return ie.unpack(t2, this.buyToken.positionDecimals);
  }
  getMaxLongTradeQuantity(e2) {
    let { price: t2 } = e2;
    return this.getMaxTradeQuantity({ price: t2, side: "long" });
  }
  getMaxShortTradeQuantity(e2) {
    let { price: t2 } = e2;
    return this.getMaxTradeQuantity({ price: t2, side: "short" });
  }
  async getMaxTradeQuantity(e2) {
    let { price: t2, side: r2 } = e2, [n3, { takerFeeMultiplier: i2, toMaxFee: a2 }, o2, { timestamp: s2 }] = await Promise.all([D2.init(this.exchange), this.getConfig(), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), c3 = n3.get(), u3 = c3[this.buyToken.tokenId].aggPerp, d3 = c3[this.sellToken.tokenId].balance, l2 = s2 * 1e3, h3 = (await n3.evaluate({ time: l2 })).div(this.buyToken.riskPricePercent).times(10), g3 = d3.div(t2).div(i2), y3 = (u3.quantity.isPositive() ? "long" : "short") === r2 ? 0 : u3.quantity.times(3).abs(), P2 = C2.max(C2.min(h3, g3), y3).dp(this.sellToken.positionDecimals, C2.ROUND_DOWN), k2 = C2(0), B2 = 20;
    for (; B2 > 0; ) {
      B2--;
      let f3 = P2.plus(k2).div(2).dp(this.buyToken.positionDecimals, C2.ROUND_DOWN), N3 = await n3.modify((j2) => {
        let M2 = j2[this.sellToken.tokenId], Le = C2.min(f3.times(t2).times(i2), a2);
        return { ...j2, [this.sellToken.tokenId]: { ...M2, balance: M2.balance.minus(Le) } };
      }).evaluate({ time: l2, tempAggPerp: { owedBase: C2(0), owedNom: C2(0), price: C2(t2), startTime: new Date(l2), quantity: r2 === "long" ? f3 : f3.negated(), tokenId: this.buyToken.tokenId } });
      if (N3.gt(0)) {
        if (N3.lte(5)) return f3.div(o2).dp(0, C2.ROUND_DOWN).times(o2);
        k2 = f3;
      } else P2 = f3;
    }
    return k2.div(o2).dp(0, C2.ROUND_DOWN).times(o2);
  }
  async getMaxLongTradeQuantityForBundle() {
    let [e2, t2, { timestamp: r2 }] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), n3 = r2 * 1e3, a2 = e2.get()[this.buyToken.tokenId], s2 = (await e2.evaluate({ time: n3, riskMultiplier: 0 })).times(100).div(this.buyToken.riskPricePercent), c3 = a2.aggPerp.quantity, u3 = a2.balance.minus(a2.aggLend.borrowerQuantity).plus(a2.aggLend.lenderQuantity);
    c3.isNegative() && (s2 = s2.plus(c3.abs())), u3.isNegative() && (s2 = s2.plus(u3.abs()));
    let d3 = s2.dp(this.buyToken.positionDecimals, C2.ROUND_DOWN);
    return d3.lt(t2) ? C2(0) : d3;
  }
  async getMaxShortTradeQuantityForBundle() {
    let [e2, t2, { timestamp: r2 }] = await Promise.all([D2.init(this.exchange), this.getMinOrderQuantity(), this.exchange.getLatestBlock()]), n3 = r2 * 1e3, a2 = e2.get()[this.buyToken.tokenId], s2 = (await e2.evaluate({ time: n3, riskMultiplier: 0 })).times(100).div(this.buyToken.riskPricePercent), c3 = a2.aggPerp.quantity, u3 = a2.balance.minus(a2.aggLend.borrowerQuantity).plus(a2.aggLend.lenderQuantity);
    c3.isPositive() && (s2 = s2.plus(c3)), u3.isPositive() && (s2 = s2.plus(u3));
    let d3 = s2.dp(this.buyToken.positionDecimals, C2.ROUND_DOWN);
    return d3.lt(t2) ? C2(0) : d3;
  }
  createShortDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.perpOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createShortDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.perpOrderBook.retrieveSellDepthChart, t2, ...r2));
  }
  createLongDepthChartPagination(e2, t2) {
    return this.createDepthChartPagination(e2, (...r2) => this.runner.view(this.perpOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createLongDepthChartIter(e2, t2) {
    return this.createDepthChartIter(e2, (...r2) => this.runner.view(this.perpOrderBook.retrieveBuyDepthChart, t2, ...r2));
  }
  createShortOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.perpOrderBook.searchSellOrders, t2, ...r2));
  }
  createShortOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.perpOrderBook.searchSellOrders, t2, ...r2));
  }
  createLongOrdersPagination(e2, t2) {
    return this.createOrdersPagination(e2, (...r2) => this.runner.view(this.perpOrderBook.searchBuyOrders, t2, ...r2));
  }
  createLongOrdersIter(e2, t2) {
    return this.createOrdersIter(e2, (...r2) => this.runner.view(this.perpOrderBook.searchBuyOrders, t2, ...r2));
  }
  async createLongOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().newPerpBuyOrder, this.getTxContext(this.createLongOrder.name), t2, this.address, A2.pack(await this.convertOrderData(e2), this.buyToken.positionDecimals));
  }
  async cancelLongOrder(e2, t2) {
    return this.runner.tx(this.exchange.getContractWithSigner().cancelPerpBuyOrder, this.getTxContext(this.cancelLongOrder.name), t2, this.address, await this.encodeCancelParams(e2));
  }
  cancelAndRebookLongOrder(e2, t2) {
    let { accountId: r2, ...n3 } = e2, i2 = this.exchange.batch({ fn: ({ perp: o2 }) => {
      o2.cancelAndRebookLongOrder(this.address, n3);
    }, accountId: r2 }, { ...t2, emitTransactionEvent: false });
    return t2?.emitTransactionEvent ?? true ? this.runner.emitTransaction(i2, this.getTxContext(this.cancelAndRebookLongOrder.name)) : i2;
  }
  getLongOrdersCount(e2) {
    return this.runner.view(this.perpOrderBook.countBuyOrders, e2).then(Number);
  }
  async getMinOrderQuantity(e2) {
    let t2 = await this.runner.withCache({ key: { name: this.getMinOrderQuantity.name, params: [] }, options: e2 }, () => this.runner.view(this.perpOrderBook.readMinOrderQuantity, e2));
    return Ge(t2, this.buyToken.positionDecimals);
  }
  getLongInsertionHint(e2, t2) {
    let { minOffset: r2, price: n3 } = e2;
    return this.runner.view(this.perpOrderBook.calcBuyInsertionHint, t2, Ir(n3), r2);
  }
  async getLongOrder(e2, t2) {
    let { id: r2 } = e2, n3 = await this.runner.view(this.perpOrderBook.retrieveBuyOrder, t2, r2);
    return n3 === 0n ? null : Se.unpack(n3, this.buyToken.positionDecimals);
  }
  async getShortOrder(e2, t2) {
    let { id: r2 } = e2, n3 = await this.runner.view(this.perpOrderBook.retrieveSellOrder, t2, r2);
    return n3 === 0n ? null : Se.unpack(n3, this.buyToken.positionDecimals);
  }
  async getMarketShortOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createLongDepthChartIter(t2, r2))).flat(), [i2, a2] = p7.findMarketOrder(n3, C2(e2.quantity));
    return { fillingPrice: i2.times(1 - e2.slippage), filledQuantity: a2 };
  }
  async getMarketLongOrder(e2, t2, r2) {
    let n3 = (await Array.fromAsync(this.createShortDepthChartIter(t2, r2))).flat(), [i2, a2] = p7.findMarketOrder(n3, C2(e2.quantity));
    return { fillingPrice: i2.times(1 + e2.slippage), filledQuantity: a2 };
  }
  static findMarketOrder(e2, t2) {
    let r2 = C2(t2);
    for (let n3 = 0; n3 < e2.length; n3++) {
      if (r2 = r2.minus(e2[n3].quantity), r2.lte(0)) return [e2[n3].price, t2];
      if (n3 === e2.length - 1) return [e2[n3].price, t2.minus(r2)];
    }
    return [C2(0), t2];
  }
  getShortInsertionHint(e2, t2) {
    let { minOffset: r2, price: n3 } = e2;
    return this.runner.view(this.perpOrderBook.calcSellInsertionHint, t2, Ir(n3), r2);
  }
  getConfig(e2) {
    return this.exchange.getOrderBookConfig({ address: this.address }, e2);
  }
  async encodeCancelParams(e2) {
    let { orderId: t2, silent: r2 = false, accountId: n3 = await this.exchange.getActiveAccountId() } = e2;
    return (r2 ? 1n : 0n) << 108n | n3 << 64n | t2;
  }
  async convertOrderData(e2) {
    let { price: t2, quantity: r2, accountId: n3 = await this.exchange.getActiveAccountId(), type: i2 = 0, insertionHint: a2 = 0n } = e2;
    return { price: V2(t2), quantity: V2(r2), accountId: n3, type: i2, insertionHint: a2 };
  }
  createDepthChartPagination(e2, t2) {
    let { pageSize: r2 } = e2, n3 = [], i2 = 0n, a2 = true;
    return { entries: n3, fetchNext: async () => {
      if (!a2) return { entries: [], hasMore: a2 };
      let { entries: o2, restart: s2 } = await this.decodeDepthChart(t2(r2, i2));
      return i2 = s2, a2 = i2 !== 0n, n3.push(...o2), { entries: o2, hasMore: a2 };
    } };
  }
  createDepthChartIter(e2, t2) {
    let { limit: r2, iterations: n3 } = e2, i2 = 0n;
    return se({ iterations: n3, next: async (a2) => {
      let { restart: o2, entries: s2 } = await this.decodeDepthChart(t2(a2?.limit ?? r2, i2));
      return i2 = o2, { value: s2, done: i2 === 0n };
    } });
  }
  createOrdersPagination(e2, t2) {
    this.assertSearchOrdersParams(e2);
    let { depth: r2, limit: n3, accountId: i2 } = e2, a2 = i2 ?? null, o2 = [], s2 = 0n, c3 = true;
    return { orders: o2, fetchNext: async () => {
      if (!c3) return { orders: [], hasMore: c3 };
      a2 === null && (a2 = await this.exchange.getActiveAccountId());
      let { entries: u3, restart: d3 } = await this.decodeOrders(t2(a2, r2, n3, s2));
      return s2 = d3, c3 = s2 !== Ne, o2.push(...u3), { orders: u3, hasMore: c3 };
    } };
  }
  createOrdersIter(e2, t2) {
    this.assertSearchOrdersParams(e2);
    let { depth: r2, limit: n3, accountId: i2, iterations: a2 } = e2, o2 = 0n;
    return se({ iterations: a2, init: async () => ({ accountId: i2 ?? await this.exchange.getActiveAccountId() }), next: async ({ accountId: s2, ...c3 }) => {
      let { entries: u3, restart: d3 } = await this.decodeOrders(t2(s2, c3?.depth ?? r2, e2?.limit ?? n3, o2));
      return o2 = d3, { value: u3, done: d3 === Ne };
    } });
  }
  async decodeDepthChart(e2) {
    let [t2, ...r2] = await e2, n3 = t2 >> 32n & Ne, i2 = Number(t2 & ye), o2 = r2.slice(0, Math.ceil(i2 / 2)).reduce((s2, c3) => (s2.push({ quantity: Ge(c3 >> 192n & Ne, this.buyToken.positionDecimals), price: _r(c3 >> 128n & Ne) }), s2.length !== i2 && s2.push({ quantity: Ge(c3 >> 64n & Ne, this.buyToken.positionDecimals), price: _r(c3 & Ne) }), s2), []);
    return { restart: n3, entries: o2 };
  }
  async decodeOrders(e2) {
    let [t2, ...r2] = await e2, n3 = t2 >> 32n & Ne, i2 = Number(t2 & ye), a2 = [];
    for (let o2 = 0; o2 < i2; o2++) {
      let s2 = r2[o2], c3 = ae2.unpack(s2, this.buyToken.positionDecimals);
      a2.push(c3);
    }
    return { restart: n3, entries: a2 };
  }
  assertSearchOrdersParams(e2) {
    let { depth: t2, limit: r2 } = e2;
    u(r2 > 0, `Limit should be bigger than 0. Passed value: ${r2}`), u(t2 > 0, `Depth should be bigger than 0. Passed value: ${t2}`), u(r2 <= t2, `Limit (${r2}) should be smaller or equal to depth (${t2})`);
  }
  getTxContext(e2) {
    return { source: "PerpOrderBook", fn: e2 };
  }
};
var nt = class {
  constructor(e2, t2) {
    this.exchange = e2;
    this.appendCommand = t2;
    m3(this, "createBorrowOrder");
    m3(this, "createLendOrder");
    m3(this, "cancelBorrowOrder");
    m3(this, "cancelLendOrder");
    m3(this, "decreaseBorrowOrderQuantity");
    m3(this, "decreaseLendOrderQuantity");
    m3(this, "decreaseBorrowOrderQuantityAndCreate");
    m3(this, "decreaseLendOrderQuantityAndCreate");
    this.createBorrowOrder = this.cancelAndRebookBorrowOrder.bind(this), this.createBorrowOrder = this.cancelAndRebookBorrowOrder.bind(this), this.createLendOrder = this.cancelAndRebookLendOrder.bind(this), this.cancelBorrowOrder = (r2, { interestRate: n3 }) => {
      this.cancelAndRebookBorrowOrder(r2, { cancelInterestRate: n3 });
    }, this.cancelLendOrder = (r2, { interestRate: n3 }) => {
      this.cancelAndRebookLendOrder(r2, { cancelInterestRate: n3 });
    }, this.decreaseBorrowOrderQuantity = (r2, { decreaseQuantityBy: n3, decreaseInterestRate: i2 }) => {
      u(Y2(n3).gt(0), "Quantity is in invalid range: 0 < quantity"), this.cancelAndRebookBorrowOrder(r2, { cancelInterestRate: i2, cancelQuantity: n3 });
    }, this.decreaseLendOrderQuantity = (r2, { decreaseQuantityBy: n3, decreaseInterestRate: i2 }) => {
      u(Y2(n3).gt(0), "Quantity is in invalid range: 0 < quantity"), this.cancelAndRebookLendOrder(r2, { cancelInterestRate: i2, cancelQuantity: n3 });
    }, this.decreaseBorrowOrderQuantityAndCreate = (r2, { decreaseQuantityBy: n3, decreaseInterestRate: i2, interestRate: a2, quantity: o2, type: s2 }) => {
      u(Y2(n3).gt(0), "Quantity is in invalid range: 0 < quantity"), this.cancelAndRebookBorrowOrder(r2, { cancelInterestRate: i2, cancelQuantity: n3, interestRate: a2, quantity: o2, type: s2 });
    }, this.decreaseLendOrderQuantityAndCreate = (r2, { decreaseQuantityBy: n3, decreaseInterestRate: i2, interestRate: a2, quantity: o2, type: s2 }) => {
      u(Y2(n3).gt(0), "Quantity is in invalid range: 0 < quantity"), this.cancelAndRebookLendOrder(r2, { cancelInterestRate: i2, cancelQuantity: n3, interestRate: a2, quantity: o2, type: s2 });
    };
  }
  cancelAndRebookBorrowOrder(e2, t2) {
    return this.cancelAndRebookOneTokenOrder(e2, 1, t2);
  }
  cancelAndRebookLendOrder(e2, t2) {
    this.cancelAndRebookOneTokenOrder(e2, 2, t2);
  }
  cancelAndRebookOneTokenOrder(e2, t2, r2) {
    this.appendCommand(33, t2, async () => {
      let { quantity: n3 = 0, cancelQuantity: i2 = 0, interestRate: a2 = 0, cancelInterestRate: o2 = 0 } = r2, { type: s2 = 0 } = r2, c3 = await this.exchange.getOrderBookConfig({ address: e2 });
      return u(c3, "Incorrect order book address"), u(c3.type === 33, `You provided address of another order book. Expected: Lend. Provided: ${K2[c3.type]}.`), o2 = Y2(o2).multipliedBy(T2.INTEREST_DIVISOR), a2 = Y2(a2).multipliedBy(T2.INTEREST_DIVISOR), i2 = ze(Y2(i2), c3.toTokenConfig.positionDecimals), n3 = ze(Y2(n3), c3.toTokenConfig.positionDecimals), [BigInt(s2) << 160n & m(4) | gi(e2), BigInt(n3.toFixed()) << 96n | BigInt(a2.toFixed()) << 80n | BigInt(i2.toFixed()) << 16n | BigInt(o2.toFixed())];
    });
  }
};
var it = class {
  constructor(e2, t2) {
    this.exchange = e2;
    this.appendCommand = t2;
  }
  swapLendingPosition({ positionId: e2 }) {
    this.appendCommand(0, 5, () => e2);
  }
  markLendingPositionNonReturnable(e2) {
    this.appendCommand(0, 4, () => e2.positionId);
  }
  payInterestAndFees(e2) {
    this.appendCommand(0, 3, async () => {
      let { reduceQuantityBy: t2 = 0, extendPeriod: r2 = false, positionId: n3 } = e2, i2 = await this.exchange.getLendingPosition({ positionId: n3 });
      u(i2, `Lending position with id: ${n3} does not exist!`);
      let { positionDecimals: a2 } = await this.exchange.getTokenConfig({ erc20: i2.tokenId });
      return Ee([n3, BigInt(ze(t2, a2).toFixed()), r2 ? 1n : 0n], [64, 64, 1]);
    });
  }
  requestPerpTrueUp(e2) {
    this.appendCommand(0, 512, async () => {
      let { longAccountId: t2 = await this.exchange.getActiveAccountId(), shortAccountId: r2 = await this.exchange.getActiveAccountId(), tokenId: n3 } = e2;
      return Ee([t2, r2, n3], [64, 64, 32]);
    });
  }
  bankruptcy(e2) {
    this.appendCommand(0, 6, () => e2.liquidationAccountId);
  }
};
var ye2 = class {
  constructor(e2, t2) {
    this.exchange = e2;
    this.appendCommand = t2;
  }
  cancelAndRebookTwoTokenLongOrder(e2, t2, r2, n3, i2) {
    this.appendCommand(e2, t2, async () => {
      let { price: a2 = 0, cancelOrderId: o2 = 0n, insertionHint: s2 = 0n, type: c3 = 0, silent: u3 } = i2, { quantity: d3 = 0 } = i2;
      if (d3) {
        let l2 = await this.exchange.getOrderBookConfig({ address: n3 });
        u(l2, "Incorrect order book address"), u(l2.type === r2, `You provided address of another order book. Expected: ${K2[r2]}. Provided: ${K2[l2.type]}.`), d3 = ze(ki(d3), l2.fromTokenConfig.positionDecimals).toFixed();
      }
      return [Ee([u3 ? 1n : 0n, c3, n3], [1, 4, 160]), Ee([s2, d3, Ir(a2), o2], [64, 64, 64, 64])];
    });
  }
};
var at = class extends ye2 {
  constructor(e2, t2) {
    super(e2, t2);
  }
  createBuyOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(11, 1, 11, e2, t2);
  }
  createSellOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(11, 2, 11, e2, t2);
  }
  cancelBuyOrder(e2, t2) {
    let { orderId: r2, ...n3 } = t2;
    this.cancelAndRebookTwoTokenLongOrder(11, 1, 11, e2, { ...n3, cancelOrderId: r2 });
  }
  cancelSellOrder(e2, t2) {
    let { orderId: r2, ...n3 } = t2;
    this.cancelAndRebookTwoTokenLongOrder(11, 2, 11, e2, { ...n3, cancelOrderId: r2 });
  }
  cancelAndRebookBuyOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(11, 1, 11, e2, t2);
  }
  cancelAndRebookSellOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(11, 2, 11, e2, t2);
  }
};
var ot = class extends ye2 {
  constructor(e2, t2) {
    super(e2, t2);
  }
  createLongOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(22, 1, 22, e2, t2);
  }
  createShortOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(22, 2, 22, e2, t2);
  }
  cancelLongOrder(e2, t2) {
    let { orderId: r2, ...n3 } = t2;
    this.cancelAndRebookTwoTokenLongOrder(22, 1, 22, e2, { ...n3, cancelOrderId: r2 });
  }
  cancelShortOrder(e2, t2) {
    let { orderId: r2, ...n3 } = t2;
    this.cancelAndRebookTwoTokenLongOrder(22, 2, 22, e2, { ...n3, cancelOrderId: r2 });
  }
  cancelAndRebookLongOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(22, 1, 22, e2, t2);
  }
  cancelAndRebookShortOrder(e2, t2) {
    this.cancelAndRebookTwoTokenLongOrder(22, 2, 22, e2, t2);
  }
};
var oe = class extends de {
  constructor(t2) {
    super();
    this.exchangeSDK = t2;
    m3(this, "exchange");
    m3(this, "spot");
    m3(this, "lend");
    m3(this, "perp");
    this.exchange = new it(t2, this.appendCommand.bind(this)), this.spot = new at(t2, this.appendCommand.bind(this)), this.lend = new nt(t2, this.appendCommand.bind(this)), this.perp = new ot(t2, this.appendCommand.bind(this));
  }
};
var Ii = { NewUser: "NewAccount", BankruptcyLossEvent: "BankruptcyLoss", BankruptcyDebtLossEvent: "BankruptcyDebtLoss" };
var K2 = ((r2) => (r2[r2.Spot = 11] = "Spot", r2[r2.Perp = 22] = "Perp", r2[r2.Lend = 33] = "Lend", r2))(K2 || {});
var te = ((r2) => (r2[r2.Limit = 0] = "Limit", r2[r2.FillAllOrRevert = 2] = "FillAllOrRevert", r2[r2.FillPartialKillRest = 3] = "FillPartialKillRest", r2))(te || {});
var v3 = class v4 {
  constructor(e2) {
    m3(this, "signer", {});
    m3(this, "provider");
    m3(this, "address");
    m3(this, "event");
    m3(this, "readonlyExchangeContract");
    m3(this, "defaultAccountId");
    m3(this, "runner");
    let { contractAddress: t2, confirmations: r2, cache: n3, combineReads: i2, estimateGas: a2 } = e2, o2 = { confirmations: r2, cache: n3, combineReads: i2, estimateGas: a2 ?? { margin: 30 } };
    if (this.runner = new F2(o2), "signer" in e2) {
      let u3 = null;
      "trader" in e2.signer || "owner" in e2.signer ? (e2.signer.owner && (this.signer.owner = e2.signer.owner, u3 ?? (u3 = e2.signer.owner.provider)), e2.signer.trader && (this.signer.trader = e2.signer.trader, u3 ?? (u3 = e2.signer.trader.provider))) : (this.signer.owner = e2.signer, u3 ?? (u3 = e2.signer.provider)), u(u3, "At least one of the signers must have a provider!"), this.provider = u3;
    } else if ("provider" in e2) this.provider = e2.provider;
    else throw new Error("You must provide either a signer or a provider");
    let s2 = ICompositeExchangePubAbi__factory.connect(t2, this.provider), c3 = async ({ amount: u3, ...d3 }) => {
      let l2 = await this.getDefaultErc20TokenConfig({ erc20: d3.erc20 }), { erc20Decimals: h3 } = l2;
      return { ...d3, amount: Ge(u3, h3), token: l2 };
    };
    this.readonlyExchangeContract = s2, this.address = t2, this.event = new L2(s2, ICompositeExchangePubAbi__factory.abi, { NewAccount: { userAddress: "accountAddress", userId: "accountId" }, Erc20Deposit: c3, Erc20Withdraw: c3, TraderPermission: { trader: "traderAddress", user: "userId" }, InterestPaid: async ({ interestAndFees: u3, positionId: d3 }, l2) => {
      let h3 = await this.getLendingPosition({ positionId: d3 }, { overrides: { blockTag: l2.log.blockNumber - 1 } }), { tokenId: g3 } = h3, b4 = await this.getTokenConfig({ erc20: g3 }), { vaultDecimals: y3 } = b4, P2 = u3 >> 128n, k2 = u3 & m(128);
      return { positionId: d3, position: h3, token: b4, interest: Ge(k2, y3), fees: Ge(P2, y3) };
    }, LenderSwap: async ({ newPosition: u3, newPositionId: d3, srcPositionId: l2, destPositionId: h3, paymentInLieuOfInterest: g3 }) => {
      let b4 = await this.getTokenConfig({ erc20: q2.extractTokenId(u3) }), { positionDecimals: y3, vaultDecimals: P2 } = b4;
      return { token: b4, sourcePositionId: l2, destinationPositionId: h3, newPositionId: d3, lendMatch: q2.unpack(u3, d3, y3), payment: Ge(g3, P2) };
    }, LendPositionChanged: async ({ positionId: u3, lendMatch: d3 }, l2) => {
      let { tokenId: h3 } = await this.getLendingPosition({ positionId: u3 }, { overrides: { blockTag: l2.log.blockNumber - 1 } }), g3 = await this.getTokenConfig({ erc20: h3 }), { positionDecimals: b4 } = g3;
      return { positionId: u3, token: g3, lendHoursDuration: Number(d3 & ke), hoursPaid: Number(d3 >> 16n & ke), quantity: Ge(d3 >> 32n & Ne, b4) };
    }, LendPositionClosed: async ({ positionId: u3, lendMatch: d3 }, l2) => {
      let { tokenId: h3 } = await this.getLendingPosition({ positionId: u3 }, { overrides: { blockTag: l2.log.blockNumber - 1 } }), g3 = await this.getTokenConfig({ erc20: h3 }), { positionDecimals: b4 } = g3;
      return { ...q2.unpack(d3, u3, b4), token: g3 };
    }, PerpTrueUp: async ({ data: u3, longUserId: d3, shortUserId: l2 }) => {
      let { positionDecimals: h3 } = await this.getBaseTokenConfig();
      return Be2.unpack(u3, d3, l2, h3);
    }, BankruptcyLoss: async ({ userId: u3, loss: d3 }) => {
      let [l2, h3] = Be(d3, [64, 64]), { positionDecimals: g3 } = await this.getTokenConfig({ erc20: v4.BASE_TOKEN_ID });
      return { userId: u3, credit: Ge(l2, g3), liability: Ge(h3, g3) };
    }, BankruptcyDebtLoss: async ({ borrower: u3, lender: d3, loss: l2 }) => {
      let [h3, g3, b4] = Be(l2, [32, 64, 64]), { positionDecimals: y3 } = await this.getTokenConfig({ erc20: h3 });
      return { borrower: u3, lender: d3, quantityOwed: Ge(g3, y3), quantityPaid: Ge(b4, y3) };
    }, Liquidation: async ({ userId: u3, liquidatoinPayoff: d3 }) => {
      let [l2, h3, g3] = Be(d3, [44, 44, 128]), { positionDecimals: b4 } = await this.getTokenConfig({ erc20: v4.BASE_TOKEN_ID });
      return { userId: u3, originalOwnerId: l2, liquidatorId: h3, quantity: Ge(g3, b4) };
    } }, Ii);
  }
  createAccount(e2) {
    return this.runner.tx(this.getContractWithSigner(true).createAccount, this.getTxContext(this.createAccount.name), { ...e2, invalidate: [{ name: this.getAccountId.name }] });
  }
  async createAccountAndDepositErc20(e2, t2) {
    let { erc20: r2, amount: n3 } = e2, i2 = H2(n3);
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let { erc20Decimals: a2, tokenAddress: o2 } = await this.getTokenConfig({ erc20: r2 });
    return this.runner.tx(this.getContractWithSigner(true).createAccountAndDeposit, this.getTxContext(this.createAccountAndDepositErc20.name), { ...t2, invalidate: [{ name: this.getAccountId.name }] }, o2, ze(i2, a2).toFixed());
  }
  async getAccountId(e2 = {}, t2) {
    let { address: r2 } = e2, n3 = r2 ? await z2(r2) : await this.getSigner(true).getAddress();
    return this.runner.withCache({ key: { name: this.getAccountId.name, params: [n3] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.getUserId, t2, n3));
  }
  async getAccountAddress(e2 = {}, t2) {
    let { id: r2 = await this.getAccountId() } = e2;
    return this.runner.withCache({ key: { name: this.getAccountAddress.name, params: [r2] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.getUserAddress, t2, r2));
  }
  async getTradersForAccount(e2 = {}, t2) {
    let { accountId: r2 = await this.getAccountId() } = e2;
    return this.runner.withCache({ key: { name: this.getTradersForAccount.name, params: [r2] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.bulkTraders_5523718714, t2, r2));
  }
  async getBalance(e2, t2) {
    let { tokenId: r2, accountId: n3 } = e2, [i2, { vaultDecimals: a2, positionDecimals: o2 }] = await Promise.all([n3 ? Promise.resolve(n3) : this.getActiveAccountId(), this.getTokenConfig({ erc20: r2 }, t2)]), [s2, c3, u3] = await this.runner.view(this.readonlyExchangeContract.getBalance, t2, i2, r2);
    return { balance: Ge(s2, a2), spotLendSequesteredAmount: Ge(c3, o2), perpSequesteredAmount: Ge(u3, o2) };
  }
  async depositErc20(e2, t2) {
    let { erc20: r2, amount: n3 } = e2, i2 = H2(String(n3));
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let { erc20Decimals: a2 } = await this.getDefaultErc20TokenConfig({ erc20: r2 });
    return this.runner.tx(this.getContractWithSigner(true).depositErc20, this.getTxContext(this.depositErc20.name), t2, r2, ze(n3, a2).toFixed());
  }
  async approveErc20(e2, t2) {
    let { erc20: r2, amount: n3 } = e2;
    return this.runner.emitTransaction(new ee2({ address: await z2(r2), signer: this.getSigner(true) }).approve({ spender: this.address, amount: n3 }, t2), this.getTxContext(this.approveErc20.name));
  }
  async approveAndDepositErc20(e2, t2) {
    let { erc20: r2, amount: n3 } = e2, i2 = H2(String(n3));
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let a2 = await z2(r2), o2 = new ee2({ address: a2, signer: this.getSigner(true) }), [s2] = await Promise.all([o2.getDecimals(), o2.safeApprove({ spender: this.address, amount: n3 }, t2)]), c3 = ze(n3, s2).toFixed();
    return this.runner.tx(this.getContractWithSigner(true).depositErc20, this.getTxContext(this.approveAndDepositErc20.name), t2, a2, c3);
  }
  async withdrawErc20(e2, t2) {
    let { erc20: r2, amount: n3 } = e2, i2 = H2(String(n3));
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let { erc20Decimals: a2 } = await this.getDefaultErc20TokenConfig({ erc20: r2 });
    return this.runner.tx(this.getContractWithSigner(true).withdrawErc20, this.getTxContext(this.withdrawErc20.name), t2, r2, ze(n3, a2).toFixed());
  }
  async wrapNativeEth(e2, t2) {
    let { wrapperAddress: r2, amountEth: n3 } = e2, i2 = H2(String(n3));
    if (i2.isZero()) return;
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let a2 = await z2(r2), o2 = NativeWrapperErc20Abi__factory.connect(a2, this.getSigner(true)), s2 = ze(n3, 18).toFixed(), c3 = await o2.deposit({ value: s2, ...t2?.overrides });
    return this.runner.emitTransaction(c3.wait(), this.getTxContext(this.wrapNativeEth.name));
  }
  async unwrapWrappedEth(e2, t2) {
    let { wrapperAddress: r2, amountWeth: n3 } = e2, i2 = H2(String(n3));
    if (i2.isZero()) return;
    u(i2.gt(0), `Amount has to be greater than 0. Received: ${i2.toFixed()}`);
    let a2 = await z2(r2), o2 = NativeWrapperErc20Abi__factory.connect(a2, this.getSigner(true)), s2 = ze(n3, 18).toFixed(), c3 = await o2.withdraw(s2, t2?.overrides ?? {});
    return this.runner.emitTransaction(c3.wait(), this.getTxContext(this.unwrapWrappedEth.name));
  }
  async getTokenName(e2, t2) {
    return (await this.getERC20(e2)).getName(t2);
  }
  async getTokenSymbol(e2, t2) {
    return (await this.getERC20(e2)).getSymbol(t2);
  }
  async getTokenDecimals(e2, t2) {
    return (await this.getERC20(e2)).getDecimals(t2);
  }
  async getTokenConfig(e2, t2) {
    let { erc20: r2 } = e2, { isAddress: n3, erc20: i2 } = await this.resolveErc20(r2);
    return this.runner.withCache({ key: { name: this.getTokenConfig.name, params: [i2] }, options: t2, resolveKey: (a2) => {
      let { tokenId: o2, tokenAddress: s2 } = a2;
      return [{ name: this.getTokenConfig.name, params: [n3 ? o2 : s2] }, { name: this.getDefaultErc20TokenConfig.name, params: [s2] }];
    } }, async () => {
      let a2 = await (n3 ? this.runner.view(this.readonlyExchangeContract.getDefaultErc20TokenConfig, t2, r2) : this.runner.view(this.readonlyExchangeContract.readTokenConfig, t2, r2));
      return Q2.unpack(a2);
    });
  }
  getBaseTokenConfig(e2) {
    return this.getTokenConfig({ erc20: v4.BASE_TOKEN_ID }, e2);
  }
  async getDefaultErc20TokenConfig(e2, t2) {
    let { erc20: r2 } = e2, n3 = await z2(r2);
    return this.runner.withCache({ key: { name: this.getDefaultErc20TokenConfig.name, params: [n3] }, resolveKey: (i2) => [{ name: this.getTokenConfig.name, params: [i2.tokenId] }, { name: this.getTokenConfig.name, params: [i2.tokenAddress] }], options: t2 }, async () => {
      let i2 = await this.runner.view(this.readonlyExchangeContract.getDefaultErc20TokenConfig, t2, n3);
      return Q2.unpack(i2);
    });
  }
  getSpotOrderBook(e2, t2, r2) {
    return this.runner.withCache({ key: [{ name: this.getSpotOrderBook.name, params: [e2, t2] }, { name: this.getSpotOrderBook.name, params: [t2, e2] }], options: r2 }, async () => {
      let [n3, i2, a2] = await this.runner.view(this.readonlyExchangeContract.getSpotOrderBook, r2, e2, t2);
      if (Nt2(n3) === 0n) return null;
      let [{ chainId: o2 }, s2, c3] = await Promise.all([this.getNetwork(), this.getTokenConfig({ erc20: i2 }, r2), this.getTokenConfig({ erc20: a2 }, r2)]);
      return new le2(this, Number(o2), n3, s2, c3, this.runner.withPrefix(n3));
    });
  }
  getPerpOrderBook(e2, t2, r2) {
    return this.runner.withCache({ key: [{ name: this.getPerpOrderBook.name, params: [e2, t2] }, { name: this.getPerpOrderBook.name, params: [t2, e2] }], options: r2 }, async () => {
      let [n3, i2, a2] = await this.runner.view(this.readonlyExchangeContract.getPerpOrderBook, r2, e2, t2);
      if (Nt2(n3) === 0n) return null;
      let [{ chainId: o2 }, s2, c3] = await Promise.all([this.getNetwork(), this.getTokenConfig({ erc20: i2 }, r2), this.getTokenConfig({ erc20: a2 }, r2)]);
      return new ge(this, Number(o2), n3, s2, c3, this.runner.withPrefix(n3));
    });
  }
  getLendOrderBook(e2, t2) {
    return this.runner.withCache({ key: { name: this.getLendOrderBook.name, params: [e2] }, options: t2 }, async () => {
      let r2 = await this.runner.view(this.readonlyExchangeContract.getLendOrderBook, t2, e2);
      if (Nt2(r2) === 0n) return null;
      let [{ chainId: n3 }, i2] = await Promise.all([this.getNetwork(), this.getTokenConfig({ erc20: e2 }, t2)]);
      return new he(this, Number(n3), r2, i2, this.runner.withPrefix(r2));
    });
  }
  async allowTradingForAccount(e2, t2) {
    let { traderAddress: r2, accountId: n3 = await this.getAccountId() } = e2;
    return this.runner.tx(this.getContractWithSigner(true).allowTradingForAccount, this.getTxContext(this.allowTradingForAccount.name), t2, n3, r2);
  }
  async revokeTradingForAccount(e2, t2) {
    let { traderAddress: r2, accountId: n3 = await this.getAccountId() } = e2;
    return this.runner.tx(this.getContractWithSigner(true).revokeTradingForAccount, this.getTxContext(this.revokeTradingForAccount.name), t2, n3, r2);
  }
  setDefaultAccountId(e2) {
    this.defaultAccountId = e2;
  }
  unsetDefaultAccountId() {
    this.defaultAccountId = null;
  }
  async getInterestAndFeesDue(e2, t2) {
    let { positionId: r2 } = e2, n3 = await this.runner.view(this.readonlyExchangeContract.readLendingPosition, t2, r2);
    if (n3 === 0n) return null;
    let i2 = Number(n3 >> 80n & ye), [{ vaultDecimals: a2 }, o2] = await Promise.all([this.getTokenConfig({ erc20: i2 }, t2), this.runner.view(this.readonlyExchangeContract.calculateInterestAndFeesDue, t2, r2)]);
    return Ge(o2, a2);
  }
  async getLendingPosition(e2, t2) {
    let { positionId: r2 } = e2, n3 = await this.runner.view(this.readonlyExchangeContract.readLendingPosition, t2, r2);
    if (n3 === 0n) return null;
    let i2 = Number(n3 >> 80n & ye), a2 = await this.getTokenConfig({ erc20: i2 }, t2), { positionDecimals: o2 } = a2;
    return { ...q2.unpack(n3, BigInt(r2), o2), token: a2 };
  }
  async getAllLenderPositions(e2, t2) {
    let { offset: r2 = 0 } = e2;
    u(r2 >= 0, "Offset range >= 0.");
    let { tokenId: n3, accountId: i2 = await this.getActiveAccountId() } = e2, [{ positionDecimals: a2 }, o2] = await Promise.all([this.getTokenConfig({ erc20: n3 }, t2), this.runner.view(this.readonlyExchangeContract.readLenderPositions, t2, i2, n3, 0, r2)]);
    return o2.slice(1).map((s2) => {
      let { counterPartyId: c3, ...u3 } = _2.unpack(s2, a2);
      return { ...u3, lenderId: i2, borrowerId: c3 };
    });
  }
  async getAllBorrowerPositions(e2, t2) {
    let { offset: r2 = 0 } = e2;
    u(r2 >= 0, "Offset range >= 0.");
    let { tokenId: n3, accountId: i2 = await this.getActiveAccountId() } = e2, [{ positionDecimals: a2 }, o2] = await Promise.all([this.getTokenConfig({ erc20: n3 }, t2), this.runner.view(this.readonlyExchangeContract.readBorrowerPositions, t2, i2, n3, 0, r2)]);
    return o2.slice(1).map((s2) => {
      let { counterPartyId: c3, ...u3 } = _2.unpack(s2, a2);
      return { ...u3, lenderId: c3, borrowerId: i2 };
    });
  }
  markLendingPositionNonReturnable(e2, t2) {
    let { positionId: r2 } = e2;
    return this.runner.tx(this.getContractWithSigner().markLendPositionAsNonReturnable, this.getTxContext(this.markLendingPositionNonReturnable.name), t2, r2);
  }
  async payInterestAndFees(e2, t2) {
    let { reduceQuantityBy: r2 = 0, extendPeriod: n3 = false, positionId: i2 } = e2, a2 = await this.getLendingPosition({ positionId: i2 });
    return u(a2, `Lending position with id: ${i2} does not exist!`), this.runner.tx(this.getContractWithSigner().payInterestAndFees, this.getTxContext(this.payInterestAndFees.name), t2, i2, ze(r2, a2.token.positionDecimals).toFixed(), n3);
  }
  async closeLoan(e2, t2) {
    let { positionId: r2 } = e2, n3 = await this.getLendingPosition({ positionId: r2 });
    return u(n3, `Lending position with id: ${r2} does not exist!`), this.runner.tx(this.getContractWithSigner().payInterestAndFees, this.getTxContext(this.closeLoan.name), t2, r2, ze(n3.quantity, n3.token.positionDecimals).toFixed(), false);
  }
  createLenderPositionsPagination(e2, t2) {
    return this.createPagination(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readLenderPositions, t2, ...r2), (r2, n3, i2) => {
      let { counterPartyId: a2, ...o2 } = _2.unpack(r2, i2);
      return { ...o2, borrowerId: a2, lenderId: n3 };
    });
  }
  createLenderPositionsIter(e2, t2) {
    return this.createIter(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readLenderPositions, t2, ...r2), (r2, n3, i2) => {
      let { counterPartyId: a2, ...o2 } = _2.unpack(r2, i2);
      return { ...o2, borrowerId: a2, lenderId: n3 };
    });
  }
  createBorrowerPositionsPagination(e2, t2) {
    return this.createPagination(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readBorrowerPositions, t2, ...r2), (r2, n3, i2) => {
      let { counterPartyId: a2, ...o2 } = _2.unpack(r2, i2);
      return { ...o2, borrowerId: n3, lenderId: a2 };
    });
  }
  createBorrowerPositionsIter(e2, t2) {
    return this.createIter(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readBorrowerPositions, t2, ...r2), (r2, n3, i2) => {
      let { counterPartyId: a2, ...o2 } = _2.unpack(r2, i2);
      return { ...o2, borrowerId: n3, lenderId: a2 };
    });
  }
  createPerpPositionsPagination(e2, t2) {
    return this.createPagination(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readPerpPositions, t2, ...r2), (r2, n3, i2) => ue.unpack(r2, i2), (r2) => r2.quantity.isZero());
  }
  createPerpPositionsIter(e2, t2) {
    return this.createIter(e2, (...r2) => this.runner.view(this.readonlyExchangeContract.readPerpPositions, t2, ...r2), (r2, n3, i2) => ue.unpack(r2, i2), (r2) => r2.quantity.isZero());
  }
  async getFundingRate(e2, t2) {
    let { tokenId: r2, timeSec: n3 = (await this.getLatestBlock()).timestamp } = e2, i2 = Math.floor(n3 / 60 / 60 / 8), a2 = await this.runner.withCache({ key: { name: this.getFundingRate.name, params: [i2, r2] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.readFundingRate, t2, n3, r2));
    return Ge(a2, v4.FUNDING_RATE_DIVISOR_EXP);
  }
  async getFundingRateHistory(e2, t2) {
    let { fromSec: r2, tokenId: n3, toSec: i2 } = e2, a2 = Math.floor(r2 / 60 / 60 / 8), o2 = Math.floor(i2 / 60 / 60 / 8);
    return (await this.runner.withCache({ key: { name: this.getFundingRateHistory.name, params: [a2, o2, n3] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.readFundingRateHistory_4648699482, t2, r2, i2, n3))).map((c3) => Ge(c3, v4.FUNDING_RATE_DIVISOR_EXP));
  }
  async getSummedFundingRate(e2, t2) {
    let { toSec: r2, fromSec: n3, tokenId: i2 } = e2, a2 = Math.floor((n3 - v4.EPOCH / 1e3) / 60 / 60 / 8), o2 = Math.floor((r2 - v4.EPOCH / 1e3) / 60 / 60 / 8);
    u(a2 >= 0, "`From` parameter cannot start earlier than Exchange.EPOCH"), u(o2 >= 0, "`To` parameter cannot start earlier than Exchange.EPOCH");
    let s2 = await this.runner.withCache({ key: { name: this.getSummedFundingRate.name, params: [a2, o2, i2] }, options: t2 }, () => this.runner.view(this.readonlyExchangeContract.summedFundingRate, t2, i2, a2, o2));
    return Ge(s2, v4.FUNDING_RATE_DIVISOR_EXP);
  }
  async getFundingRateStats(e2, t2) {
    let [r2, { positionDecimals: n3 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.readFundingRateStats, t2, e2.tokenId), this.getTokenConfig({ erc20: e2.tokenId }, t2)]);
    return pe.unpack(r2, n3);
  }
  async getAggregatedPerpPosition(e2, t2) {
    let { tokenId: r2, accountId: n3 = await this.getActiveAccountId() } = e2, [i2, { positionDecimals: a2 }, { positionDecimals: o2 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.readPerpAggPosition, t2, n3, r2), this.getTokenConfig({ erc20: r2 }, t2), this.getBaseTokenConfig()]);
    return Ee2.unpack(i2, a2, o2);
  }
  getMaxTokenId(e2) {
    return this.runner.withCache({ key: { name: this.getMaxTokenId.name, params: [] }, options: e2 }, () => this.runner.view(this.readonlyExchangeContract.getHighestTokenId, e2)).then(Number);
  }
  async getAllBulkVaultTokenConfigs(e2) {
    return this.runner.withCache({ key: { name: this.getAllBulkVaultTokenConfigs.name, params: [] }, resolveKey: (t2) => t2.map((r2) => {
      let { tokenId: n3, tokenAddress: i2 } = r2;
      return [{ name: this.getTokenConfig.name, params: [n3], value: r2 }, { name: this.getTokenConfig.name, params: [i2], value: r2 }, { name: this.getTokenName.name, params: [i2], value: r2.name }, { name: this.getTokenSymbol.name, params: [i2], value: r2.symbol }, { name: this.getTokenDecimals.name, params: [i2], value: r2.vaultDecimals }, { name: this.getDefaultErc20TokenConfig.name, params: [i2], value: r2 }];
    }).flat(), options: e2 }, async () => {
      let t2 = await this.runner.view(this.readonlyExchangeContract.bulkReadTokenConfigs_3423260018, e2), r2 = [];
      for (let n3 = 0, i2 = t2.length; n3 < i2; n3 += 3) {
        let a2 = t2[n3];
        if (a2 === 0n) break;
        let o2 = t2[n3 + 1], s2 = t2[n3 + 2];
        r2.push(re.unpack(a2, o2, s2));
      }
      return r2;
    });
  }
  async decodeEvents(e2) {
    let t2 = { exchange: {}, lend: {}, perp: {}, spot: {}, erc20: {}, unknown: [] };
    return ICompositeExchangePubAbi__factory.abi.forEach((n3) => {
      n3.type === "event" && (t2.exchange[this.event.eventNameLookup(n3.name)] = []);
    }), ISpotOrderBookAbi__factory.abi.forEach((n3) => {
      if (n3.type !== "event") return;
      t2.spot[n3.name] = [];
      let i2 = n3.name;
      t2.perp[i2 in rt ? rt[i2] : i2] = [];
    }), ILendOrderBookAbi__factory.abi.forEach((n3) => {
      if (n3.type !== "event") return;
      let i2 = n3.name;
      t2.lend[i2 in Ze ? Ze[i2] : i2] = [];
    }), ERC20Abi__factory.abi.forEach((n3) => {
      n3.type === "event" && (t2.erc20[n3.name] = []);
    }), (await Promise.all(e2.map(async (n3) => {
      let i2 = n3.address.toLowerCase();
      if (i2 === this.address.toLowerCase()) {
        let c3 = ICompositeExchangePubAbi__factory.connect(i2, this.provider), u3 = c3.interface.parseLog(n3);
        u(u3, "Log description not found", true);
        let d3 = u3.name, l2 = await this.event.resolve(d3, new De2(c3, null, d3, c3.getEvent(d3).fragment, n3));
        return () => void t2.exchange[this.event.eventNameLookup(d3)].push({ data: l2, log: n3 });
      }
      let [a2, { chainId: o2 }] = await Promise.all([this.getOrderBookConfig({ address: i2 }), this.getNetwork()]);
      if (a2) switch (a2.type) {
        case 11: {
          let c3 = new le2(this, Number(o2), i2, a2.fromTokenConfig, a2.toTokenConfig, this.runner.withPrefix(i2)), u3 = ISpotOrderBookAbi__factory.connect(i2, this.provider), d3 = u3.interface.parseLog(n3);
          u(d3, "Log description not found", true);
          let l2 = d3.name, h3 = await c3.event.resolve(l2, new De2(u3, null, l2, u3.getEvent(l2).fragment, n3));
          return () => void t2.spot[c3.event.eventNameLookup(l2)].push({ data: h3, log: n3 });
        }
        case 22: {
          let c3 = new ge(this, Number(o2), i2, a2.fromTokenConfig, a2.toTokenConfig, this.runner.withPrefix(i2)), u3 = ISpotOrderBookAbi__factory.connect(i2, this.provider), d3 = u3.interface.parseLog(n3);
          u(d3, "Log description not found", true);
          let l2 = d3.name, h3 = await c3.event.resolve(l2, new De2(u3, null, l2, u3.getEvent(l2).fragment, n3));
          return () => void t2.perp[c3.event.eventNameLookup(l2)].push({ data: h3, log: n3 });
        }
        case 33: {
          let c3 = new he(this, Number(o2), i2, a2.toTokenConfig, this.runner.withPrefix(i2)), u3 = ILendOrderBookAbi__factory.connect(i2, this.provider), d3 = u3.interface.parseLog(n3);
          u(d3, "Log description not found", true);
          let l2 = d3.name, h3 = await c3.event.resolve(l2, new De2(u3, null, l2, u3.getEvent(l2).fragment, n3));
          return () => void t2.lend[c3.event.eventNameLookup(l2)].push({ data: h3, log: n3 });
        }
      }
      let s2 = ERC20Abi__factory.connect(i2, this.provider);
      try {
        await s2.totalSupply();
        let c3 = await this.getERC20({ erc20: i2 }), u3 = c3.contract, d3 = u3.interface.parseLog(n3);
        u(d3, "Log description not found", true);
        let l2 = d3.name, h3 = await c3.event.resolve(l2, new De2(u3, null, l2, u3.getEvent(l2).fragment, n3));
        return () => void t2.erc20[l2].push(h3);
      } catch {
        return () => void t2.unknown.push(n3);
      }
    }))).forEach((n3) => n3()), t2;
  }
  async getERC20(e2) {
    let { erc20: t2 } = e2, { isAddress: r2, erc20: n3 } = await this.resolveErc20(t2), i2;
    if (r2) i2 = n3;
    else {
      let a2 = await this.getTokenConfig({ erc20: n3 });
      u(a2.tokenId !== 0, `No token config with such id: ${t2}`), i2 = a2.tokenAddress;
    }
    return new Qe({ address: i2, runner: this.runner.withPrefix(i2.toLowerCase()), ...this.signer.owner ? { signer: this.signer.owner } : { provider: this.provider } });
  }
  async getOrderBookConfig(e2, t2) {
    let { address: r2 } = e2, n3 = await z2(r2);
    return this.runner.withCache({ key: { name: this.getOrderBookConfig.name, params: [n3] }, options: t2 }, async () => {
      let i2 = await this.runner.view(this.readonlyExchangeContract.readOrderBookConfig, t2, n3);
      if (i2 === 0n) return null;
      let a2 = Number(i2 >> 248n & m(8));
      switch (a2) {
        case 11:
        case 22: {
          let o2 = i2 >> 184n & Ne, s2 = i2 >> 120n & Ne, c3 = i2 >> 80n & ke, u3 = i2 >> 64n & ke, d3 = i2 & Ne, [l2, h3] = await Promise.all([this.getTokenConfig({ erc20: Number(d3 >> 32n & ye) }, t2), this.getTokenConfig({ erc20: Number(d3 & ye) }, t2)]);
          return { type: a2, address: n3, fromTokenConfig: l2, toTokenConfig: h3, fromMaxFee: Ge(o2, l2.positionDecimals), toMaxFee: Ge(s2, h3.positionDecimals), makerFeeMultiplier: new H2(c3.toString()).div(v4.FEE_DIVISOR), takerFeeMultiplier: new H2(u3.toString()).div(v4.FEE_DIVISOR) };
        }
        case 33:
          return { type: a2, address: n3, toTokenConfig: await this.getTokenConfig({ erc20: Number(i2 & ye) }, t2) };
      }
    });
  }
  async getRiskAdjustedPortfolioValue(e2, t2) {
    let { accountId: r2 = await this.getActiveAccountId() } = e2 || {}, [n3, { positionDecimals: i2 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.riskAdjustedPortfolioValue, t2, r2), this.getBaseTokenConfig()]);
    return Ge(n3, i2);
  }
  async getAccountPositionIndicators(e2, t2) {
    let { accountId: r2 = await this.getActiveAccountId() } = e2 || {}, [n3, i2] = await this.runner.view(this.readonlyExchangeContract.userBits, t2, r2), a2 = Number(n3 & ye), o2 = Number(i2 & ye), s2 = /* @__PURE__ */ new Set(), c3 = /* @__PURE__ */ new Set(), u3 = m(1);
    for (let d3 = 1; d3 <= a2; d3++) (n3 >> 32n + BigInt(d3) & u3) === 1n && s2.add(d3);
    for (let d3 = 1; d3 <= o2; d3++) (i2 >> 32n + BigInt(d3) & u3) === 1n && c3.add(d3);
    return { debt: s2, noDebt: c3 };
  }
  async getTokenMarkPrice(e2, t2) {
    let { tokenId: r2 } = e2;
    if (r2.toString() === v4.BASE_TOKEN_ID.toString()) return H2(1);
    let n3 = await this.runner.view(this.readonlyExchangeContract.getMarkPrice, t2, r2);
    return _r(n3);
  }
  async getTokenMarkPriceConfig(e2, t2) {
    let { tokenId: r2 } = e2, n3 = await this.runner.view(this.readonlyExchangeContract.getMarkPriceConfig, t2, r2);
    return we.unpack(n3);
  }
  swapLendingPosition(e2, t2) {
    let { positionId: r2 } = e2;
    return this.runner.tx(this.getContractWithSigner().lifoLenderSwap, this.getTxContext(this.swapLendingPosition.name), t2, r2);
  }
  async batch(e2, t2) {
    let { fn: r2, accountId: n3 = await this.getActiveAccountId() } = e2, i2 = new oe(this);
    oe.run(i2, r2), u(!oe.isEmpty(i2), "Must execute at least one command");
    let a2 = await zt(() => oe.encodeBatch(i2), "Error inside batch commands");
    return this.runner.tx(this.getContractWithSigner().batchCommands, this.getTxContext(this.batch.name), t2, n3, a2);
  }
  async getAggregatedLendingPosition(e2, t2) {
    let { tokenId: r2, accountId: n3 = await this.getActiveAccountId() } = e2, [i2, { positionDecimals: a2 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.readLendingAggregation, t2, n3, r2), this.getTokenConfig({ erc20: r2 }, t2)]);
    return Ie2.unpack(i2, a2);
  }
  async getBulkAggregatedLendingPosition(e2, t2) {
    let r2 = e2.accountId ?? await this.getActiveAccountId(), [n3, { positionDecimals: i2 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.bulkReadLendingAgg_9676672908, t2, r2, e2.tokenId), this.getTokenConfig({ erc20: e2.tokenId }, t2)]);
    return Ce.unpack(n3, i2);
  }
  onTransaction(e2) {
    return this.runner.onTransaction(e2);
  }
  getMaxAccountId(e2) {
    return this.runner.view(this.readonlyExchangeContract.bulkReadMaxUserId_5445644137, e2);
  }
  async getAccountsCount(e2) {
    let t2 = await this.getMaxAccountId(e2);
    return Number(t2 - 10n);
  }
  async requestPerpTrueUp(e2, t2) {
    let { longAccountId: r2 = await this.getActiveAccountId(), shortAccountId: n3 = await this.getActiveAccountId(), tokenId: i2 } = e2;
    return this.runner.tx(this.getContractWithSigner().requestPerpTrueUp, this.getTxContext(this.requestPerpTrueUp.name), t2, r2, n3, i2);
  }
  async bankruptcy(e2, t2) {
    let { liquidationAccountId: r2 } = e2;
    return this.runner.tx(this.getContractWithSigner(true).bankruptcy, this.getTxContext(this.bankruptcy.name), t2, r2);
  }
  async liquidate(e2, t2) {
    let { liquidationAccountId: r2, paymentAccountId: n3 = 0n, pastDueLendPositionId: i2 = 0 } = e2;
    return this.runner.tx(this.getContractWithSigner().liquidate, this.getTxContext(this.liquidate.name), t2, r2, n3, i2);
  }
  getLendFeeSchedule(e2, t2) {
    let { tokenId: r2 } = e2;
    return this.runner.withCache({ key: { name: this.getLendFeeSchedule.name, params: [r2] }, options: t2 }, async () => {
      let [n3, { vaultDecimals: i2 }] = await Promise.all([this.runner.view(this.readonlyExchangeContract.getLendFeeSchedule, t2, r2), this.getTokenConfig({ erc20: r2 }, t2)]);
      return n3 === 0n ? null : xe.unpack(n3, i2);
    });
  }
  recalculateFundingRate(e2, t2) {
    let { tokenId: r2 } = e2;
    return u(Number(r2) !== v4.BASE_TOKEN_ID, "You can't calculate the funding rate for the base token!"), this.runner.tx(this.getContractWithSigner().computeFundingRateNow, this.getTxContext(this.recalculateFundingRate.name), t2, r2);
  }
  getLatestBlock(e2) {
    let { prefetchTransactions: t2 = false } = e2 ?? {};
    return this.runner.withPending({ key: { name: this.provider.getBlock.name, params: ["latest"] }, options: null }, () => this.provider.getBlock("latest", t2));
  }
  async resolveErc20(e2) {
    return Oi(e2) || Bi(e2) ? { erc20: await z2(e2), isAddress: true } : { erc20: e2, isAddress: false };
  }
  getTxContext(e2) {
    return { source: "Exchange", fn: e2 };
  }
  createPagination(e2, t2, r2, n3) {
    let { limit: i2, offset: a2 = 0 } = e2;
    u(i2 > 0, "Limit range > 0"), u(a2 >= 0, "Offset range >= 0");
    let { tokenId: o2, accountId: s2 } = e2, c3 = s2 ?? null, u3 = null, d3 = [], l2 = a2, h3 = true;
    return { positions: d3, fetchNext: async () => {
      if (!h3) return { positions: [], hasMore: h3 };
      if (c3 === null || u3 === null) {
        let k2 = [];
        c3 === null && k2.push(this.getActiveAccountId().then((B2) => {
          c3 = B2;
        })), u3 === null && k2.push(this.getTokenConfig({ erc20: o2 }).then((B2) => {
          u3 = B2.positionDecimals;
        })), await Promise.all(k2);
      }
      let [g3, ...b4] = await t2(c3, o2, i2, l2), y3 = Number(g3);
      l2 += b4.length;
      let P2 = [];
      for (let k2 of b4) {
        let B2 = r2(k2, c3, u3);
        if (n3?.(B2)) {
          y3--;
          continue;
        }
        P2.push(B2), d3.push(B2);
      }
      return h3 = y3 - a2 !== d3.length, { positions: P2, hasMore: h3 };
    } };
  }
  createIter(e2, t2, r2, n3) {
    let { tokenId: i2, iterations: a2, accountId: o2, limit: s2, offset: c3 = 0 } = e2;
    u(s2 > 0, "Limit range > 0"), u(c3 >= 0, "Offset range >= 0");
    let u3 = 0, d3 = c3;
    return se({ iterations: a2, init: async () => {
      let [{ positionDecimals: l2 }, h3] = await Promise.all([this.getTokenConfig({ erc20: i2 }), o2 ? Promise.resolve(o2) : this.getActiveAccountId()]);
      return { positionDecimals: l2, accountId: h3 };
    }, next: async ({ positionDecimals: l2, accountId: h3, ...g3 }) => {
      let [b4, ...y3] = await t2(h3, i2, g3.limit ?? s2, d3), P2 = Number(b4), k2 = [];
      for (let f3 of y3) {
        let N3 = r2(f3, h3, l2);
        if (n3?.(N3)) {
          P2--;
          continue;
        }
        u3++, k2.push(N3);
      }
      let B2 = P2 - c3 === u3;
      return d3 += y3.length, { value: k2, done: B2 };
    } });
  }
  getNetwork() {
    let e2 = { name: this.getNetwork.name, params: [] };
    return this.runner.withCache({ key: e2, options: { ttl: { days: 1 } } }, () => this.runner.withPending({ key: e2, options: null }, () => this.provider.getNetwork()));
  }
  async getActiveAccountId() {
    if (typeof this.defaultAccountId == "bigint") return this.defaultAccountId;
    let e2 = await this.getAccountId();
    return u(e2 !== 0n, "Account does not exist, create account first to perform this action."), e2;
  }
  getContractWithSigner(e2) {
    return this.readonlyExchangeContract.connect(this.getSigner(e2));
  }
  getSigner(e2) {
    return u(this.signer.owner || this.signer.trader, "No owner nor trader signer was provided"), e2 ? (u(this.signer.owner, "No owner signer was provided"), this.signer.owner) : this.signer.trader || this.signer.owner;
  }
};
m3(v3, "FEE_DIVISOR", 1e5), m3(v3, "INTEREST_DIVISOR", 1e4), m3(v3, "MIN_LEND_DURATION_HOURS", 8), m3(v3, "LEND_DURATION_DAYS", 10), m3(v3, "LEND_DURATION_HOURS", v3.LEND_DURATION_DAYS * 24), m3(v3, "LENDER_HAIRCUT", 980), m3(v3, "MAX_FUNDING_RATE_CHANGE", 500), m3(v3, "MAX_FUNDING_RATE", 3e4), m3(v3, "FUNDING_RATE_DIVISOR_EXP", 7), m3(v3, "FUNDING_RATE_DIVISOR", 10 ** v3.FUNDING_RATE_DIVISOR_EXP), m3(v3, "LIQUIDATION_ESCROW_TIME_MINUTES", 1440), m3(v3, "BASE_TOKEN_ID", 1), m3(v3, "EPOCH", Date.UTC(2024, 0, 1));
var T2 = v3;
var x2 = class x3 {
  constructor(e2, t2) {
    this.exchange = t2;
    m3(this, "_id");
    m3(this, "portfolio");
    m3(this, "baseToken");
    this._id = Yr.hexlify(Yr.randomBytes(16)), this.portfolio = e2.type === "init" ? e2.data.reduce((r2, n3) => {
      let [{ balance: i2 }, a2, o2, s2, c3] = n3;
      return r2[c3.tokenId] = { balance: i2, aggLend: a2, aggPerp: o2, markPrice: s2, config: c3 }, r2;
    }, {}) : e2.data, this.baseToken = this.portfolio[T2.BASE_TOKEN_ID].config;
  }
  get() {
    return this.portfolio;
  }
  clone() {
    let e2 = {};
    return Object.entries(this.portfolio).forEach(([t2, r2]) => {
      let { aggLend: n3, aggPerp: i2, balance: a2, config: o2, markPrice: s2 } = r2;
      e2[+t2] = { markPrice: s2, balance: a2, config: o2, aggLend: { ...n3 }, aggPerp: { ...i2 } };
    }), new x3({ type: "modify", data: e2 }, this.exchange);
  }
  modify(e2) {
    return new x3({ data: e2(this.portfolio), type: "modify" }, this.exchange);
  }
  perpTrueUp(e2) {
    let { tokenId: t2, trueUpPrice: r2, updateMarkPrice: n3 } = e2, i2 = R2(r2), a2 = this.portfolio[t2];
    u(a2, `Portfolio for the token ${t2} has not been found!`);
    let { price: o2, quantity: s2, owedBase: c3 } = a2.aggPerp, u3 = o2.times(s2), l2 = i2.times(s2).minus(u3);
    a2.aggPerp.price = i2, a2.aggPerp.owedBase = c3.plus(l2), n3 && (a2.markPrice = i2);
  }
  addPerpQuantity(e2) {
    let { tokenId: t2, quantity: r2 } = e2, n3 = this.portfolio[t2];
    u(n3, `Portfolio for the token ${t2} has not been found!`), n3.aggPerp.quantity = n3.aggPerp.quantity.plus(r2);
  }
  async findLiquidationPrice(e2) {
    let { tokenId: t2 } = e2, r2 = this.get(), n3 = r2[t2], i2 = r2[T2.BASE_TOKEN_ID];
    u(n3, `Portfolio for the token ${t2} has not been found!`);
    let { markPrice: a2, balance: o2, aggPerp: s2 } = n3, { timestamp: c3 } = await this.exchange.getLatestBlock(), u3 = c3 * 1e3, d3 = await this.evaluate({ time: u3, riskMultiplier: 1 }), l2 = Rr({ tokenPrice: a2, tokenQuantity: o2, basePositionDecimals: i2.config.positionDecimals }), h3 = R2.max(0, s2.price.minus(l2.div(s2.quantity)));
    if (d3.lt(x3.LIQUIDATION_BUFFER)) return { price: a2, balancePrice: h3 };
    async function g3(M2, Le) {
      let Mt = Le.clone();
      return Mt.perpTrueUp({ tokenId: t2, trueUpPrice: M2, updateMarkPrice: true }), Mt.evaluate({ time: u3, riskMultiplier: 1 });
    }
    let b4 = a2.times(0.01), [y3, P2] = await Promise.all([g3(a2.plus(b4), this), g3(a2.minus(b4), this)]), k2 = P2.lt(y3);
    if (P2.gte(d3) && y3.gte(d3)) return { price: R2(0), balancePrice: h3 };
    let B2 = a2, f3 = k2 ? a2.times(0.5) : a2.times(1.5);
    for (; !(await g3(f3, this)).lt(x3.LIQUIDATION_BUFFER); ) if (k2) {
      if (B2 = f3, f3 = f3.times(0.5), f3.lt(0.01)) return { price: R2(0), balancePrice: h3 };
    } else B2 = f3, f3 = f3.times(1.5);
    let N3 = k2 ? f3 : B2, j2 = k2 ? B2 : f3;
    for (; j2.minus(N3).gt(0.01); ) {
      let M2 = N3.plus(j2).div(2);
      (await g3(M2, this)).gte(x3.LIQUIDATION_BUFFER) ? k2 ? j2 = M2 : N3 = M2 : k2 ? N3 = M2 : j2 = M2;
    }
    return { price: N3.plus(j2).div(2), balancePrice: h3 };
  }
  async getHistoryRate(e2) {
    let { timeSec: t2, token: r2, aggPerp: n3 } = e2;
    return In({ currentTimeSec: t2, positionStartTimeSec: +n3.startTime / 1e3 }) ? (await this.exchange.getFundingRateHistory({ fromSec: Math.floor(+n3.startTime / 1e3), toSec: t2, tokenId: r2.tokenId })).reduce((a2, o2) => a2.plus(o2), R2(0)) : R2(0);
  }
  async evaluate(e2) {
    let { time: t2, tempAggPerp: r2, riskMultiplier: n3 = 1 } = e2, i2 = Math.floor(t2 / 1e3), a2 = await Promise.all(Object.values(this.portfolio).map(async ({ config: o2, balance: s2, markPrice: c3, aggPerp: u3, aggLend: d3 }) => {
      let l2 = x3.computeEffectiveBalance({ balance: s2, lendAgg: d3, token: o2, riskMultiplier: n3 });
      if (o2.tokenId === T2.BASE_TOKEN_ID) return l2;
      let h3 = Rr({ tokenPrice: c3, tokenQuantity: l2, basePositionDecimals: this.baseToken.positionDecimals }), { high: g3, low: b4 } = x3.calcSpotRiskBounds({ effectiveBalance: l2, base: this.baseToken, riskMultiplier: n3, baseQuantity: h3, token: o2 });
      if (u3 && !u3.quantity.isZero()) {
        let y3 = await this.getHistoryRate({ aggPerp: u3, timeSec: i2, token: o2 }), { high: P2, low: k2 } = x3.calcPerpRiskBounds({ aggPerp: u3, markPrice: c3, historyRate: y3, token: o2, base: this.baseToken, riskMultiplier: n3 });
        g3 = g3.plus(P2), b4 = b4.plus(k2);
      }
      if (r2 && r2.tokenId === o2.tokenId && !r2.quantity.isZero()) {
        let y3 = await this.getHistoryRate({ aggPerp: r2, timeSec: i2, token: o2 }), { high: P2, low: k2 } = x3.calcPerpRiskBounds({ aggPerp: r2, markPrice: c3, historyRate: y3, token: o2, base: this.baseToken, riskMultiplier: n3 });
        g3 = g3.plus(P2), b4 = b4.plus(k2);
      }
      return R2.min(g3, b4);
    }));
    return R2.sum(...a2);
  }
  static computeEffectiveBalance(e2) {
    let { balance: t2, lendAgg: r2, token: n3, riskMultiplier: i2 } = e2;
    return t2.dp(n3.positionDecimals, R2.ROUND_DOWN).minus(Xn({ lendDurationDays: T2.LEND_DURATION_DAYS, loanBorrowerQuantity: r2.borrowerQuantity, loanHighestInterestRate: r2.highestInterestRate, tokenPositionDecimals: n3.positionDecimals })).plus(Kn({ lenderHaircut: T2.LENDER_HAIRCUT, riskMultiplier: i2, loanLenderQuantity: r2.lenderQuantity }));
  }
  static calcSpotRiskBounds(e2) {
    let { effectiveBalance: t2, baseQuantity: r2, token: n3, base: i2, riskMultiplier: a2 } = e2, o2 = pr({ riskPercent: n3.riskPricePercent, riskMultiplier: a2 }) * 10, s2 = pr({ riskPercent: n3.riskSlippagePercent, riskMultiplier: a2 }) * 10, c3 = (l2) => Math.max(-p, Math.min(p, l2)), u3, d3;
    return t2.gt(0) ? (u3 = Wn({ baseQuantity: r2, riskDeltaPermille: c3(o2 - s2), basePositionDecimals: i2.positionDecimals }), d3 = Wn({ baseQuantity: r2, riskDeltaPermille: c3(-o2 - s2), basePositionDecimals: i2.positionDecimals })) : (u3 = Wn({ baseQuantity: r2, riskDeltaPermille: c3(o2 + s2), basePositionDecimals: i2.positionDecimals }), d3 = Wn({ baseQuantity: r2, riskDeltaPermille: c3(-o2 + s2), basePositionDecimals: i2.positionDecimals })), { high: u3, low: d3 };
  }
  static calcPerpRiskBounds(e2) {
    let { aggPerp: t2, markPrice: r2, historyRate: n3, token: i2, base: a2, riskMultiplier: o2 } = e2;
    if (t2.quantity.isZero()) return { high: R2(0), low: R2(0) };
    let s2 = Rr({ tokenPrice: t2.price, tokenQuantity: t2.quantity, basePositionDecimals: a2.positionDecimals }).minus(t2.owedBase), c3 = Rr({ tokenPrice: r2, tokenQuantity: t2.quantity, basePositionDecimals: a2.positionDecimals }), u3 = c3.times(100 + pr({ riskPercent: i2.riskPricePercent, riskMultiplier: o2 })).div(100), d3 = c3.times(100 - pr({ riskPercent: i2.riskPricePercent, riskMultiplier: o2 })).div(100), l2 = u3.minus(s2), h3 = d3.minus(s2), g3 = t2.owedNom.minus(t2.quantity.times(n3)), b4 = Rr({ tokenPrice: r2, tokenQuantity: g3, basePositionDecimals: a2.positionDecimals });
    return l2 = l2.plus(b4.times(R2(100 + pr({ riskPercent: i2.riskPricePercent, riskMultiplier: o2 }))).div(100)), h3 = h3.plus(b4.times(R2(100 - pr({ riskPercent: i2.riskPricePercent, riskMultiplier: o2 }))).div(100)), { high: l2, low: h3 };
  }
  async calculateLeverage(e2) {
    let { time: t2 } = e2, r2 = await this.evaluate({ time: t2 }), n3 = R2(0);
    for (let [i2, a2] of Object.entries(this.portfolio)) {
      let o2 = +i2, { balance: s2, aggLend: c3, aggPerp: u3, markPrice: d3 } = a2;
      if (!u3.quantity.isZero()) {
        let l2 = Rr({ tokenPrice: d3, tokenQuantity: u3.quantity.abs(), basePositionDecimals: this.baseToken.positionDecimals });
        n3 = n3.plus(l2);
      }
      if (o2 !== T2.BASE_TOKEN_ID) {
        if (!s2.isZero()) {
          let l2 = Rr({ tokenPrice: d3, tokenQuantity: s2, basePositionDecimals: this.baseToken.positionDecimals });
          n3 = n3.plus(l2);
        }
        if (!c3.lenderQuantity.isZero()) {
          let l2 = Rr({ tokenPrice: d3, tokenQuantity: c3.lenderQuantity, basePositionDecimals: this.baseToken.positionDecimals });
          n3 = n3.plus(l2);
        }
        if (!c3.borrowerQuantity.isZero()) {
          let l2 = Rr({ tokenPrice: d3, tokenQuantity: c3.borrowerQuantity, basePositionDecimals: this.baseToken.positionDecimals });
          n3 = n3.minus(l2);
        }
      }
    }
    return r2.lte(0) ? R2(1) : n3.div(r2);
  }
  async calculateLiquidationRisk(e2) {
    let { time: t2, nav: r2, prv: n3, valAtMax: i2 } = e2, a2 = x3.LIQUIDATION_RISK_MAX_SCORE;
    if (r2.isZero() || r2.eq(n3)) return 0;
    if (n3.lt(0)) return a2;
    if ((i2 ?? await this.evaluate({ time: t2, riskMultiplier: a2 })).gt(0)) return 0;
    let s2 = a2, c3 = 0;
    for (let h3 = 0; h3 < x3.LIQUIDATION_RISK_MAX_ITERATIONS && s2 - c3 > x3.LIQUIDATION_RISK_PRECISION; h3++) {
      let g3 = (s2 + c3) / 2;
      (await this.evaluate({ time: t2, riskMultiplier: g3 })).isPositive() ? c3 = g3 : s2 = g3;
    }
    let d3 = ((s2 + c3) / 2 - 1) / 9, l2 = (Math.sqrt(d3) + d3) * 9 / 2 + 1;
    return a2 - l2;
  }
  static async init(e2, t2) {
    let [r2, n3] = await Promise.all([e2.getAllBulkVaultTokenConfigs(), e2.getAccountId()]), i2 = await Promise.all(r2.map((a2) => Promise.all([e2.getBalance({ tokenId: a2.tokenId, accountId: n3 }, t2), e2.getAggregatedLendingPosition({ tokenId: a2.tokenId, accountId: n3 }, t2), e2.getAggregatedPerpPosition({ tokenId: a2.tokenId, accountId: n3 }, t2), e2.getTokenMarkPrice(a2, t2), Promise.resolve(a2)])));
    return new x3({ data: i2, type: "init" }, e2);
  }
};
m3(x2, "LIQUIDATION_BUFFER", R2(10)), m3(x2, "LIQUIDATION_RISK_MAX_SCORE", 10), m3(x2, "LIQUIDATION_RISK_PRECISION", 0.05), m3(x2, "LIQUIDATION_RISK_MAX_ITERATIONS", 10);
var D2 = x2;

// node_modules/@wcm-inc/sdk/dist/index.js
__reExport(index_exports, dist_exports);
import { resolveAddress as Q3 } from "ethers";
import at2 from "bignumber.js";
import _3 from "bignumber.js";
import O3 from "bignumber.js";
import { toBeHex as gt2, toBigInt as M } from "ethers";
import q3 from "bignumber.js";
import N2 from "bignumber.js";
import { BigNumber as uo } from "bignumber.js";
var w3 = class {
  static pack(e2) {
    let { address: t2, type: r2 } = e2;
    return Ee([r2, t2], this.layout);
  }
};
m3(w3, "layout", [8, 160]);
var m4 = class {
  static encodeAmountIn(e2, t2) {
    return BigInt(ze(e2, t2).toFixed());
  }
  static encodeAmountOut(e2, t2) {
    return BigInt(ze(e2, t2).toFixed());
  }
  static encodePrice(e2, t2) {
    return t2 ? BigInt(e2.times(T2.INTEREST_DIVISOR).toFixed()) : Ir(e2);
  }
  static decodeAmountIn(e2, t2) {
    return Ge(e2, t2);
  }
  static decodeAmountOut(e2, t2) {
    return Ge(e2, t2);
  }
  static decodePrice(e2, t2) {
    return t2 ? at2(e2).div(T2.INTEREST_DIVISOR) : _r(e2);
  }
};
var T3 = class {
  static unpack(e2, t2) {
    let { isLend: r2, amountInPositionDecimals: c3, amountOutPositionDecimals: i2 } = t2, [a2, o2, n3, s2] = Be(e2, this.layout);
    return { limitPrice: m4.decodePrice(s2, r2), amountOut: m4.decodeAmountOut(n3, i2), amountIn: m4.decodeAmountIn(o2, c3), orderQuantity: this.decodeOrderQuantity(a2, t2) };
  }
  static decodeOrderQuantity(e2, t2) {
    let { priceType: r2, amountInPositionDecimals: c3, amountOutPositionDecimals: i2 } = t2;
    switch (r2) {
      case 4:
      case 3:
        return m4.decodeAmountOut(e2, i2);
      case 2:
      case 1:
        return m4.decodeAmountIn(e2, c3);
    }
  }
};
m3(T3, "layout", [64, 64, 64, 64]);
var x4 = class {
  static pack(e2, t2) {
    let { amountIn: r2, amountOut: c3, price: i2 } = e2, { amountInPositionDecimals: a2, amountOutPositionDecimals: o2, isLend: n3 } = t2;
    return Ee([m4.encodeAmountIn(r2, a2), m4.encodeAmountOut(c3, o2), m4.encodePrice(i2, n3)], this.layout);
  }
  static unpack(e2, t2) {
    let [r2, c3, i2] = Be(e2, this.layout), { isLend: a2, amountInPositionDecimals: o2, amountOutPositionDecimals: n3 } = t2;
    return { price: m4.decodePrice(i2, a2), amountOut: m4.decodeAmountOut(c3, n3), amountIn: m4.decodeAmountIn(r2, o2) };
  }
};
m3(x4, "layout", [64, 64, 64]);
var E3 = class {
  constructor(e2) {
    m3(this, "contractAddress");
    m3(this, "contract");
    m3(this, "contractMethodsRunner");
    let { contractAddress: t2, provider: r2, ...c3 } = e2;
    this.contractMethodsRunner = new F2(c3), this.contract = IPriceHelperAbi__factory.connect(t2, r2), this.contractAddress = t2;
  }
  onTransaction(e2) {
    return this.contractMethodsRunner.onTransaction(e2);
  }
  async estimatePrices(e2, t2) {
    let r2 = await Q3(e2.exchangeAddress), c3 = [], i2 = [];
    for (let { spec: o2, order: n3 } of e2.batch) {
      let s2 = await Q3(o2.orderBookAddress), u3 = { amountInPositionDecimals: n3.amountInPositionDecimals, amountOutPositionDecimals: n3.amountOutPositionDecimals, isLend: o2.orderBookType === 33, priceType: o2.priceType };
      i2.push(u3);
      let p8 = w3.pack({ address: s2, type: o2.priceType }), d3 = x4.pack({ amountIn: _3(n3.amountIn), amountOut: _3(n3.amountOut), price: _3(n3.price) }, u3);
      c3.push(p8, d3);
    }
    let a2 = await this.contractMethodsRunner.view(this.contract.estimatePrices, t2, r2, c3);
    return u(e2.batch.length === a2.length, "Length of MarketOrderPrice results is wrong!"), a2.map((o2, n3) => T3.unpack(o2, i2[n3]));
  }
  async clear(e2) {
    await this.contractMethodsRunner.view(this.contract.clear, e2);
  }
};
var C3 = class {
  static pack(e2, t2) {
    let { isBuy: r2, tokenId: c3, deadline: i2, amountOutMin: a2, amountIn: o2 } = e2, { amountInPositionDecimals: n3, amountOutMinPositionDecimals: s2 } = t2;
    return Ee([r2 ? 1n : 0n, c3, i2, m4.encodeAmountOut(a2, s2), m4.encodeAmountIn(o2, n3)], this.layout);
  }
};
m3(C3, "layout", [1, 32, 64, 64, 64]);
var A3 = class {
  static pack(e2, t2) {
    let { isBuy: r2, tokenId: c3, deadline: i2, amountInMax: a2, amountOut: o2 } = e2, { amountOutPositionDecimals: n3, amountInMaxPositionDecimals: s2 } = t2;
    return Ee([r2 ? 1n : 0n, c3, i2, m4.encodeAmountIn(a2, s2), m4.encodeAmountOut(o2, n3)], this.layout);
  }
};
m3(A3, "layout", [1, 32, 64, 64, 64]);
var X2 = { fee: 0n, recipient: gt2(0n, 20), sqrtPriceLimitX96: 0n };
var S2 = class {
  constructor(e2) {
    m3(this, "contractAddress");
    m3(this, "contract");
    m3(this, "contractMethodsRunner");
    m3(this, "exchange");
    let { contractAddress: t2, exchange: r2, ...c3 } = e2;
    this.contractMethodsRunner = new F2(c3), this.contract = ISwapRouterAbi__factory.connect(t2, r2.provider), this.contractAddress = t2, this.exchange = r2;
  }
  onTransaction(e2) {
    return this.contractMethodsRunner.onTransaction(e2);
  }
  async exactInputSingle(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountIn: a2, amountOutMin: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 });
    return this.contractMethodsRunner.tx(this.getContractWithSigner().exactInputSingle, this.getTxContext(this.exactInputSingle.name), t2, { tokenIn: r2, tokenOut: c3, deadline: i2, amountIn: m4.encodeAmountIn(O3(a2), n3.erc20Decimals), amountOutMinimum: m4.encodeAmountOut(O3(o2), s2.erc20Decimals), ...X2 });
  }
  async exactOutputSingle(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountOut: a2, amountInMax: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 });
    return this.contractMethodsRunner.tx(this.getContractWithSigner().exactOutputSingle, this.getTxContext(this.exactOutputSingle.name), t2, { tokenIn: r2, tokenOut: c3, deadline: i2, amountOut: m4.encodeAmountOut(O3(a2), s2.erc20Decimals), amountInMaximum: m4.encodeAmountIn(O3(o2), n3.erc20Decimals), ...X2 });
  }
  async swapByAmountInViaMinOut(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountIn: a2, amountOutMin: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2, isBuy: u3, tokenId: p8 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 }), d3 = C3.pack({ isBuy: u3, tokenId: p8, deadline: M(i2), amountIn: O3(a2), amountOutMin: O3(o2) }, { amountInPositionDecimals: n3.positionDecimals, amountOutMinPositionDecimals: s2.positionDecimals });
    return this.contractMethodsRunner.tx(this.getContractWithSigner().swapByAmountInViaMinOut, this.getTxContext(this.swapByAmountInViaMinOut.name), t2, d3);
  }
  async swapByAmountOutViaMaxIn(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountOut: a2, amountInMax: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2, isBuy: u3, tokenId: p8 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 }), d3 = A3.pack({ isBuy: u3, tokenId: p8, deadline: M(i2), amountOut: O3(a2), amountInMax: O3(o2) }, { amountOutPositionDecimals: s2.positionDecimals, amountInMaxPositionDecimals: n3.positionDecimals });
    return this.contractMethodsRunner.tx(this.getContractWithSigner().swapByAmountOutViaMaxIn, this.getTxContext(this.swapByAmountOutViaMaxIn.name), t2, d3);
  }
  async getPriceByAmountIn(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountIn: a2, amountOutMin: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2, isBuy: u3, tokenId: p8 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 }), d3 = C3.pack({ isBuy: u3, tokenId: p8, deadline: M(i2), amountIn: O3(a2), amountOutMin: O3(o2) }, { amountInPositionDecimals: n3.positionDecimals, amountOutMinPositionDecimals: s2.positionDecimals }), g3 = await this.contractMethodsRunner.view(this.contract.priceByAmountIn, t2, d3);
    return T3.unpack(g3, { priceType: u3 ? 4 : 1, amountOutPositionDecimals: s2.positionDecimals, amountInPositionDecimals: n3.positionDecimals, isLend: false });
  }
  async getPriceByAmountOut(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, deadline: i2, amountOut: a2, amountInMax: o2 } = e2, { tokenInConfig: n3, tokenOutConfig: s2, isBuy: u3, tokenId: p8 } = await this.getSwapConfig({ tokenIn: r2, tokenOut: c3 }), d3 = A3.pack({ isBuy: u3, tokenId: p8, deadline: M(i2), amountOut: O3(a2), amountInMax: O3(o2) }, { amountOutPositionDecimals: s2.positionDecimals, amountInMaxPositionDecimals: n3.positionDecimals }), g3 = await this.contractMethodsRunner.view(this.contract.priceByAmountOut, t2, d3);
    return T3.unpack(g3, { priceType: u3 ? 2 : 3, amountInPositionDecimals: n3.positionDecimals, amountOutPositionDecimals: s2.positionDecimals, isLend: false });
  }
  async getSwapConfig(e2) {
    let { tokenIn: t2, tokenOut: r2 } = e2, [c3, i2] = await Promise.all([this.exchange.getTokenConfig({ erc20: t2 }), this.exchange.getTokenConfig({ erc20: r2 })]), a2 = c3.tokenId === T2.BASE_TOKEN_ID, o2 = a2 ? i2.tokenId : c3.tokenId;
    return { tokenInConfig: c3, tokenOutConfig: i2, tokenId: o2, isBuy: a2 };
  }
  getContractWithSigner() {
    return this.contract.connect(this.exchange.getSigner(true));
  }
  getTxContext(e2) {
    return { source: "SwapRouter", fn: e2 };
  }
};
var V3 = ((t2) => (t2.DIRECT = "DIRECT", t2.TWO_HOP = "TWO_HOP", t2))(V3 || {});
var b3 = class {
  static createSwapExactInBatch(e2) {
    let { orderBookAddress: t2, tokenInConfig: r2, tokenOutConfig: c3, amountIn: i2, markPrice: a2, isBuy: o2 } = e2, n3 = o2 ? 4 : 1, s2 = o2 ? i2.dividedBy(a2) : i2.multipliedBy(a2);
    return [{ spec: { orderBookAddress: t2, orderBookType: 11, priceType: n3 }, order: { amountIn: i2, amountInPositionDecimals: r2.positionDecimals, amountOut: s2, amountOutPositionDecimals: c3.positionDecimals, price: a2 } }];
  }
  static createSwapExactOutBatch(e2) {
    let { orderBookAddress: t2, tokenInConfig: r2, tokenOutConfig: c3, amountOut: i2, markPrice: a2, isBuy: o2 } = e2, n3 = o2 ? 2 : 3, s2 = o2 ? i2.multipliedBy(a2) : i2.dividedBy(a2);
    return [{ spec: { orderBookAddress: t2, orderBookType: 11, priceType: n3 }, order: { amountIn: s2, amountInPositionDecimals: r2.positionDecimals, amountOut: i2, amountOutPositionDecimals: c3.positionDecimals, price: a2 } }];
  }
};
var I2 = class {
  static calculateEffectivePrice(e2, t2) {
    return t2.isZero() ? q3(0) : e2.div(t2);
  }
  static calculatePriceImpact(e2, t2) {
    return q3(1).minus(e2.div(t2)).abs().multipliedBy(100);
  }
};
var U2 = class {
  constructor(e2) {
    m3(this, "exchange");
    m3(this, "swapRouter");
    m3(this, "priceHelper");
    m3(this, "deadline");
    let { priceHelperContractAddress: t2, swapRouterContractAddress: r2, exchange: c3, deadline: i2 } = e2;
    this.swapRouter = new S2({ contractAddress: r2, exchange: c3 }), this.priceHelper = new E3({ contractAddress: t2, provider: c3.provider }), this.exchange = c3, this.deadline = i2;
  }
  async getRouteForExactInput(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, amountIn: i2 } = e2, { routeType: a2, tokenInConfig: o2, tokenOutConfig: n3 } = await this.getRouteConfig({ tokenIn: r2, tokenOut: c3 });
    switch (a2) {
      case "DIRECT": {
        let { nonBaseMarkPrice: s2, nonBaseSpotOrderBook: u3, isBuy: p8 } = await this.getDirectSwapConfig({ tokenInConfig: o2, tokenOutConfig: n3 }, t2), d3 = b3.createSwapExactInBatch({ amountIn: N2(i2), tokenInConfig: o2, tokenOutConfig: n3, isBuy: p8, orderBookAddress: u3.address, markPrice: s2 }), [g3] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: d3 }, t2), k2 = await this.getDirectQuote({ tokenInConfig: o2, tokenOutConfig: n3, estimate: g3, quoteType: "EXACT_INPUT" }, t2);
        return { type: a2, path: [o2, n3], batch: d3, quote: k2, tokenInConfig: o2, tokenOutConfig: n3 };
      }
      case "TWO_HOP": {
        let { baseTokenConfig: s2, tokenInMarkPrice: u3, tokenOutMarkPrice: p8, tokenInSpotOrderBook: d3, tokenOutSpotOrderBook: g3 } = await this.getTwoHopSwapConfig({ tokenInConfig: o2, tokenOutConfig: n3 }, t2), k2 = b3.createSwapExactInBatch({ amountIn: N2(i2), markPrice: u3, orderBookAddress: d3.address, tokenInConfig: o2, tokenOutConfig: s2, isBuy: false }), [y3] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: k2 }, t2), f3 = b3.createSwapExactInBatch({ amountIn: y3.amountOut, markPrice: p8, orderBookAddress: g3.address, tokenInConfig: s2, tokenOutConfig: n3, isBuy: true }), [B2] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: f3 }, t2), v5 = await this.getTwoHopQuote({ tokenInConfig: o2, tokenOutConfig: n3, baseTokenConfig: s2, firstHopEstimate: y3, secondHopEstimate: B2, quoteType: "EXACT_INPUT" }, t2);
        return { type: a2, path: [o2, s2, n3], batch: [...k2, ...f3], quote: v5, tokenInConfig: o2, tokenOutConfig: n3 };
      }
    }
  }
  async getRouteForExactOutput(e2, t2) {
    let { tokenIn: r2, tokenOut: c3, amountOut: i2 } = e2, { tokenInConfig: a2, tokenOutConfig: o2, routeType: n3 } = await this.getRouteConfig({ tokenIn: r2, tokenOut: c3 });
    switch (n3) {
      case "DIRECT": {
        let { nonBaseMarkPrice: s2, nonBaseSpotOrderBook: u3, isBuy: p8 } = await this.getDirectSwapConfig({ tokenInConfig: a2, tokenOutConfig: o2 }, t2), d3 = b3.createSwapExactOutBatch({ orderBookAddress: u3.address, tokenInConfig: a2, tokenOutConfig: o2, markPrice: s2, amountOut: N2(i2), isBuy: p8 }), [g3] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: d3 }, t2), k2 = await this.getDirectQuote({ tokenInConfig: a2, tokenOutConfig: o2, estimate: g3, quoteType: "EXACT_OUTPUT" }, t2);
        return { type: n3, path: [a2, o2], batch: d3, quote: k2, tokenInConfig: a2, tokenOutConfig: o2 };
      }
      case "TWO_HOP": {
        let { baseTokenConfig: s2, tokenInMarkPrice: u3, tokenInSpotOrderBook: p8, tokenOutMarkPrice: d3, tokenOutSpotOrderBook: g3 } = await this.getTwoHopSwapConfig({ tokenInConfig: a2, tokenOutConfig: o2 }, t2), k2 = b3.createSwapExactOutBatch({ tokenInConfig: s2, tokenOutConfig: o2, amountOut: N2(i2), markPrice: d3, orderBookAddress: g3.address, isBuy: true }), [y3] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: k2 }, t2), f3 = b3.createSwapExactOutBatch({ tokenInConfig: a2, tokenOutConfig: s2, amountOut: y3.amountIn, markPrice: u3, orderBookAddress: p8.address, isBuy: false }), [B2] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: f3 }, t2), v5 = await this.getTwoHopQuote({ tokenInConfig: a2, tokenOutConfig: o2, baseTokenConfig: s2, firstHopEstimate: B2, secondHopEstimate: y3, quoteType: "EXACT_OUTPUT" }, t2);
        return { type: n3, path: [a2, s2, o2], batch: [...f3, ...k2], quote: v5, tokenInConfig: a2, tokenOutConfig: o2 };
      }
    }
  }
  async executeSwap(e2) {
    let { route: t2, options: r2 } = e2, { type: c3, path: i2, batch: a2, quote: o2 } = t2;
    switch (c3) {
      case "DIRECT": {
        let [n3, s2] = i2, [{ amountIn: u3, amountOut: p8 }] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: a2 });
        switch (await (await this.exchange.getERC20({ erc20: n3.tokenAddress })).approve({ amount: u3.toFixed(), spender: this.swapRouter.contractAddress }), o2.type) {
          case "EXACT_INPUT":
            return this.swapRouter.exactInputSingle({ amountIn: u3, amountOutMin: p8, tokenIn: n3.tokenAddress, tokenOut: s2.tokenAddress, deadline: this.deadline }, r2);
          case "EXACT_OUTPUT":
            return this.swapRouter.exactOutputSingle({ amountInMax: u3, amountOut: p8, tokenIn: n3.tokenAddress, tokenOut: s2.tokenAddress, deadline: this.deadline }, r2);
        }
        break;
      }
      case "TWO_HOP": {
        let [n3, s2, u3] = i2, [p8, d3] = await this.priceHelper.estimatePrices({ exchangeAddress: this.exchange.address, batch: a2 });
        await (await this.exchange.getERC20({ erc20: n3.tokenAddress })).approve({ amount: p8.amountIn.toFixed(), spender: this.swapRouter.contractAddress });
        let k2 = await this.exchange.getERC20({ erc20: s2.tokenAddress }), y3 = await k2.getBalance();
        switch (o2.type) {
          case "EXACT_INPUT": {
            await this.swapRouter.swapByAmountInViaMinOut({ amountIn: p8.amountIn, amountOutMin: p8.amountOut, tokenIn: n3.tokenAddress, tokenOut: s2.tokenAddress, deadline: this.deadline }, r2);
            let B2 = (await k2.getBalance()).minus(y3);
            return await k2.approve({ amount: B2.toFixed(), spender: this.swapRouter.contractAddress }), this.swapRouter.swapByAmountInViaMinOut({ amountIn: B2, amountOutMin: d3.amountOut, tokenIn: s2.tokenAddress, tokenOut: u3.tokenAddress, deadline: this.deadline }, r2);
          }
          case "EXACT_OUTPUT": {
            await this.swapRouter.swapByAmountOutViaMaxIn({ amountInMax: p8.amountIn, amountOut: p8.amountOut, tokenIn: n3.tokenAddress, tokenOut: s2.tokenAddress, deadline: this.deadline }, r2);
            let B2 = (await k2.getBalance()).minus(y3);
            return await k2.approve({ amount: B2.toFixed(), spender: this.swapRouter.contractAddress }), this.swapRouter.swapByAmountOutViaMaxIn({ amountInMax: B2, amountOut: d3.amountOut, tokenIn: s2.tokenAddress, tokenOut: u3.tokenAddress, deadline: this.deadline }, r2);
          }
        }
      }
    }
  }
  async getDirectQuote(e2, t2) {
    let { quoteType: r2, tokenInConfig: c3, tokenOutConfig: i2, estimate: a2 } = e2, o2;
    switch (r2) {
      case "EXACT_INPUT":
        o2 = await this.swapRouter.getPriceByAmountIn({ tokenIn: c3.tokenAddress, tokenOut: i2.tokenAddress, amountIn: a2.amountIn, amountOutMin: a2.amountOut, deadline: this.deadline }, t2);
        break;
      case "EXACT_OUTPUT":
        o2 = await this.swapRouter.getPriceByAmountOut({ tokenIn: c3.tokenAddress, tokenOut: i2.tokenAddress, amountInMax: a2.amountIn, amountOut: a2.amountOut, deadline: this.deadline }, t2);
    }
    let n3 = I2.calculateEffectivePrice(o2.amountOut, o2.amountIn), s2 = I2.calculatePriceImpact(n3, o2.limitPrice);
    return { amountIn: o2.amountIn, amountOut: o2.amountOut, priceImpact: s2, hops: 1, effectivePrice: n3, type: r2 };
  }
  async getTwoHopQuote(e2, t2) {
    let { quoteType: r2, tokenInConfig: c3, tokenOutConfig: i2, baseTokenConfig: a2, firstHopEstimate: o2, secondHopEstimate: n3 } = e2, s2;
    switch (r2) {
      case "EXACT_INPUT":
        s2 = await this.swapRouter.getPriceByAmountIn({ tokenIn: c3.tokenAddress, tokenOut: a2.tokenAddress, amountIn: o2.amountIn, amountOutMin: o2.amountOut, deadline: this.deadline }, t2);
        break;
      case "EXACT_OUTPUT":
        s2 = await this.swapRouter.getPriceByAmountOut({ tokenIn: c3.tokenAddress, tokenOut: a2.tokenAddress, amountInMax: o2.amountIn, amountOut: o2.amountOut, deadline: this.deadline }, t2);
    }
    let u3;
    switch (r2) {
      case "EXACT_INPUT":
        u3 = await this.swapRouter.getPriceByAmountIn({ tokenIn: a2.tokenAddress, tokenOut: i2.tokenAddress, amountIn: n3.amountIn, amountOutMin: n3.amountOut, deadline: this.deadline }, t2);
        break;
      case "EXACT_OUTPUT":
        u3 = await this.swapRouter.getPriceByAmountOut({ tokenIn: a2.tokenAddress, tokenOut: i2.tokenAddress, amountInMax: n3.amountIn, amountOut: n3.amountOut, deadline: this.deadline }, t2);
    }
    let p8 = I2.calculateEffectivePrice(u3.amountOut, s2.amountIn), d3 = I2.calculateEffectivePrice(s2.amountOut, s2.amountIn), g3 = I2.calculatePriceImpact(d3, s2.limitPrice), k2 = I2.calculateEffectivePrice(u3.amountOut, u3.amountOut), y3 = I2.calculatePriceImpact(k2, u3.limitPrice), f3 = g3.plus(y3);
    return { amountIn: s2.amountIn, amountOut: u3.amountOut, priceImpact: f3, hops: 2, effectivePrice: p8, type: r2 };
  }
  async getRouteConfig(e2, t2) {
    let { tokenIn: r2, tokenOut: c3 } = e2, [i2, a2] = await Promise.all([this.exchange.getTokenConfig({ erc20: r2 }, t2), this.exchange.getTokenConfig({ erc20: c3 }, t2)]), o2 = i2.tokenId === T2.BASE_TOKEN_ID, n3 = a2.tokenId === T2.BASE_TOKEN_ID;
    u(!(o2 && n3), "Cannot swap Base to Base");
    let s2 = "DIRECT";
    return !o2 && !n3 && (s2 = "TWO_HOP"), { tokenInConfig: i2, tokenOutConfig: a2, routeType: s2 };
  }
  async getDirectSwapConfig(e2, t2) {
    let { tokenInConfig: r2, tokenOutConfig: c3 } = e2, i2 = r2.tokenId === T2.BASE_TOKEN_ID, a2 = i2 ? c3.tokenId : r2.tokenId, [o2, n3] = await Promise.all([this.exchange.getTokenMarkPrice({ tokenId: a2 }, t2), this.exchange.getSpotOrderBook(a2, T2.BASE_TOKEN_ID)]);
    return u(n3, "NonBaseSpotOrderBook is not available!"), { nonBaseMarkPrice: o2, nonBaseSpotOrderBook: n3, isBuy: i2 };
  }
  async getTwoHopSwapConfig(e2, t2) {
    let { tokenInConfig: r2, tokenOutConfig: c3 } = e2, [i2, a2, o2] = await Promise.all([this.exchange.getBaseTokenConfig(t2), this.exchange.getTokenMarkPrice({ tokenId: r2.tokenId }, t2), this.exchange.getTokenMarkPrice({ tokenId: c3.tokenId }, t2)]), [n3, s2] = await Promise.all([this.exchange.getSpotOrderBook(r2.tokenId, i2.tokenId), this.exchange.getSpotOrderBook(c3.tokenId, i2.tokenId)]);
    return u(n3, "TokenIn SpotOrderBook is not available!"), u(s2, "TokenOut SpotOrderBook is not available!"), { baseTokenConfig: i2, tokenInMarkPrice: a2, tokenOutMarkPrice: o2, tokenInSpotOrderBook: n3, tokenOutSpotOrderBook: s2 };
  }
};
export {
  K as $enum,
  Ie2 as AggregatedLendingPosition,
  Ee2 as AggregatedPerpPosition,
  uo as BigNumber,
  Ce as BulkAggregatedLendingPosition,
  re as BulkVaultTokenConfig,
  Y as DUST_THRESHOLD_BASE,
  ee2 as ERC20,
  w as EventEmitter,
  T2 as Exchange,
  Vn as FUNDING_INTERVAL_SEC,
  pe as FundingRateStats,
  Tt2 as GaapFund,
  Oe as InMemoryPersistor,
  xe as LendFeeSchedule,
  q2 as LendMatch,
  he as LendOrderBook,
  _2 as LendingPosition,
  L2 as Listener,
  X as MAX_RISK_PERCENT,
  W as MIN_LENDER_RETENTION,
  we as MarkPriceConfig,
  K2 as OrderBookType,
  te as OrderType,
  p as PERMILLE_SCALE,
  g as PRICE_OR_RATE_PRECISION,
  ge as PerpOrderBook,
  ue as PerpPosition,
  Be2 as PerpTrueUp,
  D2 as Portfolio,
  R as PromiseQueue,
  V3 as RouteType,
  ke as SIXTEEN_BIT_MASK,
  Ne as SIXTY_FOUR_BIT_MASK,
  le2 as SpotOrderBook,
  U2 as SwapAggregator,
  I2 as SwapQuote,
  b3 as SwapRoute,
  S2 as SwapRouter,
  ye as THIRTY_TWO_BIT_MASK,
  Ht as TokenType,
  fe as TransactionError,
  Q2 as VaultTokenConfig,
  yn as alignToLotQuantity,
  Kn as applyLenderHaircut,
  Wn as applyRiskAdjustment,
  zn as calcAssetRisk,
  Xn as calcBorrowerObligation,
  E as calcBuyFee,
  er as calcNav,
  On as calcPerpAmountOwed,
  ce as calcRts22TradeId,
  h as calcSellFee,
  or as calcShockPrice,
  cn as calcSpotOrderFee,
  ee as calcTwoHopFee,
  an as clampPriceOrRatePrecision,
  xn as clampQuantityPrecision,
  Br as convertBaseToToken,
  Rr as convertTokenToBase,
  se as createAsyncIterator,
  ae as debounce,
  kt as decodeFloat27E4,
  _r as decodePrice,
  bt as decodeSign,
  U as deepOmit,
  _t as duration,
  Ir as encodePrice,
  In as hasPerpElapsedFundingInterval,
  ut as iife,
  u as invariant,
  Ie as isBoolean,
  $e as isDivisible,
  ur as isDust,
  N as isEqual,
  _e as isFunction,
  ne as isMegaETH,
  De as isNumber,
  jt as isWebSocketUrl,
  mt as match,
  j as merge,
  m as nbitmask,
  wt as omit,
  Ee as pack,
  ze as scale,
  pr as scaleRiskCapped,
  le as sleep,
  Nt as toUnsigned160,
  dt as toUnsigned32,
  Tt as toUnsigned8,
  Be as unpack,
  yt as unpackFundParams,
  Ge as unscale,
  jt2 as waitForTransaction
};
/*! Bundled license information:

@composite/abi/generated/index.js:
  (*! Bundled license information:
  
  @noble/hashes/esm/utils.js:
    (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  *)
*/
