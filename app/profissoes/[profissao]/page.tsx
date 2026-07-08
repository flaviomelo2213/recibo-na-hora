import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROFISSOES, ALL_PROFISSAO_SLUGS } from '@/_data/profissoes'
import { SEO_CITIES } from '@/_data/seoCities'
import { buildHowTo, buildFAQPage, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://www.recibonahora.com.br'

interface Props {
  params: { profissao: string }
}

export async function generateStaticParams() {
  return ALL_PROFISSAO_SLUGS.map((profissao) => ({ profissao }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = PROFISSOES[params.profissao]
  if (!p) return {}
  const url = `${BASE}/profissoes/${p.slug}`
  return {
    title: `Recibo ${p.prepoLabel} — Modelo Gratuito | ReciboNaHora`,
    description: p.metaDescription,
    keywords: [p.keyword, `modelo recibo ${p.slug}`, `recibo ${p.slug} pdf`, `${p.slug} autonomo recibo`],
    alternates: { canonical: url },
    openGraph: {
      title: `Recibo ${p.prepoLabel} — Modelo Gratuito | ReciboNaHora`,
      description: p.metaDescription,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
    },
    twitter: {
      card: 'summary',
      title: `Recibo ${p.prepoLabel} — Modelo Gratuito`,
      description: p.metaDescription,
    },
  }
}

export default function ProfissaoPage({ params }: Props) {
  const p = PROFISSOES[params.profissao]
  if (!p) notFound()

  const url = `${BASE}/profissoes/${p.slug}`
  const h1 = `Recibo ${p.prepoLabel}`

  const jsonLdHowTo = buildHowTo(
    h1,
    p.intro,
    p.campos.map((f) => ({ name: f })),
    url,
  )
  const jsonLdFaq = buildFAQPage(p.faqs)
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Profissões', url: `${BASE}/profissoes` },
    { name: h1, url },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/profissoes" className="hover:text-stone-900">Profissões</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{p.name}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <i className="fa-solid fa-briefcase text-amber-600" />
              {p.name}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">{h1}</h1>
            <p className="text-lg text-stone-600 leading-relaxed">{p.intro}</p>
          </header>

          {/* CTA */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-stone-700 text-sm mb-4 font-medium">
              Gere agora — preencha e baixe em PDF em segundos, grátis:
            </p>
            <Link
              href={p.toolHref}
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
            >
              {p.toolLabel}
              <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </section>

          <div className="space-y-10">
            {/* Quando emitir */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando o {p.name} deve emitir recibo?</h2>
              <ul className="space-y-2">
                {p.quando.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Campos obrigatórios */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">O que deve conter no recibo?</h2>
              <ol className="space-y-3">
                {p.campos.map((field, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-stone-700">{field}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Validade */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h2 className="text-lg font-bold text-blue-900 mb-2">
                <i className="fa-solid fa-circle-check mr-2" />
                Validade jurídica em todo o Brasil
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                O recibo simples tem validade jurídica em todo o território nacional. Basta preencher corretamente com os dados de ambas as partes, descrever o serviço e assinar. Não precisa de firma reconhecida para serviços de menor valor.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes — Recibo {p.prepoLabel}</h2>
              <div className="space-y-5">
                {p.faqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Profissões relacionadas */}
            {p.related.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-4">Profissões relacionadas</h2>
                <div className="flex flex-wrap gap-2">
                  {p.related.map((slug) => {
                    const rel = PROFISSOES[slug]
                    if (!rel) return null
                    return (
                      <Link
                        key={slug}
                        href={`/profissoes/${slug}`}
                        className="inline-flex items-center gap-1 border border-stone-200 bg-stone-50 text-stone-600 px-3 py-1.5 rounded-lg text-sm hover:border-amber-400 hover:bg-amber-50 transition"
                      >
                        Recibo {rel.prepoLabel}
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Por cidade */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-4">
                {h1} por cidade
              </h2>
              <div className="flex flex-wrap gap-2">
                {SEO_CITIES.slice(0, 20).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/profissoes/${p.slug}/${c.slug}`}
                    className="inline-flex items-center gap-1 border border-stone-200 bg-stone-50 text-stone-600 px-3 py-1.5 rounded-lg text-sm hover:border-amber-400 hover:bg-amber-50 transition"
                  >
                    {c.name} — {c.stateCode}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
