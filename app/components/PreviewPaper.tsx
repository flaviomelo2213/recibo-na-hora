
import React from 'react';

interface PreviewPaperProps {
  // Alterado para aceitar qualquer elemento React como filho
  children: React.ReactNode;
}

const PreviewPaper: React.FC<PreviewPaperProps> = ({ children }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-200">
        <h3 className="text-base font-semibold text-slate-800">Pré-visualização</h3>
        <p className="text-xs text-slate-500 mt-1">O documento final será um PDF em formato A4.</p>
      </div>

      <div className="p-4 overflow-x-auto">
        {/* O conteúdo (seja texto ou componente) é renderizado aqui */}
        {children}
      </div>
    </div>
  );
};

export default PreviewPaper;
