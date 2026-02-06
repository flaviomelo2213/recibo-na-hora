'use client';

import { Metadata } from 'next';
import {
  ToolShell,
  ToolShellHeader,
  ToolShellMain,
} from '../../components/layout/ToolShell';
import ItbiModeloGenerator from './_components/ItbiModeloGenerator';
import FaqAccordion from '../../components/FaqAccordion';

const faqItems = [
  {
    question: 'O que é ITBI?',
    answer:
      'O Imposto sobre a Transmissão de Bens Imóveis (ITBI) é um tributo municipal pago na transferência de propriedade de um imóvel.',
  },
  {
    question: 'Quem tem direito à isenção ou redução do ITBI?',
    answer:
      'As regras variam por município, mas geralmente incluem compradores do primeiro imóvel financiado pelo SFH, imóveis de programas habitacionais ou valores abaixo de um certo teto.',
  },
  {
    question: 'Quais documentos preciso anexar?',
    answer:
      'Normalmente, são exigidos o contrato de compra e venda, documentos pessoais (RG/CPF), comprovante de residência e uma certidão negativa de propriedade de imóveis.',
  },
  {
    question: 'Onde devo protocolar este requerimento?',
    answer:
      'O requerimento deve ser protocolado na Secretaria de Finanças ou Fazenda do município onde o imóvel está localizado.',
  },
  {
    question: 'Este modelo garante a isenção?',
    answer:
      'Não. Este é um modelo de requerimento. A decisão final sobre a isenção ou redução do imposto cabe à prefeitura, após análise dos documentos e do cumprimento das regras locais.',
  },
  {
    question: 'O que é o SFH?',
    answer:
      'O Sistema Financeiro de Habitação (SFH) é um programa do governo federal que oferece financiamentos imobiliários com juros mais baixos e condições facilitadas, sendo uma das principais fontes para a compra do primeiro imóvel.',
  },
];

export default function ItbiModeloPage() {
  const metadata: Metadata = {
    title:
      'Modelo de Requerimento de Isenção/Redução de ITBI - Gerador Online',
    description:
      'Crie seu requerimento para solicitar isenção ou alíquota reduzida de ITBI na compra do seu imóvel. Modelo baseado nas regras do SFH. Baixe em PDF.',
  };

  void metadata;

  return (
    <>
      <ToolShell>
        <ToolShellHeader
          title="Gerador de Requerimento para Benefício no ITBI"
          description="Use este modelo para solicitar a isenção ou aplicação de alíquota reduzida do ITBI para a compra do primeiro imóvel, especialmente via SFH."
        />
        <ToolShellMain>
          <ItbiModeloGenerator />
          <section className="mt-16 mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Perguntas Frequentes sobre o ITBI
            </h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section className="mt-12 mb-12 max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Como Preencher seu Requerimento de ITBI: Guia Completo
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                O <strong>modelo gratuito de requerimento de ITBI</strong> disponibilizado pelo ReciboNaHora foi desenvolvido para simplificar o processo de solicitação de isenção ou redução do Imposto sobre Transmissão de Bens Imóveis. Este documento possui <strong>validade jurídica</strong> quando preenchido corretamente e acompanhado da documentação complementar exigida pela prefeitura de seu município.
              </p>
              <p>
                Para <strong>como preencher</strong> o requerimento adequadamente, é fundamental reunir informações precisas sobre o imóvel, incluindo o número da matrícula no Cartório de Registro de Imóveis, o valor de avaliação conforme a escritura ou contrato de compra e venda, além de seus dados pessoais completos. O formulário guiado orienta você em cada etapa, explicando por que cada informação é necessária e como ela será utilizada no processo administrativo.
              </p>
              <p>
                A <strong>validade jurídica do modelo</strong> está fundamentada na legislação municipal aplicável e nas normas do Sistema Financeiro da Habitação (SFH), quando pertinente. O documento segue as formalidades requeridas para petições administrativas, incluindo identificação completa do requerente, qualificação do imóvel, fundamentação legal e fecho apropriado. É importante ressaltar que a concessão da isenção ou redução depende da análise da prefeitura e do cumprimento dos requisitos legais específicos de cada município.
              </p>
              <p>
                Este <strong>modelo gratuito</strong> serve como ponto de partida para sua solicitação, economizando tempo e recursos ao oferecer uma estrutura profissional pronta para uso. Recomendamos sempre consultar a legislação local e, em casos complexos, buscar orientação de um profissional habilitado para garantir que todos os requisitos sejam atendidos. <a href="/blog/guia-lance-embutido" className="text-blue-900 hover:underline">Confira também nosso guia sobre estratégias financeiras</a> e explore outras <a href="/ferramentas" className="text-blue-900 hover:underline">ferramentas gratuitas</a> disponíveis no site.
              </p>
            </div>
          </section>
        </ToolShellMain>
      </ToolShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
