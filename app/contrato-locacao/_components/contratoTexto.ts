import { parseValorBR, valorPorExtenso } from '../../lib/valor-extenso';

export type TipoLocacao = 'residencial' | 'comercial';
export type Garantia = 'nenhuma' | 'caucao' | 'fiador' | 'seguro';

export interface Parte {
  nome: string;
  nacionalidade: string;
  estadoCivil: string;
  profissao: string;
  rg: string;
  documento: string; // CPF ou CNPJ
  endereco: string;
  representante: string; // para pessoa jurídica (opcional)
}

export interface ContratoLocacao {
  tipo: TipoLocacao;
  locador: Parte;
  locatario: Parte;
  imovelEndereco: string;
  imovelDescricao: string;
  atividade: string; // comercial: ramo de atividade
  prazoMeses: string;
  dataInicio: string; // AAAA-MM-DD
  valor: string;
  diaVencimento: string;
  formaPagamento: string;
  indiceReajuste: string;
  multaAtrasoPct: string;
  multaRescisaoAlugueis: string;
  encargos: { iptu: boolean; condominio: boolean; agua: boolean; luz: boolean; gas: boolean };
  aguaLuzInclusas: boolean;
  garantia: Garantia;
  caucaoValor: string;
  seguradora: string;
  fiador: Parte & { telefone: string; conjugeNome: string; conjugeRg: string; conjugeCpf: string; imovelGarantia: string };
  animais: boolean;
  clausulasExtras: string[];
  testemunha1: string;
  testemunha2: string;
  foro: string;
  cidadeAssinatura: string;
  dataAssinatura: string;
}

export const parteVazia = (): Parte => ({
  nome: '', nacionalidade: 'brasileiro(a)', estadoCivil: '', profissao: '', rg: '', documento: '', endereco: '', representante: '',
});

export const contratoInicial = (): ContratoLocacao => {
  const hoje = new Date().toISOString().split('T')[0];
  return {
    tipo: 'residencial',
    locador: parteVazia(),
    locatario: parteVazia(),
    imovelEndereco: '',
    imovelDescricao: '',
    atividade: '',
    prazoMeses: '30',
    dataInicio: hoje,
    valor: '',
    diaVencimento: '10',
    formaPagamento: 'Pix na chave informada pelo LOCADOR',
    indiceReajuste: 'IPCA (IBGE)',
    multaAtrasoPct: '10',
    multaRescisaoAlugueis: '3',
    encargos: { iptu: true, condominio: true, agua: true, luz: true, gas: true },
    aguaLuzInclusas: false,
    garantia: 'caucao',
    caucaoValor: '',
    seguradora: '',
    fiador: { ...parteVazia(), telefone: '', conjugeNome: '', conjugeRg: '', conjugeCpf: '', imovelGarantia: '' },
    animais: true,
    clausulasExtras: ['', ''],
    testemunha1: '',
    testemunha2: '',
    foro: '',
    cidadeAssinatura: '',
    dataAssinatura: hoje,
  };
};

const L = (v: string, ph: string) => (v && v.trim() ? v.trim() : ph);
const dataBR = (iso: string) => {
  const [a, m, d] = (iso || '').split('-');
  return a && m && d ? `${d}/${m}/${a}` : '___/___/______';
};
const dataExtenso = (iso: string) => {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const [a, m, d] = (iso || '').split('-').map(Number);
  return a && m && d ? `${d} de ${meses[m - 1]} de ${a}` : '___ de __________ de ______';
};
export function dataFinal(inicioIso: string, meses: number): string {
  const [a, m, d] = (inicioIso || '').split('-').map(Number);
  if (!a || !m || !d || !meses) return '';
  const fim = new Date(a, m - 1 + meses, d);
  fim.setDate(fim.getDate() - 1);
  return `${fim.getFullYear()}-${String(fim.getMonth() + 1).padStart(2, '0')}-${String(fim.getDate()).padStart(2, '0')}`;
}
const moeda = (txt: string) => {
  const n = parseValorBR(txt);
  if (n === null || n <= 0) return 'R$ ________ (________________________)';
  return `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${valorPorExtenso(n)})`;
};

