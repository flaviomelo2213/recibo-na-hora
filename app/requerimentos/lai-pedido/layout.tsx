import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pedido de Acesso à Informação (LAI) | ReciboNaHora',
  description:
    'Gere gratuitamente um modelo de pedido de Acesso à Informação conforme a Lei de Acesso à Informação (LAI — Lei 12.527/2011). Sem cadastro.',
  keywords: ['lai pedido acesso informacao', 'lei acesso informacao modelo', 'pedido lai governo federal', 'requerimento lai'],
  alternates: { canonical: '/requerimentos/lai-pedido' },
  openGraph: {
    title: 'Pedido de Acesso à Informação (LAI) | ReciboNaHora',
    description: 'Modelo de pedido LAI conforme Lei 12.527/2011. Grátis e sem cadastro.',
    url: 'https://recibonahora.com.br/requerimentos/lai-pedido',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
  twitter: {
    card: 'summary',
    title: 'Pedido de Acesso à Informação (LAI) | ReciboNaHora',
    description: 'Modelo de pedido LAI. Grátis e sem cadastro.',
  },
}

export default function LaiPedidoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
