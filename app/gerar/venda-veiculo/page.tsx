import type { Metadata } from 'next';
import ReciboVeiculo from '../venda_veiculo/_components/ReciboVeiculo';

export const metadata: Metadata = {
  title: 'Recibo de Compra e Venda de Veículo Grátis | PDF com RENAVAM — ReciboNaHora',
  description:
    'Gere recibo de compra e venda de carro, moto ou caminhão com placa, RENAVAM e declaração legal de quitação. Download em PDF gratuito, sem cadastro.',
  alternates: {
    canonical: 'https://recibonahora.com.br/gerar/venda-veiculo',
  },
};

export default function VendaVeiculoPage() {
  return <ReciboVeiculo />;
}
