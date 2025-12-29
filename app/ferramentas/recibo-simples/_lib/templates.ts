export type ReciboModelo = "aluguel" | "servicos" | "venda";

// Esta interface combina os campos comuns com os campos específicos de cada modelo.
export interface ReciboData {
  // Campos comuns
  valor: string;
  pagadorNome: string;
  pagadorDocumento: string;
  beneficiarioNome: string;
  beneficiarioDocumento: string;
  cidade: string;
  data: string; // Formato YYYY-MM-DD

  // Campos específicos dos modelos (opcionais)
  referenciaMesAno?: string;
  enderecoImovel?: string;
  servicoDescricao?: string;
  periodo?: string;
  itemVendido?: string;
  quantidade?: string;
  condicoes?: string; // e.g., "à vista", "parcelado"
}

export interface ReciboTemplate {
  id: ReciboModelo;
  label: string;
  descricaoCurta: string;
  camposObrigatorios: (keyof ReciboData)[];
  textoPreview: (data: ReciboData) => string;
  mensagemWhatsApp: (data: ReciboData) => string;
}

const textoBaseRecibo = (data: ReciboData): string => {
  const { valor, pagadorNome, pagadorDocumento, beneficiarioNome, beneficiarioDocumento } = data;
  return `Eu, ${beneficiarioNome || '____________________'}, ` +
    (beneficiarioDocumento ? `inscrito(a) no CPF/CNPJ sob o nº ${beneficiarioDocumento}, ` : '') +
    `declaro para os devidos fins que recebi de ${pagadorNome || '____________________'}` +
    (pagadorDocumento ? `, inscrito(a) no CPF/CNPJ sob o nº ${pagadorDocumento}, ` : ', ') +
    `a importância de R$ ${valor || '0,00'}`;
};

export const RECIBO_TEMPLATES: Record<ReciboModelo, ReciboTemplate> = {
  aluguel: {
    id: "aluguel",
    label: "Aluguel",
    descricaoCurta: "Recibo de pagamento de aluguel mensal.",
    camposObrigatorios: ["valor", "pagadorNome", "beneficiarioNome", "cidade", "data", "referenciaMesAno"],
    textoPreview: (data: ReciboData) => {
      const { referenciaMesAno, enderecoImovel } = data;
      const complemento = ` referente ao aluguel do mês de ${referenciaMesAno || '________'}` +
        (enderecoImovel ? `, do imóvel localizado em ${enderecoImovel}.` : '.');
      return textoBaseRecibo(data) + complemento;
    },
    mensagemWhatsApp: (data: ReciboData) => {
        const { referenciaMesAno, valor } = data;
        return `Olá! Segue o recibo de pagamento do aluguel no valor de R$ ${valor || '0,00'}, referente a ${referenciaMesAno || '________'}. Obrigado!`;
    }
  },
  servicos: {
    id: "servicos",
    label: "Serviços",
    descricaoCurta: "Recibo de prestação de serviços.",
    camposObrigatorios: ["valor", "pagadorNome", "beneficiarioNome", "cidade", "data", "servicoDescricao"],
    textoPreview: (data: ReciboData) => {
      const { servicoDescricao, periodo, condicoes } = data;
      const complemento = ` referente aos serviços de ${servicoDescricao || '____________________'}` +
        (periodo ? `, prestados no período de ${periodo}` : '') +
        (condicoes ? `, com pagamento ${condicoes}.` : '.');
      return textoBaseRecibo(data) + complemento;
    },
    mensagemWhatsApp: (data: ReciboData) => {
        const { servicoDescricao, valor } = data;
        return `Oi! Estou enviando o recibo de R$ ${valor || '0,00'} referente aos serviços de ${servicoDescricao || '________'}. Abraço!`;
    }
  },
  venda: {
    id: "venda",
    label: "Venda",
    descricaoCurta: "Recibo de venda de um produto.",
    camposObrigatorios: ["valor", "pagadorNome", "beneficiarioNome", "cidade", "data", "itemVendido"],
    textoPreview: (data: ReciboData) => {
      const { itemVendido, quantidade, condicoes } = data;
      const complemento = ` referente à venda de ${itemVendido || '____________________'}` +
        (quantidade ? ` (quantidade: ${quantidade})` : '') +
        (condicoes ? `, nas seguintes condições: ${condicoes}.` : '.');
      return textoBaseRecibo(data) + complemento;
    },
    mensagemWhatsApp: (data: ReciboData) => {
        const { itemVendido, valor } = data;
        return `Olá. Segue o recibo no valor de R$ ${valor || '0,00'} da compra de ${itemVendido || '________'}. Obrigado pela preferência!`;
    }
  },
};
