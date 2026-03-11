import { User, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [tokenProgress] = useState(33);

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-[1256px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo and badges */}
        <div className="flex items-center gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[18px] font-semibold text-[#101828] leading-[28px] tracking-[-0.4395px]">
                Pro Se Pro
              </h1>
              
              <div className="flex gap-1.5">
                <span className="bg-[#dbeafe] border border-[#bedbff] text-[#1447e6] px-[9px] py-[3px] rounded text-[12px] font-medium leading-[16px]">
                  BETA
                </span>
                <span className="bg-[#dcfce7] border border-[#b9f8cf] text-[#008236] px-[9px] py-[3px] rounded text-[12px] font-medium leading-[16px]">
                  FREE
                </span>
              </div>
            </div>
            
            <p className="text-[14px] text-[#4a5565] leading-[20px] tracking-[-0.1504px] mt-0.5">
              Help Small Claims Plaintiffs Prepare, Step by Step
            </p>
          </div>
        </div>

        {/* Center: Token Progress */}
        <div className="flex-1 flex justify-center px-8">
          <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 min-w-[200px] shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2">
                
                <span className="text-[14px] text-gray-700 font-medium">1000/3000 token left</span>
              </div>
              <div className="flex items-center gap-1">
                
                
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-green-500 h-full transition-all duration-300"
                style={{ width: `${tokenProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: User menu */}
        <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
          <User className="w-4 h-4" />
          <span className="text-[14px] font-medium tracking-[-0.1504px]">Mia</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}