'use client';

import React from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// The main container for a tool page.
export function ToolShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 md:px-0">
        {/* Optional: Add a back link if it's common to all tool pages */}
        <div className="mb-4">
            <Link href="/ferramentas" className="flex items-center text-sm text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Voltar para Todas as Ferramentas
            </Link>
        </div>
        {children}
    </div>
  );
}

// The header for a tool page, containing title and description.
export function ToolShellHeader({ title, description, referenceLink }: { title:string, description: string, referenceLink?: { href: string; text: string; } }) {
    return (
        <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">{description}</p>
            {referenceLink && (
              <a href={referenceLink.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium mt-3 transition-colors">
                {referenceLink.text}
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            )}
        </div>
    );
}

// The main content area for a tool page.
export function ToolShellMain({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}
