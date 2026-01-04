"use client";

import * as React from "react";

type Tone = "formal" | "simples" | "profissional";

type AiContextValue = {
  apiKey: string;
  setApiKey: (v: string) => void;

  persist: boolean;
  setPersist: (v: boolean) => void;

  tone: Tone;
  setTone: (v: Tone) => void;

  model: string;
  setModel: (v: string) => void;

  clear: () => void;
};

const STORAGE_KEY = "rnh_gemini_api_key";
const STORAGE_PERSIST = "rnh_gemini_persist";
const STORAGE_TONE = "rnh_gemini_tone";
const STORAGE_MODEL = "rnh_gemini_model";

const AiContext = React.createContext<AiContextValue | null>(null);

export function AiProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKeyState] = React.useState("");
  const [persist, setPersistState] = React.useState(true);
  const [tone, setToneState] = React.useState<Tone>("formal");
  const [model, setModelState] = React.useState("gemini-2.5-flash");

  React.useEffect(() => {
    try {
      const p = localStorage.getItem(STORAGE_PERSIST);
      const shouldPersist = p === null ? true : p === "1";
      setPersistState(shouldPersist);

      const savedTone = (localStorage.getItem(STORAGE_TONE) as Tone | null) || "formal";
      if (savedTone === "formal" || savedTone === "simples" || savedTone === "profissional") {
        setToneState(savedTone);
      }

      const savedModel = localStorage.getItem(STORAGE_MODEL) || "gemini-2.5-flash";
      setModelState(savedModel);

      if (shouldPersist) {
        const savedKey = localStorage.getItem(STORAGE_KEY) || "";
        setApiKeyState(savedKey);
      }
    } catch {
      // ignore
    }
  }, []);

  const setApiKey = React.useCallback(
    (v: string) => {
      setApiKeyState(v);
      try {
        if (persist) localStorage.setItem(STORAGE_KEY, v);
      } catch {
        // ignore
      }
    },
    [persist]
  );

  const setPersist = React.useCallback((v: boolean) => {
    setPersistState(v);
    try {
      localStorage.setItem(STORAGE_PERSIST, v ? "1" : "0");
      if (!v) localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const setTone = React.useCallback((v: Tone) => {
    setToneState(v);
    try {
      localStorage.setItem(STORAGE_TONE, v);
    } catch {
      // ignore
    }
  }, []);

  const setModel = React.useCallback((v: string) => {
    setModelState(v);
    try {
      localStorage.setItem(STORAGE_MODEL, v);
    } catch {
      // ignore
    }
  }, []);

  const clear = React.useCallback(() => {
    setApiKeyState("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value: AiContextValue = {
    apiKey,
    setApiKey,
    persist,
    setPersist,
    tone,
    setTone,
    model,
    setModel,
    clear,
  };

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
}

export function useAi() {
  const ctx = React.useContext(AiContext);
  if (!ctx) {
    // IMPORTANTE: aqui tem que ser THROW
    throw new Error("useAi deve ser usado dentro de <AiProvider>.");
  }
  return ctx;
}