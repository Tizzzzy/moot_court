import { X, Download, FileText } from 'lucide-react';

interface EvidenceFile {
  name: string;
  type: string;
  size: number;
}

interface FilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: EvidenceFile | null;
}

export function FilePreviewModal({ isOpen, onClose, file }: FilePreviewModalProps) {
  if (!isOpen || !file) return null;

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
            <div className="flex-1 min-w-0 mr-4">
              <h2 className="font-semibold text-[#0a0a0a] text-lg truncate">{file.name}</h2>
              <p className="text-sm text-[#64748b] mt-0.5">
                {formatFileSize(file.size)} • {file.type}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  // Simulate download
                  alert(`Downloading ${file.name}...`);
                }}
                className="bg-[#f1f5f9] text-[#475569] px-4 py-2 rounded-lg hover:bg-[#e2e8f0] transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Download</span>
              </button>
              <button
                onClick={onClose}
                className="text-[#64748b] hover:text-[#0a0a0a] transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 overflow-y-auto bg-[#f8fafc] p-8">
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-12 min-h-[500px] flex flex-col items-center justify-center">
              {/* Mock Preview */}
              {file.type.includes('pdf') && (
                <div className="text-center max-w-2xl">
                  <div className="bg-[#fef2f2] rounded-full p-6 inline-flex mb-6">
                    <FileText className="w-16 h-16 text-[#dc2626]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">PDF Document</h3>
                  <p className="text-[#64748b] mb-6">
                    This is a preview of your PDF file. In a production environment, 
                    the actual document content would be displayed here.
                  </p>
                  <div className="bg-white border-2 border-[#e2e8f0] rounded-lg p-8 text-left">
                    <div className="space-y-4">
                      <div className="h-4 bg-[#f1f5f9] rounded w-3/4"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-full"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-5/6"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-2/3"></div>
                      <div className="h-8"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-4/5"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-full"></div>
                      <div className="h-4 bg-[#f1f5f9] rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {file.type.includes('image') && (
                <div className="text-center">
                  <div className="bg-[#eff6ff] rounded-full p-6 inline-flex mb-6">
                    <FileText className="w-16 h-16 text-[#2563eb]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Image File</h3>
                  <p className="text-[#64748b] mb-6">
                    This is a preview of your image file. In a production environment, 
                    the actual image would be displayed here.
                  </p>
                  <div className="bg-[#f1f5f9] rounded-lg w-96 h-64 flex items-center justify-center">
                    <span className="text-[#94a3b8]">Image Preview</span>
                  </div>
                </div>
              )}
              
              {file.type.includes('zip') && (
                <div className="text-center">
                  <div className="bg-[#fef3c7] rounded-full p-6 inline-flex mb-6">
                    <FileText className="w-16 h-16 text-[#f59e0b]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Archive File</h3>
                  <p className="text-[#64748b] mb-6">
                    This archive contains multiple files. Download to extract and view contents.
                  </p>
                  <div className="bg-white border-2 border-[#e2e8f0] rounded-lg p-6 text-left max-w-md mx-auto">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="w-4 h-4 text-[#64748b]" />
                        <span className="text-[#0a0a0a]">photo_001.jpg</span>
                        <span className="text-[#94a3b8] ml-auto">245 KB</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="w-4 h-4 text-[#64748b]" />
                        <span className="text-[#0a0a0a]">photo_002.jpg</span>
                        <span className="text-[#94a3b8] ml-auto">312 KB</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <FileText className="w-4 h-4 text-[#64748b]" />
                        <span className="text-[#0a0a0a]">photo_003.jpg</span>
                        <span className="text-[#94a3b8] ml-auto">198 KB</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
