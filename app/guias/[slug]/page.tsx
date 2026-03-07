import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIAS, ALL_GUIA_SLUGS } from '@/_data/guias'
import { buildFAQPage, buildArticle, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://recibonahora.com.br'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ALL_GUIA_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = GUIAS[params.slug]
  if (!g) return {}
  const url = `${BASE}/guias/${g.slug}`
  return {
    title: `${g.title} | ReciboNaHora`,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: g.title,
      description: g.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
      publishedTime: g.datePublished,
    },
    twitter: {
      card: 'summary',
      title: g.title,
      description: g.description,
    },
  }
}

export default function GuiaSlugPage({ params }: Props) {
  const g = GUIAS[params.slug]
  if (!g) notFound()

  const url = `${BASE}/guias/${g.slug}`

  const jsonLdArticle = buildArticle({
    title: g.title,
    description: g.description,
    url,
    datePublished: g.datePublished,
  })
  const jsonLdFaq = buildFAQPage(g.faqs)
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Guias', url: `${BASE}/guias` },
    { name: g.title, url },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/guias" className="hover:text-stone-900">Guias</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium truncate max-w-[200px]">{g.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {g.category}
              </span>
              <span className="text-stone-400 text-sm">
                <i className="fa-regular fa-clock mr-1" />{g.readTime} de leitura
              </span>
              <span className="text-stone-400 text-sm">
                <i className="fa-regular fa-calendar mr-1" />
                {new Date(g.datePublished).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6">
              {g.title}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-amber-400 pl-4">
              {g.intro}
            </p>
          </header>

          {/* Article body */}
          <article className="space-y-10">
            {g.sections.map((section, si) => (
              <section key={si}>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.h2}</h2>
                <div className="space-y-3">
                  {section.content.map((text, ci) => (
                    <p key={ci} className="text-stone-700 leading-relaxed">{text}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
            <div className="space-y-5">
              {g.faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-stone-200 pb-5">
                  <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related links */}
          {g.relatedLinks.length > 0 && (
            <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4">
                <i className="fa-solid fa-bolt text-amber-600 mr-2" />
                Ferramentas e guias relacionados
              </h2>
              <div className="flex flex-wrap gap-3">
                {g.relatedLinks.map(({ href, label }) => (
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
          )}

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-stone-200">
            <Link href="/guias" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-medium transition">
              <i className="fa-solid fa-arrow-left text-xs" />
              Voltar aos Guias
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
