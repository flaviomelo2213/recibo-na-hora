import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODELOS, ALL_SLUGS } from '../data'
import { SEO_CITIES, CITY_SLUGS, getCityBySlug } from '@/_data/seoCities'
import { buildHowTo, buildFAQPage, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://recibonahora.com.br'

interface Props {
  params: { tipo: string; cidade: string }
}

export async function generateStaticParams() {
  const params: { tipo: string; cidade: string }[] = []
  for (const tipo of ALL_SLUGS) {
    for (const cidade of CITY_SLUGS) {
      params.push({ tipo, cidade })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelo = MODELOS[params.tipo]
  const city = getCityBySlug(params.cidade)
  if (!modelo || !city) return {}

  const title = `${modelo.h1} em ${city.name} — ${city.stateCode} | ReciboNaHora`
  const description = `${modelo.metaDescription.replace(/\.$/, '')} — disponível para ${city.name} (${city.state}). Gratuito, sem cadastro, gere em PDF.`
  const url = `${BASE}/modelo/${modelo.slug}/${city.slug}`

  return {
    title,
    description,
    keywords: [
      `${modelo.slug.replace(/-/g, ' ')} ${city.name.toLowerCase()}`,
      `${modelo.slug.replace(/-/g, ' ')} ${city.stateCode.toLowerCase()}`,
      `modelo ${modelo.slug.replace(/-/g, ' ')} ${city.name.toLowerCase()}`,
      modelo.slug.replace(/-/g, ' '),
    ],
    alternates: { canonical: url },
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

export default function ModeloCidadePage({ params }: Props) {
  const modelo = MODELOS[params.tipo]
  const city = getCityBySlug(params.cidade)
  if (!modelo || !city) notFound()

  const url = `${BASE}/modelo/${modelo.slug}/${city.slug}`
  const h1 = `${modelo.h1} em ${city.name} — ${city.stateCode}`

  const jsonLdHowTo = buildHowTo(
    h1,
    `${modelo.description} Disponível gratuitamente para ${city.name}, ${city.state}.`,
    modelo.requiredFields.map((f) => ({ name: f })),
    url,
  )

  const jsonLdFaq = buildFAQPage(modelo.faqs)

  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Modelos', url: `${BASE}/modelo/${modelo.slug}` },
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
            <Link href={`/modelo/${modelo.slug}`} className="hover:text-stone-900 truncate max-w-[180px]">{modelo.h1}</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{city.name}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <i className="fa-solid fa-location-dot text-amber-600" />
              {city.name} · {city.state}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              {h1}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">{modelo.description}</p>
          </header>

          {/* CTA */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-stone-700 text-sm mb-4 font-medium">
              Gere agora mesmo — preencha e baixe em PDF em segundos, grátis:
            </p>
            <Link
              href={modelo.toolHref}
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
            >
              {modelo.toolLabel}
              <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </section>

          <div className="space-y-10">
            {/* O que é */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">O que é?</h2>
              <p className="text-stone-700 leading-relaxed">{modelo.whatIs}</p>
              <p className="text-stone-700 leading-relaxed mt-3">
                Em {city.name}, {city.state}, este documento é amplamente utilizado e tem plena validade jurídica em todo o território nacional, incluindo cartórios, bancos e órgãos públicos locais.
              </p>
            </section>

            {/* Quando usar */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando usar em {city.name}?</h2>
              <ul className="space-y-2">
                {modelo.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Campos obrigatórios */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Campos obrigatórios</h2>
              <ol className="space-y-3">
                {modelo.requiredFields.map((field, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-stone-700">{field}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Validade em todo o Brasil */}
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
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes sobre {modelo.h1}</h2>
              <div className="space-y-5">
                {modelo.faqs.map(({ q, a }, i) => (
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
                {modelo.h1} em outras cidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {SEO_CITIES.filter((c) => c.slug !== city.slug)
                  .slice(0, 12)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/modelo/${modelo.slug}/${c.slug}`}
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
                  href={`/modelo/${modelo.slug}`}
                  className="inline-flex items-center gap-1.5 border border-stone-200 bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                >
                  {modelo.h1} (nacional)
                </Link>
                {modelo.relatedLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1.5 border border-stone-200 bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                  >
                    {label}
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
