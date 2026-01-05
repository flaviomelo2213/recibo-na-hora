
'use client';

import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

import ReciboSimplesGenerator from './_components/ReciboSimplesGenerator';
import { ToolTwoColumn } from '../../components/ToolTwoColumn';
import FaqAccordion from '../../components/FaqAccordion';
import LegalDisclaimer from '../../components/LegalDisclaimer';

const faqs = [
  { question: "Qual a validade jurídica de um recibo simples?", answer: "Um recibo simples é um documento plenamente válido para comprovar pagamentos entre partes. Ele serve como prova de que um valor foi pago por um serviço ou produto, sendo essencial para a organização financeira e para evitar cobranças indevidas." },
  { question: "O gerador de recibos é realmente gratuito?", answer: "Sim, nossa ferramenta para gerar recibios simples é 100% gratuita e não possui limites de uso. Você pode criar, baixar e compartilhar quantos recibos precisar, sem nenhum custo." },
  { question: "Os dados que eu preencho são salvos no site?", answer: "Não. A sua privacidade é nossa prioridade. A ferramenta funciona inteiramente no seu navegador. Nenhuma informação digitada é enviada aos nossos servidores."
  }
];

function jsonLdFAQ() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
    description: "Crie, preencha e baixe um recibo de pagamento simples e válido em segundos. Ferramenta gratuita, segura e que funciona no seu navegador. Exporte em PDF.",
    alternates: {
        canonical: "/ferramentas/recibo-simples",
    },
  };

  const generator = <ReciboSimplesGenerator />;

  return (
    <main className="w-full mx-auto py-12 px-4 md:px-6 lg:px-8">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ()) }}
        />
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Gerador de Recibo de Pagamento
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Crie um recibo completo em segundos. Preencha, visualize e baixe o PDF.
            </p>
        </div>

        <ToolTwoColumn
            form={generator}
            preview={generator} // O próprio gerador já tem o preview
        />

        <section className="mt-16 mb-12 max-w-3xl mx-auto">
          <FaqAccordion items={faqs} />
        </section>

        <div className="mt-16 text-center">
            <LegalDisclaimer />
        </div>
    </main>
  );
}
