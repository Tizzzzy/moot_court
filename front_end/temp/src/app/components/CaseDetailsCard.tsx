import { Calendar } from 'lucide-react';
import type { Case } from '../App';

interface CaseDetailsCardProps {
  case: Case;
}

export function CaseDetailsCard({ case: caseData }: CaseDetailsCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-medium text-[#0a0a0a] tracking-[-0.3125px]">
          Your Case
        </h2>
        <button className="bg-white border border-[rgba(0,0,0,0.1)] px-4 py-2 rounded-lg text-[14px] font-medium tracking-[-0.1504px] hover:bg-gray-50 transition-colors">
          View more
        </button>
      </div>

      {/* Case Information Grid */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <div className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px] mb-1">
            Case Alias
          </div>
          <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
            {caseData.alias}
          </div>
        </div>

        <div>
          <div className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px] mb-1">
            Case Number
          </div>
          <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
            {caseData.number}
          </div>
        </div>

        <div>
          <div className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px] mb-1">
            Amount Claimed
          </div>
          <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
            {caseData.amountClaimed}
          </div>
        </div>

        <div>
          <div className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px] mb-1">
            Case Type
          </div>
          <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
            {caseData.type}
          </div>
        </div>
      </div>

      {/* Defendant */}
      <div className="mb-6">
        <div className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px] mb-1">
          Defendant
        </div>
        <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
          {caseData.defendant}
        </div>
      </div>

      {/* Hearing Date */}
      <div className="bg-[#f4f9ff] rounded-lg p-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-[#155dfc]" />
              <span className="text-[16px] text-[#45556c] leading-[24px] tracking-[-0.3125px]">
                Your hearing date
              </span>
            </div>
            <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
              {caseData.hearingDate}
            </div>
          </div>
          
          <div className="text-[16px] text-[#45556c] leading-[24px] tracking-[-0.3125px]">
            {caseData.daysAway} days away
          </div>
        </div>
      </div>
    </div>
  );
}
