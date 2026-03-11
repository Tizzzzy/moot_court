import React from 'react';
import { UserProfileButton } from '@/components/UserProfileButton';

interface DashboardHeaderProps {
  tokensUsed: number;
  tokenLimit: number;
  username: string;
  onLogout: () => void;
}

export function DashboardHeader({
  tokensUsed,
  tokenLimit,
  username,
  onLogout,
}: DashboardHeaderProps) {
  const tokensRemaining = tokenLimit - tokensUsed;
  const percentageUsed = Math.round(((tokenLimit - tokensRemaining) / tokenLimit) * 100);

  // Determine bar color based on usage
  const barColor =
    tokensUsed >= tokenLimit * 0.9
      ? 'bg-red-500'
      : 'bg-green-500';

  return (
    <header className="w-full border-b border-gray-100 bg-white h-20">
      <div className="max-w-[1256px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: App Name + BETA Badge */}
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-gray-900">Moot Court AI</h1>
          <span className="px-2 py-1 bg-[#dbeafe] border border-[#bedbff] text-[#1447e6] text-xs font-medium rounded">
            BETA
          </span>
          <p className="text-sm text-gray-600 ml-2">Legal case preparation assistant</p>
        </div>

        {/* Center: Token Progress Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 w-64 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Tokens available</span>
            <span className="text-sm font-semibold text-gray-900">
              {tokensRemaining.toLocaleString()}/{tokenLimit.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${barColor}`}
              style={{ width: `${Math.min(percentageUsed, 100)}%` }}
            />
          </div>
        </div>

        {/* Right: User Menu */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">{username}</span>
          <UserProfileButton />
        </div>
      </div>
    </header>
  );
}
