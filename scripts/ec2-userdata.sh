#!/bin/bash
# EC2 user-data bootstrap for megaeth-dashboard (Amazon Linux 2023)
#
# Prerequisites (manual, done once before launch):
#   1. AWS SSM parameters created under /megaeth/dashboard/ (see fetch-secrets.sh)
#   2. EC2 instance profile with permissions:
#        - ssm:GetParameter, ssm:GetParametersByPath
#        - kms:Decrypt (if using custom KMS key)
#        - logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents
#   3. Security group: inbound 443 (HTTPS), outbound HTTPS/RPC only
#   4. (Optional) Domain name pointed at instance IP
set -euo pipefail

REGION="${AWS_REGION:-us-east-1}"
REPO_DIR="/opt/megaeth-dashboard"
REPO_URL="${REPO_URL:-https://github.com/KenHatesPeriodCramp/megaeth-dashboard.git}"
REPO_BRANCH="${REPO_BRANCH:-main}"
NGINX_CONF="/etc/nginx/conf.d/megaeth-dashboard.conf"
SSL_DIR="/etc/nginx/ssl"
SSL_CERT="$SSL_DIR/dashboard.crt"
SSL_KEY="$SSL_DIR/dashboard.key"
HTPASSWD_FILE="/etc/nginx/.htpasswd-dashboard"
CW_AGENT_CONFIG="/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json"

# ── System updates ──────────────────────────────────────────────
dnf update -y

# ── Install packages ────────────────────────────────────────────
dnf install -y git python3.11 python3.11-pip nginx httpd-tools amazon-cloudwatch-agent

# ── Node.js 22 (required: Array.fromAsync not in 18) ─────────────
curl -fsSL https://rpm.nodesource.com/setup_22.x | bash -
dnf install -y nodejs --nogpgcheck

# ── Clone repo ───────────────────────────────────────────────────
cd /opt
if [[ -d "$REPO_DIR/.git" ]]; then
    cd "$REPO_DIR"
    git fetch origin "$REPO_BRANCH"
    git checkout "$REPO_BRANCH"
    git reset --hard "origin/$REPO_BRANCH"
else
    git clone --branch "$REPO_BRANCH" "$REPO_URL" megaeth-dashboard
fi
cd "$REPO_DIR"

# ── Install Python deps ─────────────────────────────────────────
python3.11 -m venv .venv
.venv/bin/pip install --upgrade pip
.venv/bin/pip install -r requirements.txt

# ── Install Node deps ───────────────────────────────────────────
npm ci --prefix position-service

# ── Make scripts executable ──────────────────────────────────────
chmod +x "$REPO_DIR/scripts/fetch-secrets.sh"
chmod +x "$REPO_DIR/scripts/setup-ssl.sh"

# ── Generate self-signed SSL cert (if none provided) ─────────────
mkdir -p "$SSL_DIR"
if [[ ! -f "$SSL_CERT" ]] || [[ ! -f "$SSL_KEY" ]]; then
    INSTANCE_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 2>/dev/null || true)
    [[ -n "$INSTANCE_IP" ]] || INSTANCE_IP="127.0.0.1"
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout "$SSL_KEY" \
        -out "$SSL_CERT" \
        -subj "/CN=megaeth-dashboard/O=MegaETH/C=US" \
        -addext "subjectAltName=IP:${INSTANCE_IP}" || {
        echo "WARNING: OpenSSL -addext failed (older OpenSSL). Retrying without SAN..."
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout "$SSL_KEY" \
            -out "$SSL_CERT" \
            -subj "/CN=megaeth-dashboard/O=MegaETH/C=US"
    }
    chmod 600 "$SSL_KEY"
    echo "Self-signed SSL certificate generated."
else
    echo "SSL certificate already present — skipping generation."
fi

# ── Nginx basic auth placeholder ─────────────────────────────────
# Generates a placeholder htpasswd. Replace after bootstrap:
#   sudo htpasswd /etc/nginx/.htpasswd-dashboard <user>
if [[ ! -f "$HTPASSWD_FILE" ]]; then
    echo 'admin:$apr1$CHANGEME$CHANGEMECHANGEMECHANGEME' > "$HTPASSWD_FILE"
    chown root:nginx "$HTPASSWD_FILE"
    chmod 640 "$HTPASSWD_FILE"
    echo "WARNING: Placeholder basic auth created. Replace immediately."
fi

# ── Nginx reverse proxy config ───────────────────────────────────
cat > "$NGINX_CONF" << 'NGXEOF'
# megaeth-dashboard — TLS termination + basic auth → Streamlit
#
# Streamlit runs on 127.0.0.1:8501 (no auth, no TLS internally).
# position-service runs on 127.0.0.1:3001 (read-only, no auth).
# Nginx handles TLS, basic auth, and rate limiting before anything
# reaches the Python/Node processes.

limit_req_zone $binary_remote_addr zone=dashboard:10m rate=10r/s;
limit_conn_zone $binary_remote_addr zone=dash_conn:10m;

