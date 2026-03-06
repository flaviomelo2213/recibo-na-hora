import type { Metadata } from 'next';
import PrefeituraClient from './_components/PrefeituraClient';

export const metadata: Metadata = {
  title: "Central do Cidadão: Requerimentos e Recursos Online | ReciboNaHora",
  description:
    "Gere requerimentos oficiais para a prefeitura em PDF: requerimento geral, recurso de multa de trânsito e zeladoria urbana. Com assistência de IA (BYOK). Gratuito.",
  keywords: ["requerimento prefeitura", "recurso multa trânsito", "zeladoria urbana", "requerimento municipal pdf", "central cidadão"],
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/prefeitura",
  },
  openGraph: {
    title: "Central do Cidadão: Requerimentos e Recursos Online | ReciboNaHora",
    description:
      "Gere requerimentos oficiais para a prefeitura em PDF: requerimento geral, recurso de multa e zeladoria urbana.",
    url: "https://recibonahora.com.br/ferramentas/prefeitura",
  },
};

export default function Page() {
  return <PrefeituraClient />;
}
