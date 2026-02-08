# Phase 2: Evidence Recommendation & Validation

## Overview

Phase 2 builds on the OCR foundation to add evidence recommendation and validation endpoints. This phase connects the extracted case data to the LLM-based evidence analysis pipeline.

## Architecture

### Database Models (Phase 2 Extension)

**EvidenceType Table**
- `id`, `case_id` (FK)
- `folder_name` (evidence category, e.g., "Receipt_of_Demand")
- `description` (what evidence is expected)
- `status` (pending → uploaded → validated)

**EvidenceSubmission Table**
- `id`, `evidence_type_id` (FK)
- `file_path`, `file_name`, `file_size`
- `is_ready` (boolean - validation result)
- `feedback` (LLM analysis text)
- `uploaded_at`, `validated_at`

### API Endpoints (Phase 2)

```
POST /api/evidence/recommend
  - Input: case_id
  - Output: List of recommended evidence types
  - Action: Call LLM to generate recommendations
  - Background Task: Create folder structure

POST /api/evidence/upload
  - Input: evidence_type_id, file (multipart)
  - Output: submission_id, status
  - Action: Save file, queue validation
  - Background Task: Validate with LLM

GET /api/evidence/status/{evidence_type_id}
  - Output: Current validation status, feedback
  - Returns: is_ready flag for each evidence type

GET /api/evidence/list/{case_id}
  - Output: All evidence types for a case with status
```

### Background Tasks

**Evidence Recommendation Task**
```python
def recommend_evidence_task(case_id: int):
    # 1. Fetch case from database
    # 2. Build case info dict
    # 3. Call evidence_recommend/llm.py
    # 4. Create folders in data/{user_id}/evidence/
    # 5. Save recommendations to EvidenceType records
    # 6. Return list of recommendations
```

**Evidence Validation Task**
```python
def validate_evidence_task(submission_id: int):
    # 1. Fetch submission and evidence type
    # 2. Get expected description
    # 3. Call evidence_feedback/llm.py with file
    # 4. Parse LLM response (is_ready, feedback)
    # 5. Update EvidenceSubmission record
    # 6. Update EvidenceType status
    # 7. Write feedback.md to folder
```

## Implementation Steps

### Step 1: Create Evidence Models
**File**: `backend/models/evidence.py`

```python
class EvidenceType(Base):
    __tablename__ = "evidence_types"
    id = Column(Integer, primary_key=True)
    case_id = Column(Integer, ForeignKey("cases.id"))
    folder_name = Column(String(255))
    description = Column(Text)
    status = Column(String(20))  # pending, uploaded, validated
    created_at = Column(DateTime)

class EvidenceSubmission(Base):
    __tablename__ = "evidence_submissions"
    id = Column(Integer, primary_key=True)
    evidence_type_id = Column(Integer, ForeignKey("evidence_types.id"))
    file_path = Column(Text)
    is_ready = Column(Boolean)
    feedback = Column(Text)
    uploaded_at = Column(DateTime)
```

### Step 2: Create Evidence Services
**Files**:
- `backend/services/evidence_recommend_service.py`
- `backend/services/evidence_validation_service.py`

```python
# recommend_service.py
def generate_recommendations(case_id: int, db: Session):
    """Generate recommendations from extracted case data"""
    case = db.query(Case).get(case_id)
    case_info = {
        "case_type": case.case_type,
        "claim_summary": case.claim_summary,
        # ... other fields
    }

    # Call existing recommend logic
    recommendations = prove_recommend(
        case_info,
        conversation_json_path,
        evidence_folder_path
    )

    # Save to database
    for folder, desc in recommendations.items():
        et = EvidenceType(
            case_id=case_id,
            folder_name=folder,
            description=desc
        )
        db.add(et)
    db.commit()
    return recommendations

# validation_service.py
def validate_evidence_file(submission_id: int):
    """Background task for evidence validation"""
    submission = db.query(EvidenceSubmission).get(submission_id)
    evidence_type = submission.evidence_type

    # Call existing validation logic
    is_ready, feedback = evidence_feedback(
        case_info,
        evidence_type.description,
        submission.file_path
    )

    # Update records
    submission.is_ready = is_ready
    submission.feedback = feedback
    evidence_type.status = "validated" if is_ready else "uploaded"
    db.commit()
```

