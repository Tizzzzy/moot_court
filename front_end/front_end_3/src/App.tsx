import { useState, useEffect } from 'react';
import { HearingOverview } from './components/HearingOverview';
import { ActiveHearing } from './components/ActiveHearing';
import { EvidenceModal } from './components/EvidenceModal';
import { EvidenceIndicator } from './components/EvidenceIndicator';
import { EvidenceSidePanel } from './components/EvidenceSidePanel';
import { FilePreviewModal } from './components/FilePreviewModal';
import { useCourtSession } from './hooks/useCourtSession';
import type { ChatMessage } from './types/court';

export interface CaseData {
  case_number?: string | null;
  case_type: string;
  state: string;
  filing_date?: string | null;
  plaintiffs: Array<{ name: string; address?: string | null }>;
  defendants: Array<{ name: string; address?: string | null }>;
  claim_summary: string;
  amount_sought: number;
  incident_date: string;
  demand_letter_sent?: boolean;
  agreement_included?: boolean;
}

export type HearingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Message {
  speaker: 'judge' | 'plaintiff' | 'defendant' | 'clerk' | 'system';
  text: string;
  isUser?: boolean;
  isObjection?: boolean;
  objectionType?: string;
  objectionReason?: string;
  feedback?: {
    positive: string;
    improvement: string;
  };
  evidenceFiles?: EvidenceFile[];
  isPerformanceReport?: boolean;
  performanceData?: {
    overallScore: number;
    strengths: number;
    toImprove: number;
    difficulty: string;
  };
}

export interface EvidenceFile {
  name: string;
  type: string;
  size: number;
}

/**
 * Convert ChatMessage from hook to Message for UI compatibility
 */
function mapChatMessageToMessage(chatMsg: ChatMessage): Message {
  return {
    speaker: chatMsg.speaker as any,
    text: chatMsg.text,
    isUser: chatMsg.isUser,
    feedback: chatMsg.feedback ? {
      positive: chatMsg.feedback.positive,
      improvement: chatMsg.feedback.improvements?.filter(i => i.trim()).join(' • ') || ''
    } : undefined,
  };
}

