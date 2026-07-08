import { MetadataRoute } from 'next'
import { ALL_SLUGS } from './modelo/[tipo]/data'
import { SEO_CITIES } from './_data/seoCities'
import { ALL_BLOG_SLUGS } from './_data/blogPosts'
import { ALL_PROFISSAO_SLUGS } from './_data/profissoes'
import { ALL_GUIA_SLUGS } from './_data/guias'
import { ALL_PERGUNTA_SLUGS } from './_data/perguntas'
import { ALL_COMPARACAO_SLUGS } from './_data/comparacoes'
import { FORMATOS } from './_data/modeloFormats'

const BASE = 'https://www.recibonahora.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE}/ferramentas`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/recibos`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contratos`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/orcamentos`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/mei`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/recursos`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/educacao-financeira`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/apoio-corretor`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/requerimentos`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contato`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/sobre`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/parcerias`,               lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/como-ganhamos-dinheiro`,  lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/politica-privacidade`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/termos-uso`,              lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/politica-editorial`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/mapa-de-perguntas`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
  ]

  const toolPages: MetadataRoute.Sitemap = [
    '/ferramentas/recibo-simples',
    '/ferramentas/recibo-pix',
    '/ferramentas/imobiliario',
    '/ferramentas/recibo-rpa',
    '/ferramentas/orcamento',
    '/ferramentas/procuracao',
    '/ferramentas/procuracao-plenos-poderes',
    '/ferramentas/procuracao-inss',
    '/ferramentas/procuracao-bancaria',
    '/ferramentas/procuracao-imoveis',
    '/ferramentas/procuracao-profissional',
    '/ferramentas/nota-promissoria',
    '/ferramentas/contrato-completo',
    '/ferramentas/calculadora-rescisao',
    '/ferramentas/mei-relatorio',
    '/ferramentas/curriculo-profissional',
    '/ferramentas/vale-transporte',
    '/ferramentas/autorizacao-viagem',
    '/ferramentas/prefeitura',
    '/contrato-locacao',
    '/gerar/recibo-salario',
    '/gerar/venda-veiculo',
    '/requerimentos/declaracao-endereco',
    '/requerimentos/itbi-modelo',
    '/requerimentos/lai-pedido',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Base modelo pages (index + 15 tipos)
  const modeloBasePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/modelo`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...ALL_SLUGS.map((slug) => ({
      url: `${BASE}/modelo/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  // Geo modelo pages (modelo/[tipo]/[cidade]) removidas do sitemap: noindex temporário
  // aplicado (ver app/modelo/[tipo]/[cidade]/page.tsx) por serem quase-duplicatas sem
  // link interno. Reintroduzir aqui somente após enriquecimento real de conteúdo.
  const modeloGeoPages: MetadataRoute.Sitemap = []

  // Static blog posts (directories)
  const blogStaticPages: MetadataRoute.Sitemap = [
    '/blog/como-fazer-recibo',
    '/blog/recibo-tem-validade-legal',
    '/blog/diferenca-recibo-nota-fiscal',
    '/blog/estrategia-vencedora-consorcio',
    '/blog/guia-lance-embutido',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog posts (from blogPosts.ts)
  const blogDynamicPages: MetadataRoute.Sitemap = ALL_BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Profissoes base pages (30)
  const profissoesBasePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/profissoes`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...ALL_PROFISSAO_SLUGS.map((slug) => ({
      url: `${BASE}/profissoes/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Profissoes geo pages (30 profissoes × 27 capitais = 810)
  const capitals = SEO_CITIES.slice(0, 27)
  const profissoesGeoPages: MetadataRoute.Sitemap = ALL_PROFISSAO_SLUGS.flatMap((profissao) =>
    capitals.map((city) => ({
      url: `${BASE}/profissoes/${profissao}/${city.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  )

  // Guias pages (8)
  const guiasPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/guias`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...ALL_GUIA_SLUGS.map((slug) => ({
      url: `${BASE}/guias/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Perguntas pages (20 Q&A + index)
  const perguntasPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/perguntas`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...ALL_PERGUNTA_SLUGS.map((slug) => ({
      url: `${BASE}/perguntas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Comparacoes pages (5 + index)
  const comparacoesPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/comparacoes`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...ALL_COMPARACAO_SLUGS.map((slug) => ({
      url: `${BASE}/comparacoes/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Modelo format variant pages (15 tipos × 5 formatos, minus redundant combos)
  const modeloFormatPages: MetadataRoute.Sitemap = ALL_SLUGS.flatMap((tipo) =>
    FORMATOS
      .filter((fmt) => !tipo.endsWith(`-${fmt}`))
      .map((fmt) => ({
        url: `${BASE}/modelo/${tipo}-${fmt}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
  )

  return [
    ...staticPages,
    ...toolPages,
    ...modeloBasePages,
    ...modeloGeoPages,
    ...modeloFormatPages,
    ...blogStaticPages,
    ...blogDynamicPages,
    ...profissoesBasePages,
    ...profissoesGeoPages,
    ...guiasPages,
    ...perguntasPages,
    ...comparacoesPages,
  ]
}
