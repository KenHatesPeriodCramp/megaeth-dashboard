#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ── Fetch secrets from AWS SSM if available ──────────────────────
if [[ -x "$ROOT/fetch-secrets.sh" ]]; then
  if aws sts get-caller-identity &>/dev/null; then
    echo "==> Fetching secrets from AWS SSM..."
    "$ROOT/fetch-secrets.sh" --project dashboard --output "$ROOT/.env"
  else
    echo "==> No AWS access — using existing .env"
  fi
fi

if [[ ! -f "$ROOT/.env" ]]; then
  echo "Missing $ROOT/.env. Run ./setup.sh and configure it first."
  echo "Or set up AWS SSM parameters and run: ./fetch-secrets.sh --project dashboard"
  exit 1
fi
if [[ ! -x "$ROOT/.venv/bin/streamlit" ]]; then
  echo "Dependencies are missing. Run ./setup.sh first."
  exit 1
fi

set -a
source "$ROOT/.env"
set +a

(
  cd "$ROOT/position-service"
  exec node --import tsx server.js
) &
POSITION_PID=$!

cleanup() {
  kill "$POSITION_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

POSITION_READY=0
for _ in {1..30}; do
  if curl -fsS "http://127.0.0.1:${POSITION_PORT:-3001}/health" >/dev/null; then
    POSITION_READY=1
    break
  fi
  sleep 1
done

if [[ "$POSITION_READY" -ne 1 ]]; then
  echo "Position service did not become ready."
  exit 1
fi

"$ROOT/.venv/bin/streamlit" run "$ROOT/app.py" \
  --server.address 127.0.0.1 \
  --server.port 8501
