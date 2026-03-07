import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIAS } from '@/_data/guias'

export const metadata: Metadata = {
  title: 'Guias e Dúvidas Legais sobre Recibos | ReciboNaHora',
  description: 'Respostas claras para as principais dúvidas legais sobre recibos, contratos e documentos fiscais no Brasil. Guias completos, grátis.',
  keywords: ['guia recibo', 'duvidas legais recibo', 'recibo tem valor legal', 'diferenca recibo nota fiscal'],
  alternates: { canonical: 'https://recibonahora.com.br/guias' },
  openGraph: {
    title: 'Guias e Dúvidas Legais sobre Recibos | ReciboNaHora',
    description: 'Respostas claras para dúvidas legais sobre recibos. Grátis.',
    url: 'https://recibonahora.com.br/guias',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
}

const CATEGORY_ORDER = ['Dúvidas Legais', 'Documentos Fiscais', 'Como Fazer']

export default function GuiasPage() {
  const guiasList = Object.values(GUIAS)

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: guiasList.filter((g) => g.category === cat),
  })).filter((g) => g.items.length > 0)

  // any uncategorised
  const knownCats = new Set(CATEGORY_ORDER)
  const other = guiasList.filter((g) => !knownCats.has(g.category))

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <i className="fa-solid fa-scale-balanced" />
            Guias Legais
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Guias e Dúvidas Legais
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Respostas diretas para as principais dúvidas sobre recibos, contratos e documentos fiscais no Brasil.
          </p>
        </header>

        {/* Categories */}
        {byCategory.map(({ cat, items }) => (
          <section key={cat} className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guias/${g.slug}`}
                  className="block border border-stone-200 bg-stone-50 rounded-xl p-4 hover:border-amber-400 hover:bg-amber-50 transition group"
                >
                  <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 leading-snug mb-1">{g.title}</p>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{g.description}</p>
                  <p className="text-xs text-stone-400 mt-2 flex items-center gap-1">
                    <i className="fa-regular fa-clock" />
                    {g.readTime} de leitura
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {other.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Outros Guias</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {other.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guias/${g.slug}`}
                  className="block border border-stone-200 bg-stone-50 rounded-xl p-4 hover:border-amber-400 hover:bg-amber-50 transition group"
                >
                  <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 leading-snug">{g.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Pronto para gerar seu documento?</h2>
          <p className="text-stone-600 text-sm mb-4">Use nossas ferramentas gratuitas — gere recibos, contratos e mais em PDF, sem cadastro.</p>
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
