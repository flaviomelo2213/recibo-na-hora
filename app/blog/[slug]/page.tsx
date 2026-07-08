import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, ALL_BLOG_SLUGS, type BlogSection } from '@/_data/blogPosts'
import { buildArticle, buildFAQPage, buildBreadcrumb } from '@/lib/schema'

const BASE = 'https://www.recibonahora.com.br'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ALL_BLOG_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug]
  if (!post) return {}
  const url = `${BASE}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'ReciboNaHora',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case 'text':
      return <p key={idx} className="text-stone-700 leading-relaxed">{section.content}</p>

    case 'h3':
      return <h3 key={idx} className="text-xl font-bold text-stone-900 mt-6 mb-3">{section.content}</h3>

    case 'list':
      return (
        <ul key={idx} className="space-y-2 my-3">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-700">
              <span className="text-amber-500 mt-0.5 font-bold flex-shrink-0">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol key={idx} className="space-y-3 my-3">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                {i + 1}
              </span>
              <span className="text-stone-700">{item}</span>
            </li>
          ))}
        </ol>
      )

    case 'callout': {
      const variantMap: Record<string, string> = {
        success: 'bg-green-50 border-green-400 text-green-900',
        warning: 'bg-amber-50 border-amber-400 text-amber-900',
        info:    'bg-blue-50 border-blue-400 text-blue-900',
        amber:   'bg-amber-50 border-amber-500 text-amber-900',
      }
      const iconMap: Record<string, string> = {
        success: 'fa-circle-check text-green-600',
        warning: 'fa-triangle-exclamation text-amber-600',
        info:    'fa-circle-info text-blue-600',
        amber:   'fa-lightbulb text-amber-600',
      }
      const v = section.variant ?? 'info'
      return (
        <div key={idx} className={`border-l-4 rounded-r-xl p-5 my-4 ${variantMap[v]}`}>
          {section.title && (
            <p className="font-bold flex items-center gap-2 mb-2">
              <i className={`fa-solid ${iconMap[v]}`} />
              {section.title}
            </p>
          )}
          <p className="text-sm text-stone-800 leading-relaxed">{section.content}</p>
        </div>
      )
    }

    case 'table': {
      const rows = section.rows ?? []
      if (rows.length === 0) return null
      const [header, ...body] = rows
      return (
        <div key={idx} className="overflow-x-auto my-4 rounded-xl border border-stone-200">
          <table className="w-full text-sm">
            <thead className="bg-stone-100">
              <tr>
                {header.map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-stone-900 whitespace-nowrap">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-stone-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    default:
      return null
  }
}

export default function BlogSlugPage({ params }: Props) {
  const post = BLOG_POSTS[params.slug]
  if (!post) notFound()

  const url = `${BASE}/blog/${post.slug}`

  const jsonLdArticle = buildArticle({
    title: post.title,
    description: post.description,
    url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  })

  const jsonLdFaq = buildFAQPage(post.faqs)

  const jsonLdBreadcrumb = buildBreadcrumb([
    { name: 'Início', url: BASE },
    { name: 'Blog', url: `${BASE}/blog` },
    { name: post.title, url },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <main className="bg-white min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-stone-500 mb-8">
            <Link href="/" className="hover:text-stone-900">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-stone-900">Blog</Link>
            <span>/</span>
            <span className="text-stone-900 font-medium truncate max-w-[200px]">{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-stone-400 text-sm">
                <i className="fa-regular fa-clock mr-1" />{post.readTime} de leitura
              </span>
              <span className="text-stone-400 text-sm">
                <i className="fa-regular fa-calendar mr-1" />
                {new Date(post.datePublished).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-amber-400 pl-4">
              {post.intro}
            </p>
          </header>

          {/* Article body */}
          <article className="space-y-10">
            {post.sections.map((section, si) => (
              <section key={si}>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.h2}</h2>
                <div className="space-y-3">
                  {section.content.map((block, bi) => renderSection(block, bi))}
                </div>
              </section>
            ))}
          </article>

          {/* Tools CTA */}
          {post.relatedTools.length > 0 && (
            <section className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4">
                <i className="fa-solid fa-bolt text-amber-600 mr-2" />
                Ferramentas gratuitas relacionadas
              </h2>
              <div className="flex flex-wrap gap-3">
                {post.relatedTools.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-700 transition"
                  >
                    {label}
                    <i className="fa-solid fa-arrow-right text-xs" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Perguntas frequentes</h2>
            <div className="space-y-5">
              {post.faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-stone-200 pb-5">
                  <h3 className="font-semibold text-stone-900 mb-2">{q}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related posts */}
          {post.relatedPosts.length > 0 && (
            <section className="mt-12 border-t border-stone-200 pt-10">
              <h2 className="text-xl font-bold text-stone-900 mb-5">Leia também</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {post.relatedPosts.map(({ slug, title }) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="block border border-stone-200 bg-stone-50 rounded-xl p-4 hover:border-amber-400 hover:bg-amber-50 transition group"
                  >
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-amber-700 leading-snug">{title}</p>
                    <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                      Ler artigo <i className="fa-solid fa-arrow-right text-[10px]" />
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-stone-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm font-medium transition">
              <i className="fa-solid fa-arrow-left text-xs" />
              Voltar ao Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
