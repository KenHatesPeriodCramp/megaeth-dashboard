"""Tests for dashboard data functions.

Covers M4 (filter_time_range crash on unknown label) and
M5 (split combined test) from the 2026-06-10 inspection.
"""

import pandas as pd
import pytest

from dashboard.data import (
    DashboardDataError,
    calculate_gross_spread,
    filter_time_range,
    latest_by_symbol,
    normalize_history,
)


# ── calculate_gross_spread ─────────────────────────────────────────────


def test_gross_spread_is_signed_for_fixed_direction():
    assert calculate_gross_spread(-15, -75) == -60
    assert calculate_gross_spread(20, 100) == 80
    assert calculate_gross_spread(None, 10) is None


def test_gross_spread_rejects_nan():
    assert calculate_gross_spread(float("nan"), 10) is None
    assert calculate_gross_spread(10, float("nan")) is None


def test_gross_spread_rejects_non_numeric():
    assert calculate_gross_spread("abc", 10) is None
    assert calculate_gross_spread(10, "xyz") is None


# ── normalize_history ──────────────────────────────────────────────────


def test_normalize_history_ignores_api_absolute_spread():
    rows = [
        {
            "ts": 100,
            "symbol": "ETH",
            "world_apr": 20,
            "gmx_apr": -30,
            "spread": 50,
        }
    ]
    frame = normalize_history(rows)
    assert frame.iloc[0]["gross_spread"] == -50


def test_normalize_history_empty_rows():
    """Empty payload returns an empty DataFrame with expected columns."""
    frame = normalize_history([])
    assert frame.empty
    assert "gross_spread" in frame.columns
    assert "time_utc" in frame.columns
    assert "symbol" in frame.columns


def test_normalize_history_empty_dict_payload():
    """Payload without 'rows' returns empty DataFrame."""
    frame = normalize_history({})
    assert frame.empty


def test_normalize_history_missing_required_fields():
    """Missing required columns raises DashboardDataError."""
    with pytest.raises(DashboardDataError, match="missing fields"):
        normalize_history([{"ts": 100}])  # no symbol, world_apr, gmx_apr


def test_normalize_history_filters_unknown_symbols():
    """Symbols not in the allowed list are dropped."""
    rows = [
        {"symbol": "ETH", "world_apr": 1, "gmx_apr": 2, "ts": 100},
        {"symbol": "DOGE", "world_apr": 3, "gmx_apr": 4, "ts": 200},
    ]
    frame = normalize_history(rows)
    assert set(frame["symbol"]) == {"ETH"}


def test_normalize_uses_ts_column():
    """When time_utc is absent, ts (epoch seconds) is converted."""
    rows = [
        {"symbol": "ETH", "world_apr": 1, "gmx_apr": 2, "ts": 1718000000},
    ]
    frame = normalize_history(rows)
    assert pd.api.types.is_datetime64_any_dtype(frame["time_utc"])
    assert pd.notna(frame.iloc[0]["time_utc"])


def test_normalize_handles_invalid_payload():
    """Non-list, non-dict-with-rows raises DashboardDataError."""
    with pytest.raises(DashboardDataError, match="unsupported JSON shape"):
        normalize_history("not a list or dict with rows")


# ── latest_by_symbol ───────────────────────────────────────────────────


def test_latest_by_symbol_empty_frame():
    """Empty DataFrame returns empty dict."""
    empty = pd.DataFrame(columns=["time_utc", "symbol", "gross_spread"])
    result = latest_by_symbol(empty)
    assert result == {}


def test_latest_by_symbol_picks_most_recent():
    rows = [
        {
            "time_utc": "2026-06-07T10:00:00Z",
            "symbol": "BTC",
            "world_apr": 1,
            "gmx_apr": 2,
        },
        {
            "time_utc": "2026-06-07T12:00:00Z",
            "symbol": "BTC",
            "world_apr": 3,
            "gmx_apr": 5,
        },
    ]
    frame = normalize_history(rows)
    latest = latest_by_symbol(frame)
    assert latest["BTC"]["gross_spread"] == 2  # 5 - 3


def test_latest_by_symbol_multiple_symbols():
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "BTC", "world_apr": 1, "gmx_apr": 2},
        {"time_utc": "2026-06-07T12:00:00Z", "symbol": "BTC", "world_apr": 3, "gmx_apr": 5},
        {"time_utc": "2026-06-06T00:00:00Z", "symbol": "SOL", "world_apr": 0, "gmx_apr": 1},
    ]
    frame = normalize_history(rows)
    latest = latest_by_symbol(frame)
    assert set(latest.keys()) == {"BTC", "SOL"}
    assert latest["BTC"]["gross_spread"] == 2
    assert latest["SOL"]["gross_spread"] == 1  # 1 - 0


# ── filter_time_range ──────────────────────────────────────────────────


def test_filter_time_range_24h():
    """24H filter keeps only rows within last 24 hours."""
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "BTC", "world_apr": 1, "gmx_apr": 2},
        {"time_utc": "2026-06-07T12:00:00Z", "symbol": "BTC", "world_apr": 3, "gmx_apr": 5},
        {"time_utc": "2026-06-06T00:00:00Z", "symbol": "SOL", "world_apr": 0, "gmx_apr": 1},
    ]
    frame = normalize_history(rows)
    filtered = filter_time_range(frame, "24H")
    assert set(filtered["symbol"]) == {"BTC"}


def test_filter_time_range_all_label():
    """'All' label returns unfiltered frame."""
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "BTC", "world_apr": 1, "gmx_apr": 2},
        {"time_utc": "2026-06-06T00:00:00Z", "symbol": "SOL", "world_apr": 0, "gmx_apr": 1},
    ]
    frame = normalize_history(rows)
    filtered = filter_time_range(frame, "All")
    assert len(filtered) == 2
    assert set(filtered["symbol"]) == {"BTC", "SOL"}


def test_filter_time_range_empty_frame():
    """Empty frame returns empty frame for any label."""
    empty = pd.DataFrame(columns=["time_utc", "symbol", "gross_spread"])
    result = filter_time_range(empty, "24H")
    assert result.empty


def test_filter_time_range_invalid_label():
    """Unknown label raises KeyError (M4: should be DashboardDataError).

    This test documents the current behavior. When M4 is fixed, update
    to expect DashboardDataError with the invalid label in the message.
    """
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "ETH", "world_apr": 1, "gmx_apr": 2},
    ]
    frame = normalize_history(rows)
    with pytest.raises(KeyError):
        filter_time_range(frame, "invalid_label")


def test_filter_time_range_all_labels():
    """Verify all supported time range labels work without error."""
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "ETH", "world_apr": 1, "gmx_apr": 2},
        {"time_utc": "2026-06-01T00:00:00Z", "symbol": "SOL", "world_apr": 0, "gmx_apr": 1},
    ]
    frame = normalize_history(rows)
    for label in ("6H", "24H", "48H", "7D", "All"):
        result = filter_time_range(frame, label)
        assert isinstance(result, pd.DataFrame)


def test_normalize_history_sets_datetime_dtype():
    """time_utc column should be datetime64 after normalization (M5 split)."""
    rows = [
        {"time_utc": "2026-06-07T10:00:00Z", "symbol": "BTC", "world_apr": 1, "gmx_apr": 2},
    ]
    frame = normalize_history(rows)
    assert pd.api.types.is_datetime64_any_dtype(frame["time_utc"])
