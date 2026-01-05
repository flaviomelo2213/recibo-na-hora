
'use client';

import React from 'react';

interface ToolTwoColumnProps {
  form: React.ReactNode;
  preview: React.ReactNode;
}

export function ToolTwoColumn({ form, preview }: ToolTwoColumnProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      {/* Coluna do Formulário */}
      <div className="min-w-0">
        {form}
      </div>
      
      {/* Coluna do Preview (sticky no desktop) */}
      <div className="hidden lg:block lg:sticky lg:top-24 self-start">
        {preview}
      </div>

      {/* Preview visível apenas no mobile, abaixo do formulário */}
      <div className="block lg:hidden mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Pré-visualização</h2>
        {preview}
      </div>
    </div>
  );
}
