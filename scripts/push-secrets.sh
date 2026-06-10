#!/usr/bin/env bash
# Push secrets from local .env to AWS SSM Parameter Store.
#
# Usage:
#   ./push-secrets.sh --project dashboard [--region us-east-1] [--profile default] [--env-file .env]
#
# Reads .env and uploads each variable to /megaeth/<project>/<VAR_NAME>.
# SecureString is used for: RPC_URL, HISTORY_API_KEY, PRIVATE_KEY
# String is used for: all others.
set -euo pipefail

PROJECT="dashboard"
REGION="us-east-1"
ENV_FILE=""
PROFILE=""

SECRET_KEYS=("RPC_URL" "HISTORY_API_KEY" "PRIVATE_KEY" "API_KEY")

usage() {
    cat << 'EOF'
Usage: push-secrets.sh --project <name> [--region <region>] [--env-file <path>] [--profile <profile>]

Push secrets from a local .env file to AWS SSM Parameter Store.

Options:
  --project   Required. Project name (dashboard).
  --region    AWS region (default: us-east-1).
  --env-file  Path to .env file (default: <script-dir>/../.env).
  --profile   AWS CLI profile (optional).
EOF
    exit 1
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        --project)  PROJECT="$2"; shift 2 ;;
        --region)   REGION="$2"; shift 2 ;;
        --env-file) ENV_FILE="$2"; shift 2 ;;
        --profile)  PROFILE="$2"; shift 2 ;;
        -h|--help)  usage ;;
        *)          echo "Unknown flag: $1"; usage ;;
    esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT/.env}"

AWS_OPTS=(--region "$REGION")
[[ -n "$PROFILE" ]] && AWS_OPTS+=(--profile "$PROFILE")

if [[ ! -f "$ENV_FILE" ]]; then
    echo "ERROR: $ENV_FILE not found." >&2
    echo "Create it from .env.example or run setup.sh first." >&2
    exit 1
fi

# ── Verify AWS access ────────────────────────────────────────────
if ! aws sts get-caller-identity "${AWS_OPTS[@]}" &>/dev/null; then
    echo "ERROR: Cannot authenticate to AWS." >&2
    exit 1
fi

is_secret() {
    local key="$1"
    for sk in "${SECRET_KEYS[@]}"; do
        [[ "$key" == "$sk" ]] && return 0
    done
    return 1
}

push_param() {
    local name="$1"
    local value="$2"
    local ptype="String"

    if is_secret "$name"; then
        ptype="SecureString"
    fi

    echo "  /megaeth/${PROJECT}/${name} → ${ptype}"

    if aws ssm describe-parameters \
        --parameter-filters "Key=Name,Option=Equals,Values=/megaeth/${PROJECT}/${name}" \
        --query 'Parameters[0].Name' \
        --output text \
        "${AWS_OPTS[@]}" 2>/dev/null | grep -q .; then
        # Parameter exists — update it
        aws ssm put-parameter \
            --name "/megaeth/${PROJECT}/${name}" \
            --type "$ptype" \
            --value "$value" \
            --overwrite \
            "${AWS_OPTS[@]}" >/dev/null
    else
        # New parameter
        aws ssm put-parameter \
            --name "/megaeth/${PROJECT}/${name}" \
            --type "$ptype" \
            --value "$value" \
            "${AWS_OPTS[@]}" >/dev/null
    fi
}

echo "Pushing secrets to /megaeth/${PROJECT}/ ..."

# Parse .env file, skipping comments and blank lines
while IFS='=' read -r key value; do
    # Skip comments, blank lines, and lines without =
    [[ -z "$key" || "$key" =~ ^[[:space:]]*# ]] && continue
    [[ -z "$value" ]] && continue

    # Remove surrounding quotes
    value="${value#\"}"
    value="${value%\"}"
    value="${value#\'}"
    value="${value%\'}"

    # Skip non-secret defaults (they're hardcoded in fetch-secrets.sh)
    case "$key" in
        RPC_URL|HISTORY_API_KEY|DASHBOARD_WALLET_ADDRESS|WORLD_EXCHANGE_ADDRESS)
            push_param "$key" "$value"
            ;;
        CHAIN_ID|POSITION_PORT|REFRESH_SECONDS|HISTORY_LIMIT|HISTORY_API_URL|POSITION_API_URL)
            echo "  /megaeth/${PROJECT}/${key} → String (optional override)"
            push_param "$key" "$value"
            ;;
        *)
            echo "  Skipping $key (not a dashboard parameter)"
            ;;
    esac
done < <(grep -v '^\s*#' "$ENV_FILE" | grep '=' || true)

echo ""
echo "Done. Verify with:"
echo "  aws ssm get-parameters-by-path --path /megaeth/${PROJECT} --recursive --region ${REGION} --query 'Parameters[*].[Name,Type]' --output table"
echo ""
echo "Then run fetch-secrets.sh on the EC2 instance to confirm:"
echo "  ./scripts/fetch-secrets.sh --project ${PROJECT} --region ${REGION}"
