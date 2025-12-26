import React from 'react';
import FerramentaOrcamento from "./_components/FerramentaOrcamento";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import SeoContentBlock from "../../components/SeoContentBlock";

export default function OrcamentoPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
          Gerador de Orçamento Profissional
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Crie orçamentos em PDF com cálculo automático e layout profissional. Ideal para prestadores de serviço e autônomos.
        </p>
      </div>

      {/* ÁREA DA FERRAMENTA */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-16 border border-stone-200">
        <FerramentaOrcamento />
      </div>

      {/* CONTEÚDO SEO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ESQUERDA: TEXTO */}
        <div className="lg:col-span-2 space-y-8">
          <SeoContentBlock 
            title="A Importância de um Orçamento Formal"
            content="Um orçamento bem estruturado em PDF transmite profissionalismo e segurança ao cliente. Ele serve como um documento que formaliza a proposta, detalha os serviços e custos, e estabelece um prazo de validade, prevenindo conflitos e mal-entendidos."
          />
          
          <SeoContentBlock 
            title="Como Valorizar seu Serviço no Orçamento"
            content="Seja específico nas descrições. Em vez de um genérico 'Manutenção de Computador', detalhe como 'Limpeza interna de componentes, troca da pasta térmica do processador e otimização do sistema operacional'. Isso agrega valor percebido e justifica seu preço."
          />

          <LegalDisclaimer />
        </div>

        {/* DIREITA: SIDEBAR */}
        <aside className="space-y-6">
           <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-800 mb-4">Outras Ferramentas Úteis</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/ferramentas/recibo-simples" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Recibo Simples</a></li>
              <li><a href="/ferramentas/recibo-pix" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Recibo PIX</a></li>
              <li><a href="/ferramentas/vale-transporte" className="text-amber-700 hover:text-amber-800 hover:underline">› Calculadora de Vale-Transporte</a></li>
              <li><a href="/ferramentas/nota-promissoria" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Nota Promissória</a></li>
            </ul>
           </div>
           
           {/* Espaço Publicidade */}
           <div className="bg-stone-100 h-64 rounded-xl flex items-center justify-center text-stone-400 text-xs border border-stone-200">
             (Anúncio)
           </div>
        </aside>

      </div>
    </main>
  );
}
