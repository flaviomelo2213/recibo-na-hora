/** Labels and metadata for each document type slug used in /modelo/[tipo] */
export interface DocumentType {
  slug: string
  label: string
  category: 'recibo' | 'contrato' | 'procuracao' | 'declaracao' | 'outros'
  toolHref: string
}

export const DOCUMENT_TYPES: DocumentType[] = [
  // Recibos
  { slug: 'recibo-aluguel',             label: 'Recibo de Aluguel',               category: 'recibo',      toolHref: '/ferramentas/imobiliario' },
  { slug: 'recibo-autonomo',            label: 'Recibo de Autônomo (RPA)',         category: 'recibo',      toolHref: '/ferramentas/recibo-rpa' },
  { slug: 'recibo-prestacao-servico',   label: 'Recibo de Prestação de Serviço',  category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  { slug: 'recibo-pagamento',           label: 'Recibo de Pagamento',             category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  { slug: 'recibo-pix',                 label: 'Recibo de Pagamento via PIX',     category: 'recibo',      toolHref: '/ferramentas/recibo-pix' },
  { slug: 'recibo-salario',             label: 'Recibo de Salário',               category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  { slug: 'recibo-sinal',               label: 'Recibo de Sinal / Arras',         category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  { slug: 'recibo-honorarios',          label: 'Recibo de Honorários',            category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  { slug: 'recibo-doacao',              label: 'Recibo de Doação',                category: 'recibo',      toolHref: '/ferramentas/recibo-simples' },
  // Contratos
  { slug: 'contrato-simples',           label: 'Contrato Simples',                category: 'contrato',    toolHref: '/ferramentas/contrato-completo' },
  { slug: 'contrato-locacao',           label: 'Contrato de Locação',             category: 'contrato',    toolHref: '/contrato-locacao' },
  { slug: 'contrato-prestacao-servico', label: 'Contrato de Prestação de Serviço',category: 'contrato',    toolHref: '/ferramentas/contrato-completo' },
  // Procurações
  { slug: 'procuracao-simples',         label: 'Procuração Simples',              category: 'procuracao',  toolHref: '/ferramentas/procuracao' },
  // Declarações
  { slug: 'declaracao-endereco',        label: 'Declaração de Endereço',          category: 'declaracao',  toolHref: '/requerimentos/declaracao-endereco' },
  // Outros
  { slug: 'nota-promissoria',           label: 'Nota Promissória',                category: 'outros',      toolHref: '/ferramentas/nota-promissoria' },
]

export function getDocTypeBySlug(slug: string): DocumentType | undefined {
  return DOCUMENT_TYPES.find((d) => d.slug === slug)
}
