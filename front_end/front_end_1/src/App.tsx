import { Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { CaseIntake } from './components/CaseIntake';
import { CaseSuccess } from './components/CaseSuccess';
import { EvidencePage } from './components/evidence/EvidencePage';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { CourtPage } from './components/court/CourtPage';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      <Routes>
        {/* Public Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/"
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
