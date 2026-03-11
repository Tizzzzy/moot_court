import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

const steps: Step[] = [
  {
    id: '1',
    title: 'Enter court form',
    description: 'Please provide your basic information so we can understand your situation better.',
    duration: 'About 15 min',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Upload evidence',
    description: 'Upload your evidence and get AI-powered feedback',
    duration: 'About 30 min',
    status: 'in-progress'
  },
  {
    id: '3',
    title: 'Practice your hearing',
    description: 'Rehearse in a simulated courtroom',
    duration: 'About 45 min',
    status: 'upcoming'
  },
  {
    id: '4',
    title: 'Final Preparation',
    description: 'Checklist and day-of guidelines',
    duration: 'About 15 min',
    status: 'upcoming'
  }
];

export function PreparationJourney() {
  return (
    <div className="bg-white rounded-[14px] border border-[rgba(0,0,0,0.1)] p-6">
      <h2 className="text-[16px] font-medium text-[#0a0a0a] tracking-[-0.3125px] mb-8">
        Your Preparation Journey
      </h2>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          
          return (
            <div key={step.id} className="relative">
              {/* Connector Line */}
              {!isLast && (
                <div className="absolute left-4 top-8 w-px h-full bg-[#e2e8f0]" />
              )}

              <div className="flex gap-4">
                {/* Icon */}
                <div className="relative z-10">
                  {step.status === 'completed' && (
                    <div className="w-8 h-8 bg-[#dcfce7] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#00a63e]" />
                    </div>
                  )}
                  {step.status === 'in-progress' && (
                    <div className="w-8 h-8 bg-[#dbeafe] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#155dfc] rounded-full" />
                    </div>
                  )}
                  {step.status === 'upcoming' && (
                    <div className="w-8 h-8 bg-white border-2 border-[#e2e8f0] rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className={`text-[16px] leading-[24px] tracking-[-0.3125px] ${
                      step.status === 'upcoming' ? 'text-[#62748e]' : 'text-[#0f172b]'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {step.status === 'in-progress' && (
                      <span className="bg-[#dbeafe] border border-transparent text-[#1447e6] px-[9px] py-[3px] rounded-lg text-[12px] font-medium leading-[16px]">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-[14px] leading-[24px] tracking-[-0.3125px] mb-2 ${
                    step.status === 'upcoming' ? 'text-[#62748e]' : 'text-[#717182]'
                  }`}>
                    {step.description}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-[#90a1b9]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[12px] leading-[16px]">{step.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
