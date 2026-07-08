import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/metadata';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O corretor de imóveis precisa emitir nota fiscal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende do município e do regime tributário. Corretores autônomos (pessoa física) geralmente emitem recibo de pagamento de autônomo (RPA). Corretores com CNPJ (PJ ou MEI, se enquadrado) emitem nota fiscal de serviços (ISS). Verifique a legislação local."
      }
    },
    {
      "@type": "Question",
      "name": "Qual contrato usar para intermediação imobiliária?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use um contrato de prestação de serviços de corretagem, formalizando valor da comissão, prazo de exclusividade, obrigações das partes e condições de rescisão. Para locação, o contrato deve seguir a Lei 8.245/91 (Lei do Inquílinato)."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona a comissão do corretor de imóveis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tabela do CRECI orienta de 6% a 8% do valor do imóvel para venda e de 10% a 12% do valor total anual para locação. O percentual exato é negociado entre as partes e deve constar em contrato de exclusividade assinado."
      }
    },
    {
      "@type": "Question",
      "name": "Corretor autônomo pode usar recibo no lugar de nota fiscal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Corretores registrados como pessoa física (autônomo) podem emitir Recibo de Pagamento de Autônomo (RPA). O tomador do serviço retém ISS, INSS e IR na fonte conforme tabelas vigentes."
      }
    }
  ]
};
import ApoioCorretorClient from './_components/ApoioCorretorClient';

const title = 'Apoio ao Corretor de Imóveis | Ferramentas e Guias Gratuitos — ReciboNaHora';
const description =
  'Hub gratuito para corretores de imóveis: contratos, recibos, simulador de consórcio, documentação necessária e critérios de aprovação de crédito.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/apoio-corretor',
  },
  openGraph: buildOpenGraph({ title, description, path: '/apoio-corretor' }),
};

export default function ApoioCorretorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ApoioCorretorClient />
    </>
  );
}
