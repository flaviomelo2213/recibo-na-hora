import type { Metadata } from 'next';
import RecursosClient from './_components/RecursosClient';
import { AFFILIATE_PRODUCTS, CATEGORY_META } from '@/_data/affiliateProducts';

export const metadata: Metadata = {
  title: 'Recursos para Autônomos e MEI: Cursos, Contratos e Ferramentas | ReciboNaHora',
  description:
    'Encontre cursos, planilhas, sistemas e guias digitais para autônomos, MEIs e pequenos negócios. Curadoria de produtos da Hotmart com link para a página de vendas oficial.',
  keywords: [
    'recursos autonomo',
    'cursos mei',
    'contratos freelancer',
    'ferramentas empreendedor',
    'planilhas financeiras',
    'cursos online hotmart',
  ],
  alternates: {
    canonical: 'https://www.recibonahora.com.br/recursos',
  },
  // noindex, follow: a auditoria da Fase 4A confirmou que a página é um
  // diretório de links de afiliado (Hotmart/Kiwify/Monetizze) com descrição
  // de uma linha por item, sem avaliação ou teste independente. Segue acessível
  // aos usuários e removida do sitemap; nenhum conteúdo foi apagado.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Recursos para Autônomos e MEI | ReciboNaHora',
    description:
      'Curadoria de cursos, contratos e ferramentas para quem trabalha por conta própria. Gratuito para explorar.',
    url: 'https://www.recibonahora.com.br/recursos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Recursos para Autônomos e MEI',
  description:
    'Curadoria de cursos, modelos de contratos, planilhas e ferramentas digitais para autônomos, MEIs e freelancers.',
  url: 'https://www.recibonahora.com.br/recursos',
  publisher: {
    '@type': 'Organization',
    name: 'ReciboNaHora',
    url: 'https://www.recibonahora.com.br',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Lista de Recursos Recomendados',
    numberOfItems: AFFILIATE_PRODUCTS.length,
    itemListElement: (Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: CATEGORY_META[c].label,
      url: `https://www.recibonahora.com.br/recursos#${c}`,
    })),
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Os links da página de Recursos são seguros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Todos os links levam à página de vendas oficial de cada produto, pela plataforma Hotmart. Cada link abre em nova aba com rel="noopener noreferrer". São links de afiliado, sem custo extra para o usuário.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como os recursos recomendados são selecionados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priorizamos recursos relevantes para autônomos, MEIs e pequenos negócios: planilhas financeiras, sistemas de gestão, qualificação profissional e educação para negócios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso pagar para usar o ReciboNaHora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Todos os geradores de documentos do ReciboNaHora são 100% gratuitos e funcionam sem cadastro. A página de Recursos lista produtos externos opcionais.',
      },
    },
  ],
};

export default function RecursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RecursosClient />
    </>
  );
}
