from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


PROJECT_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(PROJECT_ROOT / ".env")


@dataclass(frozen=True)
class Settings:
    history_api_url: str
    history_api_key: str
    position_api_url: str
    refresh_seconds: int
    history_limit: int


def load_settings() -> Settings:
    return Settings(
        history_api_url=os.getenv(
            "HISTORY_API_URL",
            "http://127.0.0.1:8080/history",
        ).rstrip("/"),
        history_api_key=os.getenv("HISTORY_API_KEY", ""),
        position_api_url=os.getenv(
            "POSITION_API_URL",
            "http://127.0.0.1:3001",
        ).rstrip("/"),
        refresh_seconds=max(2, int(os.getenv("REFRESH_SECONDS", "5"))),
        history_limit=max(100, int(os.getenv("HISTORY_LIMIT", "10000"))),
    )

