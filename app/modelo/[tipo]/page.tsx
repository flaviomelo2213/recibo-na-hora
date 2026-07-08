import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MODELOS, ALL_SLUGS } from './data';
import { FORMATOS, FORMATO_DATA, parseFormatoFromSlug } from '@/_data/modeloFormats';
import { buildBreadcrumb, buildFAQPage, buildHowTo } from '@/lib/schema';

const BASE = 'https://www.recibonahora.com.br';

interface Props {
  params: { tipo: string };
}

// All static params: base slugs + format variants (skipping redundant combos)
export async function generateStaticParams() {
  const base = ALL_SLUGS.map((tipo) => ({ tipo }));
  const withFormat = ALL_SLUGS.flatMap((slug) =>
    FORMATOS
      .filter((fmt) => !slug.endsWith(`-${fmt}`)) // skip e.g. contrato-simples + simples
      .map((fmt) => ({ tipo: `${slug}-${fmt}` })),
  );
  return [...base, ...withFormat];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseFormatoFromSlug(params.tipo);

  if (parsed) {
    const modelo = MODELOS[parsed.base];
    if (!modelo) return {};
    const fmt = FORMATO_DATA[parsed.formato];
    const url = `${BASE}/modelo/${params.tipo}`;
    const title = `${modelo.title.replace(' | ReciboNaHora', '')} ${fmt.metaSuffix} | ReciboNaHora`;
    return {
      title,
      description: fmt.description,
      keywords: [
        `${modelo.slug.replace(/-/g, ' ')} ${fmt.shortLabel.toLowerCase()}`,
        `modelo ${modelo.slug.replace(/-/g, ' ')} ${fmt.shortLabel.toLowerCase()}`,
        `${modelo.slug.replace(/-/g, ' ')} ${fmt.extension}`,
        `baixar ${modelo.slug.replace(/-/g, ' ')} ${fmt.shortLabel.toLowerCase()}`,
      ],
      alternates: { canonical: url },
      openGraph: { title, description: fmt.description, url, type: 'article', locale: 'pt_BR', siteName: 'ReciboNaHora' },
      twitter: { card: 'summary', title, description: fmt.description },
    };
  }

  const modelo = MODELOS[params.tipo];
  if (!modelo) return {};
  const url = `${BASE}/modelo/${modelo.slug}`;
  return {
    title: modelo.title,
    description: modelo.metaDescription,
    keywords: [modelo.slug.replace(/-/g, ' '), `modelo ${modelo.slug.replace(/-/g, ' ')}`, `${modelo.slug.replace(/-/g, ' ')} gratis`, `${modelo.slug.replace(/-/g, ' ')} pdf`],
    alternates: { canonical: url },
    openGraph: { title: modelo.title, description: modelo.metaDescription, url, type: 'article', locale: 'pt_BR', siteName: 'ReciboNaHora' },
    twitter: { card: 'summary', title: modelo.title, description: modelo.metaDescription },
  };
}

// ─── Format variant page ─────────────────────────────────────────────────────

