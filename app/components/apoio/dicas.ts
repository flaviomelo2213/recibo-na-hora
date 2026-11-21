/** Dica exibida no espaço da caixa de apoio antes do download, conforme a ferramenta. */
export interface Dica {
  texto: string;
  href: string;
  link: string;
}

const DICAS: [prefixo: string, dica: Dica][] = [
  ['/ferramentas/recibo-pix', {
    texto: 'Guarde este recibo junto com o comprovante do seu banco: o recibo explica o pagamento e o comprovante prova a transferência.',
    href: '/guias/como-saber-se-comprovante-pix-e-falso',
    link: 'Como saber se um comprovante Pix é falso',
  }],
  ['/ferramentas/recibo-rpa', {
    texto: 'Confira os descontos e guarde uma via assinada do RPA para a sua contabilidade.',
    href: '/guias/o-que-e-rpa',
    link: 'O que é RPA e quando usar',
  }],
  ['/ferramentas/imobiliario', {
    texto: 'Emita um recibo para cada aluguel recebido e guarde as vias assinadas.',
    href: '/guias/recibo-aluguel-obrigatorio',
    link: 'Recibo de aluguel é obrigatório?',
  }],
  ['/contrato-locacao', {
    texto: 'Depois de assinado o contrato, registre cada pagamento de aluguel com um recibo.',
    href: '/guias/recibo-aluguel-obrigatorio',
    link: 'Recibo de aluguel é obrigatório?',
  }],
  ['/ferramentas/contrato-completo', {
    texto: 'Leia todas as cláusulas com a outra parte antes de assinar e guarde uma via assinada por ambos.',
    href: '/guias/contrato-prestacao-servico-obrigatorio',
    link: 'Contrato de prestação de serviço é obrigatório?',
  }],
  ['/ferramentas/nota-promissoria', {
    texto: 'A nota promissória registra uma dívida; quando ela for paga, emita um recibo de quitação.',
    href: '/comparacoes/nota-promissoria-vs-recibo',
    link: 'Nota promissória ou recibo?',
  }],
  ['/ferramentas/orcamento', {
    texto: 'Guarde o orçamento aprovado pelo cliente e, depois do pagamento, emita um recibo.',
    href: '/guias/como-fazer-recibo-autonomo',
    link: 'Como fazer recibo de autônomo',
  }],
  ['/ferramentas/recibo-simples', {
    texto: 'Guarde uma via assinada do recibo junto com o comprovante do pagamento.',
    href: '/guias/recibo-tem-valor-legal',
    link: 'Recibo tem valor legal?',
  }],
  ['/gerar', {
    texto: 'Guarde uma via assinada do recibo junto com o comprovante do pagamento.',
    href: '/guias/recibo-tem-valor-legal',
    link: 'Recibo tem valor legal?',
  }],
  ['/ferramentas/procuracao', {
    texto: 'Antes de usar a procuração, confirme se o banco, cartório ou órgão exige firma reconhecida ou um modelo próprio.',
    href: '/guias',
    link: 'Ver guias práticos',
  }],
];

const PADRAO: Dica = {
  texto: 'Confira todos os dados antes de imprimir ou enviar e guarde uma cópia do documento.',
  href: '/guias',
  link: 'Ver guias práticos',
};

export function dicaPara(pathname: string | null): Dica {
  if (!pathname) return PADRAO;
  const achou = DICAS.find(([prefixo]) => pathname === prefixo || pathname.startsWith(prefixo + '/') || pathname.startsWith(prefixo + '-'));
  return achou ? achou[1] : PADRAO;
}
