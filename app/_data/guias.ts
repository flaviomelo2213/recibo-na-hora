import type { FAQ } from '@/lib/schema'

export interface GuiaSection {
  h2: string
  content: string[]
}

export interface Guia {
  slug: string
  title: string
  description: string
  keywords: string[]
  datePublished: string
  category: string
  readTime: string
  intro: string
  sections: GuiaSection[]
  faqs: FAQ[]
  relatedLinks: { href: string; label: string }[]
}

const guias: Guia[] = [
  {
    slug: 'recibo-tem-valor-legal',
    title: 'Recibo tem valor legal? Entenda o que a lei diz',
    description: 'Descubra se o recibo tem validade jurídica no Brasil, quando ele é aceito como prova e o que fazer para garantir sua validade legal.',
    keywords: ['recibo tem valor legal', 'recibo vale como prova', 'validade juridica recibo', 'recibo simples vale'],
    datePublished: '2025-01-10',
    category: 'Dúvidas Legais',
    readTime: '5 min',
    intro: 'Sim — o recibo simples tem valor legal no Brasil. Ele é reconhecido pelo Código Civil como prova de quitação de pagamento. Mas há condições para que ele seja válido e aceito como prova.',
    sections: [
      {
        h2: 'O que diz o Código Civil sobre recibos',
        content: [
          'O artigo 320 do Código Civil Brasileiro (Lei 10.406/2002) estabelece que "a quitação, que sempre poderá ser dada por instrumento particular, designará o valor e a espécie da dívida quitada, o nome do devedor, ou quem por este pagou, o tempo e o lugar do pagamento, com a assinatura do credor."',
          'Em outras palavras, o recibo é um instrumento legítimo de quitação desde que contenha os elementos essenciais: valor, descrição, dados das partes, data e assinatura.',
        ],
      },
      {
        h2: 'Quando o recibo é aceito como prova',
        content: [
          'O recibo é aceito como prova documental em ações judiciais, disputas trabalhistas, cobranças extrajudiciais e processos administrativos. Ele comprova que um pagamento foi realizado e quitado.',
          'Para ter maior força probatória, o recibo deve conter: identificação completa das partes (nome e CPF/CNPJ), descrição do que foi pago, valor numérico e por extenso, data e local, e assinatura de quem recebeu.',
          'Recibos com firma reconhecida em cartório têm ainda mais peso jurídico, mas não é obrigatório para a maioria das transações.',
        ],
      },
      {
        h2: 'Quando o recibo pode não ser suficiente',
        content: [
          'Para contratos de locação de imóvel, o recibo deve seguir as regras da Lei do Inquilinato (Lei 8.245/91). Para trabalhadores com carteira assinada, o recibo de salário deve conter informações específicas da CLT.',
          'Em transações de alto valor ou com imóveis, recomenda-se complementar o recibo com contrato formal ou escritura pública. O recibo de sinal (arras) para compra de imóvel, por exemplo, deve ser acompanhado de contrato de compra e venda.',
        ],
      },
      {
        h2: 'Recibo digital tem validade?',
        content: [
          'Sim. A Lei 14.063/2020 e a Medida Provisória 2.200-2/2001 (que criou a ICP-Brasil) reconhecem documentos digitais como válidos juridicamente. Um recibo gerado digitalmente e salvo em PDF, com os dados corretos, tem a mesma validade de um recibo em papel.',
          'Para maior segurança em recibos digitais de alto valor, use assinatura digital com certificado ICP-Brasil ou plataformas como DocuSign, ClickSign ou D4Sign.',
        ],
      },
      {
        h2: 'Por quanto tempo guardar o recibo',
        content: [
          'A prescrição para cobranças civis é em geral de 5 anos (art. 206, §5º do Código Civil). Para questões trabalhistas, o prazo é de 2 anos após o término do contrato (art. 7º, XXIX da CF).',
          'Recomendamos guardar todos os recibos por pelo menos 5 anos. Para recibos de aluguel, guarde pelo prazo do contrato mais 5 anos. Para recibos relacionados a imóveis, guarde indefinidamente.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo sem assinatura tem valor?', a: 'Um recibo sem assinatura tem valor reduzido como prova. A assinatura é o elemento que indica a concordância do credor com o recebimento. Sem ela, o documento pode ser questionado judicialmente.' },
      { q: 'Preciso reconhecer firma no recibo?', a: 'Para a maioria das transações, não. O reconhecimento de firma reforça a autenticidade, mas não é requisito legal obrigatório para recibos simples.' },
      { q: 'Recibo eletrônico vale tanto quanto o papel?', a: 'Sim. Desde que contenha todos os dados obrigatórios e possa ser comprovada sua autoria (ex: via assinatura digital ou e-mail com data), o recibo eletrônico tem a mesma validade jurídica.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' },
      { href: '/guias/recibo-precisa-de-cpf', label: 'Recibo precisa de CPF?' },
      { href: '/blog/recibo-tem-validade-legal', label: 'Artigo completo sobre validade' },
    ],
  },
  {
    slug: 'recibo-precisa-de-cpf',
    title: 'Recibo precisa de CPF? O que é obrigatório',
    description: 'Descubra se é obrigatório informar CPF no recibo, quando o CNPJ substitui o CPF e quais dados são realmente necessários para o documento ter validade.',
    keywords: ['recibo precisa de cpf', 'cpf no recibo obrigatorio', 'dados obrigatorios recibo', 'recibo sem cpf vale'],
    datePublished: '2025-01-15',
    category: 'Dúvidas Legais',
    readTime: '4 min',
    intro: 'O CPF não é tecnicamente obrigatório por lei para recibos simples entre pessoas físicas — mas incluí-lo é fortemente recomendado. Sem ele, identificar as partes numa disputa judicial se torna muito mais difícil.',
    sections: [
      {
        h2: 'O que a lei exige no recibo',
        content: [
          'O Código Civil (art. 320) exige que o recibo contenha: valor e espécie da dívida, nome do devedor (ou quem pagou), tempo e lugar do pagamento, e assinatura do credor.',
          'Repare que o CPF não é mencionado explicitamente. Mas "nome" sem CPF pode ser insuficiente quando há pessoas com nomes iguais — o CPF é o único identificador único e inequívoco de uma pessoa física no Brasil.',
        ],
      },
      {
        h2: 'Quando o CPF é praticamente obrigatório',
        content: [
          'Para recibos de serviços acima de R$ 500, inclua sempre CPF de ambas as partes. Para Recibo de Pagamento de Autônomo (RPA), o CPF é obrigatório pois a empresa precisa fazer retenções de INSS e IR.',
          'Para recibos de aluguel, o CPF do locatário e locador deve constar para fins fiscais — tanto o locador quanto o locatário precisam declarar valores no IRPF.',
        ],
      },
      {
        h2: 'CPF ou CNPJ: qual usar',
        content: [
          'Use CPF para pessoa física. Use CNPJ para empresa (MEI, ME, LTDA, S/A etc.). Quando uma empresa contrata um autônomo, o recibo deve conter: CPF do autônomo + CNPJ da empresa.',
          'Se o autônomo é MEI, pode usar tanto o CPF pessoal quanto o CNPJ do MEI — mas para serviços prestados como MEI, o correto é emitir nota fiscal de serviços (NFS-e), não recibo simples.',
        ],
      },
      {
        h2: 'O que acontece se não incluir o CPF',
        content: [
          'O recibo ainda tem valor probatório, mas fica mais vulnerável a contestações. Sem CPF, uma das partes pode alegar que era outra pessoa com o mesmo nome. Em disputa judicial, o juiz pode entender que a prova é fraca.',
          'Recomendação prática: sempre inclua CPF (e RG ou outro documento se quiser reforçar). A LGPD (Lei 14.709/2020) permite o uso de CPF em documentos contratuais como o recibo.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso recusar a dar meu CPF para recibo?', a: 'Sim, você pode — não é legalmente obrigado. Mas ao recusar, o recibo fica mais difícil de contestar ou provar se houver disputa. É do seu interesse incluir o CPF para se proteger.' },
      { q: 'Recibo de diarista precisa de CPF?', a: 'Não é obrigatório por lei, mas é fortemente recomendado. Para diaristas que precisam comprovar renda (financiamento, aluguel), o CPF no recibo é quase sempre exigido pela instituição.' },
      { q: 'E se a pessoa não tiver CPF?', a: 'Estrangeiros sem CPF podem usar o número do passaporte ou RNE. Para menores de idade, use o CPF do responsável legal.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo com CPF' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'nota-fiscal-ou-recibo-quando-usar',
    title: 'Nota Fiscal ou Recibo: qual documento usar em cada situação?',
    description: 'Guia prático: quando o recibo simples é suficiente e quando você é obrigado a emitir nota fiscal. Exemplos reais para MEI, autônomo e empresas.',
    keywords: ['nota fiscal ou recibo', 'quando emitir nota fiscal', 'recibo substitui nota fiscal', 'mei nota fiscal ou recibo', 'rpa ou nota fiscal'],
    datePublished: '2025-01-20',
    category: 'Dúvidas Legais',
    readTime: '6 min',
    intro: 'Recibo e nota fiscal cumprem funções parecidas, mas têm implicações fiscais completamente diferentes. Usar o documento errado pode resultar em problemas com a Receita Federal e o Fisco municipal.',
    sections: [
      {
        h2: 'O que é cada documento',
        content: [
          'Recibo simples: documento privado que comprova o recebimento de pagamento. Não tem número fiscal, não alimenta o sistema tributário. Válido para serviços entre pessoas físicas.',
          'Nota Fiscal de Serviços (NFS-e): documento fiscal emitido por empresas (incluindo MEI) ou profissionais obrigados por lei municipal. Alimenta o sistema de ISS (Imposto sobre Serviços) e serve como base para escrituração contábil.',
          'RPA (Recibo de Pagamento de Autônomo): documento emitido quando uma empresa (CNPJ) paga um autônomo (CPF). A empresa retém INSS, IR e ISS antes de pagar o líquido.',
        ],
      },
      {
        h2: 'Quando usar recibo simples',
        content: [
          'Use recibo simples quando: pessoa física paga para outra pessoa física (ex: contratante paga pedreiro autônomo), valor abaixo do limite de isenção de IR, serviço eventual ou único.',
          'Não use recibo simples quando: empresa (CNPJ) está contratando (use RPA ou NFS-e), você é MEI (deve emitir NFS-e), você está obrigado a emitir nota fiscal pelo município.',
        ],
      },
      {
        h2: 'Quando usar RPA',
        content: [
          'O RPA é obrigatório quando uma pessoa jurídica (empresa) paga por serviços prestados por pessoa física autônoma. A empresa deve reter: INSS (11% ou 20% dependendo do caso), IR conforme tabela progressiva, e ISS conforme alíquota municipal.',
          'O autônomo recebe o valor líquido e fica com o RPA como comprovante. Os valores retidos são repassados pela empresa ao governo.',
        ],
      },
      {
        h2: 'Quando emitir nota fiscal (NFS-e)',
        content: [
          'MEI: deve emitir NFS-e para empresas (CNPJ). Para pessoas físicas, pode emitir recibo, mas NFS-e é aceita.',
          'Empresas: sempre emitem NFS-e. Não existe "recibo" para empresa.',
          'Profissionais liberais (médicos, advogados, contadores) podem ser obrigados a emitir NFS-e dependendo do município, mesmo atuando como pessoa física.',
        ],
      },
    ],
    faqs: [
      { q: 'Empresa pode aceitar recibo de autônomo?', a: 'Não. Quando uma empresa contrata autônomo, o documento correto é o RPA — não o recibo simples. O RPA inclui as retenções fiscais obrigatórias.' },
      { q: 'MEI pode emitir recibo para pessoa física?', a: 'Sim. Para serviços prestados a pessoas físicas, o MEI pode emitir recibo simples. Mas para empresas (CNPJ), deve emitir nota fiscal de serviços (NFS-e).' },
      { q: 'Recibo serve para declarar IR?', a: 'Sim. Rendimentos comprovados por recibo devem ser declarados no IRPF. Se receber de pessoas físicas, recolha Carnê-Leão mensalmente.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'recibo-aluguel-obrigatorio',
    title: 'Recibo de aluguel é obrigatório? O que diz a Lei do Inquilinato',
    description: 'Descubra se o locador é obrigado a emitir recibo de aluguel, o que deve constar no documento e como a Lei 8.245/91 protege o inquilino.',
    keywords: ['recibo aluguel obrigatorio', 'lei inquilinato recibo', 'locador obrigado recibo', 'recibo aluguel lei 8245'],
    datePublished: '2025-01-25',
    category: 'Dúvidas Legais',
    readTime: '5 min',
    intro: 'Sim — o recibo de aluguel é obrigatório por lei. A Lei do Inquilinato (Lei 8.245/91) obriga o locador a fornecer recibo ao inquilino a cada pagamento realizado. Recusar-se a emitir é infração.',
    sections: [
      {
        h2: 'O que diz a Lei do Inquilinato',
        content: [
          'O artigo 22, inciso VI da Lei 8.245/91 determina que é obrigação do locador "fornecer ao locatário recibo discriminado das importâncias por este pagas, vedada a quitação genérica".',
          'Isso significa que o recibo deve discriminar cada valor: aluguel principal, IPTU (se repassado), condomínio (se repassado), taxa de incêndio, etc. Uma "quitação genérica" (apenas "referente ao mês X") não é suficiente.',
        ],
      },
      {
        h2: 'O que deve constar no recibo de aluguel',
        content: [
          'Nome e CPF/CNPJ do locador (quem recebeu)',
          'Nome e CPF do locatário (quem pagou)',
          'Endereço do imóvel alugado',
          'Mês de referência do aluguel',
          'Valor do aluguel principal',
          'Valores discriminados de encargos (condomínio, IPTU, etc.)',
          'Valor total recebido',
          'Data do pagamento',
          'Assinatura do locador',
        ],
      },
      {
        h2: 'O que acontece se o locador recusar o recibo',
        content: [
          'A recusa do locador em emitir recibo é descumprimento contratual e legal. O inquilino pode: notificar o locador por escrito exigindo o recibo, registrar boletim de ocorrência, ou depositar o aluguel judicialmente (consignação em pagamento) para se proteger de uma alegação de inadimplência.',
          'Sem o recibo, o inquilino fica desprotegido caso o locador alegue que o aluguel não foi pago.',
        ],
      },
      {
        h2: 'Recibo de aluguel por PIX ou transferência',
        content: [
          'O comprovante bancário de PIX ou transferência pode substituir o recibo? Parcialmente. O comprovante prova que o pagamento foi feito, mas não especifica para qual imóvel ou período.',
          'A boa prática é emitir o recibo mesmo quando o pagamento é por PIX, referenciando o comprovante de pagamento. Nosso modelo de recibo de aluguel inclui campo para referência de transação bancária.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso usar comprovante de PIX no lugar do recibo de aluguel?', a: 'O comprovante de PIX prova o pagamento, mas não substitui completamente o recibo. O locador ainda é obrigado por lei a emitir recibo discriminado. Use ambos: pague por PIX e peça o recibo.' },
      { q: 'Recibo de aluguel serve para declarar IR?', a: 'Sim. O inquilino pode usar os recibos para comprovar despesas com aluguel (em casos específicos). O locador deve declarar todos os aluguéis recebidos no IRPF.' },
      { q: 'Pode emitir recibo de aluguel digital?', a: 'Sim. Um PDF enviado por e-mail com os dados obrigatórios tem a mesma validade do papel. Recomenda-se manter cópias arquivadas pelo prazo do contrato mais 5 anos.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/imobiliario', label: 'Gerar Recibo de Aluguel' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'o-que-e-rpa',
    title: 'O que é RPA (Recibo de Pagamento de Autônomo)?',
    description: 'Entenda o que é RPA, quando usar, quais impostos são retidos e como preencher corretamente o Recibo de Pagamento de Autônomo.',
    keywords: ['o que e rpa', 'recibo pagamento autonomo', 'rpa impostos retidos', 'como preencher rpa'],
    datePublished: '2025-02-01',
    category: 'Documentos Fiscais',
    readTime: '6 min',
    intro: 'RPA é o Recibo de Pagamento de Autônomo — o documento usado quando uma empresa (CNPJ) paga por serviços de pessoa física autônoma. Nele, a empresa desconta INSS, IR e ISS antes de realizar o pagamento.',
    sections: [
      {
        h2: 'Quando o RPA é obrigatório',
        content: [
          'O RPA é obrigatório sempre que uma empresa (pessoa jurídica) paga por serviços de um trabalhador autônomo (pessoa física sem CNPJ). Exemplos: empresa que contrata consultor autônomo, escritório que usa serviço de um técnico de TI sem CNPJ, empresa que paga a um pedreiro pessoa física.',
          'Sem o RPA, a empresa não pode deduzir a despesa no IRPJ/CSLL e fica sem comprovação adequada para a Receita Federal.',
        ],
      },
      {
        h2: 'Quais impostos são retidos no RPA',
        content: [
          'INSS: alíquota de 11% sobre o valor bruto, limitado ao teto do INSS (atualizado anualmente). A empresa também paga a parte patronal (20%) por fora.',
          'IRRF: conforme a tabela progressiva do IR, descontado sobre o valor bruto menos o INSS.',
          'ISS: varia de 2% a 5% dependendo do município e tipo de serviço. Algumas cidades isentam autônomos do ISS.',
          'O autônomo recebe o valor líquido (bruto - INSS - IR - ISS) e usa o RPA como comprovante.',
        ],
      },
      {
        h2: 'Como preencher o RPA',
        content: [
          'Dados do prestador: nome completo, CPF, endereço, PIS/PASEP (se tiver)',
          'Dados do tomador: razão social, CNPJ, endereço',
          'Descrição do serviço prestado',
          'Valor bruto dos serviços',
          'Descontos: INSS, IRRF, ISS (com alíquotas)',
          'Valor líquido a receber',
          'Data e assinaturas de ambas as partes',
        ],
      },
      {
        h2: 'RPA x Recibo Simples x Nota Fiscal',
        content: [
          'RPA: empresa → autônomo pessoa física. Há retenção de impostos.',
          'Recibo simples: pessoa física → pessoa física. Sem retenção.',
          'Nota fiscal: MEI ou empresa → qualquer cliente. Sem retenção pelo tomador (exceto para algumas categorias).',
        ],
      },
    ],
    faqs: [
      { q: 'Autônomo com MEI emite RPA?', a: 'Não. MEI é pessoa jurídica e deve emitir nota fiscal de serviços (NFS-e), não RPA. O RPA é exclusivo para autônomos pessoa física sem CNPJ.' },
      { q: 'O INSS retido no RPA conta para aposentadoria?', a: 'Sim. O INSS retido no RPA é recolhido pela empresa como contribuição previdenciária do autônomo. Ele conta como contribuição para fins de aposentadoria e benefícios do INSS.' },
      { q: 'Posso recusar o RPA e usar recibo simples?', a: 'Não é recomendado. A empresa é obrigada a fazer as retenções. Se usar recibo simples no lugar do RPA, a empresa fica em situação irregular perante a Receita Federal e o INSS.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/diferenca-recibo-nota-fiscal', label: 'Diferença: Recibo x Nota Fiscal' },
    ],
  },
  {
    slug: 'recibo-pix-como-funciona',
    title: 'Recibo de PIX: quando emitir e como funciona',
    description: 'O comprovante de PIX substitui o recibo? Descubra quando emitir recibo após pagamento por PIX e como criar um documento válido.',
    keywords: ['recibo pix', 'comprovante pix vale recibo', 'recibo pagamento pix', 'pix substituir recibo'],
    datePublished: '2025-02-05',
    category: 'Dúvidas Legais',
    readTime: '4 min',
    intro: 'O comprovante de PIX prova a transferência, mas não substitui o recibo em todas as situações. Para serviços prestados, é recomendável emitir um recibo que detalhe o que foi pago — o comprovante de PIX apenas prova que o dinheiro foi transferido.',
    sections: [
      {
        h2: 'O que o comprovante de PIX prova',
        content: [
          'O comprovante de PIX (gerado pelo app do banco) prova que uma transferência ocorreu entre duas chaves PIX em determinada data. Ele contém: valor, data, hora, nome do pagador, banco destino e ID da transação.',
          'O que o comprovante NÃO prova: a que se refere o pagamento, se é pagamento integral ou parcial, se o serviço foi aceito/entregue.',
        ],
      },
      {
        h2: 'Quando emitir recibo mesmo pagando por PIX',
        content: [
          'Para serviços autônomos: sempre. O recibo especifica o serviço prestado e o valor, enquanto o comprovante apenas prova a transferência.',
          'Para aluguel: o locador é obrigado por lei a emitir recibo discriminado (Lei 8.245/91), independentemente da forma de pagamento.',
          'Para compras de produtos usados (carro, eletrônico, etc.): sempre emita recibo com descrição do bem, para evitar problemas futuros.',
        ],
      },
      {
        h2: 'Como criar um recibo de pagamento por PIX',
        content: [
          'O recibo de PIX é igual a qualquer outro recibo, com a adição da informação de pagamento: "pago via PIX, ID da transação: XXXX".',
          'No nosso gerador de recibo PIX, você preenche os dados e o documento já inclui o campo para identificar o pagamento como PIX e o código de transação.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso usar só o comprovante de PIX como recibo?', a: 'Para transações simples e sem disputas, o comprovante pode ser suficiente. Mas para serviços prestados, aluguel ou valores altos, emita sempre um recibo formal — o comprovante sozinho não especifica o motivo do pagamento.' },
      { q: 'Recibo de PIX precisa de assinatura?', a: 'Recibo em PDF digital não precisa de assinatura manuscrita para ter validade. Mas incluir assinatura digital (ou física escaneada) aumenta a segurança jurídica.' },
      { q: 'E se o PIX cair na conta errada?', a: 'O recibo protege você: ele comprova que você pagou. Para recuperar o valor enviado por engano, o processo é com o banco (MED — Mecanismo Especial de Devolução do Banco Central). O recibo não interfere nesse processo.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-pix', label: 'Gerar Recibo de PIX' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'como-fazer-recibo-autonomo',
    title: 'Como fazer recibo de autônomo: passo a passo completo',
    description: 'Aprenda como fazer um recibo de autônomo correto. O que colocar, como calcular impostos e quando usar recibo simples ou RPA.',
    keywords: ['como fazer recibo autonomo', 'recibo autonomo passo a passo', 'recibo servico autonomo', 'modelo recibo autonomo'],
    datePublished: '2025-02-10',
    category: 'Como Fazer',
    readTime: '7 min',
    intro: 'Fazer um recibo de autônomo é simples, mas exige atenção aos dados corretos. O tipo de recibo varia dependendo de quem é o contratante: pessoa física usa recibo simples; empresa usa RPA.',
    sections: [
      {
        h2: 'Passo 1: Identifique o tipo de contratante',
        content: [
          'Pessoa física (CPF): use recibo simples. Você recebe o valor combinado integralmente.',
          'Empresa (CNPJ): use RPA. A empresa descontará INSS (11%), IR (tabela progressiva) e ISS antes de pagar o valor líquido.',
          'MEI contratando: tecnicamente MEI é pessoa jurídica, mas na prática pode pagar com recibo simples para autônomos de baixo valor. Para segurança, use RPA.',
        ],
      },
      {
        h2: 'Passo 2: Reúna os dados necessários',
        content: [
          'Seus dados: nome completo, CPF, endereço, telefone.',
          'Dados do contratante: nome/razão social, CPF/CNPJ, endereço.',
          'Descrição do serviço: seja específico (ex: "instalação elétrica em cozinha, conforme orçamento nº 123").',
          'Valor: numérico e por extenso.',
          'Forma de pagamento: dinheiro, PIX, transferência.',
          'Data do recebimento.',
        ],
      },
      {
        h2: 'Passo 3: Preencha o recibo',
        content: [
          'Use nosso gerador online — você preenche os campos e o PDF é gerado automaticamente, com layout profissional e todos os campos obrigatórios.',
          'Para RPA, use nosso gerador de RPA que calcula automaticamente INSS, IR e ISS com base no valor bruto informado.',
        ],
      },
      {
        h2: 'Passo 4: Assine e arquive',
        content: [
          'Imprima em 2 vias: uma para você, uma para o contratante. Se o pagamento for por PIX/transferência, o PDF enviado por e-mail já funciona como comprovante digital.',
          'Guarde todos os recibos por pelo menos 5 anos para fins do IRPF (Carnê-Leão e declaração anual).',
        ],
      },
    ],
    faqs: [
      { q: 'Preciso de papel específico para o recibo?', a: 'Não. Qualquer papel A4 branco serve. O importante são os dados corretos. Nosso gerador produz PDF pronto para impressão.' },
      { q: 'Posso fazer recibo à mão?', a: 'Sim. Recibo manuscrito tem a mesma validade jurídica. Mas recibo digitado ou gerado por sistema é mais legível e menos sujeito a rasuras.' },
      { q: 'Recibo de autônomo conta para aposentadoria?', a: 'Recibo simples não recolhe INSS automaticamente. Para contar para aposentadoria, o autônomo deve recolher o INSS por conta própria (Contribuinte Individual, código 1163) mensalmente.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Simples' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA?' },
    ],
  },
  {
    slug: 'contrato-prestacao-servico-obrigatorio',
    title: 'Contrato de prestação de serviço é obrigatório?',
    description: 'Descubra quando o contrato de prestação de serviços é obrigatório, a diferença entre contrato verbal e escrito e como se proteger sem um contrato formal.',
    keywords: ['contrato prestacao servico obrigatorio', 'contrato verbal prestacao servico', 'quando fazer contrato servico'],
    datePublished: '2025-02-15',
    category: 'Dúvidas Legais',
    readTime: '5 min',
    intro: 'O contrato de prestação de serviços não é obrigatório na maioria dos casos — o Código Civil permite contratos verbais. Mas sem um contrato escrito, provar o que foi acordado em caso de disputa se torna muito mais difícil.',
    sections: [
      {
        h2: 'Contrato verbal é válido?',
        content: [
          'Sim. O Código Civil (art. 104) reconhece contratos verbais desde que haja acordo entre as partes, objeto lícito e partes capazes. Um combinado verbal de serviço tem força legal.',
          'Mas provar um contrato verbal é difícil. Em litígio judicial, a palavra de uma parte contra a outra é fraca como prova. Mensagens de WhatsApp, e-mails e recibos podem ajudar a reconstituir o que foi acordado.',
        ],
      },
      {
        h2: 'Quando é obrigatório ter contrato escrito',
        content: [
          'Locação de imóvel: a Lei do Inquilinato recomenda (mas não obriga) contrato escrito. Sem contrato, presume-se locação por prazo indeterminado.',
          'Contratos acima de R$ 30 salários mínimos: a lei recomenda forma escrita para atos de maior relevância.',
          'Profissões regulamentadas (advogados, médicos, engenheiros): conselhos profissionais podem exigir contrato formal.',
          'Contratos de trabalho: CLT exige contrato escrito para contratações por prazo determinado.',
        ],
      },
      {
        h2: 'O recibo substitui o contrato?',
        content: [
          'Não. O recibo comprova o pagamento; o contrato define as obrigações, prazos e responsabilidades. São documentos complementares.',
          'Para serviços simples e de curto prazo, o recibo pode ser suficiente. Para obras longas, serviços recorrentes ou valores altos, use sempre os dois: contrato + recibo a cada pagamento.',
        ],
      },
    ],
    faqs: [
      { q: 'Mensagem de WhatsApp vale como contrato?', a: 'Pode ter valor probatório, especialmente se o acordo ficou claro por escrito, com valores e escopo definidos. WhatsApp foi reconhecido como prova em diversas decisões judiciais, mas é fraco como substituto de contrato formal.' },
      { q: 'Posso cancelar um contrato verbal?', a: 'Sim, mas é arriscado. Para contratos por prazo indeterminado, aviso prévio razoável é necessário. Para contratos com prazo, a rescisão pode gerar obrigação de indenização por perdas e danos.' },
      { q: 'Como provar um contrato verbal?', a: 'Use: e-mails e mensagens trocadas, orçamentos aprovados, recibos de pagamento, testemunhas, fotos do serviço/produto. Quanto mais evidências, mais forte fica sua posição.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/contrato-completo', label: 'Gerar Contrato de Prestação de Serviço' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
]

export const GUIAS: Record<string, Guia> = Object.fromEntries(guias.map((g) => [g.slug, g]))
export const ALL_GUIA_SLUGS = guias.map((g) => g.slug)
