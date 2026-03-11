import { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import type { PracticeSession } from '../App';

interface SimulationHistoryProps {
  sessions: PracticeSession[];
}

export function SimulationHistory({ sessions }: SimulationHistoryProps) {
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set());

  const toggleSession = (sessionId: string) => {
    const newExpanded = new Set(expandedSessions);
    if (newExpanded.has(sessionId)) {
      newExpanded.delete(sessionId);
    } else {
      newExpanded.add(sessionId);
    }
    setExpandedSessions(newExpanded);
  };

  const getStatusColor = (status: PracticeSession['status']) => {
    switch (status) {
      case 'win':
        return 'text-[#00a63e]';
      case 'lose':
        return 'text-[#f54900]';
      case 'incomplete':
        return 'text-[#94a3b8]';
    }
  };

  const getStatusText = (status: PracticeSession['status']) => {
    switch (status) {
      case 'win':
        return 'Win';
      case 'lose':
        return 'Lose';
      case 'incomplete':
        return 'Incomplete';
    }
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between p-6 border-b border-[#e5e7eb]">
        <h2 className="text-[16px] text-[#101828] leading-[28px] tracking-[-0.4492px]">
          Simulation History
        </h2>
        
        <button className="bg-white border border-[#d1d5dc] px-4 py-1.5 rounded-lg text-[14px] font-medium tracking-[-0.1504px] hover:bg-gray-50 transition-colors">
          Start New
        </button>
      </div>

      <div className="p-6 space-y-3">
        {sessions.map((session) => {
          const isExpanded = expandedSessions.has(session.id);
          
          return (
            <div key={session.id}>
              <button
                onClick={() => toggleSession(session.id)}
                className="w-full border border-[#e5e7eb] rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-left">
                    <h3 className="text-[16px] font-medium text-[#101828] leading-[24px] tracking-[-0.3125px] mb-1">
                      {session.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-[14px]">
                      <div className="flex items-center gap-1 text-[#6a7282]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="leading-[20px] tracking-[-0.1504px]">
                          {session.time} {session.date}
                        </span>
                      </div>
                      
                      <span className={`text-[12px] leading-[16px] ${getStatusColor(session.status)}`}>
                        {getStatusText(session.status)}
                      </span>
                    </div>
                  </div>

                  <ChevronRight 
                    className={`w-5 h-5 text-[#99a1af] transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-[#e5e7eb]">
                  <p className="text-[14px] text-[#62748e] leading-[20px]">
                    Session details and feedback would appear here. This includes performance metrics, 
                    areas for improvement, and a transcript of the practice session.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
