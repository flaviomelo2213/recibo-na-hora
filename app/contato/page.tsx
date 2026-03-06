import type { Metadata } from 'next';
import ContatoClient from './_components/ContatoClient';

export const metadata: Metadata = {
  title: 'Contato | Fale com a ReciboNaHora',
  description:
    'Entre em contato com a equipe da ReciboNaHora. Respondemos dúvidas sobre geradores de recibos, contratos e ferramentas para autônomos e MEI em até 48 horas úteis.',
  alternates: {
    canonical: 'https://recibonahora.com.br/contato',
  },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
