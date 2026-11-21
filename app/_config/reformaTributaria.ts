// Reforma Tributária — fonte única de alíquotas e datas da pasta /reforma-tributaria.
// Regra: nada de número inventado. Atualizar no mesmo dia em que o Senado
// publicar a resolução da alíquota de referência da CBS (prazo: 15/12/2026).

export const RT_ATUALIZADO_EM = '21/11/2026';
export const RT_BASE = 'https://www.recibonahora.com.br/reforma-tributaria';

/** Alíquota de referência da CBS para 2027 calculada pelo TCU (28/10/2026), em análise no Senado. */
export const CBS_REFERENCIA_PADRAO = 11.3;

/** LC 214/2025: em 2027 e 2028 a CBS é a referência menos 0,1 ponto percentual. */
export const CBS_REDUCAO_2027 = 0.1;

/** LC 214/2025: fase de teste. */
export const ALIQUOTAS_2026 = { cbs: 0.9, ibs: 0.1 };

/** LC 214/2025: IBS de teste em 2027 e 2028. */
export const IBS_2027 = { estadual: 0.05, municipal: 0.05 };

export type AnoCalculo = 2026 | 2027;

export const TIPOS_OPERACAO = [
  { id: 'padrao', nome: 'Padrão', reducao: 0, ajuda: 'A maioria dos produtos e serviços.' },
  { id: 'r60', nome: 'Redução de 60%', reducao: 0.6, ajuda: 'Ex.: serviços de saúde e educação listados na LC 214/2025.' },
  { id: 'r30', nome: 'Redução de 30%', reducao: 0.3, ajuda: 'Ex.: algumas profissões intelectuais regulamentadas.' },
  { id: 'zero', nome: 'Alíquota zero', reducao: 1, ajuda: 'Ex.: itens da Cesta Básica Nacional.' },
  { id: 'locacao', nome: 'Locação de imóvel (redução de 70%)', reducao: 0.7, ajuda: 'Aluguel, cessão onerosa e arrendamento de imóveis. Não inclui o redutor social de R$ 600.' },
] as const;

export interface ResultadoRT {
  ano: AnoCalculo;
  valor: number;
  reducao: number;
  cbsAliq: number;
  ibsEstAliq: number;
  ibsMunAliq: number;
  cbs: number;
  ibsEst: number;
  ibsMun: number;
  total: number;
  precoFinal: number;
  memoria: string[];
}

const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const pct = (v: number) => `${v.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}%`;

/** Cálculo "por fora": Tributo = Valor × Alíquota × (1 − Redução). */
export function calcularRT(valor: number, ano: AnoCalculo, reducao: number, cbsReferencia: number): ResultadoRT {
  let cbsAliq: number;
  let ibsEstAliq: number;
  let ibsMunAliq: number;

  if (ano === 2026) {
    // 2026: teste; o IBS de 0,1% é mostrado como uma linha só (estadual), sem divisão municipal.
    cbsAliq = ALIQUOTAS_2026.cbs;
    ibsEstAliq = ALIQUOTAS_2026.ibs;
    ibsMunAliq = 0;
  } else {
    cbsAliq = Math.max(0, cbsReferencia - CBS_REDUCAO_2027);
    ibsEstAliq = IBS_2027.estadual;
    ibsMunAliq = IBS_2027.municipal;
  }

  const fator = 1 - reducao;
  const cbs = (valor * cbsAliq * fator) / 100;
  const ibsEst = (valor * ibsEstAliq * fator) / 100;
  const ibsMun = (valor * ibsMunAliq * fator) / 100;
  const total = cbs + ibsEst + ibsMun;
  const red = reducao > 0 ? ` × (1 − ${pct(reducao * 100).replace('%', '')}%)` : '';

  const memoria = [
    ano === 2027
      ? `Alíquota da CBS em 2027 = referência ${pct(cbsReferencia)} − 0,1 ponto = ${pct(cbsAliq)}`
      : `Alíquotas de teste em 2026: CBS ${pct(cbsAliq)} e IBS ${pct(ibsEstAliq)}`,
    `CBS = ${brl(valor)} × ${pct(cbsAliq)}${red} = ${brl(cbs)}`,
    ano === 2027
      ? `IBS estadual = ${brl(valor)} × ${pct(ibsEstAliq)}${red} = ${brl(ibsEst)}`
      : `IBS = ${brl(valor)} × ${pct(ibsEstAliq)}${red} = ${brl(ibsEst)}`,
    ...(ano === 2027 ? [`IBS municipal = ${brl(valor)} × ${pct(ibsMunAliq)}${red} = ${brl(ibsMun)}`] : []),
    `Total de tributos = ${brl(total)}`,
    `Preço final = ${brl(valor)} + ${brl(total)} = ${brl(valor + total)}`,
  ];

  return { ano, valor, reducao, cbsAliq, ibsEstAliq, ibsMunAliq, cbs, ibsEst, ibsMun, total, precoFinal: valor + total, memoria };
}