### Step 3: Create Evidence Router
**File**: `backend/routers/evidence.py`

```python
@router.post("/recommend")
def recommend_evidence(case_id: int, db: Session = Depends(get_db)):
    """Generate evidence recommendations"""
    try:
        recommendations = generate_recommendations(case_id, db)
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(500, str(e))

@router.post("/upload")
async def upload_evidence(
    evidence_type_id: int,
    file: UploadFile,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    """Upload evidence file for validation"""
    # Save file
    submission = EvidenceSubmission(
        evidence_type_id=evidence_type_id,
        file_path=str(file_path),
        file_name=file.filename
    )
    db.add(submission)
    db.commit()

    # Queue validation
    background_tasks.add_task(validate_evidence_file, submission.id)
    return {"submission_id": submission.id, "status": "validating"}

@router.get("/status/{evidence_type_id}")
def get_evidence_status(evidence_type_id: int, db: Session = Depends(get_db)):
    """Check validation status"""
    et = db.query(EvidenceType).get(evidence_type_id)
    submission = db.query(EvidenceSubmission)\
        .filter_by(evidence_type_id=evidence_type_id)\
        .order_by(EvidenceSubmission.uploaded_at.desc())\
        .first()

    return {
        "status": et.status,
        "is_ready": submission.is_ready if submission else False,
        "feedback": submission.feedback if submission else None
    }
```

### Step 4: Update Frontend Components

**New Component**: `src/components/EvidenceUpload.tsx`

```typescript
export function EvidenceUpload({ caseId }: { caseId: number }) {
  const [evidenceTypes, setEvidenceTypes] = useState([])
  const [loading, setLoading] = useState(true)

  // Load recommendations on mount
  useEffect(() => {
    loadRecommendations()
  }, [caseId])

  const loadRecommendations = async () => {
    const res = await fetch(
      `${API_URL}/evidence/recommend?case_id=${caseId}`,
      { method: 'POST' }
    )
    const data = await res.json()
    setEvidenceTypes(data.recommendations)
  }

  const handleUpload = async (evidenceTypeId: number, file: File) => {
    const formData = new FormData()
    formData.append('evidence_type_id', evidenceTypeId)
    formData.append('file', file)

    const res = await fetch(`${API_URL}/evidence/upload`, {
      method: 'POST',
      body: formData
    })

    // Poll for validation completion
    const pollInterval = setInterval(async () => {
      const status = await fetch(
        `${API_URL}/evidence/status/${evidenceTypeId}`
      )
      const data = await status.json()

      if (data.validated_at) {
        clearInterval(pollInterval)
        loadRecommendations() // Refresh
      }
    }, 2000)
  }

  return (
    <div>
      {evidenceTypes.map(ev => (
        <UploadCard
          key={ev.id}
          evidence={ev}
          onUpload={handleUpload}
        />
      ))}
    </div>
  )
}
```

### Step 5: Integration Points

**Update CaseIntake.tsx**
- After form submission, set `currentCaseId`
- Show `EvidenceUpload` component
- Call evidence recommendation endpoint

**Update App.tsx**
- Add route for evidence upload step
- Pass case_id through app state
- Add completion callback

## Testing Strategy

### Unit Tests
```python
# test_evidence_recommend.py
def test_recommend_endpoint():
    """POST /api/evidence/recommend creates records"""

def test_recommendation_folders():
    """Evidence folders created in correct location"""

def test_evidence_submission():
    """Submission record created on upload"""
```

### Integration Tests
```python
def test_full_evidence_flow():
    """Case → Recommend → Upload → Validate → Complete"""
    # 1. Create case
    # 2. POST /evidence/recommend
    # 3. POST /evidence/upload with file
    # 4. Poll /evidence/status until ready
    # 5. Verify submission record
```

