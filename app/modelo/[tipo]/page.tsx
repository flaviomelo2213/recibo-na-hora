import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MODELOS, ALL_SLUGS } from './data';
import { MODELO_DETALHES, type ModeloDetalhe } from './detalhes';
import { FORMATOS, FORMATO_DATA, parseFormatoFromSlug } from '@/_data/modeloFormats';
import { buildBreadcrumb } from '@/lib/schema';

const BASE = 'https://www.recibonahora.com.br';

interface Props {
  params: { tipo: string };
}

// Slugs estáticos: páginas-base + variantes de formato.
//
// As variantes continuam sendo geradas para não quebrar links externos e
// históricos de indexação, mas são `noindex, follow` com canonical apontando
// para a página-base e foram removidas do sitemap (ver app/sitemap.ts).
export async function generateStaticParams() {
  const base = ALL_SLUGS.map((tipo) => ({ tipo }));
  const withFormat = ALL_SLUGS.flatMap((slug) =>
    FORMATOS
      .filter((fmt) => !slug.endsWith(`-${fmt}`)) // evita contrato-simples + "simples"
      .map((fmt) => ({ tipo: `${slug}-${fmt}` })),
  );
  return [...base, ...withFormat];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Um slug completo em MODELOS é sempre a página-base, mesmo que "pareça"
  // terminar em sufixo de formato (ex: contrato-simples vs. formato "simples").
  const modelo = MODELOS[params.tipo];

  if (!modelo) {
    const parsed = parseFormatoFromSlug(params.tipo);
    if (parsed) {
      const baseModelo = MODELOS[parsed.base];
      if (!baseModelo) return {};
      const fmt = FORMATO_DATA[parsed.formato];
      // Canonical para a página-base: a variante não deve competir no índice.
      const canonical = `${BASE}/modelo/${parsed.base}`;
      return {
        title: `${baseModelo.title.replace(' | ReciboNaHora', '')} — ${fmt.label} | ReciboNaHora`,
        description: baseModelo.metaDescription,
        alternates: { canonical },
        robots: { index: false, follow: true },
      };
    }
    return {};
  }

  const url = `${BASE}/modelo/${modelo.slug}`;
  return {
    title: modelo.title,
    description: modelo.metaDescription,
    keywords: [
      modelo.slug.replace(/-/g, ' '),
      `modelo ${modelo.slug.replace(/-/g, ' ')}`,
      `${modelo.slug.replace(/-/g, ' ')} gratis`,
      `${modelo.slug.replace(/-/g, ' ')} pdf`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: modelo.title,
      description: modelo.metaDescription,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
    },
    twitter: { card: 'summary', title: modelo.title, description: modelo.metaDescription },
  };
}

// ─── Blocos reutilizados pela página-base e pela variante de formato ──────────

