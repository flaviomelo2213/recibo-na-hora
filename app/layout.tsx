import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConsentProvider, ConsentScripts } from "./components/CookieBanner";
import ClientOnly from "./components/ClientOnly";
import { AiProvider } from "./components/ai/AiProvider";
import AiFab from "./components/ai/AiFab";
import AiDrawer from "./components/ai/AiDrawer";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReciboNaHora",
  "url": "https://www.recibonahora.com.br",
  "logo": "https://www.recibonahora.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contato@recibonahora.com.br",
    "contactType": "customer support",
    "availableLanguage": "Portuguese"
  },
  "sameAs": []
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Flavio Melo",
  "jobTitle": "Especialista em documentos e recibos",
  "url": "https://www.recibonahora.com.br",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ReciboNaHora — Gerador de Recibos e Documentos Online",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://www.recibonahora.com.br",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O recibo gerado no ReciboNaHora tem validade jurídica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Quando preenchido corretamente com identificação das partes, valor por extenso, descrição do pagamento, data e assinatura do recebedor, o recibo serve como prova de quitação nos termos do Código Civil.",
      },
    },
    {
      "@type": "Question",
      "name": "Preciso fazer cadastro ou pagar para gerar recibos em PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Todas as ferramentas do ReciboNaHora são gratuitas, funcionam direto no navegador e permitem imprimir ou salvar em PDF sem cadastro.",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recibonahora.com.br"),
  title: "Gerador de Recibos e Documentos Online Grátis | ReciboNaHora",
  description:
    "Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos e procurações em PDF. Sem cadastro. Para autônomos, MEI e pequenos negócios.",
  keywords: [
    "recibo online",
    "gerador de recibo",
    "contrato de aluguel",
    "procuração",
    "recibo aluguel",
    "contrato locação",
    "simulador de crédito",
    "mei",
    "nota promissoria",
    "ferramentas corretor",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    images: [
      {
        url: "https://www.recibonahora.com.br/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ReciboNaHora - Gerador gratuito de recibos e documentos",
      },
    ],
    type: "website",
    locale: "pt_BR",
    siteName: "ReciboNaHora",
    url: "https://www.recibonahora.com.br",
    title: "Gerador de Recibos e Documentos Online Grátis | ReciboNaHora",
    description:
      "Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos e procurações em PDF. Sem cadastro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Recibos e Documentos Online Grátis | ReciboNaHora",
    description:
      "Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos e procurações em PDF. Sem cadastro.",
    images: ["https://www.recibonahora.com.br/opengraph-image"],
  },
  other: {
    "google-adsense-account": "ca-pub-4754892182690500",
  },
};

