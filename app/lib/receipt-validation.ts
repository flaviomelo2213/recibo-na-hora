export interface ReceiptFields {
  recebedorNome: string;
  pagadorNome: string;
  valor: string;
  valorExtenso: string;
  descricao: string;
  cidade: string;
  data: string;
}

export function validateReceipt(data: ReceiptFields) {
  const errors: Partial<Record<keyof ReceiptFields, string>> = {};
  if (!data.recebedorNome.trim()) errors.recebedorNome = 'Informe o nome do recebedor.';
  if (!data.pagadorNome.trim()) errors.pagadorNome = 'Informe o nome do pagador.';
  if (!data.valor.trim() || !Number.isFinite(Number(data.valor)) || Number(data.valor) <= 0)
    errors.valor = 'Informe um valor maior que zero.';
  if (!data.valorExtenso.trim()) errors.valorExtenso = 'Informe o valor por extenso.';
  if (!data.descricao.trim() || /^Referente a\.{0,3}\s*$/i.test(data.descricao.trim()))
    errors.descricao = 'Descreva o motivo do pagamento.';
  if (!data.cidade.trim()) errors.cidade = 'Informe a cidade de emissão.';
  const date = new Date(`${data.data}T12:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.data) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== data.data)
    errors.data = 'Informe uma data válida.';
  return errors;
}
