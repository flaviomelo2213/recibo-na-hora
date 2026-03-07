import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPARACOES } from '@/_data/comparacoes'

export const metadata: Metadata = {
  title: 'Comparações de Documentos Fiscais | ReciboNaHora',
  description: 'Recibo vs Nota Fiscal, RPA vs NFS-e, Nota Promissória vs Recibo — comparações claras para saber exatamente qual documento usar em cada situação.',
  keywords: ['comparacao documentos fiscais', 'recibo vs nota fiscal', 'rpa vs nota fiscal', 'nota promissoria vs recibo'],
  alternates: { canonical: 'https://recibonahora.com.br/comparacoes' },
  openGraph: {
    title: 'Comparações de Documentos | ReciboNaHora',
    description: 'Tabelas comparativas para saber qual documento usar. Grátis.',
    url: 'https://recibonahora.com.br/comparacoes',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'ReciboNaHora',
  },
}

export default function ComparacoesPage() {
  const list = Object.values(COMPARACOES)

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-900">Início</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">Comparações</span>
        </nav>

        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            <i className="fa-solid fa-scale-balanced" />
            Comparações
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            Comparações de Documentos
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tabelas comparativas para saber exatamente qual documento usar em cada situação, sem dúvida.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          {list.map((c) => (
            <Link
              key={c.slug}
              href={`/comparacoes/${c.slug}`}
              className="block border border-stone-200 bg-stone-50 rounded-2xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-stone-900 bg-stone-200 px-2 py-0.5 rounded">{c.docA}</span>
                <span className="text-stone-400 font-bold">vs</span>
                <span className="text-sm font-bold text-stone-900 bg-stone-200 px-2 py-0.5 rounded">{c.docB}</span>
              </div>
              <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 leading-snug mb-1">{c.title}</p>
              <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{c.description}</p>
              <p className="text-xs text-amber-600 font-medium mt-3 flex items-center gap-1">
                Ver comparação completa <i className="fa-solid fa-arrow-right text-xs" />
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Precisa do documento certo agora?</h2>
          <p className="text-stone-600 text-sm mb-4">Gere recibo, RPA, contrato ou nota promissória em segundos, grátis.</p>
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
