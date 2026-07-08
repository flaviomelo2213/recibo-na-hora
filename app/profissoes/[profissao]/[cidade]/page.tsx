import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROFISSOES, ALL_PROFISSAO_SLUGS } from '@/_data/profissoes'
import { SEO_CITIES, getCityBySlug } from '@/_data/seoCities'
import { buildHowTo, buildFAQPage, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://www.recibonahora.com.br'

interface Props {
  params: { profissao: string; cidade: string }
}

export async function generateStaticParams() {
  // 30 profissões × 27 capitais (first 27 cities are state capitals)
  const capitals = SEO_CITIES.slice(0, 27)
  const params: { profissao: string; cidade: string }[] = []
  for (const profissao of ALL_PROFISSAO_SLUGS) {
    for (const city of capitals) {
      params.push({ profissao, cidade: city.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = PROFISSOES[params.profissao]
  const city = getCityBySlug(params.cidade)
  if (!p || !city) return {}

  const title = `Recibo ${p.prepoLabel} em ${city.name} — ${city.stateCode} | ReciboNaHora`
  const description = `${p.metaDescription.replace(/\.$/, '')} — disponível para ${city.name} (${city.state}). Gratuito, sem cadastro.`
  const url = `${BASE}/profissoes/${p.slug}/${city.slug}`

  return {
    title,
    description,
    keywords: [
      p.keyword,
      `${p.keyword} ${city.name.toLowerCase()}`,
      `recibo ${p.slug} ${city.stateCode.toLowerCase()}`,
      `${p.slug} autonomo ${city.name.toLowerCase()}`,
    ],
    alternates: { canonical: url },
    // noindex temporário: variante de cidade tem altíssima similaridade textual com
    // as demais cidades da mesma profissão e nenhum link interno de navegação aponta
    // para ela (mesmo padrão de app/modelo/[tipo]/[cidade]/page.tsx). Reavaliar após
    // enriquecimento real de conteúdo por cidade.
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default function ProfissaoCidadePage({ params }: Props) {
  const p = PROFISSOES[params.profissao]
  const city = getCityBySlug(params.cidade)
  if (!p || !city) notFound()

  const url = `${BASE}/profissoes/${p.slug}/${city.slug}`
  const h1 = `Recibo ${p.prepoLabel} em ${city.name} — ${city.stateCode}`

  const jsonLdHowTo = buildHowTo(
    h1,
    `${p.intro} Disponível gratuitamente para ${city.name}, ${city.state}.`,
    p.campos.map((f) => ({ name: f })),
    url,
  )
  const jsonLdFaq = buildFAQPage(p.faqs)
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Profissões', url: `${BASE}/profissoes` },
    { name: `Recibo ${p.prepoLabel}`, url: `${BASE}/profissoes/${p.slug}` },
    { name: city.name, url },
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
            <Link href={`/profissoes/${p.slug}`} className="hover:text-stone-900 truncate max-w-[140px]">{p.name}</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{city.name}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <i className="fa-solid fa-location-dot text-amber-600" />
              {city.name} · {city.state}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">{h1}</h1>
            <p className="text-lg text-stone-600 leading-relaxed">{p.intro}</p>
          </header>

          {/* CTA */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-stone-700 text-sm mb-4 font-medium">
              Gere agora mesmo — preencha e baixe em PDF em segundos, grátis:
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
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando usar em {city.name}?</h2>
              <ul className="space-y-2">
                {p.quando.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">
                Em {city.name}, {city.state}, o recibo tem plena validade jurídica e é aceito em bancos, cartórios e órgãos públicos de todo o território nacional.
              </p>
            </section>

            {/* Campos */}
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
                Validade em {city.name} e no Brasil todo
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                Este modelo foi desenvolvido em conformidade com a legislação brasileira e tem validade jurídica em <strong>{city.name} ({city.stateCode})</strong> e em todo o território nacional. Basta preencher corretamente e assinar.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {p.faqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Outras cidades */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-4">
                Recibo {p.prepoLabel} em outras cidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {SEO_CITIES.filter((c) => c.slug !== city.slug)
                  .slice(0, 12)
                  .map((c) => (
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

            {/* Links relacionados */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-4">Links relacionados</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/profissoes/${p.slug}`}
                  className="inline-flex items-center gap-1.5 border border-stone-200 bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                >
                  Recibo {p.prepoLabel} (nacional)
                </Link>
                {p.related.map((slug) => {
                  const rel = PROFISSOES[slug]
                  if (!rel) return null
                  return (
                    <Link
                      key={slug}
                      href={`/profissoes/${slug}`}
                      className="inline-flex items-center gap-1.5 border border-stone-200 bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                    >
                      Recibo {rel.prepoLabel}
                    </Link>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
