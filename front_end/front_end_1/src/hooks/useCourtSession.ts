/**
 * React hook for managing court session state and interactions.
 * Wraps the court session and WebSocket services.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { courtSessionService } from "../services/courtSessionService";
import { websocketService } from "../services/websocketService";
import type {
  ChatMessage,
  CourtroomResponse,
  ObjectionDecision,
  PlaintiffFeedback,
  WSMessage,
  CourtSessionState,
  Speaker,
} from "../types/court";

const generateId = () => `msg_${Date.now()}_${Math.random()}`;

const mapSpeakerName = (speaker: string): Speaker => {
  const lowerSpeaker = speaker.toLowerCase();
  if (lowerSpeaker === "judge") return "judge";
  if (lowerSpeaker === "defendant") return "defendant";
  if (lowerSpeaker === "plaintiff") return "plaintiff";
  if (lowerSpeaker === "clerk") return "clerk";
  return "judge"; // default
};

export function useCourtSession(userId: string | null, caseId: number | null) {
  const [state, setState] = useState<CourtSessionState>({
    sessionId: null,
    userId,
    caseId,
    status: "active",
    currentSpeaker: "judge",
    turnNumber: 0,
    verdictIssued: false,
    verdictOutcome: null,
    messages: [],
    submittedEvidence: [],
    isLoading: false,
    error: null,
    wsConnected: false,
  });


  /**
   * Start a new hearing session.
   */
  const startSession = useCallback(async () => {
    if (!userId || !caseId) {
      setState((s) => ({
        ...s,
        error: "Missing user_id or case_id",
      }));
      return;
    }

    setState((s) => ({ ...s, isLoading: true, error: null }));

    try {
      // Create session on backend
      const response = await courtSessionService.createSession(userId, caseId);

      // Add opening message to messages
      const openingMessage: ChatMessage = {
        id: generateId(),
        speaker: "judge",
        text: response.opening_message.dialogue,
        timestamp: new Date(),
        isUser: false,
      };

      setState((s) => ({
        ...s,
        sessionId: response.session_id,
        messages: [openingMessage],
        submittedEvidence: [],
        currentSpeaker: "Plaintiff", // Plaintiff presents case after Judge opens
        turnNumber: 1,
        status: "active",
        isLoading: false,
      }));

      // Connect WebSocket
      await websocketService.connect(response.session_id);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create session";
      setState((s) => ({
        ...s,
        error: errorMessage,
        isLoading: false,
      }));
    }
  }, [userId, caseId]);

  /**
   * Restore session from server (for page refresh).
   */
  const restoreSession = useCallback(async (sessionId: string) => {
    setState((s) => ({ ...s, isLoading: true, error: null }));

    try {
      const sessionState = await courtSessionService.getSessionState(sessionId);

      // Convert server history to chat messages
      const messages: ChatMessage[] = sessionState.history.map((msg) => ({
        id: generateId(),
        speaker: mapSpeakerName(msg.role),
        text: msg.content,
        timestamp: new Date(),
        isUser: msg.role.toLowerCase() === "plaintiff",
      }));

      setState((s) => ({
        ...s,
        sessionId,
        messages,
        submittedEvidence: sessionState.submitted_evidence || [],
        currentSpeaker: sessionState.current_speaker,
        turnNumber: sessionState.turn_number,
        status: sessionState.status,
        verdictIssued: sessionState.status === "completed",
        verdictOutcome: sessionState.verdict_outcome || null,
        isLoading: false,
      }));

      // Connect WebSocket
      await websocketService.connect(sessionId);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to restore session";
      setState((s) => ({
        ...s,
        error: errorMessage,
        isLoading: false,
      }));
    }
  }, []);

  /**
   * Send a plaintiff message.
   */
  const sendMessage = useCallback(
    async (message: string) => {
      if (!state.sessionId) {
        setState((s) => ({
          ...s,
          error: "No active session",
        }));
        return;
      }

      setState((s) => ({ ...s, isLoading: true, error: null }));

      try {
        // Add user message to UI immediately
        const userMessage: ChatMessage = {
          id: generateId(),
          speaker: "plaintiff",
          text: message,
          timestamp: new Date(),
          isUser: true,
        };

        setState((s) => ({
          ...s,
          messages: [...s.messages, userMessage],
        }));

        // Send to server
        const response = await courtSessionService.sendMessage(
          state.sessionId,
          message
        );

        // Update the user message with feedback if provided
        if (response.feedback) {
          setState((s) => ({
            ...s,
            messages: s.messages.map((msg) =>
              msg.id === userMessage.id
                ? { ...msg, feedback: response.feedback }
                : msg
            ),
          }));
        }

        // ---> FIX: Catch the objection before trying to parse an AI response <---
        if (response.status === "objection_raised" && response.objection) {
          setState((s) => ({
            ...s,
            isLoading: false, // Stop loading, wait for user input
          }));
          
          return {
            hasObjection: true,
            objection: response.objection,
            feedback: response.feedback,
          };
        }

        // Handle AI response from HTTP response (fallback when WebSocket fails)
        // Only add if not already present (WebSocket may have already added it)
        if (response.ai_response) {
          setState((s) => {
            // Check if this message was already added via WebSocket
            const alreadyExists = s.messages.some(
              (msg) =>
                msg.text === response.ai_response!.dialogue &&
                msg.speaker === mapSpeakerName(response.ai_response!.role)
            );

            if (alreadyExists) {
              return s;
            }

            const aiMessage: ChatMessage = {
              id: generateId(),
              speaker: mapSpeakerName(response.ai_response!.role),
              text: response.ai_response!.dialogue,
              timestamp: new Date(),
              isUser: false,
            };
            return {
              ...s,
              messages: [...s.messages, aiMessage],
              currentSpeaker: response.ai_response!.role,
            };
          });
        }

        // Handle verdict from HTTP response (fallback when WebSocket is slow)
        if (response.status === "verdict") {
          setState((s) => ({
            ...s,
            status: "completed",
            verdictIssued: true,
            verdictOutcome: response.verdict_outcome || s.verdictOutcome,
            isLoading: false,
          }));
        } else {
          setState((s) => ({
            ...s,
            isLoading: false,
          }));
        }

        return {
          hasObjection: false,
          feedback: response.feedback,
        };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to send message";
        setState((s) => ({
          ...s,
          error: errorMessage,
          isLoading: false,
        }));
        throw error;
      }
    },
    [state.sessionId, state.messages]
  );

  /**
   * Continue trial after ignoring an objection.
   */
  const continueAfterObjection = useCallback(
    async (useOriginal: boolean = true, message?: string) => {
      if (!state.sessionId) return;

      setState((s) => ({ ...s, isLoading: true, error: null }));

      try {
        // Pass the message (original or rephrased) along with the flag
        await courtSessionService.continueAfterObjection(state.sessionId, useOriginal, message);

        setState((s) => ({
          ...s,
          submittedEvidence: [...s.submittedEvidence, ...response.uploaded_files],
          isLoading: false,
        }));
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to continue after objection";
        setState((s) => ({
          ...s,
          error: errorMessage,
          isLoading: false,
        }));
        throw error;
      }
    },
    [state.sessionId]
  );

  /**
   * Upload evidence files.
   */
  const uploadEvidence = useCallback(
    async (files: File[]) => {
      if (!state.sessionId) {
        setState((s) => ({
          ...s,
          error: "No active session",
        }));
        return;
      }

      setState((s) => ({ ...s, isLoading: true, error: null }));

      try {
        const response = await courtSessionService.uploadEvidence(
          state.sessionId,
          files
        );

        setState((s) => ({
          ...s,
          submittedEvidence: [...s.submittedEvidence, ...response.uploaded_files],
          isLoading: false,
        }));

        return response.uploaded_files;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to upload evidence";
        setState((s) => ({
          ...s,
          error: errorMessage,
          isLoading: false,
        }));
        throw error;
      }
    },
    [state.sessionId]
  );

  /**
   * Submit prepared (already ready) evidence folders without local file picker.
   */
  const submitPreparedEvidence = useCallback(
    async (userId: string, caseId: number, folderNames: string[]) => {
      if (!state.sessionId) {
        setState((s) => ({
          ...s,
          error: "No active session",
        }));
        return;
      }

      if (folderNames.length === 0) {
        return;
      }

      setState((s) => ({ ...s, isLoading: true, error: null }));

      try {
        const response = await courtSessionService.submitPreparedEvidence(
          state.sessionId,
          {
            user_id: userId,
            case_id: caseId,
            folder_names: folderNames,
          }
        );

        setState((s) => ({
          ...s,
          isLoading: false,
        }));

        return response.uploaded_files;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to submit prepared evidence";
        setState((s) => ({
          ...s,
          error: errorMessage,
          isLoading: false,
        }));
        throw error;
      }
    },
    [state.sessionId]
  );

  /**
   * Complete the session.
   */
  const endSession = useCallback(async () => {
    if (!state.sessionId) return;

    try {
      await courtSessionService.completeSession(state.sessionId);
      websocketService.disconnect();
      setState((s) => ({
        ...s,
        status: "completed",
        sessionId: null,
      }));
    } catch (error) {
      console.error("Error ending session:", error);
    }
  }, [state.sessionId]);

  /**
   * Load an existing session.
   * Completed sessions are read-only, active sessions are resumable.
   */
  const loadSession = useCallback(async (sessionId: string) => {
    setState((s) => ({ ...s, isLoading: true, error: null }));

    try {
      // Get session state from server
      const response = await courtSessionService.getSessionState(sessionId);

      // Convert to ChatMessage format
      const messages: ChatMessage[] = response.history.map((msg: any) => ({
        id: generateId(),
        speaker: mapSpeakerName(msg.role || "judge"),
        text: msg.content || msg.text || "",
        timestamp: new Date(),
        isUser: (msg.role || "").toLowerCase() === "plaintiff",
        feedback: msg.feedback,
      }));

      setState((s) => ({
        ...s,
        sessionId,
        messages,
        submittedEvidence: response.submitted_evidence || [],
        currentSpeaker: response.current_speaker || "Plaintiff",
        turnNumber: response.turn_number || 0,
        status: response.status,
        verdictIssued: response.status === "completed",
        verdictOutcome: response.verdict_outcome || null,
        isLoading: false,
      }));

      // Connect WebSocket for this session (won't send messages though)
      await websocketService.connect(sessionId);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to load session";
      setState((s) => ({
        ...s,
        error: errorMessage,
        isLoading: false,
      }));
    }
  }, []);

  /**
   * Set up WebSocket handlers when component mounts.
   */
  useEffect(() => {
    const unsubscribeMessage = websocketService.onMessage((message: WSMessage) => {
      handleWSMessage(message);
    });

    const unsubscribeConnection = websocketService.onConnectionChange(
      (connected: boolean) => {
        setState((s) => ({
          ...s,
          wsConnected: connected,
        }));
      }
    );

    return () => {
      unsubscribeMessage();
      unsubscribeConnection();
    };
  }, []);

  /**
   * Handle incoming WebSocket messages.
   */
  function handleWSMessage(message: WSMessage): void {
    switch (message.type) {
      case "connected":
        console.log("[WebSocket] Session connected:", message.data);
        setState((s) => ({ ...s, wsConnected: true }));
        break;

      case "response": {
        const response = message.data as CourtroomResponse;
        setState((s) => {
          // Check if this message was already added (avoid duplicates)
          const alreadyExists = s.messages.some(
            (msg) =>
              msg.text === response.dialogue &&
              msg.speaker === mapSpeakerName(response.role)
          );

          if (alreadyExists) {
            return {
              ...s,
              currentSpeaker: response.role,
              isLoading: false,
            };
          }

          const chatMsg: ChatMessage = {
            id: generateId(),
            speaker: mapSpeakerName(response.role),
            text: response.dialogue,
            timestamp: new Date(),
            isUser: false,
            feedback: response.feedback,
          };
          return {
            ...s,
            messages: [...s.messages, chatMsg],
            currentSpeaker: response.role,
            isLoading: false,
          };
        });
        break;
      }

      case "next_speaker": {
        const nextSpeaker = message.data as { speaker: string; verdict_outcome?: string };
        const isVerdictSpeaker = nextSpeaker.speaker === "Verdict";
        setState((s) => ({
          ...s,
          status: isVerdictSpeaker ? "completed" : s.status,
          currentSpeaker: nextSpeaker.speaker,
          verdictIssued: isVerdictSpeaker,
          verdictOutcome: isVerdictSpeaker && nextSpeaker.verdict_outcome
            ? nextSpeaker.verdict_outcome
            : s.verdictOutcome,
        }));
        break;
      }

      case "error": {
        const errorData = message.data as { message: string };
        setState((s) => ({
          ...s,
          error: errorData.message,
          isLoading: false,
        }));
        break;
      }

      case "feedback": {
        const feedbackData = message.data as {
          positive: string;
          improvements: string[];
        };
        // Attach feedback to the most recent plaintiff message
        setState((s) => {
          const messages = [...s.messages];
          // Find the last plaintiff message and add feedback
          for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].speaker === "plaintiff" && messages[i].isUser) {
              messages[i] = {
                ...messages[i],
                feedback: {
                  positive: feedbackData.positive,
                  improvements: feedbackData.improvements,
                },
              };
              break;
            }
          }
          return { ...s, messages };
        });
        break;
      }

      default:
        console.warn("[WebSocket] Unknown message type:", message.type);
    }
  }

  return {
    // State
    ...state,

    // Actions
    startSession,
    restoreSession,
    loadSession,
    sendMessage,
    uploadEvidence,
    submitPreparedEvidence,
    endSession,
    continueAfterObjection,
  };
}
