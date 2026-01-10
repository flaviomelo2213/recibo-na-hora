'use client';

import React, { useMemo, useState } from 'react';
import { useAi } from './AiProvider';

export default function AiDrawer() {
  const { apiKey, setApiKey, tone, setTone, persistKey, setPersistKey, isOpen, close, clear } = useAi();
  const [showKey, setShowKey] = useState(false);

  const hasKey = useMemo(() => apiKey.trim().length > 0, [apiKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Fechar painel de IA"
        className="absolute inset-0 bg-black/40"
        onClick={close}
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 h-full w-[360px] max-w-[92vw] bg-white shadow-2xl border-l border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-black">
                IA
              </span>
              Painel de IA (Gemini BYOK)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Cole sua chave uma vez e use em qualquer ferramenta.
            </p>
          </div>

          <button
            type="button"
            onClick={close}
            className="text-slate-500 hover:text-slate-800 text-sm font-semibold"
          >
            Fechar
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-auto">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs text-slate-600">
              Onde gerar sua chave:
            </p>
            <a
              className="text-sm font-bold text-indigo-700 hover:underline"
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
            >
              Abrir Google AI Studio (API Keys)
            </a>
            <p className="text-[11px] text-slate-500 mt-1">
              A chave fica apenas no seu navegador (opcional salvar).
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">Gemini API Key</label>
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                {showKey ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>

            <input
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              type={showKey ? 'text' : 'password'}
              placeholder="Cole sua chave aqui"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />

            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-600 flex items-center gap-2">
                <input type="checkbox" checked={persistKey} onChange={(e) => setPersistKey(e.target.checked)} />
                Salvar chave neste navegador
              </label>

              <button
                type="button"
                onClick={clear}
                className="text-xs font-bold text-rose-700 hover:underline"
              >
                Limpar chave
              </button>
            </div>

            <div className="text-xs mt-1">
              {hasKey ? (
                <span className="text-emerald-700 font-semibold">Chave detectada.</span>
              ) : (
                <span className="text-slate-500">Nenhuma chave informada.</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">Tom do texto</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
              className="w-full p-3 border rounded-lg bg-white"
            >
              <option value="profissional">Profissional</option>
              <option value="formal">Formal</option>
              <option value="simples">Simples</option>
            </select>
            <p className="text-xs text-slate-500">
              Esse tom será usado por padrão em todas as ferramentas que usam IA.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-3">
            <h4 className="text-sm font-bold text-slate-800">Como usar</h4>
            <ol className="text-xs text-slate-600 list-decimal pl-5 mt-2 space-y-1">
              <li>Cole sua API Key acima.</li>
              <li>Escolha o tom.</li>
              <li>Volte para a ferramenta e clique em “Melhorar com IA”.</li>
            </ol>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200">
          <p className="text-[11px] text-slate-500">
            Importante: a IA apenas melhora a redação. Não substitui orientação jurídica.
          </p>
        </div>
      </aside>
    </div>
  );
}
