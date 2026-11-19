/**
 * Produtos de afiliado REAIS do ReciboNaHora.
 *
 * Fonte: painel Hotmart › Produtos › Sou Afiliado(a) (afiliações confirmadas e
 * com vendas ativas), conferido em 19/11/2026. Cada `url` é o hotlink oficial
 * (go.hotmart.com) gerado pela Hotmart para esta conta; cada `image` é a capa
 * oficial do produto cadastrada pelo produtor.
 *
 * Descrições: escritas a partir do nome do produto, sem promessas de resultado.
 * Para adicionar um produto: copie o hotlink em Hotmart › Links de divulgação.
 */

export type Platform = 'hotmart' | 'kiwify';
export type Category =
  | 'autonomos'
  | 'financas'
  | 'carreira'
  | 'produtividade'
  | 'imoveis'
  | 'sistemas'
  | 'crie-saas';

export interface AffiliateProduct {
  id: string;
  title: string;
  shortDescription: string;
  category: Category;
  platform: Platform;
  url: string;
  image?: string;
  badge?: string;
}

const HOTMART_IMG = 'https://hotmart.s3.amazonaws.com/product_pictures/';

export const CATEGORY_META: Record<Category, { label: string; bgClass: string; textClass: string }> = {
  autonomos: { label: 'Autônomos & Renda', bgClass: 'bg-amber-50', textClass: 'text-amber-700' },
  financas: { label: 'Finanças & Planilhas', bgClass: 'bg-green-50', textClass: 'text-green-700' },
  carreira: { label: 'Carreira & Trabalho', bgClass: 'bg-purple-50', textClass: 'text-purple-700' },
  produtividade: { label: 'Excel, Office & IA', bgClass: 'bg-blue-50', textClass: 'text-blue-700' },
  imoveis: { label: 'Imóveis', bgClass: 'bg-orange-50', textClass: 'text-orange-700' },
  sistemas: { label: 'Sistemas para seu Negócio', bgClass: 'bg-cyan-50', textClass: 'text-cyan-700' },
  'crie-saas': { label: 'Crie seu SaaS', bgClass: 'bg-slate-100', textClass: 'text-slate-700' },
};

export const PLATFORM_META: Record<Platform, { label: string; colorClass: string }> = {
  hotmart: { label: 'Hotmart', colorClass: 'bg-red-50 text-red-700' },
  kiwify: { label: 'Kiwify', colorClass: 'bg-lime-50 text-lime-700' },
};

