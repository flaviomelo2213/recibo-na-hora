import { MetadataRoute } from 'next'

const BASE = 'https://recibonahora.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE}/ferramentas`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/recibos`,                 lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contratos`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/orcamentos`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/mei`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/educacao-financeira`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/apoio-corretor`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/requerimentos`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contato`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/sobre`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/parcerias`,               lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/como-ganhamos-dinheiro`,  lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/politica-privacidade`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/termos-uso`,              lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
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

  return [...staticPages, ...toolPages]
}
