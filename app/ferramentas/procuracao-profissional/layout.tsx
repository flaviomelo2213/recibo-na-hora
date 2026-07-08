import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Procuração Profissional Completa | ReciboNaHora',
  description:
    'Gere uma procuração profissional completa em PDF com campos para poderes específicos, prazo de validade e todas as cláusulas necessárias. Grátis e sem cadastro.',
  keywords: ['procuracao profissional', 'procuracao completa', 'modelo procuracao', 'procuracao pdf gratis'],
  alternates: { canonical: '/ferramentas/procuracao-profissional' },
  openGraph: {
    title: 'Procuração Profissional Completa | ReciboNaHora',
    description: 'Gere uma procuração profissional completa em PDF. Grátis e sem cadastro.',
    url: 'https://www.recibonahora.com.br/ferramentas/procuracao-profissional',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
  twitter: {
    card: 'summary',
    title: 'Procuração Profissional Completa | ReciboNaHora',
    description: 'Gere procuração profissional em PDF. Grátis e sem cadastro.',
  },
}

export default function ProcuracaoProfissionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
