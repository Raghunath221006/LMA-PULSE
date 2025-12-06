import React, { useState } from 'react';
import { AlertTriangle, FileText, CheckCircle2, Loader2, Send, Download } from 'lucide-react';
import { RESERVATION_OF_RIGHTS_TEMPLATE, WAIVER_REQUEST_TEMPLATE } from '../data/mockData';

const ActionPanel: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [previewText, setPreviewText] = useState("Select an action above to generate a draft document.");
  const [activeAction, setActiveAction] = useState<'waiver' | 'reservation' | null>(null);

  const handleReservationClick = () => {
    setIsLoading(true);
    setActiveAction('reservation');
    setPreviewText(''); // Clear current text
    
    // Simulate API latency/processing
    setTimeout(() => {
      setPreviewText(RESERVATION_OF_RIGHTS_TEMPLATE);
      setIsLoading(false);
    }, 1000);
  };

  const handleWaiverClick = () => {
      setIsLoading(true);
      setActiveAction('waiver');
      setPreviewText('');

      setTimeout(() => {
          setPreviewText(WAIVER_REQUEST_TEMPLATE);
          setIsLoading(false);
      }, 800);
  };

  return (
    <div className="w-96 bg-fintech-bg border-l border-fintech-border flex flex-col h-full fixed right-0 top-0 z-10 shadow-xl">
      <div className="p-6 border-b border-fintech-border">
        <h2 className="text-lg font-bold text-white mb-1">Remediation Actions</h2>
        <p className="text-xs text-fintech-text-secondary">Workflow ID: #WF-2025-892</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Critical Alert Box */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-sm p-4 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
                <h3 className="text-sm font-bold text-red-500 mb-1">CRITICAL ALERT</h3>
                <p className="text-xs text-red-200 leading-relaxed">
                    Leverage Ratio Breach detected on Dec 2025 (4.52x vs 4.00x). Immediate action required under Clause 23.
                </p>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
            <button 
                onClick={handleWaiverClick}
                className={`w-full py-3 px-4 rounded-sm border text-sm font-semibold transition-all flex items-center justify-center
                ${activeAction === 'waiver' ? 'bg-white/10 border-white text-white' : 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'}`}
            >
                <FileText className="w-4 h-4 mr-2" />
                Draft Waiver Request
            </button>
            
            <button 
                onClick={handleReservationClick}
                className="w-full py-3 px-4 rounded-sm bg-fintech-danger hover:bg-red-700 text-white text-sm font-semibold transition-colors flex items-center justify-center shadow-lg shadow-red-900/20"
            >
                <ShieldAlertIcon className="w-4 h-4 mr-2" />
                Draft Reservation of Rights
            </button>
        </div>

        {/* Document Preview */}
        <div className="flex flex-col h-[400px]">
            <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">LMA Document Preview</label>
                {activeAction && !isLoading && (
                    <span className="text-[10px] bg-green-900 text-green-300 px-2 py-0.5 rounded border border-green-700 flex items-center">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Generated
                    </span>
                )}
            </div>
            
            <div className="flex-1 bg-[#111625] border border-fintech-border rounded-sm p-4 relative font-mono text-xs text-gray-300 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#111625]/80 backdrop-blur-sm">
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-8 h-8 text-fintech-accent animate-spin mb-2" />
                            <span className="text-xs text-fintech-accent">Generating legal text...</span>
                        </div>
                    </div>
                ) : (
                    previewText
                )}
            </div>
        </div>
      </div>

      {/* Action Panel Footer */}
      <div className="p-4 border-t border-fintech-border bg-[#0d121c]">
          <div className="flex space-x-2">
            <button disabled={!activeAction} className="flex-1 py-2 bg-fintech-accent hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-sm flex items-center justify-center transition-colors">
                <Send className="w-3 h-3 mr-2" /> Send to Council
            </button>
             <button disabled={!activeAction} className="py-2 px-3 border border-fintech-border hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 rounded-sm flex items-center justify-center transition-colors">
                <Download className="w-3 h-3" />
            </button>
          </div>
      </div>
    </div>
  );
};

// Helper component for the Shield icon to avoid naming conflicts if necessary, 
// though Lucide imports are usually safe.
const ShieldAlertIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

export default ActionPanel;