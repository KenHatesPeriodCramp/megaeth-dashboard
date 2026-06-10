#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

python3 -m venv "$ROOT/.venv"
"$ROOT/.venv/bin/python" -m pip install --upgrade pip
"$ROOT/.venv/bin/pip" install -r "$ROOT/requirements.txt"
npm install --prefix "$ROOT/position-service"

FETCH_SCRIPT="$ROOT/scripts/fetch-secrets.sh"
if [[ ! -f "$ROOT/.env" ]]; then
  if [[ -x "$FETCH_SCRIPT" ]] && aws sts get-caller-identity &>/dev/null 2>&1; then
    echo "Fetching secrets from AWS SSM..."
    "$FETCH_SCRIPT" --project dashboard --output "$ROOT/.env"
  elif [[ -f "$ROOT/.env.example" ]]; then
    cp "$ROOT/.env.example" "$ROOT/.env"
    echo "Created $ROOT/.env from .env.example."
    echo "For production: push secrets to AWS SSM (see megaeth-bot/docs/SSM_SETUP.md)."
    echo "Then run: ./scripts/fetch-secrets.sh --project dashboard"
  fi
fi

echo "Setup complete."

