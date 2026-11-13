import type { Metadata } from 'next';
import { buildOpenGraph } from '@/lib/metadata';
import Breadcrumb from '@/components/Breadcrumb';
import { ChavePixApoio, QrApoio } from '@/components/apoio/ApoioPix';
import { APOIO_PIX } from '@/_config/apoio';

const title = 'Apoie o ReciboNaHora via Pix | ReciboNaHora';
const description =
  'O ReciboNaHora é gratuito e mantido por uma pessoa. Veja para que serve o apoio voluntário via Pix, com chave e QR Code, e o que ele não é.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/apoie' },
  openGraph: buildOpenGraph({ title, description, path: '/apoie' }),
};

export default function ApoiePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Apoie o projeto' }]} />

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Apoie o ReciboNaHora</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          O ReciboNaHora é gratuito e mantido por uma pessoa. Se as ferramentas ajudaram você, é possível apoiar o
          projeto com qualquer valor via Pix. O apoio é totalmente opcional: tudo continua gratuito para quem não apoiar.
        </p>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Para que serve o apoio</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Pagar os custos de hospedagem, domínio e ferramentas que mantêm o site no ar;</li>
              <li>Manter os geradores de recibos e documentos gratuitos e sem cadastro;</li>
              <li>Dedicar tempo para revisar os conteúdos e criar novas ferramentas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">O que o apoio não é</h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>É uma contribuição voluntária, do valor que você escolher;</li>
              <li>Não é doação a instituição de caridade nem a entidade sem fins lucrativos;</li>
              <li>Não dá direito a nada em troca: nenhum recurso extra, prioridade de atendimento ou benefício;</li>
              <li>Não é pagamento por nenhum documento: os recibos e documentos são gratuitos com ou sem apoio.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Como apoiar via Pix</h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <QrApoio tamanho={180} />
              <div className="space-y-3 text-sm">
                <p>
                  Escaneie o QR Code no aplicativo do seu banco e escolha o valor, ou copie a chave Pix aleatória abaixo.
                  Antes de confirmar, o app mostra o nome do titular: <strong>{APOIO_PIX.titular}</strong>.
                </p>
                <ChavePixApoio />
              </div>
            </div>
          </section>

          <p className="text-sm text-slate-500">
            A chave e o QR Code de apoio aparecem apenas nesta página e na mensagem exibida depois que um documento fica
            pronto. Eles nunca são incluídos nos recibos, PDFs ou imagens gerados pelas ferramentas.
          </p>
        </div>
      </div>
    </div>
  );
}
