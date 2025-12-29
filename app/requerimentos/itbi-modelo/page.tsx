
import { Metadata } from 'next';
import { ToolShell } from '../../components/layout/ToolShell';
import ItbiModeloGenerator from './_components/ItbiModeloGenerator';

const faqItems = [
    { question: "O que é ITBI?", answer: "O Imposto sobre a Transmissão de Bens Imóveis (ITBI) é um tributo municipal pago na transferência de propriedade de um imóvel."}, 
    { question: "Quem tem direito à isenção ou redução do ITBI?", answer: "As regras variam por município, mas geralmente incluem compradores do primeiro imóvel financiado pelo SFH, imóveis de programas habitacionais ou valores abaixo de um certo teto."}, 
    { question: "Quais documentos preciso anexar?", answer: "Normalmente, são exigidos o contrato de compra e venda, documentos pessoais (RG/CPF), comprovante de residência e uma certidão negativa de propriedade de imóveis."}, 
    { question: "Onde devo protocolar este requerimento?", answer: "O requerimento deve ser protocolado na Secretaria de Finanças ou Fazenda do município onde o imóvel está localizado."}, 
    { question: "Este modelo garante a isenção?", answer: "Não. Este é um modelo de requerimento. A decisão final sobre a isenção ou redução do imposto cabe à prefeitura, após análise dos documentos e do cumprimento das regras locais."}, 
    { question: "O que é o SFH?", answer: "O Sistema Financeiro de Habitação (SFH) é um programa do governo federal que oferece financiamentos imobiliários com juros mais baixos e condições facilitadas, sendo uma das principais fontes para a compra do primeiro imóvel."} 
];

export const metadata: Metadata = {
  title: 'Modelo de Requerimento de Isenção/Redução de ITBI - Gerador Online',
  description: 'Crie seu requerimento para solicitar isenção ou alíquota reduzida de ITBI na compra do seu imóvel. Modelo baseado nas regras do SFH. Baixe em PDF.',
};

export default function ItbiModeloPage() {
  return (
    <>
      <ToolShell 
        title="Gerador de Requerimento para Benefício no ITBI" 
        description="Use este modelo para solicitar a isenção ou aplicação de alíquota reduzida do ITBI para a compra do primeiro imóvel, especialmente via SFH."
        faqItems={faqItems}
      >
        <ItbiModeloGenerator />
      </ToolShell>
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
