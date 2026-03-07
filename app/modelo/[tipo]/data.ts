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
  'recibo-pix': {
    slug: 'recibo-pix',
    title: 'Modelo de Recibo de Pagamento via PIX | ReciboNaHora',
    h1: 'Modelo de Recibo de Pagamento via PIX',
    metaDescription: 'Modelo gratuito de recibo para pagamentos realizados via PIX. Comprove a transação com documento válido. Gere em PDF online, sem cadastro.',
    description: 'Mesmo com o comprovante do PIX, o recibo formaliza a quitação do serviço ou produto. Registre o pagamento, a chave PIX utilizada e o número de transação.',
    toolHref: '/ferramentas/recibo-pix',
    toolLabel: 'Gerar Recibo PIX Grátis',
    whatIs: 'O recibo de pagamento via PIX complementa o comprovante da transação bancária. Ele especifica exatamente o que foi pago — serviço, produto ou dívida — vinculando o ID da transação ao acordo entre as partes.',
    whenToUse: ['Serviços pagos via PIX entre pessoas físicas', 'Compra e venda de produtos usados entre particulares', 'Pagamento de aluguel via PIX', 'Quando o contratante pede comprovante além do extrato bancário'],
    requiredFields: ['Nome e CPF de quem recebeu', 'Nome e CPF de quem pagou', 'Valor recebido (número e por extenso)', 'Chave PIX utilizada', 'ID ou código da transação PIX', 'Data e horário do recebimento', 'Descrição do que foi pago'],
    faqs: [
      { q: 'Preciso de recibo se tenho comprovante do PIX?', a: 'O comprovante do PIX prova a transferência, mas não especifica o motivo. O recibo formaliza a quitação específica (serviço X, aluguel de mês Y, etc.) e tem mais força probatória.' },
      { q: 'Recibo PIX tem validade jurídica?', a: 'Sim. O recibo com os dados completos — incluindo o ID da transação — tem plena validade jurídica como documento comprobatório de pagamento.' },
      { q: 'E se o PIX cair na conta errada?', a: 'O recibo não resolve erros de transferência. Em caso de PIX enviado para conta errada, contate imediatamente seu banco para solicitar devolução via MED (Mecanismo Especial de Devolução).' },
    ],
    relatedLinks: [{ href: '/ferramentas/recibo-pix', label: 'Recibo com PIX' }, { href: '/ferramentas/recibo-simples', label: 'Recibo Simples' }, { href: '/blog/como-fazer-recibo', label: 'Como Fazer um Recibo' }],
  },
  'recibo-salario': {
    slug: 'recibo-salario',
    title: 'Modelo de Recibo de Salário | Holerite Simples | ReciboNaHora',
    h1: 'Modelo de Recibo de Salário (Holerite Simplificado)',
    metaDescription: 'Modelo gratuito de recibo de salário para empregadores domésticos e pequenas empresas. Inclui descontos de INSS e IRRF. Gere em PDF sem cadastro.',
    description: 'O recibo de salário (holerite) é obrigatório para todo pagamento de salário. Detalha o valor bruto, os descontos legais (INSS, IRRF) e o líquido a receber.',
    toolHref: '/ferramentas/recibo-simples',
    toolLabel: 'Gerar Recibo de Salário',
    whatIs: 'O holerite ou recibo de pagamento de salário comprova o pagamento de remuneração ao trabalhador. É obrigatório pela CLT e deve ser entregue mensalmente.',
    whenToUse: ['Pagamento de salário mensal a empregado doméstico', 'Pagamento de salário em pequenas empresas sem sistema de RH', 'Trabalhadores informais que querem comprovar renda', 'Pagamento de 13º salário'],
    requiredFields: ['Nome completo e CPF do empregado', 'Nome/razão social e CPF/CNPJ do empregador', 'Mês/ano de competência', 'Salário bruto', 'INSS descontado', 'IRRF descontado (se aplicável)', 'Outros descontos', 'Salário líquido', 'Data do pagamento e assinatura'],
    faqs: [
      { q: 'Empregado doméstico precisa de holerite?', a: 'Sim. O eSocial Doméstico exige o registro do pagamento. O recibo serve como comprovante de quitação. Guarde por pelo menos 5 anos.' },
      { q: 'Recibo de salário substitui carteira de trabalho?', a: 'Não. O recibo comprova o pagamento mensal, mas não substitui o registro em CTPS. Ambos são necessários para trabalhadores CLT.' },
      { q: 'Trabalhador informal pode ter recibo de salário?', a: 'Pode. O recibo informal pode ser usado para comprovar renda informalmente, mas não tem força de um holerite CLT para fins bancários e financiamentos.' },
    ],
    relatedLinks: [{ href: '/ferramentas/recibo-simples', label: 'Recibo Simples' }, { href: '/ferramentas/vale-transporte', label: 'Vale Transporte' }, { href: '/mei', label: 'Ferramentas MEI' }],
  },
  'contrato-locacao': {
    slug: 'contrato-locacao',
    title: 'Modelo de Contrato de Locação Residencial | ReciboNaHora',
    h1: 'Modelo de Contrato de Locação Residencial Gratuito',
    metaDescription: 'Modelo completo e gratuito de contrato de locação residencial conforme a Lei do Inquilinato. Gere em PDF online, sem cadastro. Válido em todo o Brasil.',
    description: 'O contrato de locação regula a relação entre proprietário e inquilino: prazo, valor, reajuste, garantias e obrigações de cada parte.',
    toolHref: '/contrato-locacao',
    toolLabel: 'Gerar Contrato de Locação Grátis',
    whatIs: 'O contrato de locação residencial estabelece os termos do aluguel de um imóvel. É regido pela Lei 8.245/91 (Lei do Inquilinato) e protege locador e locatário.',
    whenToUse: ['Ao alugar um imóvel residencial', 'Renovação de contrato de locação', 'Formalizar locação de imóvel de temporada', 'Regularizar situação de imóvel alugado informalmente'],
    requiredFields: ['Qualificação completa do locador e locatário', 'Endereço e descrição completa do imóvel', 'Valor do aluguel e índice de reajuste (IGPM ou IPCA)', 'Prazo do contrato', 'Tipo de garantia: caução, fiador ou seguro-fiança', 'Responsabilidade por taxas (IPTU, condomínio)', 'Data de vencimento do aluguel'],
    faqs: [
      { q: 'Contrato verbal de aluguel tem validade?', a: 'Sim, mas é muito arriscado. Sem contrato escrito, fica difícil provar valor do aluguel, prazo e demais condições acordadas.' },
      { q: 'Qual o prazo mínimo de contrato de aluguel?', a: 'Não há prazo mínimo legal. Contratos com prazo menor que 30 meses podem ser rescindidos pelo proprietário após o vencimento sem necessidade de justificativa.' },
      { q: 'Posso fazer contrato de locação sem imobiliária?', a: 'Sim. O contrato entre particulares tem plena validade. Faça uma vistoria documentada e considere registrar o contrato em cartório.' },
    ],
    relatedLinks: [{ href: '/contrato-locacao', label: 'Gerar Contrato de Locação' }, { href: '/ferramentas/imobiliario', label: 'Recibo de Aluguel' }, { href: '/modelo/recibo-aluguel', label: 'Modelo Recibo de Aluguel' }],
  },
  'procuracao-simples': {
    slug: 'procuracao-simples',
    title: 'Modelo de Procuração Simples Gratuita | ReciboNaHora',
    h1: 'Modelo de Procuração Simples',
    metaDescription: 'Modelo gratuito de procuração simples para representação em atos cotidianos. Gere em PDF online sem cadastro. Válida em todo o Brasil.',
    description: 'A procuração simples autoriza outra pessoa a agir em seu nome para atos específicos. Ideal para representação em órgãos públicos, bancos e cartórios.',
    toolHref: '/ferramentas/procuracao',
    toolLabel: 'Gerar Procuração Grátis',
    whatIs: 'A procuração é o documento pelo qual o outorgante autoriza o outorgado a praticar atos em seu nome. A procuração simples serve para atos cotidianos de menor complexidade.',
    whenToUse: ['Retirada de documentos em órgãos públicos', 'Representação em assembleias', 'Recebimento de correspondências ou entregas', 'Operações bancárias simples', 'Representação em cartórios para atos específicos'],
    requiredFields: ['Nome completo, CPF e RG do outorgante', 'Nome completo, CPF e RG do outorgado', 'Descrição clara e específica dos poderes concedidos', 'Prazo de validade da procuração', 'Local e data da outorga', 'Assinatura do outorgante'],
    faqs: [
      { q: 'Procuração simples precisa de reconhecimento de firma?', a: 'Para atos simples geralmente não. Para atos em cartórios, bancos, DETRAN e imóveis, o reconhecimento de firma é obrigatório.' },
      { q: 'Qual a validade de uma procuração?', a: 'Pode ter prazo definido ou ser por prazo indeterminado. Sem prazo definido, vale até ser revogada. Para atos específicos, defina sempre um prazo.' },
      { q: 'Posso revogar uma procuração?', a: 'Sim. A procuração pode ser revogada a qualquer momento pelo outorgante, por escrito. Comunique ao outorgado e às instituições onde foi usada.' },
    ],
    relatedLinks: [{ href: '/ferramentas/procuracao', label: 'Gerar Procuração' }, { href: '/ferramentas/procuracao-plenos-poderes', label: 'Procuração Plenos Poderes' }, { href: '/ferramentas/procuracao-inss', label: 'Procuração INSS' }],
  },
  'nota-promissoria': {
    slug: 'nota-promissoria',
    title: 'Modelo de Nota Promissória Gratuita | ReciboNaHora',
    h1: 'Modelo de Nota Promissória Gratuito',
    metaDescription: 'Modelo gratuito de nota promissória. Preencha, gere em PDF e imprima. Título executivo extrajudicial válido em todo o Brasil. Sem cadastro.',
    description: 'A nota promissória é um título de crédito com força de título executivo extrajudicial. Representa uma promessa incondicional de pagamento.',
    toolHref: '/ferramentas/nota-promissoria',
    toolLabel: 'Gerar Nota Promissória Grátis',
    whatIs: 'A nota promissória é um título de crédito regulado pelo Decreto 57.663/66. O emitente promete pagar ao beneficiário um valor específico na data do vencimento.',
    whenToUse: ['Parcelamento de dívidas entre pessoas físicas', 'Garantia em empréstimos pessoais', 'Acordos extrajudiciais de pagamento', 'Compra e venda de bens com pagamento futuro'],
    requiredFields: ['Valor em número e por extenso', 'Data de vencimento', 'Nome, CPF e endereço do emitente', 'Nome e CPF do beneficiário', 'Local e data de emissão', 'Assinatura do emitente', 'Nome e CPF do avalista (se houver)'],
    faqs: [
      { q: 'Nota promissória precisa de reconhecimento de firma?', a: 'Não é obrigatório para a validade do título, mas é recomendado para valores altos para dificultar contestações de falsidade.' },
      { q: 'Qual o prazo para cobrar uma nota promissória?', a: 'O prazo prescricional é de 3 anos a partir do vencimento para ação contra o emitente. Após esse prazo, o título perde a executividade.' },
      { q: 'Nota promissória pode ser parcelada?', a: 'Sim. Você pode emitir uma nota para cada parcela, ou uma nota com várias datas de vencimento especificadas no documento.' },
    ],
    relatedLinks: [{ href: '/ferramentas/nota-promissoria', label: 'Gerar Nota Promissória' }, { href: '/contratos', label: 'Modelos de Contratos' }, { href: '/blog/nota-promissoria-como-funciona', label: 'Como funciona a Nota Promissória' }],
  },
  'declaracao-endereco': {
    slug: 'declaracao-endereco',
    title: 'Modelo de Declaração de Endereço | Comprovante de Residência | ReciboNaHora',
    h1: 'Modelo de Declaração de Endereço Residencial',
    metaDescription: 'Modelo gratuito de declaração de endereço para usar como comprovante de residência. Aceito em bancos, órgãos públicos e financeiras. Gere em PDF.',
    description: 'A declaração de endereço é aceita como comprovante de residência quando não há conta de água, luz ou gás no seu nome.',
    toolHref: '/requerimentos/declaracao-endereco',
    toolLabel: 'Gerar Declaração de Endereço Grátis',
    whatIs: 'A declaração de endereço é um documento em que o próprio morador declara sob responsabilidade que reside em determinado endereço, com todos os dados completos.',
    whenToUse: ['Abertura de conta bancária ou fintech', 'Cadastro em financeiras e crédito', 'Quando não há contas de água ou luz no seu nome', 'Quando mora na casa de familiar ou amigo', 'Para programas sociais e benefícios'],
    requiredFields: ['Nome completo e CPF do declarante', 'Endereço completo (rua, número, bairro, CEP, cidade, estado)', 'Período aproximado de residência', 'Finalidade da declaração', 'Data da declaração', 'Assinatura do declarante'],
    faqs: [
      { q: 'Declaração de endereço tem prazo de validade?', a: 'Formalmente não, mas a maioria das instituições aceita apenas declarações com até 90 dias. Emita sempre com a data atual.' },
      { q: 'Precisa de reconhecimento de firma?', a: 'Depende da instituição. Bancos digitais geralmente aceitam sem reconhecimento. Órgãos públicos e cartórios podem exigir firma reconhecida.' },
      { q: 'Posso fazer a declaração para outra pessoa?', a: 'Sim. Se você é proprietário ou responsável pelo imóvel, pode declarar que outra pessoa reside no local.' },
    ],
    relatedLinks: [{ href: '/requerimentos/declaracao-endereco', label: 'Gerar Declaração de Endereço' }, { href: '/requerimentos', label: 'Todos os Requerimentos' }, { href: '/blog/declaracao-endereco-como-fazer', label: 'Como Fazer Declaração de Endereço' }],
  },
  'recibo-sinal': {
    slug: 'recibo-sinal',
    title: 'Modelo de Recibo de Sinal / Arras | ReciboNaHora',
    h1: 'Modelo de Recibo de Sinal (Arras)',
    metaDescription: 'Modelo gratuito de recibo de sinal ou arras para reservas de imóveis, veículos ou serviços. Proteção jurídica para comprador e vendedor. Gere em PDF.',
    description: 'O recibo de sinal (arras) formaliza o pagamento de entrada ou reserva em negociações. Define as condições de devolução em caso de desistência.',
    toolHref: '/ferramentas/recibo-simples',
    toolLabel: 'Gerar Recibo de Sinal',
    whatIs: 'As arras ou sinal são o valor pago antecipadamente para confirmar um negócio. O recibo de sinal registra esse pagamento e as condições para devolução ou retenção.',
    whenToUse: ['Reserva de imóvel antes da assinatura do contrato', 'Sinal para compra de veículo', 'Reserva de serviços (festas, eventos, reformas)', 'Qualquer negociação que exija confirmar intenção de compra'],
    requiredFields: ['Dados do comprador (nome, CPF)', 'Dados do vendedor (nome, CPF/CNPJ)', 'Descrição do bem ou serviço', 'Valor total da negociação', 'Valor do sinal pago', 'Condições para desistência do comprador', 'Condições para desistência do vendedor', 'Prazo para conclusão do negócio', 'Data e assinatura de ambas as partes'],
    faqs: [
      { q: 'Posso perder o sinal se desistir?', a: 'Sim. Por padrão, quem paga o sinal e desiste perde o valor. Se quem recebeu o sinal desistir, deve devolver em dobro (Art. 418 do Código Civil).' },
      { q: 'Recibo de sinal precisa de testemunhas?', a: 'Para maior proteção, sim. Duas testemunhas dão força de título executivo ao documento, facilitando cobrança em caso de descumprimento.' },
      { q: 'Qual a diferença entre sinal e entrada?', a: 'O sinal (arras) é um instrumento jurídico com regras específicas do Código Civil. A entrada é um pagamento parcial do preço, sem necessariamente ter as consequências jurídicas das arras.' },
    ],
    relatedLinks: [{ href: '/ferramentas/recibo-simples', label: 'Gerar Recibo' }, { href: '/modelo/recibo-aluguel', label: 'Modelo Recibo de Aluguel' }, { href: '/contrato-locacao', label: 'Contrato de Locação' }],
  },
  'recibo-honorarios': {
    slug: 'recibo-honorarios',
    title: 'Modelo de Recibo de Honorários Profissionais | ReciboNaHora',
    h1: 'Modelo de Recibo de Honorários Profissionais',
    metaDescription: 'Modelo gratuito de recibo de honorários para advogados, médicos, contadores e outros profissionais liberais. Gere em PDF sem cadastro.',
    description: 'O recibo de honorários é o comprovante de pagamento por serviços de profissional liberal: advogados, médicos, contadores, arquitetos e outros.',
    toolHref: '/ferramentas/recibo-simples',
    toolLabel: 'Gerar Recibo de Honorários',
    whatIs: 'Honorários são a remuneração dos profissionais liberais pelo trabalho intelectual. O recibo de honorários documenta o recebimento desse valor, especificando o serviço prestado.',
    whenToUse: ['Advogados ao receber honorários de clientes', 'Médicos e profissionais de saúde pessoa física', 'Contadores e consultores em geral', 'Arquitetos e engenheiros por laudos ou consultorias'],
    requiredFields: ['Nome, CPF e número de registro profissional', 'Nome/empresa e CPF/CNPJ do cliente', 'Descrição do serviço', 'Valor total recebido em número e por extenso', 'Data do recebimento', 'Assinatura do profissional'],
    faqs: [
      { q: 'Advogado pessoa física precisa emitir nota fiscal?', a: 'Depende do município e do tipo de serviço. Para serviços para empresas (CNPJ), o ideal é emitir NFS-e. Para pessoas físicas, o recibo de honorários é amplamente aceito.' },
      { q: 'Recibo de honorários médicos serve para reembolso do plano?', a: 'Pode ser exigido recibo ou nota fiscal dependendo do plano. Consulte seu plano de saúde — muitos aceitam recibos de médicos credenciados como pessoa física.' },
      { q: 'Profissional liberal com MEI pode emitir recibo?', a: 'MEI deve emitir nota fiscal para serviços a empresas. Para clientes pessoa física, pode usar recibo. Atenção: algumas categorias são vedadas para MEI (advogados, médicos).' },
    ],
    relatedLinks: [{ href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' }, { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' }, { href: '/modelo/recibo-prestacao-servico', label: 'Modelo Recibo de Serviço' }],
  },
  'contrato-prestacao-servico': {
    slug: 'contrato-prestacao-servico',
    title: 'Modelo de Contrato de Prestação de Serviço | ReciboNaHora',
    h1: 'Modelo de Contrato de Prestação de Serviço Gratuito',
    metaDescription: 'Modelo completo e gratuito de contrato de prestação de serviço. Para autônomos, freelancers e MEI. Cláusulas essenciais, gere em PDF sem cadastro.',
    description: 'O contrato de prestação de serviços formaliza o acordo entre prestador e contratante. Define escopo, prazo, valor e responsabilidades.',
    toolHref: '/ferramentas/contrato-completo',
    toolLabel: 'Gerar Contrato de Serviço Grátis',
    whatIs: 'O contrato de prestação de serviço estabelece as obrigações do prestador e do contratante. É regulado pelo Art. 594 a 609 do Código Civil brasileiro.',
    whenToUse: ['Freelancers em projetos com escopo definido', 'Autônomos prestando serviços recorrentes', 'MEI formalizando prestação de serviços', 'Pequenas empresas contratando serviços de terceiros'],
    requiredFields: ['Qualificação completa das partes', 'Objeto: descrição detalhada do serviço', 'Prazo de execução e entrega', 'Valor total e cronograma de pagamento', 'Obrigações de cada parte', 'Cláusula de confidencialidade (se aplicável)', 'Condições de rescisão e multa', 'Foro de eleição'],
    faqs: [
      { q: 'Qual a diferença entre contrato de serviço e CLT?', a: 'No contrato PJ ou autônomo, não há vínculo empregatício. Na CLT, há subordinação e habitualidade. Usar contrato de serviço para disfarçar vínculo CLT é "pejotização" ilegal.' },
      { q: 'Contrato de serviço pode ser renovado automaticamente?', a: 'Sim, se houver cláusula de renovação automática. Inclua o prazo de aviso prévio para não renovar (ex: 30 dias antes do vencimento).' },
      { q: 'Posso ter multa rescisória por parte do contratante?', a: 'Sim. É recomendado incluir multa para ambas as partes em caso de rescisão antecipada sem justa causa.' },
    ],
    relatedLinks: [{ href: '/ferramentas/contrato-completo', label: 'Gerar Contrato' }, { href: '/modelo/contrato-simples', label: 'Contrato Simples' }, { href: '/blog/contrato-prestacao-servico-modelo', label: 'Guia de Contrato de Serviço' }],
  },
  'autorizacao-viagem': {
    slug: 'autorizacao-viagem',
    title: 'Modelo de Autorização de Viagem para Menor | ReciboNaHora',
    h1: 'Modelo de Autorização de Viagem para Menor de Idade',
    metaDescription: 'Modelo gratuito de autorização de viagem para menor de 18 anos. Válido para viagens nacionais e internacionais. Gere em PDF sem cadastro.',
    description: 'A autorização de viagem é obrigatória quando a criança ou adolescente viaja desacompanhado dos pais ou com apenas um dos responsáveis.',
    toolHref: '/ferramentas/autorizacao-viagem',
    toolLabel: 'Gerar Autorização de Viagem Grátis',
    whatIs: 'A autorização de viagem é um documento assinado pelos responsáveis legais que permite que o menor viaje desacompanhado ou com terceiros. É exigida em aeroportos, rodoviárias e postos de fronteira.',
    whenToUse: ['Viagem com apenas um dos pais (o outro deve autorizar)', 'Viagem com avós, tios ou outros responsáveis', 'Viagem escolar ou de intercâmbio', 'Viagem internacional sem ambos os pais'],
    requiredFields: ['Nome completo do menor e data de nascimento', 'Nome, CPF e RG do responsável que autoriza', 'Nome, CPF e RG de quem vai acompanhar (se houver)', 'Destino da viagem', 'Período: data de saída e retorno', 'Finalidade da viagem', 'Assinatura do(s) responsável(is) com firma reconhecida'],
    faqs: [
      { q: 'A autorização precisa de reconhecimento de firma?', a: 'Para viagens aéreas nacionais e internacionais, o reconhecimento de firma é obrigatório ou fortemente recomendado para evitar problemas na embarque.' },
      { q: 'Um dos pais pode autorizar sozinho?', a: 'Sim, quando o menor viaja com o outro pai, basta a autorização do pai que não vai junto. Para viagem sozinho ou com terceiro, ambos os responsáveis devem assinar.' },
      { q: 'Qual prazo mínimo para providenciar a autorização?', a: 'Providencie com pelo menos 3 dias de antecedência para ter tempo do reconhecimento de firma. Em urgência, alguns cartórios aceitam hora marcada no mesmo dia.' },
    ],
    relatedLinks: [{ href: '/ferramentas/autorizacao-viagem', label: 'Gerar Autorização de Viagem' }, { href: '/ferramentas/procuracao', label: 'Procuração Simples' }, { href: '/requerimentos', label: 'Todos os Requerimentos' }],
  },
};

export const ALL_SLUGS = Object.keys(MODELOS);
