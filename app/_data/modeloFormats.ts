import type { FAQ } from '@/lib/schema'

export type Formato = 'word' | 'pdf' | 'excel' | 'editavel' | 'simples'

export const FORMATOS: Formato[] = ['word', 'pdf', 'excel', 'editavel', 'simples']

export interface FormatoData {
  label: string
  shortLabel: string
  extension: string
  metaSuffix: string
  description: string
  intro: string
  howToSteps: string[]
  vantagens: string[]
  faqs: FAQ[]
}

export const FORMATO_DATA: Record<Formato, FormatoData> = {
  word: {
    label: 'Word (.docx)',
    shortLabel: 'Word',
    extension: '.docx',
    metaSuffix: 'em Word editável',
    description: 'Modelo editável em formato Word (.docx). Abra no Microsoft Word, Google Docs ou LibreOffice, preencha os campos e imprima ou converta para PDF.',
    intro: 'O modelo em Word permite editar livremente o texto, ajustar campos e personalizar o layout antes de imprimir ou salvar em PDF. Funciona no Microsoft Word 2010 ou superior, Google Docs e LibreOffice Writer — sem custo adicional.',
    howToSteps: [
      'Gere o documento usando nossa ferramenta online',
      'Clique em "Baixar Word (.docx)" ou use nosso gerador de PDF e abra no Word',
      'Edite os campos diretamente no documento (nome, CPF, valor, data)',
      'Verifique os dados e salve com Ctrl+S (Word) ou Arquivo → Salvar',
      'Para imprimir: Ctrl+P → configure para A4 → Imprimir',
      'Para converter para PDF: Arquivo → Salvar como → PDF',
    ],
    vantagens: [
      'Totalmente editável — ajuste campos, fontes e layout',
      'Funciona offline após o download',
      'Compatível com Microsoft Word, Google Docs e LibreOffice',
      'Fácil de converter para PDF para enviar por e-mail',
      'Permite adicionar logotipo ou cabeçalho personalizado',
    ],
    faqs: [
      { q: 'O modelo Word funciona no Google Docs?', a: 'Sim. Faça upload do .docx no Google Drive e ele abrirá automaticamente no Google Docs, onde pode ser editado e salvo como PDF gratuitamente.' },
      { q: 'Preciso do Microsoft Word para abrir?', a: 'Não. Além do Word, você pode usar Google Docs (online, gratuito), LibreOffice Writer (gratuito para Windows, Mac e Linux) ou Pages no Mac.' },
      { q: 'Como converter o Word para PDF?', a: 'No Word: Arquivo → Salvar como → PDF. No Google Docs: Arquivo → Download → PDF. No LibreOffice: Arquivo → Exportar como PDF.' },
      { q: 'O modelo Word tem validade jurídica?', a: 'O formato do arquivo não interfere na validade. O que importa são os dados preenchidos e a assinatura. Um Word impresso e assinado tem a mesma validade de um PDF.' },
      { q: 'Posso usar o modelo Word para múltiplos recibos?', a: 'Sim. Salve o arquivo original como template e faça uma cópia para cada novo recibo. Assim mantém o layout padrão e edita apenas os dados variáveis.' },
    ],
  },

  pdf: {
    label: 'PDF',
    shortLabel: 'PDF',
    extension: '.pdf',
    metaSuffix: 'em PDF pronto para imprimir',
    description: 'Modelo em PDF gerado instantaneamente online. Preencha os campos no navegador, baixe o PDF e imprima ou envie por e-mail — sem instalar nada.',
    intro: 'O PDF é o formato mais usado para recibos por ser universalmente legível, não editável após geração e ideal para envio por e-mail, WhatsApp e armazenamento digital. Nosso gerador cria o PDF diretamente no navegador, sem precisar instalar nenhum programa.',
    howToSteps: [
      'Acesse nossa ferramenta de geração de recibo',
      'Preencha todos os campos: nome, CPF, valor, descrição e data',
      'Clique em "Gerar PDF" — o documento é criado instantaneamente',
      'Baixe o arquivo .pdf para seu dispositivo',
      'Imprima em qualquer impressora ou envie digitalmente por e-mail ou WhatsApp',
      'Para assinar digitalmente: use Adobe Acrobat Reader (gratuito)',
    ],
    vantagens: [
      'Gerado instantaneamente — sem espera, sem instalar programas',
      'Layout fixo — garante que o documento fique idêntico em qualquer dispositivo',
      'Ideal para envio por e-mail, WhatsApp e armazenamento na nuvem',
      'Universalmente aceito — abre em qualquer celular, tablet ou computador',
      'Não pode ser alterado após geração — maior segurança',
    ],
    faqs: [
      { q: 'Como preencher um PDF de recibo?', a: 'Use nossa ferramenta online — preencha os campos no formulário e o PDF é gerado com todos os dados já inseridos. Não precisa de Adobe Acrobat para preencher.' },
      { q: 'PDF de recibo tem validade jurídica?', a: 'Sim. Um PDF com os dados corretos e assinatura digitalizada (ou impressão + assinatura manual) tem plena validade jurídica como comprovante de pagamento.' },
      { q: 'Como assinar um PDF de recibo digitalmente?', a: 'Use o Adobe Acrobat Reader (gratuito): Ferramentas → Preencher e Assinar → Assinar. Ou plataformas como ClickSign, DocuSign ou D4Sign para assinatura com validade ICP-Brasil.' },
      { q: 'O PDF pode ser alterado após gerado?', a: 'O PDF padrão gerado por nós é somente leitura — não pode ser editado sem ferramentas específicas. Isso garante a integridade do documento.' },
      { q: 'Posso gerar o PDF pelo celular?', a: 'Sim. Nossa ferramenta funciona em qualquer navegador mobile. O PDF é gerado e baixado diretamente para o seu celular, pronto para compartilhar.' },
    ],
  },

  excel: {
    label: 'Excel (.xlsx)',
    shortLabel: 'Excel',
    extension: '.xlsx',
    metaSuffix: 'em Excel com cálculos automáticos',
    description: 'Modelo em Excel (.xlsx) para controlar múltiplos recibos com cálculos automáticos de totais, impostos e somas. Ideal para autônomos e pequenas empresas.',
    intro: 'O modelo em Excel é ideal quando você precisa emitir vários recibos por mês e quer manter um controle financeiro integrado. Com fórmulas automáticas, calcula totais, INSS, IR e gera relatórios mensais de forma automática.',
    howToSteps: [
      'Baixe o modelo Excel (.xlsx) pela nossa ferramenta',
      'Abra no Microsoft Excel, Google Planilhas ou LibreOffice Calc',
      'Preencha os campos em amarelo (dados do prestador e do cliente)',
      'Insira o valor bruto — os descontos são calculados automaticamente',
      'Para novo recibo: copie a aba (Plan1) e cole como nova aba',
      'Na aba "Resumo" você verá o total recebido no mês automaticamente',
    ],
    vantagens: [
      'Cálculos automáticos de INSS, IR e valor líquido',
      'Controle financeiro mensal integrado na mesma planilha',
      'Fácil duplicar para gerar múltiplos recibos no mês',
      'Funciona no Excel, Google Planilhas e LibreOffice Calc',
      'Relatório automático de receitas mensais e anuais',
    ],
    faqs: [
      { q: 'O modelo Excel funciona no Google Planilhas?', a: 'Sim. Faça upload do .xlsx no Google Drive e abra com Google Planilhas. As fórmulas são compatíveis e funcionam normalmente.' },
      { q: 'Para que serve o modelo Excel de recibo?', a: 'É ideal para autônomos que emitem vários recibos por mês e precisam de controle financeiro. A planilha calcula descontos, soma receitas mensais e facilita a declaração do IR.' },
      { q: 'Preciso saber usar Excel para preencher o modelo?', a: 'Não. O modelo é pre-formatado — você só preenche os campos destacados. Os cálculos acontecem automaticamente.' },
      { q: 'Como imprimir o recibo em Excel?', a: 'Selecione a área de impressão (Ctrl+P → Imprimir Seleção ou use a área de impressão pré-configurada). O modelo já vem formatado para impressão em A4.' },
      { q: 'O recibo em Excel tem a mesma validade que em papel?', a: 'O recibo precisa ser impresso e assinado para ter validade jurídica plena. O Excel é o formato de edição — a validade vem do conteúdo e da assinatura no documento final.' },
    ],
  },

  editavel: {
    label: 'Editável Online',
    shortLabel: 'Editável',
    extension: 'online',
    metaSuffix: 'editável online sem cadastro',
    description: 'Modelo 100% editável online — preencha diretamente no navegador, visualize em tempo real e baixe o PDF pronto. Sem cadastro, sem instalar programas.',
    intro: 'O modelo editável online é a forma mais rápida de criar um recibo. Preencha os campos diretamente no nosso formulário, veja o preview em tempo real e baixe o PDF em menos de 1 minuto — do celular, tablet ou computador, sem instalar nada.',
    howToSteps: [
      'Acesse nossa ferramenta de recibo online',
      'Preencha os campos: quem pagou, quem recebeu, valor e serviço',
      'Veja o preview do recibo em tempo real no lado direito da tela',
      'Ajuste os campos até ficar como deseja',
      'Clique em "Baixar PDF" — o documento é gerado e baixado instantaneamente',
      'Compartilhe por WhatsApp, e-mail ou imprima direto',
    ],
    vantagens: [
      'Zero instalação — funciona 100% no navegador',
      'Preview em tempo real enquanto preenche',
      'Funciona em celular, tablet e computador',
      'Sem cadastro ou login necessário',
      'PDF gerado em segundos, pronto para enviar',
    ],
    faqs: [
      { q: 'Meus dados ficam salvos online?', a: 'Não. Nossa ferramenta processa tudo localmente no seu navegador. Nenhum dado pessoal é enviado para nossos servidores.' },
      { q: 'Preciso criar conta para usar o modelo editável?', a: 'Não. A ferramenta é 100% gratuita e não exige cadastro ou login.' },
      { q: 'Funciona no celular?', a: 'Sim. A ferramenta é responsiva e funciona em qualquer smartphone com navegador — Chrome, Safari ou Firefox.' },
      { q: 'Posso preencher o modelo editável offline?', a: 'Não. A ferramenta requer conexão com a internet para carregar. Mas após baixar o PDF, você o tem offline para sempre.' },
      { q: 'É possível salvar o preenchimento para continuar depois?', a: 'Atualmente não há salvamento automático. Recomendamos preencher e baixar o PDF na mesma sessão.' },
    ],
  },

  simples: {
    label: 'Simples',
    shortLabel: 'Simples',
    extension: 'PDF',
    metaSuffix: 'versão simplificada',
    description: 'Modelo simplificado com apenas os campos essenciais. Ideal para serviços informais, pagamentos rápidos e quando não é necessário muita formalidade.',
    intro: 'O modelo simplificado contém apenas os campos mínimos exigidos pelo Código Civil para que o recibo tenha validade jurídica. É perfeito para serviços informais, pequenos pagamentos e quando as partes se conhecem e não precisam de formalidade excessiva.',
    howToSteps: [
      'Acesse o gerador de recibo simples',
      'Preencha apenas os campos essenciais: quem recebeu, de quem, quanto e por quê',
      'Informe a data do recebimento',
      'Baixe o PDF ou imprima diretamente',
      'Ambas as partes assinam — uma via para cada',
    ],
    vantagens: [
      'Pronto em menos de 1 minuto — mínimo de campos',
      'Layout limpo e direto ao ponto',
      'Válido juridicamente com apenas os campos essenciais',
      'Ideal para serviços informais entre conhecidos',
      'Tamanho reduzido — cabe em meia folha A4',
    ],
    faqs: [
      { q: 'O recibo simplificado tem validade jurídica?', a: 'Sim, desde que contenha os campos mínimos do Art. 320 do Código Civil: valor, descrição, nome do devedor e do credor, data e assinatura. O modelo simples inclui todos esses campos.' },
      { q: 'Quando usar o recibo simples em vez do completo?', a: 'Use o recibo simples para serviços informais de menor valor, pagamentos entre amigos ou familiares, ou quando o contratante não pede formalidade. Para serviços profissionais, prefira o modelo completo.' },
      { q: 'Recibo simples precisa de testemunha?', a: 'Não é obrigatório para a validade básica. Testemunhas tornam o documento mais robusto juridicamente, mas para serviços do dia a dia não são necessárias.' },
      { q: 'Posso usar o recibo simples para qualquer valor?', a: 'Sim, mas para valores acima de R$ 1.000 recomendamos o modelo completo com mais detalhes, ou complementar com um contrato formal.' },
      { q: 'O recibo simples serve para comprovar renda?', a: 'Pode ser aceito, mas para fins bancários e financiamentos é mais seguro usar o modelo completo com todos os dados das partes e descrição detalhada do serviço.' },
    ],
  },
}

// Helper: check if a tipo slug ends with a format suffix
export function parseFormatoFromSlug(slug: string): { base: string; formato: Formato } | null {
  for (const fmt of FORMATOS) {
    if (slug.endsWith(`-${fmt}`)) {
      const base = slug.slice(0, -(fmt.length + 1))
      return { base, formato: fmt }
    }
  }
  return null
}
