import React from 'react';
import FerramentaReciboSimples from "./_components/FerramentaReciboSimples";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import SeoContentBlock from "../../components/SeoContentBlock";

export default function ReciboSimplesPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      
      {/* 1. HEADER DE IMPACTO */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
          Gerador de Recibo de Pagamento
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Crie recibos de pagamento em PDF, prontos para imprimir e com validade jurídica. Gratuito, rápido e sem necessidade de cadastro.
        </p>
      </div>

      {/* 2. ÁREA DA FERRAMENTA (DESTAQUE) */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 mb-16 border border-stone-200 max-w-4xl mx-auto">
        <FerramentaReciboSimples />
      </div>

      {/* 3. CONTEÚDO SEO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-stone-200 pt-12">
        
        {/* COLUNA ESQUERDA (SEO) */}
        <div className="lg:col-span-2 space-y-8">
          <SeoContentBlock 
            title="Qual a finalidade de um Recibo de Pagamento?"
            content="O Recibo Simples é um documento essencial para comprovar a quitação de uma dívida ou o pagamento por um serviço ou produto. Ele oferece segurança jurídica para ambas as partes, servindo como prova de que a transação financeira foi concluída com sucesso."
          />
          
          <SeoContentBlock 
            title="Recibo vs. Nota Fiscal: Entenda a Diferença"
            content="Enquanto o Recibo comprova um pagamento, a Nota Fiscal é um documento de natureza tributária, utilizado para o recolhimento de impostos. Para Microempreendedores Individuais (MEI) e outras empresas, a NF é obrigatória em transações com outras pessoas jurídicas, mas o recibo é perfeitamente válido para controle interno e transações com pessoas físicas."
          />

           <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
             <h4 className="font-bold text-amber-900 mb-2">Dica de Ouro</h4>
             <p className="text-sm text-amber-800">
               Para máxima segurança, emita sempre duas vias do recibo: uma para o pagador e outra, assinada por ele, para seu próprio controle.
             </p>
           </div>

          <LegalDisclaimer />
        </div>

        {/* COLUNA DIREITA (SIDEBAR) */}
        <aside className="space-y-6">
          {/* Navegação Cruzada */}
           <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-800 mb-4">Outras Ferramentas Úteis</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/ferramentas/orcamento" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Orçamento</a></li>
              <li><a href="/ferramentas/recibo-pix" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Recibo PIX</a></li>
              <li><a href="/ferramentas/vale-transporte" className="text-amber-700 hover:text-amber-800 hover:underline">› Calculadora de Vale-Transporte</a></li>
              <li><a href="/ferramentas/nota-promissoria" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Nota Promissória</a></li>
            </ul>
           </div>

          {/* Espaço Publicidade */}
          <div className="bg-stone-100 h-80 rounded-xl flex items-center justify-center border border-dashed border-stone-200 text-stone-400 text-sm">
            (Anúncio Vertical)
          </div>
        </aside>

      </div>
    </main>
  );
}
