import React from 'react';
import FerramentaOrcamento from "./_components/FerramentaOrcamento";
import LegalDisclaimer from "@/app/components/LegalDisclaimer";
import SeoContentBlock from "@/app/components/SeoContentBlock";

// Nota: Ajustei os imports acima para @/app/components/ pois você padronizou a pasta.

export default function OrcamentoPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Gerador de Orçamento PDF
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Crie orçamentos comerciais profissionais para seus clientes. 
          Cálculo automático e layout pronto para enviar no WhatsApp.
        </p>
      </div>

      {/* ÁREA DA FERRAMENTA */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-16 border border-gray-100">
        <FerramentaOrcamento />
      </div>

      {/* CONTEÚDO SEO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ESQUERDA: TEXTO */}
        <div className="lg:col-span-2 space-y-8">
          <SeoContentBlock 
            title="Por que formalizar um orçamento?"
            content="Enviar um orçamento em PDF passa muito mais credibilidade do que apenas digitar o preço no WhatsApp. Além disso, documenta o que está incluso e o prazo de validade da proposta, evitando mal-entendidos futuros."
          />
          
          <SeoContentBlock 
            title="Dicas para vender mais"
            content="Sempre descreva o serviço com detalhes. Em vez de 'Conserto', use 'Troca de peça X e limpeza interna'. Isso agrega valor e justifica o preço cobrado."
          />

          <LegalDisclaimer />
        </div>

        {/* DIREITA: SIDEBAR */}
        <aside className="space-y-6">
           <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-4">Veja Também</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/ferramentas/recibo-simples" className="hover:underline text-blue-700">Gerar Recibo Simples</a></li>
              <li><a href="/ferramentas/nota-promissoria" className="hover:underline text-blue-700">Nota Promissória</a></li>
              <li><a href="/ferramentas/procuracao" className="hover:underline text-blue-700">Modelo de Procuração</a></li>
            </ul>
           </div>
           
           {/* Espaço Publicidade */}
           <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 text-xs">
             Anúncio
           </div>
        </aside>

      </div>
    </main>
  );
}
