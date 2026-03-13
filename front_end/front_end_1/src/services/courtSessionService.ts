/**
 * Court session service - wrapper around court simulator API endpoints.
 * Provides methods for session management and interaction.
 */

import { apiClient } from "./api";
import type {
  CreateSessionRequest,
  CreateSessionResponse,
  SendMessageRequest,
  SendMessageResponse,
  SessionState,
  SessionTranscript,
  UploadEvidenceResponse,
  EvidenceUploadRequest,
  PreparedEvidenceUploadRequest,
  ContinueAfterObjectionRequest,
  ErrorResponse,
} from "../types/court";

class CourtSessionService {
  private basePath = "/court";

  private getAuthHeaders(): Record<string, string> {
    const token = localStorage.getItem("auth_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  /**
   * Create a new court session.
   */
  async createSession(
    userId: string,
    caseId: number
  ): Promise<CreateSessionResponse> {
    const request: CreateSessionRequest = {
      user_id: userId,
      case_id: caseId,
    };

    return apiClient.post<CreateSessionResponse>(
      `${this.basePath}/sessions`,
      request
    );
  }

  /**
   * Get current session state (for page refresh/restore).
   */
  async getSessionState(sessionId: string): Promise<SessionState> {
    return apiClient.get<SessionState>(
      `${this.basePath}/sessions/${sessionId}`
    );
  }

  /**
   * Send a plaintiff message to the court.
   * Returns objection check result or success status.
   */
  async sendMessage(
    sessionId: string,
    message: string
  ): Promise<SendMessageResponse> {
    const request: SendMessageRequest = { message };

    return apiClient.post<SendMessageResponse>(
      `${this.basePath}/sessions/${sessionId}/messages`,
      request
    );
  }

  /**
   * Continue after objection (either with original or after rephrase).
   */
  async continueAfterObjection(
    sessionId: string,
    useOriginal: boolean,
    message?: string
  ): Promise<SendMessageResponse> {
    const request: ContinueAfterObjectionRequest = {
      use_original: useOriginal,
      message,
    };

    return apiClient.post<SendMessageResponse>(
      `${this.basePath}/sessions/${sessionId}/objections/continue`,
      request
    );
  }

  /**
   * Upload evidence files during the hearing.
   */
  async uploadEvidence(
    sessionId: string,
    files: File[]
  ): Promise<UploadEvidenceResponse> {
    return apiClient.uploadFiles<UploadEvidenceResponse>(
      `${this.basePath}/sessions/${sessionId}/evidence`,
      files
    );
  }

  /**
   * Submit already-ready evidence from dashboard-prepared folders.
   */
  async submitPreparedEvidence(
    sessionId: string,
    request: PreparedEvidenceUploadRequest
  ): Promise<UploadEvidenceResponse> {
    return apiClient.post<UploadEvidenceResponse>(
      `${this.basePath}/sessions/${sessionId}/evidence/prepared`,
      request
    );
  }

  /**
   * Get full trial transcript.
   */
  async getTranscript(sessionId: string): Promise<SessionTranscript> {
    return apiClient.get<SessionTranscript>(
      `${this.basePath}/sessions/${sessionId}/transcript`
    );
  }

  /**
   * End session and save transcript.
   */
  async completeSession(sessionId: string): Promise<{ status: string }> {
    return apiClient.delete<{ status: string }>(
      `${this.basePath}/sessions/${sessionId}`
    );
  }

  /**
   * Download a submitted evidence file for preview.
   */
  async getSubmittedEvidenceFile(sessionId: string, filename: string): Promise<Blob> {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api"}${this.basePath}/sessions/${sessionId}/evidence/download?filename=${encodeURIComponent(filename)}`,
      {
        method: "GET",
        headers: {
          ...this.getAuthHeaders(),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch evidence file: ${response.statusText}`);
    }

    return response.blob();
  }
}

export const courtSessionService = new CourtSessionService();
