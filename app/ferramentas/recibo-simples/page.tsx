import React from 'react';
import FerramentaReciboSimples from "./_components/FerramentaReciboSimples";
import LegalDisclaimer from "@/components/LegalDisclaimer"; 
import SeoContentBlock from "@/components/SeoContentBlock"; 

export default function ReciboSimplesPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      
      {/* 1. HEADER DE IMPACTO */}
      <div className="text-center mb-10">
        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
          Mais Popular
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Recibo de Pagamento Online
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Gere recibos profissionais em PDF prontos para imprimir e assinar. 
          Sem cadastro, rápido e gratuito.
        </p>
      </div>

      {/* 2. ÁREA DA FERRAMENTA (DESTAQUE) */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 mb-16 border border-gray-100 max-w-4xl mx-auto relative overflow-hidden">
        {/* Efeito visual de fundo (Opcional) */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-50 rounded-full blur-2xl opacity-50"></div>
        
        <FerramentaReciboSimples />
      </div>

      {/* 3. CONTEÚDO SEO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
        
        {/* COLUNA ESQUERDA (SEO) */}
        <div className="lg:col-span-2 space-y-8">
          <SeoContentBlock 
            title="Para que serve este Recibo?"
            content="O Recibo Simples é o documento ideal para comprovar pagamentos de serviços autônomos, venda de produtos usados, aluguéis informais ou qualquer transação entre pessoas físicas. Ele serve como prova jurídica de que uma dívida foi quitada."
          />
          
          <SeoContentBlock 
            title="Diferença entre Recibo e Nota Fiscal"
            content="O Recibo apenas comprova o pagamento e a quitação de um valor. A Nota Fiscal é um documento tributário oficial que recolhe impostos. Para MEI e empresas, a Nota Fiscal é obrigatória em vendas para pessoas jurídicas, mas o Recibo é válido para controles internos e vendas para pessoa física."
          />

           <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
             <h4 className="font-bold text-blue-900 mb-2">Dica Profissional</h4>
             <p className="text-sm text-blue-800">
               Sempre imprima duas vias: uma fica com quem pagou (comprovante) e a outra assinada fica com quem recebeu (controle).
             </p>
           </div>

          <LegalDisclaimer />
        </div>

        {/* COLUNA DIREITA (SIDEBAR) */}
        <aside className="space-y-8">
          {/* Navegação Cruzada */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Outros Modelos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/ferramentas/nota-promissoria" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 group">
                  <span className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 text-blue-500">
                    <i className="fa-solid fa-file-contract"></i>
                  </span>
                  Nota Promissória
                </a>
              </li>
              <li>
                <a href="/ferramentas/imobiliario" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 group">
                  <span className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 text-blue-500">
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Recibo de Aluguel
                </a>
              </li>
              <li>
                <a href="/ferramentas/procuracao" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 group">
                  <span className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 text-blue-500">
                    <i className="fa-solid fa-stamp"></i>
                  </span>
                  Procuração
                </a>
              </li>
            </ul>
          </div>

          {/* Espaço Publicidade */}
          <div className="bg-gray-50 h-80 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200 text-gray-400 text-sm">
            Anúncio Google Ads (Vertical)
          </div>
        </aside>

      </div>
    </main>
  );
}