export default function App() {
  // Initialize court session hook
  // Get userId from URL params or use default
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('user_id') || 'test_manual_user';
  const caseId = parseInt(urlParams.get('case_id') || '1', 10);

  const courtSession = useCourtSession(userId, caseId);

  // Load case data from extracted_data.json
  const [caseData, setCaseData] = useState<CaseData | null>(null);

  // UI state
  const [currentScreen, setCurrentScreen] = useState<'overview' | 'hearing'>('overview');
  const [currentStep, setCurrentStep] = useState<HearingStep>(1);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [evidencePresented, setEvidencePresented] = useState(false);
  const [evidenceFiles, setEvidenceFiles] = useState<EvidenceFile[]>([]);
  const [pendingEvidence, setPendingEvidence] = useState<EvidenceFile[]>([]);
  const [showEvidenceIndicator, setShowEvidenceIndicator] = useState(false);
  const [submittedEvidenceNames, setSubmittedEvidenceNames] = useState<string[]>([]);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [previewFile, setPreviewFile] = useState<EvidenceFile | null>(null);
  const [editingMessage, setEditingMessage] = useState<string>('');

  // Load case data from backend on mount
  useEffect(() => {
    const loadCaseData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
        const response = await fetch(`${baseUrl}/court/case-data?user_id=${userId}&case_id=${caseId}`);
        if (response.ok) {
          const data = await response.json();
          setCaseData(data);
        }
      } catch (error) {
        console.error('Failed to load case data:', error);
        // Fallback: load from extracted_data.json if API fails
        try {
          const fallbackResponse = await fetch(`../../data/${userId}/ocr_output/extracted_data.json`);
          if (fallbackResponse.ok) {
            const data = await fallbackResponse.json();
            setCaseData(data);
          }
        } catch (fallbackError) {
          console.error('Failed to load fallback case data:', fallbackError);
        }
      }
    };
    loadCaseData();
  }, [userId, caseId]);

  /**
   * Start a new hearing session
   */
  const handleStartHearing = async () => {
    setCurrentScreen('hearing');
    setCurrentStep(1);
    await courtSession.startSession();
  };

  /**
   * Send plaintiff message to backend
   */
  const handleSendMessage = async (message: string) => {
    setEditingMessage('');

    try {
      // Send message to backend
      await courtSession.sendMessage(message);

      // If there's pending evidence, upload it
      if (pendingEvidence.length > 0) {
        await courtSession.uploadEvidence(
          pendingEvidence.map(pf => new File([pf.name], pf.name, { type: pf.type }))
        );

        setEvidenceFiles(prev => [...prev, ...pendingEvidence]);
        setPendingEvidence([]);
        setEvidencePresented(true);
      }

      // AI response comes via WebSocket automatically
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  /**
   * Handle evidence presentation
   */
  const handlePresentEvidence = (selectedEvidence: string[], uploadedFiles: File[]) => {
    setShowEvidenceModal(false);

    // Convert uploaded files to EvidenceFile objects
    const uploadedEvidenceFiles: EvidenceFile[] = uploadedFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size
    }));

    // Store as pending evidence
    setPendingEvidence(uploadedEvidenceFiles);
  };

  /**
   * Handle evidence upload (when files are selected)
   */
  const handleUploadEvidence = (uploadedFiles: File[]) => {
    setShowEvidenceModal(false);

    // Convert uploaded files to EvidenceFile objects
    const newEvidenceFiles = uploadedFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size
    }));

    setPendingEvidence(newEvidenceFiles);
  };

  /**
   * Edit a message (for now, just close and reopen)
   */
  const handleEditMessage = (index: number) => {
    const messageToEdit = courtSession.messages[index];
    setEditingMessage(messageToEdit.text);

    // Remove messages from this point onwards
    // Note: This is simplified - full implementation would need hook support
    console.log('Edit message at index:', index);
  };

  /**
   * Navigate to next step
   */
  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((currentStep + 1) as HearingStep);
    }
  };

  /**
   * Return to dashboard
   */
  const handleBackToDashboard = () => {
    setCurrentScreen('overview');
    setCurrentStep(1);
    setEvidencePresented(false);
    setEvidenceFiles([]);
    setPendingEvidence([]);
    courtSession.endSession();
  };

  /**
   * Open evidence modal for editing
   */
  const handleOpenEvidenceModalForEdit = () => {
    setShowEvidenceModal(true);
  };

  /**
   * Handle evidence presentation from edit
   */
  const handlePresentEvidenceFromEdit = (selectedEvidence: string[], uploadedFiles: File[]) => {
    const uploadedEvidenceFiles: EvidenceFile[] = uploadedFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size
    }));

    setPendingEvidence(uploadedEvidenceFiles);
    setShowEvidenceModal(false);
  };

  // Convert hook messages to UI format
  const messages: Message[] = courtSession.messages.map(mapChatMessageToMessage);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* WebSocket Connection Indicator */}
      {currentScreen === 'hearing' && !courtSession.wsConnected && (
        <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-md text-sm z-50">
          Reconnecting to courtroom...
        </div>
      )}

      {/* Loading Indicator */}
      {currentScreen === 'hearing' && courtSession.isLoading && (
        <div className="fixed top-4 right-4 bg-blue-100 border border-blue-400 text-blue-800 px-4 py-2 rounded-md text-sm z-50">
          Judge is reviewing your statement...
        </div>
      )}

      {/* Error Display */}
      {currentScreen === 'hearing' && courtSession.error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded-md text-sm z-50 max-w-xs">
          Error: {courtSession.error}
        </div>
      )}

      {currentScreen === 'overview' && (
        <HearingOverview onStartHearing={handleStartHearing} caseData={caseData} />
      )}

      {currentScreen === 'hearing' && (
        <ActiveHearing
          currentStep={currentStep}
          messages={messages}
          evidenceCount={pendingEvidence.length}
          onNextStep={handleNextStep}
          onSendMessage={handleSendMessage}
          onViewEvidence={() => setShowEvidenceModal(true)}
          onBackToDashboard={handleBackToDashboard}
          onPresentEvidence={() => setShowEvidenceModal(true)}
          onUploadEvidence={() => setShowEvidenceModal(true)}
          hasSubmittedEvidence={evidenceFiles.length > 0}
          onToggleSidePanel={() => setShowSidePanel(true)}
          submittedEvidenceCount={evidenceFiles.length}
          onEditMessage={handleEditMessage}
          editingMessage={editingMessage}
          caseData={caseData}
        />
      )}

      {showEvidenceModal && (
        <EvidenceModal
          onSubmit={editingMessage ? handlePresentEvidenceFromEdit : handlePresentEvidence}
          onCancel={() => setShowEvidenceModal(false)}
        />
      )}

      {showEvidenceIndicator && submittedEvidenceNames.length > 0 && (
        <EvidenceIndicator
          evidenceCount={submittedEvidenceNames.length}
          evidenceNames={submittedEvidenceNames}
          onDismiss={() => setShowEvidenceIndicator(false)}
        />
      )}

      <EvidenceSidePanel
        isOpen={showSidePanel}
        onClose={() => setShowSidePanel(false)}
        evidenceFiles={evidenceFiles}
        onPreview={(file) => {
          setPreviewFile(file);
          setShowSidePanel(false);
        }}
      />

      <FilePreviewModal
        isOpen={previewFile !== null}
        onClose={() => {
          setPreviewFile(null);
          setShowSidePanel(true);
        }}
        file={previewFile}
      />
    </div>
  );
}
