
import { Metadata } from 'next';
import { ToolShell } from '../../components/layout/ToolShell';
import DeclaracaoEnderecoGenerator from './_components/DeclaracaoEnderecoGenerator';

const faqItems = [
    { question: "Para que serve uma Declaração de Residência?", answer: "Serve para comprovar seu endereço em situações onde não se possui um comprovante tradicional (conta de água, luz, etc.) em seu nome. É comum para quem mora com parentes."}, 
    { question: "Preciso de testemunhas?", answer: "Para maior validade, especialmente em processos mais rigorosos, é recomendável que a declaração seja assinada pelo declarante e, se possível, por duas testemunhas que não sejam parentes diretos."}, 
    { question: "Preciso reconhecer firma em cartório?", answer: "O reconhecimento de firma da sua assinatura (e das testemunhas, se houver) em cartório aumenta a força probatória do documento, sendo exigido por muitas instituições."}, 
    { question: "Posso usar este documento para abrir conta em banco?", answer: "Muitos bancos aceitam a declaração de residência com firma reconhecida como comprovante de endereço, mas é sempre bom verificar a política específica da agência."}, 
    { question: "Qual a diferença para um comprovante de residência normal?", answer: "Um comprovante normal (conta de consumo) é emitido por uma empresa e atesta um vínculo comercial. A declaração é um documento que você mesmo redige e assina, sob as penas da lei, atestando seu local de moradia."}, 
    { question: "O que significa assinar \"sob as penas da lei\"?", answer: "Significa que, se for provado que você mentiu na declaração, você pode ser processado por crime de falsidade ideológica, conforme o Art. 299 do Código Penal Brasileiro."} 
];

export const metadata: Metadata = {
  title: 'Gerador de Declaração de Residência - Modelo para Imprimir',
  description: 'Crie uma Declaração de Residência (ou Domicílio) para comprovar seu endereço. Gere o documento em PDF, pronto para assinar e reconhecer firma.',
};

export default function DeclaracaoEnderecoPage() {
  return (
    <>
      <ToolShell 
        title="Gerador de Declaração de Residência" 
        description="Elabore uma declaração simples para comprovar seu endereço para fins cadastrais, bancários ou outros. Preencha, gere o PDF e assine."
        faqItems={faqItems}
      >
        <DeclaracaoEnderecoGenerator />
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
