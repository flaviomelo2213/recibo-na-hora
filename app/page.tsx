import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, TOOLS } from "@/_data/catalog";
import {
  FileText,
  Receipt,
  FileSignature,
  Clipboard,
  Scale,
  Shield,
  Sparkles,
  Home as HomeIcon,
  Contact,
  Calculator as CalculatorIcon,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Download
} from "lucide-react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const iconMap = {
  receipt: Receipt,
  fileText: FileText,
  fileSignature: FileSignature,
  clipboard: Clipboard,
  scale: Scale,
  shield: Shield,
  sparkles: Sparkles,
  home: HomeIcon,
  contact: Contact,
  calculator: CalculatorIcon,
};


const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ReciboNaHora",
  "url": "https://recibonahora.com.br",
  "description": "Plataforma gratuita de geração de documentos online: recibos, contratos, orçamentos e mais.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://recibonahora.com.br/ferramentas?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ReciboNaHora",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "url": "https://recibonahora.com.br",
  "description": "Gerador gratuito de recibos, contratos e documentos online no Brasil.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  }
};

export const metadata: Metadata = {
  title: "Gerador de Recibos e Documentos Online Grátis | ReciboNaHora",
  description:
    "Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos e procurações em PDF. Sem cadastro, instantaneamente. Para autônomos, MEI e pequenos negócios.",
  alternates: {
    canonical: "https://recibonahora.com.br",
  },
  openGraph: {
    title: "Gerador de Recibos e Documentos Online Grátis | ReciboNaHora",
    description:
      "Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos e procurações em PDF. Sem cadastro, instantaneamente.",
  },
};
export default function HomePage() {
  const mostUsed = TOOLS.filter((t) => t.mostUsed).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Receipt className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium text-white">Gratuito e Instantâneo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Recibo Grátis
              <span className="block text-green-300 mt-2">
                e Documentos Essenciais
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Gere recibos, contratos, procurações e documentos profissionais online. Rápido, fácil e totalmente gratuito.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Gratuito</h3>
              <p className="text-blue-100 text-sm">
                Todos os documentos sem custo. Sem cadastro obrigatório, sem taxas escondidas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instantâneo</h3>
              <p className="text-blue-100 text-sm">
                Preencha o formulário e baixe seu documento em segundos, pronto para imprimir.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">PDF Profissional</h3>
              <p className="text-blue-100 text-sm">
                Documentos formatados profissionalmente, prontos para uso oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Bloco AEO */}
        <section className="mb-10 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Como gerar documentos online gratuitamente?
          </h2>
          <p className="text-blue-800 mb-4">
            Escolha a ferramenta na lista abaixo, preencha o formulário com os dados das partes e clique em gerar. O PDF é criado no próprio navegador, sem cadastro e sem instalar nada — em menos de 2 minutos.
          </p>
          <ol className="list-decimal list-inside space-y-1 text-blue-700 mb-4">
            <li>Selecione o tipo de documento: recibo, contrato, orçamento ou procuração</li>
            <li>Preencha nome das partes, valor, data e descrição</li>
            <li>Clique em gerar e baixe o PDF profissional</li>
          </ol>
          <a href="/ferramentas" className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Ver todas as ferramentas →
          </a>
        </section>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ferramentas Mais Usadas
          </h2>
          <p className="text-lg text-slate-600">
            Escolha o documento que você precisa gerar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mostUsed.map((tool) => {
            const Icon = tool.iconKey ? iconMap[tool.iconKey] : FileText;
            return (
              <Link
                key={tool.id}
                href={tool.href || "#"}
                className="group bg-white border-2 border-slate-200 hover:border-blue-900 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-900 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Educação Financeira: Estratégias de Crédito
              </h3>
              <p className="text-slate-700 mb-4">
                Aprenda sobre consórcio, financiamento e estratégias de capital de giro. Guia completo com simuladores, comparações e matemática transparente.
              </p>
              <Link
                href="/educacao-financeira"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Acessar Guia Educativo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Todas as Categorias
            </h2>
            <p className="text-lg text-slate-600">
              Navegue por tipo de documento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CATEGORIES.map((category) => {
              const categoryIconMap: Record<string, keyof typeof iconMap> = {
                recibos: "receipt",
                contratos: "fileSignature",
                orcamentos: "clipboard",
                requerimentos: "fileText",
                mei: "calculator",
                outros: "sparkles"
              };
              const Icon = iconMap[categoryIconMap[category.id]] || FileText;
              const categoryTools = TOOLS.filter(tool => tool.categoryId === category.id);

              return (
                <div key={category.id} className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{category.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {categoryTools.slice(0, 5).filter(tool => tool.href).map(tool => (
                      <Link
                        key={tool.id}
                        href={tool.href!}
                        className="block text-sm text-blue-900 hover:text-blue-700 font-medium transition-colors"
                      >
                        → {tool.name}
                      </Link>
                    ))}
                    {categoryTools.length > 5 && (
                      <Link
                        href="/ferramentas"
                        className="block text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors"
                      >
                        + Ver mais {categoryTools.length - 5} ferramentas
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-slate-50 border-y border-slate-200">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Guia Definitivo do Recibo Seguro
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Aprenda a criar, validar e utilizar recibos com segurança jurídica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Elementos Essenciais</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Todo recibo válido deve conter identificação completa das partes, valor por extenso e numeral, data, descrição do serviço ou produto, e assinatura do recebedor.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Validade Jurídica</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recibos simples têm validade legal quando contêm todos os elementos necessários. Para valores altos, considere reconhecimento de firma.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Segurança</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Guarde sempre cópias digitais e físicas. Recibos são comprovantes de transações e podem ser necessários em disputas ou para fins fiscais.
              </p>
            </div>
          </div>

          <div className="bg-blue-900 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Pronto para criar seu documento?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Escolha uma das nossas ferramentas gratuitas e gere seu documento profissional em minutos.
            </p>
            <Link
              href="/ferramentas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Ver Todas as Ferramentas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Parceiros Oficiais</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Trabalhamos com parceiros selecionados para oferecer mais soluções.
              </p>
              <Link
                href="/parcerias"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-800"
              >
                Ver parcerias
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Como ganhamos dinheiro</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Entenda como mantemos o projeto gratuito e sustentável.
              </p>
              <Link
                href="/como-ganhamos-dinheiro"
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-900 hover:text-blue-800"
              >
                Ver transparência
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
