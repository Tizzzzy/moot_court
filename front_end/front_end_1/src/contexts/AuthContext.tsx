import React, { createContext, useContext, useState, useEffect } from 'react';
import authService, { AuthResponse, UserResponse, RegisterRequest, LoginRequest } from '@/services/authService';

interface User {
  userId: string;
  username: string;
  email: string;
  tokensUsed?: number;
  tokenLimit?: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  register: (data: RegisterRequest) => Promise<AuthResponse>;
  login: (data: LoginRequest) => Promise<AuthResponse>;
  loginWithGoogle: (response: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const userInfo = await authService.getMe();
        setUser({
          userId: userInfo.user_id,
          username: userInfo.username,
          email: userInfo.email,
          tokensUsed: userInfo.tokens_used,
          tokenLimit: userInfo.token_limit,
        });
        setError(null);
      } catch (err) {
        // Token is invalid or expired, clear it
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setUser(null);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  const register = async (data: RegisterRequest): Promise<AuthResponse> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.register(data);
      handleAuthResponse(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data: LoginRequest): Promise<AuthResponse> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login(data);
      handleAuthResponse(response);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = (response: AuthResponse) => {
    handleAuthResponse(response);
  };

  const handleAuthResponse = (response: AuthResponse) => {
    // Store token
    localStorage.setItem('auth_token', response.access_token);

    // Store user info with default token values
    const userData: User = {
      userId: response.user_id,
      username: response.username,
      email: response.email,
      tokensUsed: 0,
      tokenLimit: 3000,
    };
    localStorage.setItem('auth_user', JSON.stringify(userData));

    setUser(userData);

    // Fetch fresh user info with token counts
    authService
      .getMe()
      .then((userInfo) => {
        setUser({
          userId: userInfo.user_id,
          username: userInfo.username,
          email: userInfo.email,
          tokensUsed: userInfo.tokens_used,
          tokenLimit: userInfo.token_limit,
        });
      })
      .catch((err) => console.error('Failed to fetch user info:', err));
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('moot_court_user_id');
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        register,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
