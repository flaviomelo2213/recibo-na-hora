import type { Metadata } from 'next';
import MeiRelatorioClient from './_components/MeiRelatorioClient';

export const metadata: Metadata = {
  title: "Relatório Mensal de Receitas MEI Grátis | DASN-SIMEI | ReciboNaHora",
  description:
    "Gere o relatório mensal de receitas brutas do MEI em PDF, obrigatório pela Receita Federal. Preencha comércio e serviços mês a mês e baixe para guardar. Gratuito.",
  keywords: ["relatório mensal mei", "dasn-simei", "receitas brutas mei", "controle faturamento mei", "relatorio mei pdf"],
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/mei-relatorio",
  },
  openGraph: {
    title: "Relatório Mensal de Receitas MEI Grátis | DASN-SIMEI | ReciboNaHora",
    description:
      "Gere o relatório mensal de receitas brutas do MEI em PDF, obrigatório pela Receita Federal.",
    url: "https://recibonahora.com.br/ferramentas/mei-relatorio",
  },
};

export default function Page() {
  return <MeiRelatorioClient />;
}
