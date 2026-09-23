export type Formato = 'word' | 'pdf' | 'excel' | 'editavel' | 'simples'

/**
 * Sufixos de formato historicamente publicados em /modelo/{tipo}-{formato}.
 *
 * Estas variantes permanecem acessíveis por compatibilidade (links externos,
 * histórico de indexação), mas são `noindex, follow` e apontam canonical para
 * a página-base /modelo/{tipo}. Não devem ser reintroduzidas no sitemap.
 *
 * O conteúdo descritivo abaixo reflete SOMENTE o que a plataforma realmente
 * entrega hoje: geração de PDF via jsPDF e preenchimento editável no navegador.
 * Não há exportação .docx nem .xlsx implementada — ver `disponivel: false`.
 */
export const FORMATOS: Formato[] = ['word', 'pdf', 'excel', 'editavel', 'simples']

export interface FormatoData {
  label: string
  shortLabel: string
  /** true somente se a plataforma entrega este formato de fato */
  disponivel: boolean
  /** Descrição honesta do que o usuário obtém (ou não obtém) hoje */
  comoObter: string
}

export const FORMATO_DATA: Record<Formato, FormatoData> = {
  pdf: {
    label: 'PDF',
    shortLabel: 'PDF',
    disponivel: true,
    comoObter:
      'É o formato que a ferramenta gera. Você preenche o formulário no navegador e baixa o arquivo .pdf, pronto para imprimir ou enviar por e-mail e WhatsApp.',
  },
  editavel: {
    label: 'Editável online',
    shortLabel: 'Editável',
    disponivel: true,
    comoObter:
      'O preenchimento acontece no próprio navegador: você edita os campos e acompanha o resultado antes de baixar. A edição é feita antes de gerar o PDF, não depois.',
  },
  word: {
    label: 'Word (.docx)',
    shortLabel: 'Word',
    disponivel: false,
    comoObter:
      'Não disponibilizamos exportação em .docx. Se precisar editar o texto depois, baixe o PDF e abra-o no Microsoft Word ou no Google Docs — ambos convertem PDF em documento editável, com possíveis ajustes de formatação.',
  },
  excel: {
    label: 'Excel (.xlsx)',
    shortLabel: 'Excel',
    disponivel: false,
    comoObter:
      'Não disponibilizamos planilha em .xlsx nem cálculos automáticos em planilha. A ferramenta gera um documento em PDF, não uma planilha de controle.',
  },
  simples: {
    label: 'Versão simplificada',
    shortLabel: 'Simples',
    disponivel: false,
    comoObter:
      'Não há uma versão reduzida separada deste documento. A ferramenta gera uma única versão, e os campos que não se aplicam ao seu caso podem ser deixados em branco.',
  },
}

/** Verifica se um slug termina com um sufixo de formato conhecido. */
export function parseFormatoFromSlug(slug: string): { base: string; formato: Formato } | null {
  for (const fmt of FORMATOS) {
    if (slug.endsWith(`-${fmt}`)) {
      const base = slug.slice(0, -(fmt.length + 1))
      return { base, formato: fmt }
    }
  }
  return null
}
