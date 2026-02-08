from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

# Configure logging to show INFO level
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

from backend.routers import ocr, cases, court_simulator
from backend.routers import ocr, cases, evidence, case_data
from backend.database import engine, Base
from backend.config import settings
from backend.utils.path_utils import validate_path_config


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Validate path configuration on startup
    print("[STARTUP] Validating path configuration...")
    config = validate_path_config()
    print(f"[STARTUP] Data directory: {config['base_data_dir']}")
    print(f"[STARTUP] Project root: {config['project_root']}")
    if config['is_default']:
        print("[STARTUP] Using default data directory")
    else:
        print("[STARTUP] Using custom data directory from BASE_DATA_DIR")

    # Create tables on startup
    print("[STARTUP] Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("[STARTUP] Database tables created")
    yield
    print("[SHUTDOWN] Closing database connection...")


app = FastAPI(
    title="Moot Court API - Stage 1",
    version="1.0.0",
    lifespan=lifespan
)

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(ocr.router, prefix="/api/ocr", tags=["OCR"])
app.include_router(cases.router, prefix="/api/cases", tags=["Cases"])
app.include_router(court_simulator.router, prefix="/api/court", tags=["Court Simulator"])
app.include_router(evidence.router, prefix="/api/evidence", tags=["Evidence"])
app.include_router(case_data.router, prefix="/api/case-data", tags=["Case Data"])


@app.get("/api/health")
def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
