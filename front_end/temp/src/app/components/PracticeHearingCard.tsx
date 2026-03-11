import { ArrowRight } from 'lucide-react';

export function PracticeHearingCard() {
  return (
    <div className="bg-[#155dfc] rounded-[14px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="bg-[#2b7fff] text-white text-[12px] font-medium px-2 py-1 rounded-lg inline-block mb-4">
            Recommended
          </div>
          
          <h2 className="text-[20px] font-medium text-white leading-[30px] tracking-[-0.4492px] mb-2">
            Practice Your Hearing
          </h2>
          
          <p className="text-[16px] text-[#dbeafe] leading-[24px] tracking-[-0.3125px]">
            Talk through your case with an AI judge in a practice session
          </p>
        </div>

        <button className="bg-white text-[#155dfc] px-4 py-2 rounded-lg font-medium text-[14px] tracking-[-0.1504px] flex items-center gap-2 hover:bg-gray-50 transition-colors ml-6">
          Start Practice
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
