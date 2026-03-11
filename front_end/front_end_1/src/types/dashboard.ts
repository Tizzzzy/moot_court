/**
 * Dashboard-related TypeScript types
 */

export interface DashboardPartyInfo {
  name: string;
}

export interface DashboardCase {
  id: number;
  alias: string | null;
  case_number: string | null;
  case_type: string;
  amount_sought: number | null;
  hearing_date: string | null;
  plaintiffs: DashboardPartyInfo[];
  defendants: DashboardPartyInfo[];
}

export interface DashboardSession {
  session_id: string;
  title: string | null;
  status: 'active' | 'completed';
  verdict_outcome: 'win' | 'lose' | null;
  case_id: number;
}

export interface DashboardSummary {
  username: string;
  tokens_used: number;
  token_limit: number;
  cases: DashboardCase[];
  sessions: DashboardSession[];
}

export type PreparationStep = 'intake' | 'evidence' | 'practice' | 'final';
