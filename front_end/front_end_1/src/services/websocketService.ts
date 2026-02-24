/**
 * WebSocket service for real-time court simulator updates.
 * Handles connection, reconnection, and message handling.
 */

import type { WSMessage } from "../types/court";

const WS_BASE_URL =
  import.meta.env.VITE_WS_BASE_URL || "ws://localhost:8000/api";

type MessageHandler = (message: WSMessage) => void;
type ConnectionHandler = (connected: boolean) => void;

class WebSocketService {
  private websocket: WebSocket | null = null;
  private sessionId: string | null = null;
  private baseUrl: string;
  private messageHandlers: Set<MessageHandler> = new Set();
  private connectionHandlers: Set<ConnectionHandler> = new Set();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 2000; // Start with 2 seconds
  private reconnectTimer: NodeJS.Timeout | null = null;
  private isManualClose = false;

  constructor(baseUrl: string = WS_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Connect to WebSocket for a court session.
   */
  async connect(sessionId: string): Promise<void> {
    if (this.websocket?.readyState === WebSocket.OPEN) {
      if (this.sessionId === sessionId) {
        return; // Already connected to this session
      }
      // Different session - close old connection
      this.disconnect();
    }

    this.sessionId = sessionId;
    this.isManualClose = false;

    return new Promise((resolve, reject) => {
      try {
        // Get auth token and add as query param
        const token = localStorage.getItem('auth_token');
        let wsUrl = `${this.baseUrl}/court/sessions/${sessionId}/ws`;
        if (token) {
          wsUrl += `?token=${encodeURIComponent(token)}`;
        }
        this.websocket = new WebSocket(wsUrl);

        this.websocket.onopen = () => {
          console.log(`[WebSocket] Connected to session ${sessionId}`);
          this.reconnectAttempts = 0;
          this.notifyConnectionHandlers(true);
          resolve();
        };

        this.websocket.onmessage = (event) => {
          try {
            const message: WSMessage = JSON.parse(event.data);
            this.notifyMessageHandlers(message);
          } catch (e) {
            console.error("[WebSocket] Failed to parse message:", e);
          }
        };

        this.websocket.onerror = (event) => {
          console.error("[WebSocket] Error:", event);
          if (!this.isManualClose) {
            this.attemptReconnect();
          }
          reject(new Error("WebSocket connection failed"));
        };

        this.websocket.onclose = () => {
          console.log("[WebSocket] Disconnected");
          this.websocket = null;
          if (!this.isManualClose) {
            this.attemptReconnect();
          } else {
            this.notifyConnectionHandlers(false);
          }
        };
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Disconnect from WebSocket.
   */
  disconnect(): void {
    this.isManualClose = true;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.websocket) {
      this.websocket.close();
      this.websocket = null;
    }
    this.sessionId = null;
    this.notifyConnectionHandlers(false);
  }

  /**
   * Register a handler for WebSocket messages.
   */
  onMessage(handler: MessageHandler): () => void {
    this.messageHandlers.add(handler);

    // Return unsubscribe function
    return () => {
      this.messageHandlers.delete(handler);
    };
  }

  /**
   * Register a handler for connection state changes.
   */
  onConnectionChange(handler: ConnectionHandler): () => void {
    this.connectionHandlers.add(handler);

    // Return unsubscribe function
    return () => {
      this.connectionHandlers.delete(handler);
    };
  }

  /**
   * Check if connected.
   */
  isConnected(): boolean {
    return (
      this.websocket?.readyState === WebSocket.OPEN &&
      !this.isManualClose
    );
  }

  /**
   * Attempt to reconnect with exponential backoff.
   */
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error(
        `[WebSocket] Max reconnect attempts reached (${this.maxReconnectAttempts})`
      );
      this.notifyConnectionHandlers(false);
      return;
    }

    this.reconnectAttempts++;
    const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);

    console.log(
      `[WebSocket] Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`
    );

    this.reconnectTimer = setTimeout(() => {
      if (this.sessionId && !this.isManualClose) {
        this.connect(this.sessionId).catch((e) => {
          console.error("[WebSocket] Reconnect failed:", e);
          this.attemptReconnect();
        });
      }
    }, delay);
  }

  /**
   * Notify all message handlers.
   */
  private notifyMessageHandlers(message: WSMessage): void {
    this.messageHandlers.forEach((handler) => {
      try {
        handler(message);
      } catch (e) {
        console.error("[WebSocket] Error in message handler:", e);
      }
    });
  }

  /**
   * Notify all connection handlers.
   */
  private notifyConnectionHandlers(connected: boolean): void {
    this.connectionHandlers.forEach((handler) => {
      try {
        handler(connected);
      } catch (e) {
        console.error("[WebSocket] Error in connection handler:", e);
      }
    });
  }
}

export const websocketService = new WebSocketService();
