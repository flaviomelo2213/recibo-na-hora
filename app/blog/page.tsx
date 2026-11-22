import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/_data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog sobre Documentos, Recibos e Finanças para Autônomos | ReciboNaHora',
  description:
    'Artigos práticos sobre recibos, contratos, MEI e educação financeira. Saiba como fazer documentos, entender validade jurídica e organizar seu negócio.',
  alternates: {
    canonical: 'https://www.recibonahora.com.br/blog',
  },
  openGraph: {
    title: 'Blog | ReciboNaHora',
    description: 'Artigos sobre recibos, contratos, MEI e finanças para autônomos e pequenos negócios.',
    url: 'https://www.recibonahora.com.br/blog',
    images: [{ url: "https://www.recibonahora.com.br/opengraph-image", width: 1200, height: 630, alt: "ReciboNaHora - Gerador gratuito de recibos e documentos" }],
  },
};

const staticPosts = [
  {
    slug: 'como-fazer-recibo',
    title: 'Como Fazer um Recibo: Guia Completo Passo a Passo',
    description: 'Aprenda o que é um recibo, quais campos são obrigatórios, modelos prontos e como gerar online grátis.',
    date: '2026-02-20',
    category: 'Recibos',
    readTime: '6 min',
  },
  {
    slug: 'estrategia-vencedora-consorcio',
    title: 'Educação Financeira: Estratégia de Crédito para Capital de Giro',
    description: 'Como substituir empréstimos caros por alternativas com custos previsíveis e alavancar seu negócio.',
    date: '2026-02-06',
    category: 'Finanças',
    readTime: '8 min',
  },
  {
    slug: 'guia-lance-embutido',
    title: 'Guia do Lance Embutido no Consórcio Imobiliário',
    description: 'Entenda como funciona o lance embutido, vantagens e como calcular se vale a pena na sua situação.',
    date: '2026-02-10',
    category: 'Imóveis',
    readTime: '7 min',
  },
];

// Todos os posts: os do blogPosts.ts (rota dinâmica) + os estáticos acima.
// Antes só os estáticos eram listados, e os posts dinâmicos ficavam sem link a partir do blog.
const posts = [
  ...Object.values(BLOG_POSTS).map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.datePublished,
    category: p.category,
    readTime: p.readTime,
  })),
  ...staticPosts,
].sort((a, b) => (a.category === 'Finanças' || a.category === 'Imóveis' ? 1 : 0) - (b.category === 'Finanças' || b.category === 'Imóveis' ? 1 : 0) || b.date.localeCompare(a.date));

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog ReciboNaHora',
  url: 'https://www.recibonahora.com.br/blog',
  description: 'Artigos sobre recibos, contratos, MEI e educação financeira para autônomos e pequenos negócios.',
  publisher: {
    '@type': 'Organization',
    name: 'ReciboNaHora',
    url: 'https://www.recibonahora.com.br',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <main className="min-h-screen bg-stone-50">
        <section className="page-shell py-14 px-4">
          <div className="page-hero container mx-auto max-w-4xl text-center">
            <span className="inline-block bg-amber-100 text-amber-800 ring-1 ring-amber-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
              Documentos, Finanças e Direito para Autônomos
            </h1>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Artigos práticos sobre recibos, contratos, MEI e educação financeira.
              Conteúdo gratuito para quem trabalha por conta própria.
            </p>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-12">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all p-6 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-stone-400">{post.readTime} de leitura</span>
                    <time className="text-xs text-stone-400" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                  <h2 className="font-bold text-stone-900 text-lg leading-snug mb-2 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed">{post.description}</p>
                </div>
                <div className="self-center shrink-0 text-amber-500 group-hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-arrow-right text-xl" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white border-t border-stone-200 py-10 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-stone-900 text-lg mb-2">Gere seus documentos gratuitamente</h2>
            <p className="text-stone-500 text-sm mb-6">
              Recibos, contratos, procurações e orçamentos em PDF. Sem cadastro.
            </p>
            <Link
              href="/ferramentas"
              className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"
            >
              Ver todas as ferramentas
              <i className="fa-solid fa-arrow-right text-sm" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
