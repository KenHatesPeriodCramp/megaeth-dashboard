CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --bg: #090b0a;
  --panel: #0f1210;
  --panel-2: #131714;
  --border: rgba(113, 151, 101, 0.22);
  --green: #00ef43;
  --red: #ff8f85;
  --muted: #9fb09a;
  --text: #e6ece4;
}

.stApp {
  background: radial-gradient(circle at 50% -20%, #162118 0%, var(--bg) 40%);
  color: var(--text);
  font-family: Inter, sans-serif;
}

[data-testid="stHeader"] { background: transparent; }
[data-testid="stSidebar"] { background: #0c0f0d; }
[data-testid="stSidebar"] h2,
[data-testid="stSidebar"] label,
[data-testid="stSidebar"] p {
  color: #bdcbb9 !important;
}
.block-container { max-width: 1600px; padding-top: 1.2rem; }

h1, h2, h3 { letter-spacing: -0.03em; }
h1 { color: #77ff76; }

.terminal-label, .metric-value, .metric-detail, .status-row {
  font-family: "JetBrains Mono", monospace;
}

.topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.85rem;
  margin-bottom: 1rem;
}

.brand {
  color: #70ff70;
  font-weight: 750;
  font-size: 2rem;
  letter-spacing: -0.055em;
}

.live-chip {
  color: var(--green);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
}

.live-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 7px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 239, 67, 0.8);
}

.pair-card {
  min-height: 154px;
  background: linear-gradient(145deg, rgba(18, 22, 19, .94), rgba(10, 12, 11, .94));
  border: 1px solid var(--border);
  border-left: 4px solid var(--green);
  border-radius: 7px;
  padding: 17px 18px;
}

.pair-card.negative { border-left-color: var(--red); }
.terminal-label { color: #bdcbb9; font-size: 0.78rem; letter-spacing: .08em; }
.metric-value {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 12px;
  white-space: nowrap;
}
.metric-value small {
  font-size: .62rem;
  font-weight: 500;
  letter-spacing: .04em;
}
.metric-value.positive { color: var(--green); }
.metric-value.negative { color: var(--red); }
.metric-value.neutral { color: #dbe4d8; }
.metric-detail { color: var(--muted); font-size: .72rem; margin-top: 8px; line-height: 1.7; }

.section-title {
  color: #e8ece7;
  font-size: 1.15rem;
  font-weight: 650;
  margin: 1.1rem 0 .6rem;
  letter-spacing: -.02em;
}

.section-title span { color: var(--green); margin-right: 8px; }

.info-strip {
  background: rgba(12, 16, 13, .9);
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--muted);
  font-family: "JetBrains Mono", monospace;
  font-size: .73rem;
  padding: 10px 13px;
  margin: .7rem 0;
}

[data-testid="stDataFrame"] {
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.stPlotlyChart {
  border: 1px solid var(--border);
  border-radius: 6px;
  background: rgba(11, 14, 12, .85);
  padding: 8px;
}
</style>
"""
