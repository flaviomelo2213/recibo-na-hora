'use client';
import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou antes
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const aceitar = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-50 shadow-lg border-t border-slate-700 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-300">
          <p>
            <strong>Privacidade e Dados:</strong> Nós utilizamos cookies para melhorar sua experiência. 
            Ao continuar, você concorda que os documentos são gerados no seu navegador e <strong>nenhum dado pessoal é salvo em nossos servidores</strong>.
            <a href="/politica-privacidade" className="text-blue-400 hover:underline ml-1">Ler Política.</a>
          </p>
        </div>
        <button 
          onClick={aceitar}
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold text-sm transition whitespace-nowrap"
        >
          Entendi e Aceito
        </button>
      </div>
    </div>
  );
}
