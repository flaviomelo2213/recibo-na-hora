import * as React from "react";
import { 
  FileText, 
  Receipt, 
  Home,
  QrCode,
  PenSquare,
  ClipboardList,
  Gavel,
  Mail,
  Landmark,
  FileSignature,
  Calculator,
  UserCircle
} from "lucide-react";

// Retiramos a importação de LucideIcon, pois não era usada diretamente aqui.

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type ToolCategory = {
  id: string;
  label: string;
  description?: string;
};

export type ToolItem = {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  href?: string;
  comingSoon?: boolean;
  badges?: string[];
  icon: string; // Trocado para string para simplicidade
};

const CATEGORIES: ToolCategory[] = [
  { id: "recibos", label: "Recibos" },
  { id: "contratos", label: "Contratos" },
  { id: "orcamentos", label: "Orçamentos" },
  { id: "requerimentos", label: "Requerimentos" },
  { id: "outros", label: "Outros" },
];

const TOOLS: ToolItem[] = [
  // Recibos
  {
    id: 'recibo-simples',
    name: 'Gerador de Recibo Simples',
    description: 'Crie recibos de pagamento genéricos para qualquer finalidade. Rápido e fácil.',
    href: '/ferramentas/recibo-simples',
    categoryId: 'recibos',
    badges: ['Popular'],
    icon: 'Receipt',
  },
  {
    id: 'recibo-aluguel',
    name: 'Recibo de Aluguel',
    description: 'Gere recibos específicos para aluguel de imóveis, com campos detalhados.',
    href: '/ferramentas/imobiliario',
    categoryId: 'recibos',
    badges: ['Popular'],
    icon: 'Home',
  },
  {
    id: 'recibo-pix',
    name: 'Recibo com PIX',
    description: 'Crie um recibo de pagamento moderno com um QR Code PIX para facilitar a quitação.',
    categoryId: 'recibos',
    badges: ['Novo'],
    icon: 'QrCode',
    comingSoon: true,
  },

  // Contratos
  {
    id: 'contrato-completo',
    name: 'Gerador de Contrato (beta)',
    description: 'Elabore contratos de prestação de serviços com cláusulas essenciais.',
    href: '/ferramentas/contrato-completo',
    categoryId: 'contratos',
    icon: 'FileText',
  },
  {
    id: 'procuracao',
    name: 'Gerador de Procuração',
    description: 'Crie procurações para diversas finalidades, nomeando um representante legal.',
    href: '/ferramentas/procuracao',
    categoryId: 'contratos',
    icon: 'PenSquare',
  },

  // Orçamentos
  {
    id: 'orcamento',
    name: 'Gerador de Orçamento',
    description: 'Crie e envie propostas comerciais e orçamentos detalhados para seus clientes.',
    href: '/ferramentas/orcamento',
    categoryId: 'orcamentos',
    icon: 'ClipboardList',
  },

  // Requerimentos
  {
    id: 'requerimento-lai',
    name: 'Pedido via Lei de Acesso à Informação',
    description: 'Solicite informações a órgãos públicos com base na LAI.',
    href: '/requerimentos/lai-pedido',
    categoryId: 'requerimentos',
    badges: ['Novo'],
    icon: 'Gavel',
  },
  {
    id: 'declaracao-endereco',
    name: 'Declaração de Residência',
    description: 'Gere uma declaração de endereço para comprovar sua moradia atual.',
    href: '/requerimentos/declaracao-endereco',
    categoryId: 'requerimentos',
    icon: 'Mail',
  },
   {
    id: 'requerimento-itbi',
    name: 'Requerimento de Benefício no ITBI',
    description: 'Peça isenção ou redução do ITBI na compra do seu primeiro imóvel.',
    href: '/requerimentos/itbi-modelo',
    categoryId: 'requerimentos',
    icon: 'Landmark',
  },

  // Outros
  {
    id: 'nota-promissoria',
    name: 'Nota Promissória',
    description: 'Emita notas promissórias para formalizar promessas de pagamento.',
    href: '/ferramentas/nota-promissoria',
    categoryId: 'outros',
    badges: ['Popular'],
    icon: 'FileSignature',
  },
  {
    id: 'calculadora-rescisao',
    name: 'Calculadora de Rescisão CLT',
    description: 'Calcule os valores a receber em uma rescisão de contrato de trabalho CLT.',
    href: '/ferramentas/calculadora-rescisao',
    categoryId: 'outros',
    icon: 'Calculator',
  },
  {
    id: 'curriculo-profissional',
    name: 'Gerador de Currículo',
    description: 'Crie um currículo profissional em minutos com nosso modelo otimizado.',
    href: '/ferramentas/curriculo-profissional',
    categoryId: 'outros',
    icon: 'UserCircle',
  },
];

export const TOOL_CATALOG = {
    TOOLS,
    CATEGORIES
};