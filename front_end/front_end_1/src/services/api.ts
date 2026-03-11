/**
 * Base API client for court simulator backend.
 * Handles HTTP requests with error handling.
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

/**
 * Get authorization headers with JWT token.
 */
function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem("auth_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Make a GET request.
   */
  async get<T>(path: string): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make a POST request with JSON body.
   */
  async post<T>(path: string, data: any): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
      body: JSON.stringify(data),
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Make a DELETE request.
   */
  async delete<T>(path: string): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Upload files using multipart/form-data.
   */
  async uploadFiles<T>(path: string, files: File[]): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...getAuthHeaders(),
      },
      body: formData,
    });

    return this.handleResponse<T>(response);
  }

  /**
   * Handle API responses and errors.
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

      try {
        if (contentType?.includes("application/json")) {
          const error = await response.json();
          errorMessage = error.message || error.error || errorMessage;
        } else {
          const text = await response.text();
          errorMessage = text || errorMessage;
        }
      } catch (e) {
        // Use default error message if parsing fails
      }

      throw new ApiError(errorMessage, response.status);
    }

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return response.json() as Promise<T>;
    }

    return (await response.text()) as any;
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Add convenience methods for CaseIntake
apiClient.uploadPdf = async function(file: File, userId: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('user_id', userId);

  const response = await fetch(`${API_BASE_URL}/ocr/upload`, {
    method: 'POST',
    headers: {
      ...getAuthHeaders(),
    },
    body: formData,
  });

  if (!response.ok) throw new Error('Failed to upload PDF');
  return response.json();
};

apiClient.pollJobStatus = async function(jobId: string) {
  const response = await fetch(`${API_BASE_URL}/ocr/status/${jobId}`, {
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!response.ok) throw new Error('Failed to get job status');
  return response.json();
};

apiClient.getCase = async function(caseId: string) {
  const response = await fetch(`${API_BASE_URL}/cases/${caseId}`, {
    headers: {
      ...getAuthHeaders(),
    },
  });
  if (!response.ok) throw new Error('Failed to get case');
  return response.json();
};

// Types for Dashboard
export interface CaseData {
  case_number: string | null;
  case_type: string;
  state: string;
  filing_date: string | null;
  hearing_date?: string | null;
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
  const res = await fetch(`${API_BASE_URL}/case-data/${userId}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error(`Failed to fetch case data: ${res.statusText}`);
  return res.json();
}

export async function fetchEvidenceRecommendations(
  userId: string
): Promise<EvidenceRecommendation[]> {
  const res = await fetch(`${API_BASE_URL}/evidence/recommend/${userId}`, {
    headers: getAuthHeaders(),
  });
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

export async function fetchEvidenceRecommendationsByCaseId(
  caseId: number
): Promise<EvidenceRecommendation[]> {
  const res = await fetch(`${API_BASE_URL}/evidence/for-case/${caseId}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok)
    throw new Error(`Failed to fetch recommendations for case: ${res.statusText}`);
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
  file: File,
  caseId?: number | null
): Promise<{ filename: string; size: number }> {
  const formData = new FormData();
  formData.append("file", file);

  const query = caseId != null ? `?case_id=${caseId}` : "";
  const res = await fetch(
    `${API_BASE_URL}/evidence/upload/${userId}/${folderName}${query}`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: formData,
    }
  );
  if (!res.ok) throw new Error(`Failed to upload file: ${res.statusText}`);
  return res.json();
}

export async function analyzeEvidence(
  userId: string,
  folderName: string,
  caseId?: number | null
): Promise<AnalysisResult[]> {
  const query = caseId != null ? `?case_id=${caseId}` : "";
  const res = await fetch(
    `${API_BASE_URL}/evidence/analyze/${userId}/${folderName}${query}`,
    {
      method: "POST",
      headers: getAuthHeaders(),
    }
  );
  if (!res.ok) throw new Error(`Failed to analyze evidence: ${res.statusText}`);
  const data = await res.json();
  return data.results;
}

export interface SubmitCaseDataInput {
  case_number?: string | null;
  case_type: string;
  state: string;
  county?: string;
  filing_date?: string | null;
  hearing_date?: string | null;
  plaintiffs: { name: string; address?: string | null }[];
  defendants: { name: string; address?: string | null }[];
  claim_summary: string;
  amount_sought?: number | null;
  incident_date?: string | null;
  demand_letter_sent: boolean;
  agreement_included: boolean;
  /** If the case was already created by OCR, pass its id to avoid creating a duplicate. */
  existing_case_id?: number;
}

