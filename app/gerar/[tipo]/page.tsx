import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GeradorReciboPro from './_components/GeradorReciboPro';
import { buildOpenGraph } from '@/lib/metadata';
import PartnerSpotlight from '@/components/partners/PartnerSpotlight';

/**
 * Slugs realmente suportados por esta rota dinâmica.
 *
 * Antes, qualquer /gerar/<qualquer-coisa> retornava HTTP 200 com o mesmo
 * conteúdo e o mesmo canonical, criando uma superfície infinita de páginas
 * duplicadas. `dynamicParams = false` faz o Next responder 404 para qualquer
 * slug fora desta lista; o notFound() abaixo é a segunda barreira.
 *
 * As rotas estáticas irmãs (/gerar/recibo-salario, /gerar/venda-veiculo,
 * /gerar/venda_veiculo) têm precedência sobre este segmento dinâmico e não são
 * afetadas por esta lista.
 */
const SLUGS_SUPORTADOS = ['recibo'] as const;

export const dynamicParams = false;

export async function generateStaticParams() {
  return SLUGS_SUPORTADOS.map((tipo) => ({ tipo }));
}

const title = 'Recibo Profissional com Logo e Assinatura | PDF Grátis — ReciboNaHora';
const description =
  'Gere um recibo de pagamento profissional com sua logo e assinatura digital. Suporta parcelamento, múltiplas formas de pagamento e download em PDF. Grátis e sem cadastro.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://www.recibonahora.com.br/gerar/recibo',
  },
  openGraph: buildOpenGraph({ title, description, path: '/gerar/recibo' }),
};

export default function GeradorReciboProPage({ params }: { params: { tipo: string } }) {
  if (!SLUGS_SUPORTADOS.includes(params.tipo as (typeof SLUGS_SUPORTADOS)[number])) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <GeradorReciboPro />
      <div className="mx-auto mt-10 max-w-3xl">
        <PartnerSpotlight categories={['conta-pj', 'pagamentos', 'assinatura']} />
      </div>
    </div>
  );
}
