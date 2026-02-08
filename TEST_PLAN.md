# Testing Plan: Evidence Page Data Loading Fix

## Overview
This document outlines the testing strategy for the database-to-filesystem sync fix that enables the evidence page to load case data correctly.

## Background: The Problem

**Issue:** Evidence page showed "Failed to load case data" error
- **Root Cause:** OCR service saved data to database only, but evidence endpoints read from file system
- **Missing File:** `data/{userId}/ocr_output/extracted_data.json`

**Solution:** Modified OCR service to write JSON file after database commit

## Testing Strategy

### Phase 1: Unit Tests (Before Starting Backend)

#### Test 1.1: Backfill Script Works
**Objective:** Verify backfill script can read from database and write JSON file
**Status:** ✅ PASSED
- Script executed: `python backend/scripts/backfill_extracted_data.py user_1769976068605_mfuzn2x1r`
- File created: `data/user_1769976068605_mfuzn2x1r/ocr_output/extracted_data.json`
- Content verified: Contains expected fields (plaintiffs, defendants, claim_summary, etc.)

#### Test 1.2: JSON File Format Correct
**Objective:** Verify backfilled file matches expected format
**Status:** ✅ PASSED
- File contains all required fields:
  - `case_number` (null OK)
  - `case_type` ("Small Claims Complaint")
  - `state` ("Illinois")
  - `filing_date` (null OK)
  - `hearing_date` (null OK)
  - `plaintiffs` (array with name, address)
  - `defendants` (array with name, address)
  - `claim_summary` (string)
  - `amount_sought` (numeric string)
  - `incident_date` (ISO date)
  - `demand_letter_sent` (boolean)
  - `agreement_included` (boolean)

### Phase 2: API Integration Tests (With Backend Running)

**Prerequisites:**
```bash
# Terminal 1: Start backend
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2: Start frontend
cd front_end/front_end_1
npm run dev

# Terminal 3: Run tests
cd ..
```

#### Test 2.1: GET /api/case-data/{user_id}
**Objective:** Verify endpoint reads JSON file and returns case data
**Method:** Curl
```bash
curl http://localhost:8000/api/case-data/user_1769976068605_mfuzn2x1r
```
**Expected Result:** HTTP 200 with JSON response containing case data
**Success Criteria:**
- Status code: 200
- Response body contains: plaintiffs, defendants, claim_summary, amount_sought
- Response format matches TypeScript CaseData interface

#### Test 2.2: GET /api/evidence/recommend/{user_id}
**Objective:** Verify evidence recommendation endpoint works
**Method:** Curl
```bash
curl http://localhost:8000/api/evidence/recommend/user_1769976068605_mfuzn2x1r
```
**Expected Result:** HTTP 200 with recommendations
**Success Criteria:**
- Status code: 200
- Response includes "recommendations" key
- Recommendations array has multiple categories (Financial_Records, Incident_Documentation, etc.)
- Optional "cached" flag indicates if recommendations were cached

#### Test 2.3: New User OCR Upload Flow
**Objective:** Verify new OCR uploads write JSON file
**Flow:**
1. Open frontend: http://localhost:5173/
2. Upload a PDF (or use existing test PDF)
3. Wait for OCR processing to complete (check console logs)
4. Observe: "Save and Continue" button appears
5. Click "Save and Continue" and note the user ID in URL
6. Check file system:
   ```bash
   ls -la data/{userId}/ocr_output/extracted_data.json
   cat data/{userId}/ocr_output/extracted_data.json
   ```
**Expected Result:**
- JSON file created in correct location
- File contains extracted case data from PDF
- File is valid JSON (not corrupted)

### Phase 3: End-to-End User Flow Tests (Frontend + Backend)

#### Test 3.1: Case Intake → Success Screen → Evidence Page
**Objective:** Verify complete navigation flow works
**Steps:**
1. Open http://localhost:5173/
2. Upload PDF or enter case data manually
3. Click "Save and Continue"
4. **Expected:** Navigate to `/case/{userId}` with success message
5. See case summary displayed (plaintiffs, defendants, claim)
6. Click "Continue to Evidence Collection"
7. **Expected:** Navigate to `/evidence/{userId}`

#### Test 3.2: Evidence Page Loads Case Data
**Objective:** Verify evidence page displays case information without error
**Steps:**
1. Navigate to `/evidence/{userId}` (from Test 3.1)
2. **Expected:** No "Failed to load case data" error
3. **Expected:** Case information appears in "Your Case" section:
   - Plaintiff name
   - Defendant name
   - Case summary
4. **Expected:** Evidence categories load (not "0 of 0 categories")

#### Test 3.3: Evidence Recommendations Display
**Objective:** Verify AI-recommended evidence categories appear
**Expected:**
- At least 3-5 evidence categories listed
- Each category has:
  - Name (e.g., "Financial Records", "Incident Documentation")
  - Description from AI or fallback
  - "Upload Evidence" button
