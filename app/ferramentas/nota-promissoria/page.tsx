import type { Metadata } from 'next';
import NotaPromissoriaClient from './_components/NotaPromissoriaClient';

export const metadata: Metadata = {
  title: "Gerador de Nota Promissória Online Grátis | ReciboNaHora",
  description:
    "Crie uma nota promissória válida em PDF com força de título executivo extrajudicial. Preencha os dados do credor, devedor e valor. Gratuito, sem cadastro.",
  keywords: ["nota promissória", "gerar nota promissória", "nota promissória online", "nota promissória pdf", "modelo nota promissória"],
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/nota-promissoria",
  },
  openGraph: {
    title: "Gerador de Nota Promissória Online Grátis | ReciboNaHora",
    description:
      "Crie uma nota promissória válida em PDF com força de título executivo extrajudicial. Gratuito, sem cadastro.",
    url: "https://recibonahora.com.br/ferramentas/nota-promissoria",
  },
};

export default function Page() {
  return <NotaPromissoriaClient />;
}
