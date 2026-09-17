#!/usr/bin/env bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=4040
PID_FILE="$DIR/server.pid"
LOG_FILE="$DIR/server.log"

export PATH="/root/nodejs/bin:/root/snap/antigravity-cli/common/local/bin:$PATH"

if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE" | head -n 1 | tr -d '[:space:]')
    if [ -n "$PID" ] && ps -p "$PID" > /dev/null 2>&1; then
        echo "Server is already running with PID $PID on port $PORT."
        exit 0
    else
        rm -f "$PID_FILE"
    fi
fi

# Clean up any lingering process on port 4040
fuser -k $PORT/tcp 2>/dev/null || true

cd "$DIR"
nohup npm run start -- -p "$PORT" > "$LOG_FILE" 2>&1 &
PID=$!
echo "$PID" > "$PID_FILE"

sleep 3

if ps -p "$PID" > /dev/null 2>&1; then
    echo "✅ Server Next.js berhasil dijalankan di port $PORT (PID: $PID)"
    echo "🌐 Akses: http://localhost:$PORT"
    echo "📄 Logs: $LOG_FILE"
else
    echo "❌ Gagal menjalankan server. Cek $LOG_FILE"
    exit 1
fi