export function qualificacao(p: Parte, papel: string): string {
  const doc = p.documento.replace(/\D/g, '');
  const pj = doc.length === 14;
  if (pj) {
    return `${L(p.nome, '[RAZÃO SOCIAL]')}, pessoa jurídica inscrita no CNPJ sob o nº ${p.documento}, com sede em ${L(p.endereco, '[ENDEREÇO]')}${p.representante ? `, neste ato representada por ${p.representante}` : ''}, doravante denominada ${papel}`;
  }
  const partes = [
    L(p.nome, '[NOME COMPLETO]'),
    p.nacionalidade,
    p.estadoCivil,
    p.profissao,
    p.rg ? `portador(a) do RG nº ${p.rg}` : '',
    `inscrito(a) no CPF sob o nº ${L(p.documento, '[000.000.000-00]')}`,
    `residente e domiciliado(a) em ${L(p.endereco, '[ENDEREÇO COMPLETO]')}`,
  ].filter(Boolean);
  return `${partes.join(', ')}, doravante denominado(a) ${papel}`;
}

export interface Clausula {
  titulo: string;
  paragrafos: string[];
}

/** Monta as cláusulas do contrato (mesmo texto na prévia e no PDF). */
export function montarClausulas(c: ContratoLocacao): Clausula[] {
  const res = c.tipo === 'residencial';
  const meses = parseInt(c.prazoMeses, 10) || 0;
  const fim = dataFinal(c.dataInicio, meses);
  const cl: Clausula[] = [];

  cl.push({
    titulo: 'DO OBJETO',
    paragrafos: res
      ? [
          `O LOCADOR dá em locação ao LOCATÁRIO o imóvel situado em ${L(c.imovelEndereco, '[ENDEREÇO COMPLETO DO IMÓVEL]')}${c.imovelDescricao ? `, assim descrito: ${c.imovelDescricao}` : ''}, destinado exclusivamente à residência do LOCATÁRIO e de sua família.`,
          'É vedado ao LOCATÁRIO sublocar, ceder ou emprestar o imóvel, no todo ou em parte, sem o consentimento prévio e por escrito do LOCADOR (art. 13 da Lei 8.245/1991).',
        ]
      : [
          `O LOCADOR dá em locação ao LOCATÁRIO o imóvel situado em ${L(c.imovelEndereco, '[ENDEREÇO COMPLETO DO IMÓVEL]')}${c.imovelDescricao ? `, assim descrito: ${c.imovelDescricao}` : ''}, destinado exclusivamente ao uso não residencial, para o exercício da atividade de ${L(c.atividade, '[RAMO DE ATIVIDADE]')}.`,
          'É vedado ao LOCATÁRIO alterar a destinação do imóvel, bem como sublocar, ceder ou emprestar o imóvel, no todo ou em parte, ou transferir este contrato, sem o consentimento prévio e por escrito do LOCADOR.',
        ],
  });

  const prazoParas = [
    `A locação terá o prazo de ${meses || '____'} (${meses ? valorPorExtenso(meses).replace(/ reais?$/, '').replace(/ real$/, '') : '________'}) meses, com início em ${dataBR(c.dataInicio)} e término em ${fim ? dataBR(fim) : '___/___/______'}, data em que o LOCATÁRIO se obriga a restituir o imóvel livre e desocupado, no estado em que o recebeu, salvo o desgaste natural pelo uso normal.`,
  ];
  if (res) {
    prazoParas.push(
      'Findo o prazo, se o LOCATÁRIO permanecer no imóvel por mais de 30 (trinta) dias sem oposição do LOCADOR, a locação será prorrogada por prazo indeterminado, mantidas as demais cláusulas, observadas as regras dos arts. 46 e 47 da Lei 8.245/1991.'
    );
  } else {
    prazoParas.push(
      'Findo o prazo, se o LOCATÁRIO permanecer no imóvel por mais de 30 (trinta) dias sem oposição do LOCADOR, a locação será prorrogada por prazo indeterminado, mantidas as demais cláusulas (art. 56, parágrafo único, da Lei 8.245/1991).'
    );
    if (meses >= 60) {
      prazoParas.push(
        'As partes reconhecem que, preenchidos os requisitos do art. 51 da Lei 8.245/1991, o LOCATÁRIO poderá ter direito à renovação deste contrato, devendo eventual ação renovatória ser proposta no prazo previsto no § 5º do mesmo artigo.'
      );
    }
  }
  cl.push({ titulo: 'DO PRAZO', paragrafos: prazoParas });

  cl.push({
    titulo: 'DO ALUGUEL E DO PAGAMENTO',
    paragrafos: [
      `O aluguel mensal é de ${moeda(c.valor)}, a ser pago até o dia ${L(c.diaVencimento, '___')} de cada mês, por meio de ${L(c.formaPagamento, '[FORMA DE PAGAMENTO]')}.`,
      'O LOCADOR fornecerá ao LOCATÁRIO recibo de cada pagamento, com a discriminação das importâncias pagas (art. 22, VI, da Lei 8.245/1991).',
      `O pagamento após o vencimento sujeitará o LOCATÁRIO à multa de ${L(c.multaAtrasoPct, '10')}% (por cento) sobre o valor devido, acrescida de juros de mora de 1% (um por cento) ao mês e correção monetária pelo índice de reajuste deste contrato.`,
    ],
  });

  cl.push({
    titulo: 'DO REAJUSTE',
    paragrafos: [
      `O aluguel será reajustado a cada 12 (doze) meses, contados do início da locação, pela variação acumulada do ${L(c.indiceReajuste, 'IPCA (IBGE)')}. Na extinção desse índice, será adotado o índice oficial que o substituir.`,
    ],
  });

  const encargos: string[] = [];
  if (c.encargos.iptu) encargos.push('o IPTU e as taxas que incidam sobre o imóvel');
  if (c.encargos.condominio) encargos.push('as despesas ordinárias de condomínio');
  if (c.encargos.agua && !c.aguaLuzInclusas) encargos.push('o consumo de água e esgoto');
  if (c.encargos.luz && !c.aguaLuzInclusas) encargos.push('o consumo de energia elétrica');
  if (c.encargos.gas) encargos.push('o consumo de gás');
  const encParas = [
    encargos.length
      ? `Além do aluguel, ficam a cargo do LOCATÁRIO, durante a locação: ${encargos.join('; ')}, devendo apresentar os comprovantes de pagamento ao LOCADOR sempre que solicitado.`
      : 'Os tributos e as despesas do imóvel ficam a cargo do LOCADOR, salvo o que for expressamente atribuído ao LOCATÁRIO neste contrato.',
  ];
  if (c.aguaLuzInclusas) {
    encParas.push(
      'O valor do aluguel já inclui as despesas de água e de energia elétrica do imóvel, cujas contas permanecem em nome do LOCADOR. O consumo que ultrapassar a média habitual poderá ser cobrado à parte, mediante apresentação das faturas.'
    );
  }
  encParas.push('As despesas extraordinárias de condomínio são de responsabilidade do LOCADOR (art. 22, X, da Lei 8.245/1991).');
  if (!res) {
    encParas.push(
      'Correm por conta do LOCATÁRIO a obtenção e a manutenção de alvarás, licenças e autorizações necessárias ao exercício de sua atividade, bem como as adaptações exigidas pelos órgãos públicos para esse fim, que dependerão de autorização prévia e escrita do LOCADOR quando alterarem a estrutura do imóvel.',
      'O LOCATÁRIO contratará e manterá, durante toda a locação, seguro do imóvel contra incêndio, tendo o LOCADOR como beneficiário.'
    );
  }
  cl.push({ titulo: 'DOS ENCARGOS', paragrafos: encParas });

  if (c.garantia !== 'nenhuma') {
    let gar: string[] = [];
    if (c.garantia === 'caucao') {
      gar = [
        `Em garantia das obrigações deste contrato, o LOCATÁRIO entrega ao LOCADOR caução em dinheiro no valor de ${moeda(c.caucaoValor)}, limitada ao equivalente a 3 (três) aluguéis (art. 38, § 2º, da Lei 8.245/1991).`,
        'Ao final da locação, a caução será devolvida ao LOCATÁRIO com as vantagens da caderneta de poupança, descontados os débitos e os reparos de danos que forem de sua responsabilidade.',
      ];
    } else if (c.garantia === 'fiador') {
      const f = c.fiador;
      gar = [
        `Assina este contrato, na qualidade de FIADOR e principal pagador, ${qualificacao(f, 'FIADOR')}${f.telefone ? `, telefone ${f.telefone}` : ''}${f.conjugeNome ? `, com a anuência de seu cônjuge ${f.conjugeNome}${f.conjugeRg ? `, RG nº ${f.conjugeRg}` : ''}${f.conjugeCpf ? `, CPF nº ${f.conjugeCpf}` : ''}` : ''}.`,
        'O FIADOR responde solidariamente com o LOCATÁRIO por todas as obrigações deste contrato, inclusive aluguéis, encargos, multas e reparos, até a efetiva devolução das chaves, ainda que a locação se prorrogue por prazo indeterminado (art. 39 da Lei 8.245/1991), renunciando ao benefício de ordem previsto no art. 827 do Código Civil.',
      ];
      if (f.imovelGarantia) gar.push(`O FIADOR declara ser proprietário do seguinte imóvel: ${f.imovelGarantia}.`);
    } else {
      gar = [
        `Em garantia das obrigações deste contrato, o LOCATÁRIO contratará e manterá vigente, durante toda a locação, seguro de fiança locatícia${c.seguradora ? ` junto à ${c.seguradora}` : ''}, cobrindo aluguéis e encargos, com o LOCADOR como beneficiário.`,
      ];
    }
    gar.push('As partes declaram que este contrato possui uma única modalidade de garantia, conforme o parágrafo único do art. 37 da Lei 8.245/1991.');
    cl.push({ titulo: 'DA GARANTIA', paragrafos: gar });
  }

  cl.push({
    titulo: 'DA CONSERVAÇÃO E DA VISTORIA',
    paragrafos: [
      'O LOCATÁRIO declara receber o imóvel no estado descrito no laudo de vistoria assinado pelas partes, que integra este contrato, obrigando-se a conservá-lo e a restituí-lo nas mesmas condições, ressalvado o desgaste natural pelo uso normal.',
      'O LOCATÁRIO comunicará ao LOCADOR qualquer dano ou defeito cuja reparação seja de responsabilidade deste e permitirá a vistoria do imóvel em dia e hora previamente combinados (art. 23, IX, da Lei 8.245/1991).',
      ...(res
        ? [c.animais ? 'É permitida a permanência de animais de estimação, desde que observadas as normas do condomínio, quando houver, e mantidas as condições de higiene e conservação do imóvel.' : 'Não é permitida a permanência de animais no imóvel sem autorização prévia e por escrito do LOCADOR.']
        : []),
    ],
  });

  cl.push({
    titulo: 'DAS BENFEITORIAS',
    paragrafos: [
      'Qualquer obra ou modificação no imóvel depende de autorização prévia e por escrito do LOCADOR. As benfeitorias necessárias serão indenizadas; as úteis só serão indenizadas se previamente autorizadas; e as voluptuárias não serão indenizadas, podendo ser retiradas ao final da locação desde que não afetem a estrutura e a substância do imóvel (arts. 35 e 36 da Lei 8.245/1991).',
    ],
  });

  const rescParas = [
    `Se o LOCATÁRIO devolver o imóvel antes do término do prazo, pagará multa equivalente a ${L(c.multaRescisaoAlugueis, '3')} (${valorPorExtenso(parseInt(c.multaRescisaoAlugueis, 10) || 3).replace(/ reais?$/, '').replace(/ real$/, '')}) aluguéis vigentes, reduzida proporcionalmente ao período de contrato já cumprido (art. 4º da Lei 8.245/1991).`,
  ];
  if (res) {
    rescParas.push(
      'O LOCATÁRIO ficará dispensado da multa se a devolução decorrer de transferência pelo seu empregador para prestar serviços em localidade diversa, desde que notifique o LOCADOR por escrito com antecedência mínima de 30 (trinta) dias (art. 4º, parágrafo único, da Lei 8.245/1991).'
    );
  }
  rescParas.push('A infração de qualquer cláusula deste contrato autoriza a parte prejudicada a considerá-lo rescindido, sem prejuízo das penalidades previstas e das perdas e danos cabíveis.');
  cl.push({ titulo: 'DA DEVOLUÇÃO ANTECIPADA E DA RESCISÃO', paragrafos: rescParas });

  cl.push({
    titulo: 'DA VENDA DO IMÓVEL',
    paragrafos: [
      'Em caso de venda, promessa de venda, cessão de direitos ou dação em pagamento do imóvel, o LOCATÁRIO terá direito de preferência para adquiri-lo em igualdade de condições com terceiros, devendo o LOCADOR dar-lhe conhecimento do negócio (art. 27 da Lei 8.245/1991).',
    ],
  });

  const extras = c.clausulasExtras.map((t) => t.trim()).filter(Boolean);
  if (extras.length) cl.push({ titulo: 'DISPOSIÇÕES ESPECIAIS', paragrafos: extras });

  cl.push({
    titulo: 'DO FORO',
    paragrafos: [
      `Fica eleito o foro da comarca de ${L(c.foro, c.cidadeAssinatura || '[CIDADE/UF]')} para dirimir quaisquer questões oriundas deste contrato.`,
      'E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 2 (duas) vias de igual teor, na presença das testemunhas abaixo.',
    ],
  });
  return cl;
}

