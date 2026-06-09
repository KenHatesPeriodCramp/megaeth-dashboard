from __future__ import annotations

import base64
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import pandas as pd
import plotly.graph_objects as go
import streamlit as st

from dashboard.config import load_settings
from dashboard.data import (
    SYMBOLS,
    DashboardDataError,
    fetch_history,
    fetch_positions,
    filter_time_range,
    latest_by_symbol,
)
from dashboard.style import CSS


COLORS = {
    "ETH": "#ff9f95",
    "BTC": "#00ef43",
    "SOL": "#e9c2a0",
    "MEGA": "#5a9cff",
}

_LOGO_PATH = Path(__file__).parent / "assets" / "logo.png"


def _logo_img_tag() -> str:
    if not _LOGO_PATH.exists():
        return ""
    data = base64.b64encode(_LOGO_PATH.read_bytes()).decode()
    return (
        f'<img src="data:image/png;base64,{data}" '
        'style="height:40px;border-radius:4px;margin-right:14px;vertical-align:middle;">'
    )


st.set_page_config(
    page_title="Funding Rate Arb",
    page_icon="◆",
    layout="wide",
)
st.markdown(CSS, unsafe_allow_html=True)
settings = load_settings()


@st.cache_data(ttl=60, show_spinner=False)
def load_history() -> pd.DataFrame:
    return fetch_history(
        settings.history_api_url,
        settings.history_api_key,
        settings.history_limit,
    )


def signed(value: Any, digits: int = 2, suffix: str = "") -> str:
    if value is None or pd.isna(value):
        return "N/A"
    return f"{float(value):+,.{digits}f}{suffix}"


def money(value: Any) -> str:
    if value is None or pd.isna(value):
        return "N/A"
    return f"${float(value):+,.2f}"


def plain_money(value: Any) -> str:
    if value is None or pd.isna(value):
        return "N/A"
    return f"${float(value):,.2f}"


def _hedge_html(hedge: dict[str, str | None] | None) -> str:
    if hedge is None:
        return ""
    world_side = hedge.get("world")
    gmx_side = hedge.get("gmx")
    if not world_side and not gmx_side:
        return '<div class="hedge-status none">NO POSITION</div>'
    hedged = world_side == "long" and gmx_side == "short"
    cls = "active" if hedged else "partial"
    w = f"W:{world_side.upper()}" if world_side else "W:—"
    g = f"G:{gmx_side.upper()}" if gmx_side else "G:—"
    return f'<div class="hedge-status {cls}">{w} · {g}</div>'


def compute_hedge_status(
    payload: dict[str, Any],
) -> dict[str, dict[str, str | None]]:
    status: dict[str, dict[str, str | None]] = {
        sym: {"world": None, "gmx": None} for sym in SYMBOLS
    }
    for pos in payload.get("positions", []):
        sym = str(pos.get("symbol", "")).upper()
        venue = str(pos.get("venue", "")).lower()
        side = str(pos.get("side", "")).lower()
        if sym in status and venue in ("world", "gmx"):
            status[sym][venue] = side
    return status


def compute_pnl_summary(
    payload: dict[str, Any],
) -> tuple[float | None, float | None]:
    total_pnl = total_funding = 0.0
    has_data = False
    for pos in payload.get("positions", []):
        pnl = pos.get("pnlUsd")
        fund = pos.get("fundingUsd")
        if pnl is not None:
            try:
                total_pnl += float(pnl)
                has_data = True
            except (TypeError, ValueError):
                pass
        if fund is not None:
            try:
                total_funding += float(fund)
            except (TypeError, ValueError):
                pass
    return (total_pnl, total_funding) if has_data else (None, None)


def render_pair_card(
    symbol: str,
    row: dict[str, Any] | None,
    hedge: dict[str, str | None] | None = None,
) -> None:
    h = _hedge_html(hedge)
    if not row:
        st.markdown(
            f"""
            <div class="pair-card">
              <div class="terminal-label">{symbol}/USD</div>
              <div class="metric-value neutral">N/A</div>
              <div class="metric-detail">WAITING FOR DATA</div>
              {h}
            </div>
            """,
            unsafe_allow_html=True,
        )
        return

    gross = row.get("gross_spread")
    positive = gross is not None and not pd.isna(gross) and gross >= 0
    state = "positive" if positive else "negative"
    card_state = "" if positive else "negative"
    st.markdown(
        f"""
        <div class="pair-card {card_state}">
          <div class="terminal-label">{symbol}/USD</div>
          <div class="metric-value {state}">{signed(gross, suffix="%")} <small>APR</small></div>
          <div class="metric-detail">
            WORLD LONG: {signed(row.get("world_apr"), suffix="%")}<br/>
            GMX SHORT: {signed(row.get("gmx_apr"), suffix="%")}
          </div>
          {h}
        </div>
        """,
        unsafe_allow_html=True,
    )


