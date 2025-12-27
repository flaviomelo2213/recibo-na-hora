import './globals.css';
import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Recibo Na Hora | Gerador de Documentos e Recibos Online Grátis',
  description: 'Crie recibos de Aluguel, Venda de Veículos, Promissória e Relatórios MEI. Ferramentas gratuitas para corretores e autônomos no Brasil.',
  keywords: 'recibo online, gerador de recibo, recibo veiculo, recibo aluguel, mei, nota promissoria, ferramentas corretor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Tailwind CSS is included via Next.js setup, this is a fallback */}
        {/* FontAwesome Icons */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        {/* Google Fonts (Inter) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4754892182698508"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .glass-effect { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); }
        `}</style>
      </head>
      <body className="bg-stone-50 text-stone-800 flex flex-col min-h-screen">
        
        {/* --- CABEÇALHO --- */}
        <header className="sticky top-0 z-50 glass-effect border-b border-stone-200 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-stone-800 text-amber-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-stone-800/20 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-file-invoice text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-stone-900 leading-none">Recibo<span className="text-amber-600">NaHora</span></span>
                <span className="text-[10px] text-stone-500 font-medium uppercase tracking-wider mt-1">Simples & Confiável</span>
              </div>
            </a>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="/" className="hover:text-amber-600 transition">Início</a>
              <a href="/ferramentas" className="text-amber-700 font-bold hover:text-amber-800 transition flex items-center gap-2 bg-amber-100 px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-layer-group"></i> Todas as Ferramentas
              </a>
              <a href="#contato" className="hover:text-amber-600 transition">Contato</a>
            </nav>
            
            {/* Menu Mobile */}
            <button className="md:hidden text-stone-600 text-2xl p-2">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </header>

        {children}

        {/* --- RODAPÉ --- */}
        <footer className="bg-white border-t border-stone-200 mt-auto pt-16 pb-8" id="contato">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              
              {/* Coluna 1: Sobre */}
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                   <div className="bg-stone-800 text-amber-50 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-stone-800/20">
                    <i className="fa-solid fa-file-invoice"></i>
                  </div>
                  <span className="font-bold text-lg text-stone-800">ReciboNaHora</span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                  Plataforma gratuita para gerar documentos, recibos e contratos com segurança. Feito para o Brasil. 🇧🇷
                </p>
              </div>
              
              {/* Coluna 2: Ferramentas Úteis */}
              <div>
                <h4 className="font-bold text-stone-900 mb-4">Ferramentas</h4>
                <ul className="space-y-3 text-sm text-stone-600">
                  <li><a href="/ferramentas/recibo-pix" className="hover:text-amber-600">Recibo com PIX</a></li>
                  <li><a href="/ferramentas/calculadora-rescisao" className="hover:text-amber-600">Calculadora Trabalhista</a></li>
                  <li><a href="/ferramentas/orcamento" className="hover:text-amber-600">Gerador de Orçamento</a></li>
                </ul>
              </div>

              {/* Coluna 3: Documentos */}
              <div>
                <h4 className="font-bold text-stone-900 mb-4">Documentos</h4>
                <ul className="space-y-3 text-sm text-stone-600">
                  <li><a href="/ferramentas/nota-promissoria" className="hover:text-amber-600">Nota Promissória</a></li>
                  <li><a href="/ferramentas/procuracao" className="hover:text-amber-600">Procuração</a></li>
                  <li><a href="/ferramentas/imobiliario" className="hover:text-amber-600">Recibo de Aluguel</a></li>
                </ul>
              </div>

              {/* Coluna 4: Suporte */}
              <div>
                <h4 className="font-bold text-stone-900 mb-4">Suporte</h4>
                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-amber-600"></i>
                    <a href="mailto:contato@recibonahora.com.br" className="hover:text-amber-600">Fale Conosco</a>
                  </li>
                  <li><a href="/politica-privacidade" className="hover:text-amber-600">Política de Privacidade</a></li>
                  <li><a href="/termos-uso" className="hover:text-amber-600">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
              <div>
                <p>&copy; 2024 ReciboNaHora.com.br - Todos os direitos reservados.</p>
                <p className="text-xs mt-1 text-stone-400">Um projeto <span className="font-semibold text-stone-600">Via Certa Digital</span></p>
              </div>
              
              <div className="flex gap-4 text-xl">
                <a href="#" className="text-stone-400 hover:text-amber-600 transition"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="text-stone-400 hover:text-amber-600 transition"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
