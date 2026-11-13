/**
 * BR Code estático do Pix (padrão EMV do Banco Central), sem valor definido.
 * Usado SOMENTE para o apoio voluntário ao site — nunca dentro de recibos ou documentos gerados.
 */

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

export function gerarBrCodeEstatico({ chave, nome, cidade, txid = '***' }: {
  chave: string;
  nome: string;
  cidade: string;
  txid?: string;
}): string {
  const contaRecebedor = campo('26', campo('00', 'br.gov.bcb.pix') + campo('01', chave.trim()));
  const semCrc =
    campo('00', '01') + // versão do payload
    contaRecebedor +
    campo('52', '0000') + // categoria do recebedor
    campo('53', '986') + // moeda: real
    campo('58', 'BR') +
    campo('59', normalizar(nome, 25)) +
    campo('60', normalizar(cidade, 15)) +
    campo('62', campo('05', txid)) +
    '6304'; // ID e tamanho do CRC, que entra no próprio cálculo
  return semCrc + crc16(semCrc);
}
