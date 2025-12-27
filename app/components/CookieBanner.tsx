'use client';

import { useEffect, useState } from "react";

const STORAGE_KEY = "rnh_cookie_consent";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setVisible(!saved); // se não tem consentimento salvo, mostra
    } catch {
      setVisible(true); // se falhar, mostra por segurança
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {}
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-700">
          Usamos cookies para melhorar sua experiência, medir desempenho e exibir anúncios.
          Ao continuar, você concorda com nossa{" "}
          <a href="/politica-de-privacidade" className="font-semibold underline">
            Política de Privacidade
          </a>
          .
        </p>

        <div className="flex gap-2">
          <button
            onClick={reject}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-300"
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