function FormatoPage({ tipo }: { tipo: string }) {
  const parsed = parseFormatoFromSlug(tipo)!;
  const modelo = MODELOS[parsed.base];
  if (!modelo) notFound();
  const fmt = FORMATO_DATA[parsed.formato];

  const url = `${BASE}/modelo/${tipo}`;
  const h1 = `${modelo.h1.replace(' Gratuito', '')} em ${fmt.label} — Grátis`;

  const jsonLdHowTo = buildHowTo(
    h1,
    fmt.description,
    fmt.howToSteps.map((s) => ({ name: s })),
    url,
  );
  const allFaqs = [...fmt.faqs, ...modelo.faqs.slice(0, 2)];
  const jsonLdFaq = buildFAQPage(allFaqs);
  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Modelos', url: `${BASE}/modelo` },
    { name: modelo.h1, url: `${BASE}/modelo/${parsed.base}` },
    { name: fmt.label, url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/modelo" className="hover:text-stone-900">Modelos</Link>
            <span>/</span>
            <Link href={`/modelo/${parsed.base}`} className="hover:text-stone-900 truncate max-w-[140px]">{modelo.h1}</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{fmt.label}</span>
          </nav>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-600 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <i className="fa-solid fa-file-arrow-down text-amber-600" />
              {fmt.label}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">{h1}</h1>
            <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-amber-400 pl-4">{fmt.intro}</p>
          </header>

          {/* CTA */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-stone-700 text-sm mb-4 font-medium">
              Gere o {modelo.h1.replace(' Gratuito', '')} agora — preencha e baixe em PDF em segundos:
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
            {/* How to use this format */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Como usar o modelo em {fmt.label}</h2>
              <ol className="space-y-3">
                {fmt.howToSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-stone-700">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Vantagens */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Vantagens do formato {fmt.shortLabel}</h2>
              <ul className="space-y-2">
                {fmt.vantagens.map((v, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Campos do documento */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">O que deve conter no documento</h2>
              <ol className="space-y-3">
                {modelo.requiredFields.map((field, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-stone-700">{field}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Comparação de formatos */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Comparação de formatos disponíveis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-stone-100">
                      <th className="text-left p-3 font-semibold text-stone-700 border border-stone-200">Formato</th>
                      <th className="text-left p-3 font-semibold text-stone-700 border border-stone-200">Ideal para</th>
                      <th className="text-left p-3 font-semibold text-stone-700 border border-stone-200">Editável?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FORMATOS.map((f) => (
                      <tr key={f} className={f === parsed.formato ? 'bg-amber-50 font-medium' : 'hover:bg-stone-50'}>
                        <td className="p-3 border border-stone-200">
                          {f === parsed.formato ? '★ ' : ''}{FORMATO_DATA[f].label}
                        </td>
                        <td className="p-3 border border-stone-200 text-stone-600">{FORMATO_DATA[f].description.split('.')[0]}</td>
                        <td className="p-3 border border-stone-200 text-stone-600">
                          {['word', 'excel', 'editavel'].includes(f) ? 'Sim' : 'Somente leitura'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {FORMATOS.filter((f) => f !== parsed.formato).map((f) => (
                  <Link
                    key={f}
                    href={`/modelo/${parsed.base}-${f}`}
                    className="inline-flex items-center gap-1 border border-stone-200 bg-stone-50 text-stone-600 px-3 py-1.5 rounded-lg text-sm hover:border-amber-400 hover:bg-amber-50 transition"
                  >
                    Ver em {FORMATO_DATA[f].label}
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {allFaqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-4">Links relacionados</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/modelo/${parsed.base}`}
                  className="inline-flex items-center gap-1.5 border border-stone-200 bg-stone-50 text-stone-700 px-4 py-2 rounded-xl text-sm font-medium hover:border-amber-400 hover:bg-amber-50 transition"
                >
                  {modelo.h1} (modelo base)
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
  );
}

// ─── Base modelo page ─────────────────────────────────────────────────────────

export default function ModeloPage({ params }: Props) {
  // If tipo has a format suffix, delegate to FormatoPage
  if (parseFormatoFromSlug(params.tipo)) {
    return <FormatoPage tipo={params.tipo} />;
  }

  const modelo = MODELOS[params.tipo];
  if (!modelo) notFound();

  const url = `${BASE}/modelo/${modelo.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: modelo.h1,
    description: modelo.description,
    url,
    step: modelo.requiredFields.map((field, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: field,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: modelo.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Modelos', url: `${BASE}/modelo` },
    { name: modelo.h1, url },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/modelo" className="hover:text-stone-900">Modelos</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium truncate">{modelo.h1}</span>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
              {modelo.h1}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">{modelo.description}</p>
          </header>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-stone-700 text-sm mb-4 font-medium">
              Use o gerador gratuito — preencha e baixe em PDF em segundos:
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
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">O que é?</h2>
              <p className="text-stone-700 leading-relaxed">{modelo.whatIs}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando usar?</h2>
              <ul className="space-y-2">
                {modelo.whenToUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

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

            {/* Formats navigation */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 mb-4">Outros formatos disponíveis</h2>
              <div className="flex flex-wrap gap-2">
                {FORMATOS.map((f) => (
                  <Link
                    key={f}
                    href={`/modelo/${modelo.slug}-${f}`}
                    className="inline-flex items-center gap-1 border border-stone-200 bg-stone-50 text-stone-600 px-3 py-1.5 rounded-lg text-sm hover:border-amber-400 hover:bg-amber-50 transition"
                  >
                    <i className="fa-solid fa-file text-xs" />
                    {FORMATO_DATA[f].label}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
              <div className="space-y-5">
                {modelo.faqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-stone-200 pb-5">
                    <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Links relacionados</h2>
              <div className="flex flex-wrap gap-3">
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
  );
}
