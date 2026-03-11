import { Upload } from 'lucide-react';
import type { Evidence } from '../App';

interface EvidenceCardProps {
  evidence: Evidence[];
  uploadedCount: number;
  onUpload: (evidenceId: string) => void;
}

export function EvidenceCard({ evidence, uploadedCount, onUpload }: EvidenceCardProps) {
  const totalCategories = 4;
  const progressPercentage = (uploadedCount / evidence.length) * 100;

  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path d="M4.45994 9.45321C4.51327 9.64655 4.68883 9.77987 4.88883 9.77987C5.08882 9.77987 5.26438 9.64654 5.31771 9.45321C6.09549 6.63767 6.63659 6.09649 9.4521 5.31882C9.64544 5.26549 9.77765 5.08993 9.77765 4.88993C9.77765 4.68994 9.64432 4.51438 9.4521 4.46105C6.63656 3.68327 6.09538 3.14328 5.31771 0.326655C5.26438 0.133322 5.08882 0 4.88883 0C4.68883 0 4.51327 0.133333 4.45994 0.326655C3.68216 3.1422 3.14106 3.68338 0.325546 4.46105C0.132212 4.51438 0 4.68994 0 4.88993C0 5.08993 0.133333 5.26549 0.325546 5.31882C3.14109 6.0966 3.68227 6.63659 4.45994 9.45321Z" fill="#0088FF"/>
              <path d="M23.6745 11.5731C17.5945 9.89423 16.3302 8.62854 14.6511 2.54968C14.5978 2.35635 14.4222 2.22303 14.2222 2.22303C14.0222 2.22303 13.8467 2.35636 13.7933 2.54968C12.1144 8.62967 10.8488 9.89403 4.7699 11.5731C4.57657 11.6264 4.44436 11.802 4.44436 12.002C4.44436 12.202 4.57769 12.3775 4.7699 12.4309C10.8499 14.1097 12.1142 15.3754 13.7933 21.4543C13.8467 21.6476 14.0222 21.7809 14.2222 21.7809C14.4222 21.7809 14.5978 21.6476 14.6511 21.4543C16.33 15.3743 17.5957 14.1099 23.6745 12.4309C23.8678 12.3775 24.0001 12.202 24.0001 12.002C24.0001 11.802 23.8667 11.6264 23.6745 11.5731Z" fill="#0088FF"/>
              <path d="M10.119 19.3509C7.75681 18.6987 7.30349 18.2454 6.65137 15.8833C6.59804 15.6899 6.42249 15.5566 6.22249 15.5566C6.02249 15.5566 5.84694 15.69 5.79361 15.8833C5.14138 18.2455 4.68806 18.6988 2.32595 19.3509C2.13261 19.4043 2.0004 19.5798 2.0004 19.7798C2.0004 19.9798 2.13373 20.1554 2.32595 20.2087C4.68817 20.8609 5.14149 21.3143 5.79361 23.6764C5.84694 23.8697 6.02249 24.003 6.22249 24.003C6.42249 24.003 6.59804 23.8697 6.65137 23.6764C7.30361 21.3141 7.75692 20.8608 10.119 20.2087C10.3124 20.1554 10.4446 19.9798 10.4446 19.7798C10.4446 19.5798 10.3112 19.4043 10.119 19.3509Z" fill="#0088FF"/>
            </svg>
          </div>
          <h2 className="text-[20px] font-medium text-[#0a0a0a] tracking-[-0.3125px]">
            AI recommended evidence
          </h2>
        </div>
        
        <p className="text-[14px] text-[#717182] leading-[24px] tracking-[-0.3125px]">
          Upload your documents and get AI-powered feedback
        </p>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <p className="text-[16px] text-[#45556c] leading-[24px] tracking-[-0.3125px] mb-2">
          0 of {totalCategories} categories have evidence • {uploadedCount} file uploaded
        </p>
        
        <div className="w-full bg-[rgba(3,2,19,0.2)] rounded-full h-2 overflow-hidden">
          <div 
            className="bg-[#030213] h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Evidence Items */}
      <div className="space-y-4">
        {evidence.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4">
              <div className="text-[16px] text-[#0f172b] leading-[24px] tracking-[-0.3125px]">
                {item.title}
              </div>
              
              <button
                onClick={() => onUpload(item.id)}
                disabled={item.uploaded}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-[14px] font-medium tracking-[-0.1504px] transition-colors ${
                  item.uploaded
                    ? 'bg-green-50 border-green-200 text-green-700 cursor-not-allowed'
                    : 'bg-white border-[rgba(0,0,0,0.1)] hover:bg-gray-50'
                }`}
              >
                <Upload className="w-4 h-4" />
                {item.uploaded ? 'Uploaded' : 'Upload'}
              </button>
            </div>
            
            <div className="px-4 pb-4">
              <p className="text-[16px] text-[#62748e] leading-[24px] tracking-[-0.3125px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
