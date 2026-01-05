import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
  title: "Recibo Na Hora | Gerador de Documentos e Recibos Online Grátis",
  description:
    "Crie recibos, contratos e documentos em PDF. Ferramentas gratuitas para autônomos, corretores e profissionais no Brasil.",
  keywords: [
    "recibo online",
    "gerador de recibo",
    "recibo veiculo",
    "recibo aluguel",
    "mei",
    "nota promissoria",
    "ferramentas corretor",
  ],
  other: {
    "google-adsense-account": "ca-pub-4754892182690500",
  },
};

function FooterYear() {
  // Evita hydration mismatch: só escreve o ano após montar no client.
  // No SSR, renderiza um placeholder fixo.
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
        {/* Google Analytics (GA4) */}
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

        {/* FontAwesome Icons */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts (Inter) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-stone-50 text-stone-800 flex flex-col min-h-screen">
        {/* --- CABEÇALHO --- */}
        <header className="sticky top-0 z-50 glass-effect border-b border-stone-200 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-stone-800 text-amber-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-stone-800/20 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-file-invoice text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 leading-none">
                  Recibo<span className="text-amber-600">NaHora</span>
                </span>
                <span className="text-[10px] text-stone-500 font-medium uppercase tracking-wider mt-1">
                  Simples &amp; Confiável
                </span>
              </div>
            </a>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="/" className="hover:text-amber-600 transition">
                Início
              </a>
              <a
                href="/ferramentas"
                className="text-amber-700 font-bold hover:text-amber-800 transition flex items-center gap-2 bg-amber-100 px-3 py-1.5 rounded-full"
              >
                <i className="fa-solid fa-layer-group" /> Todas as Ferramentas
              </a>
              <a href="/requerimentos" className="hover:text-amber-600 transition">
                Requerimentos
              </a>
              <a href="/parcerias" className="hover:text-amber-600 transition">
                Parcerias
              </a>
              <a
                href="/como-ganhamos-dinheiro"
                className="hover:text-amber-600 transition"
              >
                Transparência
              </a>
              <a href="#contato" className="hover:text-amber-600 transition">
                Contato
              </a>
            </nav>

            {/* Menu Mobile (apenas visual, sem JS para evitar mismatch) */}
            <button
              type="button"
              className="md:hidden text-stone-600 text-2xl p-2"
              aria-label="Abrir menu"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </header>

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
                  {/* Se você desativou Recibo PIX, mantenha como “Em breve” sem link */}
                  <li className="text-stone-400">Recibo com PIX (em breve)</li>

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
                      href="/ferramentas/procuracao"
                      className="hover:text-amber-600"
                    >
                      Procuração
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
                      href="/politica-de-privacidade"
                      className="hover:text-amber-600"
                    >
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="/termos-de-uso" className="hover:text-amber-600">
                      Termos de Uso
                    </a>
                  </li>
                </ul>
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

              <div className="flex gap-4 text-xl">
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-600 transition"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-600 transition"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook" />
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Cookie consent apenas no client */}
        <ClientOnly>
          <CookieBanner />
        </ClientOnly>
      </body>
    </html>
  );
}
