'use client';

import { useState, useMemo } from 'react';
import { AFFILIATE_PRODUCTS, CATEGORY_META, PLATFORM_META, type Category, type Platform } from '@/_data/affiliateProducts';

export default function RecursosClient() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activePlatform, setActivePlatform] = useState<Platform | 'all'>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return AFFILIATE_PRODUCTS.filter((p) => {
      const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesPlatform = activePlatform === 'all' || p.platform === activePlatform;
      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [search, activeCategory, activePlatform]);

  const categories: Array<{ value: Category | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    { value: 'documentos', label: 'Documentos' },
    { value: 'mei-financeiro', label: 'MEI & Financeiro' },
    { value: 'imoveis', label: 'Imóveis' },
    { value: 'carreira', label: 'Carreira' },
    { value: 'tecnologia', label: 'Tecnologia' },
    { value: 'comunidade', label: 'Comunidade' },
  ];

  const platforms: Array<{ value: Platform | 'all'; label: string }> = [
    { value: 'all', label: 'Todas as plataformas' },
    { value: 'hotmart', label: 'Hotmart' },
    { value: 'kiwify', label: 'Kiwify' },
    { value: 'monetizze', label: 'Monetizze' },
    { value: 'telegram', label: 'Telegram' },
  ];

  const catColorMap: Record<Category, string> = {
    documentos: 'bg-blue-500',
    'mei-financeiro': 'bg-green-500',
    imoveis: 'bg-orange-500',
    carreira: 'bg-purple-500',
    tecnologia: 'bg-cyan-500',
    comunidade: 'bg-pink-500',
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-stone-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-amber-500 text-stone-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Recursos Recomendados
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Ferramentas e Cursos para Autônomos e Empreendedores
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-8">
            Selecionamos os melhores recursos digitais para quem trabalha por conta própria.
            Contratos, cursos, planilhas e comunidades — tudo em um lugar só.
          </p>
          <p className="text-xs text-stone-500">
            ⚠️ Alguns links são de afiliados. Recebemos comissão se você comprar, sem custo extra para você.{' '}
            <a href="/como-ganhamos-dinheiro" className="underline hover:text-stone-300">
              Saiba mais
            </a>
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="mb-4">
            <div className="relative max-w-md">
              <input
                type="search"
                placeholder="Buscar recursos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-stone-50"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                <i className="fa-solid fa-magnifying-glass text-sm" />
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-stone-400 uppercase tracking-wide font-semibold">Plataforma:</span>
            {platforms.map((plat) => (
              <button
                key={plat.value}
                onClick={() => setActivePlatform(plat.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                  activePlatform === plat.value
                    ? 'bg-amber-500 text-stone-900 border-amber-500'
                    : 'bg-white text-stone-500 border-stone-300 hover:border-stone-400'
                }`}
              >
                {plat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="container mx-auto max-w-6xl px-4 pt-6 pb-2">
        <p className="text-sm text-stone-500">
          {filtered.length} recurso{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid */}
      <section className="container mx-auto max-w-6xl px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-stone-600 font-medium">Nenhum recurso encontrado.</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('all'); setActivePlatform('all'); }}
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
                  <div className={`h-2 ${catColorMap[product.category]}`} />
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
                    <p className="text-stone-500 text-sm leading-relaxed flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-stone-400">Link externo</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
                        Ver recurso <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
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
                Sim. Todos os links levam a plataformas reconhecidas (Hotmart, Kiwify, Monetizze e Telegram).
                Cada link abre em nova aba com <code className="bg-stone-100 px-1 rounded">rel=&quot;noopener noreferrer&quot;</code>.
                Alguns são links de afiliado: recebemos comissão se você adquirir o produto, sem custo extra para você.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Como os recursos são selecionados?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Priorizamos recursos relevantes para o público do ReciboNaHora: autônomos, MEIs, freelancers e
                profissionais que precisam de documentos, contratos e educação financeira.
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
