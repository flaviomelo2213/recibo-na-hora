import type { Metadata } from 'next';
import EducacaoFinanceiraClient from './_components/EducacaoFinanceiraClient';

export const metadata: Metadata = {
  title: 'Educação Financeira para Autônomos e MEI | Simuladores e Guias | ReciboNaHora',
  description:
    'Conteúdo de educação financeira para autônomos, MEIs e pequenos empreendedores. Simuladores de consórcio, lance embutido, CET e estratégias de capital de giro. Gratuito.',
  keywords: [
    'educação financeira',
    'simulador consórcio',
    'lance embutido',
    'capital de giro',
    'financeiro mei',
    'autonomo financas',
  ],
  alternates: {
    canonical: 'https://recibonahora.com.br/educacao-financeira',
  },
  openGraph: {
    title: 'Educação Financeira para Autônomos e MEI | ReciboNaHora',
    description: 'Simuladores e guias financeiros gratuitos para quem trabalha por conta própria.',
    url: 'https://recibonahora.com.br/educacao-financeira',
  },
};

export default function EducacaoFinanceiraPage() {
  return <EducacaoFinanceiraClient />;
}
