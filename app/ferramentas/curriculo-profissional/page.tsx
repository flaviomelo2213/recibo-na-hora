import type { Metadata } from 'next';
import CurriculoProfissionalPageClient from './_components/CurriculoProfissionalPageClient';

export const metadata: Metadata = {
  title: "Gerador de Currículo Profissional com Foto | ReciboNaHora",
  description:
    "Crie um currículo profissional moderno com foto e assinatura em minutos. Exporte em PDF, com foco em privacidade e design otimizado para ATS. Ferramenta gratuita.",
  keywords: ["gerador currículo", "currículo profissional", "criar currículo online", "currículo com foto", "currículo pdf grátis"],
  alternates: {
    canonical: "https://recibonahora.com.br/ferramentas/curriculo-profissional",
  },
  openGraph: {
    title: "Gerador de Currículo Profissional com Foto | ReciboNaHora",
    description:
      "Crie um currículo profissional moderno com foto e assinatura em minutos. Exporte em PDF, com foco em privacidade e design otimizado para ATS.",
    url: "https://recibonahora.com.br/ferramentas/curriculo-profissional",
  },
};

export default function Page() {
  return <CurriculoProfissionalPageClient />;
}
