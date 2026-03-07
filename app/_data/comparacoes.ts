import type { FAQ } from '@/lib/schema'

export interface ComparacaoRow {
  aspecto: string
  docA: string
  docB: string
}

export interface Comparacao {
  slug: string
  title: string
  description: string
  keywords: string[]
  datePublished: string
  docA: string
  docB: string
  intro: string
  tableRows: ComparacaoRow[]
  sections: Array<{ h2: string; paragraphs: string[] }>
  verdict: string
  faqs: FAQ[]
  relatedLinks: { href: string; label: string }[]
}

const comparacoes: Comparacao[] = [
  {
    slug: 'recibo-vs-nota-fiscal',
    title: 'Recibo vs Nota Fiscal: Diferenças, Quando Usar e Qual é Obrigatório',
    description: 'Comparação completa entre recibo simples e nota fiscal: diferenças jurídicas, fiscais e práticas. Tabela comparativa e guia de quando usar cada documento.',
    keywords: ['recibo vs nota fiscal', 'diferenca recibo nota fiscal tabela', 'recibo ou nota fiscal comparacao', 'quando usar nota fiscal recibo'],
    datePublished: '2025-04-01',
    docA: 'Recibo Simples',
    docB: 'Nota Fiscal',
    intro: 'Recibo e nota fiscal são documentos distintos com finalidades diferentes. O recibo é um instrumento civil de quitação entre partes. A nota fiscal é um documento fiscal obrigatório que alimenta o sistema tributário. Conhecer a diferença evita multas e problemas legais.',
    tableRows: [
      { aspecto: 'Quem pode emitir', docA: 'Qualquer pessoa física', docB: 'Somente pessoa jurídica (CNPJ) ou PF autorizada pelo município' },
      { aspecto: 'Obrigatoriedade', docA: 'Não obrigatório por lei na maioria dos casos', docB: 'Obrigatório para empresas em toda operação comercial' },
      { aspecto: 'Valor fiscal', docA: 'Não tem efeito tributário direto', docB: 'Base de cálculo para ISS, ICMS, PIS, COFINS' },
      { aspecto: 'Para dedução de despesas', docA: 'Não aceito para pessoa jurídica', docB: 'Aceito para dedução contábil' },
      { aspecto: 'Validade jurídica', docA: 'Plena como prova de pagamento', docB: 'Plena — e com valor fiscal adicional' },
      { aspecto: 'Cancelamento', docA: 'Declaração de cancelamento bilateral', docB: 'Cancelamento formal no SEFAZ (prazo de 24h para NF-e)' },
      { aspecto: 'Custo de emissão', docA: 'Gratuito', docB: 'Gratuito (NFS-e via prefeitura) ou pago (emissor comercial)' },
      { aspecto: 'Registro obrigatório', docA: 'Não há registro centralizado', docB: 'Registrada na SEFAZ estadual ou prefeitura (ISS)' },
    ],
    sections: [
      {
        h2: 'Quando o recibo é suficiente',
        paragraphs: [
          'Para serviços entre pessoas físicas (CPF para CPF), o recibo simples é o documento correto e suficiente. Um pedreiro que recebe de um cliente pessoa física, uma diarista, um freelancer prestando serviço a um vizinho — todos podem usar recibo.',
          'O recibo também é adequado para: quitação de dívidas pessoais, compra e venda de bens usados entre particulares, pagamento de aluguel (o locador emite recibo de aluguel), e pagamentos eventuais onde não há relação comercial contínua.',
        ],
      },
      {
        h2: 'Quando a nota fiscal é obrigatória',
        paragraphs: [
          'A nota fiscal é obrigatória sempre que uma empresa (CNPJ) realiza operações comerciais: venda de produtos, prestação de serviços, importação e exportação. A lei fiscal exige o documento para fins de escrituração contábil e recolhimento de impostos.',
          'Para empresas contratando autônomos: o documento correto é o RPA (Recibo de Pagamento de Autônomo), que contém as retenções fiscais obrigatórias. Para MEI prestando serviço a empresa: deve emitir NFS-e (nota fiscal de serviços eletrônica).',
        ],
      },
    ],
    verdict: 'Use recibo para transações entre pessoas físicas e quitações informais. Use nota fiscal quando envolver pessoa jurídica ou quando a legislação fiscal do seu segmento exigir. Em caso de dúvida, consulte um contador.',
    faqs: [
      { q: 'Recibo substitui nota fiscal para MEI?', a: 'Parcialmente. MEI pode usar recibo para clientes pessoa física. Para clientes CNPJ, deve emitir NFS-e (nota fiscal de serviços).' },
      { q: 'Empresa pode aceitar recibo de autônomo?', a: 'Não como documento fiscal. A empresa deve exigir RPA ou nota fiscal. O recibo simples não tem validade para dedução contábil empresarial.' },
      { q: 'Posso pedir nota fiscal em vez de recibo?', a: 'Se o prestador for pessoa jurídica, sim. Se for pessoa física autônoma, o correto é recibo simples (para pessoa física) ou RPA (para empresa).' },
      { q: 'Nota fiscal substitui recibo de pagamento?', a: 'A nota fiscal prova a operação comercial, mas não necessariamente o pagamento. Para confirmar o pagamento, emita recibo separado ou use nota fiscal com campo "quitação".' },
      { q: 'Profissional liberal (advogado, médico) usa recibo ou NF?', a: 'Para clientes pessoa física: recibo de honorários ou NFS-e. Para empresas: NFS-e obrigatória na maioria dos municípios.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/nota-fiscal-ou-recibo-quando-usar', label: 'Guia Completo: NF ou Recibo?' },
    ],
  },
  {
    slug: 'recibo-vs-contrato',
    title: 'Recibo vs Contrato: Diferenças e Quando Usar Cada Documento',
    description: 'Recibo e contrato são complementares, não substitutos. Entenda as diferenças, quando cada documento é necessário e por que usá-los juntos é a melhor prática.',
    keywords: ['recibo vs contrato', 'diferenca recibo contrato', 'recibo substitui contrato', 'contrato ou recibo quando usar'],
    datePublished: '2025-04-02',
    docA: 'Recibo',
    docB: 'Contrato',
    intro: 'Recibo e contrato são documentos complementares com funções opostas no tempo: o contrato define o que SERÁ feito e pago; o recibo comprova o que FOI pago. Usar apenas um dos dois deixa brechas jurídicas.',
    tableRows: [
      { aspecto: 'Quando é emitido', docA: 'Após o pagamento (retrospectivo)', docB: 'Antes do serviço (prospectivo)' },
      { aspecto: 'O que comprova', docA: 'Que o pagamento foi realizado', docB: 'O que foi acordado (escopo, prazo, valor)' },
      { aspecto: 'Quem assina', docA: 'Geralmente só quem recebeu', docB: 'Ambas as partes' },
      { aspecto: 'Testemunhas', docA: 'Opcional (recomendado para valores altos)', docB: 'Recomendado para ter força de título executivo' },
      { aspecto: 'Validade sem outro documento', docA: 'Prova o pagamento, não o que foi contratado', docB: 'Prova o acordo, não o pagamento' },
      { aspecto: 'Necessidade de reconhecimento', docA: 'Geralmente desnecessário', docB: 'Recomendado para contratos de alto valor' },
      { aspecto: 'Cancelamento', docA: 'Declaração bilateral de cancelamento', docB: 'Distrato assinado pelas partes' },
    ],
    sections: [
      {
        h2: 'Por que usar os dois documentos juntos',
        paragraphs: [
          'Um contrato sem recibo deixa em aberto se o pagamento foi feito. Um recibo sem contrato deixa em aberto o que foi combinado — escopo, prazo, qualidade. A combinação dos dois cobre todos os ângulos: o acordo e o pagamento.',
          'Exemplo prático: um freelancer assina um contrato definindo as entregas e o valor. A cada pagamento recebido, emite um recibo. No final do projeto, há contrato provando o que foi combinado e recibos provando que tudo foi pago.',
        ],
      },
      {
        h2: 'Quando apenas o recibo basta',
        paragraphs: [
          'Para serviços simples e únicos de baixo valor entre partes que se conhecem, o recibo pode ser o único documento necessário. Um reparo rápido, uma diária doméstica, um serviço eventual — nesses casos, o contrato formal seria burocracia desnecessária.',
          'A regra prática: quanto maior o valor, mais longo o prazo e mais complexo o serviço, mais necessário é o contrato. Para projetos acima de R$ 1.000 ou com mais de 30 dias de duração, sempre faça contrato + recibo.',
        ],
      },
    ],
    verdict: 'Para serviços simples e rápidos, o recibo basta. Para projetos com escopo definido, prazo e valor significativo, use contrato + recibos a cada pagamento. Os documentos são complementares.',
    faqs: [
      { q: 'O recibo substitui o contrato de prestação de serviço?', a: 'Não. O recibo prova apenas o pagamento. O contrato define o que foi acordado. São documentos com finalidades diferentes.' },
      { q: 'Posso cobrar judicialmente só com recibo (sem contrato)?', a: 'O recibo prova que houve uma relação financeira, mas sem contrato fica difícil provar o que foi acordado. Em disputas sobre qualidade ou prazo, o contrato é fundamental.' },
      { q: 'Contrato assinado mas sem recibos é problema?', a: 'Para o pagador, pode ser. Sem recibos, o credor pode alegar inadimplência mesmo que os pagamentos tenham sido feitos. Sempre peça recibo a cada pagamento.' },
      { q: 'Mensagem de WhatsApp combinando serviço substitui contrato?', a: 'Pode ter valor probatório, mas é fraco como substituto de contrato formal. Use contrato escrito para acordos de qualquer relevância.' },
      { q: 'Contrato de trabalho PJ pode ser substituído por recibo?', a: 'Não. Recibo comprova pagamento, não relação de trabalho. Contrato PJ deve descrever a relação autônoma de forma clara para evitar vínculo empregatício.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo' },
      { href: '/ferramentas/contrato-completo', label: 'Gerar Contrato' },
      { href: '/modelo/contrato-prestacao-servico', label: 'Modelo de Contrato de Serviço' },
    ],
  },
  {
    slug: 'nota-promissoria-vs-recibo',
    title: 'Nota Promissória vs Recibo: Diferenças e Quando Usar',
    description: 'Nota promissória e recibo são documentos opostos: a promissória é uma promessa de pagamento futuro; o recibo comprova pagamento já realizado. Tabela comparativa completa.',
    keywords: ['nota promissoria vs recibo', 'diferenca nota promissoria recibo', 'promissoria ou recibo quando usar', 'nota promissoria recibo pagamento'],
    datePublished: '2025-04-03',
    docA: 'Nota Promissória',
    docB: 'Recibo',
    intro: 'A nota promissória e o recibo são documentos com funções opostas: a promissória é emitida ANTES do pagamento (promessa de pagar); o recibo é emitido DEPOIS do pagamento (prova de que pagou). São complementares em parcelamentos.',
    tableRows: [
      { aspecto: 'Quando é emitido', docA: 'Antes do pagamento (promessa futura)', docB: 'Após o pagamento (quitação passada)' },
      { aspecto: 'O que representa', docA: 'Obrigação de pagar', docB: 'Comprovação de que pagou' },
      { aspecto: 'Quem assina', docA: 'O devedor (emitente)', docB: 'O credor (quem recebeu)' },
      { aspecto: 'Força jurídica', docA: 'Título executivo extrajudicial', docB: 'Prova de pagamento' },
      { aspecto: 'Prazo prescricional', docA: '3 anos para ação contra emitente', docB: '5 anos para contestar a quitação' },
      { aspecto: 'Cancelamento após pagamento', docA: 'Devolvida ao devedor ou "quitada" com assinatura do credor', docB: 'Fica com o devedor como prova de pagamento' },
      { aspecto: 'Necessidade de reconhecimento', docA: 'Recomendado para valores altos', docB: 'Geralmente desnecessário' },
    ],
    sections: [
      {
        h2: 'Nota promissória em parcelamentos',
        paragraphs: [
          'Em parcelamentos, a combinação ideal é: nota promissória para cada parcela (garantindo a obrigação de pagar) + recibo ao realizar cada pagamento (confirmando a quitação da respectiva parcela).',
          'Quando o devedor paga a promissória, o credor deve devolver a nota ou escrever "QUITADO" sobre ela e assinar. O recibo da parcela confirma o pagamento e encerra a obrigação daquela promissória.',
        ],
      },
      {
        h2: 'Quando usar cada documento',
        paragraphs: [
          'Use nota promissória quando: conceder crédito a alguém (empréstimo pessoal), parcelar uma dívida, vender bem com pagamento futuro. A promissória é o título que garante sua cobrança se o pagamento não vier.',
          'Use recibo quando: receber qualquer pagamento, seja à vista, parcela, sinal ou quitação total. O recibo é o comprovante que o devedor guarda para provar que pagou.',
        ],
      },
    ],
    verdict: 'Para crédito e parcelamentos: emita nota promissória (garante cobrança). Ao receber: emita recibo (confirma pagamento). Nos parcelamentos, use os dois juntos — a promissória protege o credor antes do pagamento, o recibo protege o devedor após.',
    faqs: [
      { q: 'Se eu tenho recibo, preciso da nota promissória de volta?', a: 'Sim. O recibo prova que você pagou, mas a nota promissória ainda representa uma dívida formal. Exija a devolução ou quitação escrita na promissória ao realizar o pagamento.' },
      { q: 'Nota promissória prescrita — ainda posso cobrar?', a: 'Após a prescrição (3 anos), perde a executividade como título. Mas pode existir como prova de dívida em ação monitória ou de cobrança ordinária.' },
      { q: 'Posso usar nota promissória em vez de contrato?', a: 'A promissória formaliza apenas o valor e o prazo de pagamento. Não substitui o contrato para acordos com escopo, prazo de entrega e outras cláusulas.' },
      { q: 'Recibo de pagamento de nota promissória é necessário?', a: 'O mais seguro é ter o recibo E a devolução/quitação da promissória. O recibo prova o pagamento, a devolução da nota prova que o título está extinto.' },
      { q: 'Nota promissória digital tem validade?', a: 'O mercado ainda está se adaptando. Promissórias eletrônicas com assinatura digital ICP-Brasil têm validade. Plataformas como CRDC (Câmara de Registro de Duplicatas e Crédito) permitem promissórias eletrônicas.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/nota-promissoria', label: 'Gerar Nota Promissória' },
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo' },
      { href: '/modelo/nota-promissoria', label: 'Modelo de Nota Promissória' },
    ],
  },
  {
    slug: 'rpa-vs-nota-fiscal',
    title: 'RPA vs Nota Fiscal: Qual Usar para Autônomo e MEI?',
    description: 'Comparação entre RPA (Recibo de Pagamento de Autônomo) e Nota Fiscal de Serviços: quando cada um é obrigatório, diferenças tributárias e guia para autônomos e MEI.',
    keywords: ['rpa vs nota fiscal', 'rpa ou nota fiscal autonomo', 'quando usar rpa nota fiscal', 'mei rpa ou nfs-e'],
    datePublished: '2025-04-04',
    docA: 'RPA',
    docB: 'Nota Fiscal de Serviços (NFS-e)',
    intro: 'A escolha entre RPA e nota fiscal depende da situação tributária do prestador: pessoa física autônoma usa RPA quando contratado por empresa; MEI usa NFS-e. Usar o documento errado pode gerar irregularidades fiscais para ambas as partes.',
    tableRows: [
      { aspecto: 'Quem emite', docA: 'Pessoa física autônoma (sem CNPJ)', docB: 'Pessoa jurídica (MEI, ME, LTDA, etc.)' },
      { aspecto: 'Quem preenche', docA: 'A empresa tomadora do serviço', docB: 'O próprio prestador pelo portal da prefeitura' },
      { aspecto: 'Retenção de INSS', docA: '11% retido pela empresa', docB: 'Não há retenção (MEI recolhe INSS fixo mensal)' },
      { aspecto: 'Retenção de IR', docA: 'Conforme tabela progressiva', docB: 'Geralmente não (MEI é isento de IR PJ no limite)' },
      { aspecto: 'ISS', docA: 'Retido pela empresa conforme município', docB: 'Recolhido pelo MEI (incluído no DAS mensal)' },
      { aspecto: 'Dedução para empresa', docA: 'Sim — como despesa com pessoal', docB: 'Sim — como despesa operacional' },
      { aspecto: 'Acesso à aposentadoria', docA: 'INSS retido conta para benefícios', docB: 'MEI recolhe INSS fixo — conta para aposentadoria' },
    ],
    sections: [
      {
        h2: 'Autônomo pessoa física — quando usar RPA',
        paragraphs: [
          'O RPA é o documento correto quando uma empresa (CNPJ) contrata um profissional autônomo pessoa física (CPF, sem CNPJ). A empresa prepara o RPA, faz as retenções fiscais e paga o valor líquido ao autônomo.',
          'Exemplos: empresa contrata consultor freelancer sem CNPJ, escritório usa serviço de técnico de informática pessoa física, construtora paga pedreiro autônomo. Em todos esses casos, o RPA é obrigatório para a empresa.',
        ],
      },
      {
        h2: 'MEI — quando usar nota fiscal',
        paragraphs: [
          'O MEI é pessoa jurídica e deve emitir NFS-e (Nota Fiscal de Serviços Eletrônica) para todos os clientes CNPJ. Para clientes pessoa física, pode usar recibo ou NFS-e. Nunca use RPA se você é MEI — o MEI não é autônomo pessoa física para fins fiscais.',
          'A NFS-e do MEI é emitida gratuitamente pelo portal da prefeitura de cada município. Se a empresa contratante retiver ISS ou IR na fonte de um MEI, isso pode ser contestado, pois o MEI já recolhe esses tributos no DAS mensal.',
        ],
      },
    ],
    verdict: 'Você é pessoa física sem CNPJ prestando serviço para empresa? Use RPA. Você tem CNPJ (MEI, ME, LTDA)? Use nota fiscal. A distinção é crucial para evitar retenções indevidas e irregularidades fiscais.',
    faqs: [
      { q: 'Empresa pode exigir NFS-e de autônomo pessoa física?', a: 'Não. Autônomo pessoa física não pode emitir NFS-e — só PJ pode. A empresa deve usar RPA para contratar pessoa física.' },
      { q: 'MEI pode emitir RPA?', a: 'Não. MEI é pessoa jurídica e emite NFS-e. O RPA é exclusivo para pessoa física autônoma sem CNPJ.' },
      { q: 'O autônomo pode escolher entre RPA e nota fiscal?', a: 'Depende: se tem CNPJ (MEI) usa NFS-e; se é pessoa física sem CNPJ, usa RPA quando contratado por empresa. Não é uma escolha — é determinado pela situação fiscal.' },
      { q: 'RPA tem limite de valor anual?', a: 'Não há limite formal para o RPA. Mas autônomos que faturam acima de certos limites podem estar obrigados a abrir empresa.' },
      { q: 'Posso virar MEI para evitar o RPA?', a: 'Sim — ao se tornar MEI, você passa a emitir NFS-e. As retenções do RPA deixam de se aplicar. O MEI recolhe INSS e impostos de forma simplificada no DAS mensal.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA?' },
      { href: '/mei', label: 'Ferramentas MEI' },
    ],
  },
  {
    slug: 'recibo-simples-vs-rpa',
    title: 'Recibo Simples vs RPA: Diferenças e Quando Usar Cada Um',
    description: 'Recibo simples e RPA são documentos diferentes para situações distintas. Entenda quando usar cada um, os impostos envolvidos e as consequências de usar o documento errado.',
    keywords: ['recibo simples vs rpa', 'recibo simples ou rpa', 'diferenca recibo rpa', 'quando usar rpa ou recibo'],
    datePublished: '2025-04-05',
    docA: 'Recibo Simples',
    docB: 'RPA (Recibo de Pagamento de Autônomo)',
    intro: 'Recibo simples e RPA são ambos recibos, mas servem para situações completamente diferentes. O erro mais comum é usar recibo simples quando o RPA é obrigatório — o que deixa a empresa em situação fiscal irregular.',
    tableRows: [
      { aspecto: 'Quem usa', docA: 'Qualquer pessoa em qualquer situação', docB: 'Empresa que contrata autônomo pessoa física' },
      { aspecto: 'Contratante', docA: 'Pessoa física ou jurídica', docB: 'Obrigatoriamente pessoa jurídica (CNPJ)' },
      { aspecto: 'Prestador', docA: 'Pessoa física', docB: 'Pessoa física sem CNPJ (autônomo)' },
      { aspecto: 'INSS', docA: 'Nenhuma retenção', docB: '11% retido (contribuição previdenciária)' },
      { aspecto: 'IR', docA: 'Nenhuma retenção', docB: 'Retido conforme tabela progressiva' },
      { aspecto: 'ISS', docA: 'Nenhuma retenção', docB: 'Retido pela empresa (varia por município)' },
      { aspecto: 'Preenchimento', docA: 'Pelo credor (quem recebeu)', docB: 'Pela empresa (tomadora do serviço)' },
      { aspecto: 'Valor recebido', docA: 'Valor integral (sem descontos)', docB: 'Valor líquido (bruto menos retenções)' },
    ],
    sections: [
      {
        h2: 'O erro mais comum — usar recibo simples quando devia usar RPA',
        paragraphs: [
          'Muitos autônomos emitem recibo simples para clientes empresa, e muitas empresas aceitam. Esse é um erro fiscal grave para a empresa: sem o RPA, ela não recolheu INSS, IR e ISS sobre o serviço — o que pode resultar em autuações fiscais, multas e responsabilidade solidária pelo INSS não recolhido.',
          'Para o autônomo, o problema é menor a curto prazo, mas a longo prazo: sem o INSS retido pelo RPA, ele não está contribuindo para a previdência social de forma comprovada, o que afeta aposentadoria e benefícios.',
        ],
      },
      {
        h2: 'Como identificar qual documento usar',
        paragraphs: [
          'A regra é simples: quem está pagando? Se for pessoa física (CPF), use recibo simples. Se for empresa (CNPJ), use RPA. Essa regra vale independentemente do tipo de serviço.',
          'Exceção importante: se o prestador for MEI, a empresa usa NFS-e (nota fiscal), não RPA. O MEI não é autônomo pessoa física para fins de RPA — ele é pessoa jurídica.',
        ],
      },
    ],
    verdict: 'A escolha entre recibo simples e RPA depende exclusivamente de quem está pagando: CPF → recibo simples; CNPJ → RPA. Nunca use recibo simples para pagamentos de empresas — o risco fiscal é exclusivamente da empresa, mas compromete a relação.',
    faqs: [
      { q: 'Posso usar recibo simples para empresa se ela aceitar?', a: 'A empresa pode aceitar, mas fica em situação fiscal irregular. Ela tem obrigação legal de fazer as retenções do RPA — aceitar recibo simples não elimina essa obrigação.' },
      { q: 'O autônomo pode recusar assinar o RPA?', a: 'Tecnicamente sim, mas isso dificulta ser contratado por empresas. O RPA é o documento que formaliza a relação e garante que o INSS será recolhido (o que beneficia o autônomo).' },
      { q: 'Qual o prazo para a empresa entregar o RPA ao autônomo?', a: 'Não há prazo legal específico, mas o padrão é entregar junto com o pagamento. O autônomo deve exigir uma via assinada antes de iniciar o serviço ou ao receber o pagamento.' },
      { q: 'RPA tem alguma desvantagem para o autônomo?', a: 'O autônomo recebe menos (por conta das retenções). Mas o INSS retido conta para aposentadoria, e o IR retido pode ser compensado na declaração anual. A longo prazo, o RPA é vantajoso.' },
      { q: 'Existe multa por usar recibo simples no lugar de RPA?', a: 'Diretamente para o recibo, não. Mas a empresa pode ser autuada por não recolher as contribuições previdenciárias e tributárias devidas — o que equivale a multa indireta.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA? Guia completo' },
    ],
  },
]

export const COMPARACOES: Record<string, Comparacao> = Object.fromEntries(comparacoes.map((c) => [c.slug, c]))
export const ALL_COMPARACAO_SLUGS = comparacoes.map((c) => c.slug)