def positions_frame(payload: dict[str, Any]) -> pd.DataFrame:
    positions = payload.get("positions", [])
    if not positions:
        return pd.DataFrame()
    frame = pd.DataFrame(positions)
    columns = {
        "venue": "VENUE",
        "symbol": "PAIR",
        "side": "SIDE",
        "quantity": "SIZE",
        "notionalUsd": "NOTIONAL",
        "entryPrice": "ENTRY PRICE",
        "markPrice": "MARK PRICE",
        "liquidationPrice": "LIQ PRICE",
        "collateralUsd": "COLLATERAL",
        "pnlUsd": "PNL",
        "fundingUsd": "FUNDING",
        "openedAt": "OPENED",
    }
    for key in columns:
        if key not in frame:
            frame[key] = None
    frame = frame[list(columns)].rename(columns=columns)
    frame["VENUE"] = frame["VENUE"].str.upper()
    frame["PAIR"] = frame["PAIR"] + "/USD"
    frame["SIDE"] = frame["SIDE"].str.upper()
    frame["SIZE"] = frame["SIZE"].map(
        lambda value: f"{float(value):,.6f}" if pd.notna(value) else "N/A"
    )
    for column in (
        "NOTIONAL",
        "ENTRY PRICE",
        "MARK PRICE",
        "LIQ PRICE",
        "COLLATERAL",
    ):
        frame[column] = frame[column].map(plain_money)
    frame["PNL"] = frame["PNL"].map(money)
    frame["FUNDING"] = frame["FUNDING"].map(money)
    frame["OPENED"] = frame["OPENED"].fillna("N/A")
    return frame


def style_positions(frame: pd.DataFrame) -> Any:
    def _side(val: str) -> str:
        if val == "LONG":
            return "color: #00ef43; font-weight: 600"
        if val == "SHORT":
            return "color: #ff8f85; font-weight: 600"
        return ""

    def _signed_usd(val: str) -> str:
        if not isinstance(val, str) or val == "N/A":
            return ""
        if val.startswith("+$"):
            return "color: #00ef43"
        if val.startswith("-$"):
            return "color: #ff8f85"
        return ""

    styled = frame.style
    if "SIDE" in frame.columns:
        styled = styled.map(_side, subset=["SIDE"])
    for col in ("PNL", "FUNDING"):
        if col in frame.columns:
            styled = styled.map(_signed_usd, subset=[col])
    return styled


def spread_chart(frame: pd.DataFrame, time_range: str) -> go.Figure:
    filtered = filter_time_range(frame, time_range)
    figure = go.Figure()

    # Compute data-driven y range so shading never distorts the axis scale
    y_vals = filtered["gross_spread"].dropna()
    if len(y_vals) > 0:
        y_min, y_max = float(y_vals.min()), float(y_vals.max())
        pad = max((y_max - y_min) * 0.12, 2.0)
        y_lo, y_hi = y_min - pad, y_max + pad
    else:
        y_lo, y_hi = -50.0, 50.0

    if y_hi > 0:
        figure.add_hrect(
            y0=0, y1=y_hi,
            fillcolor="rgba(0,239,67,0.05)",
            line_width=0,
            layer="below",
        )
    if y_lo < 0:
        figure.add_hrect(
            y0=y_lo, y1=0,
            fillcolor="rgba(255,143,133,0.05)",
            line_width=0,
            layer="below",
        )

    for symbol in SYMBOLS:
        rows = filtered[filtered["symbol"] == symbol]
        figure.add_trace(
            go.Scatter(
                x=rows["time_utc"],
                y=rows["gross_spread"],
                mode="lines",
                name=symbol,
                line={"color": COLORS[symbol], "width": 2},
                connectgaps=False,
                hovertemplate=(
                    f"{symbol}<br>%{{x|%Y-%m-%d %H:%M UTC}}"
                    "<br>Gross: %{y:+.2f}%<extra></extra>"
                ),
            )
        )
    figure.add_hline(y=0, line_color="#526055", line_width=1)
    figure.update_layout(
        height=430,
        margin={"l": 20, "r": 20, "t": 40, "b": 20},
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="#0a0d0b",
        font={"family": "JetBrains Mono", "color": "#e6ece4", "size": 11},
        hovermode="x unified",
        legend={
            "orientation": "h",
            "y": 1.08,
            "x": 1,
            "xanchor": "right",
            "bgcolor": "rgba(10,13,11,0.88)",
            "bordercolor": "rgba(113,151,101,0.3)",
            "borderwidth": 1,
            "font": {"color": "#e6ece4", "size": 11},
        },
        xaxis={
            "showgrid": True,
            "gridcolor": "rgba(126,150,120,.12)",
            "title": None,
        },
        yaxis={
            "showgrid": True,
            "gridcolor": "rgba(126,150,120,.12)",
            "title": "GROSS SPREAD APR (%)",
            "ticksuffix": "%",
            "range": [y_lo, y_hi],
        },
    )
    return figure


