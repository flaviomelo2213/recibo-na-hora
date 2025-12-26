'use client';

import React from 'react';

interface DecisionScreenProps {
  onDownloadPdf: () => void;
  digitalSignUrl: string;
}

export default function DecisionScreen({ onDownloadPdf, digitalSignUrl }: DecisionScreenProps) {
  return (
    <div className="my-12 max-w-4xl mx-auto p-8 bg-stone-100 rounded-2xl border border-stone-200">
      <h2 className="text-3xl font-bold text-center text-stone-800 mb-2">Seu documento está pronto!</h2>
      <p className="text-center text-stone-600 mb-10">Escolha abaixo a melhor forma de finalizar o processo.</p>

      <div className="flex flex-wrap gap-8 justify-center">
        
        {/* Card 1: Imprimir e Assinar Manualmente */}
        <div className="flex-1 basis-80 min-w-[320px] bg-white border border-stone-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col">
          <div className="text-5xl text-center mb-4">🖨️</div>
          <h3 className="text-xl font-bold text-center text-stone-800 mb-4">Imprimir e Assinar</h3>
          <ul className="list-disc list-inside text-stone-600 text-sm space-y-2 mb-6 flex-grow">
            <li>Baixe o arquivo em PDF gratuitamente.</li>
            <li>Imprima as vias necessárias em papel.</li>
            <li>Assine à caneta (reconheça firma em cartório se necessário).</li>
          </ul>
          <button 
            onClick={onDownloadPdf}
            className="w-full font-bold py-3 px-6 rounded-lg border-2 border-stone-700 text-stone-700 hover:bg-stone-100 transition-colors"
          >
            Baixar PDF Grátis
          </button>
        </div>

        {/* Card 2: Assinar Digitalmente */}
        <div className="flex-1 basis-80 min-w-[320px] bg-white border-2 border-amber-500 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative flex flex-col">
          <span className="absolute top-0 -translate-y-1/2 right-6 bg-amber-500 text-stone-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Recomendado
          </span>
          
          <div className="text-5xl text-center mb-4">📱✍️</div>
          <h3 className="text-xl font-bold text-center text-amber-600 mb-4">Assinar Digitalmente</h3>
          <ul className="list-disc list-inside text-stone-600 text-sm space-y-2 mb-6 flex-grow">
            <li>Envie para assinatura por WhatsApp ou E-mail.</li>
            <li>Validade jurídica garantida (Lei 14.063/2020).</li>
            <li>Processo finalizado em minutos pelo celular.</li>
          </ul>
          
          <a href={digitalSignUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
              <button className="w-full font-bold py-3 px-6 rounded-lg bg-amber-500 text-stone-900 hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg">
                Assinar Digitalmente
              </button>
          </a>
          <p className="text-center text-xs text-stone-500 mt-3">Você será redirecionado para uma plataforma parceira.</p>
        </div>

      </div>
        <p className="text-center mt-8 text-xs text-stone-500">
            Ao continuar, você concorda com nossos <a href="/termos-uso" target="_blank" className="underline hover:text-stone-700">Termos de Uso</a>.
        </p>
    </div>
  );
}
