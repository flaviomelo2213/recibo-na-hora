'use client';
import { Metadata } from 'next';
import {
  ToolShell,
  ToolShellHeader,
  ToolShellMain,
} from '../../components/layout/ToolShell';
import LaiPedidoGenerator from './_components/LaiPedidoGenerator';
import FaqAccordion from '../../components/FaqAccordion';

const faqItems = [
  {
    question: 'Qualquer pessoa pode fazer um pedido via LAI?',
    answer:
      'Sim, qualquer pessoa, física ou jurídica, pode apresentar um pedido de acesso à informação. Não é necessário apresentar justificativa para a solicitação.',
  },
  {
    question: 'O órgão público pode se recusar a fornecer a informação?',
    answer:
      'A recusa só é permitida em casos específicos, como informações pessoais, sigilosas (segurança do Estado) ou em processo decisório. A recusa deve ser sempre justificada por escrito.',
  },
  {
    question: 'Existe prazo para o órgão responder?',
    answer:
      'Sim. O órgão deve fornecer a informação imediatamente, se possível. Se não for, tem o prazo de 20 dias para responder, prorrogável por mais 10 dias com justificativa.',
  },
  {
    question: 'Preciso pagar para obter as informações?',
    answer:
      'Não, o serviço de busca e fornecimento da informação é gratuito. Apenas os custos de reprodução (cópias, digitalização) podem ser cobrados.',
  },
  {
    question: 'O que fazer se meu pedido for negado ou não respondido?',
    answer:
      'Você pode apresentar um recurso à autoridade hierarquicamente superior à que emitiu a decisão, no prazo de 10 dias. Se persistir a negativa, pode-se recorrer a instâncias superiores como a Controladoria-Geral da União (CGU).',
  },
  {
    question: 'Onde posso encontrar os canais para enviar meu pedido?',
    answer:
      'O governo federal mantém o portal Fala.BR. Estados e municípios geralmente têm seus próprios sistemas ou um Serviço de Informação ao Cidadão (SIC) físico. Consulte o site oficial do órgão que você deseja contatar.',
  },
];

export default function LaiPedidoPage() {
  const metadata: Metadata = {
    title: 'Gerador de Pedido de Acesso à Informação (LAI) - Modelo Gratuito',
    description:
      'Crie um requerimento formal com base na Lei de Acesso à Informação (LAI) para solicitar dados a órgãos públicos. Baixe em PDF e protocole.',
    openGraph: {
      title: 'Gerador de Pedido de Acesso à Informação (LAI) - Modelo Gratuito',
      description:
        'Crie um requerimento formal com base na Lei de Acesso à Informação (LAI) para solicitar dados a órgãos públicos. Baixe em PDF e protocole.',
    },
  };

  void metadata;

  return (
    <>
      <ToolShell>
        <ToolShellHeader
          title="Gerador de Pedido via Lei de Acesso à Informação (LAI)"
          description="Utilize este modelo para elaborar um pedido formal de informações a qualquer órgão público federal, estadual ou municipal."
          referenceLink={{
            href: 'https://www.gov.br/acessoainformacao/pt-br/lai-para-cidadaos',
            text: 'Saiba mais sobre a LAI no portal do Governo Federal',
          }}
        />
        <ToolShellMain>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <LaiPedidoGenerator />
          </div>
          <section className="mt-16 mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Perguntas Frequentes sobre a Lei de Acesso à Informação
            </h2>
            <FaqAccordion items={faqItems} />
          </section>

          <section className="mt-12 mb-12 max-w-4xl mx-auto bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Como Preencher seu Pedido LAI: Guia Completo sobre a Lei de Acesso à Informação
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                O <strong>modelo gratuito de pedido LAI</strong> oferecido pelo ReciboNaHora facilita o exercício do seu direito constitucional de acesso à informação pública. Este requerimento possui <strong>validade jurídica</strong> plena quando preenchido corretamente, fundamentado na Lei nº 12.527/2011 (Lei de Acesso à Informação), que garante a qualquer cidadão o direito de obter informações de órgãos públicos sem necessidade de justificativa.
              </p>
              <p>
                Para <strong>como preencher</strong> o pedido adequadamente, é essencial ser específico e objetivo na descrição da informação solicitada. Evite pedidos genéricos como "tudo sobre o assunto X" e prefira detalhamentos claros, como "contratos firmados entre o órgão Y e a empresa Z no período de janeiro a dezembro de 2025". O formulário guiado orienta você a identificar corretamente o órgão destinatário, qualificar-se como requerente e especificar a forma preferencial de recebimento da informação (digital ou física).
              </p>
              <p>
                A <strong>validade jurídica do modelo</strong> está assegurada pelo cumprimento das formalidades previstas na legislação: identificação do requerente (nome completo e documento), endereço para correspondência, especificação da informação requerida e indicação da forma de acesso preferida. O órgão público tem o prazo legal de 20 dias (prorrogáveis por mais 10 dias) para responder, e eventual negativa deve ser sempre fundamentada por escrito, cabendo recursos em caso de recusa indevida.
              </p>
              <p>
                Este <strong>modelo gratuito</strong> democratiza o acesso à administração pública, permitindo que qualquer pessoa exerça seu direito de transparência sem custos ou burocracia excessiva. O pedido via LAI é gratuito, e apenas custos de reprodução (cópias, digitalização) podem ser cobrados. Para mais informações sobre documentos e ferramentas jurídicas, explore nosso <a href="/requerimentos/itbi-modelo" className="text-blue-900 hover:underline">modelo de ITBI</a> e outras <a href="/ferramentas" className="text-blue-900 hover:underline">ferramentas gratuitas</a> no site.
              </p>
            </div>
          </section>
        </ToolShellMain>
      </ToolShell>

      {/* Estrutura de dados para o Google entender a página de FAQ */}
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
