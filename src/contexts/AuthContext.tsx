import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { refreshAccessToken } from '@/utils/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  accessToken: null,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (typeof window === 'undefined') return;

      const token = localStorage.getItem('access-token');
      const refreshToken = localStorage.getItem('refresh-token');

      if (token) {
        setAccessToken(token);
        setIsAuthenticated(true);
      } else if (!token && refreshToken) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          setAccessToken(newToken);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    setAccessToken(null);
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, logout }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
