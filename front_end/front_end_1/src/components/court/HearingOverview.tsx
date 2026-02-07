import { ArrowLeft } from 'lucide-react';
import type { CaseData } from '../App';

interface HearingOverviewProps {
  onStartHearing: () => void;
  caseData?: CaseData | null;
  onBackToDashboard?: () => void;
}

const hearingSteps = [
  { id: 1, title: 'Judge Introduction', description: 'The judge explains the hearing process and sets ground rules for the proceeding.' },
  { id: 2, title: 'Plaintiff Presents Case', description: 'As the plaintiff, you present your evidence, witnesses, and arguments supporting your claim.' },
  { id: 3, title: 'Defendant Presents Case', description: 'The defendant presents their counter-arguments, evidence, and witnesses.' },
  { id: 4, title: "Judge's Questions", description: 'The judge may ask clarifying questions to both parties about the evidence and testimony.' },
  { id: 5, title: 'Judgment', description: 'The judge delivers their decision and explains the reasoning behind it.' },
];

export function HearingOverview({ onStartHearing, caseData, onBackToDashboard }: HearingOverviewProps) {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.1)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1344px] mx-auto px-12 py-4">
          <button
            onClick={onBackToDashboard}
            className="flex gap-3 items-center px-3 py-1.5 rounded-lg mb-2 hover:bg-[#f8fafc] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#0a0a0a]" />
            <span className="font-medium text-sm text-[#0a0a0a] tracking-[-0.15px]">Back to case dashboard</span>
          </button>
          <h1 className="font-semibold text-[28px] text-[#0f172b] leading-[36px] tracking-[-0.02em]">Practice Session</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center py-8 px-6">
        <div className="w-full max-w-[800px] space-y-6">
          {/* Case Overview */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
            <h2 className="text-[20px] font-semibold text-[#1e293b] mb-4 tracking-[-0.01em]">Case Overview</h2>
            {!caseData ? (
              <div className="text-center py-4 text-[#64748b]">
                <p className="text-sm">Loading case information...</p>
              </div>
            ) : (
              <div className="space-y-3">
                {caseData.case_number && (
                  <div className="flex">
                    <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Case Number:</span>
                    <span className="text-[15px] text-[#64748b]">{caseData.case_number}</span>
                  </div>
                )}
                <div className="flex">
                  <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Case Type:</span>
                  <span className="text-[15px] text-[#64748b] capitalize">{caseData.case_type?.replace(/-/g, ' ') || 'Small Claims'}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Plaintiff:</span>
                  <span className="text-[15px] text-[#64748b]">{caseData.plaintiffs?.[0]?.name || 'Not specified'}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Defendant:</span>
                  <span className="text-[15px] text-[#64748b]">{caseData.defendants?.[0]?.name || 'Not specified'}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Amount Sought:</span>
                  <span className="text-[15px] text-[#64748b]">${caseData.amount_sought?.toLocaleString() || '0'}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[15px] text-[#475569] min-w-[140px]">Claim:</span>
                  <span className="text-[15px] text-[#64748b]">{caseData.claim_summary || 'No summary available'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Hearing Process Overview */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
            <h2 className="text-[20px] font-semibold text-[#1e293b] mb-4 tracking-[-0.01em]">Hearing Process Overview</h2>
            
            <div className="space-y-3">
              {hearingSteps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-3">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#334155] text-white text-[13px] flex-shrink-0 font-semibold">
                      {step.id}
                    </div>
                    {index < hearingSteps.length - 1 && (
                      <div className="w-[2px] h-5 bg-[#e2e8f0] my-0.5" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-[2px]">
                    <h3 className="text-[15px] text-[#1e293b] mb-1 font-semibold">{step.title}</h3>
                    <p className="text-[13px] text-[#64748b] leading-[20px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center pt-2">
            <button
              onClick={onStartHearing}
              className="bg-[#155dfc] text-white px-10 py-[14px] rounded-[12px] text-[16px] font-semibold hover:bg-[#1047d0] transition-colors shadow-sm hover:shadow-md"
            >
              Begin Hearing Simulation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}