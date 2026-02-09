#!/usr/bin/env python3
"""Quick integration test for Phase 1 backend"""

import sys
from pathlib import Path

# Test 1: Config loads
print("✓ Test 1: Config loading...", end=" ")
try:
    from backend.config import settings
    assert settings.GEMINI_API_KEY
    assert settings.HUGGINGFACE_TOKEN
    assert settings.DATABASE_URL
    print("PASS")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)

# Test 2: Database models
print("✓ Test 2: Database models...", end=" ")
try:
    from backend.database import engine, Base
    from backend.models.case import Case, Party, ProcessingJob
    Base.metadata.create_all(bind=engine)
    print("PASS")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)

# Test 3: FastAPI app
print("✓ Test 3: FastAPI app initialization...", end=" ")
try:
    from backend.main import app
    assert len(app.routes) > 0
    print("PASS")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)

# Test 4: Routes registered
print("✓ Test 4: Routes registration...", end=" ")
try:
    route_paths = [route.path for route in app.routes]
    assert "/api/health" in route_paths
    assert "/api/ocr/upload" in route_paths
    assert "/api/ocr/status/{job_id}" in route_paths
    assert "/api/cases/{case_id}" in route_paths
    print("PASS")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)

# Test 5: Frontend API client files exist
print("✓ Test 5: Frontend API client files...", end=" ")
try:
    api_file = Path("/gpfs/projects/p32143/moot_court/front_end/front_end_1/src/services/api.ts")
    assert api_file.exists(), "api.ts not found"
    env_file = Path("/gpfs/projects/p32143/moot_court/front_end/front_end_1/.env.development")
    assert env_file.exists(), ".env.development not found"
    print("PASS")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)

print("\n✅ All tests passed!")
