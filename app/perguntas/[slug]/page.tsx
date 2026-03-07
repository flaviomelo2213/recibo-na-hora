import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PERGUNTAS, ALL_PERGUNTA_SLUGS } from '@/_data/perguntas'
import { buildFAQPage, buildArticle, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://recibonahora.com.br'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ALL_PERGUNTA_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = PERGUNTAS[params.slug]
  if (!p) return {}
  const url = `${BASE}/perguntas/${p.slug}`
  return {
    title: `${p.question} | ReciboNaHora`,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: p.question,
      description: p.metaDescription,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
      publishedTime: p.datePublished,
    },
    twitter: {
      card: 'summary',
      title: p.question,
      description: p.metaDescription,
    },
  }
}

export default function PerguntaSlugPage({ params }: Props) {
  const p = PERGUNTAS[params.slug]
  if (!p) notFound()

  const url = `${BASE}/perguntas/${p.slug}`

  const jsonLdArticle = buildArticle({ title: p.question, description: p.metaDescription, url, datePublished: p.datePublished })
  const jsonLdFaq = buildFAQPage([{ q: p.question, a: p.shortAnswer }, ...p.faqs])
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Perguntas', url: `${BASE}/perguntas` },
    { name: p.question, url },
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
            <Link href="/perguntas" className="hover:text-stone-900">Perguntas</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium truncate max-w-[200px]">{p.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                <i className="fa-solid fa-circle-question" />
                {p.category}
              </span>
              <span className="text-stone-400 text-sm">
                <i className="fa-regular fa-calendar mr-1" />
                {new Date(p.datePublished).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6">{p.question}</h1>

            {/* AEO — Resposta direta (AI Overview optimized) */}
            <div className="bg-stone-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-2">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Resposta direta</p>
              <p className="text-stone-800 font-medium leading-relaxed">{p.shortAnswer}</p>
            </div>
          </header>

          {/* Article body */}
          <article className="space-y-10">
            {p.sections.map((section, si) => (
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

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas relacionadas</h2>
            <div className="space-y-5">
              {p.faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-stone-200 pb-5">
                  <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-stone-900 mb-4">
              <i className="fa-solid fa-bolt text-amber-600 mr-2" />
              Gere seu recibo agora
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ferramentas/recibo-simples"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-700 transition"
              >
                Recibo Simples — Grátis
                <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
              {p.relatedLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 border border-stone-200 bg-white text-stone-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-stone-200">
            <Link href="/perguntas" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-medium transition">
              <i className="fa-solid fa-arrow-left text-xs" />
              Voltar às Perguntas
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
