export type ToolCategoryId =
  | "recibos"
  | "contratos"
  | "orcamentos"
  | "requerimentos"
  | "mei"
  | "outros";

export type Badge = "Popular" | "Novo" | "Grátis" | "Beta" | "Em breve";

export type IconKey =
  | "receipt"
  | "fileText"
  | "fileSignature"
  | "clipboard"
  | "scale"
  | "shield"
  | "sparkles"
  | "home"
  | "contact"
  | "calculator";

export type ToolCategory = {
  id: ToolCategoryId;
  label: string;
  description?: string;
};

export type ToolItem = {
  id: string;
  name: string;
  description: string;
  categoryId: ToolCategoryId;
  href?: string;           // quando rota existe
  comingSoon?: boolean;    // true quando NÃO existe rota
  badges?: Badge[];
  iconKey?: IconKey;
  mostUsed?: boolean;      // “Mais usados”
};

export const CATEGORIES: ToolCategory[] = [
  { id: "recibos", label: "Recibos", description: "Modelos de recibo prontos para preencher e baixar." },
  { id: "contratos", label: "Contratos", description: "Contratos simples e objetivos para o dia a dia." },
  { id: "orcamentos", label: "Orçamentos", description: "Gere propostas e orçamentos profissionais." },
  { id: "requerimentos", label: "Requerimentos", description: "Modelos formais para órgãos e solicitações." },
  { id: "mei", label: "MEI", description: "Ferramentas e guias rápidos para MEI." },
  { id: "outros", label: "Outros", description: "Documentos e utilitários diversos." },
];

// Importante: só coloque href quando tiver certeza que a rota existe.
// Caso contrário: comingSoon: true e sem href.
export const TOOLS: ToolItem[] = [
  {
    id: "recibos-landing",
    name: "Recibos",
    description: "Acesse modelos de recibo e gere versões prontas para imprimir.",
    categoryId: "recibos",
    href: "/recibos",
    badges: ["Grátis", "Popular"],
    iconKey: "receipt",
    mostUsed: true,
  },
  {
    id: "contratos-landing",
    name: "Contratos",
    description: "Modelos essenciais com linguagem clara e objetiva.",
    categoryId: "contratos",
    href: "/contratos",
    badges: ["Beta"],
    iconKey: "fileSignature",
    mostUsed: true,
  },
  {
    id: "orcamentos-landing",
    name: "Orçamentos",
    description: "Crie orçamentos com aparência profissional e pronta para enviar.",
    categoryId: "orcamentos",
    href: "/orcamentos",
    badges: ["Grátis", "Popular"],
    iconKey: "clipboard",
    mostUsed: true,
  },
  {
    id: "mei-landing",
    name: "MEI",
    description: "Página pilar com recursos e atalhos para MEI.",
    categoryId: "mei",
    href: "/mei",
    badges: ["Novo"],
    iconKey: "shield",
  },
  {
    id: "lai-pedido",
    name: "Pedido via Lei de Acesso à Informação (LAI)",
    description: "Solicite informações a órgãos públicos com modelo formal e PDF.",
    categoryId: "requerimentos",
    href: "/requerimentos/lai-pedido",
    badges: ["Novo", "Grátis"],
    iconKey: "fileText",
    mostUsed: true,
  },
  {
    id: "declaracao-endereco",
    name: "Declaração de Endereço",
    description: "Gere uma declaração simples de endereço, pronta para baixar.",
    categoryId: "requerimentos",
    href: "/requerimentos/declaracao-endereco",
    badges: ["Grátis"],
    iconKey: "home",
  },
  {
    id: "itbi-modelo",
    name: "Requerimento de Benefício no ITBI",
    description: "Modelo para solicitar benefício/redução/isenção de ITBI.",
    categoryId: "requerimentos",
    href: "/requerimentos/itbi-modelo",
    badges: ["Grátis"],
    iconKey: "scale",
  },

  // Exemplos (sem rota confirmada) — ficam “Em breve” e sem link:
  {
    id: "recibo-pix",
    name: "Recibo com PIX",
    description: "Recibo moderno com QR Code PIX para facilitar a quitação.",
    categoryId: "recibos",
    comingSoon: true,
    badges: ["Em breve"],
    iconKey: "sparkles",
  },
  {
    id: "curriculo",
    name: "Gerador de Currículo",
    description: "Crie um currículo enxuto e profissional em minutos.",
    categoryId: "outros",
    comingSoon: true,
    badges: ["Em breve"],
    iconKey: "contact",
  },
  {
    id: "rescisao-clt",
    name: "Calculadora de Rescisão CLT",
    description: "Estimativa rápida de verbas rescisórias.",
    categoryId: "outros",
    comingSoon: true,
    badges: ["Em breve"],
    iconKey: "calculator",
  },
];