export const FONTES_OFICIAIS = [
  { nome: 'Lei Complementar nº 214/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm' },
  { nome: 'Medida Provisória nº 1.399/2026 (Senado)', url: 'https://legis.senado.leg.br/norma/44331919' },
  { nome: 'TCU: Painel da Reforma Tributária (cronograma)', url: 'https://sites.tcu.gov.br/recursos/reforma-tributaria/Painel%20da%20Reforma%20Tribut%C3%A1ria_Cronograma_v5.pdf' },
];

export const PAGINAS_RT = [
  { href: '/reforma-tributaria/calculadora', titulo: 'Calculadora da Reforma Tributária', resumo: 'Calcule CBS e IBS sobre um valor em 2026 e 2027, com a memória de cálculo.' },
  { href: '/reforma-tributaria/cronograma', titulo: 'Cronograma 2026 a 2033', resumo: 'O que muda em cada ano, do teste de 2026 ao fim do ICMS e do ISS.' },
  { href: '/reforma-tributaria/cbs', titulo: 'O que é CBS e qual a alíquota em 2027', resumo: 'A contribuição federal que substitui PIS e Cofins, e os 11,3% em análise no Senado.' },
  { href: '/reforma-tributaria/simples-nacional', titulo: 'Reforma Tributária no Simples Nacional', resumo: 'Simples puro ou híbrido: como fica o DAS e quando vale pagar CBS e IBS por fora.' },
  { href: '/reforma-tributaria/mei', titulo: 'Reforma Tributária para MEI', resumo: 'O DAS ganha R$ 1,00 de CBS e IBS em 2027, nota fiscal em todas as vendas e o nanoempreendedor.' },
  { href: '/reforma-tributaria/aluguel', titulo: 'Reforma Tributária no aluguel', resumo: 'Quem paga IBS e CBS sobre aluguel, a redução de 70% e o redutor de R$ 600.' },
  { href: '/reforma-tributaria/ibs', titulo: 'O que é IBS', resumo: 'O imposto de estados e municípios que substitui ICMS e ISS até 2033, cobrado no destino.' },
  { href: '/reforma-tributaria/imposto-seletivo', titulo: 'Imposto Seletivo 2027', resumo: 'Quais produtos pagam o "imposto do pecado" a partir de fevereiro de 2027 e com quais alíquotas.' },
  { href: '/reforma-tributaria/split-payment', titulo: 'Split payment', resumo: 'O imposto separado na hora do pagamento: quando começa e o que muda para quem vende.' },
];

/** Lê número no formato brasileiro: "1.000", "1.000,50", "1000,5", "1000.50" (ponto decimal só se não for milhar). */
export function lerNumeroBR(s: string): number {
  const limpo = s.trim().replace(/\s/g, '').replace(/R\$/i, '');
  let normal: string;
  if (limpo.includes(',')) normal = limpo.replace(/\./g, '').replace(',', '.');
  else if (/^\d{1,3}(\.\d{3})+$/.test(limpo)) normal = limpo.replace(/\./g, '');
  else normal = limpo;
  const n = parseFloat(normal);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}
