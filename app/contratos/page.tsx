import type { Metadata } from 'next';
import ContratosClient from './_components/ContratosClient';
import { buildOpenGraph } from '@/lib/metadata';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O contrato gerado online tem validade juridica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, desde que assinado pelas partes (e testemunhas, se aplicavel), o contrato tem validade juridica para a maioria dos atos da vida civil. Para alguns casos especificos, a lei exige reconhecimento de firma ou registro em cartorio."
      }
    },
    {
      "@type": "Question",
      "name": "Preciso de testemunhas no contrato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A presenca de duas testemunhas que assinam o contrato junto com as partes confere a ele forca de titulo executivo extrajudicial. Isso significa que, em caso de descumprimento, o processo de cobranca na justica e muito mais rapido."
      }
    },
    {
      "@type": "Question",
      "name": "O que e um titulo executivo extrajudicial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "E um documento que a lei reconhece como prova de uma divida, permitindo que o credor inicie um processo de execucao (cobranca forcada) sem a necessidade de um longo processo de conhecimento para provar que a divida existe."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usar o gerador para qualquer tipo de contrato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nossas ferramentas sao focadas em contratos de menor complexidade, como prestacao de servicos, aluguel e outros. Para operacoes complexas, como compra e venda de imoveis de alto valor ou questoes societarias, e indispensavel a consulta a um advogado."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre assinatura digital e eletronica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A assinatura eletronica e um genero amplo que inclui senhas, biometria e aceite de termos online. A assinatura digital e uma especie mais segura, que utiliza um certificado digital (como o e-CPF) para garantir a autenticidade e integridade do documento."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se uma das partes nao cumprir o contrato?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A parte prejudicada pode notificar a outra para que cumpra sua obrigacao. Se nao houver acordo, pode-se recorrer ao Poder Judiciario para exigir o cumprimento forcado, o pagamento de multas ou uma indenizacao por perdas e danos."
      }
    },
    {
      "@type": "Question",
      "name": "E seguro colocar meus dados no gerador de contratos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Seguimos as melhores praticas de seguranca e privacidade. Seus dados sao utilizados apenas para a geracao do documento e nao sao compartilhados. Consulte nossa Politica de Privacidade para mais detalhes."
      }
    },
    {
      "@type": "Question",
      "name": "Contrato precisa ser registrado em cartorio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na maioria dos casos, nao. O registro em Cartorio de Titulos e Documentos e necessario principalmente para que o contrato tenha validade perante terceiros (publicidade), nao para ter validade entre as partes que o assinaram."
      }
    }
  ]
};

const title = 'Modelos de Contratos Editáveis Grátis | PDF com Validade Jurídica — ReciboNaHora';
const description =
  'Gere contratos de aluguel, prestão de serviços, procuração e compra e venda online. Modelos editáveis e gratuitos com validade jurídica. Para MEI, autônomos e pequenos negócios.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/contratos',
  },
  openGraph: buildOpenGraph({ title, description, path: '/contratos' }),
};

export default function ContratosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContratosClient />
    </>
  );
}
