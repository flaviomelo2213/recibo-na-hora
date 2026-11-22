/**
 * BR Code estático do Pix (padrão EMV do Banco Central).
 * Usado no apoio voluntário ao site e no pedido de pagamento do Recibo Pix
 * (QR Code que o pagador escaneia para pagar ao recebedor que emitiu o documento).
 */
import { cpfValido, cnpjValido } from './documento-br';

/** Campo EMV: ID (2 dígitos) + tamanho (2 dígitos) + valor. */
function campo(id: string, valor: string): string {
  const tamanho = valor.length;
  if (tamanho > 99) throw new Error(`Campo ${id} longo demais`);
  return `${id}${String(tamanho).padStart(2, '0')}${valor}`;
}

/** CRC16-CCITT (polinômio 0x1021, valor inicial 0xFFFF), em 4 dígitos hexadecimais maiúsculos. */
export function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let b = 0; b < 8; b++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/** Remove acentos e caracteres fora do conjunto aceito, em maiúsculas. */
function normalizar(texto: string, max: number): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9 ]/g, '')
    .toUpperCase()
    .trim()
    .slice(0, max);
}

/**
 * Coloca a chave Pix no formato que o DICT espera:
 * e-mail em minúsculas, CPF/CNPJ só com números, celular como +55DDDNÚMERO,
 * chave aleatória (UUID) em minúsculas. Devolve '' se não reconhecer a chave.
 */
export function normalizarChavePix(entrada: string): string {
  const t = entrada.trim();
  if (!t) return '';
  if (t.includes('@')) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? t.toLowerCase() : '';
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)) return t.toLowerCase();
  const d = t.replace(/\D/g, '');
  const pareceTelefone = t.startsWith('+') || t.includes('(');
  if (pareceTelefone) {
    const nacional = d.startsWith('55') && d.length >= 12 ? d.slice(2) : d;
    return nacional.length === 10 || nacional.length === 11 ? `+55${nacional}` : '';
  }
  if (d.length === 14 && cnpjValido(d)) return d;
  if (d.length === 11 && cpfValido(d)) return d;
  if (d.length === 11 && d[2] === '9') return `+55${d}`; // celular com DDD
  if (d.length === 13 && d.startsWith('55')) return `+${d}`;
  return '';
}

/** "1.234,56" → "1234.56" (formato do campo 54). Devolve '' se o valor não for positivo. */
export function valorBrCode(valor: number | null): string {
  return valor !== null && valor > 0 && valor < 1e10 ? valor.toFixed(2) : '';
}

export function gerarBrCodeEstatico({ chave, nome, cidade, valor = '', txid = '***' }: {
  chave: string;
  nome: string;
  cidade: string;
  /** Valor no formato "123.45"; vazio deixa o pagador digitar o valor. */
  valor?: string;
  txid?: string;
}): string {
  const contaRecebedor = campo('26', campo('00', 'br.gov.bcb.pix') + campo('01', chave.trim()));
  const semCrc =
    campo('00', '01') + // versão do payload
    contaRecebedor +
    campo('52', '0000') + // categoria do recebedor
    campo('53', '986') + // moeda: real
    (valor ? campo('54', valor) : '') +
    campo('58', 'BR') +
    campo('59', normalizar(nome, 25)) +
    campo('60', normalizar(cidade, 15) || 'BRASIL') +
    campo('62', campo('05', txid)) +
    '6304'; // ID e tamanho do CRC, que entra no próprio cálculo
  return semCrc + crc16(semCrc);
}
