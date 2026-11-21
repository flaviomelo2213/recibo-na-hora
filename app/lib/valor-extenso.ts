/**
 * Valor monetário por extenso em português do Brasil.
 * Ex.: 150 → "cento e cinquenta reais"; 1.5 → "um real e cinquenta centavos".
 */

const UNIDADES = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
  'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const DEZENAS = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const CENTENAS = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

/** 0 a 999 por extenso (sem "zero" para 0). */
function ate999(n: number): string {
  if (n === 0) return '';
  if (n === 100) return 'cem';
  const c = Math.floor(n / 100);
  const resto = n % 100;
  const partes: string[] = [];
  if (c) partes.push(CENTENAS[c]);
  if (resto) {
    if (resto < 20) partes.push(UNIDADES[resto]);
    else {
      const d = Math.floor(resto / 10);
      const u = resto % 10;
      partes.push(u ? `${DEZENAS[d]} e ${UNIDADES[u]}` : DEZENAS[d]);
    }
  }
  return partes.join(' e ');
}

const ESCALAS: [singular: string, plural: string][] = [
  ['', ''],
  ['mil', 'mil'],
  ['milhão', 'milhões'],
  ['bilhão', 'bilhões'],
];

/** Inteiro (0 a 999.999.999.999) por extenso. */
export function inteiroPorExtenso(n: number): string {
  if (!Number.isFinite(n) || n < 0 || n > 999_999_999_999) return '';
  n = Math.floor(n);
  if (n === 0) return 'zero';
  const grupos: number[] = [];
  for (let x = n; x > 0; x = Math.floor(x / 1000)) grupos.push(x % 1000);
  const partes: { texto: string; valor: number }[] = [];
  for (let i = grupos.length - 1; i >= 0; i--) {
    const g = grupos[i];
    if (!g) continue;
    let texto: string;
    if (i === 0) texto = ate999(g);
    else if (i === 1) texto = g === 1 ? 'mil' : `${ate999(g)} mil`;
    else texto = `${ate999(g)} ${g === 1 ? ESCALAS[i][0] : ESCALAS[i][1]}`;
    partes.push({ texto, valor: g });
  }
  // "e" antes do último grupo quando ele é menor que 100 ou centena redonda (ex.: "mil e quinhentos").
  return partes.reduce((acc, p, idx) => {
    if (idx === 0) return p.texto;
    const ultimo = idx === partes.length - 1;
    const usaE = ultimo && (p.valor < 100 || p.valor % 100 === 0);
    return `${acc}${usaE ? ' e ' : ' '}${p.texto}`;
  }, '');
}

/** Valor em reais por extenso. Retorna "" para valores inválidos ou acima do limite. */
export function valorPorExtenso(valor: number): string {
  if (!Number.isFinite(valor) || valor < 0 || valor > 999_999_999_999.99) return '';
  const totalCentavos = Math.round(valor * 100);
  const reais = Math.floor(totalCentavos / 100);
  const centavos = totalCentavos % 100;
  const partes: string[] = [];
  if (reais > 0) {
    const ext = inteiroPorExtenso(reais);
    // "um milhão de reais", "dois bilhões de reais"
    const de = reais >= 1_000_000 && reais % 1_000_000 === 0 ? ' de' : '';
    partes.push(`${ext}${de} ${reais === 1 ? 'real' : 'reais'}`);
  }
  if (centavos > 0) partes.push(`${inteiroPorExtenso(centavos)} ${centavos === 1 ? 'centavo' : 'centavos'}`);
  if (!partes.length) return 'zero real';
  return partes.join(' e ');
}

/**
 * Converte o texto digitado no campo de valor ("1.234,56", "150", "150,5", "R$ 99,90") em número.
 * Retorna null quando não for possível interpretar.
 */
export function parseValorBR(texto: string): number | null {
  const limpo = texto.replace(/[R$\s]/g, '');
  if (!limpo) return null;
  // vírgula como separador decimal; pontos como milhar
  const normalizado = limpo.includes(',') ? limpo.replace(/\./g, '').replace(',', '.') : limpo;
  if (!/^\d+(\.\d{1,2})?$/.test(normalizado)) return null;
  const n = Number(normalizado);
  return Number.isFinite(n) ? n : null;
}
