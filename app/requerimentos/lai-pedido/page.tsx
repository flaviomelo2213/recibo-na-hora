
import { Metadata } from 'next';
import { ToolShell } from '../../components/layout/ToolShell';
import LaiPedidoGenerator from './_components/LaiPedidoGenerator';

const faqItems = [
    {
        question: "Qualquer pessoa pode fazer um pedido via LAI?",
        answer: "Sim, qualquer pessoa, física ou jurídica, pode apresentar um pedido de acesso à informação. Não é necessário apresentar justificativa para a solicitação."
    },
    {
        question: "O órgão público pode se recusar a fornecer a informação?",
        answer: "A recusa só é permitida em casos específicos, como informações pessoais, sigilosas (segurança do Estado) ou em processo decisório. A recusa deve ser sempre justificada por escrito."
    },
    {
        question: "Existe prazo para o órgão responder?",
        answer: "Sim. O órgão deve fornecer a informação imediatamente, se possível. Se não for, tem o prazo de 20 dias para responder, prorrogável por mais 10 dias com justificativa."
    },
    {
        question: "Preciso pagar para obter as informações?",
        answer: "Não, o serviço de busca e fornecimento da informação é gratuito. Apenas os custos de reprodução (cópias, digitalização) podem ser cobrados."
    },
    {
        question: "O que fazer se meu pedido for negado ou não respondido?",
        answer: "Você pode apresentar um recurso à autoridade hierarquicamente superior à que emitiu a decisão, no prazo de 10 dias. Se persistir a negativa, pode-se recorrer a instâncias superiores como a Controladoria-Geral da União (CGU)."
    },
    {
        question: "Onde posso encontrar os canais para enviar meu pedido?",
        answer: "O governo federal mantém o portal Fala.BR. Estados e municípios geralmente têm seus próprios sistemas ou um Serviço de Informação ao Cidadão (SIC) físico. Consulte o site oficial do órgão que você deseja contatar."
    }
];

export const metadata: Metadata = {
  title: 'Gerador de Pedido de Acesso à Informação (LAI) - Modelo Gratuito',
  description: 'Crie um requerimento formal com base na Lei de Acesso à Informação (LAI) para solicitar dados a órgãos públicos. Baixe em PDF e protocole.',
  openGraph: {
    title: 'Gerador de Pedido de Acesso à Informação (LAI) - Modelo Gratuito',
    description: 'Crie um requerimento formal com base na Lei de Acesso à Informação (LAI) para solicitar dados a órgãos públicos. Baixe em PDF e protocole.',
  }
};

export default function LaiPedidoPage() {
  return (
    <>
      <ToolShell 
        title="Gerador de Pedido via Lei de Acesso à Informação (LAI)" 
        description="Utilize este modelo para elaborar um pedido formal de informações a qualquer órgão público federal, estadual ou municipal."
        faqItems={faqItems}
        referenceLink={{ href: "https://www.gov.br/acessoainformacao/pt-br/lai-para-cidadaos", text: "Saiba mais sobre a LAI no portal do Governo Federal" }}
        // O preview não é mais necessário aqui, pois foi integrado ao componente
      >
        <LaiPedidoGenerator />
      </ToolShell>

      {/* Estrutura de dados para o Google entender a página de FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}}
      />
    </>
  );
}
