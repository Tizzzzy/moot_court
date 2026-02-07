import { Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { CaseIntake } from './components/CaseIntake';
import { CaseSuccess } from './components/CaseSuccess';
import { EvidencePage } from './components/evidence/EvidencePage';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { CourtPage } from './components/court/CourtPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />

      <Routes>
        {/* Case Intake Flow */}
        <Route path="/" element={<CaseIntake />} />
        <Route path="/case/:userId" element={<CaseSuccess />} />
        <Route path="/evidence/:userId" element={<EvidencePage />} />

        {/* Dashboard - AI Evidence Recommendations */}
        <Route path="/dashboard/:userId" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Court Hearing Simulator */}
        <Route path="/court/:userId" element={<CourtPage />} />
        <Route path="/court" element={<CourtPage />} />
      </Routes>
    </div>
  );
}
