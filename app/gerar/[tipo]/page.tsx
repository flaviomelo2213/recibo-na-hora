import type { Metadata } from 'next';
import GeradorReciboPro from './_components/GeradorReciboPro';

export const metadata: Metadata = {
  title: 'Recibo Profissional com Logo e Assinatura | PDF Grátis — ReciboNaHora',
  description:
    'Gere um recibo de pagamento profissional com sua logo e assinatura digital. Suporta parcelamento, múltiplas formas de pagamento e download em PDF. Grátis e sem cadastro.',
  alternates: {
    canonical: 'https://recibonahora.com.br/gerar/recibo',
  },
};

export default function GeradorReciboProPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <GeradorReciboPro />
    </div>
  );
}
