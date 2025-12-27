"use client";
import React, { useState } from 'react';
import FerramentaProcuracao, { ProcuracaoData } from "./_components/FerramentaProcuracao";
import PreviewProcuracao from "./_components/PreviewProcuracao";
import SeoContentBlock from "../../components/SeoContentBlock"; 
import LegalDisclaimer from "../../components/LegalDisclaimer";

export default function ProcuracaoProfissionalPage() {
  const [data, setData] = useState<ProcuracaoData>({
    outorganteNome: '',
    outorganteCPF: '',
    outorganteRG: '',
    outorganteEndereco: '',
    outorgadoNome: '',
    outorgadoCPF: '',
    outorgadoRG: '',
    outorgadoEndereco: '',
    poderes: '',
    cidade: '',
    data: '',
  });

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Gerador de Procuração Profissional
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Crie uma procuração específica para fins profissionais, como para advogados, contadores ou outros representantes. Preencha, visualize e gere o PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200">
            <FerramentaProcuracao data={data} setData={setData} />
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="sticky top-8">
            <div className="bg-white shadow-lg rounded-xl border border-gray-200 aspect-[1/1.414] p-8">
              <PreviewProcuracao data={data} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
          <SeoContentBlock 
            title="O que é uma Procuração Profissional?"
            content="A procuração profissional é um documento legal que autoriza uma pessoa ou empresa (Outorgado) a agir em nome de outra (Outorgante) em contextos específicos e profissionais, como representação jurídica, contábil ou administrativa."
          />
          <LegalDisclaimer />
      </div>
    </main>
  );
}