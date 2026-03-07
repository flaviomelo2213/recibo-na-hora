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
      { slug: 'recibo-tem-validade-legal', title: 'Recibo tem validade jurídica?' },
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
    ],
    relatedPosts: [
      { slug: 'como-fazer-recibo', title: 'Como fazer um recibo' },
      { slug: 'diferenca-recibo-nota-fiscal', title: 'Recibo vs Nota Fiscal' },
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
            ['Imposto', 'Alíquota', 'Quem retém', 'Teto 2026'],
            ['INSS', '11% (até teto)', 'Empresa retém e recolhe', 'R$ 8.157,41 (teto mensal)'],
            ['IRRF', 'Tabela progressiva', 'Empresa retém e recolhe', 'Isento até R$ 2.259,20'],
            ['ISS', '2% a 5%', 'Empresa retém (se obrigada)', 'Depende do município'],
          ]},
          { type: 'text', content: 'O valor líquido que você recebe = Valor bruto - INSS - IRRF - ISS. A empresa é responsável por recolher esses impostos ao governo.' },
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
            'Calcule o INSS: 11% do valor bruto (respeitando o teto)',
            'Calcule o IRRF conforme tabela progressiva',
            'Informe o ISS conforme sua cidade',
            'O sistema calcula o valor líquido automaticamente',
            'Gere o PDF e assine',
          ]},
        ],
      },
      {
        h2: 'Tabela IRRF 2026 para RPA',
        content: [
          { type: 'table', rows: [
            ['Base de cálculo (R$)', 'Alíquota', 'Parcela a deduzir (R$)'],
            ['Até 2.259,20', 'Isento', '—'],
            ['De 2.259,21 a 2.826,65', '7,5%', '169,44'],
            ['De 2.826,66 a 3.751,05', '15%', '381,44'],
            ['De 3.751,06 a 4.664,68', '22,5%', '662,77'],
            ['Acima de 4.664,68', '27,5%', '896,00'],
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'Posso recusar emitir RPA?', a: 'Formalmente não cabe ao autônomo emitir o RPA — é a empresa quem elabora o documento. O autônomo assina o RPA como comprovante de que recebeu o valor líquido.' },
      { q: 'RPA substitui nota fiscal?', a: 'Para autônomo sem CNPJ, sim. O RPA é o documento fiscal equivalente à nota fiscal para prestadores sem CNPJ. Se você tiver MEI ou empresa, deve emitir nota fiscal.' },
      { q: 'E se a empresa não emitir o RPA?', a: 'Exija o RPA. Sem ele, você pode ter dificuldades para comprovar renda (financiamentos, etc.) e a empresa fica em situação irregular perante a Receita Federal.' },
    ],
    relatedPosts: [
      { slug: 'diferenca-recibo-nota-fiscal', title: 'Diferença entre recibo e nota fiscal' },
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
          { type: 'callout', variant: 'warning', title: 'Cuidado com a retenção', content: 'Empresas que contratam MEI para serviços estão obrigadas a reter 11% de INSS sobre o valor pago. Isso é feito pela empresa. Como MEI, você recebe o valor líquido mas a empresa deve recolher o INSS sobre sua remuneração.' },
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
    ],
    relatedPosts: [
      { slug: 'diferenca-recibo-nota-fiscal', title: 'Diferença entre recibo e nota fiscal' },
      { slug: 'como-fazer-rpa', title: 'Como fazer RPA' },
    ],
    relatedTools: [
      { href: '/mei', label: 'Ferramentas para MEI' },
      { href: '/ferramentas/mei-relatorio', label: 'Relatório MEI' },
      { href: '/ferramentas/recibo-simples', label: 'Recibo Simples para MEI' },
    ],
  },

  'contrato-prestacao-servico-modelo': {
    slug: 'contrato-prestacao-servico-modelo',
    title: 'Contrato de Prestação de Serviço: Modelo Gratuito e Guia Completo 2026',
    description:
      'Modelo gratuito de contrato de prestação de serviço. Cláusulas essenciais, validade jurídica, como assinar e exemplos práticos para autônomos e freelancers.',
    datePublished: '2026-02-01',
    category: 'Contratos',
    readTime: '8 min',
    keywords: ['contrato prestacao servico modelo', 'contrato servico gratis', 'modelo contrato autonomo', 'contrato freelancer'],
    intro:
      'Um contrato de prestação de serviço protege tanto o prestador quanto o contratante. Neste guia você aprende o que incluir, como assinar e onde gerar um modelo gratuito.',
    sections: [
      {
        h2: 'Cláusulas obrigatórias em um contrato de serviço',
        content: [
          { type: 'ol', items: [
            'Qualificação das partes: nome completo, CPF/CNPJ, endereço de ambas as partes',
            'Objeto: descrição detalhada do serviço a ser prestado',
            'Prazo: data de início e prazo para entrega/conclusão',
            'Valor e forma de pagamento: valor total, parcelamento, vencimentos',
            'Obrigações do prestador: o que será entregue e quando',
            'Obrigações do contratante: o que precisa fornecer ao prestador',
            'Cláusula de rescisão: condições para encerrar o contrato',
            'Penalidades: multa por descumprimento de cada parte',
            'Foro: cidade onde eventuais disputas serão resolvidas',
          ]},
        ],
      },
      {
        h2: 'Contrato verbal tem validade?',
        content: [
          { type: 'text', content: 'Sim, contratos verbais têm validade no Brasil (Art. 107 do Código Civil). No entanto, sem documento escrito, fica muito difícil provar o acordo em caso de disputa.' },
          { type: 'callout', variant: 'warning', title: 'Risco do contrato verbal', content: 'Em disputas judiciais sobre contratos verbais, a prova precisa ser feita por testemunhas ou outros meios indiretos. Um contrato escrito é sempre mais seguro e economiza tempo e dinheiro em conflitos.' },
        ],
      },
      {
        h2: 'Como dar força de título executivo ao contrato',
        content: [
          { type: 'text', content: 'Um contrato de prestação de serviço assinado por duas testemunhas adquire força de título executivo extrajudicial (Art. 784, III do CPC). Isso significa que, em caso de inadimplência, você pode cobrar judicialmente sem precisar de processo de conhecimento.' },
          { type: 'list', items: [
            'Assine na presença de 2 testemunhas (nome, CPF e assinatura de cada)',
            'Cada parte fica com uma via original',
            'Guarde o contrato em local seguro por no mínimo 5 anos',
          ]},
        ],
      },
      {
        h2: 'Posso assinar contrato digitalmente?',
        content: [
          { type: 'text', content: 'Sim. Assinaturas digitais têm plena validade jurídica no Brasil. Você pode usar plataformas como ClickSign, DocuSign, Autentique ou a assinatura gov.br.' },
          { type: 'callout', variant: 'success', title: 'Dica', content: 'A assinatura gov.br (via Certificado Digital ICP-Brasil) tem a maior força jurídica e é aceita em contratos de qualquer valor.' },
        ],
      },
    ],
    faqs: [
      { q: 'Preciso de advogado para fazer um contrato de serviço?', a: 'Não é obrigatório para contratos simples. Para contratos de alto valor ou com cláusulas específicas (exclusividade, propriedade intelectual, etc.), consultar um advogado é recomendado.' },
      { q: 'Contrato de serviço precisa de reconhecimento de firma?', a: 'Não é obrigatório, mas é recomendado para contratos de maior valor. O reconhecimento de firma autentica a assinatura das partes perante o cartório.' },
      { q: 'Como cobrar se o cliente não pagar?', a: 'Com contrato assinado + 2 testemunhas (título executivo), você pode entrar com ação de execução diretamente. Sem as testemunhas, você precisa de uma ação de cobrança antes.' },
    ],
    relatedPosts: [
      { slug: 'como-fazer-recibo', title: 'Como fazer um recibo' },
      { slug: 'recibo-prestacao-servico-autonomo', title: 'Recibo de serviço para autônomo' },
    ],
    relatedTools: [
      { href: '/ferramentas/contrato-completo', label: 'Gerar Contrato Grátis' },
      { href: '/modelo/contrato-simples', label: 'Modelo de Contrato Simples' },
      { href: '/contratos', label: 'Todos os Contratos' },
    ],
  },

  'declaracao-endereco-como-fazer': {
    slug: 'declaracao-endereco-como-fazer',
    title: 'Declaração de Endereço: Como Fazer, Modelo e Validade Jurídica 2026',
    description:
      'Como fazer uma declaração de endereço residencial válida. Quando é exigida, modelo gratuito, se precisa de reconhecimento de firma e onde entregar.',
    datePublished: '2026-02-05',
    category: 'Documentos',
    readTime: '5 min',
    keywords: ['declaracao endereco', 'declaracao residencia modelo', 'comprovante de residencia declaracao', 'declaracao endereco gratis'],
    intro:
      'A declaração de endereço é aceita como comprovante de residência em muitas situações: abertura de conta, financiamentos, cadastros e processos administrativos. Saiba como fazer a sua.',
    sections: [
      {
        h2: 'Quando a declaração de endereço é aceita',
        content: [
          { type: 'list', items: [
            'Abertura de conta em banco ou fintech',
            'Cadastros em órgãos públicos',
            'Processos de financiamento e crédito',
            'Transferência de veículo no DETRAN',
            'Matrícula escolar em algumas instituições',
            'Programas sociais e benefícios governamentais',
          ]},
          { type: 'callout', variant: 'amber', title: 'Importante', content: 'Cada instituição pode aceitar ou não a declaração. Sempre confirme com a empresa ou órgão antes de apresentar. Para bancos e financeiras, a declaração geralmente é aceita como complemento à falta de comprovante formal.' },
        ],
      },
      {
        h2: 'O que deve conter na declaração',
        content: [
          { type: 'ol', items: [
            'Seu nome completo e CPF',
            'Endereço completo (rua, número, complemento, bairro, CEP, cidade, estado)',
            'Declaração de que reside no endereço informado',
            'Período aproximado que mora no local',
            'Data da declaração',
            'Sua assinatura',
          ]},
          { type: 'text', content: 'Algumas situações exigem reconhecimento de firma em cartório. Verifique o requisito específico da instituição.' },
        ],
      },
      {
        h2: 'Declaração assinada por terceiro',
        content: [
          { type: 'text', content: 'Se você mora na casa de um familiar ou amigo (sem seu nome na conta de água ou luz), pode apresentar uma declaração assinada pelo proprietário do imóvel, confirmando que você reside no local.' },
          { type: 'list', items: [
            'O declarante precisa ser maior de 18 anos',
            'Incluir RG e CPF do declarante',
            'Preferencialmente com reconhecimento de firma',
            'Pode ser necessário apresentar um comprovante do declarante junto',
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'Declaração de endereço tem prazo de validade?', a: 'Formalmente não existe prazo legal, mas a maioria das instituições aceita apenas declarações com até 90 dias de emissão. Emita sempre com a data atual.' },
      { q: 'Precisa de reconhecimento de firma?', a: 'Depende da instituição. Muitos órgãos públicos e bancos aceitam sem reconhecimento. Cartórios, DETRAN e alguns financiamentos podem exigir firma reconhecida.' },
      { q: 'Declaração de endereço serve para tirar RG?', a: 'Geralmente não. Para documentos de identidade, a maioria dos institutos de identificação exige comprovante de endereço emitido por concessionária (água, luz, gás) ou banco. Consulte o IFP/SSP do seu estado.' },
    ],
    relatedPosts: [
      { slug: 'como-fazer-recibo', title: 'Como fazer um recibo' },
    ],
    relatedTools: [
      { href: '/requerimentos/declaracao-endereco', label: 'Gerar Declaração de Endereço' },
      { href: '/requerimentos', label: 'Todos os Requerimentos' },
    ],
  },

  'nota-promissoria-como-funciona': {
    slug: 'nota-promissoria-como-funciona',
    title: 'Nota Promissória: Como Funciona, Como Preencher e Modelo Gratuito 2026',
    description:
      'Tudo sobre nota promissória: o que é, como preencher corretamente, prazo de prescrição, como protestar e modelo gratuito para baixar em PDF.',
    datePublished: '2026-02-10',
    category: 'Documentos',
    readTime: '7 min',
    keywords: ['nota promissoria como funciona', 'nota promissoria modelo', 'como preencher nota promissoria', 'nota promissoria pdf'],
    intro:
      'A nota promissória é um título de crédito que representa uma promessa de pagamento. É amplamente usada em acordos de dívidas, parcelamentos e empréstimos entre particulares.',
    sections: [
      {
        h2: 'O que é nota promissória e para que serve',
        content: [
          { type: 'text', content: 'A nota promissória é um título de crédito regulado pelo Decreto nº 57.663/66 (Lei Uniforme de Genebra). Ela representa uma promessa incondicional de pagamento de uma quantia em dinheiro, feita por uma pessoa (emitente) a outra (beneficiário).' },
          { type: 'list', items: [
            'Parcelamento de dívidas entre pessoas físicas',
            'Garantia em empréstimos pessoais',
            'Acordos extrajudiciais de pagamento',
            'Compra e venda de bens com pagamento parcelado',
          ]},
          { type: 'callout', variant: 'success', title: 'Vantagem', content: 'A nota promissória é um título executivo extrajudicial. Em caso de não pagamento, o credor pode protestar diretamente no cartório e iniciar cobrança judicial sem ação de conhecimento.' },
        ],
      },
      {
        h2: 'Como preencher corretamente',
        content: [
          { type: 'ol', items: [
            'Valor da promissória: em número e por extenso',
            'Prazo: data de vencimento (ou "à vista")',
            'Local e data de emissão',
            'Nome completo e CPF do emitente (quem deve)',
            'Nome completo e CPF do beneficiário (quem vai receber)',
            'Assinatura do emitente (e do avalista, se houver)',
          ]},
          { type: 'callout', variant: 'warning', title: 'Campo crítico', content: 'Se não preencher a data de vencimento, a nota vira "promissória à vista" (paga imediatamente quando apresentada). Sempre defina um vencimento claro.' },
        ],
      },
      {
        h2: 'Prazo para cobrar: prescrição da nota promissória',
        content: [
          { type: 'table', rows: [
            ['Situação', 'Prazo de prescrição'],
            ['Ação contra o emitente', '3 anos da data de vencimento'],
            ['Ação contra endossante/avalista', '1 ano'],
            ['Ação de enriquecimento', '2 anos após a prescrição'],
          ]},
          { type: 'callout', variant: 'warning', title: 'Atenção ao prazo', content: 'Após a prescrição, o título perde a executividade. Ainda é possível cobrar via ação ordinária de cobrança, mas o processo é mais demorado e caro.' },
        ],
      },
      {
        h2: 'Como protestar a nota promissória',
        content: [
          { type: 'ol', items: [
            'Aguarde o vencimento sem o pagamento',
            'Leve o título original ao Cartório de Protesto de Títulos',
            'O cartório notifica o devedor em até 3 dias úteis',
            'O devedor tem 3 dias para pagar e sustar o protesto',
            'Se não pagar, o protesto é lavrado e o nome vai a banco de dados de inadimplentes',
            'Com o título protestado, você pode iniciar ação de execução',
          ]},
        ],
      },
    ],
    faqs: [
      { q: 'Nota promissória precisa de reconhecimento de firma?', a: 'Não é legalmente obrigatório para a validade do título. No entanto, o reconhecimento de firma dificulta alegações de falsidade e é recomendado para valores altos.' },
      { q: 'Posso fazer nota promissória à mão?', a: 'Sim. A nota promissória pode ser escrita à mão, desde que contenha todos os elementos essenciais. Use caneta azul ou preta, sem rasuras.' },
      { q: 'Nota promissória vencida tem juros automáticos?', a: 'Sim. Após o vencimento, incidem juros de mora de 1% ao mês e correção monetária pelo IPCA, salvo condição diversa expressa no título.' },
    ],
    relatedPosts: [
      { slug: 'contrato-prestacao-servico-modelo', title: 'Contrato de Prestação de Serviço' },
    ],
    relatedTools: [
      { href: '/ferramentas/nota-promissoria', label: 'Gerar Nota Promissória Grátis' },
      { href: '/contratos', label: 'Todos os Contratos' },
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
      { slug: 'contrato-prestacao-servico-modelo', title: 'Contrato de Prestação de Serviço' },
    ],
    relatedTools: [
      { href: '/ferramentas/contrato-completo', label: 'Gerar Contrato' },
      { href: '/modelo/contrato-simples', label: 'Modelo de Contrato Simples' },
    ],
  },
}

export const ALL_BLOG_SLUGS = Object.keys(BLOG_POSTS)