function ListaChecada({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2">
      {itens.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-stone-700">
          <span className="text-amber-500 mt-0.5 font-bold">&#10003;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListaNumerada({ itens, tom = 'escuro' }: { itens: string[]; tom?: 'escuro' | 'claro' }) {
  const badge =
    tom === 'escuro' ? 'bg-stone-900 text-white' : 'bg-amber-100 text-amber-800';
  return (
    <ol className="space-y-3">
      {itens.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span
            className={`flex-shrink-0 w-6 h-6 ${badge} rounded-full flex items-center justify-center text-xs font-bold mt-0.5`}
          >
            {i + 1}
          </span>
          <span className="text-stone-700">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/**
 * Nota de formato — versão curta, usada nas 15 páginas-base.
 *
 * Substitui o bloco longo da Fase 4A (≈130 palavras replicadas em todas as
 * páginas). O detalhamento por formato continua existindo, mas só onde é o
 * assunto da página: nas variantes /modelo/{tipo}-{formato}, que renderizam
 * `FORMATO_DATA[...].comoObter`.
 *
 * Fonte da verdade sobre o que a plataforma entrega: app/_data/modeloFormats.ts
 * (campo `disponivel`). Se algum dia houver exportação .docx ou .xlsx, esta
 * frase precisa ser atualizada junto.
 */
function FormatoResumo() {
  return (
    <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-5">
      <strong className="text-stone-800">Formato:</strong> este gerador produz o documento em PDF
      — você preenche no navegador e baixa o arquivo pronto. Não há exportação nativa para Word
      (.docx) nem para Excel (.xlsx).
    </p>
  );
}

/** Corpo editorial do documento — idêntico na página-base e na variante. */
function CorpoModelo({
  modelo,
  detalhe,
}: {
  modelo: (typeof MODELOS)[string];
  detalhe?: ModeloDetalhe;
}) {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">O que é?</h2>
        <p className="text-stone-700 leading-relaxed">{modelo.whatIs}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando usar?</h2>
        <ListaChecada itens={modelo.whenToUse} />
      </section>

      {detalhe && (
        <section>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Quando não usar</h2>
          <ul className="space-y-2">
            {detalhe.quandoNaoUsar.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-stone-700">
                <span className="text-stone-400 mt-0.5 font-bold">&times;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Campos obrigatórios</h2>
        <ListaNumerada itens={modelo.requiredFields} />
      </section>

      {detalhe && (
        <>
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Erros comuns no preenchimento</h2>
            <ListaNumerada itens={detalhe.errosComuns} tom="claro" />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Quem assina</h2>
            <p className="text-stone-700 leading-relaxed">{detalhe.assinatura}</p>
          </section>

          <section className="bg-stone-50 border border-stone-200 rounded-xl p-5">
            <h2 className="text-lg font-bold text-stone-900 mb-2">Limitações deste documento</h2>
            <p className="text-stone-700 text-sm leading-relaxed">{detalhe.limitacoes}</p>
            {detalhe.baseLegal && (
              <p className="text-stone-600 text-sm leading-relaxed mt-3 pt-3 border-t border-stone-200">
                <strong className="text-stone-800">Base legal:</strong> {detalhe.baseLegal}
              </p>
            )}
          </section>
        </>
      )}

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
  );
}

function CtaFerramenta({
  modelo,
  mostrarFormato = true,
}: {
  modelo: (typeof MODELOS)[string];
  /** false na variante de formato, que já traz a nota específica do formato */
  mostrarFormato?: boolean;
}) {
  return (
    <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
      <p className="text-stone-700 text-sm mb-4 font-medium">
        Use o gerador gratuito — preencha no navegador e baixe o PDF:
      </p>
      <Link
        href={modelo.toolHref}
        className="inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
      >
        {modelo.toolLabel}
        <i className="fa-solid fa-arrow-right text-sm" />
      </Link>
      {mostrarFormato && (
        <div className="mt-5">
          <FormatoResumo />
        </div>
      )}
    </section>
  );
}

// ─── Variante de formato (noindex, canonical → página-base) ───────────────────
//
// Mantida acessível por compatibilidade. Renderiza o conteúdo real do documento,
// sem o texto genérico de recibo que antes era herdado por todos os tipos, e sem
// JSON-LD, para não duplicar sinais de rich result de uma URL noindex.

function FormatoPage({ tipo }: { tipo: string }) {
  const parsed = parseFormatoFromSlug(tipo)!;
  const modelo = MODELOS[parsed.base];
  if (!modelo) notFound();
  const fmt = FORMATO_DATA[parsed.formato];
  const detalhe = MODELO_DETALHES[parsed.base];

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8"
        >
          <Link href="/" className="hover:text-stone-900">Início</Link>
          <span>/</span>
          <Link href="/modelo" className="hover:text-stone-900">Modelos</Link>
          <span>/</span>
          <Link href={`/modelo/${parsed.base}`} className="hover:text-stone-900">
            {modelo.h1}
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
            {modelo.h1}
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">{modelo.description}</p>
        </header>

        <div className="border-l-4 border-stone-300 bg-stone-50 rounded-r-xl p-5 mb-10">
          <p className="text-stone-700 text-sm leading-relaxed">
            <strong className="text-stone-900">Sobre o formato {fmt.label}:</strong>{' '}
            {fmt.comoObter}
          </p>
          <Link
            href={`/modelo/${parsed.base}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-800 mt-3"
          >
            Ver a página completa do {modelo.h1.toLowerCase()}
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>

        <CtaFerramenta modelo={modelo} mostrarFormato={false} />
        <CorpoModelo modelo={modelo} detalhe={detalhe} />
      </div>
    </main>
  );
}

// ─── Página-base ──────────────────────────────────────────────────────────────

export default function ModeloPage({ params }: Props) {
  // Slug completo em MODELOS sempre vence (mesmo racional de generateMetadata).
  const modelo = MODELOS[params.tipo];

  if (!modelo) {
    if (parseFormatoFromSlug(params.tipo)) {
      return <FormatoPage tipo={params.tipo} />;
    }
    notFound();
  }

  const url = `${BASE}/modelo/${modelo.slug}`;
  const detalhe = MODELO_DETALHES[modelo.slug];

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
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-stone-500 mb-8"
          >
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

          <CtaFerramenta modelo={modelo} />
          <CorpoModelo modelo={modelo} detalhe={detalhe} />
        </div>
      </main>
    </>
  );
}
