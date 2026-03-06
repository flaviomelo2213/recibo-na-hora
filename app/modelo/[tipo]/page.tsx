import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MODELOS, ALL_SLUGS } from './data';

interface Props {
  params: { tipo: string };
}

export async function generateStaticParams() {
  return ALL_SLUGS.map((tipo) => ({ tipo }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const modelo = MODELOS[params.tipo];
  if (!modelo) return {};
  return {
    title: modelo.title,
    description: modelo.metaDescription,
    alternates: { canonical: `https://recibonahora.com.br/modelo/${modelo.slug}` },
    openGraph: {
      title: modelo.title,
      description: modelo.metaDescription,
      url: `https://recibonahora.com.br/modelo/${modelo.slug}`,
    },
  };
}

export default function ModeloPage({ params }: Props) {
  const modelo = MODELOS[params.tipo];
  if (!modelo) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: modelo.h1,
    description: modelo.description,
    url: `https://recibonahora.com.br/modelo/${modelo.slug}`,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/ferramentas" className="hover:text-stone-900">Ferramentas</Link>
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
