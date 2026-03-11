## Project Overview

This is a **Moot Court Legal Assistant System** for small claims court case preparation. The system consists of a 4-stage Python pipeline (OCR, evidence recommendation, evidence feedback, court simulation) and a React-based frontend.

**Tech Stack:**
- **Backend**: FastAPI, SQLAlchemy (SQLite), Python 3.x
- **Frontend**: React 18.3.1, Vite 6.3.5, TypeScript, Tailwind CSS v4, Radix UI
- **LLMs**: Google Gemini 3.0 Flash Preview

## Quick Start

```bash
# 1. Setup Python environment
conda activate moot_court
pip install -r requirements.txt

# 2. Configure environment variables
cp .env.example .env
# Edit .env with your API keys (GEMINI_API_KEY, BASE_DATA_DIR)

# 3. Setup frontend (first time only)
cd front_end/front_end_1
npm install
```


### Backend Development

Open one terminal

```bash
# Activate Python environment
conda activate moot_court

# Start backend with auto-reload
python -m uvicorn backend.main:app --reload --port 8000
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

### Frontend Development

Open another terminal

```bash
# Navigate to main frontend
cd front_end/front_end_1
npm run build
# Install dependencies (first time only)
npm install

# Start development server (with HMR)
npm run dev        # Runs on http://localhost:3000
npm run dev -- --host 0.0.0.0 --port 3000
```

## AWS tutorial
front_end/front_end_1/vite.config.ts
target: 'http://3.135.62.13:8000',

front_end/front_end_1/.env.development
VITE_API_BASE_URL=http://3.135.62.13:8000/api

ssh -i "tizzyec.pem" ec2-user@3.135.62.13

tmux attach -t backend
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000

tmux attach -t frontend
chmod +x node_modules/.bin/vite
npm run build
npm install
npm run dev -- --host 0.0.0.0 --port 3000

database: export DATABASE_URL='postgresql://moot_admin:Shudong1234!@localhost:5432/moot_court_db'

http://3.135.62.13:3000