import type { Metadata } from 'next'

export const SITE_URL = 'https://www.recibonahora.com.br'
export const SITE_NAME = 'ReciboNaHora'

/**
 * OG image: usa a rota dinâmica app/opengraph-image.tsx (já validada em produção)
 * até que exista um public/og-image.png estático — ver docs/fase2-relatorio.md.
 */
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`

interface BuildOpenGraphInput {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}

export function buildOpenGraph({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: BuildOpenGraphInput): NonNullable<Metadata['openGraph']> {
  return {
    title,
    description,
    url: `${SITE_URL}${path}`,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type,
    images: [{ url: image }],
  }
}
