import type { Metadata } from 'next';
import AutorizacaoViagemClient from './_components/AutorizacaoViagemClient';

// Fase 4C — correção de base legal.
//
// Esta ferramenta gera autorização para VIAGEM NACIONAL. A referência anterior
// à Resolução CNJ nº 131/2011 foi removida daqui: aquela resolução trata da
// autorização de viagem ao exterior, não do regime nacional. A base do regime
// nacional é o art. 83 do ECA (Lei 8.069/90), regulamentado pela Resolução CNJ
// nº 295/2019. Viagem internacional segue os arts. 84 e 85 do ECA e não é
// coberta por esta ferramenta.

export const metadata: Metadata = {
  title: 'Autorização de Viagem Nacional para Menor — Modelo Grátis | ReciboNaHora',
  description:
    'Gere o modelo de autorização de viagem nacional para menor com base no art. 83 do ECA. Preencha os dados e baixe o PDF. Confira as exigências com a transportadora antes de viajar.',
  keywords: [
    'autorização viagem menor',
    'autorização viagem nacional',
    'autorização viagem eca',
    'menor viagem acompanhado',
    'modelo autorização viagem',
  ],
  alternates: {
    canonical: 'https://www.recibonahora.com.br/ferramentas/autorizacao-viagem',
  },
  openGraph: {
    title: 'Autorização de Viagem Nacional para Menor — Modelo Grátis | ReciboNaHora',
    description:
      'Modelo de autorização de viagem nacional para menor, com base no art. 83 do ECA. Baixe o PDF e confira as exigências com a transportadora.',
    url: 'https://www.recibonahora.com.br/ferramentas/autorizacao-viagem',
  },
};

export default function Page() {
  return <AutorizacaoViagemClient />;
}
