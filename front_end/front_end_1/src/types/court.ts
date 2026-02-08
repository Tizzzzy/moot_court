/**
 * TypeScript type definitions for court simulator API and WebSocket messages.
 * These align with backend Pydantic models.
 */

// ===== Enums =====

export type HearingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Speaker = "judge" | "plaintiff" | "defendant" | "clerk";
export type Severity = "minor" | "moderate" | "severe";
export type SessionStatus = "active" | "completed";

// ===== Request Models =====

export interface CreateSessionRequest {
  user_id: string;
  case_id: number;
}

export interface SendMessageRequest {
  message: string;
}

export interface ContinueAfterObjectionRequest {
  use_original: boolean;
}

export interface EvidenceUploadRequest {
  files: File[];
}

// ===== Response Models =====

export interface EvidenceRequest {
  requesting_evidence: boolean;
  evidence_types?: string[];
  urgency?: "required" | "optional";
}

export interface CourtroomResponse {
  role: string;
  dialogue: string;
  inner_thought?: string;
  evidence_request?: EvidenceRequest;
}

export interface ObjectionDecision {
  has_objection: boolean;
  objection_type?: string;
  legal_reasoning?: string;
  suggested_rephrasing?: string;
  severity?: Severity;
}

export interface PlaintiffFeedback {
  positive: string;
  improvements: string[];
}

export interface Message {
  role: string;
  content: string;
  turn: number;
}

export interface SendMessageResponse {
  status: "success" | "objection_raised" | "verdict";
  objection?: ObjectionDecision;
  feedback?: PlaintiffFeedback;
  message?: string;
  ai_response?: CourtroomResponse;
}

export interface SessionState {
  session_id: string;
  current_speaker: string;
  turn_number: number;
  history: Message[];
}

export interface CreateSessionResponse {
  session_id: string;
  opening_message: CourtroomResponse;
}

export interface EvidenceFileMetadata {
  filename: string;
  path: string;
  size_bytes: number;
  mime_type: string;
  upload_time: string;
}

export interface UploadEvidenceResponse {
  uploaded_files: EvidenceFileMetadata[];
}

export interface SessionTranscript {
  history: Message[];
  evidence_count: number;
}

export interface PerformanceMetrics {
  overall_score: number;
  strengths: string[];
  improvements: string[];
  difficulty: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  detail?: string;
}

// ===== WebSocket Messages =====

export interface WSMessage<T = any> {
  type:
    | "connected"
    | "response"
    | "next_speaker"
    | "evidence_request"
    | "error"
    | "feedback"
    | "verdict";
  data: T;
}

export interface WSConnectedData {
  session_id: string;
}

export interface WSResponseData extends CourtroomResponse {}

export interface WSNextSpeakerData {
  speaker: string;
}

export interface WSEvidenceRequestData {
  requesting: boolean;
  types?: string[];
}

export interface WSErrorData {
  message: string;
}

export interface WSFeedbackData {
  positive: string;
  improvements: string[];
}

// ===== Frontend UI Models =====

export interface ChatMessage {
  id: string;
  speaker: Speaker;
  text: string;
  timestamp: Date;
  isUser?: boolean;
  isObjection?: boolean;
  objectionType?: string;
  objectionReason?: string;
  feedback?: PlaintiffFeedback;
  evidenceFiles?: EvidenceFile[];
}

export interface EvidenceFile {
  name: string;
  type: string;
  size: number;
  path?: string;
}

export interface CourtSessionState {
  sessionId: string | null;
  userId: string | null;
  caseId: number | null;
  status: SessionStatus;
  currentSpeaker: string;
  turnNumber: number;
  verdictIssued: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  wsConnected: boolean;
}
