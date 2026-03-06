export interface ModeloData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  description: string;
  toolHref: string;
  toolLabel: string;
  whatIs: string;
  whenToUse: string[];
  requiredFields: string[];
  faqs: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
}

export const MODELOS: Record<string, ModeloData> = {
  'recibo-aluguel': {
    slug: 'recibo-aluguel',
    title: 'Modelo de Recibo de Aluguel | ReciboNaHora',
    h1: 'Modelo de Recibo de Aluguel Gratuito',
    metaDescription:
      'Baixe gratuitamente um modelo de recibo de aluguel completo. Pronto para preencher e imprimir, válido juridicamente. Gerado em PDF online.',
    description:
      'O recibo de aluguel comprova que o inquilino pagou o aluguel e que o proprietário recebeu. ' +
      'É indispensável para proteger ambas as partes na relação de locação.',
    toolHref: '/ferramentas/imobiliario',
    toolLabel: 'Gerar Recibo de Aluguel Grátis',
    whatIs:
      'O recibo de aluguel é o documento que comprova o pagamento mensal do aluguel pelo inquílino. ' +
      'Ele deve ser emitido pelo proprietário (ou administradora) e assinado após receber o valor.',
    whenToUse: [
      'Todo mês, ao receber o pagamento do aluguel',
      'Ao receber depósito de caução',
      'Ao quitar qualquer dívida relativa ao imóvel',
      'Quando há pagamento parcelado do aluguel',
    ],
    requiredFields: [
      'Nome e CPF do proprietário (locador)',
      'Nome e CPF do inquíilino (locatario)',
      'Endereço completo do imóvel',
      'Valor do aluguel (em número e por extenso)',
      'Competência (mês e ano) a que se refere o pagamento',
      'Data do recebimento',
      'Assinatura do locador',
    ],
    faqs: [
      { q: 'O recibo de aluguel é obrigatório?', a: 'Sim. Pelo art. 22 da Lei do Inquilinato (Lei 8.245/91), o proprietário é obrigado a fornecer recibo detalhado dos pagamentos feitos pelo inquíilino.' },
      { q: 'O recibo de aluguel pode ser digital?', a: 'Sim. O recibo digital tem a mesma validade jurídica, desde que contenha todos os campos obrigatórios e a assinatura do proprietário (física ou eletrônica).' },
      { q: 'Posso usar recibo de aluguel no lugar do contrato?', a: 'Não. O recibo comprova o pagamento, não a relação de locação. Para isso, é necessário um contrato de aluguel separado.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/imobiliario', label: 'Recibo de Aluguel' },
      { href: '/contrato-locacao', label: 'Contrato de Locação' },
      { href: '/blog/como-fazer-recibo', label: 'Como Fazer um Recibo' },
    ],
  },
  'recibo-autonomo': {
    slug: 'recibo-autonomo',
    title: 'Modelo de Recibo de Autônomo (RPA) | ReciboNaHora',
    h1: 'Modelo de Recibo de Pagamento de Autônomo (RPA)',
    metaDescription:
      'Modelo gratuito de RPA — Recibo de Pagamento de Autônomo. Gere em PDF com os campos corretos para INSS, IR e ISS. Sem cadastro.',
    description:
      'O RPA (Recibo de Pagamento de Autônomo) é o documento usado por profissionais autônomos ' +
      'quando prestam serviços para empresas (CNPJ). Nele, a empresa desconta os impostos devidos.',
    toolHref: '/ferramentas/recibo-rpa',
    toolLabel: 'Gerar RPA Grátis',
    whatIs:
      'O RPA é um recibo emitido quando um autônomo (pessoa física sem CNPJ) presta serviços ' +
      'para uma empresa. A empresa usa o RPA para calcular e reter INSS, IR e ISS antes de pagar o autônomo.',
    whenToUse: [
      'Autônomo pessoa física prestando serviço para empresa',
      'Profissional liberal sem CNPJ (médico, advogado, engenheiro etc.)',
      'Trabalho eventual para pessoa jurídica',
      'Quando a empresa exige RPA para sua contabilidade',
    ],
    requiredFields: [
      'Nome completo e CPF do autônomo',
      'Nome e CNPJ da empresa contratante',
      'Descrição do serviço prestado',
      'Valor bruto (antes dos descontos)',
      'INSS retido (11% ou aliq. do INSS)',
      'IR retido (conforme tabela)',
      'ISS retido (conforme município)',
      'Valor líquido a receber',
      'Data do pagamento',
    ],
    faqs: [
      { q: 'O que é o RPA?', a: 'RPA significa Recibo de Pagamento de Autônomo. É o documento que formaliza o pagamento de um profissional autônomo (sem CNPJ) por uma empresa, com os impostos calculados e retidos.' },
      { q: 'Quais impostos são descontados no RPA?', a: 'No RPA típico: INSS (11% sobre o valor bruto, até o teto), IRRF (tabela progressiva), e ISS (varia de 2% a 5% conforme o município).' },
      { q: 'Preciso de RPA se sou MEI?', a: 'Não. Se você é MEI, você emite Nota Fiscal de Serviços Eletrônica (NFS-e) para empresas, não RPA.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/mei', label: 'Ferramentas para MEI' },
      { href: '/blog/diferenca-recibo-nota-fiscal', label: 'Recibo vs Nota Fiscal' },
    ],
  },
  'recibo-prestacao-servico': {
    slug: 'recibo-prestacao-servico',
    title: 'Modelo de Recibo de Prestação de Serviço | ReciboNaHora',
    h1: 'Modelo de Recibo de Prestação de Serviço Gratuito',
    metaDescription:
      'Modelo gratuito de recibo de prestação de serviço. Ideal para freelancers, autônomos e MEI. Gere em PDF online sem cadastro.',
    description:
      'O recibo de prestação de serviço é usado por freelancers e autônomos para comprovar ' +
      'o recebimento de pagamento por serviços prestados. É simples, rápido e tem validade jurídica.',
    toolHref: '/ferramentas/recibo-simples',
    toolLabel: 'Gerar Recibo de Serviço Grátis',
    whatIs:
      'O recibo de prestação de serviço é o comprovante de pagamento entre duas partes ' +
      'por um serviço realizado. Pode ser usado por diaristas, pedreiros, designers, ' +
      'professores particulares, e qualquer profissional que presta serviços.',
    whenToUse: [
      'Após concluir e receber pagamento de um serviço',
      'Para clientes que precisam de comprovante de pagamento',
      'Quando não há obrigatoriedade de nota fiscal',
      'Serviços entre pessoas físicas',
      'Freelancers, diaristas, professores, técnicos',
    ],
    requiredFields: [
      'Nome e CPF de quem prestou o serviço',
      'Nome e CPF/CNPJ de quem contratou',
      'Descrição detalhada do serviço realizado',
      'Valor recebido (em número e por extenso)',
      'Data do recebimento',
      'Assinatura do prestador de serviço',
    ],
    faqs: [
      { q: 'Freelancer pode emitir recibo?', a: 'Sim. Qualquer pessoa física pode emitir recibo de prestação de serviço para comprovar o recebimento. Se o cliente for empresa, o correto é usar o RPA (Recibo de Pagamento de Autônomo).' },
      { q: 'Qual a validade de um recibo de serviço?', a: 'O recibo de serviço tem validade jurídica e pode ser usado como prova de pagamento. Guarde por pelo menos 5 anos (prazo prescricional para cobranças de serviços).' },
      { q: 'Recibo de serviço substitui a nota fiscal?', a: 'Para clientes pessoas físicas, sim. Para empresas (CNPJ), não — é necessário emitir nota fiscal ou RPA.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Recibo Simples' },
      { href: '/ferramentas/recibo-pix', label: 'Recibo com PIX' },
      { href: '/blog/recibo-tem-validade-legal', label: 'Validade Jurídica do Recibo' },
    ],
  },
  'recibo-pagamento': {
    slug: 'recibo-pagamento',
    title: 'Modelo de Recibo de Pagamento | ReciboNaHora',
    h1: 'Modelo de Recibo de Pagamento Gratuito em PDF',
    metaDescription:
      'Modelo gratuito de recibo de pagamento para qualquer finalidade. Gere em PDF online, sem cadastro. Válido juridicamente no Brasil.',
    description:
      'O recibo de pagamento é o documento genérico para comprovar qualquer tipo de pagamento: ' +
      'quitação de dívida, compra de produto, serviço prestado ou qualquer outra transação financeira.',
    toolHref: '/ferramentas/recibo-simples',
    toolLabel: 'Gerar Recibo de Pagamento Grátis',
    whatIs:
      'O recibo de pagamento é um documento que confirma que uma quantia foi recebida. ' +
      'É o modelo mais genérico e pode ser usado para qualquer tipo de transação financeira entre pessoas.',
    whenToUse: [
      'Quitação de qualquer dívida',
      'Pagamento de serviços avulsos',
      'Compra e venda de produtos usados entre particulares',
      'Pagamento de parcelas informais',
      'Qualquer transação financeira que precisa de comprovante',
    ],
    requiredFields: [
      'Nome e CPF/CNPJ de quem recebeu',
      'Nome e CPF/CNPJ de quem pagou',
      'Valor recebido (número e por extenso)',
      'Descrição do que está sendo pago',
      'Data do pagamento',
      'Assinatura do recebedor',
    ],
    faqs: [
      { q: 'Para que serve um recibo de pagamento?', a: 'O recibo de pagamento serve para comprovar que uma quantia foi recebida. É a prova de quitação de uma dívida, pagamento de serviço ou qualquer outra transação financeira.' },
      { q: 'O recibo de pagamento precisa de reconhecimento de firma?', a: 'Não obrigatoriamente. Para transações do dia a dia, a assinatura simples já é suficiente. Para valores altos, o reconhecimento de firma em cartório dá mais segurança.' },
      { q: 'Posso gerar recibo de pagamento pelo celular?', a: 'Sim. O ReciboNaHora funciona no celular e no computador. Acesse pelo navegador, preencha e baixe o PDF em segundos.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Recibo Simples' },
      { href: '/ferramentas/recibo-pix', label: 'Recibo com PIX' },
      { href: '/blog/como-fazer-recibo', label: 'Como Fazer um Recibo' },
    ],
  },
  'contrato-simples': {
    slug: 'contrato-simples',
    title: 'Modelo de Contrato Simples | ReciboNaHora',
    h1: 'Modelo de Contrato Simples Gratuito',
    metaDescription:
      'Modelo de contrato simples de prestação de serviços. Pronto para preencher, gerar em PDF e assinar. Gratuito para autônomos, MEI e freelancers.',
    description:
      'Um contrato simples de prestação de serviços protege tanto o prestador quanto o contratante. ' +
      'Mesmo sem advogado, você pode criar um contrato válido com os campos essenciais.',
    toolHref: '/ferramentas/contrato-completo',
    toolLabel: 'Gerar Contrato Grátis',
    whatIs:
      'Um contrato simples é um documento que formaliza o acordo entre duas partes. ' +
      'Estabelece o que será feito, quando, por quanto e quais são as obrigações de cada lado.',
    whenToUse: [
      'Prestação de serviços por freelancers ou autônomos',
      'Contratação de serviços por pequenas empresas',
      'Acordos de parceria ou colaboração',
      'Projetos com escopo e prazo definidos',
    ],
    requiredFields: [
      'Qualificação completa das partes (nome, CPF/CNPJ, endereço)',
      'Descrição detalhada do serviço',
      'Prazo de execução',
      'Valor total e forma de pagamento',
      'Obrigações de cada parte',
      'Cláusula de rescisão',
      'Data e assinaturas de ambas as partes',
      'Assinaturas de duas testemunhas (para força de título executivo)',
    ],
    faqs: [
      { q: 'Contrato simples tem validade jurídica?', a: 'Sim. Um contrato simples, assinado pelas partes, tem plena validade jurídica. Com duas testemunhas, ele adquire força de título executivo extrajudicial, o que agiliza cobranças judiciais.' },
      { q: 'Preciso de advogado para fazer um contrato?', a: 'Não é obrigatório para a maioria dos contratos do dia a dia. Para contratos complexos, de alto valor ou com cláusulas específicas, é recomendável consultar um advogado.' },
      { q: 'Contrato precisa de reconhecimento de firma?', a: 'Não obrigatoriamente para contratos de prestação de serviços comuns. O reconhecimento de firma adiciona segurança e é recomendado para contratos de alto valor.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/contrato-completo', label: 'Gerador de Contrato' },
      { href: '/contratos', label: 'Todos os Contratos' },
      { href: '/contrato-locacao', label: 'Contrato de Locação' },
    ],
  },
};

export const ALL_SLUGS = Object.keys(MODELOS);
