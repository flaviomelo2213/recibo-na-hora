import type { Metadata } from 'next';
import ReciboSalario from './_components/ReciboSalario';
import { buildOpenGraph } from '@/lib/metadata';

const title = 'Recibo de Salário e Diarista Grátis | 2 Vias em PDF — ReciboNaHora';
const description =
  'Gere recibo de pagamento de salário, diarista ou adiantamento salarial em PDF com 2 vias (empregador e funcionário). Gratuito, sem cadastro, funciona no navegador.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/gerar/recibo-salario',
  },
  openGraph: buildOpenGraph({ title, description, path: '/gerar/recibo-salario' }),
};

export default function ReciboSalarioPage() {
  return <ReciboSalario />;
}
