import type { Metadata } from 'next';
import EducacaoFinanceiraClient from './_components/EducacaoFinanceiraClient';

export const metadata: Metadata = {
  title: 'Simulador de Consórcio Imobiliário | Lance Embutido e CET — ReciboNaHora',
  description:
    'Simule estratégias de lance estruturado para consórcio imobiliário. Calcule CET, alavancagem financeira, lance embutido e capital de giro. Ferramenta gratuita para corretores e consorciados.',
  alternates: {
    canonical: 'https://recibonahora.com.br/educacao-financeira',
  },
};

export default function EducacaoFinanceiraPage() {
  return <EducacaoFinanceiraClient />;
}
