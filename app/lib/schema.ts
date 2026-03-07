const BASE = 'https://recibonahora.com.br'

export interface HowToStep {
  name: string
  text?: string
}

export interface FAQ {
  q: string
  a: string
}

export interface ArticleData {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  aboutName?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function buildHowTo(
  name: string,
  description: string,
  steps: HowToStep[],
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      ...(s.text ? { text: s.text } : {}),
    })),
  }
}

export function buildFAQPage(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

function toIsoDate(date: string) {
  // Append Brazil timezone offset if plain date (YYYY-MM-DD)
  return date.length === 10 ? `${date}T00:00:00-03:00` : date
}

export function buildArticle(data: ArticleData) {
  const imageUrl = data.image ?? `${BASE}/opengraph-image`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: toIsoDate(data.datePublished),
    dateModified: toIsoDate(data.dateModified ?? data.datePublished),
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    about: {
      '@type': 'Thing',
      name: data.aboutName ?? 'Recibo de pagamento',
    },
    author: {
      '@type': 'Organization',
      name: 'ReciboNaHora',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ReciboNaHora',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/icon.png` },
    },
  }
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildWebPage(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: { '@type': 'WebSite', name: 'ReciboNaHora', url: BASE },
  }
}

export function buildSpeakablePage(url: string, aboutName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.resposta-direta', '.faq-answer'],
    },
    about: {
      '@type': 'Thing',
      name: aboutName,
    },
  }
}

export function buildSoftwareApplication() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ReciboNaHora',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    url: BASE,
    description:
      'Gerador gratuito de recibos, contratos e documentos em PDF. Sem cadastro.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
    },
  }
}
