import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  requireAuth = true,
}) => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
      // Redirect to login with the intended destination
      navigate("/login", { state: { from: location.pathname } });
    }

    // If user is authenticated but is on the login page
    if (!requireAuth && isAuthenticated) {
      navigate("/orders");
    }
  }, [isAuthenticated, requireAuth, navigate, location.pathname]);

  // If authentication is required and user is not authenticated, don't render children
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  // If user is authenticated and is on a non-auth page, don't render children
  if (!requireAuth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
