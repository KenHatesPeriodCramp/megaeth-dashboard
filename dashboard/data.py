from __future__ import annotations

from typing import Any, Iterable

import pandas as pd
import requests


SYMBOLS = ("ETH", "BTC", "SOL", "MEGA")


class DashboardDataError(RuntimeError):
    pass


def calculate_gross_spread(world_apr: Any, gmx_apr: Any) -> float | None:
    """Return signed APR earned by long World / short GMX."""
    if world_apr is None or gmx_apr is None:
        return None
    try:
        world = float(world_apr)
        gmx = float(gmx_apr)
    except (TypeError, ValueError):
        return None
    if pd.isna(world) or pd.isna(gmx):
        return None
    return gmx - world


def normalize_history(
    payload: Any,
    symbols: Iterable[str] = SYMBOLS,
) -> pd.DataFrame:
    rows = payload.get("rows", []) if isinstance(payload, dict) else payload
    if not isinstance(rows, list):
        raise DashboardDataError("History API returned an unsupported JSON shape")

    frame = pd.DataFrame(rows)
    required = {"symbol", "world_apr", "gmx_apr"}
    if frame.empty:
        return pd.DataFrame(
            columns=[
                "ts",
                "time_utc",
                "symbol",
                "world_apr",
                "gmx_apr",
                "gross_spread",
            ]
        )
    missing = required.difference(frame.columns)
    if missing:
        raise DashboardDataError(
            f"History API is missing fields: {', '.join(sorted(missing))}"
        )

    allowed = {symbol.upper() for symbol in symbols}
    frame["symbol"] = frame["symbol"].astype(str).str.upper()
    frame = frame[frame["symbol"].isin(allowed)].copy()
    frame["world_apr"] = pd.to_numeric(frame["world_apr"], errors="coerce")
    frame["gmx_apr"] = pd.to_numeric(frame["gmx_apr"], errors="coerce")
    frame["gross_spread"] = frame.apply(
        lambda row: calculate_gross_spread(row["world_apr"], row["gmx_apr"]),
        axis=1,
    )

    if "time_utc" in frame:
        frame["time_utc"] = pd.to_datetime(
            frame["time_utc"],
            utc=True,
            errors="coerce",
        )
    elif "ts" in frame:
        frame["time_utc"] = pd.to_datetime(
            frame["ts"],
            unit="s",
            utc=True,
            errors="coerce",
        )
    else:
        frame["time_utc"] = pd.NaT

    if "ts" not in frame:
        frame["ts"] = frame["time_utc"].map(
            lambda value: int(value.timestamp()) if pd.notna(value) else None
        )

    return frame[
        [
            "ts",
            "time_utc",
            "symbol",
            "world_apr",
            "gmx_apr",
            "gross_spread",
        ]
    ].sort_values("time_utc")


def latest_by_symbol(frame: pd.DataFrame) -> dict[str, dict[str, Any]]:
    if frame.empty:
        return {}
    latest = (
        frame.dropna(subset=["time_utc"])
        .sort_values("time_utc")
        .groupby("symbol", as_index=False)
        .tail(1)
    )
    return {
        str(row["symbol"]): row.to_dict()
        for _, row in latest.iterrows()
    }


def fetch_history(
    api_url: str,
    api_key: str,
    limit: int,
    timeout: float = 12.0,
) -> pd.DataFrame:
    if not api_key:
        raise DashboardDataError("HISTORY_API_KEY is not configured")
    try:
        response = requests.get(
            api_url,
            params={"limit": limit},
            headers={"X-API-Key": api_key},
            timeout=timeout,
        )
        response.raise_for_status()
    except requests.RequestException as exc:
        raise DashboardDataError(f"History API request failed: {exc}") from exc
    return normalize_history(response.json())


def fetch_positions(api_url: str, timeout: float = 25.0) -> dict[str, Any]:
    try:
        response = requests.get(f"{api_url}/positions", timeout=timeout)
        response.raise_for_status()
    except requests.RequestException as exc:
        raise DashboardDataError(f"Position service request failed: {exc}") from exc
    payload = response.json()
    if not isinstance(payload, dict):
        raise DashboardDataError("Position service returned invalid JSON")
    return payload


def fetch_endurance_cycles(
    api_url: str,
    limit: int = 20,
    timeout: float = 10.0,
) -> list[dict[str, Any]]:
    """Fetch recent endurance cycle summaries from the bot bridge."""
    try:
        response = requests.get(
            f"{api_url}/endurance/cycles",
            params={"limit": limit},
            timeout=timeout,
        )
        response.raise_for_status()
        return response.json().get("cycles", [])
    except requests.RequestException as exc:
        raise DashboardDataError(f"Endurance API request failed: {exc}") from exc


def filter_time_range(frame: pd.DataFrame, label: str) -> pd.DataFrame:
    if frame.empty or label == "All":
        return frame
    hours = {"6H": 6, "24H": 24, "48H": 48, "7D": 24 * 7}[label]
    newest = frame["time_utc"].max()
    if pd.isna(newest):
        return frame
    return frame[frame["time_utc"] >= newest - pd.Timedelta(hours=hours)]

