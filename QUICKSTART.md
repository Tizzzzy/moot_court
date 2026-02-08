# Quick Start Guide - Moot Court Stage 1

## Prerequisites

1. **Conda Environment**: Activate the moot_court environment
   ```bash
   conda activate moot_court
   ```

2. **Dependencies Installed**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables**: `.env` file is already configured with API keys

## Running the Full Stack

### Terminal 1: Start the Backend
```bash
cd /gpfs/projects/p32143/moot_court
python -m backend.main
```

Expected output:
```
[STARTUP] Creating database tables...
[STARTUP] Database tables created
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### Terminal 2: Start the Frontend
```bash
cd /gpfs/projects/p32143/moot_court/front_end/front_end_1
npm run dev
```

Expected output:
```
  VITE v6.3.5  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

### Open in Browser
Navigate to: **http://localhost:5173**

## Testing the Integration

### 1. Health Check
```bash
curl http://localhost:8000/api/health
# Expected: {"status": "healthy"}
```

### 2. Upload a PDF
1. Go to http://localhost:5173
2. Click "Let's Get Started"
3. Select "Filed" for case status
4. Select "Upload Document" for entry method
5. Upload a PDF (any PDF file or use test document)
6. Watch the analysis progress

### 3. Monitor in Terminal
In the backend terminal, you should see:
```
[OCR] Running MinerU on /path/to/file.pdf
[OCR] Found markdown file: /path/to/output.md
[OCR] Running LLM extraction...
[OCR] Extraction complete: {...}
[OCR] Job {job_id} completed successfully
```

### 4. Verify in Frontend
After analysis completes (30-60 seconds), the form should auto-fill with:
- Case number
- Case type
- State
- Plaintiff/defendant names
- Claim summary
- Amount sought
- Filing date

## Database Inspection

To view extracted data in the database:
```bash
sqlite3 moot_court.db
.headers on
.mode column
SELECT * FROM cases;
SELECT * FROM processing_jobs;
SELECT * FROM parties;
.quit
```

## Troubleshooting

### Backend Won't Start
```bash
# Check Python installation
python --version

# Check FastAPI import
python -c "from backend.main import app; print('OK')"

# Check port 8000 is free
lsof -i :8000
```

### Frontend Won't Connect to Backend
```bash
# Verify CORS is enabled (check backend logs)
# Verify frontend env var
cat front_end/front_end_1/.env.development

# Should show:
# VITE_API_URL=http://localhost:8000/api
```

### OCR Processing Hangs
```bash
# Check CUDA is available
nvidia-smi

# Check MinerU installation
python -c "import mineru; print('MinerU OK')"

# Check Qwen model loads
python -c "from transformers import AutoModelForCausalLM; print('Transformers OK')"
```

### Database Locked Error
```bash
# Stop backend and frontend
# Remove the database file
rm -f moot_court.db

# Restart backend (will recreate)
python -m backend.main
```

## Next Steps

After verifying the flow works:

1. **Test with Real Document**: Upload an actual small claims court form
2. **Verify Data Quality**: Check if extracted data is accurate
3. **Check API Logs**: Look at backend terminal for any warnings
4. **Review Database**: Query the database to confirm data persistence
5. **Plan Phase 2**: Evidence recommendation and validation endpoints

## Phase 2 Integration Points

The following endpoints are ready for Phase 2 implementation:
- `POST /api/evidence/recommend` - Generate evidence recommendations
- `POST /api/evidence/upload` - Upload evidence files
- `GET /api/evidence/status/{evidence_type_id}` - Check validation status

## File Locations

- **Backend**: `/gpfs/projects/p32143/moot_court/backend/`
- **Frontend**: `/gpfs/projects/p32143/moot_court/front_end/front_end_1/`
- **Data**: `/gpfs/projects/p32143/moot_court/data/{user_id}/`
- **Database**: `/gpfs/projects/p32143/moot_court/moot_court.db`
- **Config**: `/gpfs/projects/p32143/moot_court/.env`

## Key URLs

- **Frontend**: http://localhost:5173
- **Backend Health**: http://localhost:8000/api/health
- **OpenAPI Docs**: http://localhost:8000/docs (automatically generated)
- **ReDoc**: http://localhost:8000/redoc

## Database Features

- **SQLite** for development/testing
- **Tables**: `cases`, `parties`, `processing_jobs`
- **Auto-created** on first backend startup
- **Indexed** on user_id and job_id for fast queries

## Performance Expectations

- **PDF Upload**: Instant (< 1 second)
- **OCR Processing**: 30-60 seconds (MinerU + Qwen)
- **Database Query**: ~100ms
- **Frontend Poll Interval**: 2 seconds
- **Total End-to-End**: ~1-2 minutes

## Getting Help

1. Check `IMPLEMENTATION_SUMMARY.md` for detailed architecture
2. Check `CLAUDE.md` for project overview
3. Review backend code comments in `backend/main.py`
4. Check browser console for frontend errors
5. Check backend terminal for processing logs
