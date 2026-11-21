'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  AFFILIATE_PRODUCTS,
  CATEGORY_META,
  PLATFORM_META,
  type Category,
} from '@/_data/affiliateProducts';

const CATEGORY_ORDER = Object.keys(CATEGORY_META) as Category[];

export default function RecursosClient() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return AFFILIATE_PRODUCTS.filter((p) => {
      const matchesSearch =
        !q || p.title.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categories: Array<{ value: Category | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    ...CATEGORY_ORDER.filter((c) => AFFILIATE_PRODUCTS.some((p) => p.category === c)).map((c) => ({
      value: c,
      label: CATEGORY_META[c].label,
    })),
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-20 text-center">
          <span className="inline-block bg-amber-500 text-stone-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Recursos Recomendados
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
            Ferramentas e Cursos para Autônomos e Empreendedores
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-8">
            Selecionamos os melhores recursos digitais para quem trabalha por conta própria.
            Planilhas, cursos, sistemas e guias — tudo em um lugar só.
          </p>
          <p className="text-xs text-stone-400">
            ⚠️ Os links desta página são de afiliados. Recebemos comissão se você comprar, sem custo extra para você.{' '}
            <a href="/como-ganhamos-dinheiro" className="underline hover:text-stone-200">
              Saiba mais
            </a>
          </p>
        </div>
      </section>

      {/* Produto próprio em destaque */}
      <section className="container mx-auto max-w-6xl px-4 -mt-8 relative z-10">
        <a
          href="https://guiadocontribuinte.com.br/destrave-seu-cnis"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row md:items-center gap-5 rounded-2xl bg-white border-2 border-amber-300 hover:border-amber-500 shadow-xl shadow-stone-900/10 p-6 transition-colors"
        >
          <div className="flex-1">
            <span className="inline-block text-xs font-bold uppercase tracking-wide text-amber-700 bg-amber-100 rounded-full px-3 py-1 mb-2">
              Produto do ReciboNaHora
            </span>
            <p className="text-xl md:text-2xl font-bold text-stone-900">
              Guia Visual: Destrave Seu CNIS + Gerador de Requerimentos
            </p>
            <p className="text-stone-600 mt-1">
              10 módulos visuais, 5 geradores automáticos e prompt de IA para resolver pendências no INSS.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 group-hover:bg-amber-400 px-6 py-3 font-bold text-stone-900 whitespace-nowrap transition-colors">
            Conhecer o guia • R$ 29,90
          </span>
        </a>
      </section>

      {/* Filtros */}
      <section className="sticky top-20 z-30 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 mt-10">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="relative max-w-md mb-4">
            <input
              type="search"
              placeholder="Buscar recursos..."
              aria-label="Buscar recursos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-stone-900 text-white'
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contagem */}
      <div className="container mx-auto max-w-6xl px-4 pt-6 pb-3">
        <p className="text-sm text-stone-500">
          {filtered.length} recurso{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grade de produtos */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-stone-600 font-medium">Nenhum recurso encontrado.</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="mt-4 text-amber-600 hover:underline text-sm"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const catMeta = CATEGORY_META[product.category];
              const platMeta = PLATFORM_META[product.platform];
              return (
                <a
                  key={product.id}
                  href={product.url}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[4/3] bg-stone-100 border-b border-stone-200 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={`Capa do produto ${product.title}`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
                        {catMeta.label}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catMeta.bgClass} ${catMeta.textClass}`}>
                        {catMeta.label}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${platMeta.colorClass}`}>
                        {platMeta.label}
                      </span>
                      {product.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-700">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-stone-900 text-base leading-snug mb-2 group-hover:text-amber-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed flex-1">{product.shortDescription}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-dashed border-stone-200 pt-4">
                      <span className="text-xs text-stone-400">Página de vendas oficial</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
                        Ver produto <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>

      {/* FAQ / AEO */}
      <section className="bg-white border-t border-stone-200 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Perguntas Frequentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Os links desta página são seguros?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Sim. Todos os links levam à página de vendas oficial de cada produto, por meio da plataforma Hotmart.
                Cada link abre em nova aba com <code className="bg-stone-100 px-1 rounded">rel=&quot;noopener noreferrer&quot;</code>.
                São links de afiliado: recebemos comissão se você adquirir o produto, sem custo extra para você.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Como os recursos são selecionados?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Priorizamos recursos relevantes para o público do ReciboNaHora: autônomos, MEIs, freelancers e
                pequenos negócios que precisam de organização financeira, sistemas de gestão e qualificação profissional.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Posso usar os geradores do site sem comprar nada?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Sim. Todos os geradores de documentos do ReciboNaHora são 100% gratuitos e funcionam sem cadastro.
                A página de Recursos reúne indicações de produtos externos que podem complementar o que oferecemos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