st.markdown(
    f"""
    <div class="topline">
      <div class="brand-row">
        {_logo_img_tag()}
        <div class="brand">FUNDING_RATE_ARB</div>
      </div>
      <div class="live-chip"><span class="live-dot"></span>READ ONLY / LIVE</div>
    </div>
    """,
    unsafe_allow_html=True,
)

with st.sidebar:
    st.header("Dashboard")
    time_range = st.selectbox(
        "Chart range",
        ("6H", "24H", "48H", "7D", "All"),
        index=1,
    )
    st.caption("Fixed strategy: long World / short GMX")
    st.code("gross = GMX APR - World APR", language=None)
    st.caption(f"Refresh interval: {settings.refresh_seconds}s")
    if st.button("Refresh history now", use_container_width=True):
        load_history.clear()


@st.fragment(run_every=f"{settings.refresh_seconds}s")
def live_dashboard() -> None:
    history_error = None
    position_error = None
    try:
        history = load_history()
    except (DashboardDataError, ValueError) as exc:
        history = pd.DataFrame()
        history_error = str(exc)

    try:
        position_payload = fetch_positions(settings.position_api_url)
    except DashboardDataError as exc:
        position_payload = {"positions": [], "errors": {}}
        position_error = str(exc)

    latest = latest_by_symbol(history)
    hedge_status = compute_hedge_status(position_payload)

    card_columns = st.columns(4)
    for column, symbol in zip(card_columns, SYMBOLS):
        with column:
            render_pair_card(symbol, latest.get(symbol), hedge_status.get(symbol))

    newest = history["time_utc"].max() if not history.empty else None
    adapter_time = position_payload.get("timestamp")
    freshness = (
        newest.strftime("%Y-%m-%d %H:%M:%S UTC")
        if newest is not None and pd.notna(newest)
        else "N/A"
    )
    st.markdown(
        (
            '<div class="info-strip">'
            f"HISTORY: {freshness} &nbsp; | &nbsp; "
            f"POSITIONS: {adapter_time or 'N/A'} &nbsp; | &nbsp; "
            f"WALLET: {position_payload.get('wallet', 'N/A')}"
            "</div>"
        ),
        unsafe_allow_html=True,
    )

    if history_error:
        st.error(history_error)
    if position_error:
        st.warning(position_error)
    for venue, error in position_payload.get("errors", {}).items():
        if error:
            st.warning(f"{venue.upper()} position read failed: {error}")

    st.markdown(
        '<div class="section-title"><span>▰</span>LIVE_POSITIONS</div>',
        unsafe_allow_html=True,
    )
    positions = positions_frame(position_payload)
    if positions.empty:
        st.info("No confirmed World or GMX positions found.")
    else:
        st.dataframe(
            style_positions(positions),
            hide_index=True,
            use_container_width=True,
            height=min(500, 42 + len(positions) * 36),
        )

        total_pnl, total_funding = compute_pnl_summary(position_payload)
        if total_pnl is not None:
            total_net = total_pnl + (total_funding or 0.0)

            def _cls(v: float) -> str:
                return "val-pos" if v > 0 else ("val-neg" if v < 0 else "val-neutral")

            st.markdown(
                f"""
                <div class="pnl-strip">
                  <span><span class="label">UNREALIZED PNL </span>
                        <span class="{_cls(total_pnl)}">{money(total_pnl)}</span></span>
                  <span><span class="label">FUNDING ACCRUED </span>
                        <span class="{_cls(total_funding or 0)}">{money(total_funding)}</span></span>
                  <span><span class="label">NET </span>
                        <span class="{_cls(total_net)}">{money(total_net)}</span></span>
                </div>
                """,
                unsafe_allow_html=True,
            )

        with st.expander("Raw position details"):
            st.json(position_payload.get("positions", []))

    st.markdown(
        '<div class="section-title"><span>▥</span>HISTORICAL_GROSS_SPREAD</div>',
        unsafe_allow_html=True,
    )
    if history.empty:
        st.info("Historical spread data is unavailable.")
    else:
        st.plotly_chart(
            spread_chart(history, time_range),
            use_container_width=True,
            config={"displayModeBar": False},
        )

    st.caption(
        "Positive gross spread means the fixed long-World / short-GMX direction "
        "earns funding before fees. Last dashboard render: "
        + datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    )


live_dashboard()
