#!/usr/bin/env python3
"""
Test script for authentication endpoints.
Run with: python test_auth.py
"""

import subprocess
import json
import time
import sys

API_BASE_URL = "http://localhost:8000/api"

def make_request(method, endpoint, data=None, headers=None):
    """Make HTTP request using curl."""
    url = f"{API_BASE_URL}{endpoint}"
    cmd = ["curl", "-s", "-X", method, url]

    if headers:
        for key, value in headers.items():
            cmd.extend(["-H", f"{key}: {value}"])

    if data:
        cmd.extend(["-H", "Content-Type: application/json", "-d", json.dumps(data)])

    result = subprocess.run(cmd, capture_output=True, text=True)
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        print(f"Error parsing response: {result.stdout}")
        return None


def test_register():
    """Test user registration."""
    print("\n=== Testing User Registration ===")

    test_user = {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "password123"
    }

    response = make_request("POST", "/auth/register", test_user)

    if response and "access_token" in response:
        print(f"✓ Registration successful")
        print(f"  - User ID: {response['user_id']}")
        print(f"  - Username: {response['username']}")
        print(f"  - Token: {response['access_token'][:20]}...")
        return response
    else:
        print(f"✗ Registration failed: {response}")
        return None


def test_login(username, password):
    """Test user login."""
    print("\n=== Testing User Login ===")

    credentials = {
        "username": username,
        "password": password
    }

    response = make_request("POST", "/auth/login", credentials)

    if response and "access_token" in response:
        print(f"✓ Login successful")
        print(f"  - User ID: {response['user_id']}")
        print(f"  - Token: {response['access_token'][:20]}...")
        return response
    else:
        print(f"✗ Login failed: {response}")
        return None


def test_me(token):
    """Test getting current user info."""
    print("\n=== Testing Get Current User ===")

    headers = {"Authorization": f"Bearer {token}"}
    response = make_request("GET", "/auth/me", headers=headers)

    if response and "user_id" in response:
        print(f"✓ Get current user successful")
        print(f"  - User ID: {response['user_id']}")
        print(f"  - Username: {response['username']}")
        print(f"  - Email: {response['email']}")
        return response
    else:
        print(f"✗ Get current user failed: {response}")
        return None


def test_invalid_token():
    """Test with invalid token."""
    print("\n=== Testing Invalid Token ===")

    headers = {"Authorization": "Bearer invalid_token_12345"}
    response = make_request("GET", "/auth/me", headers=headers)

    if response and "detail" in response:
        print(f"✓ Invalid token correctly rejected")
        print(f"  - Error: {response['detail']}")
    else:
        print(f"✗ Invalid token handling failed")


def main():
    """Run all auth tests."""
    print("=" * 50)
    print("Starting Authentication Tests")
    print("=" * 50)
    print("\nNote: Make sure backend is running on http://localhost:8000")

    # Try to reach the server
    try:
        response = make_request("GET", "/health")
        if response and "status" in response:
            print(f"✓ Backend is healthy: {response['status']}")
        else:
            print("⚠ Backend might not be accessible")
            print("  Please start backend with: uvicorn backend.main:app --reload --port 8000")
            sys.exit(1)
    except Exception as e:
        print(f"✗ Cannot reach backend: {e}")
        print("  Please start backend with: uvicorn backend.main:app --reload --port 8000")
        sys.exit(1)

    # Test registration
    user_data = test_register()
    if not user_data:
        print("\n✗ Cannot continue without successful registration")
        return False

    token = user_data["access_token"]

    # Test get current user
    user_info = test_me(token)
    if not user_info:
        print("\n✗ Cannot continue without successful /me endpoint")
        return False

    # Test login
    login_data = test_login(user_data["username"], "password123")
    if not login_data:
        print("\n✗ Login failed")
        return False

    # Test invalid token
    test_invalid_token()

    print("\n" + "=" * 50)
    print("✓ All authentication tests passed!")
    print("=" * 50)
    return True


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
