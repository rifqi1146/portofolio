#!/usr/bin/env bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=4040
PID_FILE="$DIR/server.pid"

if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE" | head -n 1 | tr -d '[:space:]')
    if [ -n "$PID" ] && ps -p "$PID" > /dev/null 2>&1; then
        kill "$PID" 2>/dev/null || true
    fi
    rm -f "$PID_FILE"
fi

# Kill any process still listening on port 4040 or next dev
fuser -k $PORT/tcp 2>/dev/null || true
pkill -f "next dev.*$PORT" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true

echo "🛑 Server Next.js pada port $PORT telah dimatikan."
