import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import ClientOnly from "./components/ClientOnly";
import { AiProvider } from "./components/ai/AiProvider";
import AiFab from "./components/ai/AiFab";
import AiDrawer from "./components/ai/AiDrawer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Recibo Grátis e Documentos Essenciais | Gerador Online com Simulador de Crédito",
  description:
    "Recibo Grátis e Documentos Essenciais: Gerador online de contratos, procurações e simulador de estratégia financeira. 100% gratuito, seguro e sem retenção de dados.",
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
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYX0MSP75Y"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYX0MSP75Y', { anonymize_ip: true });
          `}
        </Script>

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4754892182690500"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-stone-50 text-stone-800 flex flex-col min-h-screen">
        <AiProvider>
          <Header />

          {children}

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
                  </ul>
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

              </div>
            </div>
          </footer>

          {/* Cookie consent apenas no client */}
          <ClientOnly>
            <CookieBanner />
          </ClientOnly>

          {/* GLOBAL AI */}
          <AiFab />
          <AiDrawer />
        </AiProvider>
      </body>
    </html>
  );
}