export interface SubmitCaseDataResponse {
  success: boolean;
  user_id: string;
  case_id?: number;
  recommendations: Record<string, string>;
  message: string;
}

/**
 * Submit manually entered case data to generate evidence recommendations.
 */
export async function submitCaseData(
  userId: string,
  caseData: SubmitCaseDataInput
): Promise<SubmitCaseDataResponse> {
  const res = await fetch(`${API_BASE_URL}/evidence/submit-case/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(caseData),
  });
  if (!res.ok) throw new Error(`Failed to submit case data: ${res.statusText}`);
  return res.json();
}

export async function fetchDashboardSummary(userId: string) {
  const res = await fetch(`${API_BASE_URL}/dashboard/${userId}/summary`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error(`Failed to fetch dashboard summary: ${res.statusText}`);
  return res.json();
}

export interface EvidenceFolderStatus {
  has_files: boolean;
  file_count: number;
  files: string[];
  is_ready: boolean;
  /** Per-file feedback keyed by file stem (no extension). "_all_" is used for legacy single-file feedback. */
  file_feedbacks?: Record<string, string>;
}

export interface EvidenceStatusResponse {
  status: Record<string, EvidenceFolderStatus>;
}

export async function fetchEvidenceStatus(
  userId: string,
  caseId?: number | null
): Promise<EvidenceStatusResponse> {
  const query = caseId != null ? `?case_id=${caseId}` : "";
  const res = await fetch(`${API_BASE_URL}/evidence/status/${userId}${query}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error(`Failed to fetch evidence status: ${res.statusText}`);
  return res.json();
}

// ── Full case detail & update ─────────────────────────────────────────────────

export interface FullCaseParty {
  id: number;
  name: string;
  address: string | null;
}

export interface FullCaseData {
  id: number;
  user_id: string;
  alias: string | null;
  case_number: string | null;
  case_type: string;
  state: string;
  county: string | null;
  filing_date: string | null;
  hearing_date: string | null;
  claim_summary: string;
  amount_sought: number | null;
  incident_date: string | null;
  demand_letter_sent: boolean;
  agreement_included: boolean;
  status: string;
  plaintiffs: FullCaseParty[];
  defendants: FullCaseParty[];
  created_at: string;
}

export interface CaseUpdateInput {
  alias?: string | null;
  case_number?: string | null;
  case_type?: string;
  state?: string;
  county?: string | null;
  filing_date?: string | null;
  hearing_date?: string | null;
  claim_summary?: string;
  amount_sought?: number | null;
  incident_date?: string | null;
  demand_letter_sent?: boolean;
  agreement_included?: boolean;
  plaintiffs?: { name: string; address?: string | null }[];
  defendants?: { name: string; address?: string | null }[];
}

export async function fetchFullCase(caseId: number): Promise<FullCaseData> {
  const res = await fetch(`${API_BASE_URL}/cases/${caseId}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error(`Failed to fetch case: ${res.statusText}`);
  return res.json();
}

export async function updateCase(caseId: number, data: CaseUpdateInput): Promise<FullCaseData> {
  const res = await fetch(`${API_BASE_URL}/cases/${caseId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Failed to update case: ${res.statusText}`);
  return res.json();
}