function FooterYear() {
  return (
    <ClientOnly>
      <span>{new Date().getFullYear()}</span>
    </ClientOnly>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4754892182690500" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.adsbygoogle=window.adsbygoogle||[];var npa=1;try{if(localStorage.getItem("rnh_cookie_consent")==="accepted")npa=0;}catch(e){}window.adsbygoogle.requestNonPersonalizedAds=npa;`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4754892182690500"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />

      </head>

      <body className={`${inter.className} bg-stone-50 text-stone-800 flex flex-col min-h-screen`}>
        <ConsentProvider>
        <ConsentScripts />
        <AiProvider>
          <Header />

          <div {...({ "google-side-rail-overlap": "false" } as Record<string, string>)}>
            {children}
          </div>

          {/* --- RODAPÉ --- */}
          <footer
            className="bg-white border-t border-stone-200 mt-auto pt-16 pb-8"
            id="contato"
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-10 mb-12">
                {/* Coluna 1: Sobre */}
                <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-stone-800 text-amber-50 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-stone-800/20">
                      <i className="fa-solid fa-file-invoice" />
                    </div>
                    <span className="font-bold text-lg text-stone-800">
                      ReciboNaHora
                    </span>
                  </div>

                  <p className="text-sm text-stone-500 leading-relaxed mb-4">
                    Plataforma gratuita para gerar documentos, recibos e contratos
                    com segurança. Feito para o Brasil.
                  </p>
                </div>

                {/* Coluna 2: Ferramentas Úteis */}
                <div>
                  <h4 className="font-bold text-stone-900 mb-4">Ferramentas</h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li>
                      <a
                        href="/ferramentas/recibo-pix"
                        className="hover:text-amber-600"
                      >
                        Recibo com PIX
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contrato-locacao"
                        className="hover:text-amber-600"
                      >
                        Contrato de Aluguel
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ferramentas/calculadora-rescisao"
                        className="hover:text-amber-600"
                      >
                        Calculadora Trabalhista
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ferramentas/orcamento"
                        className="hover:text-amber-600"
                      >
                        Gerador de Orçamento
                      </a>
                    </li>
                    <li>
                      <a
                        href="/recursos"
                        className="hover:text-amber-600"
                      >
                        Recursos Recomendados
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Coluna 3: Documentos */}
                <div>
                  <h4 className="font-bold text-stone-900 mb-4">Documentos</h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li>
                      <a
                        href="/ferramentas/nota-promissoria"
                        className="hover:text-amber-600"
                      >
                        Nota Promissória
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ferramentas/procuracao-plenos-poderes"
                        className="hover:text-amber-600"
                      >
                        Procuração de Plenos Poderes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ferramentas/procuracao-inss"
                        className="hover:text-amber-600"
                      >
                        Procuração INSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ferramentas/imobiliario"
                        className="hover:text-amber-600"
                      >
                        Recibo de Aluguel
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Coluna 4: Suporte */}
                <div>
                  <h4 className="font-bold text-stone-900 mb-4">Suporte</h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-envelope text-amber-600" />
                      <a
                        href="mailto:contato@recibonahora.com.br"
                        className="hover:text-amber-600"
                      >
                        Fale Conosco
                      </a>
                    </li>
                    <li>
                      <a href="/contato" className="hover:text-amber-600">
                        Formulário de Contato
                      </a>
                    </li>
                    <li>
                      <a href="/sobre" className="hover:text-amber-600">
                        Sobre Nós
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="hover:text-amber-600">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/mapa-de-perguntas" className="hover:text-amber-600">
                        Mapa de perguntas
                      </a>
                    </li>
                    <li>
                      <a href="/parcerias" className="hover:text-amber-600">
                        Parcerias
                      </a>
                    </li>
                    <li>
                      <a
                        href="/como-ganhamos-dinheiro"
                        className="hover:text-amber-600"
                      >
                        Transparência
                      </a>
                    </li>
                    <li>
                      <a
                        href="/politica-privacidade"
                        className="hover:text-amber-600"
                      >
                        Política de Privacidade
                      </a>
                    </li>
                    <li>
                      <a href="/termos-uso" className="hover:text-amber-600">
                        Termos de Uso
                      </a>
                    </li>
                    <li>
                      <a
                        href="/politica-editorial"
                        className="hover:text-amber-600"
                      >
                        Política Editorial
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 mb-6">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-slate-800 font-bold text-sm">
                      Pendências no CNIS ou vínculos antigos sumidos no INSS?
                    </p>
                    <p className="text-slate-600 text-xs mt-1">
                      Conheça o Guia Prático: Destrave Seu CNIS (passo a passo visual • R$ 29,90).
                    </p>
                  </div>
                  <a
                    href="https://guiadocontribuinte.com.br/destrave-seu-cnis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    Ver Guia Prático →
                  </a>
                </div>
              </div>

              {/* Bloco de Ferramentas Parceiras (SEO Interlinking) */}
              <div className="border-t border-stone-200 pt-8 mb-6">
                <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wider mb-3">
                  Ferramentas Parceiras
                </h4>
                <p className="text-xs text-stone-500 mb-4">
                   Emitiu um recibo de autônomo (RPA) ou prestação de serviços? Consulte também nossas ferramentas gratuitas de apoio previdenciário, trabalhista e documental:
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <a
                    href="https://guiadocontribuinte.com.br"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-stone-900 font-semibold border border-amber-200 transition-colors"
                  >
                    Guia do Contribuinte - Calculadora INSS e Códigos GPS
                  </a>
                  <a
                    href="https://gerarcalculotrabalhista.com.br"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium border border-stone-200 transition-colors"
                  >
                    Gerar Cálculo Trabalhista
                  </a>
                  <a
                    href="https://gerarcontratonahora.com.br"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium border border-stone-200 transition-colors"
                  >
                    Gerar Contrato na Hora
                  </a>
                  <a
                    href="https://gerarorcamentonahora.com.br"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium border border-stone-200 transition-colors"
                  >
                    Gerar Orçamento na Hora
                  </a>
                  <a
                    href="https://meucurriculonahora.com.br"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium border border-stone-200 transition-colors"
                  >
                    Meu Currículo na Hora
                  </a>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-8 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-slate-700 font-medium mb-3">
                    <i className="fa-solid fa-home text-blue-600 mr-2"></i>
                    Planejando seu próximo imóvel?
                  </p>
                  <a
                    href="/educacao-financeira"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <i className="fa-solid fa-calculator"></i>
                    Use nosso Simulador de Crédito Planejado
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
                <div>
                  <p>
                    &copy; <FooterYear /> ReciboNaHora.com.br - Todos os direitos
                    reservados.
                  </p>
                  <p className="text-xs mt-1 text-stone-400">
                    Um projeto{" "}
                    <span className="font-semibold text-stone-600">
                      Via Certa Digital
                    </span>
                  </p>
                </div>
                <a href="/apoie" className="text-xs text-stone-400 hover:text-stone-600 underline-offset-2 hover:underline">
                  Apoie o projeto
                </a>
              </div>
            </div>
          </footer>

          {/* GLOBAL AI */}
          <AiFab />
          <AiDrawer />
        </AiProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