const h = (path: string) => HOTMART_IMG + path;

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  // ── Autônomos & Renda ──────────────────────────────────────────────
  { id: '1559967', title: 'Autônomo Digital', shortDescription: 'Curso para quem quer trabalhar de forma autônoma no digital.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/Q104778305F', image: h('4e9b1b31-f9ce-4675-bec0-6d3f72ab68c0/AutonomoDigitalBoxDesign.png') },
  { id: '2956999', title: 'Autônomo Digital PRO – Ganhe Dinheiro com Marketing Digital', shortDescription: 'Versão avançada do Autônomo Digital, focada em marketing digital.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/K104778344I', image: h('7b8d7fa4-018d-46c9-b43f-8dee7565aeb3/AUTONOPRO.jpg') },
  { id: '6851734', title: 'Guia Definitivo do Trabalhador Autônomo', shortDescription: 'Do trabalho informal ao negócio próspero e sustentável.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/X104778308M', image: h('be1cd05e-69ab-48e4-a7ac-d09595908add/autonomo600x600.jpg') },
  { id: '6192790', title: 'Marketing Digital para Pequenos Empreendedores e Autônomos', shortDescription: 'E-book de marketing digital pensado para pequenos negócios.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/O104778329V', image: h('330be180-46a0-4b3d-b00e-81f1eae47dd6/EBOOKNEGOCIOSHOTMART.png') },
  { id: '3294872', title: 'Como Vender Veículos de Forma Autônoma', shortDescription: 'E-book/curso para quem quer trabalhar com venda de veículos.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/T104778348X', image: h('6d2aa929-3a85-469d-aa08-c1580c630f3c/IMG20230831WA0208.jpg') },
  { id: '3798273', title: 'Seja um Correspondente Bancário na Caixa', shortDescription: 'Curso sobre como atuar como correspondente bancário da Caixa Econômica Federal.', category: 'autonomos', platform: 'hotmart', url: 'https://go.hotmart.com/J104778302I', image: h('182b027a-24d3-45a3-b230-830e610b9541/capahotmart600x600rev.png') },

  // ── Finanças & Planilhas ───────────────────────────────────────────
  { id: '8441292', title: 'Financeiro PRO – Planilha de Controle Financeiro Pessoal', shortDescription: 'Planilha pronta para organizar receitas, despesas e metas pessoais.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/T108496847R', image: h('819e03fa-f0c5-4857-a8f5-022b3802711e/capa_financeiro_pro_600x600.png') },
  { id: '4441077', title: 'Planilha de Controle Financeiro Pro', shortDescription: 'Mantenha suas finanças em ordem e acompanhe seus objetivos.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/T108496862L', image: h('16b8c08b-2291-4008-aa98-9234f0b7c742/planilhapro.png') },
  { id: '2172287', title: 'Planilha de Cálculo de Parcelamento 6.0', shortDescription: 'Planilha para simular e calcular parcelamentos.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/K84858328F', image: h('d0a94ac2-7e37-4c35-bad9-67685a8cd283/ClculodeParcelamento50.png') },
  { id: '3532678', title: 'Planilha de Aluguel de Equipamentos', shortDescription: 'Controle de locações de equipamentos em planilha.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/N104778340V', image: h('5228f18a-017f-4b43-b7d1-96a027327fa7/10.png') },
  { id: '3962608', title: 'Planilhas de Gestão de Contratos, Terceiros e Produtividade', shortDescription: 'Pacote de planilhas para gestão de terceiros, contratos e tempo.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/N104778362P', image: h('00aed39c-20a4-4c05-a48d-a81211ca2d20/Capture.PNG') },
  { id: '1651140', title: 'Gestão de Custos com Software de Gestão', shortDescription: 'Curso de gestão de custos com uso de software.', category: 'financas', platform: 'hotmart', url: 'https://go.hotmart.com/R104778363M', image: h('4fd522d0-6932-4d2a-ac2d-61497f228ddf/CAPAASSINATURA.jpeg') },

  // ── Carreira & Trabalho ────────────────────────────────────────────
  { id: '8060526', title: 'Currículos ATS – Guia Completo + 12 Modelos', shortDescription: 'Como montar um currículo que passa pelos filtros ATS, com modelos prontos.', category: 'carreira', platform: 'hotmart', url: 'https://go.hotmart.com/N108496817D', image: h('be895f9d-c7f3-4518-a8a4-debda3547c68/ats_lossless.png') },
  { id: '2684636', title: 'Kit E-books Recolocação – Usando IA para Encontrar Emprego', shortDescription: 'E-books sobre recolocação profissional com apoio de inteligência artificial.', category: 'carreira', platform: 'hotmart', url: 'https://go.hotmart.com/O108496802S', image: h('5d1ebec1-5aae-4dfd-ac0e-66f4099d640a/CAPAHOTMART_AFILIADOS55.png') },
  { id: '2022007', title: 'Inglês para Entrevista de Emprego – Curso Pocket', shortDescription: 'Curso rápido de inglês voltado para entrevistas.', category: 'carreira', platform: 'hotmart', url: 'https://go.hotmart.com/W108508529H', image: h('c35dcc16-2af9-4386-bc7b-8a9f0329300d/56B06DEBB6E04AAF90FB1593641F065E.png') },
  { id: '378795', title: 'Curso de eSocial', shortDescription: 'Curso sobre o eSocial e suas obrigações.', category: 'carreira', platform: 'hotmart', url: 'https://go.hotmart.com/F108496824D', image: h('201e40fe-5822-46ac-90c5-7b7983da1392/eSocial1.png') },
  { id: '2977712', title: 'Jornada de Trabalho – Entenda na Prática', shortDescription: 'Conteúdo prático sobre regras de jornada de trabalho.', category: 'carreira', platform: 'hotmart', url: 'https://go.hotmart.com/D108496836L', image: h('449381e0-de5f-4ed2-bbdc-edd280d0f6ef/StorydoInstagramJornadadeTrabalhoEleganteRosa600600px.png') },

  // ── Excel, Office & IA ─────────────────────────────────────────────
  { id: '620451', title: 'Curso de Excel', shortDescription: 'Curso de Excel para o dia a dia de trabalho.', category: 'produtividade', platform: 'hotmart', url: 'https://go.hotmart.com/G108496869E', image: h('29d3b591-1f0b-4d7b-8ec5-e582857de603/ECpostCursoExcel3.png') },
  { id: '3020679', title: 'Pacote Excel + Power BI 2026', shortDescription: 'Cursos de Excel e Power BI em um só pacote.', category: 'produtividade', platform: 'hotmart', url: 'https://go.hotmart.com/C104778411Q', image: h('688c070c-8af0-40d1-8747-c5a5e5ea7c61/2.png') },
  { id: '1240334', title: 'Formação Pacote Office', shortDescription: 'Formação em Word, Excel, PowerPoint e demais ferramentas do Office.', category: 'produtividade', platform: 'hotmart', url: 'https://go.hotmart.com/M108496845H', image: h('05bc0bbb-ad58-485e-9136-1a88900b9cfd/Office9.jpeg') },
  { id: '3969982', title: 'ChatGPT para Micro e Pequenas Empresas e Autônomos', shortDescription: 'Uso prático do ChatGPT para pequenos negócios e profissionais liberais.', category: 'produtividade', platform: 'hotmart', url: 'https://go.hotmart.com/O104778314B', image: h('01cbf1ca-cdc9-422a-826a-66a9a95c1114/mock00042.png') },
  { id: '2719602', title: 'IA Prática com ChatGPT para Líderes e Empreendedores', shortDescription: 'Inteligência artificial aplicada à gestão e ao empreendedorismo.', category: 'produtividade', platform: 'hotmart', url: 'https://go.hotmart.com/L100154967G', image: h('a04dfc92-190e-49df-a66a-dc531def3ccd/BlackOrangeRetroHalloweenBestMoviesInstagramPost7201040px600600px1.png') },

  // ── Imóveis ────────────────────────────────────────────────────────
  { id: '4020258', title: 'Registro de Imóveis Descomplicado (RID)', shortDescription: 'Curso sobre registro de imóveis explicado de forma simples.', category: 'imoveis', platform: 'hotmart', url: 'https://go.hotmart.com/F103920067Q', image: h('27b14e5c-6807-4210-bcdc-f07406f18368/rid_capa.jpg') },
  { id: '7084996', title: 'BrokerIa – CRM Imobiliário Completo', shortDescription: 'Sistema de CRM para corretores e imobiliárias.', category: 'imoveis', platform: 'hotmart', url: 'https://go.hotmart.com/J104778306L', image: h('15ce4a1d-6bf7-4b09-838b-4a70650d7b76/WhatsAppImage20260119at154521.jpeg') },

  // ── Sistemas para seu Negócio ──────────────────────────────────────
  { id: '6462848', title: 'REC Vendas Pro – Gestão de Serviços e O.S.', shortDescription: 'Sistema de gestão de serviços e ordens de serviço (licença vitalícia).', category: 'sistemas', platform: 'hotmart', url: 'https://go.hotmart.com/Q104778339N', image: h('2eef4dd2-06f5-42ca-9b4c-479e71ccb414/recvendasprohotmart.png') },
  { id: '3854715', title: 'PDV SaaS – Sistema de Ponto de Venda', shortDescription: 'Sistema de PDV para controlar vendas e estoque (plano Evolução, 100 produtos).', category: 'sistemas', platform: 'hotmart', url: 'https://go.hotmart.com/D104778192F', image: h('5f85b1ed-17eb-4e19-8fc3-19cfeb0493c5/WhatsApp_Image_20240117_at_173736removebgpreview.png') },
  { id: '4783647', title: 'Plataforma de Multiatendimento WhatsApp', shortDescription: 'Sistema para atender clientes no WhatsApp com vários atendentes.', category: 'sistemas', platform: 'hotmart', url: 'https://go.hotmart.com/W104778218H', image: h('1cd3c261-1985-4227-8beb-b412db45164b/2.jpg') },
  { id: '5230632', title: 'Meu Assessor – Assessores de IA no WhatsApp', shortDescription: 'Plataforma de assistentes com inteligência artificial no WhatsApp.', category: 'sistemas', platform: 'hotmart', url: 'https://go.hotmart.com/Y103920088U', image: h('68756ec7-7a3f-4813-ac7f-ca8259477024/mod1600x600.png') },

  // ── Crie seu SaaS ──────────────────────────────────────────────────
  { id: '5360385', title: 'Como Criar um Micro SaaS sem Saber Programar', shortDescription: 'Guia para tirar do papel um micro SaaS sem programação.', category: 'crie-saas', platform: 'hotmart', url: 'https://go.hotmart.com/B104778155X', image: h('63c4596a-eb73-425c-b92a-596c64676969/PaginaEBook.png') },
  { id: '6542132', title: 'Crie e Lance seu Micro-SaaS com IA', shortDescription: 'Como criar e lançar um micro-SaaS usando inteligência artificial.', category: 'crie-saas', platform: 'hotmart', url: 'https://go.hotmart.com/O104778178E', image: h('c972ed49-4219-4759-89b3-e7949d6ed566/7Pcapa21.png') },
  { id: '5447858', title: 'Renda Automática com Micro SaaS', shortDescription: 'Conteúdo sobre como gerar renda com um micro SaaS.', category: 'crie-saas', platform: 'hotmart', url: 'https://go.hotmart.com/C104778221J', image: h('23e861a2-bedd-4969-8414-7fe7990e265f/WhatsAppImage20250430at122021.jpeg') },
  { id: '2106359', title: 'Comunidade Meu Primeiro SaaS', shortDescription: 'Comunidade para quem está criando o primeiro SaaS.', category: 'crie-saas', platform: 'hotmart', url: 'https://go.hotmart.com/B104778206N', image: h('57207b69-ed14-48a6-b096-76756332e8e6/1.png') },
];
