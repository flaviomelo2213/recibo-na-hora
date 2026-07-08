import type { Metadata } from 'next';
import React from 'react';
import FerramentaOrcamento from "./_components/FerramentaOrcamento";
import LegalDisclaimer from "../../components/LegalDisclaimer";
import SeoContentBlock from "../../components/SeoContentBlock";
import FaqAccordion from "../../components/FaqAccordion";
import Breadcrumb from "../../components/Breadcrumb";
import EditorialTrustBox from "../../components/EditorialTrustBox";
import RelatedDocuments from "../../components/RelatedDocuments";

const faqItems = [
  {
    question: "Um orçamento tem validade jurídica?",
    answer: "Por si só, o orçamento é uma proposta. Quando o cliente aceita formalmente (por escrito ou assinatura), ele passa a valer como um pré-acordo entre as partes. Para operações mais formais, o ideal é seguir com um contrato de prestação de serviços.",
  },
  {
    question: "Preciso colocar prazo de validade no orçamento?",
    answer: "Sim. Sem uma validade definida (ex.: \"válido por 15 dias\"), um cliente pode tentar aceitar a proposta meses depois, quando seus custos já mudaram.",
  },
  {
    question: "Orçamento substitui contrato ou nota fiscal?",
    answer: "Não. O orçamento é só a proposta de preço. O contrato formaliza as regras do serviço, e a nota fiscal só é emitida depois da prestação do serviço, quando exigida.",
  },
];

export const metadata: Metadata = {
  title: "Gerador de Orçamento Profissional Online Grátis | ReciboNaHora",
  description:
    "Crie orçamentos em PDF com layout profissional e cálculo automático. Ideal para prestadores de serviço, autônomos e MEI. Gratuito, sem cadastro.",
  keywords: ["gerador de orçamento", "orçamento profissional", "orçamento pdf", "modelo orçamento", "orçamento online grátis"],
  alternates: {
    canonical: "https://www.recibonahora.com.br/ferramentas/orcamento",
  },
  openGraph: {
    title: "Gerador de Orçamento Profissional Online Grátis | ReciboNaHora",
    description:
      "Crie orçamentos em PDF com layout profissional e cálculo automático. Ideal para prestadores de serviço, autônomos e MEI.",
    url: "https://www.recibonahora.com.br/ferramentas/orcamento",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function OrcamentoPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Início", href: "/" },
          { label: "Ferramentas", href: "/ferramentas" },
          { label: "Orçamento" },
        ]}
      />

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
          Gerador de Orçamento Profissional
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Crie orçamentos em PDF com cálculo automático e layout profissional. Ideal para prestadores de serviço e autônomos.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 mb-16 border border-stone-200">
        <FerramentaOrcamento />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 space-y-8">
          <SeoContentBlock
            title="A Importância de um Orçamento Formal"
            content="Um orçamento bem estruturado em PDF transmite profissionalismo e segurança ao cliente. Ele serve como um documento que formaliza a proposta, detalha os serviços e custos, e estabelece um prazo de validade, prevenindo conflitos e mal-entendidos."
          />

          <SeoContentBlock
            title="Como Valorizar seu Serviço no Orçamento"
            content="Seja específico nas descrições. Em vez de um genérico 'Manutenção de Computador', detalhe como 'Limpeza interna de componentes, troca da pasta térmica do processador e otimização do sistema operacional'. Isso agrega valor percebido e justifica seu preço."
          />

          <SeoContentBlock
            title="Quando Usar"
            content="Envie um orçamento sempre antes de iniciar um serviço ou venda, especialmente quando o valor final depende de variáveis (material, horas, complexidade). Ele evita divergências sobre preço e escopo antes do trabalho começar."
          />

          <SeoContentBlock
            title="Quando Não Usar"
            content={
              <>
                O orçamento não substitui um{' '}
                <a href="/contratos" className="text-indigo-600 font-semibold hover:underline">contrato</a>{' '}
                para serviços de maior prazo ou valor, nem a nota fiscal, que só deve ser emitida após a prestação do serviço, quando exigida.
              </>
            }
          />

          <SeoContentBlock
            title="Erros Comuns"
            content="Descrições vagas, ausência de prazo de validade, esquecer de detalhar a forma de pagamento e não revisar o texto antes de enviar são os deslizes mais frequentes — todos evitáveis com uma checagem rápida antes de enviar ao cliente."
          />

          <FaqAccordion items={faqItems} />

          <LegalDisclaimer />
          <RelatedDocuments />
          <EditorialTrustBox />
        </div>

        <aside className="space-y-6">
           <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
            <h4 className="font-bold text-stone-800 mb-4">Outras Ferramentas Úteis</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/ferramentas/recibo-simples" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Recibo Simples</a></li>
              <li><a href="/ferramentas/recibo-pix" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Recibo PIX</a></li>
              <li><a href="/ferramentas/vale-transporte" className="text-amber-700 hover:text-amber-800 hover:underline">› Calculadora de Vale-Transporte</a></li>
              <li><a href="/ferramentas/nota-promissoria" className="text-amber-700 hover:text-amber-800 hover:underline">› Gerador de Nota Promissória</a></li>
            </ul>
           </div>

           <div className="bg-stone-100 h-64 rounded-xl flex items-center justify-center text-stone-400 text-xs border border-stone-200">
             (Anúncio)
           </div>
        </aside>

      </div>
    </main>
  );
}