# Redirect HTTP → HTTPS
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    server_name _;

    ssl_certificate     /etc/nginx/ssl/dashboard.crt;
    ssl_certificate_key /etc/nginx/ssl/dashboard.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # Basic auth — all routes except /health (for ALB/health checks)
    auth_basic           "MegaETH Dashboard";
    auth_basic_user_file /etc/nginx/.htpasswd-dashboard;

    # Rate limiting
    limit_req  zone=dashboard burst=20 nodelay;
    limit_conn dash_conn 20;

    # Security headers
    add_header X-Frame-Options        "DENY"         always;
    add_header X-Content-Type-Options "nosniff"      always;
    add_header X-XSS-Protection       "1; mode=block" always;
    add_header Referrer-Policy        "no-referrer"  always;

    # ── Streamlit Dashboard ──────────────────────────────────
    location / {
        proxy_pass http://127.0.0.1:8501;
        proxy_http_version 1.1;
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        "upgrade";
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 120s;

        # Streamlit WebSocket support
        location /_stcore/stream {
            proxy_pass http://127.0.0.1:8501/_stcore/stream;
            proxy_http_version 1.1;
            proxy_set_header Upgrade           $http_upgrade;
            proxy_set_header Connection        "upgrade";
            proxy_set_header Host              $host;
            proxy_set_header X-Real-IP         $remote_addr;
            proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_read_timeout 86400s;
        }
    }

    # ── Health check (no auth) ───────────────────────────────
    location /health {
        auth_basic off;
        proxy_pass http://127.0.0.1:8501/healthz;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        access_log off;
    }
}
NGXEOF

# ── Configure Nginx ──────────────────────────────────────────────
# Remove default server block that binds port 80
rm -f /etc/nginx/conf.d/default.conf
rm -f /etc/nginx/conf.d/ssl.conf

# Test and reload
nginx -t && systemctl enable nginx

# ── systemd: megaeth-dashboard-position ──────────────────────────
cat > /etc/systemd/system/megaeth-dashboard-position.service << 'SVCEOF'
[Unit]
Description=MegaETH Dashboard — Position Service (Node.js)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/opt/megaeth-dashboard/position-service
ExecStartPre=/opt/megaeth-dashboard/scripts/fetch-secrets.sh --project dashboard
ExecStart=/usr/bin/node --import tsx server.js
Restart=on-failure
RestartSec=10
EnvironmentFile=-/opt/megaeth-dashboard/.env
StandardOutput=journal
StandardError=journal

# Security hardening
NoNewPrivileges=yes
PrivateTmp=yes
ProtectSystem=strict
ProtectHome=read-only
ReadWritePaths=/opt/megaeth-dashboard/.env /tmp
ReadOnlyPaths=/opt/megaeth-dashboard

[Install]
WantedBy=multi-user.target
SVCEOF

# ── systemd: megaeth-dashboard-streamlit ────────────────────────
cat > /etc/systemd/system/megaeth-dashboard-streamlit.service << 'SVCEOF'
[Unit]
Description=MegaETH Dashboard — Streamlit UI
After=megaeth-dashboard-position.service
Requires=megaeth-dashboard-position.service

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/opt/megaeth-dashboard
ExecStartPre=/opt/megaeth-dashboard/scripts/fetch-secrets.sh --project dashboard
ExecStart=/opt/megaeth-dashboard/.venv/bin/streamlit run /opt/megaeth-dashboard/app.py \
    --server.address 127.0.0.1 \
    --server.port 8501 \
    --server.headless true \
    --browser.gatherUsageStats false \
    --server.enableCORS false \
    --server.enableXsrfProtection true
Restart=on-failure
RestartSec=10
EnvironmentFile=-/opt/megaeth-dashboard/.env
StandardOutput=journal
StandardError=journal

# Security hardening
NoNewPrivileges=yes
PrivateTmp=yes
ProtectSystem=strict
ProtectHome=read-only
ReadWritePaths=/opt/megaeth-dashboard/.env /tmp
ReadOnlyPaths=/opt/megaeth-dashboard

[Install]
WantedBy=multi-user.target
SVCEOF

# ── Set ownership ────────────────────────────────────────────────
chown -R ec2-user:ec2-user "$REPO_DIR"

# ── CloudWatch Agent config ──────────────────────────────────────
# Uses file-based collection (journald input not supported on AL2023 agent v1.x).
cat > "$CW_AGENT_CONFIG" << 'CWEOF'
{
  "agent": {
    "run_as_user": "root"
  },
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/messages",
            "log_group_name": "/megaeth/dashboard/systemd",
            "log_stream_name": "{instance_id}",
            "timezone": "UTC"
          }
        ]
      }
    }
  },
  "metrics": {
    "metrics_collected": {
      "mem": { "measurement": ["used_percent"] },
      "disk": { "measurement": ["used_percent"], "resources": ["/"] },
      "cpu": { "measurement": ["cpu_usage_idle"], "totalcpu": true }
    }
  }
}
CWEOF

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c "file:$CW_AGENT_CONFIG" \
    -s || true

# ── Enable all services ──────────────────────────────────────────
systemctl daemon-reload
systemctl enable megaeth-dashboard-position.service
systemctl enable megaeth-dashboard-streamlit.service
systemctl enable nginx
systemctl enable amazon-cloudwatch-agent || true

# ── Start services ───────────────────────────────────────────────
systemctl start amazon-cloudwatch-agent || true
systemctl start megaeth-dashboard-position
sleep 3
systemctl start megaeth-dashboard-streamlit
systemctl start nginx || true

echo "============================================="
echo "megaeth-dashboard bootstrap complete."
echo ""
echo "Dashboard: https://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4 || echo '<instance-ip>')"
echo ""
echo "Health:    https://<ip>/health"
echo ""
echo "Post-bootstrap steps:"
echo "  1. Set basic auth password:"
echo "     sudo htpasswd /etc/nginx/.htpasswd-dashboard <username>"
echo "  2. (Optional) Replace self-signed cert with Let's Encrypt:"
echo "     sudo /opt/megaeth-dashboard/scripts/setup-ssl.sh --domain <your-domain>"
echo "  3. Verify services:"
echo "     systemctl status megaeth-dashboard-position"
echo "     systemctl status megaeth-dashboard-streamlit"
echo "     systemctl status nginx"
echo "  4. Check CloudWatch logs:"
echo "     Log group: /megaeth/dashboard/systemd"
echo "============================================="
