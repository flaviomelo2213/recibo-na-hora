import type { Metadata } from 'next';
import AutorizacaoViagemClient from './_components/AutorizacaoViagemClient';

export const metadata: Metadata = {
  title: "Autorização de Viagem para Menor Online Grátis | CNJ | ReciboNaHora",
  description:
    "Gere autorização de viagem nacional para menores conforme a Resolução 131/2011 do CNJ. Preencha os dados e baixe o PDF para reconhecimento de firma. Gratuito.",
  keywords: ["autorização viagem menor", "autorização viagem cnj", "autorização viagem nacional", "menor viagem acompanhado", "modelo autorização viagem"],
  alternates: {
    canonical: "https://www.recibonahora.com.br/ferramentas/autorizacao-viagem",
  },
  openGraph: {
    title: "Autorização de Viagem para Menor Online Grátis | CNJ | ReciboNaHora",
    description:
      "Gere autorização de viagem nacional para menores conforme Resolução 131/2011 do CNJ. Baixe o PDF para reconhecimento de firma.",
    url: "https://www.recibonahora.com.br/ferramentas/autorizacao-viagem",
  },
};

export default function Page() {
  return <AutorizacaoViagemClient />;
}
