import type { Metadata } from "next";
import FerramentaValeTransporte from "./_components/FerramentaValeTransporte";
import { buildOpenGraph } from '@/lib/metadata';

const title = "Calculadora de Vale-Transporte Grátis | Desconto CLT Online";
const description =
  "Calcule o vale-transporte online grátis. Descubra o desconto máximo de 6% sobre o salário bruto conforme a CLT e o valor a pagar pelo empregador. Resultado instantâneo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.recibonahora.com.br/ferramentas/vale-transporte",
  },
  openGraph: buildOpenGraph({ title, description, path: '/ferramentas/vale-transporte' }),
};

export default function ValeTransportePage() {
  return <FerramentaValeTransporte />;
}
