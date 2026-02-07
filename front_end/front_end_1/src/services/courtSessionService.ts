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
  ContinueAfterObjectionRequest,
  ErrorResponse,
} from "../types/court";

class CourtSessionService {
  private basePath = "/court";

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
    useOriginal: boolean
  ): Promise<{ status: string }> {
    const request: ContinueAfterObjectionRequest = {
      use_original: useOriginal,
    };

    return apiClient.post<{ status: string }>(
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
}

export const courtSessionService = new CourtSessionService();
