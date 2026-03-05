import type { Metadata } from "next";
import FerramentaValeTransporte from "./_components/FerramentaValeTransporte";

export const metadata: Metadata = {
  title: "Calculadora de Vale-Transporte Grátis | Desconto CLT Online",
  description:
    "Calcule o vale-transporte online grátis. Descubra o desconto máximo de 6% sobre o salário bruto conforme a CLT e o valor a pagar pelo empregador. Resultado instantâneo.",
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/vale-transporte",
  },
};

export default function ValeTransportePage() {
  return <FerramentaValeTransporte />;
}
