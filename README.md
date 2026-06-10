# MegaETH Funding Dashboard

Standalone, read-only Streamlit dashboard for the production World/GMX wallet.
It does not import or modify the `megaeth-bot` project and contains no trading
routes.

## What It Shows

- Live APR for ETH, BTC, SOL, and MEGA
- Signed gross spread for the fixed `long World / short GMX` strategy
- Confirmed World and GMX positions
- Entry, mark, liquidation, size, notional, collateral, PnL, and funding fields
- Historical gross spread chart

Gross spread is recalculated from the source APRs:

```text
gross spread = GMX APR - World APR
```

The API's existing absolute `spread` field is deliberately ignored.

## Setup

```bash
cd /Users/Ken/megaeth-dashboard
./setup.sh
```

### Secrets (choose one)

**Option A — AWS SSM (recommended):**
```bash
# One-time: push local secrets to SSM
./fetch-secrets.sh --project dashboard --profile your-profile  # actually use push-secrets.sh from megaeth-bot

# Every start: fetch from SSM (run.sh does this automatically)
./fetch-secrets.sh --project dashboard
```

**Option B — Local .env (dev only):**
Edit `.env` and set:
- `HISTORY_API_KEY`
- `RPC_URL`
- `DASHBOARD_WALLET_ADDRESS`
- `WORLD_EXCHANGE_ADDRESS`

Only public/read-only chain configuration belongs here. Do not add private keys.

## Run

```bash
./run.sh
```

Open [http://localhost:8501](http://localhost:8501).

The dashboard refreshes positions every five seconds. Historical API data is
cached for one minute to avoid downloading the full history on every refresh.
Confirmed live orders should appear after the exchange indexes or confirms the
position.

## Checks

```bash
.venv/bin/pytest
npm run check --prefix position-service
```

The Node service binds only to `127.0.0.1:3001` and exposes read-only
`/health` and `/positions` endpoints.

## AWS Deployment

### Prerequisites

1. AWS SSM parameters created under `/megaeth/dashboard/` (see `scripts/fetch-secrets.sh` for required keys, or megaeth-bot `docs/SSM_SETUP.md` for the full parameter layout)
2. EC2 instance profile with SSM + CloudWatch Logs permissions
3. Security group: inbound 443 (HTTPS), outbound 443 (HTTPS/RPC)

### Deploy via CloudFormation

```bash
aws cloudformation create-stack \
  --stack-name megaeth-dashboard \
  --template-body file://scripts/cloudformation.yaml \
  --parameters \
    ParameterKey=KeyName,ParameterValue=your-keypair \
    ParameterKey=AllowedCidr,ParameterValue=YOUR.IP.ADDRESS/32 \
  --capabilities CAPABILITY_IAM \
  --region us-east-1
```

### Deploy via EC2 UserData (manual)

1. Launch Amazon Linux 2023 instance with the IAM role above
2. Paste `scripts/ec2-userdata.sh` contents into UserData
3. Or SSH in and run:

```bash
sudo bash -c 'export REPO_URL=https://github.com/.../megaeth-dashboard.git && \
  curl -fsSL https://raw.githubusercontent.com/.../main/scripts/ec2-userdata.sh | bash'
```

### Push Secrets to SSM (one-time)

```bash
./scripts/push-secrets.sh --project dashboard --region us-east-1
```

### Post-Deploy

```bash
# Set basic auth password
sudo htpasswd /etc/nginx/.htpasswd-dashboard <username>

# (Optional) Replace self-signed cert with Let's Encrypt
sudo ./scripts/setup-ssl.sh --domain dashboard.example.com --email admin@example.com

# Verify
systemctl status megaeth-dashboard-position
systemctl status megaeth-dashboard-streamlit
systemctl status nginx
journalctl -u megaeth-dashboard-streamlit -f

# CloudWatch logs
aws logs tail /megaeth/dashboard/systemd --follow
```

### Architecture (Production)

```
Internet ──▶ :443 (nginx TLS + basic auth) ──▶ 127.0.0.1:8501 (Streamlit)
                                         ├──▶ 127.0.0.1:3001 (position-service, read-only)
                                         └──▶ CloudWatch Logs (journald)
```

Both services run under systemd with `Restart=on-failure`. Secrets are fetched
from AWS SSM Parameter Store at startup via `ExecStartPre=fetch-secrets.sh`.
No `.env` with real secrets exists on disk.
