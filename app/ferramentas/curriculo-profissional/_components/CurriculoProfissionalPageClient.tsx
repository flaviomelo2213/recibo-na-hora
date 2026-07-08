'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import FerramentaCurriculoProfissional from './FerramentaCurriculoProfissional';
import PreviewCurriculoProfissional from './PreviewCurriculoProfissional';
import type { CurriculumData } from './types';
import { ToolTwoColumn } from '@/components/ToolTwoColumn';
import PreviewPaper from '@/components/PreviewPaper';
import FaqAccordion from '@/components/FaqAccordion';
import AdSlot from '@/components/ads/AdSlot';
import {
  ToolShell,
  ToolShellHeader,
  ToolShellMain,
} from '@/components/layout/ToolShell';

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

const faqItems = [
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

export default function CurriculoProfissionalPageClient() {
  const [data, setData] = useState<CurriculumData>(initialData);
  const faqLd = jsonLdFAQ();

  const form = <FerramentaCurriculoProfissional data={data} onDataChange={setData} />;
  const preview = <PreviewCurriculoProfissional data={data} />;

  return (
    <ToolShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ToolShellHeader
        title="Gerador de Currículo Profissional"
        description="Crie e baixe um currículo moderno com foto e assinatura, pronto para se destacar no mercado de trabalho."
      />
      <ToolShellMain>
        <ToolTwoColumn
          form={form}
          preview={
            <div id="preview-content">
              <PreviewPaper>{preview}</PreviewPaper>
            </div>
          }
        />

        <article className="prose prose-lg prose-slate mx-auto mt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Como Criar um Currículo Profissional de Sucesso
          </h2>
          <p>
            Seu currículo é a sua porta de entrada para o mercado de trabalho. É a
            primeira impressão que um recrutador terá de você. Por isso, ele
            precisa ser claro, conciso e, acima de tudo, profissional. Nossa
            ferramenta foi desenvolvida para ajudar você a criar um documento
            impactante, seguindo as melhores práticas do mercado.
          </p>

          <h3>A Estrutura de um Currículo Vencedor</h3>

          <h4>1. Dados Pessoais</h4>
          <p>
            Comece com o essencial: seu nome completo, cargo desejado, e-mail,
            telefone e cidade. Incluir um link para seu LinkedIn (se estiver
            atualizado) e portfólio online pode ser um grande diferencial.
          </p>

          <h4>2. Resumo Profissional</h4>
          <p>
            Em um parágrafo curto, destaque suas principais qualificações,
            experiências e objetivos de carreira. Pense nisso como o seu "elevator
            pitch": uma apresentação rápida e convincente de quem você é como
            profissional.
          </p>

          <h4>3. Experiência Profissional</h4>
          <p>
            Liste suas experiências em ordem cronológica inversa (da mais recente
            para a mais antiga). Para cada cargo, inclua o nome da empresa, o
            período em que trabalhou e suas principais responsabilidades e
            conquistas. Use verbos de ação e, sempre que possível, quantifique
            seus resultados (ex: "Aumentei as vendas em 20% em 6 meses").
          </p>

          <h4>4. Educação</h4>
          <p>
            Inclua sua formação acadêmica, também em ordem cronológica inversa.
            Mencione o nome da instituição, o curso e o ano de conclusão.
          </p>

          <h4>5. Habilidades e Idiomas</h4>
          <p>
            Liste as competências técnicas (softwares, linguagens de programação)
            e comportamentais (liderança, comunicação) que são relevantes para a
            vaga. Se você fala outros idiomas, indique o seu nível de fluência.
          </p>

          <div
            className="p-6 mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-lg"
            role="alert"
          >
            <h4 className="font-bold">Dica Importante: Otimização para ATS</h4>
            <p className="mt-2">
              Muitas empresas usam sistemas de triagem de currículos (ATS). Para
              passar por esses filtros, use um layout limpo, fontes legíveis e
              palavras-chave relevantes para a vaga. Nosso gerador cria um
              currículo com um design otimizado para esses sistemas.
            </p>
          </div>
        </article>

        <div className="max-w-3xl mx-auto">
          <AdSlot slot="0000000004" />
        </div>

        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Perguntas Frequentes sobre Currículos
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        <div className="text-center mt-8">
          <Link
            href="/parcerias"
            className="text-sm text-slate-600 hover:text-blue-700 hover:underline"
          >
            Buscando assinatura com validade jurídica? Veja nossos parceiros.
          </Link>
        </div>
      </ToolShellMain>
    </ToolShell>
  );
}
