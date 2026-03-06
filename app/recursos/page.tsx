import type { Metadata } from 'next';
import RecursosClient from './_components/RecursosClient';

export const metadata: Metadata = {
  title: 'Recursos para Autônomos e MEI: Cursos, Contratos e Ferramentas | ReciboNaHora',
  description:
    'Encontre os melhores cursos, modelos de contratos, planilhas e ferramentas digitais para autônomos, MEIs e freelancers. Curadoria gratuita com recursos de Hotmart, Kiwify e Monetizze.',
  keywords: [
    'recursos autonomo',
    'cursos mei',
    'contratos freelancer',
    'ferramentas empreendedor',
    'planilhas financeiras',
    'cursos online hotmart',
  ],
  alternates: {
    canonical: 'https://recibonahora.com.br/recursos',
  },
  openGraph: {
    title: 'Recursos para Autônomos e MEI | ReciboNaHora',
    description:
      'Curadoria de cursos, contratos e ferramentas para quem trabalha por conta própria. Gratuito para explorar.',
    url: 'https://recibonahora.com.br/recursos',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Recursos para Autônomos e MEI',
  description:
    'Curadoria de cursos, modelos de contratos, planilhas e ferramentas digitais para autônomos, MEIs e freelancers.',
  url: 'https://recibonahora.com.br/recursos',
  publisher: {
    '@type': 'Organization',
    name: 'ReciboNaHora',
    url: 'https://recibonahora.com.br',
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Lista de Recursos Recomendados',
    numberOfItems: 65,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Documentos & Contratos', url: 'https://recibonahora.com.br/recursos#documentos' },
      { '@type': 'ListItem', position: 2, name: 'MEI & Financeiro', url: 'https://recibonahora.com.br/recursos#mei-financeiro' },
      { '@type': 'ListItem', position: 3, name: 'Imóveis & Locação', url: 'https://recibonahora.com.br/recursos#imoveis' },
      { '@type': 'ListItem', position: 4, name: 'Carreira & Renda', url: 'https://recibonahora.com.br/recursos#carreira' },
      { '@type': 'ListItem', position: 5, name: 'Tecnologia & Digital', url: 'https://recibonahora.com.br/recursos#tecnologia' },
      { '@type': 'ListItem', position: 6, name: 'Comunidade', url: 'https://recibonahora.com.br/recursos#comunidade' },
    ],
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
        text: 'Sim. Todos os links levam a plataformas reconhecidas (Hotmart, Kiwify, Monetizze e Telegram). Cada link abre em nova aba com rel="noopener noreferrer". Alguns são links de afiliado, sem custo extra para o usuário.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como os recursos recomendados são selecionados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priorizamos recursos relevantes para autônomos, MEIs e freelancers: documentos, contratos, planilhas financeiras e educação para negócios.',
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
