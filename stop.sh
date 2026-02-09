#!/bin/bash

# ==============================================
# Stop all Moot Court services
# ==============================================

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Stopping all Moot Court services..."

# Kill backend
pkill -f "uvicorn backend.main:app" 2>/dev/null && echo -e "${GREEN}[STOPPED]${NC} Backend API" || echo -e "${RED}[NOT RUNNING]${NC} Backend API"

# Kill frontend processes on specific ports
for port in 3000 3001 3002; do
    pid=$(lsof -ti:$port 2>/dev/null)
    if [ -n "$pid" ]; then
        kill $pid 2>/dev/null
        echo -e "${GREEN}[STOPPED]${NC} Service on port $port"
    else
        echo -e "${RED}[NOT RUNNING]${NC} Service on port $port"
    fi
done

# Clean up PID file
rm -f "$(dirname "${BASH_SOURCE[0]}")/.deploy_pids"

echo ""
echo "All services stopped."
