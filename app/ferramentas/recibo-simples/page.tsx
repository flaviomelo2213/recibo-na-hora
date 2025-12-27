"use client";

import React from 'react';
import FerramentaReciboSimples from "./_components/FerramentaReciboSimples";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import FaqAccordion from "../../components/FaqAccordion";

// Conteúdo para o FAQ
const faqs = [
  {
    question: "Qual a validade jurídica de um recibo simples?",
    answer: "Um recibo simples é um documento plenamente válido para comprovar pagamentos e quitações de dívidas entre pessoas físicas, profissionais autônomos e empresas. Ele serve como prova de que um valor foi pago por um serviço ou produto, sendo essencial para a organização financeira e para evitar cobranças indevidas. Para maior segurança, ele deve ser preenchido corretamente e, se possível, assinado por quem recebeu o valor."
  },
  {
    question: "O gerador de recibos é realmente gratuito?",
    answer: "Sim, nossa ferramenta para gerar recibos simples é 100% gratuita e não possui limites de uso. Você pode criar, baixar e imprimir quantos recibos precisar, sem nenhum custo ou necessidade de cadastro."
  },
  {
    question: "Preciso preencher todos os campos?",
    answer: "Recomendamos fortemente que todos os campos sejam preenchidos para garantir a clareza e a validade do documento. Informações como CPF/CNPJ do pagador e do beneficiário, a descrição clara do que está sendo pago e a cidade de emissão são cruciais para a formalidade do recibo."
  },
  {
    question: "Os dados que eu preencho são salvos no site?",
    answer: "Não. A sua privacidade é nossa prioridade. A ferramenta funciona inteiramente no seu navegador (client-side). Nenhuma informação digitada nos campos do recibo é enviada, armazenada ou compartilhada por nossos servidores. Ao fechar a página, todos os dados são perdidos."
  }
];

export default function ReciboSimplesPage() {
  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
            Gerador de Recibo de Pagamento Simples
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crie um recibo completo em segundos. Preencha os campos, visualize em tempo real e baixe o PDF pronto para imprimir ou enviar.
          </p>
        </div>

        {/* Área da Ferramenta */}
        <div className="bg-white shadow-2xl shadow-gray-200/70 rounded-2xl border border-gray-200/80">
          <FerramentaReciboSimples />
        </div>

        {/* Seção de Perguntas Frequentes (FAQ) */}
        <FaqAccordion faqs={faqs} />

        {/* Rodapé com aviso legal */}
        <div className="mt-16 text-center">
            <LegalDisclaimer />
        </div>

      </div>
    </main>
  );
}
