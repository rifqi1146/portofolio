#!/usr/bin/env bash
PORT=4040
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT 2>/dev/null)
if [ "$STATUS" = "200" ]; then
    echo "✅ Server Next.js sedang AKTIF di http://localhost:$PORT"
else
    echo "❌ Server Next.js TIDAK AKTIF di port $PORT"
fi
