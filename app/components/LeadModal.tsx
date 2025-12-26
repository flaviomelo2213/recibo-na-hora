'use client';

import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (dados: { nome: string; whatsapp: string }) => void;
}

export default function LeadModal({ isOpen, onClose, onSuccess }: LeadModalProps) {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Aqui simulamos o salvamento (No futuro conectamos com banco de dados)
    console.log("Lead Capturado:", { nome, whatsapp });
    
    setTimeout(() => {
      setLoading(false);
      onSuccess({ nome, whatsapp }); // Libera o Download
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in">
        
        {/* Cabeçalho do Modal */}
        <div className="bg-blue-600 p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <i className="fa-solid fa-lock text-2xl text-white"></i>
          </div>
          <h3 className="text-xl font-bold text-white">Documento Pronto!</h3>
          <p className="text-blue-100 text-sm mt-1">Cadastre-se para liberar o download imediatamente.</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Seu Nome Completo</label>
            <div className="relative">
              <i className="fa-solid fa-user absolute left-4 top-3.5 text-gray-400"></i>
              <input 
                required 
                type="text" 
                placeholder="Ex: Flavio Melo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Seu WhatsApp</label>
            <div className="relative">
              <i className="fa-brands fa-whatsapp absolute left-4 top-3.5 text-green-500 text-lg"></i>
              <input 
                required 
                type="tel" 
                placeholder="(00) 00000-0000"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {loading ? 'Liberando...' : <> <i className="fa-solid fa-download"></i> Baixar Documento Agora </>}
          </button>

          <p className="text-xs text-center text-gray-400 mt-4">
            <i className="fa-solid fa-shield-halved mr-1"></i> Seus dados estão 100% seguros.
          </p>
        </form>
        
        {/* Botão Fechar (Discreto) */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
          <i className="fa-solid fa-times text-xl"></i>
        </button>
      </div>
    </div>
  );
}
