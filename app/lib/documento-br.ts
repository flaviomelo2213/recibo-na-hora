/** Validação de CPF e CNPJ pelos dígitos verificadores (módulo 11). */

const soDigitos = (s: string) => s.replace(/\D/g, '');

export function cpfValido(valor: string): boolean {
  const cpf = soDigitos(valor);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  const dv = (base: string, pesoInicial: number) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) soma += Number(base[i]) * (pesoInicial - i);
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };
  const d1 = dv(cpf.slice(0, 9), 10);
  const d2 = dv(cpf.slice(0, 10), 11);
  return d1 === Number(cpf[9]) && d2 === Number(cpf[10]);
}

export function cnpjValido(valor: string): boolean {
  const cnpj = soDigitos(valor);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  const dv = (base: string) => {
    const pesos = base.length === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const soma = base.split('').reduce((acc, d, i) => acc + Number(d) * pesos[i], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const d1 = dv(cnpj.slice(0, 12));
  const d2 = dv(cnpj.slice(0, 13));
  return d1 === Number(cnpj[12]) && d2 === Number(cnpj[13]);
}

export type SituacaoDocumento = 'vazio' | 'cpf' | 'cnpj' | 'invalido';

/** Campo opcional: vazio é aceito; com 11 dígitos é tratado como CPF e com 14 como CNPJ. */
export function verificarCpfCnpj(valor: string): SituacaoDocumento {
  const d = soDigitos(valor);
  if (!d) return 'vazio';
  if (d.length === 11) return cpfValido(d) ? 'cpf' : 'invalido';
  if (d.length === 14) return cnpjValido(d) ? 'cnpj' : 'invalido';
  return 'invalido';
}
