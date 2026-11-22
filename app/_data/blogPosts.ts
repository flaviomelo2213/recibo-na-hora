export interface BlogSection {
  type: 'text' | 'list' | 'ol' | 'callout' | 'h3' | 'table'
  content?: string
  items?: string[]
  variant?: 'info' | 'warning' | 'success' | 'amber'
  title?: string
  rows?: string[][]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  category: string
  readTime: string
  keywords: string[]
  intro: string
  sections: Array<{
    h2: string
    content: BlogSection[]
  }>
  faqs: Array<{ q: string; a: string }>
  relatedPosts: Array<{ slug: string; title: string }>
  relatedTools: Array<{ href: string; label: string }>
}

/**
 * Posts served by the dynamic app/blog/[slug]/page.tsx route.
 * Static posts (como-fazer-recibo, recibo-tem-validade-legal, etc.)
 * have their own directory and take routing priority.
 */
export const BLOG_POSTS: Record<string, BlogPost> = {
  'modelo-de-recibo-aluguel': {
    slug: 'modelo-de-recibo-aluguel',
    title: 'Modelo de Recibo de Aluguel 2026: Grátis, Completo e com PDF',
    description:
      'Baixe um modelo de recibo de aluguel completo e gratuito. Saiba quais campos são obrigatórios, como preencher corretamente e gere o PDF em segundos.',
    datePublished: '2026-01-10',
    dateModified: '2026-03-01',
    category: 'Recibos',
    readTime: '6 min',
    keywords: ['modelo recibo aluguel', 'recibo aluguel gratuito', 'recibo aluguel pdf', 'recibo aluguel 2026'],
    intro:
      'O recibo de aluguel é um documento obrigatório por lei (Art. 22 da Lei do Inquilinato). Neste guia você vai encontrar um modelo completo, pronto para preencher e baixar em PDF — totalmente grátis.',
    sections: [
      {
        h2: 'O que deve conter um recibo de aluguel?',
        content: [
          { type: 'text', content: 'Um recibo de aluguel válido precisa ter campos específicos para ter valor jurídico. Veja a lista completa:' },
          { type: 'ol', items: [
            'Nome completo e CPF do locador (proprietário)',
            'Nome completo e CPF do locatário (inquilino)',
            'Endereço completo do imóvel locado',
            'Valor do aluguel em número e por extenso',
            'Competência: mês e ano a que se refere',
            'Data do efetivo recebimento',
            'Assinatura do locador',
          ]},
        ],
      },
      {
        h2: 'Recibo de aluguel é obrigatório?',
        content: [
          { type: 'callout', variant: 'success', title: 'Sim, é obrigatório por lei', content: 'O Art. 22, inciso VI da Lei 8.245/91 (Lei do Inquilinato) obriga o proprietário a fornecer recibo detalhado de todos os pagamentos feitos pelo inquilino, especificando os valores de aluguel e acessórios.' },
          { type: 'text', content: 'Se o proprietário recusar emitir o recibo, o inquilino pode consignar o pagamento judicialmente ou depositar em conta bancária com aviso formal. O descumprimento pelo locador pode ser caracterizado como infração contratual.' },
        ],
      },
      {
        h2: 'Como preencher passo a passo',
        content: [
          { type: 'ol', items: [
            'Acesse o gerador gratuito de Recibo de Aluguel no ReciboNaHora',
            'Preencha os dados do proprietário (locador): nome e CPF',
            'Preencha os dados do inquilino (locatário): nome e CPF',
            'Informe o endereço completo do imóvel',
            'Digite o valor do aluguel',
            'Selecione a competência (mês/ano) e a data de pagamento',
            'Clique em "Gerar PDF" e baixe o documento',
            'Imprima, assine e entregue uma via ao inquilino',
          ]},
        ],
      },
      {
        h2: 'Recibo de aluguel digital tem validade?',
        content: [
          { type: 'text', content: 'Sim. O recibo de aluguel digital tem plena validade jurídica no Brasil, conforme a MP 2.200-2/2001 e a Lei 14.063/2020. A assinatura pode ser eletrônica (via plataformas como Gov.br, DocuSign, ClickSign).' },
          { type: 'callout', variant: 'info', title: 'Dica prática', content: 'Para maior segurança, envie o recibo por e-mail ao inquilino logo após receber o pagamento. O registro no e-mail serve como prova adicional de data e envio.' },
        ],
      },
      {
        h2: 'Por quanto tempo guardar o recibo?',
        content: [
          { type: 'text', content: 'Guarde os recibos de aluguel por pelo menos 3 anos após o término do contrato. Em casos de cobrança judicial, o prazo prescricional de ações de aluguel é de 3 anos (Art. 206, § 3º, I do Código Civil).' },
          { type: 'callout', variant: 'amber', title: 'Recomendação', content: 'Mantenha os recibos digitalizados em nuvem (Google Drive, iCloud) para garantir que não se perdam. O PDF gerado pelo ReciboNaHora pode ser armazenado diretamente.' },
        ],
      },
    ],
    faqs: [
      { q: 'Posso usar o mesmo modelo para aluguel comercial?', a: 'Sim. O modelo de recibo de aluguel serve para imóveis residenciais e comerciais. No caso de imóvel comercial, o contrato é regido pela Lei de Locações e as regras gerais de recibo se aplicam da mesma forma.' },
      { q: 'O recibo precisa de reconhecimento de firma?', a: 'Não. Para transações de aluguel do dia a dia, a assinatura simples é suficiente. O reconhecimento de firma é recomendado apenas para recibos de valores muito altos ou quando uma das partes solicitar.' },
      { q: 'E se o aluguel for pago por PIX?', a: 'Mesmo quando o pagamento é feito via PIX, o recibo ainda deve ser emitido. O comprovante do PIX registra a transferência, mas o recibo formaliza a quitação do aluguel especificamente.' },
      { q: 'Recibo de aluguel serve como contrato?', a: 'Não. O recibo comprova o pagamento de uma competência específica. O contrato de locação é o documento que rege a relação de aluguel. Você precisa dos dois.' },
    ],
    relatedPosts: [
      { slug: 'como-fazer-recibo', title: 'Como fazer um recibo' },
    ],
    relatedTools: [
      { href: '/ferramentas/imobiliario', label: 'Gerar Recibo de Aluguel' },
      { href: '/contrato-locacao', label: 'Contrato de Locação' },
      { href: '/modelo/recibo-aluguel', label: 'Modelo de Recibo de Aluguel' },
    ],
  },

  'recibo-prestacao-servico-autonomo': {
    slug: 'recibo-prestacao-servico-autonomo',
    title: 'Recibo de Prestação de Serviço para Autônomo: Modelo Completo 2026',
    description:
      'Guia completo sobre recibo de prestação de serviço para autônomos. Quando usar, o que incluir, diferença com RPA e como gerar em PDF grátis.',
    datePublished: '2026-01-15',
    category: 'Recibos',
    readTime: '5 min',
    keywords: ['recibo prestacao servico autonomo', 'recibo autonomo', 'recibo servico freelancer', 'modelo recibo servico'],
    intro:
      'Todo profissional autônomo precisa saber emitir recibos corretamente. Neste artigo você aprende quando usar recibo simples, quando usar RPA, e como gerar o documento em PDF gratuitamente.',
    sections: [
      {
        h2: 'Recibo simples ou RPA? Entenda a diferença',
        content: [
          { type: 'table', rows: [
            ['Situação', 'Documento correto'],
            ['Serviço para pessoa física', 'Recibo simples'],
            ['Serviço para empresa (CNPJ)', 'RPA (Recibo de Pagamento de Autônomo)'],
            ['MEI prestando serviço para empresa', 'Nota Fiscal de Serviços (NFS-e)'],
          ]},
          { type: 'text', content: 'Use o recibo simples quando o contratante é pessoa física. Use o RPA quando é pessoa jurídica, pois a empresa precisa reter INSS e IR antes de pagar.' },
        ],
      },
      {
        h2: 'O que incluir no recibo de serviço',
        content: [
          { type: 'ol', items: [
            'Seus dados: nome completo, CPF e endereço',
            'Dados do contratante: nome/empresa e CPF/CNPJ',
            'Descrição detalhada do serviço realizado',
            'Valor recebido em número e por extenso',
            'Forma de pagamento (dinheiro, PIX, transferência)',
            'Data do recebimento',
            'Sua assinatura',
          ]},
        ],
      },
      {
        h2: 'Freelancer tem obrigação de emitir recibo?',
        content: [
          { type: 'text', content: 'Não é obrigação legal para prestações entre pessoas físicas, mas é altamente recomendado. O recibo protege você em caso de disputa: prova que o pagamento foi feito.' },
          { type: 'callout', variant: 'success', title: 'Boa prática', content: 'Sempre emita recibo para serviços acima de R$ 200. Para valores menores, o comprovante do PIX pode ser suficiente, mas o recibo completo dá mais segurança.' },
        ],
      },
      {
        h2: 'Como gerar o recibo em PDF grátis',
        content: [
          { type: 'ol', items: [
            'Acesse /ferramentas/recibo-simples no ReciboNaHora',
            'Preencha seus dados e os dados do contratante',
            'Descreva o serviço com clareza',
            'Informe o valor e a data',
            'Clique em "Gerar PDF" — sem cadastro necessário',
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'Posso emitir recibo mesmo sem CNPJ?', a: 'Sim. Qualquer pessoa física pode emitir recibo de prestação de serviço. O recibo é feito com seu CPF e não precisa de CNPJ.' },
      { q: 'Recibo de serviço precisa de testemunhas?', a: 'Não obrigatoriamente. Para serviços simples do dia a dia, o recibo com assinatura das duas partes já é suficiente. Testemunhas são recomendadas para valores altos.' },
      { q: 'Por quanto tempo guardar?', a: 'Guarde por pelo menos 5 anos. O prazo prescricional para cobrança de dívidas de serviços é de 5 anos (Art. 206, § 5º do Código Civil).' },
      { q: 'Preciso de papel específico para o recibo?', a: 'Não. Qualquer papel A4 branco serve. O importante são os dados corretos. Nosso gerador produz PDF pronto para impressão.' },
      { q: 'Posso fazer recibo à mão?', a: 'Sim. Recibo manuscrito tem a mesma validade jurídica. Mas recibo digitado ou gerado por sistema é mais legível e menos sujeito a rasuras.' },
      { q: 'Recibo de autônomo conta para aposentadoria?', a: 'Recibo simples não recolhe INSS automaticamente. Para contar para aposentadoria, o autônomo deve recolher o INSS por conta própria (Contribuinte Individual, código 1163) mensalmente.' },
    ],
    relatedPosts: [
      { slug: 'como-fazer-recibo', title: 'Como fazer um recibo' },
    ],
    relatedTools: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/modelo/recibo-prestacao-servico', label: 'Modelo de Recibo de Serviço' },
    ],
  },

  'como-fazer-rpa': {
    slug: 'como-fazer-rpa',
    title: 'Como Fazer RPA (Recibo de Pagamento de Autônomo): Guia Passo a Passo 2026',
    description:
      'Aprenda a preencher o RPA corretamente: quais impostos calcular (INSS, IR, ISS), quando usar e como gerar grátis em PDF. Guia atualizado 2026.',
    datePublished: '2026-01-20',
    category: 'Recibos',
    readTime: '7 min',
    keywords: ['como fazer rpa', 'recibo pagamento autonomo', 'rpa impostos', 'rpa inss ir iss', 'rpa pdf gratis'],
    intro:
      'O RPA (Recibo de Pagamento de Autônomo) é usado quando uma empresa contrata um profissional sem CNPJ. Entenda como calcular os impostos e preencher corretamente.',
    sections: [
      {
        h2: 'O que é o RPA e quando usar',
        content: [
          { type: 'text', content: 'O RPA é o documento que formaliza o pagamento de um autônomo (pessoa física sem CNPJ) por uma empresa (pessoa jurídica). Ele obrigatoriamente registra os impostos retidos pela empresa antes do pagamento.' },
          { type: 'callout', variant: 'amber', title: 'Atenção', content: 'Se você é MEI (Microempreendedor Individual), NÃO use RPA. Como MEI, você emite Nota Fiscal de Serviços (NFS-e) para empresas.' },
        ],
      },
      {
        h2: 'Impostos do RPA: como calcular',
        content: [
          { type: 'table', rows: [
            ['Imposto', 'Como incide', 'Quem retém', 'O que confirmar'],
            ['INSS', 'Alíquota sobre o valor bruto, limitada ao teto do salário de contribuição', 'Empresa retém e recolhe', 'Alíquota aplicável ao enquadramento e o teto vigente'],
            ['IRRF', 'Tabela progressiva, com parcela a deduzir por faixa', 'Empresa retém e recolhe', 'A tabela vigente na data do pagamento'],
            ['ISS', 'Alíquota municipal sobre o serviço; nem sempre há retenção', 'Empresa retém, quando obrigada', 'A legislação do município e o tipo de serviço'],
          ]},
          { type: 'text', content: 'O valor líquido que você recebe = Valor bruto − INSS − IRRF − ISS. A empresa é responsável por calcular e recolher essas retenções ao governo.' },
          { type: 'callout', variant: 'amber', title: 'Alíquotas e faixas mudam', content: 'Os percentuais, as faixas da tabela do IRRF e o teto do INSS são reajustados periodicamente, e o ISS varia de município para município. Confirme os valores vigentes na data do pagamento junto à Receita Federal, ao INSS e à prefeitura — ou com a contabilidade da empresa contratante.' },
        ],
      },
      {
        h2: 'Passo a passo: preenchendo o RPA',
        content: [
          { type: 'ol', items: [
            'Acesse o gerador de RPA no ReciboNaHora',
            'Preencha seus dados: nome, CPF, endereço',
            'Preencha os dados da empresa: razão social, CNPJ, endereço',
            'Descreva o serviço prestado com detalhes',
            'Informe o valor bruto do serviço',
            'Calcule o INSS aplicando a alíquota vigente sobre o valor bruto, respeitando o teto',
            'Calcule o IRRF conforme a tabela progressiva vigente',
            'Informe o ISS conforme a alíquota da sua cidade, se houver retenção',
            'O sistema calcula o valor líquido automaticamente',
            'Gere o PDF e assine',
          ]},
        ],
      },
      {
        h2: 'Como funciona a tabela do IRRF no RPA',
        content: [
          { type: 'text', content: 'O IRRF não tem alíquota única: ele é progressivo. A tabela divide a base de cálculo em faixas, aplica uma alíquota crescente a partir da primeira faixa tributável e subtrai uma "parcela a deduzir" própria de cada faixa — é essa parcela que evita que quem entra na faixa seguinte receba menos líquido do que quem ficou na anterior.' },
          { type: 'text', content: 'A base de cálculo do RPA não é o valor bruto puro: deduz-se antes a contribuição previdenciária retida e, quando houver, a dedução por dependente. Só sobre o que resta é que a tabela se aplica.' },
          { type: 'callout', variant: 'amber', title: 'Consulte a tabela vigente', content: 'Os limites das faixas, as alíquotas e as parcelas a deduzir são atualizados por norma e mudam ao longo do tempo. Não reproduzimos os valores aqui para não induzir a erro com uma tabela vencida: consulte a tabela em vigor no site da Receita Federal na data do pagamento, ou confirme com a contabilidade da empresa contratante.' },
        ],
      },
    ],
    faqs: [
      { q: 'Posso recusar emitir RPA?', a: 'Formalmente não cabe ao autônomo emitir o RPA — é a empresa quem elabora o documento. O autônomo assina o RPA como comprovante de que recebeu o valor líquido.' },
      { q: 'RPA substitui nota fiscal?', a: 'Para autônomo sem CNPJ, sim. O RPA é o documento fiscal equivalente à nota fiscal para prestadores sem CNPJ. Se você tiver MEI ou empresa, deve emitir nota fiscal.' },
      { q: 'E se a empresa não emitir o RPA?', a: 'Exija o RPA. Sem ele, você pode ter dificuldades para comprovar renda (financiamentos, etc.) e a empresa fica em situação irregular perante a Receita Federal.' },
      { q: 'Autônomo com MEI emite RPA?', a: 'Não. MEI é pessoa jurídica e deve emitir nota fiscal de serviços (NFS-e), não RPA. O RPA é exclusivo para autônomos pessoa física sem CNPJ.' },
      { q: 'O INSS retido no RPA conta para aposentadoria?', a: 'Sim. O INSS retido no RPA é recolhido pela empresa como contribuição previdenciária do autônomo. Ele conta como contribuição para fins de aposentadoria e benefícios do INSS.' },
      { q: 'Posso recusar o RPA e usar recibo simples?', a: 'Não é recomendado. A empresa é obrigada a fazer as retenções. Se usar recibo simples no lugar do RPA, a empresa fica em situação irregular perante a Receita Federal e o INSS.' },
    ],
    relatedPosts: [
      { slug: 'recibo-prestacao-servico-autonomo', title: 'Recibo de serviço para autônomo' },
    ],
    relatedTools: [
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA Grátis' },
      { href: '/modelo/recibo-autonomo', label: 'Modelo de RPA' },
      { href: '/mei', label: 'Ferramentas MEI' },
    ],
  },

  'mei-nota-fiscal-ou-recibo': {
    slug: 'mei-nota-fiscal-ou-recibo',
    title: 'MEI: Nota Fiscal ou Recibo? Quando Emitir Cada Um em 2026',
    description:
      'MEI deve emitir nota fiscal ou recibo? Descubra quando cada documento é correto, como emitir NFS-e como MEI e quando o recibo simples pode ser usado.',
    datePublished: '2026-01-25',
    category: 'MEI',
    readTime: '6 min',
    keywords: ['mei nota fiscal ou recibo', 'mei quando emitir nota fiscal', 'mei recibo', 'nfse mei', 'mei obrigacoes'],
    intro:
      'Uma das dúvidas mais comuns do MEI: quando emitir nota fiscal e quando usar recibo? A resposta depende de para quem você está prestando o serviço.',
    sections: [
      {
        h2: 'A regra básica: depende do contratante',
        content: [
          { type: 'table', rows: [
            ['Contratante', 'Documento correto'],
            ['Pessoa física (CPF)', 'Recibo simples (opcional, mas recomendado)'],
            ['Empresa (CNPJ) — prestação de serviços', 'Nota Fiscal de Serviços (NFS-e) — OBRIGATÓRIA'],
            ['Empresa (CNPJ) — venda de produto', 'Nota Fiscal de Produto (NF-e) — se necessária'],
          ]},
        ],
      },
      {
        h2: 'Quando a nota fiscal é obrigatória para MEI',
        content: [
          { type: 'list', items: [
            'Ao prestar serviços para qualquer empresa (CNPJ)',
            'Quando o contratante exigir para pagamento',
            'Em contratos com órgãos públicos',
            'Quando o valor supera R$ 120.000/ano (limite MEI)',
          ]},
          { type: 'callout', variant: 'warning', title: 'Cuidado com a retenção', content: 'Em determinadas atividades, a empresa que contrata um MEI precisa recolher contribuição previdenciária sobre o valor pago. A obrigação é da empresa, não sua, e a alíquota e as hipóteses dependem da atividade contratada e das regras vigentes — confirme com a contabilidade da contratante.' },
        ],
      },
      {
        h2: 'Como emitir NFS-e como MEI',
        content: [
          { type: 'ol', items: [
            'Acesse o portal da sua prefeitura (cada cidade tem seu sistema)',
            'Faça login com CNPJ e senha cadastrada',
            'Clique em "Emitir NFS-e" ou equivalente',
            'Preencha os dados do tomador (empresa contratante)',
            'Descreva o serviço prestado',
            'Informe o valor bruto',
            'Emita a nota — o ISS é calculado automaticamente',
          ]},
          { type: 'callout', variant: 'info', title: 'Alternativa gratuita', content: 'Muitos municípios já disponibilizam emissão de NFS-e via app ou portal gov.br. Consulte o site da prefeitura da sua cidade.' },
        ],
      },
      {
        h2: 'Quando o recibo é suficiente para MEI',
        content: [
          { type: 'text', content: 'Para serviços prestados a pessoas físicas, o MEI pode usar recibo simples. Não há obrigação de emitir nota fiscal nesse caso. O recibo serve como comprovante de pagamento.' },
          { type: 'list', items: [
            'Aulas particulares para alunos pessoa física',
            'Serviços domésticos ou de pequenos reparos para moradores',
            'Vendas diretas de produtos para consumidores finais (pessoa física)',
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'MEI pode emitir recibo simples para empresa?', a: 'Não é recomendado e pode gerar problemas. Para empresas, emita sempre a NFS-e. O recibo simples não substitui nota fiscal na relação MEI-empresa.' },
      { q: 'Existe limite de notas fiscais para MEI?', a: 'Não há limite de quantidade de notas. O limite do MEI é de receita: R$ 81.000/ano (serviços) ou R$ 144.000/ano para comércio + serviços a partir de 2024.' },
      { q: 'MEI que fez serviço mas não emitiu nota, e agora?', a: 'Emita a nota mesmo que atrasada. A data de emissão pode diferir da data do serviço — inclua a descrição com a data real do serviço prestado. Evite deixar sem nota por risco de multa.' },
      { q: 'MEI é obrigado a emitir nota fiscal para pessoa física?', a: 'Não é obrigado, mas pode emitir. Para pessoa física, o recibo simples ou a NFS-e são igualmente válidos. A escolha fica a critério do MEI e do cliente.' },
      { q: 'Como MEI emite nota fiscal de serviços?', a: 'Pelo portal eletrônico da prefeitura do seu município (cada cidade tem seu próprio sistema). Acesse com seu CNPJ MEI e emita a NFS-e gratuitamente.' },
      { q: 'MEI de comércio usa recibo?', a: 'MEI que vende produtos deve emitir NF-e (nota fiscal eletrônica de produto), não recibo. Para serviços, segue a regra acima.' },
      { q: 'Recibo de MEI para empresa tem problema?', a: 'Pode ter para a empresa: sem nota fiscal, a empresa não consegue deduzir a despesa na contabilidade. Para o MEI, o problema é menor — mas é melhor oferecer nota fiscal para não perder clientes corporativos.' },
      { q: 'MEI que presta serviço para outro MEI usa recibo?', a: 'Pode usar recibo, pois ambos são formalmente PJ mas MEI é simplificado. Mas se o cliente MEI precisar da nota para seus registros contábeis, emita NFS-e.' },
    ],
    relatedPosts: [
      { slug: 'como-fazer-rpa', title: 'Como fazer RPA' },
    ],
    relatedTools: [
      { href: '/mei', label: 'Ferramentas para MEI' },
      { href: '/ferramentas/mei-relatorio', label: 'Relatório MEI' },
      { href: '/ferramentas/recibo-simples', label: 'Recibo Simples para MEI' },
    ],
  },




  'como-assinar-contrato-digital': {
    slug: 'como-assinar-contrato-digital',
    title: 'Como Assinar Contrato Digitalmente: Guia Completo 2026 (Grátis e Pago)',
    description:
      'Aprenda a assinar contratos digitalmente com validade jurídica no Brasil. Ferramentas gratuitas e pagas, tipos de assinatura e quando cada uma é indicada.',
    datePublished: '2026-02-15',
    category: 'Contratos',
    readTime: '6 min',
    keywords: ['como assinar contrato digital', 'assinatura digital gratis', 'assinatura eletronica validade', 'gov.br assinar contrato'],
    intro:
      'Assinar contratos digitalmente é legal e seguro no Brasil desde 2001. Neste guia você aprende quais ferramentas usar, quais tipos de assinatura existem e quando cada uma é necessária.',
    sections: [
      {
        h2: 'Tipos de assinatura digital no Brasil',
        content: [
          { type: 'table', rows: [
            ['Tipo', 'Validade', 'Custo', 'Indicado para'],
            ['Assinatura simples', 'Média (com contexto)', 'Grátis', 'Contratos simples entre partes conhecidas'],
            ['Assinatura avançada', 'Alta', 'Grátis a pago', 'Contratos de serviços, locação'],
            ['Assinatura qualificada (ICP-Brasil)', 'Máxima', 'Pago (R$ 100-300/ano)', 'Contratos com órgãos públicos, alto valor'],
          ]},
        ],
      },
      {
        h2: 'Ferramentas gratuitas para assinar',
        content: [
          { type: 'list', items: [
            'Gov.br (gov.br/assinatura-eletronica): assinatura avançada grátis para todos com conta gov.br',
            'Autentique (autentique.com.br): plano gratuito com até 3 documentos/mês',
            'Adobe Acrobat Reader: assinatura básica em PDF',
            'PDF24 Tools: assinar PDF online gratuitamente',
          ]},
          { type: 'callout', variant: 'success', title: 'Dica', content: 'A assinatura gov.br é gratuita, aceita amplamente e tem nível de segurança equivalente ao Certificado Digital ICP-Brasil para a maioria das situações.' },
        ],
      },
      {
        h2: 'Passo a passo: assinar com gov.br',
        content: [
          { type: 'ol', items: [
            'Acesse assinatura.iti.br ou assine.iti.br',
            'Faça login com sua conta gov.br (nível prata ou ouro)',
            'Clique em "Assinar" e faça upload do contrato em PDF',
            'Posicione a assinatura no documento',
            'Confirme a assinatura com o código enviado por SMS/app',
            'Baixe o PDF assinado — ele já tem validade jurídica',
            'Envie para a outra parte assinar',
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'Assinatura digital tem a mesma validade que assinatura à mão?', a: 'Sim. A Lei 14.063/2020 e a MP 2.200-2/2001 garantem validade jurídica plena para assinaturas eletrônicas avançadas e qualificadas.' },
      { q: 'Preciso de testemunhas em contrato assinado digitalmente?', a: 'Para que o contrato seja título executivo extrajudicial, ainda são necessárias 2 testemunhas (mesmo digitais). A maioria das plataformas de assinatura permite adicionar testemunhas.' },
      { q: 'E se a outra parte não quiser assinar digitalmente?', a: 'Você pode imprimir o contrato, assinar fisicamente e enviar para que a outra parte também assine fisicamente. Ambas as formas têm validade.' },
    ],
    relatedPosts: [
    ],
    relatedTools: [
      { href: '/ferramentas/contrato-completo', label: 'Gerar Contrato' },
      { href: '/modelo/contrato-simples', label: 'Modelo de Contrato Simples' },
    ],
  },
}

export const ALL_BLOG_SLUGS = Object.keys(BLOG_POSTS)
