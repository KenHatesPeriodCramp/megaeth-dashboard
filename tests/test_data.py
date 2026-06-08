import pandas as pd

from dashboard.data import (
    calculate_gross_spread,
    filter_time_range,
    latest_by_symbol,
    normalize_history,
)


def test_gross_spread_is_signed_for_fixed_direction():
    assert calculate_gross_spread(-15, -75) == -60
    assert calculate_gross_spread(20, 100) == 80
    assert calculate_gross_spread(None, 10) is None


def test_history_ignores_api_absolute_spread():
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


def test_latest_and_time_filter():
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
        {
            "time_utc": "2026-06-06T00:00:00Z",
            "symbol": "SOL",
            "world_apr": 0,
            "gmx_apr": 1,
        },
    ]
    frame = normalize_history(rows)
    latest = latest_by_symbol(frame)
    assert latest["BTC"]["gross_spread"] == 2
    filtered = filter_time_range(frame, "24H")
    assert set(filtered["symbol"]) == {"BTC"}
    assert pd.api.types.is_datetime64_any_dtype(frame["time_utc"])

