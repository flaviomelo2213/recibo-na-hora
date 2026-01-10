'use client';

import React from 'react';
import { useAi } from './AiProvider';

export default function AiFab() {
  const { toggle } = useAi();

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-[9998] rounded-full shadow-lg border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition"
      aria-label="Abrir painel de IA"
      title="Painel de IA"
    >
      <span className="font-black text-slate-900">IA</span>
    </button>
  );
}