- No empty categories

#### Test 3.4: Evidence Upload and Analysis
**Objective:** Verify users can upload files and get feedback
**Steps:**
1. Click "Upload Evidence" for any category
2. Select a file (PDF, image, or document)
3. Click "Upload"
4. **Expected:** File appears in category with "Analyzing..." spinner
5. Wait for analysis to complete (10-30 seconds)
6. **Expected:** Feedback appears below file
7. Feedback should indicate if evidence is "READY" or "NOT READY" with explanation

### Phase 4: Error Handling Tests

#### Test 4.1: Invalid User ID
**Test:** Navigate to `/evidence/invalid_user_xyz`
**Expected:**
- Error message displayed (not blank page)
- User not blocked from navigation
- Backend returns 404 for API calls

#### Test 4.2: Missing Case Data
**Test:** Delete backfilled JSON file and reload
```bash
rm data/user_1769976068605_mfuzn2x1r/ocr_output/extracted_data.json
```
Navigate to evidence page
**Expected:**
- Clear error message (not generic error)
- Helpful message directing user to re-upload case data

#### Test 4.3: Backend Offline
**Test:** Stop backend, try to use evidence page
**Expected:**
- Loading state visible
- Error message after timeout (not infinite spinner)
- Clear message: "Backend connection lost"

### Phase 5: Browser Console Verification

**Objective:** Ensure no errors or warnings in console

**Check for:**
- [ ] No red errors in console
- [ ] No 404 errors in Network tab for API calls
- [ ] No CORS errors
- [ ] No TypeScript type errors (if running TypeScript check)

**Commands:**
```bash
# Check TypeScript compilation
cd front_end/front_end_1
npm run build  # Should complete without errors
```

## Test Results Summary

### Completed Tests
| Test | Status | Notes |
|------|--------|-------|
| Backfill script execution | ✅ PASS | User data successfully backfilled |
| JSON file format | ✅ PASS | All required fields present |
| Backfilled file readability | ✅ PASS | Valid JSON, correct structure |

### Pending Tests (Require Backend)
| Test | Status | Notes |
|------|--------|-------|
| GET /api/case-data endpoint | ⏳ PENDING | Awaiting backend start |
| GET /api/evidence/recommend endpoint | ⏳ PENDING | Awaiting backend start |
| New OCR upload | ⏳ PENDING | Awaiting frontend/backend integration |
| Evidence page loading | ⏳ PENDING | End-to-end test |
| Evidence upload and analysis | ⏳ PENDING | User workflow test |
| Error handling | ⏳ PENDING | Edge case tests |

## Quick Start Commands

### Backfill All Existing Users
```bash
cd C:\Users\super\OneDrive\Desk_top\courtAI\moot_court
python backend/scripts/backfill_extracted_data.py
```

### Backfill Specific User
```bash
python backend/scripts/backfill_extracted_data.py user_1769976068605_mfuzn2x1r
```

### Test Case Data Endpoint
```bash
curl http://localhost:8000/api/case-data/user_1769976068605_mfuzn2x1r | python -m json.tool
```

### Test Evidence Endpoint
```bash
curl http://localhost:8000/api/evidence/recommend/user_1769976068605_mfuzn2x1r | python -m json.tool
```

## Success Criteria

**The fix is complete when:**
1. ✅ Backfill script works and creates JSON files
2. ⏳ GET /api/case-data returns 200 with case data
3. ⏳ GET /api/evidence/recommend returns recommendations
4. ⏳ New OCR uploads create JSON files automatically
5. ⏳ Evidence page loads without "Failed to load case data" error
6. ⏳ Evidence categories display with descriptions
7. ⏳ File upload and analysis workflows function correctly
8. ⏳ No console errors or 404s in browser Network tab

## Files Involved

### Modified
- `backend/services/ocr_service.py` - JSON file writing added

### New
- `backend/scripts/backfill_extracted_data.py` - Backfill utility

### Accessed (Read-Only)
- `backend/routers/case_data.py` - Endpoint code
- `backend/routers/evidence.py` - Evidence endpoints
- `data/{userId}/ocr_output/extracted_data.json` - JSON file (created by script)

## Notes

- All tests should be run with fresh database state when possible
- Test users should have complete case data (plaintiffs, defendants, claim summary)
- Evidence analysis depends on OpenAI API availability
- File permissions must allow creation in `data/` directory (should be OK)

## Timeline

- **Phase 1:** ✅ Complete (1 hour)
- **Phase 2:** ⏳ Pending backend start (30 min)
- **Phase 3:** ⏳ Pending backend start (30 min)
- **Phase 4:** ⏳ Pending backend start (30 min)
- **Phase 5:** ⏳ Pending backend start (15 min)

**Total:** ~3 hours with backend running
