// Conteúdo específico por documento — Fase 4A.
//
// Cada entrada descreve o documento REAL. Nenhum texto é compartilhado entre
// tipos: instruções de recibo não são reaproveitadas em contrato, procuração,
// declaração ou nota promissória.
//
// Referências legais limitadas às que podem ser confirmadas. Onde a norma varia
// por município, instituição ou período (alíquotas, exigências de firma), o
// texto remete à confirmação na fonte em vez de afirmar um número fixo.

export interface ModeloDetalhe {
  /** Situações em que este documento não é o instrumento adequado */
  quandoNaoUsar: string[];
  /** Erros de preenchimento específicos deste documento */
  errosComuns: string[];
  /** Quem assina, quantas vias, quando firma reconhecida costuma ser exigida */
  assinatura: string;
  /** O que o documento não resolve + documento particular x exigência de terceiros */
  limitacoes: string;
  /** Base legal, quando há norma específica aplicável e confirmável */
  baseLegal?: string;
}

export const MODELO_DETALHES: Record<string, ModeloDetalhe> = {
  'recibo-aluguel': {
    quandoNaoUsar: [
      'Para estabelecer as regras da locação — isso é função do contrato de locação',
      'Para cobrar aluguel atrasado: o recibo comprova pagamento, não dívida',
      'Para quitar mais de uma competência em um único documento sem discriminar cada mês',
    ],
    errosComuns: [
      'Dar quitação genérica ("recebi o aluguel") sem informar a competência — a Lei do Inquilinato veda a quitação genérica',
      'Não separar aluguel de encargos (IPTU, condomínio, água), o que dificulta discutir cobranças depois',
      'Emitir o recibo em nome da imobiliária quando quem recebe é o proprietário, ou o contrário',
      'Deixar de indicar o endereço do imóvel, o que torna o recibo inútil para quem administra vários contratos',
    ],
    assinatura:
      'Assina quem recebe: o locador ou a administradora com poderes para receber. O inquilino não precisa assinar. Duas vias, uma para cada parte. Firma reconhecida não é exigida na prática corrente.',
    limitacoes:
      'O recibo comprova que aquele valor foi pago, nada além disso. Ele não prova que a locação existe, não substitui o contrato e não impede discussão sobre reajuste ou encargos. Se o recibo for usado para declarar aluguel no Imposto de Renda, o valor informado pelo inquilino precisa ser coerente com o declarado pelo locador.',
    baseLegal:
      'Lei 8.245/91 (Lei do Inquilinato), art. 22, VI: o locador é obrigado a fornecer recibo discriminado das importâncias pagas, vedada a quitação genérica.',
  },

  'recibo-autonomo': {
    quandoNaoUsar: [
      'Quando o contratante é pessoa física — nesse caso o documento é um recibo comum, sem retenções',
      'Quando você é MEI: a atividade é formalizada por nota fiscal de serviços, não por RPA',
      'Para disfarçar relação de emprego com subordinação, habitualidade e pessoalidade',
      'Para serviços em que o município exige nota fiscal de serviços da pessoa física',
    ],
    errosComuns: [
      'Informar o valor líquido no campo do valor bruto — a base de cálculo das retenções é sempre o bruto',
      'Aplicar a alíquota de INSS sem observar o teto do salário de contribuição',
      'Usar a alíquota de ISS de outro município: o ISS varia conforme a legislação municipal',
      'Emitir RPA sem que a empresa contratante recolha efetivamente as retenções, o que deixa o autônomo sem registro da contribuição',
    ],
    assinatura:
      'Assina o autônomo que recebeu. A empresa contratante arquiva a via dela para a contabilidade e é a responsável por recolher as retenções.',
    limitacoes:
      'O RPA registra o pagamento e as retenções, mas quem responde pelo recolhimento de INSS, IRRF e ISS é a empresa contratante, não você. Guarde a sua via: é por ela que se confere se a contribuição previdenciária foi de fato recolhida em seu nome. O RPA também não substitui nota fiscal quando o município exige a emissão.',
    baseLegal:
      'A contribuição previdenciária do contribuinte individual segue a Lei 8.212/91; o ISS segue a Lei Complementar 116/2003 e a legislação do município. Alíquotas, faixas e tetos mudam periodicamente — confirme os valores vigentes na data do pagamento.',
  },

  'recibo-prestacao-servico': {
    quandoNaoUsar: [
      'Antes de receber: o recibo declara um pagamento já feito, não um pagamento combinado',
      'Para definir escopo, prazo ou forma de pagamento — isso é função do contrato',
      'Quando o contratante é empresa e precisa de RPA ou nota fiscal para a contabilidade',
    ],
    errosComuns: [
      'Descrever o serviço de forma vaga ("serviços prestados"), o que enfraquece o recibo como prova do que foi quitado',
      'Omitir o valor por extenso, que é o que prevalece em caso de rasura no número',
      'Emitir um único recibo para um serviço pago em parcelas, sem indicar que se trata de quitação parcial',
      'Datar o recibo com a data da emissão quando o pagamento ocorreu em outro dia',
    ],
    assinatura:
      'Assina quem recebeu o pagamento. Duas vias, uma para cada parte. Firma reconhecida não é necessária no dia a dia; passa a fazer sentido em valores altos ou quando há risco de a assinatura ser contestada.',
    limitacoes:
      'O recibo prova o pagamento, não a qualidade nem a entrega do serviço. Se o cliente alegar que o trabalho não foi concluído, o recibo não responde a isso — quem responde é o contrato. Para clientes pessoa jurídica, o recibo em geral não serve para dedução contábil.',
    baseLegal:
      'Código Civil, art. 320: a quitação designará o valor e a espécie da dívida, o nome de quem pagou, o tempo e o lugar do pagamento, com a assinatura do credor.',
  },

  'recibo-pagamento': {
    quandoNaoUsar: [
      'Para registrar promessa de pagamento futuro — nesse caso o instrumento é a nota promissória',
      'Para documentar venda de bem que exige transferência formal, como veículo ou imóvel',
      'Como substituto de nota fiscal em operação que a legislação obriga a emitir',
    ],
    errosComuns: [
      'Não indicar a que dívida o pagamento se refere, o que transforma a quitação em genérica',
      'Divergência entre o valor em número e o valor por extenso',
      'Registrar apenas "recebi de fulano" sem CPF ou CNPJ, dificultando identificar as partes depois',
      'Emitir recibo de quitação total quando o pagamento foi parcial',
    ],
    assinatura: 'Assina o credor, isto é, quem recebeu. Uma via para cada parte.',
    limitacoes:
      'Recibo é documento particular: vale entre as partes e como prova, mas não tem fé pública e pode ser contestado quanto à autenticidade da assinatura. Bancos, órgãos públicos e seguradoras podem exigir documento diferente ou com firma reconhecida — confirme antes com quem vai receber o documento.',
    baseLegal:
      'Código Civil, arts. 319 e 320: quem paga tem direito à quitação regular, com indicação do valor, da dívida, das partes, do tempo e do lugar do pagamento.',
  },

  'contrato-simples': {
    quandoNaoUsar: [
      'Para comprovar que um pagamento já foi feito — isso é função do recibo',
      'Em operações que a lei exige escritura pública, como compra e venda de imóvel acima do limite legal',
      'Para relações com subordinação, horário e pessoalidade, que caracterizam vínculo de emprego',
      'Em acordos societários, cessão complexa de direitos ou operações de alto valor sem revisão de advogado',
    ],
    errosComuns: [
      'Descrever o objeto de forma genérica, deixando sem definição o que conta como entrega concluída',
      'Não prever o que acontece em caso de atraso ou rescisão antecipada',
      'Esquecer a qualificação completa das partes (nome, CPF/CNPJ, endereço), o que atrapalha uma eventual cobrança',
      'Assinar apenas uma via, sem que cada parte fique com a sua',
    ],
    assinatura:
      'Assinam as duas partes, em todas as vias. Duas testemunhas com nome e CPF são opcionais, mas é a presença delas que dá ao contrato a qualidade de título executivo extrajudicial, o que abrevia uma eventual cobrança judicial.',
    limitacoes:
      'Contrato particular obriga quem assinou. Ele não vincula terceiros nem produz efeito perante órgãos que exijam registro. Cláusula que contrarie norma imperativa não passa a valer por estar escrita, e um contrato de serviços não afasta o reconhecimento de vínculo empregatício se a relação real for de emprego.',
    baseLegal:
      'Código de Processo Civil, art. 784, III: o documento particular assinado pelo devedor e por duas testemunhas é título executivo extrajudicial.',
  },

  'recibo-pix': {
    quandoNaoUsar: [
      'Para provar que a transferência ocorreu — isso o comprovante do banco já faz melhor',
      'Para reverter um PIX enviado por engano, que se resolve pelos canais do banco',
      'Como substituto de nota fiscal quando a operação exige emissão',
    ],
    errosComuns: [
      'Registrar apenas o valor, sem dizer a que se refere — é justamente a finalidade que o comprovante bancário não mostra',
      'Não anotar o identificador da transação, que é o que liga o recibo ao extrato',
      'Confundir o titular da chave PIX com o beneficiário real do pagamento',
      'Emitir o recibo antes de confirmar que o valor caiu na conta',
    ],
    assinatura:
      'Assina quem recebeu o valor. Como o pagamento já está registrado no sistema bancário, o recibo costuma ser aceito em versão digital, com assinatura eletrônica ou digitalizada.',
    limitacoes:
      'O recibo complementa o comprovante bancário, não o substitui: guarde os dois. Ele não prova que o serviço foi entregue e não impede contestação sobre o que foi combinado.',
    baseLegal:
      'Código Civil, art. 320, aplicável a qualquer forma de quitação, inclusive de pagamentos feitos por transferência eletrônica.',
  },

  'recibo-salario': {
    quandoNaoUsar: [
      'Para pagamento a autônomo ou prestador sem vínculo, em que cabe recibo comum ou RPA',
      'Como substituto do registro em carteira ou das obrigações do eSocial Doméstico',
      'Para rescisão contratual, que tem termo próprio com verbas específicas',
    ],
    errosComuns: [
      'Informar só o valor líquido, sem discriminar bruto e descontos — é a discriminação que dá ao documento a função de holerite',
      'Não indicar o mês de competência, o que impede usar o recibo como histórico de renda',
      'Somar 13º, férias e salário em uma linha só',
      'Aplicar desconto de INSS sem conferir a faixa da tabela vigente no período',
    ],
    assinatura:
      'Assina o empregado, ao receber. O empregador guarda a via assinada — é ela que comprova o pagamento em uma eventual reclamação trabalhista.',
    limitacoes:
      'O recibo comprova o pagamento do mês, não a regularidade do vínculo. Para empregado doméstico, ele não dispensa o registro e o recolhimento pelo eSocial. Para comprovação de renda em banco ou financiamento, recibo informal costuma ter aceitação mais limitada do que holerite de empresa registrada.',
    baseLegal:
      'CLT, art. 464: o pagamento do salário deve ser efetuado contra recibo assinado pelo empregado.',
  },

  'contrato-locacao': {
    quandoNaoUsar: [
      'Para comprovar o pagamento das mensalidades — para isso existe o recibo de aluguel',
      'Para locação por temporada em plataforma que já impõe os próprios termos',
      'Para arrendamento rural ou situações regidas por regras próprias',
      'Quando há financiamento, alienação fiduciária ou usufruto envolvidos, sem revisão profissional',
    ],
    errosComuns: [
      'Não definir o índice de reajuste nem a periodicidade, o que gera disputa na renovação',
      'Deixar de especificar quem paga IPTU, condomínio, água e gás',
      'Escolher a garantia sem observar que a lei não permite cumular mais de uma modalidade no mesmo contrato',
      'Entregar o imóvel sem laudo de vistoria, que é o que define o estado esperado na devolução',
      'Descrever o imóvel de forma incompleta, sem número, complemento ou vaga de garagem',
    ],
    assinatura:
      'Assinam locador e locatário, em todas as vias. O fiador, quando houver, assina também, e a anuência do cônjuge do fiador costuma ser exigida. Duas testemunhas fortalecem uma eventual cobrança. O registro em Cartório de Títulos e Documentos é opcional e serve para dar efeito perante terceiros.',
    limitacoes:
      'O contrato vale entre locador e locatário mesmo sem registro e sem imobiliária. O que ele não faz: não dispensa a vistoria, não garante desocupação rápida por si só e não afasta as regras da Lei do Inquilinato, que prevalecem sobre cláusula em sentido contrário. Condomínios e prefeituras podem exigir documentação adicional.',
    baseLegal:
      'Lei 8.245/91 (Lei do Inquilinato). O art. 37 lista as modalidades de garantia locatícia e o parágrafo único veda a exigência de mais de uma delas no mesmo contrato.',
  },

  'procuracao-simples': {
    quandoNaoUsar: [
      'Para atos que exigem instrumento público, como venda de imóvel — nesse caso a procuração precisa ser lavrada em cartório',
      'Para conceder poderes de vender, hipotecar, transigir ou renunciar a direitos sem que isso conste de forma expressa',
      'Depois da morte do outorgante: o mandato se extingue nesse momento',
      'Para representação em processo judicial, que exige procuração a advogado inscrito na OAB',
    ],
    errosComuns: [
      'Escrever "amplos poderes" sem listar os atos, o que costuma levar a instituição a recusar o documento',
      'Não qualificar outorgante e outorgado com RG e CPF',
      'Omitir a data e o lugar em que a procuração foi passada',
      'Não definir prazo de validade, deixando o documento em circulação por tempo indeterminado',
      'Presumir que a procuração particular será aceita em cartório, banco ou Detran sem firma reconhecida',
    ],
    assinatura:
      'Assina o outorgante, quem concede os poderes. O outorgado não assina. Para atos perante cartórios, bancos, Detran e órgãos públicos, o reconhecimento de firma é normalmente exigido — confirme a exigência com a instituição antes de levar o documento.',
    limitacoes:
      'A procuração particular é usada para atos simples, mas cada instituição define os próprios requisitos e pode recusar o instrumento particular, exigir procuração pública ou impor modelo próprio. Quando o ato exige forma pública, a procuração também precisa ser pública. A revogação só produz efeito depois de comunicada ao outorgado e às instituições onde o documento foi usado.',
    baseLegal:
      'Código Civil, arts. 653 e seguintes. O art. 654, §1º, lista os requisitos do instrumento particular; o art. 657 trata da forma exigida; o art. 661, §1º, condiciona alienar, hipotecar e transigir a poderes expressos.',
  },

  'nota-promissoria': {
    quandoNaoUsar: [
      'Para comprovar pagamento já realizado — isso é o oposto da promissória, que registra dívida a pagar',
      'Para dívida cujo valor ainda não está definido: a promessa precisa ser de quantia certa',
      'Para condicionar o pagamento a alguma contrapartida: a promessa de pagamento é incondicional por natureza',
      'Como garantia vinculada a contrato de consumo, prática restringida pela legislação consumerista',
    ],
    errosComuns: [
      'Omitir a expressão "nota promissória" no corpo do título, requisito formal sem o qual ele deixa de valer como título de crédito',
      'Divergência entre o valor em algarismos e o valor por extenso',
      'Deixar o título em branco para preenchimento posterior pelo credor',
      'Esquecer a data de emissão ou o lugar do pagamento',
      'Assinar como avalista sem entender que o avalista responde pela dívida inteira',
    ],
    assinatura:
      'Assina o emitente, quem promete pagar. O beneficiário não assina. O avalista, quando houver, assina no espaço próprio e passa a responder pelo valor. Reconhecimento de firma não é requisito de validade, mas dificulta alegação de falsidade em valores altos.',
    limitacoes:
      'A nota promissória é título executivo: permite cobrança direta, sem antes discutir a origem da dívida. Em contrapartida, o rigor formal é alto e a falta de um requisito pode fazer o documento perder a executividade, restando como prova comum de dívida. O prazo de prescrição da execução contra o emitente é de três anos contados do vencimento.',
    baseLegal:
      'Decreto 57.663/66 (Lei Uniforme de Genebra), arts. 75 a 78, que definem os requisitos da nota promissória. Código de Processo Civil, art. 784, I: a nota promissória é título executivo extrajudicial.',
  },

  'declaracao-endereco': {
    quandoNaoUsar: [
      'Quando você tem conta de luz, água, gás, telefone ou fatura em seu nome — esses documentos são aceitos com menos ressalvas',
      'Para comprovar propriedade do imóvel, que se prova por matrícula ou escritura',
      'Para declarar endereço de terceiro sem que você seja proprietário ou responsável pelo imóvel',
      'Para obter benefício ou vantagem informando endereço que não corresponde à sua residência real',
    ],
    errosComuns: [
      'Emitir a declaração com data antiga: a maioria das instituições só aceita documento recente',
      'Endereço incompleto, sem número, complemento ou CEP',
      'Declarar residência em endereço onde você não mora de fato',
      'Assumir que a declaração sozinha basta, quando a instituição também pede documento do titular do imóvel',
    ],
    assinatura:
      'Assina o declarante. Quando quem declara é o proprietário ou responsável pelo imóvel em favor de outra pessoa, é ele quem assina, e costuma-se anexar cópia do documento de identidade e do comprovante em nome dele. Bancos digitais em geral aceitam sem firma reconhecida; órgãos públicos podem exigir.',
    limitacoes:
      'Este é um documento autodeclaratório, e essa é justamente a sua fragilidade: nenhuma instituição é obrigada a aceitá-lo. Bancos, financeiras, órgãos públicos e programas sociais definem os próprios critérios e podem exigir comprovante em nome do titular, prazo máximo de emissão ou firma reconhecida. Confirme a exigência antes de apresentar o documento. Prestar declaração falsa em documento particular é conduta tipificada no art. 299 do Código Penal.',
  },

  'recibo-sinal': {
    quandoNaoUsar: [
      'Para pagamento de parcela de um negócio já fechado e contratado — aí é recibo de pagamento comum',
      'Quando as partes não querem as consequências das arras: nesse caso registre expressamente que o valor é princípio de pagamento, e não sinal',
      'Como substituto do contrato principal de compra e venda',
    ],
    errosComuns: [
      'Escrever apenas "entrada" ou "sinal" sem definir o que acontece se cada lado desistir',
      'Não registrar o valor total do negócio, apenas o valor do sinal',
      'Deixar de estipular prazo para a conclusão do negócio',
      'Descrever o bem de forma imprecisa, sem placa, matrícula ou identificação equivalente',
    ],
    assinatura:
      'Assinam as duas partes, porque o documento cria obrigações para ambas. Duas testemunhas são recomendáveis quando o valor é relevante.',
    limitacoes:
      'O sinal disciplina o que acontece em caso de arrependimento, mas não transfere a propriedade nem substitui o contrato definitivo. As consequências patrimoniais são reais: quem deu o sinal e desiste pode perdê-lo, e quem recebeu e desiste pode ter de devolvê-lo mais o equivalente. Por isso, defina as condições por escrito antes de pagar.',
    baseLegal:
      'Código Civil, arts. 417 a 420, que tratam das arras. O art. 418 prevê a retenção do sinal e a devolução mais o equivalente, conforme quem deu causa à inexecução.',
  },

  'recibo-honorarios': {
    quandoNaoUsar: [
      'Quando o município exige nota fiscal de serviços do profissional, situação comum em várias categorias',
      'Quando o cliente é pessoa jurídica e precisa do documento para dedução contábil',
      'Para formalizar o que foi contratado: honorários combinados se documentam em contrato ou proposta',
    ],
    errosComuns: [
      'Omitir o número de inscrição no conselho de classe, que é o que identifica o profissional',
      'Descrever o serviço de forma genérica quando o cliente vai usar o recibo para reembolso ou dedução',
      'Não indicar o período a que os honorários se referem em serviços contínuos',
      'Emitir recibo de valor cheio quando houve pagamento parcelado',
    ],
    assinatura:
      'Assina o profissional que recebeu, com o número de registro no conselho respectivo. Uma via para o cliente.',
    limitacoes:
      'A aceitação varia conforme a finalidade. Para dedução no Imposto de Renda e para reembolso por plano de saúde, cada instituição define os próprios requisitos e algumas exigem nota fiscal ou dados adicionais. Confirme com o plano ou com a contabilidade antes de emitir. O recibo também não comprova o resultado do serviço prestado.',
  },

  'contrato-prestacao-servico': {
    quandoNaoUsar: [
      'Para registrar pagamento já efetuado — para isso existe o recibo',
      'Para relação com subordinação, horário fixo e pessoalidade, que caracteriza vínculo de emprego',
      'Para empreitada de obra com fornecimento de material, que tem regime próprio no Código Civil',
      'Para contratos de alto valor, com propriedade intelectual relevante ou cláusulas atípicas, sem revisão de advogado',
    ],
    errosComuns: [
      'Objeto genérico: sem definir entregas, revisões e critério de aceite, não há como dizer se o serviço foi cumprido',
      'Não tratar da titularidade do que for produzido, ponto crítico em serviços criativos e de software',
      'Prever multa apenas contra uma das partes',
      'Não estabelecer prazo de aviso prévio para rescisão ou para a não renovação',
      'Confundir prazo de execução com prazo de pagamento',
    ],
    assinatura:
      'Assinam contratante e contratado, em todas as vias. Duas testemunhas com nome e CPF são opcionais e são elas que tornam o contrato título executivo extrajudicial. Assinatura eletrônica é usual; plataformas com certificado ICP-Brasil facilitam a prova da autoria em caso de contestação.',
    limitacoes:
      'O contrato vincula quem assinou e não produz efeito automático perante terceiros. Nomear a relação de "prestação de serviços" não afasta o reconhecimento de vínculo empregatício se, na prática, houver subordinação, habitualidade e pessoalidade. Cláusula contrária a norma imperativa não se valida por estar escrita.',
    baseLegal:
      'Código Civil, arts. 593 a 609, que regem a prestação de serviço não sujeita à legislação trabalhista ou a lei especial.',
  },

  'autorizacao-viagem': {
    quandoNaoUsar: [
      'Quando o menor viaja acompanhado de ambos os pais ou responsáveis legais',
      'Para substituir documento de identificação: o menor precisa apresentar documento próprio com foto',
      'Para autorizar mudança de guarda ou residência no exterior, que dependem de decisão judicial',
      'Quando há restrição judicial de viagem ou disputa de guarda em curso',
    ],
    errosComuns: [
      'Não indicar o período exato da viagem, com datas de ida e de volta',
      'Deixar de qualificar o acompanhante com nome completo, RG e CPF',
      'Apresentar a autorização de apenas um dos responsáveis quando os dois precisavam autorizar',
      'Não levar cópia da certidão de nascimento ou documento que comprove o parentesco',
      'Deixar para a véspera da viagem a conferência da regra aplicável e, se for o caso, o reconhecimento de firma',
    ],
    assinatura:
      'Assinam os responsáveis legais que autorizam a viagem. O que varia — e por isso precisa ser conferido antes de cada viagem — é a forma exigida: se a autorização é necessária naquele caso, se basta um responsável ou se os dois precisam assinar, e se a assinatura exige reconhecimento de firma em cartório. Isso depende de a viagem ser nacional ou internacional, de o menor viajar sozinho, com um dos pais ou com terceiro, da idade do menor, da situação dos responsáveis (guarda, falecimento, ausência) e das regras da companhia de transporte. Aeroportos, rodoviárias e autoridades migratórias aplicam os próprios critérios no embarque. Consulte a regra oficial vigente e a companhia antes de viajar.',
    limitacoes:
      'Esta é a hipótese em que um modelo genérico tem menos margem de erro: o embarque pode ser recusado por um detalhe de forma. A autorização não substitui passaporte, visto, documento de identificação do menor nem eventual decisão judicial. Consulte as regras da companhia aérea e, para viagem internacional, as exigências do país de destino com antecedência.',
    baseLegal:
      'Estatuto da Criança e do Adolescente (Lei 8.069/90), arts. 83 a 85, que tratam da viagem de criança e adolescente no território nacional e para o exterior. Há regulamentação complementar do Conselho Nacional de Justiça detalhando as hipóteses e a forma da autorização — confirme a norma vigente na fonte oficial antes de viajar.',
  },
};
