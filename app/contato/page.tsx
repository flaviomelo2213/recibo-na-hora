import type { Metadata } from 'next';
import ContatoClient from './_components/ContatoClient';
import { buildOpenGraph } from '@/lib/metadata';

const title = 'Contato | Fale com a ReciboNaHora';
const description =
  'Entre em contato com a equipe da ReciboNaHora. Respondemos dúvidas sobre geradores de recibos, contratos e ferramentas para autônomos e MEI em até 48 horas úteis.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/contato',
  },
  openGraph: buildOpenGraph({ title, description, path: '/contato' }),
};

export default function ContatoPage() {
  return <ContatoClient />;
}
