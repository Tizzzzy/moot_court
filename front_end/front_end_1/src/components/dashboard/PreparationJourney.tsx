import React from 'react';
import { Check, Clock } from 'lucide-react';
import { PreparationStep } from '@/types/dashboard';

interface PreparationJourneyProps {
  currentStep: PreparationStep;
}

const steps: {
  step: PreparationStep;
  title: string;
  duration: string;
}[] = [
  {
    step: 'intake',
    title: 'Enter court form',
    duration: '10-15 mins',
  },
  {
    step: 'evidence',
    title: 'Upload evidence',
    duration: '15-30 mins',
  },
  {
    step: 'practice',
    title: 'Practice your hearing',
    duration: '20-30 mins',
  },
  {
    step: 'final',
    title: 'Final Preparation',
    duration: '10-15 mins',
  },
];

export function PreparationJourney({ currentStep }: PreparationJourneyProps) {
  const getCurrentStepIndex = (): number => {
    const stepOrder: PreparationStep[] = ['intake', 'evidence', 'practice', 'final'];
    return stepOrder.indexOf(currentStep);
  };

  const currentIndex = getCurrentStepIndex();

  return (
    <div className="border border-[rgba(0,0,0,0.1)] rounded-[14px] p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Preparation Journey</h3>

      <div className="space-y-4 relative">
        {steps.map((item, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={item.step} className="flex gap-4 relative">
              {/* Connector Line - only between items, not after last */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-8 w-px h-12 bg-[#e2e8f0]" />
              )}

              {/* Step Indicator */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold transition-all ${
                    isCompleted
                      ? 'bg-[#dcfce7] text-green-600'
                      : isCurrent
                        ? 'bg-[#dbeafe] text-[#1447e6]'
                        : 'border-2 border-[#e2e8f0] text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : isCurrent ? (
                    <div className="w-2 h-2 rounded-full bg-[#1447e6]" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>
              </div>

              {/* Step Content */}
              <div className="pb-4 flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-[#0f172b]">{item.title}</p>
                  {isCurrent && (
                    <span className="inline-block px-2 py-0.5 bg-[#dbeafe] text-[#1447e6] text-xs font-semibold rounded-lg">
                      In Progress
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[#62748e] text-sm">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
