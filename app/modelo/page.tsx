import type { Metadata } from 'next'
import Link from 'next/link'
import { MODELOS } from './[tipo]/data'

export const metadata: Metadata = {
  title: 'Modelos de Documentos Gratuitos | ReciboNaHora',
  description: 'Baixe modelos prontos de recibos, contratos, procurações e outros documentos. Grátis, em PDF, sem cadastro. Válidos juridicamente no Brasil.',
  keywords: ['modelos documentos', 'modelo recibo gratis', 'modelo contrato gratis', 'modelo procuracao gratis'],
  alternates: { canonical: 'https://www.recibonahora.com.br/modelo' },
  openGraph: {
    title: 'Modelos de Documentos Gratuitos | ReciboNaHora',
    description: 'Modelos prontos de recibos, contratos e documentos em PDF. Grátis.',
    url: 'https://www.recibonahora.com.br/modelo',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
}

const CATEGORY_LABELS: Record<string, { label: string; slugs: string[] }> = {
  recibos: { label: 'Recibos', slugs: ['recibo-aluguel', 'recibo-pagamento', 'recibo-prestacao-servico', 'recibo-autonomo', 'recibo-pix', 'recibo-salario', 'recibo-sinal', 'recibo-honorarios'] },
  contratos: { label: 'Contratos', slugs: ['contrato-simples', 'contrato-locacao', 'contrato-prestacao-servico'] },
  outros: { label: 'Outros Documentos', slugs: ['procuracao-simples', 'nota-promissoria', 'declaracao-endereco', 'autorizacao-viagem'] },
}

export default function ModeloIndexPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-900">Início</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">Modelos</span>
        </nav>

        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <i className="fa-solid fa-file-lines" />
            Modelos
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Modelos de Documentos Gratuitos
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Modelos prontos para preencher e baixar em PDF. Sem cadastro, sem custo.
          </p>
        </header>

        {Object.entries(CATEGORY_LABELS).map(([key, { label, slugs }]) => {
          const docs = slugs.map((s) => MODELOS[s]).filter(Boolean)
          if (docs.length === 0) return null
          return (
            <section key={key} className="mb-10">
              <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">{label}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {docs.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/modelo/${m.slug}`}
                    className="flex items-center gap-3 border border-stone-200 bg-stone-50 rounded-xl px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group"
                  >
                    <span className="text-stone-700 font-medium group-hover:text-amber-800 text-sm leading-snug">
                      {m.h1}
                    </span>
                    <i className="fa-solid fa-arrow-right text-xs text-stone-400 group-hover:text-amber-600 ml-auto flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <section className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Prefere gerar direto?</h2>
          <p className="text-stone-600 text-sm mb-4">Use nossas ferramentas para preencher, gerar e baixar o PDF em segundos.</p>
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
          >
            Ver todas as ferramentas
            <i className="fa-solid fa-arrow-right text-sm" />
          </Link>
        </section>
      </div>
    </main>
  )
}
