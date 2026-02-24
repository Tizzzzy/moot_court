# Authentication System - Quick Start Guide

## Starting the System

### 1. Backend Setup

```bash
# Activate conda environment
conda activate moot_court

# Start backend server
python -m uvicorn backend.main:app --reload --port 8000
```

You should see:
```
[STARTUP] Creating database tables...
[STARTUP] Database tables created
INFO:     Application startup complete.
Uvicorn running on http://127.0.0.1:8000
```

API documentation available at: **http://localhost:8000/docs**

### 2. Frontend Setup

```bash
# In a new terminal
cd front_end/front_end_1

# Install dependencies (first time only)
npm install

# Start dev server
npm run dev
```

You should see:
```
  VITE v6.3.5
  ➜  Local: http://localhost:3000
```

Frontend available at: **http://localhost:3000**

---

## Testing the Authentication System

### Manual Testing via Browser

#### 1. **Register New User**
1. Go to: http://localhost:3000/register
2. Fill in form:
   - Username: `testuser`
   - Email: `testuser@example.com`
   - Password: `testpass123`
   - Confirm: `testpass123`
3. Click "Register"
4. Should redirect to `/` (CaseIntake page)
5. Top of page shows "Start Your Case" indicating logged in

#### 2. **Test Token Persistence**
1. Refresh page (Cmd+R / Ctrl+R)
2. Should still be logged in (token from localStorage validated)
3. Open DevTools (F12) → Application → LocalStorage
4. See `auth_token` and `auth_user` stored

#### 3. **Test Logout**
1. (Look for logout button in header area)
2. Click logout
3. Should redirect to `/login`
4. Try to go back to `/` → Redirected to `/login` again

#### 4. **Test Login**
1. Go to: http://localhost:3000/login
2. Fill in credentials from registration:
   - Username: `testuser`
   - Password: `testpass123`
3. Click "Login"
4. Should redirect to `/` and be logged in again

#### 5. **Test Case Workflow**
1. Submit case data (fill all required fields)
2. Case should be saved with authenticated user ID (UUID)
3. Navigate through evidence → dashboard → court flow
4. All should work with authenticated user

### Testing via API (Postman / curl)

#### 1. **Register**
```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "apiuser",
    "email": "apiuser@example.com",
    "password": "apipass123"
  }'
```

Response:
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "bearer",
  "user_id": "550e8400-e29b-41d4-a716-446655440000",
  "username": "apiuser",
  "email": "apiuser@example.com"
}
```

#### 2. **Login**
```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "apiuser",
    "password": "apipass123"
  }'
```

#### 3. **Get Current User** (requires token)
```bash
# Use access_token from response above
curl -X GET http://localhost:8000/api/auth/me \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc..."
```

Response:
```json
{
  "user_id": "550e8400-e29b-41d4-a716-446655440000",
  "username": "apiuser",
  "email": "apiuser@example.com"
}
```

#### 4. **Test Invalid Token**
```bash
curl -X GET http://localhost:8000/api/auth/me \
  -H "Authorization: Bearer invalid_token_here"
```

Should return 401 Unauthorized with error message.

### Testing WebSocket Auth

#### Via Browser Console
```javascript
// With valid token
const token = localStorage.getItem('auth_token');
const ws = new WebSocket(`ws://localhost:8000/api/court/sessions/test-session-id/ws?token=${encodeURIComponent(token)}`);
ws.onopen = () => console.log('WebSocket connected!');
ws.onerror = (e) => console.error('WebSocket error:', e);
```

#### Via curl (WebSocket echo test)
```bash
# First create a session to get a valid session ID
curl -X POST http://localhost:8000/api/court/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"user_id": "USER_ID", "case_id": 1}'
```

---

## Verification Checklist

- [x] Backend server starts without errors
- [x] Frontend server starts and loads
- [x] Register page loads at `/register`
- [x] Can register new user
- [x] Redirect to case intake after registration
- [x] Token stored in localStorage
- [x] Refresh page keeps user logged in
- [x] Logout button works
- [x] Can login with existing credentials
- [x] Protected routes redirect to login when logged out
- [x] API endpoints return 401 without valid token
- [x] WebSocket auth works with token query param

---

## Troubleshooting

### "Internal Server Error" on Registration
**Cause**: Backend not reloaded or database issue
**Fix**:
- Restart backend server
- Check .env file has all required settings
- Clear database: `rm moot_court.db` and restart

### "Cannot connect to backend" on Frontend
**Cause**: Backend not running or CORS issue
**Fix**:
- Ensure backend running on http://localhost:8000
- Check CORS allows `http://localhost:3000`
- Check network tab in DevTools for actual error

### "Token undefined" Error
**Cause**: Browser localStorage not accessible
**Fix**:
- Clear browser cache
- Check incognito mode (if using private browsing)
- Verify localStorage enabled in browser

### WebSocket Connection Fails
**Cause**: Missing or invalid token
**Fix**:
- Ensure user is logged in
- Check token is passed in query parameter
- Clear browser cache and login again

---

## Environment Variables

### Backend (.env file)
```
GEMINI_API_KEY=...
HUGGINGFACE_TOKEN=...
DATABASE_URL=sqlite:///./moot_court.db
SECRET_KEY=205db2ae2c617a3e4cee06a25f2b54f2283d62b168ef965d03e7c73735912436
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
```

### Frontend (.env.local file - optional)
```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_WS_BASE_URL=ws://localhost:8000/api
```

---

## API Endpoints

### Authentication Routes
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/api/auth/register` | No | Register new user |
| POST | `/api/auth/login` | No | Login with credentials |
| GET | `/api/auth/me` | Yes | Get current user |

### Protected Routes (Examples)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/court/sessions` | Yes | Create court session |
| POST | `/api/ocr/upload` | Optional | Upload PDF for OCR |
| POST | `/api/evidence/submit-case/{user_id}` | Optional | Submit case data |

---

## Database

### Users Table
The `users` table is created automatically on first run:

```sql
CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  hashed_password VARCHAR(255) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

To inspect database:
```bash
# Install sqlite3 if needed
sqlite3 moot_court.db

# View users table
SELECT id, username, email, is_active FROM users;

# Exit
.quit
```

---

## Production Deployment

### Before Production
1. **Generate new SECRET_KEY**:
   ```bash
   python -c "import secrets; print(secrets.token_hex(32))"
   ```
2. **Use environment variables** for all secrets
3. **Enable HTTPS** for all endpoints
4. **Update CORS** to allow production domains only
5. **Set ACCESS_TOKEN_EXPIRE_MINUTES** to desired value (e.g., 60 for 1 hour)

### Docker Deployment
```dockerfile
FROM python:3.12
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Support & Documentation

- FastAPI Docs: http://localhost:8000/docs (Swagger UI)
- Backend Code: `backend/routers/auth.py`
- Frontend Code: `front_end/front_end_1/src/contexts/AuthContext.tsx`
- Full Summary: `IMPLEMENTATION_SUMMARY.md`

---

**Last Updated**: February 23, 2026
