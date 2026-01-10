'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type AiTone = 'formal' | 'profissional' | 'simples';

type AiContextValue = {
  apiKey: string;
  setApiKey: (v: string) => void;

  tone: AiTone;
  setTone: (v: AiTone) => void;

  persistKey: boolean;
  setPersistKey: (v: boolean) => void;

  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;

  clear: () => void;
};

const AiContext = createContext<AiContextValue | null>(null);

export function useAi() {
  const ctx = useContext(AiContext);
  if (!ctx) throw new Error('useAi deve ser usado dentro de <AiProvider>.');
  return ctx;
}

const LS_KEY = 'rnh_gemini_api_key';
const LS_TONE = 'rnh_ai_tone';
const LS_PERSIST = 'rnh_ai_persist';

export function AiProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKey] = useState('');
  const [tone, setTone] = useState<AiTone>('profissional');
  const [persistKey, setPersistKey] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // load
  useEffect(() => {
    try {
      const p = localStorage.getItem(LS_PERSIST);
      const shouldPersist = p === null ? true : p === '1';
      setPersistKey(shouldPersist);

      const savedKey = localStorage.getItem(LS_KEY) || '';
      if (shouldPersist) setApiKey(savedKey);

      const savedTone = (localStorage.getItem(LS_TONE) as AiTone) || 'profissional';
      if (savedTone === 'formal' || savedTone === 'profissional' || savedTone === 'simples') {
        setTone(savedTone);
      }
    } catch {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(LS_PERSIST, persistKey ? '1' : '0');
      if (!persistKey) localStorage.removeItem(LS_KEY);
      else localStorage.setItem(LS_KEY, apiKey);
    } catch {
      // ignore
    }
  }, [persistKey, apiKey]);

  useEffect(() => {
    try {
      localStorage.setItem(LS_TONE, tone);
    } catch {
      // ignore
    }
  }, [tone]);

  const value = useMemo<AiContextValue>(() => {
    return {
      apiKey,
      setApiKey,
      tone,
      setTone,
      persistKey,
      setPersistKey,

      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),

      clear: () => {
        setApiKey('');
        try {
          localStorage.removeItem(LS_KEY);
        } catch {
          // ignore
        }
      },
    };
  }, [apiKey, tone, persistKey, isOpen]);

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
}
