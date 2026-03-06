import type { Metadata } from 'next';
import ContratoCompletoClient from './_components/ContratoCompletoClient';

export const metadata: Metadata = {
  title: "Contrato de Locação Completo Online Grátis | Lei 8.245/91 | ReciboNaHora",
  description:
    "Gere um contrato de locação residencial completo em PDF, baseado na Lei do Inquilinato (Lei 8.245/91). Com wizard passo a passo, cláusulas de garantia e personalização. Gratuito.",
  keywords: ["contrato locação completo", "contrato aluguel residencial", "lei inquilinato", "modelo contrato locação", "contrato aluguel pdf"],
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/contrato-completo",
  },
  openGraph: {
    title: "Contrato de Locação Completo Online Grátis | Lei 8.245/91 | ReciboNaHora",
    description:
      "Gere um contrato de locação residencial completo em PDF, baseado na Lei do Inquilinato. Com wizard passo a passo e cláusulas de garantia.",
    url: "https://recibonahora.com.br/ferramentas/contrato-completo",
  },
};

export default function Page() {
  return <ContratoCompletoClient />;
}
