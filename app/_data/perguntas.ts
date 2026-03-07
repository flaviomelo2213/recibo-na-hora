import type { FAQ } from '@/lib/schema'

export interface Pergunta {
  slug: string
  question: string
  shortAnswer: string
  metaDescription: string
  keywords: string[]
  datePublished: string
  category: string
  sections: Array<{ h2: string; paragraphs: string[] }>
  faqs: FAQ[]
  relatedLinks: { href: string; label: string }[]
}

const perguntas: Pergunta[] = [
  {
    slug: 'recibo-sem-assinatura-vale',
    question: 'Recibo sem assinatura tem valor jurídico?',
    shortAnswer: 'Um recibo sem assinatura tem valor jurídico reduzido. A assinatura é o elemento que demonstra concordância de quem recebeu o pagamento. Sem ela, o documento pode ser contestado facilmente em juízo.',
    metaDescription: 'Recibo sem assinatura vale como prova? Descubra o que a lei diz, quando é possível contestar um recibo sem assinatura e como se proteger.',
    keywords: ['recibo sem assinatura', 'recibo sem assinatura vale', 'recibo assinatura obrigatoria', 'recibo sem assinar juridico'],
    datePublished: '2025-03-01',
    category: 'Validade Jurídica',
    sections: [
      {
        h2: 'O que diz o Código Civil sobre assinatura no recibo',
        paragraphs: [
          'O artigo 320 do Código Civil estabelece os requisitos para a validade de um recibo como instrumento de quitação. Embora o texto mencione "assinatura do credor", ele não classifica expressamente a falta dela como causa de nulidade absoluta — apenas enfraquece substancialmente a força probatória do documento.',
          'Na prática, tribunais têm reconhecido que um recibo sem assinatura pode ainda ser usado como prova indiciária, desde que combinado com outros elementos: comprovantes de transferência bancária, testemunhas ou mensagens que confirmem o pagamento.',
        ],
      },
      {
        h2: 'Quando a falta de assinatura pode ser fatal',
        paragraphs: [
          'Em ações de cobrança onde o credor nega ter recebido o pagamento, o recibo sem assinatura quase nunca prevalece sozinho. O juiz tende a favorecer quem tem mais provas, e um recibo assinado tem muito mais peso que um sem assinatura.',
          'Para aluguel, a situação é ainda mais crítica: a Lei do Inquilinato (8.245/91) exige que o locador forneça recibo discriminado, pressupondo que ele assina como quem recebeu. Um recibo de aluguel sem assinatura do locador pode ser questionado no JEC (Juizado Especial Cível).',
        ],
      },
      {
        h2: 'Alternativas quando não é possível obter assinatura',
        paragraphs: [
          'Se a outra parte se recusar a assinar, documente o pagamento por outros meios: pague via PIX ou transferência com descrição clara (ex: "aluguel jan/2025 ap. 102"), tire screenshot do comprovante e mantenha o histórico de conversas onde o valor foi acordado.',
          'Para serviços, o ideal é confirmar o recebimento por escrito via WhatsApp ou e-mail, mesmo que não seja assinado formalmente. Esse registro pode suprir a ausência da assinatura em eventual disputa.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo sem assinatura tem validade?', a: 'Tem validade reduzida. Pode ser usado como prova auxiliar, mas sozinho dificilmente prevalece em disputa judicial. A assinatura é fundamental para a força probatória.' },
      { q: 'Posso exigir assinatura no recibo?', a: 'Sim. Quem realiza o pagamento tem o direito de exigir recibo assinado. Em locação, isso é previsto em lei (Art. 22, VI da Lei 8.245/91).' },
      { q: 'E-mail ou WhatsApp confirmando recibo sem assinatura vale?', a: 'Sim, com ressalvas. Mensagens digitais foram reconhecidas como prova em decisões judiciais brasileiras, mas têm peso menor que documento físico assinado.' },
      { q: 'Recibo digital sem assinatura tem validade?', a: 'Um recibo digital enviado por e-mail ou gerado por sistema confiável tem mais força que um papel sem assinatura, pois há rastreabilidade (IP, timestamp, e-mail remetente).' },
      { q: 'Posso reconhecer firma em recibo sem assinatura do outro?', a: 'Não. O reconhecimento de firma serve para autenticar A SUA assinatura no documento, não supre a ausência da assinatura da outra parte.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo com Assinatura' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'recibo-pode-ser-manuscrito',
    question: 'Recibo escrito à mão (manuscrito) é válido?',
    shortAnswer: 'Sim. Recibo manuscrito tem plena validade jurídica no Brasil, desde que contenha os campos obrigatórios e a assinatura de quem recebeu. O formato (papel, caneta, tipo de letra) não interfere na validade.',
    metaDescription: 'Recibo escrito à mão vale? Descubra quando o recibo manuscrito é aceito, o que não pode faltar e como garantir sua validade jurídica.',
    keywords: ['recibo manuscrito valido', 'recibo escrito mao vale', 'recibo caneta validade', 'recibo sem computador'],
    datePublished: '2025-03-02',
    category: 'Validade Jurídica',
    sections: [
      {
        h2: 'Base legal do recibo manuscrito',
        paragraphs: [
          'O Código Civil não exige que o recibo seja datilografado ou impresso. O Art. 107 estabelece que "a validade da declaração de vontade não dependerá de forma especial, senão quando a lei expressamente a exigir." Para recibos simples, nenhuma forma especial é exigida.',
          'Isso significa que um recibo escrito em qualquer papel, com qualquer caneta, tem a mesma validade jurídica de um recibo gerado por computador — desde que os dados essenciais estejam corretos e legíveis.',
        ],
      },
      {
        h2: 'Cuidados importantes para o recibo manuscrito',
        paragraphs: [
          'Legibilidade é fundamental: se o nome, CPF ou valor não puder ser lido claramente, o documento perde eficácia probatória. Escreva em letra de forma, com caneta de cor escura, sem rasuras. Em caso de erro, não rasure — faça um novo recibo.',
          'Evite abreviações que possam gerar dúvida no valor: escreva sempre o valor por extenso ("duzentos reais") além do número. Um R$ mal escrito pode ser confundido, mas "duzentos reais" é inequívoco.',
          'Guarde o recibo original. Fotocópia de recibo manuscrito tem valor probatório menor, pois pode ser facilmente adulterada. O original é sempre preferível.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo escrito à mão precisa de testemunhas?', a: 'Não obrigatoriamente para a validade básica. Mas adicionar duas testemunhas e seus CPFs fortalece muito o documento, especialmente para valores altos.' },
      { q: 'Qual caneta usar no recibo manuscrito?', a: 'Prefira caneta esferográfica azul ou preta. Evite lápis (pode ser apagado) e caneta de gel muito fluida (pode borrar).' },
      { q: 'O valor deve ser escrito em número e por extenso no manuscrito?', a: 'Sim, sempre. "R$ 500,00 (quinhentos reais)" é o padrão ideal. Em caso de divergência entre número e extenso, prevalece o valor por extenso (Art. 319 do CC).' },
      { q: 'Posso fazer recibo manuscrito para qualquer valor?', a: 'Sim, mas para valores acima de R$ 1.000 recomenda-se formato mais formal (digitado ou com mais detalhes) para evitar dúvidas.' },
      { q: 'Recibo manuscrito em outra língua tem validade no Brasil?', a: 'Pode ter validade, mas em disputas judiciais pode precisar de tradução juramentada. Para garantia, faça sempre em português.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Digital Grátis' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Validade jurídica do recibo' },
    ],
  },
  {
    slug: 'quanto-tempo-guardar-recibo',
    question: 'Por quanto tempo devo guardar recibos?',
    shortAnswer: 'Guarde recibos por pelo menos 5 anos. Esse é o prazo de prescrição para a maioria das ações de cobrança civil no Brasil (Art. 206, §5º do Código Civil). Para recibos de aluguel, guarde pelo prazo do contrato mais 5 anos.',
    metaDescription: 'Por quanto tempo guardar recibos? Veja os prazos legais para cada tipo de recibo — aluguel, serviços, salário e mais. Dicas de como arquivar.',
    keywords: ['quanto tempo guardar recibo', 'prazo guardar recibo', 'recibo prescricao', 'arquivar recibo tempo'],
    datePublished: '2025-03-03',
    category: 'Dicas Práticas',
    sections: [
      {
        h2: 'Prazos de prescrição por tipo de recibo',
        paragraphs: [
          'No direito civil brasileiro, o prazo para acionar judicialmente um devedor varia conforme a natureza da obrigação. Guardar o recibo pelo menos pelo prazo de prescrição relevante é a regra básica de segurança jurídica.',
          'Recibos de serviços gerais e pagamentos civis: 5 anos (Art. 206, §5º, I do CC). Recibos trabalhistas (salário, férias, 13º): 2 anos após o término do contrato, mas 5 anos durante o vínculo. Recibos de aluguel: pelo prazo do contrato mais 5 anos. Recibos fiscais (para IR): 5 anos após a declaração.',
        ],
      },
      {
        h2: 'Como organizar e guardar recibos de forma eficiente',
        paragraphs: [
          'Para recibos em papel: use pastas etiquetadas por ano e categoria (ex: "Aluguel 2024", "Serviços 2024"). Armazene em local seco, longe de umidade e luz solar direta. Para segurança adicional, digitalize e salve na nuvem.',
          'Para recibos digitais (PDFs): crie pastas organizadas por ano e tipo no Google Drive, Dropbox ou OneDrive. Nomeie os arquivos de forma padronizada: "2024-01-aluguel-apto101.pdf". Faça backup trimestral.',
          'Descarte seguro: ao final do prazo, não jogue recibos com dados pessoais no lixo comum. Passe em fragmentadora ou borrife os dados com marcador permanente antes de descartar.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso jogar fora recibos de aluguel após quitar o contrato?', a: 'Não imediatamente. Guarde por pelo menos 5 anos após o término do contrato de locação, pois o locador pode tentar cobrar danos ou inadimplência dentro desse prazo.' },
      { q: 'Recibo de serviço doméstico (diarista) por quanto tempo guardar?', a: 'Pelo menos 5 anos. Em relações sem registro em carteira, esse prazo é importante para comprovar a natureza autônoma da prestação de serviço.' },
      { q: 'Preciso guardar recibos para o Imposto de Renda?', a: 'Sim. Guarde recibos de despesas dedutíveis (saúde, educação, aluguel) por 5 anos após a declaração, pois a Receita Federal pode intimá-lo a comprová-las.' },
      { q: 'Recibo digital vale como original?', a: 'Para fins fiscais, sim — a Receita Federal aceita documentos digitais com validade legal. Para fins judiciais, documentos digitais também são aceitos como prova.' },
      { q: 'E se eu perder o recibo antes do prazo de prescrição?', a: 'Procure outras provas: comprovante bancário de pagamento, e-mails, mensagens. Se o pagamento foi por PIX, o extrato bancário pode servir como evidência complementar.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Digital' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'recibo-serve-comprovante-renda',
    question: 'Recibo serve como comprovante de renda?',
    shortAnswer: 'Sim. Recibos são amplamente aceitos como comprovante de renda para autônomos, freelancers e diaristas. A maioria dos bancos e financeiras aceita os últimos 3 a 6 meses de recibos para análise de crédito.',
    metaDescription: 'Recibo serve como comprovante de renda? Veja quando é aceito, quantos recibos você precisa e quais bancos aceitam recibos de autônomos.',
    keywords: ['recibo comprovante renda', 'recibo renda autonomo', 'recibo banco aceita', 'comprovante renda recibo autonomo'],
    datePublished: '2025-03-04',
    category: 'Casos de Uso',
    sections: [
      {
        h2: 'Quando o recibo é aceito como comprovante de renda',
        paragraphs: [
          'Bancos, financeiras e locadores de imóveis geralmente aceitam recibos como comprovante de renda para trabalhadores autônomos, freelancers, diaristas e prestadores de serviço em geral. O requisito mais comum é apresentar recibos dos últimos 3 a 6 meses, demonstrando regularidade de renda.',
          'Para crédito imobiliário (financiamento de imóvel), os bancos costumam pedir 6 a 12 meses de recibos com regularidade de valor e periodicidade. Recibos muito variáveis ou irregulares podem reduzir o valor aprovado.',
        ],
      },
      {
        h2: 'Como fazer recibos válidos para comprovação de renda',
        paragraphs: [
          'Para que o recibo seja aceito como comprovante de renda, ele precisa conter: nome completo e CPF do prestador, nome e CPF/CNPJ de quem contratou, descrição do serviço, valor, data e assinatura. Recibos sem CPF ou sem assinatura geralmente são rejeitados.',
          'Dica importante: mantenha uma sequência lógica de recibos — numeração crescente, datas regulares e valores coerentes com a atividade declarada. Recibos emitidos retroativamente ou com inconsistências podem levantar suspeitas.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantos recibos preciso para comprovar renda em financiamento?', a: 'Normalmente entre 6 e 12 meses de recibos. Cada banco tem política própria — consulte antes de solicitar o crédito para saber o número exato.' },
      { q: 'Banco pode recusar recibo como comprovante?', a: 'Sim. Cada instituição tem critérios próprios. Alguns bancos exigem declaração de IR em vez de (ou além de) recibos. CEF e bancos para crédito imobiliário geralmente têm critérios mais rígidos.' },
      { q: 'Recibo de diarista serve para alugar imóvel?', a: 'A maioria dos locadores e imobiliárias aceita recibos de diarista. Apresente os últimos 3-6 meses e, se possível, combine com extrato bancário mostrando os depósitos.' },
      { q: 'MEI precisa de recibo ou nota fiscal para comprovar renda?', a: 'MEI pode usar tanto nota fiscal quanto recibo. Para fins bancários, a DASN-SIMEI (declaração anual do MEI) é o documento mais aceito.' },
      { q: 'Recibo de RPA serve como comprovante de renda?', a: 'Sim. O RPA (Recibo de Pagamento de Autônomo) é até mais aceito que o recibo simples, pois demonstra que a empresa recolheu INSS e IR, validando a relação de trabalho.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo para Comprovar Renda' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA?' },
    ],
  },
  {
    slug: 'recibo-perdido-o-que-fazer',
    question: 'Perdi o recibo — o que fazer?',
    shortAnswer: 'Se você perdeu um recibo, você pode substituí-lo por: segunda via emitida pelo credor, comprovante bancário (PIX/TED/DOC), extrato de conta, e-mails ou mensagens que confirmem o pagamento. A perda do recibo não significa perda do direito.',
    metaDescription: 'Perdi o recibo de pagamento. O que fazer? Veja como comprovar pagamento sem o recibo original e como pedir segunda via.',
    keywords: ['perdi recibo pagamento', 'recibo perdido segunda via', 'comprovante sem recibo', 'recibo extraviado'],
    datePublished: '2025-03-05',
    category: 'Dicas Práticas',
    sections: [
      {
        h2: 'Alternativas ao recibo perdido',
        paragraphs: [
          'O recibo original é a prova ideal, mas não é a única. O ordenamento jurídico brasileiro admite prova por qualquer meio idôneo (Art. 369 do CPC). Isso inclui: comprovante bancário de transferência, extrato de conta corrente, e-mails com confirmação de pagamento, mensagens de WhatsApp ou SMS, declaração do credor por escrito.',
          'Se o pagamento foi por PIX: o comprovante gerado pelo aplicativo do banco registra data, hora, valor e destinatário. Solicite à operadora do banco uma segunda via do comprovante se não tiver mais acesso ao histórico.',
        ],
      },
      {
        h2: 'Como pedir segunda via do recibo',
        paragraphs: [
          'Entre em contato com quem recebeu o pagamento e solicite a emissão de uma segunda via do recibo. A maioria das pessoas aceita fazer isso sem problemas — afinal, confirmar que recebeu não prejudica ninguém.',
          'Se a outra parte se recusar a emitir segunda via, formalize a solicitação por escrito (e-mail ou carta com AR). Isso cria um registro de que você tentou obter o documento. Em casos de locação, o locador é obrigado por lei a fornecer recibo (Lei 8.245/91).',
        ],
      },
    ],
    faqs: [
      { q: 'O credor é obrigado a emitir segunda via de recibo?', a: 'Não há obrigação legal geral para segunda via. Porém, em locação o locador é obrigado a fornecer recibo (Art. 22, VI da Lei 8.245/91). Para outros casos, depende de boa vontade da outra parte.' },
      { q: 'Posso declarar perda de recibo em cartório?', a: 'Você pode fazer uma declaração em cartório afirmando que pagou e que perdeu o comprovante, mas isso tem validade probatória limitada — é uma declaração unilateral.' },
      { q: 'Comprovante de PIX substitui recibo perdido?', a: 'Para a maioria dos casos práticos, sim. O comprovante de PIX prova que o dinheiro saiu da sua conta para a conta do credor, em data e valor específicos.' },
      { q: 'E se o credor afirmar que não recebeu e eu perdi o recibo?', a: 'Reúna todos os indícios: extrato bancário, histórico de conversas, testemunhas. Se necessário, leve ao Procon ou JEC (Juizado Especial Cível) — a análise do conjunto de provas prevalece.' },
      { q: 'Quanto tempo tenho para pedir segunda via?', a: 'Não há prazo legal específico. Peça o quanto antes, enquanto o credor ainda tem registros do recebimento.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Novo Recibo' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'recibo-valor-errado-como-corrigir',
    question: 'Como corrigir um recibo com valor errado?',
    shortAnswer: 'A forma correta de corrigir um recibo com valor errado é emitir um novo recibo com os dados corretos e anular o anterior com uma declaração de cancelamento. Nunca rasure o valor no recibo original — isso invalida o documento.',
    metaDescription: 'Errei o valor no recibo. Como corrigir? Veja o procedimento correto para cancelar e substituir um recibo com informações erradas.',
    keywords: ['recibo valor errado corrigir', 'cancelar recibo errado', 'recibo errado como fazer', 'corrigir recibo emitido'],
    datePublished: '2025-03-06',
    category: 'Dicas Práticas',
    sections: [
      {
        h2: 'Por que nunca rasure um recibo',
        paragraphs: [
          'Rasurar um recibo cria dúvida sobre autenticidade e pode ser interpretado como adulteração de documento. Mesmo com boa intenção, uma rasura pode invalidar toda a força probatória do documento ou, pior, ser interpretada como tentativa de fraude.',
          'A regra é clara: qualquer erro no recibo exige a emissão de um novo documento com os dados corretos, e o cancelamento formal do documento anterior.',
        ],
      },
      {
        h2: 'Passo a passo para corrigir um recibo errado',
        paragraphs: [
          'Passo 1 — Redija uma declaração de cancelamento: "Declaro que o recibo nº [X] emitido em [data] com valor de R$ [valor errado] está cancelado e sem efeito, sendo substituído pelo recibo nº [Y] emitido nesta data." Ambas as partes devem assinar.',
          'Passo 2 — Emita novo recibo com os dados corretos, referenciando o cancelamento do anterior ("substitui o recibo nº X de [data]").',
          'Passo 3 — Guarde os dois documentos juntos: o cancelado e o correto. Isso demonstra transparência e garante rastreabilidade caso alguém questione posteriormente.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso simplesmente emitir novo recibo sem cancelar o errado?', a: 'Não é recomendado. Se ambos circularem, a outra parte pode tentar usar os dois documentos. O cancelamento formal do recibo errado é essencial para evitar conflitos.' },
      { q: 'Recibo com rasura tem validade?', a: 'Tecnicamente pode ter, mas qualquer rasura gera suspeita. Em disputa judicial, um recibo rasurado pode ser desconsiderado ou ter sua autenticidade questionada.' },
      { q: 'E se o recibo errado já foi assinado pela outra parte?', a: 'Mesmo assim, emita declaração de cancelamento assinada por ambos e faça o novo recibo correto. Quanto mais formal o processo, mais seguro para todos.' },
      { q: 'O que fazer se a outra parte não quiser assinar o cancelamento?', a: 'Envie notificação por escrito (e-mail ou carta registrada) informando o cancelamento e solicitando devolução do recibo errado. Documente tudo.' },
      { q: 'O recibo digital (PDF) pode ser corrigido?', a: 'Não. Um PDF não deve ser editado após gerado. Gere um novo PDF com os dados corretos e envie a declaração de cancelamento do anterior por e-mail.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Correto Agora' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Validade jurídica do recibo' },
    ],
  },
  {
    slug: 'recibo-parcial-como-fazer',
    question: 'Como fazer recibo de pagamento parcial?',
    shortAnswer: 'Para pagamentos parcelados, emita um recibo para cada pagamento recebido, especificando o número da parcela e o valor total do acordo. Nunca emita recibo de quitação total antes de receber o pagamento integral.',
    metaDescription: 'Como fazer recibo de pagamento parcial ou parcelado? Modelo e orientações para registrar cada parcela corretamente, sem risco jurídico.',
    keywords: ['recibo pagamento parcial', 'recibo parcela', 'recibo parcelado como fazer', 'recibo entrada sinal parcela'],
    datePublished: '2025-03-07',
    category: 'Como Fazer',
    sections: [
      {
        h2: 'Recibo parcial vs recibo de quitação — diferenças cruciais',
        paragraphs: [
          'O recibo parcial comprova o recebimento de uma parte do valor total. Ele deve deixar claro que há um saldo remanescente. Já o recibo de quitação declara que a dívida está integralmente paga — emitir quitação antes de receber tudo é um erro grave que pode impedir futura cobrança.',
          'Para parcelamentos, o ideal é criar uma série de recibos numerados: "1/4", "2/4", "3/4" e "4/4", onde o último é o único que pode conter a expressão "valor quitado" ou "pagamento integral".',
        ],
      },
      {
        h2: 'O que deve constar em um recibo parcial',
        paragraphs: [
          'Além dos campos básicos (partes, valor, data, assinatura), o recibo parcial deve indicar obrigatoriamente: valor total do acordo, número da parcela atual (ex: "1ª de 3 parcelas"), valor desta parcela, valor já pago até esta parcela e saldo remanescente.',
          'Incluir a data de vencimento das próximas parcelas no recibo cria um documento ainda mais robusto, pois formaliza o cronograma de pagamento.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso fazer um recibo único para várias parcelas já pagas?', a: 'Sim, mas especifique cada valor: "referente às parcelas 1, 2 e 3 no total de R$ X". Isso é melhor do que deixar vago.' },
      { q: 'Recibo parcial pode ter cláusula de rescisão?', a: 'Pode mencionar as consequências de inadimplência, mas cláusulas contratuais complexas são mais adequadas em contratos formais do que em recibos.' },
      { q: 'O que acontece se eu emitir recibo de quitação antes de receber tudo?', a: 'O credor perde juridicamente o direito de cobrar o saldo. O recibo de quitação é uma declaração de que nada mais é devido — use apenas quando tudo foi recebido.' },
      { q: 'Recibo de sinal (entrada) é o mesmo que recibo parcial?', a: 'Não exatamente. O recibo de sinal (arras) tem implicações jurídicas específicas do Código Civil. Recibo de primeira parcela em parcelamento comum não tem as mesmas consequências que arras.' },
      { q: 'Como fazer recibo de saldo residual?', a: 'Faça um recibo indicando "pagamento do saldo restante referente ao acordo de [data], valor original R$ X, já pago R$ Y, saldo desta parcela R$ Z — conta quitada".' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo de Parcela' },
      { href: '/modelo/recibo-sinal', label: 'Modelo Recibo de Sinal' },
    ],
  },
  {
    slug: 'recibo-precisa-de-testemunha',
    question: 'Recibo precisa de testemunha?',
    shortAnswer: 'Testemunha não é obrigatória para a validade básica de um recibo. Porém, dois signatários como testemunhas transformam o documento em título executivo extrajudicial, facilitando muito uma eventual cobrança judicial.',
    metaDescription: 'Recibo precisa de testemunha para ser válido? Entenda quando as testemunhas são obrigatórias, quando ajudam e como incluí-las corretamente.',
    keywords: ['recibo precisa testemunha', 'testemunha recibo obrigatoria', 'recibo testemunha validade', 'recibo sem testemunha vale'],
    datePublished: '2025-03-08',
    category: 'Validade Jurídica',
    sections: [
      {
        h2: 'Validade do recibo sem testemunhas',
        paragraphs: [
          'O recibo simples sem testemunhas é válido como prova de pagamento. O Código Civil não exige testemunhas para que o recibo tenha força probatória — desde que assinado pelas partes principais e com os dados corretos, o documento comprova a quitação.',
          'Tribunais reconhecem regularmente recibos sem testemunha como prova suficiente em disputas de valores moderados. A ausência de testemunha não invalida o documento.',
        ],
      },
      {
        h2: 'Quando e por que adicionar testemunhas',
        paragraphs: [
          'O Art. 784, III do CPC estabelece que documentos assinados pelo devedor e por duas testemunhas são títulos executivos extrajudiciais. Isso significa que, com testemunhas, o credor pode entrar com ação de execução diretamente — sem precisar provar o crédito em ação de conhecimento. O processo é muito mais rápido.',
          'Para valores acima de R$ 1.000 ou em situações onde as partes não se conhecem bem, adicionar testemunhas ao recibo é altamente recomendado. As testemunhas devem ser maiores de 18 anos, capaz civilmente e não devem ser parentes próximos das partes.',
        ],
      },
    ],
    faqs: [
      { q: 'Quantas testemunhas precisa um recibo para virar título executivo?', a: 'Duas testemunhas que assinem o documento junto com as partes. Elas devem ser identificadas com nome completo, CPF e endereço.' },
      { q: 'Testemunha de recibo precisa reconhecer firma?', a: 'Não é obrigatório, mas aumenta a segurança jurídica, especialmente para valores altos.' },
      { q: 'Parente pode ser testemunha de recibo?', a: 'Legalmente não é proibido, mas parentes próximos (cônjuge, pais, filhos) têm credibilidade reduzida em juízo como testemunhas.' },
      { q: 'E se eu não tiver testemunhas disponíveis?', a: 'O recibo vale mesmo sem testemunhas. Nesse caso, fortaleça o documento com pagamento rastreável (PIX/TED) e troca de mensagens confirmando o acordo.' },
      { q: 'Testemunha online (por videochamada) é aceita?', a: 'O tema ainda está em evolução na jurisprudência. Para segurança máxima, testemunhas devem assinar fisicamente. Testemunho digital com assinatura eletrônica certificada pode ser aceito em algumas situações.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo com Campo de Testemunhas' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
    ],
  },
  {
    slug: 'recibo-digital-foto-vale',
    question: 'Foto de recibo tem validade? Recibo digital vale?',
    shortAnswer: 'Sim. Foto de recibo e recibo digital têm validade jurídica no Brasil. A legislação brasileira admite documentos eletrônicos como prova (Art. 369 do CPC). A foto deve ser nítida, com todos os campos legíveis.',
    metaDescription: 'Foto de recibo ou recibo digital tem validade jurídica? Descubra o que a lei diz e quando recibos eletrônicos são aceitos.',
    keywords: ['foto recibo validade', 'recibo digital vale', 'recibo fotografado juridico', 'recibo eletronico validade'],
    datePublished: '2025-03-09',
    category: 'Validade Jurídica',
    sections: [
      {
        h2: 'Base legal para documentos digitais no Brasil',
        paragraphs: [
          'O Art. 369 do Código de Processo Civil estabelece que "as partes têm o direito de empregar todos os meios legais para provar a verdade dos fatos". Isso inclui documentos digitais, fotos, e-mails e mensagens.',
          'A MP 2.200-2/2001 instituiu a Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) e reconhece documentos eletrônicos como originais quando assinados digitalmente. Mas mesmo sem assinatura ICP-Brasil, documentos digitais têm sido aceitos como prova em juízo com base no conjunto probatório.',
        ],
      },
      {
        h2: 'Foto de recibo — quando é suficiente',
        paragraphs: [
          'Para a maioria das situações do dia a dia, uma foto nítida do recibo assinado é suficiente. Bancos digitais, apps de locação e plataformas de crédito aceitam fotos de recibos para diversas finalidades.',
          'Em juízo, a foto pode ser questionada quanto à autenticidade (pode ter sido editada). O recibo original tem mais peso. Mas a foto serve como evidência importante, especialmente combinada com outros elementos (transferência bancária, conversas, e-mails).',
        ],
      },
    ],
    faqs: [
      { q: 'PDF de recibo tem mais validade que foto?', a: 'O PDF gerado diretamente por sistema confiável (como o ReciboNaHora) tem mais rastreabilidade que uma foto, pois inclui metadados de criação. Mas ambos são aceitos como prova.' },
      { q: 'Posso enviar recibo por WhatsApp?', a: 'Sim. Um recibo enviado por WhatsApp (foto ou PDF) é considerado entregue quando o destinatário o recebe. A confirmação de leitura (dois checks azuis) reforça a entrega.' },
      { q: 'Recibo assinado com assinatura eletrônica (DocuSign, ClickSign) vale?', a: 'Sim, e com mais segurança que assinatura manuscrita digitalizada. Plataformas de assinatura digital geram trilha de auditoria, carimbo de tempo e identidade verificada.' },
      { q: 'E se a foto do recibo ficar borrada?', a: 'Um recibo ilegível não tem força probatória. Sempre tire foto com boa iluminação, câmera firme e enquadramento completo. Ou use recibo digital (PDF) para evitar esse problema.' },
      { q: 'Selfie segurando o recibo tem mais validade?', a: 'A selfie com o recibo adiciona um elemento de autenticação (mostra quem estava de posse do documento), mas não é um requisito legal.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Digital (PDF)' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Validade jurídica do recibo' },
    ],
  },
  {
    slug: 'recibo-declaracao-imposto-renda',
    question: 'Recibo entra na declaração do Imposto de Renda?',
    shortAnswer: 'Sim. Quem recebe pagamentos registrados em recibos deve declarar esses valores no IRPF. Autônomos que recebem de pessoas físicas devem recolher Carnê-Leão mensalmente. Os recibos são os comprovantes dos rendimentos declarados.',
    metaDescription: 'Recibo e Imposto de Renda: quando declarar, como lançar rendimentos de recibos no IRPF e o que o autônomo precisa saber sobre Carnê-Leão.',
    keywords: ['recibo imposto de renda', 'recibo IRPF', 'recibo carne leao', 'autonomo declarar recibo ir'],
    datePublished: '2025-03-10',
    category: 'Fiscal',
    sections: [
      {
        h2: 'Recibos e a declaração do IRPF',
        paragraphs: [
          'Todos os rendimentos recebidos por pessoa física devem ser declarados no IRPF anualmente, independentemente de terem sido formalizados por recibo, nota fiscal ou outro documento. O recibo é a fonte documental que comprova o rendimento — sem ele, a declaração pode ser questionada.',
          'Na declaração, esses rendimentos de recibos entram como "Rendimentos de Trabalho Não Assalariado" ou "Rendimentos de Pessoa Jurídica" (no caso de RPA), dependendo de quem pagou.',
        ],
      },
      {
        h2: 'Carnê-Leão: o imposto mensal do autônomo',
        paragraphs: [
          'Autônomos que recebem de pessoas físicas são obrigados a recolher o IRPF mensalmente via Carnê-Leão, mesmo antes da declaração anual. A alíquota segue a tabela progressiva (0% a 27,5%) sobre os rendimentos do mês.',
          'O cálculo é feito no aplicativo "Carnê-Leão Web" da Receita Federal. Guarde todos os recibos como comprovação dos valores lançados, pois podem ser solicitados em caso de malha fina.',
        ],
      },
    ],
    faqs: [
      { q: 'Sou obrigado a guardar recibos para o IR?', a: 'Sim. A Receita Federal pode intimar você a comprovar rendimentos e deduções declaradas por até 5 anos após a entrega da declaração.' },
      { q: 'Recibo de diarista afeta o IR da empregadora?', a: 'Sim. Se a empregadora declarar as diaristas como despesa dedutível (em casos específicos), precisa dos recibos como comprovação.' },
      { q: 'Recibo de aluguel vai para o IR?', a: 'Sim. O locador declara o aluguel recebido como "Rendimentos de Aluguéis". O locatário pode deduzir em casos específicos (escritório em casa, etc.).' },
      { q: 'Autônomo que recebe de empresa (RPA) precisa fazer o quê?', a: 'No RPA, a empresa já retém o IRRF. O autônomo lança os valores recebidos como "Rendimentos de Trabalho Não Assalariado" e o IR retido como imposto pago na declaração anual.' },
      { q: 'Quem recebe abaixo do limite de isenção precisa guardar recibos?', a: 'Sim, mesmo que não precise declarar IR (por estar abaixo da faixa de isenção). Os recibos comprovam a natureza e origem dos valores, o que pode ser exigido por bancos e outros órgãos.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo para IR' },
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA?' },
    ],
  },
  {
    slug: 'recibo-cancelado-como-fazer',
    question: 'Como cancelar um recibo já emitido?',
    shortAnswer: 'Para cancelar um recibo, emita uma declaração de cancelamento assinada por ambas as partes, identifique o recibo original (número, data, valor), e emita novo recibo se necessário. Não existe "estorno" de recibo como em nota fiscal.',
    metaDescription: 'Como cancelar um recibo emitido erroneamente? Passo a passo para anular um recibo sem criar problemas jurídicos.',
    keywords: ['cancelar recibo', 'anular recibo emitido', 'como cancelar recibo', 'recibo cancelado procedimento'],
    datePublished: '2025-03-11',
    category: 'Dicas Práticas',
    sections: [
      {
        h2: 'Diferença entre recibo e nota fiscal no cancelamento',
        paragraphs: [
          'Ao contrário da nota fiscal eletrônica (NF-e), que tem cancelamento formal com prazo de até 24 horas no sistema da SEFAZ, o recibo simples não tem "cancelamento" oficial — ele é um documento privado.',
          'Para cancelar um recibo, o procedimento é criar um novo documento declarando o cancelamento, referenciando o recibo original com seus dados identificadores. Esse documento é tão válido quanto qualquer outro documento particular assinado.',
        ],
      },
      {
        h2: 'Modelo de declaração de cancelamento de recibo',
        paragraphs: [
          'A declaração deve conter: "Declaro que o recibo de número [X], emitido em [data] por [nome do credor] a [nome do devedor], no valor de R$ [valor], está cancelado e sem efeito a partir desta data, por [motivo]." Assine e peça a assinatura da outra parte.',
          'Mantenha tanto a declaração de cancelamento quanto o recibo original arquivados juntos. Jamais destrua o recibo cancelado — ele pode ser necessário para demonstrar o histórico da transação.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso cancelar recibo unilateralmente?', a: 'Sim, mas com risco. O cancelamento unilateral tem valor limitado — a outra parte pode alegar que o recibo ainda é válido. O ideal é o cancelamento bilateral com assinatura de ambos.' },
      { q: 'Preciso devolver o dinheiro para cancelar o recibo?', a: 'Depende do motivo. Se o serviço não foi prestado, a devolução é necessária. Se o recibo tinha erro de dados (mas o pagamento foi correto), basta emitir recibo correto sem devolução.' },
      { q: 'Cancelamento de recibo tem prazo?', a: 'Não há prazo legal para cancelar recibo. Mas quanto mais rápido feito, menos risco de o documento circular e ser usado indevidamente.' },
      { q: 'Recibo cancelado pode ser usado para cobranças?', a: 'Um recibo com declaração de cancelamento bilateral não deve ter força para cobrança. Porém, nunca destrua o recibo cancelado — guarde como prova do cancelamento.' },
      { q: 'E o recibo digital (PDF) — como cancelar?', a: 'Emita a declaração de cancelamento e envie por e-mail para a outra parte. O e-mail com a declaração e a confirmação de recebimento serve como prova do cancelamento.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Substituto' },
      { href: '/perguntas/recibo-valor-errado-como-corrigir', label: 'Como corrigir recibo com valor errado' },
    ],
  },
  {
    slug: 'posso-emitir-recibo-para-mim-mesmo',
    question: 'Posso emitir recibo para mim mesmo?',
    shortAnswer: 'Não. Um recibo é um documento bilateral — quem recebe emite para quem pagou. Emitir recibo para si mesmo (como pagador e recebedor) não tem validade jurídica. Para comprovar transferência própria, use extrato bancário.',
    metaDescription: 'Posso fazer recibo para mim mesmo? Entenda por que isso não é válido e quais alternativas existem para comprovação de valores pessoais.',
    keywords: ['recibo para mim mesmo', 'recibo bilateral', 'auto recibo validade', 'comprovar pagamento proprio'],
    datePublished: '2025-03-12',
    category: 'Casos de Uso',
    sections: [
      {
        h2: 'Por que o recibo é um documento bilateral',
        paragraphs: [
          'O recibo é, por natureza, um instrumento de quitação — alguém declara ter recebido algo de outra pessoa. A declaração unilateral "recebi de mim mesmo" não faz sentido jurídico e seria considerada nula, pois falta o elemento essencial de partes distintas na relação.',
          'Isso é diferente de, por exemplo, uma empresa que paga a um de seus sócios: aí existem duas partes jurídicas distintas (a empresa com CNPJ e o sócio com CPF), e o recibo é válido.',
        ],
      },
      {
        h2: 'Alternativas para comprovação de movimentações próprias',
        paragraphs: [
          'Para comprovar transferências entre contas próprias: use extrato bancário ou comprovante de PIX, que mostram claramente a movimentação. Para retiradas de caixa (MEI, autônomo): use um "pro labore" ou livro-caixa, não um recibo.',
          'Para transferências entre sua conta pessoal e sua conta jurídica (MEI/ME): o correto é usar documentação contábil (pro labore, distribuição de lucros) com orientação de um contador.',
        ],
      },
    ],
    faqs: [
      { q: 'MEI pode emitir recibo para si mesmo?', a: 'Não. MEI e o sócio são entidades distintas, mas o "recibo para si mesmo" ainda não faz sentido. A retirada do MEI pelo sócio é documentada como pro labore ou distribuição de lucros.' },
      { q: 'Posso fazer recibo de despesas pessoais para deduzir no IR?', a: 'Recibo criado por você mesmo não tem validade como dedução. Você precisa de nota fiscal ou recibo emitido pelo prestador do serviço.' },
      { q: 'E empréstimo pessoal para si mesmo faz sentido?', a: 'Não. Você não pode ser credor e devedor de si mesmo. Movimentações internas (ex: conta corrente para poupança) se comprovam por extrato bancário.' },
      { q: 'Uma empresa pode emitir recibo para o sócio administrador?', a: 'Sim. Empresa e sócio são entidades jurídicas distintas. Um recibo de pro labore ou distribuição de lucros entre empresa (CNPJ) e sócio (CPF) é válido.' },
      { q: 'Posso emitir recibo em nome do meu cônjuge?', a: 'Sim, se ele/ela for o real credor. Mas não confunda: você não pode assinar como credor SE foi você quem recebeu.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Corretamente' },
      { href: '/guias/o-que-e-rpa', label: 'O que é RPA?' },
    ],
  },
  {
    slug: 'recibo-de-quitacao-o-que-e',
    question: 'O que é recibo de quitação? Para que serve?',
    shortAnswer: 'Recibo de quitação é o documento que declara que uma dívida foi integralmente paga e que nada mais é devido. É o documento mais importante ao encerrar um contrato, dívida ou serviço, pois protege definitivamente quem pagou.',
    metaDescription: 'O que é recibo de quitação? Diferença entre recibo parcial e quitação, quando emitir e como garantir que uma dívida está definitivamente encerrada.',
    keywords: ['recibo quitacao', 'o que e recibo quitacao', 'quitacao divida recibo', 'recibo pagamento total'],
    datePublished: '2025-03-13',
    category: 'Conceitos',
    sections: [
      {
        h2: 'Recibo de quitação — definição e base legal',
        paragraphs: [
          'O Art. 320 do Código Civil define que "a quitação [...] designará o valor e a espécie da dívida quitada, o nome do devedor, ou quem por este pagou, o tempo e o lugar do pagamento, com a assinatura do credor". A quitação encerra definitivamente a obrigação.',
          'Uma vez emitida a quitação, o credor perde o direito de cobrar novamente a mesma dívida. É por isso que nunca se deve emitir recibo de quitação antes de receber o valor integral.',
        ],
      },
      {
        h2: 'Diferença entre recibo parcial e recibo de quitação',
        paragraphs: [
          'O recibo parcial registra o recebimento de uma parte do valor — há saldo remanescente. O recibo de quitação declara que o valor TOTAL foi recebido e que a dívida está encerrada. Essa distinção é crítica para o credor.',
          'Se você emitir um recibo de quitação por R$ 5.000 quando só recebeu R$ 3.000, você está abrindo mão do direito de cobrar os R$ 2.000 restantes — mesmo que seja "erro". Por isso, sempre verifique o valor antes de assinar qualquer quitação.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo de quitação pode ser anulado?', a: 'Apenas por vício de consentimento (erro, dolo ou coação provados judicialmente). Se você assinou voluntariamente, fica muito difícil reverter.' },
      { q: 'Quitação de aluguel significa que posso sair do imóvel?', a: 'Não necessariamente. A quitação de aluguel apenas prova que os aluguéis foram pagos. O encerramento do contrato de locação requer distrato formal ou aviso prévio conforme o contrato.' },
      { q: 'Recibo de quitação de financiamento de veículo tem validade?', a: 'Sim. A quitação de financiamento de veículo deve ser comunicada ao DETRAN para baixa do gravame. Guarde o recibo e procure o DETRAN para liberar o documento do carro.' },
      { q: 'Empresa é obrigada a emitir recibo de quitação ao cliente?', a: 'Se solicitado e o pagamento foi integral, sim. A recusa pode ser enquadrada como infração ao Código de Defesa do Consumidor.' },
      { q: 'Posso emitir recibo de quitação antes de receber o último cheque?', a: 'Nunca. Aguarde a compensação total do cheque (ou confirmação de qualquer outro meio) antes de assinar qualquer quitação.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo de Quitação' },
      { href: '/perguntas/recibo-parcial-como-fazer', label: 'Como fazer recibo de pagamento parcial' },
    ],
  },
  {
    slug: 'recibo-e-fatura-diferenca',
    question: 'Qual a diferença entre recibo e fatura?',
    shortAnswer: 'A fatura é emitida ANTES do pagamento — é um documento de cobrança (o que é devido). O recibo é emitido APÓS o pagamento — é um documento de quitação (o que foi pago). São documentos complementares, não substitutos.',
    metaDescription: 'Diferença entre recibo e fatura: quando usar cada um, qual emitir primeiro e como esses documentos se complementam.',
    keywords: ['diferenca recibo fatura', 'recibo fatura quando usar', 'fatura cobrar recibo quitar', 'recibo ou fatura'],
    datePublished: '2025-03-14',
    category: 'Conceitos',
    sections: [
      {
        h2: 'Fatura — documento de cobrança',
        paragraphs: [
          'A fatura (ou boleto, invoice) é emitida pelo credor para informar ao devedor o que é devido: serviço prestado, quantidade, valor unitário, valor total e prazo de pagamento. Ela antecede o pagamento e serve para que o devedor saiba o que deve.',
          'A fatura é muito comum em empresas e profissionais liberais. Para freelancers internacionais, a fatura em inglês é chamada de "invoice". No ambiente B2B (empresa para empresa), a fatura geralmente acompanha a nota fiscal.',
        ],
      },
      {
        h2: 'Recibo — documento de quitação',
        paragraphs: [
          'O recibo é emitido pelo credor APÓS receber o pagamento, confirmando que o valor foi recebido e que a obrigação foi quitada. Ele fecha o ciclo financeiro que a fatura abriu.',
          'Na prática, freelancers e autônomos muitas vezes usam apenas o recibo (sem fatura separada), por ser mais simples. Para projetos recorrentes ou de maior valor, emitir fatura + recibo é a prática mais profissional e documentalmente segura.',
        ],
      },
    ],
    faqs: [
      { q: 'Preciso emitir fatura E recibo?', a: 'Para pequenos serviços, apenas o recibo geralmente basta. Para contratos maiores, projetos recorrentes ou clientes pessoa jurídica, fatura + recibo é o fluxo mais adequado.' },
      { q: 'A nota fiscal substitui a fatura?', a: 'Em geral, sim para fins fiscais. Muitas empresas usam a nota fiscal como fatura (pré-pagamento) e depois emitem o recibo como quitação.' },
      { q: 'Fatura tem validade jurídica sem assinatura?', a: 'A fatura (invoice) geralmente não precisa de assinatura — ela é uma comunicação de cobrança. A validade jurídica do contrato vem do contrato ou pedido, não da fatura.' },
      { q: 'Fatura vencida vira dívida automaticamente?', a: 'Sim, legalmente. Se o serviço foi prestado conforme combinado e a fatura venceu sem pagamento, o devedor está em mora, passível de juros, multa e cobrança judicial.' },
      { q: 'Posso emitir fatura sem ser empresa?', a: 'Sim. Autônomos podem criar faturas como forma de cobrança profissional. Não tem valor fiscal (como nota fiscal), mas serve como documento de cobrança profissional.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo' },
      { href: '/guias/diferenca-recibo-nota-fiscal', label: 'Guia: Nota Fiscal vs Recibo' },
      { href: '/comparacoes/recibo-vs-nota-fiscal', label: 'Recibo vs Nota Fiscal' },
    ],
  },
  {
    slug: 'recibo-correto-para-mei',
    question: 'MEI deve emitir recibo ou nota fiscal?',
    shortAnswer: 'MEI deve emitir Nota Fiscal de Serviços (NFS-e) para pessoas jurídicas (CNPJ). Para pessoas físicas, pode usar recibo simples. Para vendas de produtos, deve emitir NF-e (nota fiscal de produto). O recibo NÃO é adequado para MEI em todas as situações.',
    metaDescription: 'MEI usa recibo ou nota fiscal? Descubra o documento correto para cada cliente do MEI: pessoa física, empresa e comércio.',
    keywords: ['mei recibo ou nota fiscal', 'mei emitir nota fiscal', 'recibo para mei', 'mei documento fiscal correto'],
    datePublished: '2025-03-15',
    category: 'Fiscal',
    sections: [
      {
        h2: 'As regras do MEI para documentos fiscais',
        paragraphs: [
          'O MEI (Microempreendedor Individual) é uma pessoa jurídica e, como tal, tem obrigações fiscais diferentes de uma pessoa física autônoma. A principal: para clientes CNPJ, a NFS-e (Nota Fiscal de Serviços Eletrônica) é obrigatória se o contratante exigir, e fortemente recomendada mesmo se não exigir.',
          'Para clientes CPF (pessoa física), o MEI pode emitir recibo simples. Não é obrigado a emitir nota fiscal nesse caso, mas pode fazer se quiser — especialmente se o cliente precisar do documento para deduções.',
        ],
      },
      {
        h2: 'Quando o MEI pode usar recibo',
        paragraphs: [
          'Recibo simples é adequado para: serviços de baixo valor a pessoas físicas, situações em que o cliente não pede nota fiscal, serviços avulsos e informais. Use nosso gerador de recibo — mesmo sendo MEI, o recibo tem validade para esses casos.',
          'O limite do recibo: ele não tem valor fiscal para o cliente. Empresas que precisam lançar sua despesa na contabilidade geralmente exigem nota fiscal. Se o seu cliente for empresa e pedir nota, você precisa emitir NFS-e pelo portal do seu município.',
        ],
      },
    ],
    faqs: [
      { q: 'MEI é obrigado a emitir nota fiscal para pessoa física?', a: 'Não é obrigado, mas pode emitir. Para pessoa física, o recibo simples ou a NFS-e são igualmente válidos. A escolha fica a critério do MEI e do cliente.' },
      { q: 'Como MEI emite nota fiscal de serviços?', a: 'Pelo portal eletrônico da prefeitura do seu município (cada cidade tem seu próprio sistema). Acesse com seu CNPJ MEI e emita a NFS-e gratuitamente.' },
      { q: 'MEI de comércio usa recibo?', a: 'MEI que vende produtos deve emitir NF-e (nota fiscal eletrônica de produto), não recibo. Para serviços, segue a regra acima.' },
      { q: 'Recibo de MEI para empresa tem problema?', a: 'Pode ter para a empresa: sem nota fiscal, a empresa não consegue deduzir a despesa na contabilidade. Para o MEI, o problema é menor — mas é melhor oferecer nota fiscal para não perder clientes corporativos.' },
      { q: 'MEI que presta serviço para outro MEI usa recibo?', a: 'Pode usar recibo, pois ambos são formalmente PJ mas MEI é simplificado. Mas se o cliente MEI precisar da nota para seus registros contábeis, emita NFS-e.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo MEI' },
      { href: '/mei', label: 'Ferramentas para MEI' },
      { href: '/guias/nota-fiscal-ou-recibo-quando-usar', label: 'Nota Fiscal ou Recibo: quando usar?' },
    ],
  },
  {
    slug: 'empresa-pode-emitir-recibo',
    question: 'Empresa pode emitir recibo para pessoa física?',
    shortAnswer: 'Não é a prática correta. Empresa (pessoa jurídica) deve emitir nota fiscal, não recibo simples. O recibo simples é um documento de pessoa física. Para cobranças a clientes pessoa física, a empresa emite NF-e ou NFS-e.',
    metaDescription: 'Empresa pode emitir recibo para cliente? Entenda quando empresa emite recibo, quando emite nota fiscal e quais são as exceções.',
    keywords: ['empresa pode emitir recibo', 'empresa recibo pessoa fisica', 'pj recibo validade', 'empresa recibo ou nota fiscal'],
    datePublished: '2025-03-16',
    category: 'Fiscal',
    sections: [
      {
        h2: 'Por que empresa não usa recibo simples',
        paragraphs: [
          'Empresas (CNPJ) têm obrigações fiscais que incluem a emissão de documentos fiscais para toda operação comercial. O recibo simples não é um documento fiscal reconhecido para fins contábeis e tributários empresariais.',
          'A não emissão de nota fiscal pode resultar em autuação fiscal, multas e problemas com o SEFAZ estadual ou municipal. O recibo simples, embora válido civilmente entre pessoas físicas, não substitui a nota fiscal para pessoas jurídicas.',
        ],
      },
      {
        h2: 'Exceções — quando empresa usa recibo',
        paragraphs: [
          'Há situações em que uma empresa pode usar recibo: pagamentos recebidos de sócios (distribuição de lucros, adiantamentos), reembolso de despesas a funcionários, e situações de exceção em que a empresa atua fora do seu objeto social (extremamente raras).',
          'O MEI é um caso especial: como visto na pergunta sobre MEI, ele pode usar recibo para clientes pessoa física. Mas mesmo o MEI é uma empresa (CNPJ), e a regra geral para empresa é nota fiscal.',
        ],
      },
    ],
    faqs: [
      { q: 'E se a empresa emitir recibo em vez de nota fiscal?', a: 'O recibo tem validade civil, mas a empresa fica em situação irregular perante o Fisco. O cliente pessoa física também perde documentação adequada para dedução de impostos.' },
      { q: 'Startup pode usar recibo no início das operações?', a: 'Não. Mesmo startups precisam de CNPJ e, com ele, emitem nota fiscal. No início, use NFS-e pelo portal da prefeitura para serviços.' },
      { q: 'Cliente pode recusar nota fiscal e pedir só recibo?', a: 'Juridicamente, o cliente não pode obrigar a empresa a emitir recibo em vez de nota fiscal. A empresa está legalmente obrigada a emitir nota fiscal.' },
      { q: 'Associação sem fins lucrativos pode usar recibo?', a: 'Depende da natureza da transação. Para contribuições e doações, recibo de doação pode ser adequado. Para prestação de serviços, normalmente nota fiscal.' },
      { q: 'Profissional liberal com empresa pode usar recibo?', a: 'Não. Se o profissional liberal tem empresa (CNPJ), usa nota fiscal. Só pode usar recibo se atuar como pessoa física autônoma (CPF), sem CNPJ vinculado.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-rpa', label: 'Gerar RPA (Autônomo para Empresa)' },
      { href: '/guias/nota-fiscal-ou-recibo-quando-usar', label: 'Nota Fiscal ou Recibo?' },
    ],
  },
  {
    slug: 'recibo-antecipado-e-valido',
    question: 'Recibo antecipado (antes do pagamento) é válido?',
    shortAnswer: 'Um recibo emitido antes de receber o pagamento tem risco jurídico sério para o credor. Se o pagamento não for realizado, o recibo pode ser usado como prova de que a dívida foi quitada. Nunca assine recibo antes de receber.',
    metaDescription: 'Posso emitir recibo antes de receber o pagamento? Entenda os riscos jurídicos do recibo antecipado e como se proteger.',
    keywords: ['recibo antecipado', 'recibo antes pagamento', 'recibo futuro validade', 'recibo pre-datado'],
    datePublished: '2025-03-17',
    category: 'Validade Jurídica',
    sections: [
      {
        h2: 'O risco do recibo antes do pagamento',
        paragraphs: [
          'O recibo declara que um pagamento foi recebido. Se você assina um recibo ANTES de receber o dinheiro, está fazendo uma declaração falsa. Se o pagador não cumprir, você terá dificuldade em cobrar judicialmente — o réu apresentará o recibo assinado como prova de que pagou.',
          'Isso é especialmente perigoso em parcelamentos: nunca assine o recibo da parcela futura antes de receber o dinheiro, mesmo que o devedor peça "para adiantar".',
        ],
      },
      {
        h2: 'Alternativas seguras ao recibo antecipado',
        paragraphs: [
          'Se o devedor precisa de comprovante de que pagará, o documento correto é um contrato (que define a obrigação de pagar) ou uma nota promissória (título de crédito que promete pagar). O recibo apenas deve ser emitido após o pagamento.',
          'Para parcelamentos: emita o recibo de cada parcela no momento do recebimento. Combine com o devedor que os recibos serão emitidos à medida que os pagamentos forem confirmados.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo pré-datado tem validade?', a: 'Tem validade, mas cria uma presunção de que o pagamento foi feito na data indicada. Se a data no recibo for antes do pagamento real, há risco de fraude documental.' },
      { q: 'O que usar no lugar do recibo antecipado?', a: 'Nota promissória (para parcelamentos), contrato com cláusula de pagamento (para comprometimento formal), ou recibo de sinal (arras) para confirmar reserva sem quitar.' },
      { q: 'Posso pedir ao devedor para assinar um recibo em branco?', a: 'Jamais. Recibo em branco é extremamente arriscado — pode ser preenchido com qualquer valor ou data posteriormente. É considerado comportamento de risco jurídico grave.' },
      { q: 'Recibo futuro (pós-datado) é válido?', a: 'A data no recibo deve corresponder ao pagamento. Um recibo com data futura é irregular — use nota promissória para formalizar pagamentos futuros.' },
      { q: 'E se eu já assinei recibo antes de receber?', a: 'Documente tudo: conversas, transferências, testemunhas. Se o pagamento não vier, leve o caso ao JEC (Juizado Especial Cível) com todos os elementos que demonstrem que o recibo foi emitido antes do pagamento.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo após Pagamento' },
      { href: '/modelo/nota-promissoria', label: 'Modelo de Nota Promissória' },
    ],
  },
  {
    slug: 'recibo-nominal-o-que-e',
    question: 'O que é recibo nominal? Para que serve?',
    shortAnswer: 'Recibo nominal é o recibo emitido especificamente em nome de uma pessoa identificada — não genérico. Todo recibo deve ser nominal para ter validade plena. Um recibo "em branco" (sem nome do pagador) tem força probatória muito reduzida.',
    metaDescription: 'O que significa recibo nominal? Quando o nome é obrigatório e por que recibo em branco é um risco jurídico.',
    keywords: ['recibo nominal', 'o que e recibo nominal', 'recibo com nome', 'recibo em branco diferenca'],
    datePublished: '2025-03-18',
    category: 'Conceitos',
    sections: [
      {
        h2: 'Por que o recibo deve ser nominal',
        paragraphs: [
          'Um recibo sem o nome de quem pagou (ou recebeu) não identifica as partes da transação. Juridicamente, qualquer pessoa poderia apresentar esse recibo e alegar ser o titular. Um recibo nominal, com nome e CPF do pagador e do recebedor, vincula o documento às partes corretas.',
          'O Art. 320 do Código Civil exige "o nome do devedor, ou quem por este pagou" como requisito da quitação. Isso confirma que o recibo deve ser sempre nominal para ter plena validade como instrumento de quitação.',
        ],
      },
      {
        h2: 'Recibo em branco — os riscos',
        paragraphs: [
          'Um recibo com espaços em branco nos campos de nome, valor ou data pode ser preenchido por qualquer pessoa depois da assinatura. Esse risco chama-se "completamento abusivo" e é uma das formas de fraude documental.',
          'Para sua proteção: nunca assine um recibo com campos em branco. Se precisar de mais tempo para preencher, aguarde — ou preencha com traços nos campos não utilizados para evitar preenchimento posterior.',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo em nome de terceiro é válido?', a: 'Pode ser válido se o terceiro pagou legitimamente pela dívida (ex: pai pagando dívida do filho). O recibo deve mencionar que o pagamento foi feito "por" ou "em nome de" quem realmente devia.' },
      { q: 'Posso emitir recibo em nome de empresa e pagar como pessoa física?', a: 'Depende da situação. Para consumidor pagando em nome de empresa, o recibo deve ser em nome da empresa (com CNPJ). Para serviço pessoal, em nome da pessoa (com CPF).' },
      { q: 'Recibo com nome errado tem validade?', a: 'Tem validade reduzida. Um simples erro de grafia pode ser sanado com declaração de correção. Mas nome completamente diferente pode invalidar o documento.' },
      { q: 'E para pagamento por um familiar?', a: 'Se A deve a B e C (familiar de A) paga, o recibo pode ser emitido em nome de A, com nota que o pagamento foi efetuado por C. Isso mantém a clareza da quitação da dívida original.' },
      { q: 'Recibo sem CPF (só com nome) é nominal?', a: 'É nominal no sentido de ter um nome, mas o CPF é o identificador único. Nome sem CPF pode ser insuficiente quando há pessoas homônimas.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo Nominal Correto' },
      { href: '/perguntas/recibo-sem-assinatura-vale', label: 'Recibo sem assinatura vale?' },
    ],
  },
  {
    slug: 'recibo-pago-com-cheque',
    question: 'Como fazer recibo de pagamento com cheque?',
    shortAnswer: 'O recibo de pagamento com cheque deve incluir: valor, número do cheque, banco emissor, agência/conta, data de emissão e, se for pré-datado, a data de bom para depósito. O recibo só deve ser emitido após a compensação do cheque.',
    metaDescription: 'Como fazer recibo para pagamento com cheque? O que incluir, quando emitir e como se proteger de cheque sem fundo.',
    keywords: ['recibo pagamento cheque', 'recibo cheque como fazer', 'cheque recibo campos', 'recibo pre-datado cheque'],
    datePublished: '2025-03-19',
    category: 'Como Fazer',
    sections: [
      {
        h2: 'Campos específicos para recibo com cheque',
        paragraphs: [
          'Além dos campos básicos (partes, valor, serviço), o recibo para pagamento com cheque deve incluir: número do cheque (no canto superior direito do cheque), banco emissor, agência e conta corrente do emitente, data de emissão e data de bom para depósito (se pré-datado).',
          'Inclua também: "pagamento sujeito à compensação bancária". Isso deixa claro que a quitação só é definitiva após o cheque ser compensado.',
        ],
      },
      {
        h2: 'Nunca emita recibo de quitação antes da compensação',
        paragraphs: [
          'Se o cheque voltar (sem fundos, sustado ou cancelado), você terá entregado quitação sem ter recebido nada. A quitação não pode ser facilmente desfeita.',
          'Para maior segurança: emita um "recibo de entrega de cheque" ao receber o título, e um "recibo de quitação" apenas após a compensação (2 a 3 dias úteis para cheques à vista; na data de bom para cheques pré-datados).',
        ],
      },
    ],
    faqs: [
      { q: 'Recibo de cheque pré-datado quita a dívida?', a: 'Não imediatamente. O recibo de cheque pré-datado prova a entrega do título — a quitação real ocorre quando o cheque é compensado.' },
      { q: 'O que fazer se o cheque voltar?', a: 'O recibo de "entrega de cheque" ainda estará válido como prova da tentativa de pagamento. Notifique o devedor formalmente e, se necessário, ajuíze ação de cobrança.' },
      { q: 'Cheque como arras (sinal) precisa de recibo especial?', a: 'Use o modelo de recibo de sinal, acrescentando os dados do cheque. Especifique as condições de devolução se o negócio não se concretizar.' },
      { q: 'Pode cobrar juros no recibo de cheque que voltou?', a: 'Sim. Cheque devolvido gera mora automática. Você pode cobrar juros legais (1% ao mês), correção monetária e multa de até 10% sobre o valor, além de taxas bancárias.' },
      { q: 'Recibo de cheque pode ser protestado?', a: 'O próprio cheque pode ser levado a protesto em cartório (no prazo de 6 meses para o mesmo estado, 1 ano para outros estados). O recibo é prova complementar, não o título que se protesta.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-simples', label: 'Gerar Recibo de Pagamento' },
      { href: '/modelo/recibo-sinal', label: 'Modelo de Recibo de Sinal' },
    ],
  },
]

export const PERGUNTAS: Record<string, Pergunta> = Object.fromEntries(perguntas.map((p) => [p.slug, p]))
export const ALL_PERGUNTA_SLUGS = perguntas.map((p) => p.slug)
