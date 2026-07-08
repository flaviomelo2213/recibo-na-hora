import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelo de Requerimento de ITBI | ReciboNaHora',
  description:
    'Gere gratuitamente um modelo de requerimento de ITBI (Imposto de Transmissão de Bens Imóveis) para protocolar na prefeitura. Sem cadastro, em PDF.',
  keywords: ['itbi modelo', 'requerimento itbi', 'itbi prefeitura', 'imposto transmissao bens imoveis modelo'],
  alternates: { canonical: '/requerimentos/itbi-modelo' },
  openGraph: {
    title: 'Modelo de Requerimento de ITBI | ReciboNaHora',
    description: 'Modelo gratuito de requerimento de ITBI para protocolar na prefeitura.',
    url: 'https://www.recibonahora.com.br/requerimentos/itbi-modelo',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
  twitter: {
    card: 'summary',
    title: 'Modelo de Requerimento de ITBI | ReciboNaHora',
    description: 'Modelo gratuito de requerimento de ITBI. Sem cadastro.',
  },
}

export default function ItbiModeloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
