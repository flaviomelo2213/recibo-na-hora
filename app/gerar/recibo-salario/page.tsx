import type { Metadata } from 'next';
import ReciboSalario from './_components/ReciboSalario';

export const metadata: Metadata = {
  title: 'Recibo de Salário e Diarista Grátis | 2 Vias em PDF — ReciboNaHora',
  description:
    'Gere recibo de pagamento de salário, diarista ou adiantamento salarial em PDF com 2 vias (empregador e funcionário). Gratuito, sem cadastro, funciona no navegador.',
  alternates: {
    canonical: 'https://recibonahora.com.br/gerar/recibo-salario',
  },
};

export default function ReciboSalarioPage() {
  return <ReciboSalario />;
}
