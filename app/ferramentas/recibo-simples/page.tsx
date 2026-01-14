'use client';

import React from 'react';
import type { Metadata } from 'next';

import ReciboSimplesGenerator from './_components/ReciboSimplesGenerator';
import FaqAccordion from '../../components/FaqAccordion';
import LegalDisclaimer from '../../components/LegalDisclaimer';
import {
  ToolShell,
  ToolShellMain,
  ToolShellHeader,
} from '../../components/layout/ToolShell';

const faqItems = [
  {
    question: "Qual a validade jurídica de um recibo simples?",
    answer:
      "Um recibo simples é um documento plenamente válido para comprovar pagamentos entre partes. Ele serve como prova de que um valor foi pago por um serviço ou produto, sendo essencial para a organização financeira e para evitar cobranças indevidas.",
  },
  {
    question: "O gerador de recibos é realmente gratuito?",
    answer:
      "Sim, nossa ferramenta para gerar recibos simples é gratuita e não possui limites de uso. Você pode criar, baixar e compartilhar quantos recibos precisar, sem custo.",
  },
  {
    question: "Os dados que eu preencho são salvos no site?",
    answer:
      "Não. A sua privacidade é prioridade. A ferramenta funciona inteiramente no seu navegador. Nenhuma informação digitada é enviada aos nossos servidores.",
  },
];

function jsonLdFAQ() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export default function ReciboSimplesPage() {
  const metadata: Metadata = {
    title: "Gerador de Recibo de Pagamento Simples Online | ReciboNaHora",
    description:
      "Crie, preencha e baixe um recibo de pagamento simples e válido em segundos. Ferramenta gratuita, segura e que funciona no seu navegador. Exporte em PDF.",
    alternates: { canonical: "/ferramentas/recibo-simples" },
  };

  void metadata; // evita warning de variável não usada (mantém como está)

  return (
    <ToolShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ()) }}
      />
      <ToolShellHeader
        title="Gerador de Recibo de Pagamento"
        description="Crie um recibo completo em segundos. Preencha, visualize e baixe o PDF."
      />
      <ToolShellMain>
        <ReciboSimplesGenerator />

        <section className="mt-16 mb-12 max-w-3xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            O que é um Recibo Simples e para que serve?
          </h2>

          <p>
            O <strong>recibo de pagamento simples</strong> é um documento que
            formaliza a quitação de uma dívida, seja ela referente a um produto
            ou serviço. Ele é a prova de que o valor combinado foi entregue ao
            credor, protegendo ambas as partes de futuras disputas.
          </p>

          <p>
            Este documento é essencial para autônomos, prestadores de serviço,
            pequenos negócios e qualquer pessoa que realize transações
            financeiras sem a emissão de uma nota fiscal. Ele garante a
            segurança e a organização das suas finanças.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            Informações Essenciais em um Recibo
          </h3>
          <p>Para que um recibo seja válido, ele deve conter:</p>
          <ul>
            <li>
              <strong>Nome e CPF/CNPJ do pagador:</strong> quem realizou o
              pagamento.
            </li>
            <li>
              <strong>Nome e CPF/CNPJ do beneficiário:</strong> quem recebeu o
              valor.
            </li>
            <li>
              <strong>Valor pago:</strong> por extenso e em numeral, para evitar
              dúvidas.
            </li>
            <li>
              <strong>Descrição:</strong> o motivo do pagamento (ex: "referente à
              criação de um site").
            </li>
            <li>
              <strong>Data e local:</strong> quando e onde o pagamento foi
              efetuado.
            </li>
            <li>
              <strong>Assinatura:</strong> do beneficiário, confirmando o
              recebimento.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
            Como preencher e usar o gerador
          </h2>

          <p>
            Nossa ferramenta foi criada para ser intuitiva. Siga os passos:
          </p>
          <ol>
            <li>
              <strong>Preencha os campos:</strong> Insira os dados do pagador,
              beneficiário, valor e a descrição do serviço ou produto.
            </li>
            <li>
              <strong>Visualize em tempo real:</strong> O recibo será gerado ao
              lado, permitindo que você veja como o documento final ficará.
            </li>
            <li>
              <strong>Baixe em PDF:</strong> Com tudo pronto, clique em "Gerar
              PDF" para baixar o arquivo. Ele estará pronto para ser impresso
              ou enviado digitalmente.
            </li>
          </ol>
        </section>

        <section className="mt-16 mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Perguntas Frequentes
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        <div className="mt-16 text-center">
          <LegalDisclaimer />
        </div>
      </ToolShellMain>
    </ToolShell>
  );
}