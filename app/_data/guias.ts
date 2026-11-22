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
  /** Título só para o <title> (absoluto, sem sufixo). O H1 continua usando o campo principal. */
  seoTitle?: string
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
      { href: '/guias/recibo-tem-valor-legal', label: 'Artigo completo sobre validade' },
    ],
  },
  {
    slug: 'recibo-precisa-de-cpf',
    title: 'Recibo precisa de CPF? O que é obrigatório',
    seoTitle: 'Recibo precisa de CPF? Não é obrigatório, mas convém',
    description: 'Resposta direta: a lei não exige CPF em recibo simples, mas sem ele fica difícil provar quem pagou e quem recebeu. Veja quando usar CNPJ e o que não pode faltar.',
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
          'O recibo de PIX traz os dados de quem recebe e de quem paga, o valor por extenso, o motivo do pagamento e a chave Pix de quem recebe. Ele só tem validade junto com o comprovante da transação emitido pelo banco: guarde os dois juntos.',
          'No nosso gerador de recibo PIX, você preenche os dados e o documento já traz o QR Code para pagar na sua chave. Ele só vale junto com o comprovante da transação emitido pelo banco.',
        ],
      },
    ],
    faqs: [
      { q: 'Posso usar só o comprovante de PIX como recibo?', a: 'Para transações simples e sem disputas, o comprovante pode ser suficiente. Mas para serviços prestados, aluguel ou valores altos, emita sempre um recibo formal — o comprovante sozinho não especifica o motivo do pagamento.' },
      { q: 'Recibo de PIX precisa de assinatura?', a: 'Recibo em PDF digital não precisa de assinatura manuscrita para ter validade. Mas incluir assinatura digital (ou física escaneada) aumenta a segurança jurídica.' },
      { q: 'E se o PIX cair na conta errada?', a: 'Quem prova que você pagou é o comprovante emitido pelo seu banco; o recibo só explica a que o pagamento se refere. Se o Pix foi para a pessoa errada por golpe ou fraude, peça ao seu banco a abertura do MED (Mecanismo Especial de Devolução). Se foi só um erro de digitação, fale com o banco e com quem recebeu, porque o MED não se aplica. Para evitar o problema, confira na tela do banco o nome de quem recebe antes de confirmar.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-pix', label: 'Gerar Recibo de PIX' },
      { href: '/guias/recibo-tem-valor-legal', label: 'Recibo tem valor legal?' },
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
  {
    slug: 'como-saber-se-comprovante-pix-e-falso',
    title: 'Como saber se um comprovante Pix é falso',
    description: 'Como saber se um comprovante Pix é falso: confira no extrato, peça o ID da transação, veja os sinais de fraude e o que fazer se você caiu no golpe.',
    keywords: ['comprovante pix falso', 'como saber se comprovante pix é verdadeiro', 'golpe comprovante pix', 'id da transação pix', 'med pix devolução'],
    datePublished: '2026-11-12',
    category: 'Dúvidas Legais',
    readTime: '8 min',
    intro: 'Um comprovante de Pix é só uma imagem ou um PDF, e imagens podem ser editadas ou montadas em poucos minutos. A única forma segura de saber se um Pix foi recebido é conferir a entrada do dinheiro no extrato da sua própria conta. Este guia mostra como fazer essa conferência, quais sinais indicam um comprovante falso e o que fazer, passo a passo, se você já entregou um produto ou serviço e o dinheiro não caiu.',
    sections: [
      {
        h2: 'A regra de ouro: confira no extrato, não na imagem',
        content: [
          'Quem recebe um Pix não precisa de nenhum documento enviado por quem pagou para saber se o dinheiro chegou. O valor aparece no extrato e, na maioria dos aplicativos, também gera uma notificação. Por isso, antes de liberar uma mercadoria, entregar uma chave ou concluir um serviço, abra o aplicativo do seu banco e procure a entrada pelo valor, pelo nome de quem pagou e pelo horário.',
          'Desconfie de qualquer pressa para que você "libere logo" com base em um print. Golpistas contam justamente com a correria do dia a dia: o cliente diz que está atrasado, que o motorista já chegou ou que o banco "está demorando para atualizar". O Pix funciona 24 horas, todos os dias, e em situações normais o crédito costuma aparecer em poucos segundos. Se o valor não está no extrato, para você o pagamento ainda não aconteceu.',
          'Também não confie em e-mails, SMS ou mensagens que dizem que "o Pix está retido" ou que você precisa clicar em um link para liberar o valor. Bancos não pedem esse tipo de ação por mensagem. Entre sempre pelo aplicativo oficial, digitando a senha você mesmo.',
        ],
      },
      {
        h2: 'O que é o ID da transação e como usá-lo',
        content: [
          'Todo Pix tem um identificador único, chamado de ID da transação (ou E2E ID). Ele aparece no comprovante emitido pelo aplicativo do banco, segue o padrão definido pelo Banco Central, tem 32 caracteres e começa com a letra E.',
          'Peça esse código a quem diz ter pagado e compare com o que aparece no detalhe da entrada no seu extrato. Se o código não existe no seu extrato, se tem um formato diferente (menos caracteres, começa com outra letra) ou se a pessoa se recusa a informar, trate o pagamento como não confirmado.',
          'Atenção: um ID bem formatado em uma imagem não prova nada sozinho, porque também pode ser copiado de outro comprovante. O ID serve para você localizar e conferir a transação no seu banco, e não para substituir essa conferência.',
        ],
      },
      {
        h2: 'Sinais de que o comprovante pode ser falso',
        content: [
          'Nenhum destes sinais, isoladamente, prova uma fraude, mas cada um deles é motivo para conferir o extrato com ainda mais cuidado antes de entregar qualquer coisa:',
          'Pressa e pressão: a pessoa insiste para você liberar o produto imediatamente, fica irritada com a conferência ou diz que "já está tudo pago, é só olhar o print".',
          'Comprovante de agendamento: alguns golpistas enviam o comprovante de um Pix agendado para outra data e cancelam o agendamento depois. Leia o documento com atenção: se aparecer "agendado", "agendamento" ou uma data futura, o dinheiro ainda não saiu da conta de quem pagou.',
          'Dados que não batem: o nome do recebedor está diferente do seu, a chave Pix não é a que você passou, o banco de destino não é o seu, o valor tem centavos diferentes ou o horário não corresponde ao momento da conversa.',
          'Detalhes visuais estranhos: letras desalinhadas, fontes diferentes no mesmo documento, números com espaçamento irregular, logotipo borrado ou cores que não correspondem ao aplicativo daquele banco. Imagens recortadas, que escondem justamente o rodapé ou o ID, também merecem desconfiança.',
          'Comprovante enviado por terceiros: o print vem de um número diferente do comprador, de um "funcionário" ou de alguém que diz estar pagando em nome de outra pessoa.',
          'Pagamento a mais com pedido de devolução: a pessoa diz que transferiu um valor maior por engano e pede que você devolva a diferença para outra chave. Antes de devolver qualquer quantia, confirme no extrato se o valor realmente entrou. Se entrou, prefira usar a opção de devolução do próprio aplicativo, que devolve para a conta de origem.',
        ],
      },
      {
        h2: 'Recibo, comprovante e extrato: cada um prova uma coisa',
        content: [
          'O comprovante do Pix é emitido pelo banco de quem pagou e mostra que uma transferência foi solicitada e concluída por aquela instituição. O extrato da sua conta é o registro do seu banco de que o dinheiro entrou. O recibo é uma declaração de quem recebeu, que informa de quem recebeu, quanto e por qual motivo.',
          'Por isso, um recibo nunca substitui o comprovante ou o extrato. Ele é emitido por quem já conferiu o recebimento e serve para formalizar a quitação, por exemplo de um serviço ou de um aluguel. Se alguém lhe apresentar um "recibo" no lugar do comprovante do banco para provar que pagou, desconfie: quem paga não emite recibo para si mesmo.',
        ],
      },
      {
        h2: 'Caí no golpe: o que fazer agora',
        content: [
          'Se você entregou um produto ou serviço e o dinheiro não entrou na sua conta, você não tem um Pix para contestar, porque nenhuma transferência foi feita para você. Nesse caso, o caminho é registrar o caso e tentar identificar o golpista: guarde as conversas, o número de telefone, os perfis usados, o comprovante falso recebido e qualquer dado de entrega, como endereço ou placa de veículo.',
          'Registre um boletim de ocorrência. Em muitos estados é possível fazer o registro pela internet, no site da Polícia Civil. Se a venda foi feita por um site ou aplicativo de anúncios, denuncie também o perfil na própria plataforma, para evitar novas vítimas.',
          'Se você foi quem pagou e caiu em um golpe, por exemplo transferindo para um vendedor falso, procure imediatamente o seu banco pelo aplicativo ou pelos canais oficiais de atendimento e peça a abertura do Mecanismo Especial de Devolução (MED). Pelas regras do Banco Central, o pedido pode ser feito para transações de até 80 dias atrás, mas quanto mais cedo, maiores as chances de ainda haver saldo na conta do golpista. O banco pode pedir um relato do ocorrido e o boletim de ocorrência.',
          'Depois do pedido, a instituição de quem recebeu o dinheiro analisa o caso. Se a fraude for confirmada, o valor pode ser devolvido no todo ou em parte, de acordo com o saldo disponível na conta usada no golpe. O MED não se aplica a transferências feitas por engano nem a desacordos comerciais comuns, como um produto que chegou com defeito; nesses casos, o caminho é negociar com o recebedor ou buscar os órgãos de defesa do consumidor.',
          'Se o seu banco não registrar o pedido ou não der resposta, registre uma reclamação no canal de atendimento do Banco Central contra a instituição. Guarde os protocolos de todos os atendimentos.',
        ],
      },
      {
        h2: 'Como se proteger nas próximas vendas',
        content: [
          'Combine com seus clientes que a entrega só acontece depois que o valor aparecer no seu extrato, e deixe isso claro antes da negociação. Assim a conferência deixa de parecer desconfiança e vira regra do seu negócio.',
          'Ative as notificações de Pix recebido no aplicativo do banco e, se possível, use uma conta separada para as vendas. Fica mais fácil localizar cada entrada pelo valor e pelo horário.',
          'Envie você os dados de pagamento. O recibo de recebimento via Pix do ReciboNaHora traz a sua chave e um QR Code para o cliente pagar e conferir o seu nome no aplicativo do banco. O documento diz em destaque que só vale junto com o comprovante da transação, e a entrega continua dependendo de o valor aparecer no seu extrato.',
          'Entenda também o que diz a lei em "Comprovante Pix falso é crime" e ensine seus clientes a conferir o recebedor antes de pagar.',
        ],
      },
    ],
    faqs: [
      { q: 'Existe algum site que confirma se um comprovante Pix é verdadeiro?', a: 'Não existe uma consulta pública para validar comprovantes de terceiros. A forma segura é conferir a entrada no extrato do seu próprio banco, pelo aplicativo oficial.' },
      { q: 'O comprovante tem ID da transação. Isso garante que é verdadeiro?', a: 'Não. O ID pode ser copiado de outro comprovante. Use o código para localizar a transação no seu extrato; se ela não aparece lá, o pagamento não está confirmado.' },
      { q: 'O Pix pode demorar para cair?', a: 'Normalmente o crédito aparece em poucos segundos, a qualquer hora. Se a pessoa alega demora e pressiona para você liberar a entrega, espere o valor aparecer no extrato antes de entregar.' },
      { q: 'Fui enganado com um comprovante falso. Posso usar o MED?', a: 'O MED serve para devolver valores de Pix feitos em casos de golpe ou fraude, a pedido de quem pagou. Se nenhum Pix entrou na sua conta, não há transação para contestar: registre boletim de ocorrência e reúna as provas do golpe.' },
      { q: 'Um recibo de Pix pode ser usado como prova de pagamento?', a: 'Sozinho, não. O recibo explica a que o pagamento se refere, mas só tem validade junto com o comprovante da transação emitido pelo banco. Quem prova a transferência é o comprovante, e quem prova que o dinheiro chegou é o extrato de quem recebeu.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-pix', label: 'Recibo de recebimento via Pix' },
      { href: '/guias/recibo-pix-como-funciona', label: 'Recibo de Pix: quando emitir e como funciona' },
      { href: '/guias/comprovante-pix-falso-e-crime', label: 'Comprovante Pix falso é crime' },
      { href: '/guias/como-conferir-recebedor-antes-de-pagar-pix', label: 'Como conferir quem vai receber antes de pagar um Pix' },
    ],
  },
  {
    slug: 'comprovante-pix-falso-e-crime',
    title: 'Comprovante Pix falso é crime: como o golpe funciona e como se proteger',
    seoTitle: 'Comprovante Pix falso é crime: entenda a lei e proteja-se | ReciboNaHora',
    description: 'Gerar ou usar comprovante Pix falso é estelionato. Veja o que diz a lei, por que "geradores" e "simuladores" são armadilha e como vendedores se protegem.',
    keywords: ['comprovante pix falso é crime', 'gerador de comprovante pix falso', 'simulador de comprovante pix', 'golpe do comprovante pix', 'estelionato pix'],
    datePublished: '2026-11-21',
    category: 'Dúvidas Legais',
    readTime: '7 min',
    intro: 'Mostrar um comprovante de Pix falso para levar um produto ou serviço sem pagar é crime de estelionato, e os tribunais brasileiros têm condenado quem faz isso. Também não existe "gerador" ou "simulador" de comprovante que funcione: o vendedor confere o extrato, o golpe é descoberto e quem enviou a imagem deixa um rastro. Este guia explica a lei, mostra por que essas ferramentas são uma armadilha e ensina como se proteger.',
    sections: [
      {
        h2: 'O que diz a lei sobre comprovante Pix falso',
        content: [
          'Enganar alguém com um documento falso para obter vantagem é estelionato, previsto no artigo 171 do Código Penal, com pena de reclusão de 1 a 5 anos e multa. Quando a fraude acontece por meios eletrônicos, a Lei 14.155/2021 criou a forma qualificada do artigo 171, § 2º-A, com pena de 4 a 8 anos de reclusão e multa.',
          'Os tribunais aplicam essas regras a comprovantes de Pix. Em outubro de 2025, o Tribunal de Justiça do Distrito Federal (TJDFT) manteve a condenação por estelionato de uma mulher que apresentou um comprovante falso de transferência para levar pneus de uma loja. Em janeiro de 2026, o Tribunal de Justiça de Mato Grosso (TJMT) manteve a condenação por estelionato eletrônico de uma pessoa que enviou um comprovante falso de Pix para uma papelaria.',
          'O mesmo vale para o comprovante de Pix agendado que depois é cancelado. Em fevereiro de 2025, o TJDFT entendeu que apresentar esse comprovante para receber um produto mostra intenção de enganar e caracteriza estelionato.',
          'Além da pena, quem aplica o golpe pode ser obrigado a devolver o produto ou indenizar a vítima. Este conteúdo é informativo e não substitui a orientação de um advogado.',
        ],
      },
      {
        h2: '"Gerador" ou "simulador" de comprovante Pix: por que é armadilha',
        content: [
          'Nenhum banco oferece "simulador" de comprovante. O comprovante oficial só existe dentro do aplicativo ou do internet banking, depois que a transferência é feita. Qualquer site ou aplicativo que promete gerar um comprovante com a cara de um banco produz apenas uma imagem montada, sem nenhum valor.',
          'Esses sites e aplicativos costumam ser golpe contra quem os procura. É comum pedirem pagamento, instalação de aplicativos fora das lojas oficiais ou dados pessoais, e assim roubam senhas, dados bancários e contas de redes sociais de quem tenta usá-los.',
          'O golpe também não funciona. Quem vende pode conferir o extrato em segundos e ver que o dinheiro não entrou. Enquanto isso, a conversa, o número de telefone, o endereço de entrega e a própria imagem enviada ficam como prova para o boletim de ocorrência.',
          'O ReciboNaHora não gera comprovantes bancários. O recibo de recebimento via Pix do site é um pedido de pagamento emitido por quem vai receber, com a chave Pix dessa pessoa, e diz em destaque que só vale junto com o comprovante da transação emitido pelo banco.',
        ],
      },
      {
        h2: 'Como o golpe do comprovante falso é descoberto',
        content: [
          'O dinheiro não aparece no extrato. A entrada de um Pix fica registrada na conta de quem recebe, com notificação na maioria dos aplicativos. Um print não muda o extrato.',
          'O ID da transação não existe. Todo Pix tem um código único de 32 caracteres que começa com a letra E. Se o código do comprovante não aparece no extrato de quem recebeu, o comprovante não corresponde a nenhum Pix feito para essa conta.',
          'Os dados não batem. Nome do recebedor, chave, banco, centavos ou horário diferentes do esperado denunciam a montagem.',
          'O agendamento é cancelado. No golpe do Pix agendado, o comprovante diz "agendado" ou mostra uma data futura. Quem recebe deve esperar o dinheiro entrar de fato.',
        ],
      },
      {
        h2: 'Se você vende: regras simples que acabam com o golpe',
        content: [
          'Só entregue o produto ou serviço depois que o valor aparecer no extrato da sua conta. Avise isso antes da negociação, para que a conferência seja vista como regra do seu negócio, e não como desconfiança.',
          'Não aceite pressa como argumento. Pressão para "liberar logo" com base em um print é o sinal mais comum do golpe.',
          'Mande você os dados de pagamento. Um documento com a sua chave Pix e um QR Code, como o recibo de recebimento via Pix do ReciboNaHora, faz o cliente pagar diretamente na sua chave e conferir o seu nome no aplicativo do banco antes de confirmar.',
          'Veja o passo a passo completo em "Como saber se um comprovante Pix é falso".',
        ],
      },
      {
        h2: 'Se você foi vítima de um comprovante falso',
        content: [
          'Guarde tudo: a imagem do comprovante, as conversas, o número de telefone, o perfil do anúncio e o endereço de entrega, se houver.',
          'Registre um boletim de ocorrência. Em muitos estados é possível fazer o registro pela internet, no site da Polícia Civil. Se a venda foi por um site ou aplicativo de anúncios, denuncie também o perfil na plataforma.',
          'Como nenhum Pix entrou na sua conta, não há transferência para contestar no banco. O caminho é a polícia e, se for o caso, uma ação para cobrar o prejuízo.',
        ],
      },
    ],
    faqs: [
      { q: 'Usar comprovante Pix falso é crime?', a: 'Sim. Usar um comprovante falso para levar um produto ou serviço sem pagar é estelionato (art. 171 do Código Penal), com pena de 1 a 5 anos de reclusão e multa. Quando a fraude é feita por meios eletrônicos, há decisões que aplicam o estelionato eletrônico (art. 171, § 2º-A), com pena de 4 a 8 anos.' },
      { q: 'Existe gerador ou simulador de comprovante Pix de verdade?', a: 'Não. O comprovante oficial só é emitido pelo aplicativo do banco depois que o Pix é feito. Sites e aplicativos que prometem gerar comprovantes produzem apenas imagens montadas e muitas vezes são golpes que roubam dados de quem os usa.' },
      { q: 'Existe simulador de comprovante do Nubank ou de outro banco?', a: 'Não. Nenhum banco tem ferramenta para simular comprovantes. Qualquer imagem com o visual de um banco pode ser montada, por isso a única confirmação segura é a entrada do valor no extrato de quem recebe.' },
      { q: 'O recibo Pix do ReciboNaHora serve como comprovante?', a: 'Não. Ele é um pedido de pagamento emitido por quem vai receber, com a chave Pix dessa pessoa e um QR Code para pagar. O documento diz em destaque que só vale junto com o comprovante da transação emitido pelo banco.' },
      { q: 'Recebi um comprovante falso. O banco devolve o dinheiro?', a: 'Não há o que devolver, porque nenhuma transferência foi feita para a sua conta. Registre um boletim de ocorrência com todas as provas e denuncie o perfil na plataforma onde a venda aconteceu.' },
    ],
    relatedLinks: [
      { href: '/guias/como-saber-se-comprovante-pix-e-falso', label: 'Como saber se um comprovante Pix é falso' },
      { href: '/guias/como-conferir-recebedor-antes-de-pagar-pix', label: 'Como conferir quem vai receber antes de pagar um Pix' },
      { href: '/ferramentas/recibo-pix', label: 'Recibo de recebimento via Pix' },
    ],
  },
  {
    slug: 'como-conferir-recebedor-antes-de-pagar-pix',
    title: 'Como conferir quem vai receber antes de pagar um Pix',
    description: 'Antes de confirmar um Pix, o app do banco mostra nome, parte do CPF/CNPJ e instituição de quem recebe. Veja como conferir esses dados e evitar golpes.',
    keywords: ['conferir recebedor pix', 'como saber para quem estou pagando pix', 'pix qr code conferir dados', 'golpe chave pix trocada', 'pix copia e cola é seguro'],
    datePublished: '2026-11-21',
    category: 'Como Fazer',
    readTime: '5 min',
    intro: 'Todo Pix passa por uma tela de confirmação no aplicativo do banco antes de ser enviado. Essa tela mostra quem vai receber o dinheiro, com dados que vêm do próprio sistema do Pix, e não do documento ou da mensagem que você recebeu. Conferir essa tela com calma é a forma mais simples de não pagar para a pessoa errada.',
    sections: [
      {
        h2: 'O que aparece na tela de confirmação do banco',
        content: [
          'Ao escanear um QR Code, colar um Pix Copia e Cola ou digitar uma chave, o aplicativo consulta a chave no sistema do Pix e mostra o nome de quem recebe, parte do CPF ou o CNPJ, a instituição financeira e o valor.',
          'Esses dados vêm do cadastro da chave no banco de quem recebe. Por isso valem mais do que qualquer nome escrito em um documento, em um anúncio ou em uma mensagem: um documento pode ser editado, mas a tela do banco mostra o dono real da chave.',
        ],
      },
      {
        h2: 'Passo a passo para pagar com segurança',
        content: [
          'Abra o aplicativo do seu banco e escolha pagar com QR Code ou Pix Copia e Cola.',
          'Escaneie o QR Code ou cole o código. Se o documento tiver valor definido, ele já aparece preenchido.',
          'Antes de confirmar, compare o nome e a instituição mostrados pelo banco com os de quem você está pagando. Confira também o valor.',
          'Se tudo bate, confirme o Pix e guarde o comprovante emitido pelo banco. Se receber um recibo, guarde os dois juntos: o recibo explica o pagamento e o comprovante prova a transferência.',
        ],
      },
      {
        h2: 'Sinais de alerta antes de confirmar',
        content: [
          'O nome não é o de quem vende. Se você está comprando de uma loja e aparece o nome de uma pessoa física desconhecida, ou o contrário, pare e pergunte antes de pagar.',
          'A instituição é estranha ou diferente da combinada.',
          'A chave mudou de repente. Mensagens como "troquei de banco, pague nesta outra chave" são comuns em golpes com perfis clonados. Confirme por outro canal, por exemplo ligando para o número que você já conhecia.',
          'Há pressa ou pressão para pagar antes de conferir.',
        ],
      },
      {
        h2: 'QR Code em recibos e cobranças: como funciona',
        content: [
          'Um QR Code Pix estático guarda a chave de quem recebe e, se quiser, o valor. Qualquer pessoa pode gerar um para a própria chave, e isso é permitido pelo padrão do Banco Central.',
          'No recibo de recebimento via Pix do ReciboNaHora, quem vai receber preenche os próprios dados e a chave, e o documento traz um QR Code para pagar. Quem paga escaneia, confere no aplicativo o nome e o valor, e confirma. O recibo só vale junto com o comprovante da transação emitido pelo banco.',
          'Se o nome que aparece no banco for diferente do nome no documento, não pague: alguém pode ter trocado a chave.',
        ],
      },
      {
        h2: 'Paguei para a pessoa errada. E agora?',
        content: [
          'Se foi um golpe ou uma fraude, procure imediatamente o seu banco pelo aplicativo ou pelos canais oficiais e peça a abertura do MED, o Mecanismo Especial de Devolução do Pix. Quanto mais rápido o pedido, maior a chance de haver saldo para devolução.',
          'Se foi um erro de digitação, sem golpe, entre em contato com o seu banco e tente falar com quem recebeu. Nesse caso o MED não se aplica, e a devolução depende de quem recebeu.',
          'Registre um boletim de ocorrência em caso de golpe e guarde todos os comprovantes e conversas.',
        ],
      },
    ],
    faqs: [
      { q: 'Como saber para quem estou pagando um Pix?', a: 'Na tela de confirmação, antes de enviar, o aplicativo do banco mostra o nome de quem recebe, parte do CPF ou o CNPJ e a instituição. Esses dados vêm do cadastro da chave e não podem ser alterados por quem enviou o QR Code.' },
      { q: 'Pix Copia e Cola é seguro?', a: 'O código em si é seguro e segue o padrão do Banco Central, mas ele leva o dinheiro para a chave que estiver dentro dele. Por isso sempre confira, na tela do banco, se o nome de quem recebe é o esperado.' },
      { q: 'O nome no banco é diferente do nome no documento. O que faço?', a: 'Não pague. Pergunte a quem cobrou por um canal que você já conhecia. Em golpes, é comum trocar a chave ou o QR Code de um documento verdadeiro.' },
      { q: 'O QR Code do recibo do ReciboNaHora é seguro?', a: 'Ele é um QR Code Pix estático com a chave e o valor que o próprio recebedor informou. Antes de confirmar, o seu banco mostra o nome de quem recebe para você conferir. O recibo só vale junto com o comprovante da transação.' },
    ],
    relatedLinks: [
      { href: '/ferramentas/recibo-pix', label: 'Recibo de recebimento via Pix' },
      { href: '/guias/comprovante-pix-falso-e-crime', label: 'Comprovante Pix falso é crime' },
      { href: '/guias/como-saber-se-comprovante-pix-e-falso', label: 'Como saber se um comprovante Pix é falso' },
    ],
  },
]

export const GUIAS: Record<string, Guia> = Object.fromEntries(guias.map((g) => [g.slug, g]))
export const ALL_GUIA_SLUGS = guias.map((g) => g.slug)
