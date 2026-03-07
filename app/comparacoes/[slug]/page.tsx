import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { COMPARACOES, ALL_COMPARACAO_SLUGS } from '@/_data/comparacoes'
import { buildFAQPage, buildArticle, buildBreadcrumb, buildSpeakablePage } from '@/lib/schema'

const BASE = 'https://recibonahora.com.br'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ALL_COMPARACAO_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = COMPARACOES[params.slug]
  if (!c) return {}
  const url = `${BASE}/comparacoes/${c.slug}`
  return {
    title: `${c.title} | ReciboNaHora`,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: url },
    openGraph: { title: c.title, description: c.description, url, type: 'article', locale: 'pt_BR', siteName: 'ReciboNaHora', publishedTime: c.datePublished },
    twitter: { card: 'summary', title: c.title, description: c.description },
  }
}

export default function ComparacaoSlugPage({ params }: Props) {
  const c = COMPARACOES[params.slug]
  if (!c) notFound()

  const url = `${BASE}/comparacoes/${c.slug}`

  const jsonLdArticle = buildArticle({ title: c.title, description: c.description, url, datePublished: c.datePublished, aboutName: `${c.docA} vs ${c.docB}` })
  const jsonLdFaq = buildFAQPage(c.faqs)
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Comparações', url: `${BASE}/comparacoes` },
    { name: c.title, url },
  ])
  const jsonLdSpeakable = buildSpeakablePage(url, `${c.docA} vs ${c.docB}`)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSpeakable) }} />

      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/comparacoes" className="hover:text-stone-900">Comparações</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{c.docA} vs {c.docB}</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-sm font-bold text-white bg-stone-700 px-3 py-1 rounded-lg">{c.docA}</span>
              <span className="text-stone-500 font-bold text-lg">vs</span>
              <span className="text-sm font-bold text-white bg-stone-700 px-3 py-1 rounded-lg">{c.docB}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6">{c.title}</h1>
            <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-amber-400 pl-4">{c.intro}</p>
          </header>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Tabela Comparativa</h2>
            <div className="overflow-x-auto rounded-xl border border-stone-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-semibold">Aspecto</th>
                    <th className="text-left p-3 font-semibold text-amber-300">{c.docA}</th>
                    <th className="text-left p-3 font-semibold text-blue-300">{c.docB}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.tableRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                      <td className="p-3 border-t border-stone-200 font-medium text-stone-700">{row.aspecto}</td>
                      <td className="p-3 border-t border-stone-200 text-stone-600">{row.docA}</td>
                      <td className="p-3 border-t border-stone-200 text-stone-600">{row.docB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sections */}
          <article className="space-y-10">
            {c.sections.map((section, si) => (
              <section key={si}>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.h2}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((text, pi) => (
                    <p key={pi} className="text-stone-700 leading-relaxed">{text}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          {/* Verdict */}
          <section className="mt-10 bg-stone-900 text-white rounded-2xl p-6">
            <h2 className="text-lg font-bold text-amber-300 mb-3">
              <i className="fa-solid fa-gavel mr-2" />
              Veredicto
            </h2>
            <p className="text-stone-200 leading-relaxed">{c.verdict}</p>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
            <div className="space-y-5">
              {c.faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-stone-200 pb-5">
                  <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                  <p className="faq-answer text-stone-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-stone-900 mb-4">Ferramentas e guias relacionados</h2>
            <div className="flex flex-wrap gap-3">
              {c.relatedLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-700 transition"
                >
                  {label}
                  <i className="fa-solid fa-arrow-right text-xs" />
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 pt-8 border-t border-stone-200">
            <Link href="/comparacoes" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-medium transition">
              <i className="fa-solid fa-arrow-left text-xs" />
              Voltar às Comparações
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
