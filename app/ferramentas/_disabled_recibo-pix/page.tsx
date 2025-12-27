
import React from 'react';
import FerramentaReciboPix from "./_components/FerramentaReciboPix";
import LegalDisclaimer from "../../components/LegalDisclaimer"; 
import FaqAccordion from "../../components/FaqAccordion";

const faqs = [
  {
    question: "Qual a validade jurídica de um Recibo PIX?",
    answer: "O Recibo PIX gerado por esta ferramenta é um documento robusto para comprovar uma transação. Ele tem validade jurídica como comprovante de pagamento para a maioria das situações cotidianas, como quitação de aluguéis, serviços autônomos e vendas informais. No entanto, ele não substitui uma Nota Fiscal em operações comerciais que exigem o recolhimento de impostos."
  },
  {
    question: "O QR Code gerado no recibo faz a transferência do dinheiro?",
    answer: "Não. O QR Code presente no recibo serve apenas para simples conferência e validação dos dados da transação (Chave PIX, valor, etc.). Ele não é um QR Code de pagamento. O comprovante oficial da transação é sempre aquele emitido pelo seu banco após a efetivação do PIX."
  },
  {
    question: "As informações que eu preencho são seguras?",
    answer: "Sim, 100% seguras. A ferramenta opera inteiramente no seu navegador (client-side), o que significa que nenhum dado informado por você (nomes, chaves PIX, valores) é enviado, registrado ou armazenado em nossos servidores. Sua privacidade é total."
  },
  {
    question: "Este site é uma ferramenta oficial do Banco Central?",
    answer: "Não. O ReciboNaHora.com.br é uma plataforma independente que oferece ferramentas gratuitas para facilitar a criação de documentos. Não temos qualquer vínculo com o Banco Central do Brasil ou com instituições bancárias. O PIX é um meio de pagamento do Banco Central, e nossa ferramenta apenas gera um recibo referente a transações feitas por esse meio."
  }
];

export default function ReciboPixPage() {
  return (
    <main className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
      
      {/* 1. HEADER */}
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
          Ferramenta Popular
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Gerador de Recibo PIX Online Grátis
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Crie um recibo de pagamento PIX com pré-visualização em tempo real. Preencha os dados e baixe o PDF pronto para enviar.
        </p>
      </div>

      {/* 2. ÁREA DA FERRAMENTA */}
      <div className="bg-white shadow-2xl shadow-slate-200/80 rounded-2xl p-6 md:p-10 mb-16 border border-slate-200 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60"></div>
        <FerramentaReciboPix />
      </div>

      {/* 3. CONTEÚDO FAQ + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-slate-200 pt-12">
        
        {/* COLUNA ESQUERDA (FAQ) */}
        <div className="lg:col-span-2">
          <FaqAccordion faqs={faqs} />
          <div className="mt-8 p-4 bg-white rounded-lg shadow-md border border-slate-200/80">
             <LegalDisclaimer />
          </div>
        </div>

        {/* COLUNA DIREITA (SIDEBAR) */}
        <aside className="space-y-8 lg:sticky lg:top-8 self-start">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">Outras Ferramentas Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/ferramentas/recibo-simples" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-invoice"></i>
                  </span>
                  Gerador de Recibo Simples
                </a>
              </li>
              <li>
                <a href="/ferramentas/orcamento" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-calculator"></i>
                  </span>
                  Gerador de Orçamento
                </a>
              </li>
               <li>
                <a href="/ferramentas/nota-promissoria" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-contract"></i>
                  </span>
                  Nota Promissória Online
                </a>
              </li>
            </ul>
          </div>

          {/* Espaço Publicidade */}
          <div className="bg-white h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 text-sm shadow-inner-sm">
            Anúncio Google Ads (Vertical)
          </div>
        </aside>

      </div>
      </div>
    </main>
  );
}
