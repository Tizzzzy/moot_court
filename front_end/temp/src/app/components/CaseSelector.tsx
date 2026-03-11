import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Case } from '../App';

interface CaseSelectorProps {
  cases: Case[];
  selectedCase: Case;
  onSelectCase: (caseItem: Case) => void;
}

export function CaseSelector({ cases, selectedCase, onSelectCase }: CaseSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-[321px]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-[#d1d5dc] rounded-lg px-[13px] py-2 flex items-center justify-between hover:border-gray-400 transition-colors"
      >
        <span className="text-[14px] font-medium tracking-[-0.1504px]">
          Selected Case: {selectedCase.alias}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-[#d1d5dc] rounded-lg shadow-lg overflow-hidden z-10">
          {cases.map((caseItem) => (
            <button
              key={caseItem.id}
              onClick={() => {
                onSelectCase(caseItem);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b last:border-b-0 border-gray-100"
            >
              <div className="text-[14px] font-medium text-[#0a0a0a] mb-1">
                {caseItem.alias}
              </div>
              <div className="text-[12px] text-[#62748e]">
                {caseItem.number} • {caseItem.type}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
