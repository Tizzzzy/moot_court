import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HearingOverview } from './HearingOverview';
import { ActiveHearing } from './ActiveHearing';
import { EvidenceModal, type EvidenceItem } from './EvidenceModal';
import { EvidenceIndicator } from './EvidenceIndicator';
import { EvidenceSidePanel } from './EvidenceSidePanel';
import { FilePreviewModal } from './FilePreviewModal';
import { useCourtSession } from '@/hooks/useCourtSession';
import type { ChatMessage } from '@/types/court';
import { fetchEvidenceRecommendations } from '@/services/api';

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

export function CourtPage() {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const USER_ID = userId || 'user_1';

  const courtSession = useCourtSession(USER_ID, 1);

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'overview' | 'hearing'>('overview');
  const [currentStep, setCurrentStep] = useState<HearingStep>(1);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [evidencePresented, setEvidencePresented] = useState(false);
  const [evidenceFiles, setEvidenceFiles] = useState<EvidenceFile[]>([]);
  const [pendingEvidence, setPendingEvidence] = useState<EvidenceFile[]>([]);
  const [pendingEvidenceFiles, setPendingEvidenceFiles] = useState<File[]>([]); // Actual file objects
  const [showEvidenceIndicator, setShowEvidenceIndicator] = useState(false);
  const [submittedEvidenceNames, setSubmittedEvidenceNames] = useState<string[]>([]);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [previewFile, setPreviewFile] = useState<EvidenceFile | null>(null);
  const [editingMessage, setEditingMessage] = useState<string>('');
  const [userEvidence, setUserEvidence] = useState<EvidenceItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

        // Load case data
        const caseResponse = await fetch(`${baseUrl}/court/case-data?user_id=${USER_ID}`);
        if (caseResponse.ok) {
          const data = await caseResponse.json();
          setCaseData(data);
        }

        // Load user's evidence from dashboard
        try {
          const evidenceRecs = await fetchEvidenceRecommendations(USER_ID);
          // Fetch status for each evidence category
          const evidenceWithStatus = await Promise.all(
            evidenceRecs.map(async (rec) => {
              try {
                const statusRes = await fetch(`${baseUrl}/evidence/status/${USER_ID}/${rec.folderName}`);
                const statusData = statusRes.ok ? await statusRes.json() : { hasFiles: false, isReady: false };
                return {
                  title: rec.title,
                  folderName: rec.folderName,
                  isReady: statusData.isReady || false
                };
              } catch {
                return { title: rec.title, folderName: rec.folderName, isReady: false };
              }
            })
          );
          setUserEvidence(evidenceWithStatus.filter(e => e.isReady)); // Only show ready evidence
        } catch (err) {
          console.error('Failed to load evidence:', err);
        }
      } catch (error) {
        console.error('Failed to load case data:', error);
      }
    };
    loadData();
  }, [USER_ID]);

  const handleStartHearing = async () => {
    setCurrentScreen('hearing');
    setCurrentStep(1);
    await courtSession.startSession();
  };

  const handleSendMessage = async (message: string) => {
    setEditingMessage('');
    try {
      await courtSession.sendMessage(message);
      if (pendingEvidenceFiles.length > 0) {
        await courtSession.uploadEvidence(pendingEvidenceFiles);
        setEvidenceFiles(prev => [...prev, ...pendingEvidence]);
        setPendingEvidence([]);
        setPendingEvidenceFiles([]);
        setEvidencePresented(true);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handlePresentEvidence = async (selectedEvidence: string[], uploadedFiles: File[]) => {
    setShowEvidenceModal(false);

    if (uploadedFiles.length === 0) return;

    const uploadedEvidenceFiles: EvidenceFile[] = uploadedFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size
    }));

    // If evidence upload is allowed by Judge, upload immediately
    if (courtSession.evidenceUploadAllowed) {
      try {
        console.log('[CourtPage] Uploading evidence files:', uploadedFiles.map(f => f.name));
        await courtSession.uploadEvidence(uploadedFiles);
        setEvidenceFiles(prev => [...prev, ...uploadedEvidenceFiles]);
        setSubmittedEvidenceNames(uploadedFiles.map(f => f.name));
        setShowEvidenceIndicator(true);
        setEvidencePresented(true);
        console.log('[CourtPage] Evidence uploaded successfully');
      } catch (error) {
        console.error('[CourtPage] Failed to upload evidence:', error);
      }
    } else {
      // Store for upload with next message
      setPendingEvidence(uploadedEvidenceFiles);
      setPendingEvidenceFiles(uploadedFiles);
    }
  };

  const handleEditMessage = (index: number) => {
    const messageToEdit = courtSession.messages[index];
    setEditingMessage(messageToEdit.text);
  };

  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((currentStep + 1) as HearingStep);
    }
  };

  const handleBackToDashboard = () => {
    navigate(`/dashboard/${USER_ID}`);
  };

  const messages: Message[] = courtSession.messages.map(mapChatMessageToMessage);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {currentScreen === 'hearing' && !courtSession.wsConnected && (
        <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-md text-sm z-50">
          Reconnecting to courtroom...
        </div>
      )}

      {currentScreen === 'hearing' && courtSession.isLoading && (
        <div className="fixed top-4 right-4 bg-blue-100 border border-blue-400 text-blue-800 px-4 py-2 rounded-md text-sm z-50">
          Judge is reviewing your statement...
        </div>
      )}

      {currentScreen === 'hearing' && courtSession.error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded-md text-sm z-50 max-w-xs">
          Error: {courtSession.error}
        </div>
      )}

      {currentScreen === 'overview' && (
        <HearingOverview
          onStartHearing={handleStartHearing}
          caseData={caseData}
          onBackToDashboard={handleBackToDashboard}
        />
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
          evidenceUploadAllowed={courtSession.evidenceUploadAllowed}
          verdictIssued={courtSession.verdictIssued}
        />
      )}

      {showEvidenceModal && (
        <EvidenceModal
          onSubmit={handlePresentEvidence}
          onCancel={() => setShowEvidenceModal(false)}
          availableEvidence={userEvidence}
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
