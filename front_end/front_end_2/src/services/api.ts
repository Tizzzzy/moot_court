const API_BASE = "/api";

export interface CaseData {
  case_number: string | null;
  case_type: string;
  state: string;
  filing_date: string | null;
  hearing_date: string | null;
  plaintiffs: { name: string; address: string | null }[];
  defendants: { name: string; address: string | null }[];
  claim_summary: string;
  amount_sought: number;
  incident_date: string | null;
  demand_letter_sent: boolean;
  agreement_included: boolean;
}

export interface EvidenceRecommendation {
  title: string;
  description: string;
  folderName: string;
}

export interface AnalysisResult {
  filename: string;
  ready_status: boolean;
  specific_feedback: string;
}

export async function fetchCaseData(userId: string): Promise<CaseData> {
  const res = await fetch(`${API_BASE}/case-data/${userId}`);
  if (!res.ok) throw new Error(`Failed to fetch case data: ${res.statusText}`);
  return res.json();
}

export async function fetchEvidenceRecommendations(
  userId: string
): Promise<EvidenceRecommendation[]> {
  const res = await fetch(`${API_BASE}/evidence/recommend/${userId}`);
  if (!res.ok)
    throw new Error(`Failed to fetch recommendations: ${res.statusText}`);
  const data = await res.json();
  const recommendations: Record<string, string> = data.recommendations;

  return Object.entries(recommendations).map(([key, description]) => ({
    title: key.replace(/_/g, " "),
    description,
    folderName: key.replace(/[^a-zA-Z0-9_-]/g, ""),
  }));
}

export async function uploadEvidenceFile(
  userId: string,
  folderName: string,
  file: File
): Promise<{ filename: string; size: number }> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(
    `${API_BASE}/evidence/upload/${userId}/${folderName}`,
    { method: "POST", body: formData }
  );
  if (!res.ok) throw new Error(`Failed to upload file: ${res.statusText}`);
  return res.json();
}

export async function analyzeEvidence(
  userId: string,
  folderName: string
): Promise<AnalysisResult[]> {
  const res = await fetch(
    `${API_BASE}/evidence/analyze/${userId}/${folderName}`,
    { method: "POST" }
  );
  if (!res.ok) throw new Error(`Failed to analyze evidence: ${res.statusText}`);
  const data = await res.json();
  return data.results;
}
