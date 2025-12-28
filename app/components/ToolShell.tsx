import React from 'react';

interface ToolShellProps {
  title: string;
  subtitle: string;
  left: React.ReactNode;
  right: React.ReactNode;
  actions: React.ReactNode;
}

export default function ToolShell({ title, subtitle, left, right, actions }: ToolShellProps) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Cabeçalho */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </header>

      {/* Corpo Principal (Split Screen) */}
      <div className="grid grid-cols-12 gap-8 lg:gap-12">
        
        {/* Lado Esquerdo: Formulário */}
        <div className="col-span-12 lg:col-span-7">
          {left}
        </div>

        {/* Lado Direito: Preview e Ações (Desktop) */}
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-6">
            {right}
            <div className="hidden lg:block">
              {actions}
            </div>
          </div>
        </div>

      </div>

      {/* Ações Flutuantes (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 p-4 z-40">
        {actions}
      </div>
      {/* Espaçamento para o conteúdo não ficar atrás das ações fixas no mobile */}
      <div className="lg:hidden h-24"></div>
    </div>
  );
}
