export type PartnerCategory =
  | 'assinatura'
  | 'conta-pj'
  | 'pagamentos'
  | 'certificado'
  | 'contabilidade'
  | 'loja-online';

export type PartnerStatus = 'active' | 'pending';

export interface PartnerOffer {
  id: string;
  name: string;
  category: PartnerCategory;
  shortDescription: string;
  href?: string;
  cta: string;
  status: PartnerStatus;
  disclosure?: string;
}

export const PARTNER_OFFERS: PartnerOffer[] = [
  {
    id: 'assinatura-digital-indiquei',
    name: 'Assinatura digital',
    category: 'assinatura',
    shortDescription:
      'Assine documentos pela internet quando precisar formalizar contratos e acordos à distância.',
    href: 'https://indiquei.app/AOYZABK',
    cta: 'Conhecer a solução',
    status: 'active',
    disclosure: 'Link de parceria. Podemos receber comissão sem custo adicional para você.',
  },
  {
    id: 'cora',
    name: 'Conta PJ para pequenos negócios',
    category: 'conta-pj',
    shortDescription:
      'Conta empresarial para separar as finanças pessoais das atividades do negócio.',
    cta: 'Em avaliação',
    status: 'pending',
  },
  {
    id: 'infinitepay',
    name: 'Pagamentos e maquininha',
    category: 'pagamentos',
    shortDescription:
      'Solução para receber por cartão, Pix e outras formas de pagamento.',
    cta: 'Em avaliação',
    status: 'pending',
  },
  {
    id: 'pagbank',
    name: 'Pagamentos para autônomos e MEI',
    category: 'pagamentos',
    shortDescription:
      'Soluções de cobrança, conta e maquininha para quem vende produtos ou serviços.',
    cta: 'Em avaliação',
    status: 'pending',
  },
  {
    id: 'certificado-digital',
    name: 'Certificado digital',
    category: 'certificado',
    shortDescription:
      'Certificados e-CPF/e-CNPJ para assinaturas e acesso a serviços digitais oficiais.',
    cta: 'Em avaliação',
    status: 'pending',
  },
  {
    id: 'contabilidade-online',
    name: 'Contabilidade online',
    category: 'contabilidade',
    shortDescription:
      'Serviços para organizar obrigações fiscais e apoiar MEIs e pequenos negócios em crescimento.',
    cta: 'Em avaliação',
    status: 'pending',
  },
  {
    id: 'loja-online',
    name: 'Loja virtual',
    category: 'loja-online',
    shortDescription:
      'Plataforma para quem quer começar a vender produtos ou serviços online.',
    cta: 'Em avaliação',
    status: 'pending',
  },
];

export const ACTIVE_PARTNER_OFFERS = PARTNER_OFFERS.filter((offer) => offer.status === 'active');