### Frontend Tests
```typescript
// test_evidence.tsx
describe('EvidenceUpload', () => {
  it('loads recommendations on mount')
  it('uploads file on selection')
  it('polls status every 2 seconds')
  it('displays feedback after validation')
})
```

## File Structure After Phase 2

```
backend/
├── models/
│   ├── case.py (existing)
│   └── evidence.py (NEW)
├── routers/
│   ├── ocr.py (existing)
│   ├── cases.py (existing)
│   └── evidence.py (NEW)
└── services/
    ├── ocr_service.py (existing)
    ├── evidence_recommend_service.py (NEW)
    └── evidence_validation_service.py (NEW)

front_end/
├── src/components/
│   ├── CaseIntake.tsx (updated)
│   ├── EvidenceUpload.tsx (NEW)
│   └── ...
└── src/services/
    └── api.ts (updated with evidence endpoints)
```

## Database Changes

```sql
-- New tables
CREATE TABLE evidence_types (
    id INTEGER PRIMARY KEY,
    case_id INTEGER NOT NULL REFERENCES cases(id),
    folder_name VARCHAR(255),
    description TEXT,
    status VARCHAR(20),
    created_at DATETIME
);

CREATE TABLE evidence_submissions (
    id INTEGER PRIMARY KEY,
    evidence_type_id INTEGER NOT NULL REFERENCES evidence_types(id),
    file_path TEXT,
    file_name VARCHAR(255),
    file_size INTEGER,
    is_ready BOOLEAN,
    feedback TEXT,
    uploaded_at DATETIME,
    validated_at DATETIME
);

-- Indexes
CREATE INDEX idx_evidence_case ON evidence_types(case_id);
CREATE INDEX idx_submission_evidence ON evidence_submissions(evidence_type_id);
```

## Performance Considerations

- **LLM Calls**: Each validation is a separate API call (~2-5 seconds each)
- **File Uploads**: ~1-2 seconds for typical documents (PDF, images)
- **Database**: SQLite may struggle with many concurrent uploads; consider PostgreSQL
- **Caching**: Consider caching LLM recommendations per case type

## Error Handling

**Failed Recommendations**
- Save error to database
- Retry with exponential backoff
- Display user-friendly message

**Failed Validations**
- Mark submission as failed
- Show error feedback to user
- Allow re-upload

**File Validation**
- File size limits (max 50MB)
- Allowed types (PDF, JPG, PNG, XLSX)
- Virus scanning (optional, add ClamAV)

## Migration Path

If upgrading from SQLite to PostgreSQL:

```bash
# Dump SQLite
sqlite3 moot_court.db .dump > dump.sql

# Create PostgreSQL database
createdb moot_court

# Update config
DATABASE_URL=postgresql://user:pass@localhost/moot_court

# Alembic migration (recommended)
alembic init migrations
alembic revision --autogenerate
alembic upgrade head
```

## Known Limitations

1. **Synchronous Validation**: Evidence validation blocks; consider async with Celery
2. **No Retry Logic**: Failed validations don't retry; add task queue
3. **No Evidence Versioning**: Can't track multiple uploads of same evidence
4. **Single User Testing**: No concurrent user testing yet

## Next: Phase 3 - Court Simulation

After Phase 2 is complete:
- Add WebSocket endpoint for real-time court simulation
- Integrate Gemini API for judge/defendant/clerk roles
- Add court transcript recording
- Implement verdict tracking

## Estimated Timeline

- Database Models: 30 minutes
- Services: 45 minutes
- Routers: 45 minutes
- Frontend: 1 hour
- Testing: 1 hour
- **Total**: ~4 hours

## Resources

- Existing: `evidence_recommend/evidence_recommend.py`
- Existing: `evidence_feedback/evidence_feedback.py`
- Reference: `CLAUDE.md` project overview
- Reference: `IMPLEMENTATION_SUMMARY.md` Phase 1 details
