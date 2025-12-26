import React from 'react';
import FerramentaProcuracao from "./_components/FerramentaProcuracao";
import LegalDisclaimer from "../../components/LegalDisclaimer"; // Seu aviso legal criado anteriormente
import SeoContentBlock from "../../components/SeoContentBlock"; // O componente criado no Passo 1

export default function ProcuracaoPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      
      {/* CABEÇALHO PRINCIPAL */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Gerador de Procuração Simples
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Crie uma procuração profissional para imprimir em instantes. 
          Ideal para representar alguém em bancos, DETRAN, escolas ou situações particulares.
        </p>
      </div>

      {/* ÁREA DA FERRAMENTA (PRINCIPAL) */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-12 border border-gray-100 ring-1 ring-gray-100">
        <FerramentaProcuracao />
      </div>

      {/* GRID DE CONTEÚDO + BARRA LATERAL (ESTRATÉGIA DO CONCORRENTE) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* COLUNA ESQUERDA: TEXTO SEO (2/3 da tela) */}
        <div className="lg:col-span-2">
          <SeoContentBlock 
            title="O que é uma Procuração?"
            content="A procuração é um documento legal onde uma pessoa (Outorgante) transfere poderes para outra (Outorgado/Procurador) agir em seu nome. Ela é essencial quando você não pode comparecer presencialmente para assinar documentos ou resolver pendências."
          />
          
          <SeoContentBlock 
            title="Cuidados ao preencher"
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li>Verifique se os números de CPF e RG estão corretos.</li>
                <li>Descreva a <strong>Finalidade</strong> de forma específica (Ex: 'Vender o veículo X' é melhor que 'Vender meus bens').</li>
                <li>Para validade jurídica completa, recomenda-se reconhecer firma em cartório.</li>
              </ul>
            }
          />

          {/* AVISO LEGAL (Proteção Jurídica) */}
          <LegalDisclaimer />
        </div>

        {/* COLUNA DIREITA: SIDEBAR / ADS / VEJA TAMBÉM */}
        <aside className="space-y-8">
          
          {/* Box de Publicidade Simulada */}
          <div className="bg-gray-100 rounded-lg h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
            <span className="text-gray-400 font-medium">Espaço para Anúncio</span>
            <span className="text-xs text-gray-400 mt-2">(Google AdSense)</span>
          </div>

          {/* Navegação Cruzada (Retenção de Usuário) */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <i className="fa-solid fa-file-lines"></i> Outros Documentos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/ferramentas/nota-promissoria" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                  <span>Nota Promissória</span>
                  <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                </a>
              </li>
              <li>
                <a href="/ferramentas/imobiliario" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                  <span>Recibo de Aluguel</span>
                  <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                </a>
              </li>
              <li>
                <a href="/ferramentas/calculadora-rescisao" className="text-blue-700 hover:text-blue-900 hover:underline flex justify-between">
                  <span>Cálculo de Rescisão</span>
                  <i className="fa-solid fa-chevron-right text-xs mt-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </main>
  );
}
