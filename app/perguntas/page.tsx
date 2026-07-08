import type { Metadata } from 'next'
import Link from 'next/link'
import { PERGUNTAS } from '@/_data/perguntas'

export const metadata: Metadata = {
  title: 'Perguntas sobre Recibos — Dúvidas Respondidas | ReciboNaHora',
  description: 'Respostas diretas e completas para as principais dúvidas sobre recibos no Brasil: validade, assinatura, prazo, formato e mais. Grátis.',
  keywords: ['perguntas sobre recibo', 'duvidas recibo', 'recibo validade juridica duvida', 'como fazer recibo duvida'],
  alternates: { canonical: 'https://www.recibonahora.com.br/perguntas' },
  openGraph: {
    title: 'Perguntas sobre Recibos | ReciboNaHora',
    description: 'Respostas para todas as dúvidas sobre recibos. Grátis.',
    url: 'https://www.recibonahora.com.br/perguntas',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
}

const CATEGORY_ORDER = ['Validade Jurídica', 'Dicas Práticas', 'Como Fazer', 'Casos de Uso', 'Fiscal', 'Conceitos']

export default function PerguntasPage() {
  const list = Object.values(PERGUNTAS)

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: list.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0)

  const knownCats = new Set(CATEGORY_ORDER)
  const other = list.filter((p) => !knownCats.has(p.category))

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-900">Início</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">Perguntas</span>
        </nav>

        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <i className="fa-solid fa-circle-question" />
            Dúvidas Frequentes
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Perguntas sobre Recibos
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Respostas diretas e completas para as dúvidas mais comuns sobre recibos no Brasil — com base na legislação vigente.
          </p>
        </header>

        {byCategory.map(({ cat, items }) => (
          <section key={cat} className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">{cat}</h2>
            <div className="space-y-2">
              {items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/perguntas/${p.slug}`}
                  className="flex items-start gap-3 border border-stone-200 bg-stone-50 rounded-xl px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group"
                >
                  <i className="fa-solid fa-circle-question text-stone-300 group-hover:text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 leading-snug">{p.question}</p>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-1">{p.shortAnswer}</p>
                  </div>
                  <i className="fa-solid fa-arrow-right text-xs text-stone-300 group-hover:text-amber-500 ml-auto flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </section>
        ))}

        {other.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">Outras Dúvidas</h2>
            <div className="space-y-2">
              {other.map((p) => (
                <Link key={p.slug} href={`/perguntas/${p.slug}`} className="flex items-center gap-3 border border-stone-200 bg-stone-50 rounded-xl px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition">
                  <p className="text-sm font-semibold text-stone-900">{p.question}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Pronto para gerar seu recibo?</h2>
          <p className="text-stone-600 text-sm mb-4">Crie um recibo profissional em segundos — grátis, sem cadastro.</p>
          <Link
            href="/ferramentas/recibo-simples"
            className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
          >
            Gerar Recibo Grátis
            <i className="fa-solid fa-arrow-right text-sm" />
          </Link>
        </section>
      </div>
    </main>
  )
}