export const tituloContrato = (c: ContratoLocacao) =>
  c.tipo === 'residencial' ? 'CONTRATO DE LOCAÇÃO DE IMÓVEL RESIDENCIAL' : 'CONTRATO DE LOCAÇÃO DE IMÓVEL COMERCIAL';

export const preambulo = (c: ContratoLocacao) => [
  `LOCADOR: ${qualificacao(c.locador, 'LOCADOR')}.`,
  `LOCATÁRIO: ${qualificacao(c.locatario, 'LOCATÁRIO')}.`,
  'As partes acima identificadas celebram o presente contrato de locação, que se regerá pela Lei 8.245/1991 (Lei do Inquilinato) e pelas cláusulas e condições seguintes:',
];

export const localData = (c: ContratoLocacao) => `${L(c.cidadeAssinatura, '[CIDADE/UF]')}, ${dataExtenso(c.dataAssinatura)}.`;

export function assinaturas(c: ContratoLocacao): Array<{ papel: string; nome: string }> {
  const a = [
    { papel: 'LOCADOR', nome: L(c.locador.nome, '') },
    { papel: 'LOCATÁRIO', nome: L(c.locatario.nome, '') },
  ];
  if (c.garantia === 'fiador') {
    a.push({ papel: 'FIADOR', nome: L(c.fiador.nome, '') });
    if (c.fiador.conjugeNome) a.push({ papel: 'CÔNJUGE DO FIADOR', nome: c.fiador.conjugeNome });
  }
  a.push({ papel: 'TESTEMUNHA 1', nome: L(c.testemunha1, '') }, { papel: 'TESTEMUNHA 2', nome: L(c.testemunha2, '') });
  return a;
}
