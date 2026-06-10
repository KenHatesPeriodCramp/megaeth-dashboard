#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

python3 -m venv "$ROOT/.venv"
"$ROOT/.venv/bin/python" -m pip install --upgrade pip
"$ROOT/.venv/bin/pip" install -r "$ROOT/requirements.txt"
npm install --prefix "$ROOT/position-service"

if [[ ! -f "$ROOT/.env" ]]; then
  if [[ -x "$ROOT/fetch-secrets.sh" ]] && aws sts get-caller-identity &>/dev/null 2>&1; then
    echo "Fetching secrets from AWS SSM..."
    "$ROOT/fetch-secrets.sh" --project dashboard --output "$ROOT/.env"
  elif [[ -f "$ROOT/.env.example" ]]; then
    cp "$ROOT/.env.example" "$ROOT/.env"
    echo "Created $ROOT/.env from .env.example."
    echo "For production: push secrets to AWS SSM (see docs/SSM_SETUP.md in megaeth-bot)."
    echo "Then run: ./fetch-secrets.sh --project dashboard"
  fi
fi

echo "Setup complete."

