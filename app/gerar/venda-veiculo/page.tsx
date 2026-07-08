import type { Metadata } from 'next';
import ReciboVeiculo from '../venda_veiculo/_components/ReciboVeiculo';
import { buildOpenGraph } from '@/lib/metadata';

const title = 'Recibo de Compra e Venda de Veículo Grátis | PDF com RENAVAM — ReciboNaHora';
const description =
  'Gere recibo de compra e venda de carro, moto ou caminhão com placa, RENAVAM e declaração legal de quitação. Download em PDF gratuito, sem cadastro.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/gerar/venda-veiculo',
  },
  openGraph: buildOpenGraph({ title, description, path: '/gerar/venda-veiculo' }),
};

export default function VendaVeiculoPage() {
  return <ReciboVeiculo />;
}
