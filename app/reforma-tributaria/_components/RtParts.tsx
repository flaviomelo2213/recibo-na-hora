import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { FONTES_OFICIAIS, PAGINAS_RT, RT_ATUALIZADO_EM } from '@/_config/reformaTributaria';

export interface Faq { q: string; a: string }

export function RtHero({ titulo, intro, crumb, semCta = false }: { titulo: string; intro: string; crumb: string; semCta?: boolean }) {
  const items = [
    { label: 'Início', href: '/' },
    ...(crumb === 'Reforma Tributária' ? [{ label: 'Reforma Tributária' }] : [{ label: 'Reforma Tributária', href: '/reforma-tributaria' }, { label: crumb }]),
  ];
  return (
    <header className="article-hero mb-8">
      <Breadcrumb className="mb-6" items={items} />
      <p className="text-xs font-medium text-stone-500 mb-3">Atualizado em {RT_ATUALIZADO_EM}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">{titulo}</h1>
      <p className="mt-4 text-lg leading-relaxed text-stone-600">{intro}</p>
      {!semCta && (
        <Link
          href="/reforma-tributaria/calculadora"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 px-5 py-2.5 font-semibold text-stone-900 transition-colors"
        >
          <i className="fa-solid fa-calculator" /> Calcular agora
        </Link>
      )}
    </header>
  );
}

export function RtFaq({ faq }: { faq: Faq[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className="mt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="text-2xl font-bold text-stone-900 mb-4">Perguntas frequentes</h2>
      <div className="space-y-3">
        {faq.map((f) => (
          <details key={f.q} className="ml-card p-4">
            <summary className="cursor-pointer font-semibold text-stone-900">{f.q}</summary>
            <p className="mt-2 text-stone-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RtRodape({ atual }: { atual: string }) {
  const outras = PAGINAS_RT.filter((p) => p.href !== atual).slice(0, 3);
  return (
    <>
      <section className="mt-12 border-t border-dashed border-stone-300 pt-8">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Leia também</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[{ href: '/reforma-tributaria', titulo: 'Reforma Tributária: guia completo', resumo: 'O que muda para consumidor, MEI, Simples e quem aluga imóvel.' }, ...outras]
            .filter((p) => p.href !== atual)
            .slice(0, 3)
            .map((p) => (
              <Link key={p.href} href={p.href} className="ml-card p-4 block">
                <p className="font-semibold text-stone-900">{p.titulo}</p>
                <p className="mt-1 text-sm text-stone-600">{p.resumo}</p>
              </Link>
            ))}
        </div>
      </section>
      <section className="mt-10 text-sm text-stone-600">
        <h2 className="text-base font-bold text-stone-900 mb-2">Fontes oficiais</h2>
        <ul className="space-y-1">
          {FONTES_OFICIAIS.map((f) => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">{f.nome}</a>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          Conteúdo informativo. Para decisões da sua empresa, consulte um contador. Os números marcados como previstos
          ou propostos ainda podem mudar.
        </p>
      </section>
    </>
  );
}
