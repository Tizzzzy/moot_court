#!/bin/bash

# ==============================================
# Moot Court UNIFIED Deployment Script
# ==============================================
# All features in ONE app:
# - Backend API (FastAPI) on port 8000
# - Unified Frontend on port 3000
#   - Case Intake (/)
#   - Evidence Upload (/evidence/:userId)
#   - Dashboard (/dashboard/:userId)
#   - Court Simulator (/court/:userId)
# ==============================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$PROJECT_ROOT/.deploy_pids"

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

cleanup() {
    print_warning "Shutting down services..."
    if [ -f "$PID_FILE" ]; then
        while read pid; do
            kill "$pid" 2>/dev/null || true
        done < "$PID_FILE"
        rm -f "$PID_FILE"
    fi
    pkill -f "uvicorn backend.main:app" 2>/dev/null || true
    print_success "Services stopped."
    exit 0
}

trap cleanup SIGINT SIGTERM

check_port() {
    lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1
}

wait_for_service() {
    local port=$1
    local name=$2
    local max_attempts=30
    local attempt=1
    while [ $attempt -le $max_attempts ]; do
        if check_port $port; then
            print_success "$name is ready on port $port"
            return 0
        fi
        sleep 1
        attempt=$((attempt + 1))
    done
    print_error "$name failed to start"
    return 1
}

rm -f "$PID_FILE"

echo ""
echo -e "${CYAN}=============================================="
echo "   MOOT COURT UNIFIED APP DEPLOYMENT"
echo "==============================================${NC}"
echo ""

# Check dependencies
print_status "Checking dependencies..."
command -v python3 &> /dev/null || { print_error "Python3 not found"; exit 1; }
command -v npm &> /dev/null || { print_error "npm not found"; exit 1; }
print_success "All dependencies found"

# ==============================================
# 1. Start Backend API
# ==============================================
echo ""
print_status "Starting Backend API (FastAPI on port 8000)..."
cd "$PROJECT_ROOT"

if check_port 8000; then
    print_warning "Port 8000 already in use"
else
    [ -f ".env" ] && export $(cat .env | grep -v '^#' | xargs)
    python3 -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload &
    echo $! >> "$PID_FILE"
    wait_for_service 8000 "Backend API"
fi

# ==============================================
# 2. Start Unified Frontend
# ==============================================
echo ""
print_status "Starting Unified Frontend (port 3000)..."
cd "$PROJECT_ROOT/front_end/front_end_1"

if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --silent
fi

if check_port 3000; then
    print_warning "Port 3000 already in use"
else
    npm run dev -- --host &
    echo $! >> "$PID_FILE"
    wait_for_service 3000 "Unified Frontend"
fi

# ==============================================
# Summary
# ==============================================
echo ""
echo -e "${CYAN}=============================================="
echo "       UNIFIED DEPLOYMENT COMPLETE!"
echo "==============================================${NC}"
echo ""
echo -e "${GREEN}Backend API:${NC}  http://localhost:8000"
echo -e "${GREEN}API Docs:${NC}     http://localhost:8000/docs"
echo ""
echo -e "${CYAN}=============================================="
echo "              UNIFIED FRONTEND"
echo "==============================================${NC}"
echo ""
echo -e "${BLUE}Main App:${NC}     http://localhost:3000"
echo ""
echo "  Available Routes:"
echo -e "  ${YELLOW}/${NC}                    - Case Intake (Start Here)"
echo -e "  ${YELLOW}/case/:userId${NC}        - Case Success Page"
echo -e "  ${YELLOW}/evidence/:userId${NC}    - Evidence Upload"
echo -e "  ${YELLOW}/dashboard/:userId${NC}   - AI Evidence Dashboard"
echo -e "  ${YELLOW}/court/:userId${NC}       - Court Hearing Simulator"
echo ""
echo -e "${CYAN}=============================================="
echo "              END-TO-END FLOW"
echo "==============================================${NC}"
echo ""
echo "  1. Start at http://localhost:3000"
echo "  2. Fill in case details & upload PDF"
echo "  3. View case success -> Evidence page"
echo "  4. Upload evidence on Dashboard"
echo "  5. Practice in Court Simulator"
echo ""
echo "=============================================="
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}"
echo ""

wait
