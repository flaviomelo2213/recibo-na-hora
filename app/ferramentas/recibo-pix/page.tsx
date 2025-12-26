import React from 'react';
import FerramentaReciboPix from "./_components/FerramentaPix";
import LegalDisclaimer from "../../components/LegalDisclaimer"; 
import SeoContentBlock from "../../components/SeoContentBlock"; 

export default function ReciboPixPage() {
  return (
    <main className="bg-stone-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
      
      {/* 1. HEADER DE IMPACTO */}
      <div className="text-center mb-12">
        <span className="bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
          Ferramenta Mais Usada
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
          Gerador de Recibo PIX Online Grátis
        </h1>
        <p className="text-lg text-stone-600 max-w-3xl mx-auto">
          Crie e baixe um recibo de pagamento PIX em PDF, com QR Code, de forma online e gratuita. Modelo pronto para preencher, imprimir e assinar.
        </p>
      </div>

      {/* 2. ÁREA DA FERRAMENTA (DESTAQUE) */}
      <div className="bg-white shadow-2xl shadow-stone-200/80 rounded-2xl p-6 md:p-10 mb-16 border border-stone-200 max-w-6xl mx-auto relative overflow-hidden">
        {/* Efeito visual de fundo (Opcional) */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-amber-50 rounded-full blur-2xl opacity-60"></div>
        
        <FerramentaReciboPix />
      </div>

      {/* 3. CONTEÚDO SEO + SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-stone-200 pt-12">
        
        {/* COLUNA ESQUERDA (SEO) */}
        <div className="lg:col-span-2 space-y-10">
          <SeoContentBlock 
            title="O que é um Recibo PIX e qual sua validade?"
            content="O Recibo PIX é um documento que comprova a efetivação de uma transação financeira realizada através do sistema de pagamentos instantâneos do Banco Central. Ele serve como prova formal de que uma quantia foi transferida de um pagador para um beneficiário, quitando uma dívida ou obrigação. Embora não substitua uma Nota Fiscal em operações comerciais que exigem tributação, o recibo PIX possui plena validade jurídica para a maioria das transações do dia a dia, como pagamento de serviços autônomos, aluguéis informais, vendas particulares e outras negociações entre pessoas físicas ou jurídicas."
          />
          
          <SeoContentBlock 
            title="Como Preencher e Gerar seu Recibo PIX"
            content="Para emitir seu documento, preencha os campos do formulário acima. As informações serão atualizadas em tempo real no preview ao lado. 1) Informe a Chave PIX do recebedor (CPF, CNPJ, celular ou e-mail). 2) Digite o nome completo ou a razão social do beneficiário. 3) Insira o valor exato da transação, usando vírgula para centavos. 4) Preencha a cidade de emissão do recibo. 5) Adicione uma breve descrição, como 'Referente ao serviço de consultoria'. Após preencher, um QR Code será gerado e você poderá baixar o PDF, que já inclui a imagem para comprovação."
          />

           <div className="bg-amber-50/80 p-6 rounded-lg border-l-4 border-amber-500">
             <h4 className="font-bold text-amber-900 mb-2">Segurança Client-Side é Prioridade</h4>
             <p className="text-sm text-amber-800">
              Este gerador de recibos funciona 100% no seu navegador. Nenhuma informação preenchida nos campos é enviada, salva ou armazenada em nossos servidores. Sua privacidade é total.
             </p>
           </div>

          <LegalDisclaimer />
        </div>

        {/* COLUNA DIREITA (SIDEBAR) */}
        <aside className="space-y-8 lg:sticky lg:top-8 self-start">
          {/* Navegação Cruzada */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
            <h4 className="font-bold text-stone-800 mb-4 border-b border-stone-200 pb-3">Ecossistema de Ferramentas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/ferramentas/recibo-simples" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-invoice"></i>
                  </span>
                  Gerador de Recibo Simples
                </a>
              </li>
              <li>
                <a href="/ferramentas/orcamento" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-calculator"></i>
                  </span>
                  Gerador de Orçamento
                </a>
              </li>
               <li>
                <a href="/ferramentas/nota-promissoria" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 group">
                  <span className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 text-amber-600/80 group-hover:text-amber-700 transition-all">
                    <i className="fa-solid fa-file-contract"></i>
                  </span>
                  Nota Promissória Online
                </a>
              </li>
            </ul>
          </div>

          {/* Espaço Publicidade */}
          <div className="bg-white h-96 rounded-xl flex items-center justify-center border-2 border-dashed border-stone-200 text-stone-400 text-sm shadow-inner-sm">
            Anúncio Google Ads (Vertical)
          </div>
        </aside>

      </div>
      </div>
    </main>
  );
}
