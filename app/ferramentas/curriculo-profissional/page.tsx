
'use client';

import React, { useState } from 'react';
import type { Metadata } from "next";
import Link from 'next/link';

import FerramentaCurriculoProfissional from './_components/FerramentaCurriculoProfissional';
import PreviewCurriculoProfissional from './_components/PreviewCurriculoProfissional';
import type { CurriculumData } from './_components/types';
import { ToolTwoColumn } from '@/components/ToolTwoColumn';
import PreviewPaper from '@/components/PreviewPaper';
import FaqAccordion from '@/components/FaqAccordion';

const initialData: CurriculumData = {
  dadosPessoais: {
    nome: '',
    cargo: '',
    email: '',
    telefone: '',
    cidade: '',
    linkedin: '',
    portfolio: '',
  },
  resumo: '',
  experiencia: [],
  educacao: [],
  habilidades: '',
  idiomas: '',
  fotoDataUrl: undefined,
  assinaturaDataUrl: undefined,
};

const faqs = [
    { question: "O gerador de currículo é gratuito?", answer: "Sim, nossa ferramenta para criar currículo é totalmente gratuita. Você pode preencher seus dados, adicionar foto, desenhar sua assinatura e baixar o PDF sem custos." },
    { question: "Meus dados ficam salvos no site?", answer: "Não. Sua privacidade é nossa prioridade. Todos os dados, incluindo sua foto e assinatura, são processados localmente no seu navegador e não são enviados para nossos servidores." },
    { question: "Posso usar esse currículo em processos seletivos?", answer: "Sim. O modelo foi desenhado para ser moderno, profissional e de fácil leitura, inclusive por sistemas de triagem automática (ATS), aumentando suas chances de ser notado." },
    { question: "A assinatura digital tem validade jurídica?", answer: "A assinatura desenhada ou inserida como imagem serve como uma representação visual. Para validade jurídica certificada, recomendamos o uso de plataformas especializadas em assinatura digital, como as que indicamos em nossa página de <a href='/parcerias' class='text-amber-700 hover:underline'>parcerias</a>." },
    { question: "Como posso tirar a melhor foto para o currículo?", answer: "Escolha um fundo neutro, vista-se de forma profissional, olhe diretamente para a câmera e garanta uma boa iluminação. Uma foto de rosto e ombros (headshot) é o ideal." },
    { question: "Preciso preencher todos os campos?", answer: "Não, apenas os campos que forem relevantes para sua carreira e para a vaga que você está buscando. O currículo será gerado apenas com as informações que você fornecer." },
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

export default function Page() {
  const [data, setData] = useState<CurriculumData>(initialData);
  const faqLd = jsonLdFAQ();

  const metadata: Metadata = {
    title: "Gerador de Currículo Profissional com Foto | ReciboNaHora",
    description: "Crie um currículo profissional moderno com foto e assinatura em minutos. Exporte em PDF, com foco em privacidade e design otimizado para ATS. Ferramenta gratuita.",
    alternates: {
        canonical: "/ferramentas/curriculo-profissional",
    },
  };

  const form = <FerramentaCurriculoProfissional data={data} onDataChange={setData} />;
  const preview = <PreviewCurriculoProfissional data={data} />;

  return (
    <main className="w-full mx-auto py-12 px-4 md:px-6 lg:px-8">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Gerador de Currículo Profissional
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Crie e baixe um currículo moderno com foto e assinatura, pronto para se destacar.
            </p>
        </div>

        <ToolTwoColumn
            form={form}
            preview={
                <div id="preview-content">
                    <PreviewPaper>
                        {preview}
                    </PreviewPaper>
                </div>
            }
        />

        <div className="text-center mt-8">
            <Link href="/parcerias" className="text-sm text-slate-600 hover:text-blue-700 hover:underline">
                Buscando assinatura com validade jurídica? Veja nossos parceiros.
            </Link>
        </div>

        <section className="mt-16 mb-12 max-w-3xl mx-auto">
          <FaqAccordion items={faqs} />
        </section>
    </main>
  );
}
