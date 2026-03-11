import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './components/LandingPage';
import { CaseIntake } from './components/CaseIntake';
import { CaseSuccess } from './components/CaseSuccess';
import { EvidencePage } from './components/evidence/EvidencePage';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { CourtPage } from './components/court/CourtPage';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';
import { fetchDashboardSummary } from './services/api';

function SmartRootRoute() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(false);
  const [checked, setChecked] = useState(false);

  // If the user explicitly navigated here to start a new case, skip the redirect
  const forceShowLanding = (location.state as { forceShowLanding?: boolean } | null)?.forceShowLanding;

  useEffect(() => {
    if (isLoading || checked || forceShowLanding) return;

    if (!isAuthenticated || !user) {
      setChecked(true);
      return;
    }

    // Authenticated — check if they already have a case
    setChecking(true);
    fetchDashboardSummary(user.userId)
      .then((summary) => {
        if (summary.cases && summary.cases.length > 0) {
          navigate(`/dashboard/${user.userId}`, { replace: true });
        } else {
          setChecked(true);
        }
      })
      .catch(() => setChecked(true))
      .finally(() => setChecking(false));
  }, [isAuthenticated, isLoading, user, navigate, checked, forceShowLanding]);

  if (isLoading || checking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return <LandingPage />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SmartRootRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/intake"
          element={
            <ProtectedRoute>
              <CaseIntake />
            </ProtectedRoute>
          }
        />
        <Route
          path="/case/:userId"
          element={
            <ProtectedRoute>
              <CaseSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/evidence/:userId"
          element={
            <ProtectedRoute>
              <EvidencePage />
            </ProtectedRoute>
          }
        />

        {/* Dashboard - AI Evidence Recommendations */}
        <Route
          path="/dashboard/:userId"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Court Hearing Simulator */}
        <Route
          path="/court/:userId"
          element={
            <ProtectedRoute>
              <CourtPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/court"
          element={
            <ProtectedRoute>
              <CourtPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
