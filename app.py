from __future__ import annotations

from datetime import datetime, timezone
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


def render_pair_card(symbol: str, row: dict[str, Any] | None) -> None:
    if not row:
        st.markdown(
            f"""
            <div class="pair-card">
              <div class="terminal-label">{symbol}/USD</div>
              <div class="metric-value neutral">N/A</div>
              <div class="metric-detail">WAITING FOR DATA</div>
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


def spread_chart(frame: pd.DataFrame, time_range: str) -> go.Figure:
    filtered = filter_time_range(frame, time_range)
    figure = go.Figure()
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
        margin={"l": 20, "r": 20, "t": 20, "b": 20},
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="#0a0d0b",
        font={"family": "JetBrains Mono", "color": "#b9c8b5", "size": 11},
        hovermode="x unified",
        legend={"orientation": "h", "y": 1.08, "x": 1, "xanchor": "right"},
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
        },
    )
    return figure


st.markdown(
    """
    <div class="topline">
      <div class="brand">FUNDING_RATE_ARB</div>
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
    if st.button("Refresh history now", width="stretch"):
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
    card_columns = st.columns(4)
    for column, symbol in zip(card_columns, SYMBOLS):
        with column:
            render_pair_card(symbol, latest.get(symbol))

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
            positions,
            hide_index=True,
            width="stretch",
            height=min(500, 42 + len(positions) * 36),
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
            width="stretch",
            config={"displayModeBar": False},
        )

    st.caption(
        "Positive gross spread means the fixed long-World / short-GMX direction "
        "earns funding before fees. Last dashboard render: "
        + datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    )


live_dashboard()
