import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HearingOverview } from './HearingOverview';
import { ActiveHearing } from './ActiveHearing';
import { EvidenceModal, type EvidenceItem } from './EvidenceModal';
import { EvidenceIndicator } from './EvidenceIndicator';
import { EvidenceSidePanel } from './EvidenceSidePanel';
import { FilePreviewModal } from './FilePreviewModal';
import { useCourtSession } from '@/hooks/useCourtSession';
import type { ChatMessage, ObjectionDecision } from '@/types/court';
import { fetchEvidenceRecommendations } from '@/services/api';
import { AlertTriangle } from 'lucide-react';

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
    improvements: string[];
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
      improvements: chatMsg.feedback.improvements?.filter(i => i.trim()) || []
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
  const [pendingObjection, setPendingObjection] = useState<ObjectionDecision | null>(null);
  const [pendingObjectionMsg, setPendingObjectionMsg] = useState<string>('');

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
      // UPLOAD EVIDENCE FIRST (if any) - ensures it's uploaded during Plaintiff's turn
      // Backend returns turn to Plaintiff after evidence acknowledgement
      if (pendingEvidenceFiles.length > 0) {
        await courtSession.uploadEvidence(pendingEvidenceFiles);
        setEvidenceFiles(prev => [...prev, ...pendingEvidence]);
        setPendingEvidence([]);
        setPendingEvidenceFiles([]);
        setEvidencePresented(true);
      }

      // THEN SEND MESSAGE - turn is still Plaintiff after evidence acknowledgement
      const result = await courtSession.sendMessage(message);

      // Check if an objection was raised
      if (result?.hasObjection && result.objection) {
        setPendingObjection(result.objection);
        setPendingObjectionMsg(message);
        return; // Stop here; UI will show objection banner
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

    // ALWAYS stage evidence for upload with next message
    setPendingEvidence(uploadedEvidenceFiles);
    setPendingEvidenceFiles(uploadedFiles);
    setShowEvidenceIndicator(true);
  };

  const handleEditMessage = (index: number) => {
    const messageToEdit = courtSession.messages[index];
    setEditingMessage(messageToEdit.text);
  };

  const handleContinueAnyway = async () => {
    if (!pendingObjectionMsg) return;
    setPendingObjection(null);
    try {
      await courtSession.continueAfterObjection(true, pendingObjectionMsg);
      setPendingObjectionMsg('');
    } catch (error) {
      console.error('Failed to continue after objection:', error);
    }
  };

  const handleRephrase = () => {
    const suggestion = pendingObjection?.suggested_rephrasing || '';
    setPendingObjection(null);
    setPendingObjectionMsg('');
    setEditingMessage(suggestion); // pre-fill the chat input with suggested rephrasing
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

      {currentScreen === 'hearing' && pendingObjection && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-2xl z-40 px-4">
          <div className="bg-amber-50 border border-amber-400 rounded-xl p-4 shadow-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-amber-900">
                  Objection: {pendingObjection.objection_type || 'Raised by Defense'}
                  {pendingObjection.severity && <span className="ml-2 text-xs uppercase tracking-wide opacity-70">({pendingObjection.severity})</span>}
                </p>
                {pendingObjection.legal_reasoning && (
                  <p className="text-sm text-amber-800 mt-1">{pendingObjection.legal_reasoning}</p>
                )}
                {pendingObjection.suggested_rephrasing && (
                  <p className="text-sm text-amber-700 mt-1 italic">
                    Suggested: "{pendingObjection.suggested_rephrasing}"
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2 mt-3 justify-end">
              <button
                onClick={handleRephrase}
                className="px-4 py-1.5 text-sm border border-amber-400 rounded-lg text-amber-800 hover:bg-amber-100"
              >
                Rephrase My Statement
              </button>
              <button
                onClick={handleContinueAnyway}
                className="px-4 py-1.5 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700"
              >
                Continue Anyway
              </button>
            </div>
          </div>
        </div>
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
          currentSpeaker={courtSession.currentSpeaker}
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
