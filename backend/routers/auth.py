from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session
from google.auth.transport import requests
from google.oauth2 import id_token
import os
from backend.database import get_db
from backend.models.user import User
from backend.utils.auth_utils import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
)

router = APIRouter(tags=["authentication"])


class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class AuthResponse(BaseModel):
    access_token: str
    token_type: str
    user_id: str
    username: str
    email: str


class UserResponse(BaseModel):
    user_id: str
    username: str
    email: str
    tokens_used: int = 0
    token_limit: int = 30000


class GoogleLoginRequest(BaseModel):
    id_token: str


@router.post("/register", response_model=AuthResponse)
async def register(request: RegisterRequest, db: Session = Depends(get_db)):
    """
    Register a new user.
    Returns JWT token immediately (auto-login).
    """
    # Check if user already exists
    existing_user = db.query(User).filter(User.username == request.username).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists",
        )

    existing_email = db.query(User).filter(User.email == request.email).first()
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already exists",
        )

    # Create new user
    user = User(
        username=request.username,
        email=request.email,
        hashed_password=hash_password(request.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    # Create JWT token
    access_token = create_access_token(data={"sub": user.id})

    return AuthResponse(
        access_token=access_token,
        token_type="bearer",
        user_id=user.id,
        username=user.username,
        email=user.email,
    )


@router.post("/login", response_model=AuthResponse)
async def login(request: LoginRequest, db: Session = Depends(get_db)):
    """
    Login with username and password.
    Returns JWT token.
    """
    user = db.query(User).filter(User.username == request.username).first()

    if user is None or not verify_password(request.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User is inactive",
        )

    # Create JWT token
    access_token = create_access_token(data={"sub": user.id})

    return AuthResponse(
        access_token=access_token,
        token_type="bearer",
        user_id=user.id,
        username=user.username,
        email=user.email,
    )


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    """
    Get current user info from JWT token.
    Used by frontend on page load to validate token.
    """
    return UserResponse(
        user_id=current_user.id,
        username=current_user.username,
        email=current_user.email,
        tokens_used=current_user.tokens_used or 0,
        token_limit=current_user.token_limit or 3000,
    )


@router.post("/google", response_model=AuthResponse)
async def google_login(request: GoogleLoginRequest, db: Session = Depends(get_db)):
    """
    Google OAuth login endpoint.
    Verifies Google ID token and creates/retrieves user.
    """
    google_client_id = os.getenv("GOOGLE_CLIENT_ID")

    if not google_client_id:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Google OAuth not configured",
        )

    try:
        # Verify the ID token
        idinfo = id_token.verify_oauth2_token(request.id_token, requests.Request(), google_client_id)

        # Extract user info from token
        email = idinfo.get("email")
        name = idinfo.get("name", "").split()[0] if idinfo.get("name") else "user"

        if not email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email not found in Google token",
            )

        # Find or create user
        user = db.query(User).filter(User.email == email).first()

        if not user:
            # Generate a unique username from email
            username_base = email.split("@")[0]
            username = username_base
            counter = 1

            while db.query(User).filter(User.username == username).first():
                username = f"{username_base}{counter}"
                counter += 1

            # Create new user with empty password (OAuth user)
            user = User(
                username=username,
                email=email,
                hashed_password=hash_password(""),  # OAuth users don't have passwords
                is_active=True,
            )
            db.add(user)
            db.commit()
            db.refresh(user)

        # Check if user is active
        if not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User is inactive",
            )

        # Create JWT token
        access_token = create_access_token(data={"sub": user.id})

        return AuthResponse(
            access_token=access_token,
            token_type="bearer",
            user_id=user.id,
            username=user.username,
            email=user.email,
        )

    except ValueError as e:
        # Invalid token
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Google token",
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Google authentication failed: {str(e)}",
        )
