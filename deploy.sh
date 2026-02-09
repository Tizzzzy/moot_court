#!/bin/bash

# ==============================================
# Moot Court Full Stack Deployment Script
# ==============================================
# This script starts all services:
# - Backend API (FastAPI) on port 8000
# - Frontend 1 (Case Intake) on port 3000
# - Frontend 2 (Dashboard) on port 3002
# - Frontend 3 (Court Simulator) on port 3001
# ==============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# PID file to track background processes
PID_FILE="$PROJECT_ROOT/.deploy_pids"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to cleanup on exit
cleanup() {
    print_warning "Shutting down all services..."
    if [ -f "$PID_FILE" ]; then
        while read pid; do
            if kill -0 "$pid" 2>/dev/null; then
                kill "$pid" 2>/dev/null || true
            fi
        done < "$PID_FILE"
        rm -f "$PID_FILE"
    fi
    # Kill any remaining node/python processes started by this script
    pkill -f "uvicorn backend.main:app" 2>/dev/null || true
    print_success "All services stopped."
    exit 0
}

# Set up trap for cleanup
trap cleanup SIGINT SIGTERM

# Function to check if port is in use
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0  # Port is in use
    else
        return 1  # Port is free
    fi
}

# Function to wait for service to be ready
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
    print_error "$name failed to start on port $port"
    return 1
}

# Clear previous PID file
rm -f "$PID_FILE"

echo ""
echo "=============================================="
echo "     MOOT COURT FULL STACK DEPLOYMENT"
echo "=============================================="
echo ""

# Check for required commands
print_status "Checking dependencies..."

if ! command -v python3 &> /dev/null; then
    print_error "Python3 is not installed"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
fi

if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed"
    exit 1
fi

print_success "All dependencies found"

# ==============================================
# 1. Start Backend API
# ==============================================
echo ""
print_status "Starting Backend API (FastAPI)..."

cd "$PROJECT_ROOT"

# Check if port 8000 is already in use
if check_port 8000; then
    print_warning "Port 8000 is already in use. Attempting to use existing backend..."
else
    # Load environment variables
    if [ -f ".env" ]; then
        export $(cat .env | grep -v '^#' | xargs)
    fi

    # Start backend
    python3 -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload &
    echo $! >> "$PID_FILE"
    wait_for_service 8000 "Backend API"
fi

# ==============================================
# 2. Install Frontend Dependencies & Start
# ==============================================

# Frontend 1 - Case Intake (port 3000)
echo ""
print_status "Starting Frontend 1 - Case Intake (port 3000)..."

cd "$PROJECT_ROOT/front_end/front_end_1"

if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies for Frontend 1..."
    npm install --silent
fi

if check_port 3000; then
    print_warning "Port 3000 is already in use"
else
    npm run dev -- --host &
    echo $! >> "$PID_FILE"
    wait_for_service 3000 "Frontend 1"
fi

# Frontend 2 - Dashboard (port 3002)
echo ""
print_status "Starting Frontend 2 - Dashboard (port 3002)..."

cd "$PROJECT_ROOT/front_end/front_end_2"

if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies for Frontend 2..."
    npm install --silent
fi

if check_port 3002; then
    print_warning "Port 3002 is already in use"
else
    npm run dev -- --host &
    echo $! >> "$PID_FILE"
    wait_for_service 3002 "Frontend 2"
fi

# Frontend 3 - Court Simulator (port 3001)
echo ""
print_status "Starting Frontend 3 - Court Simulator (port 3001)..."

cd "$PROJECT_ROOT/front_end/front_end_3"

if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies for Frontend 3..."
    npm install --silent
fi

if check_port 3001; then
    print_warning "Port 3001 is already in use"
else
    npm run dev -- --host &
    echo $! >> "$PID_FILE"
    wait_for_service 3001 "Frontend 3"
fi

# ==============================================
# Summary
# ==============================================
echo ""
echo "=============================================="
echo "          DEPLOYMENT COMPLETE!"
echo "=============================================="
echo ""
echo -e "  ${GREEN}Backend API:${NC}        http://localhost:8000"
echo -e "  ${GREEN}API Docs:${NC}           http://localhost:8000/docs"
echo ""
echo -e "  ${BLUE}Frontend 1:${NC}         http://localhost:3000"
echo -e "  ${BLUE}  - Case Intake${NC}"
echo -e "  ${BLUE}  - Evidence Upload${NC}"
echo -e "  ${BLUE}  - Dashboard${NC}"
echo -e "  ${BLUE}  - Court Simulator${NC}"
echo ""
echo -e "  ${BLUE}Frontend 2:${NC}         http://localhost:3002"
echo -e "  ${BLUE}  - Dashboard UI${NC}"
echo ""
echo -e "  ${BLUE}Frontend 3:${NC}         http://localhost:3001"
echo -e "  ${BLUE}  - Court Simulator UI${NC}"
echo ""
echo "=============================================="
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}"
echo ""

# Keep script running and wait for signals
wait
