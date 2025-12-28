'use client';

import React from 'react';

interface PreviewPaperProps {
  children: React.ReactNode;
}

export default function PreviewPaper({ children }: PreviewPaperProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <div
        className="aspect-[1/1.414] w-full p-8 md:p-12 text-sm text-slate-800 overflow-y-auto"
        style={{ fontFamily: `'Inter', 'Helvetica', 'Arial', sans-serif` }}
      >
        {children}
      </div>
    </div>
  );
}
