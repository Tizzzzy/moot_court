import { useState } from 'react';
import { Header } from './components/Header';
import { CaseSelector } from './components/CaseSelector';
import { PracticeHearingCard } from './components/PracticeHearingCard';
import { CaseDetailsCard } from './components/CaseDetailsCard';
import { EvidenceCard } from './components/EvidenceCard';
import { PreparationJourney } from './components/PreparationJourney';
import { SimulationHistory } from './components/SimulationHistory';

export interface Case {
  id: string;
  alias: string;
  number: string;
  amountClaimed: string;
  type: string;
  defendant: string;
  hearingDate: string;
  daysAway: number;
}

export interface Evidence {
  id: string;
  title: string;
  description: string;
  uploaded: boolean;
}

export interface PracticeSession {
  id: string;
  title: string;
  date: string;
  time: string;
  status: 'incomplete' | 'win' | 'lose';
}

const mockCases: Case[] = [
  {
    id: '1',
    alias: 'My Tooth Injury Case',
    number: '2025-SC-1234',
    amountClaimed: '$2,400',
    type: 'Security Deposit Dispute',
    defendant: 'Defendant name',
    hearingDate: 'Friday, February 13, 2026',
    daysAway: 34
  },
  {
    id: '2',
    alias: 'Property Damage Case',
    number: '2025-SC-5678',
    amountClaimed: '$1,800',
    type: 'Property Damage',
    defendant: 'John Smith',
    hearingDate: 'Monday, March 3, 2026',
    daysAway: 52
  }
];

const mockEvidence: Evidence[] = [
  {
    id: '1',
    title: 'AI recommended evidence title',
    description: 'We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner\'s established physical presence and ongoing professional activity in the United States.',
    uploaded: false
  },
  {
    id: '2',
    title: 'AI recommended evidence title',
    description: 'We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner\'s established physical presence and ongoing professional activity in the United States.',
    uploaded: false
  },
  {
    id: '3',
    title: 'AI recommended evidence title',
    description: 'We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner\'s established physical presence and ongoing professional activity in the United States.',
    uploaded: false
  },
  {
    id: '4',
    title: 'AI recommended evidence title',
    description: 'We recommend submitting this Lease Agreement as supporting evidence because it demonstrates the petitioner\'s established physical presence and ongoing professional activity in the United States.',
    uploaded: false
  },
  {
    id: '5',
    title: 'Other evidence',
    description: 'Please upload any evidence you believe could be helpful. This may include documents, images, or any other relevant materials that support your case.',
    uploaded: false
  }
];

const mockSessions: PracticeSession[] = [
  {
    id: '1',
    title: 'Initial Practice Session',
    date: 'Today',
    time: '10:15 AM',
    status: 'incomplete'
  },
  {
    id: '2',
    title: 'Evidence Review Practice',
    date: 'January 8, 2026',
    time: '4:15 AM',
    status: 'win'
  },
  {
    id: '3',
    title: 'Evidence Review Practice',
    date: 'January 12, 2026',
    time: '4:15 AM',
    status: 'lose'
  }
];

export default function App() {
  const [selectedCase, setSelectedCase] = useState<Case>(mockCases[0]);
  const [evidence, setEvidence] = useState<Evidence[]>(mockEvidence);
  const [sessions] = useState<PracticeSession[]>(mockSessions);

  const handleUpload = (evidenceId: string) => {
    setEvidence(evidence.map(e => 
      e.id === evidenceId ? { ...e, uploaded: true } : e
    ));
  };

  const uploadedCount = evidence.filter(e => e.uploaded).length;

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <Header />
      
      <div className="max-w-[1256px] mx-auto px-6 py-8">
        {/* Main Content Area */}
        <div className="flex gap-12 items-start">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[24px] font-semibold text-[#101828] leading-[32px] tracking-[0.0703px]">
                  Hi, Mia
                </h1>
                <p className="text-[16px] text-[#4a5565] leading-[24px] tracking-[-0.3125px] mt-2">
                  Manage your cases and prepare for court
                </p>
              </div>

              <CaseSelector 
                cases={mockCases}
                selectedCase={selectedCase}
                onSelectCase={setSelectedCase}
              />
            </div>

            <PracticeHearingCard />
            
            <CaseDetailsCard case={selectedCase} />
            
            <EvidenceCard 
              evidence={evidence}
              uploadedCount={uploadedCount}
              onUpload={handleUpload}
            />
          </div>

          {/* Right Sidebar */}
          <div className="w-[395px] space-y-6 flex-shrink-0">
            <PreparationJourney />
            <SimulationHistory sessions={sessions} />
          </div>
        </div>
      </div>
    </div>
  );
}
