# Quick Start Guide - Moot Court System

## What Was Fixed

The PDF upload feature was not working because of import path issues in the OCR module. This has been fixed. The system is now fully operational.

## Starting the System (2 terminals required)

### Terminal 1: Start Backend

```bash
cd /gpfs/projects/p32143/moot_court
conda activate moot_court
python -m backend.main
```

**Expected output:**
```
[STARTUP] Creating database tables...
[STARTUP] Database tables created
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete.
```

### Terminal 2: Start Frontend

```bash
cd /gpfs/projects/p32143/moot_court/front_end/front_end_1
npm run dev
```

**Expected output:**
```
VITE v6.3.5 ready in 1733 ms
  ➜  Local:   http://localhost:3000/
```

## Access the Application

Open your browser and go to:
```
http://localhost:3000
```

## Test PDF Upload

### Method 1: Via Browser

1. Open http://localhost:3000/
2. Click "Let's Get Started"
3. Select "Filed" (case status)
4. Select "Upload Document"
5. Choose `/gpfs/projects/p32143/moot_court/data/user_1/claims/SMC.pdf`
6. Wait for "Document analyzed successfully!" (may take 1-2 minutes)
7. Form auto-fills with extracted case data

### Method 2: Via Command Line

```bash
# Upload a PDF
curl -X POST "http://localhost:8000/api/ocr/upload?user_id=test_user" \
  -F "file=@/gpfs/projects/p32143/moot_court/data/user_1/claims/SMC.pdf"

# Expected response:
# {"job_id":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","status":"pending","message":"OCR job queued"}

# Check status (replace JOB_ID with actual ID)
curl http://localhost:8000/api/ocr/status/JOB_ID
```

## System Status Check

Verify everything is running:

```bash
# Backend health
curl http://localhost:8000/api/health
# Should return: {"status":"healthy"}

# Frontend accessibility
curl http://localhost:3000
# Should return: (HTML content)

# List database tables
sqlite3 /gpfs/projects/p32143/moot_court/moot_court.db ".tables"
```

## Processing Timeline

- **Upload**: Instant (file saved to disk)
- **Queue**: < 1 second (job created in database)
- **MinerU**: 15-45 seconds (PDF→Markdown conversion)
- **LLM**: 10-30 seconds (extract structured data)
- **Save**: < 1 second (store in database)
- **Total**: Usually 30-120 seconds depending on PDF size

During processing, you'll see logs in the backend terminal:
```
[OCR] Running MinerU on /path/to/file.pdf
[OCR] Found markdown file: /path/to/file.md
[OCR] Running LLM extraction...
[OCR] Extraction complete: {...}
[OCR] Job {job_id} completed successfully
```

## Troubleshooting

### "Connection refused" error
**Problem**: Backend not running
```bash
# Check if backend is running
curl http://localhost:8000/api/health
```

### "Module not found" error
**Problem**: Wrong conda environment or dependencies missing
```bash
# Activate correct environment
conda activate moot_court

# Verify dependencies
python -c "from ocr.info_extract import info_extract; print('OK')"
```

### Port already in use
**Problem**: Another process using port 8000 or 3000
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Database locked error
**Problem**: Database file is corrupted or in use
```bash
# Delete and recreate database
rm moot_court.db
python -m backend.main  # Will recreate tables
```

## File Changes Made

Only 3 files were modified to fix the issue:

1. **`ocr/info_extract.py`** - Added proper Python path setup for imports
2. **`ocr/__init__.py`** - Created (new file) to make ocr a Python package
3. **`backend/services/ocr_service.py`** - Added date parsing helper function

All other files remain unchanged and fully compatible.

## Key Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/health` | GET | Health check |
| `/api/ocr/upload` | POST | Upload PDF for OCR processing |
| `/api/ocr/status/{job_id}` | GET | Check OCR job status |
| `/api/cases/{case_id}` | GET | Retrieve extracted case data |

## Environment Variables

Located in `.env`:
```
OPENAI_API_KEY=sk-...           # For future API calls
HUGGINGFACE_TOKEN=hf_...        # For model downloads
DATABASE_URL=sqlite:///./moot_court.db
MINERU_DEVICE_MODE=cuda         # GPU acceleration
CUDA_VISIBLE_DEVICES=0          # Use GPU 0
```

## Next Steps

After PDF upload is working:

1. **Evidence Recommendation**: The system can now recommend evidence types based on case type
2. **Evidence Upload**: Users can upload supporting evidence documents
3. **Evidence Validation**: LLM validates evidence quality and completeness
4. **Court Simulation**: Full courtroom simulation with AI judge, defendant, and clerk

## Getting Help

If you encounter issues:

1. Check the backend logs in Terminal 1
2. Check browser console (F12 → Console tab)
3. Run verification commands above
4. See detailed troubleshooting in `DEBUGGING_REPORT.md`

## System Architecture

```
Browser (Port 3000)
    ↓
React Frontend (Vite)
    ↓ HTTP (CORS enabled)
Backend API (Port 8000)
    ↓
Background Task Queue
    ├── MinerU (PDF extraction)
    ├── Qwen3 LLM (information extraction)
    └── SQLAlchemy ORM
         ↓
SQLite Database (moot_court.db)
```

## Performance Tips

- **First Run**: LLM model downloading takes time (it's cached after first use)
- **GPU**: Ensure CUDA is properly configured for faster processing
- **Large PDFs**: May take longer; monitor backend logs for progress

---

**Status**: ✅ System Operational - Ready for Testing

For detailed information, see `DEBUGGING_REPORT.md`
