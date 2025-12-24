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
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* FontAwesome Icons */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        {/* Google Fonts (Inter) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4754892182690500"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .glass-effect { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
        `}</style>
      </head>
      <body className="bg-gray-50 text-slate-800 flex flex-col min-h-screen">
        
        {/* --- CABEÇALHO --- */}
        <header className="sticky top-0 z-50 glass-effect border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-file-invoice text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Recibo<span className="text-blue-600">NaHora</span></span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Simples & Grátis</span>
              </div>
            </a>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="/" className="hover:text-blue-600 transition">Início</a>
              <a href="/ferramentas" className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <i className="fa-solid fa-screwdriver-wrench"></i> Ferramentas
              </a>
              <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
            </nav>
            
            {/* Menu Mobile */}
            <button className="md:hidden text-slate-600 text-2xl p-2">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </header>

        {children}

        {/* --- RODAPÉ SIMPLIFICADO --- */}
        <footer className="bg-white border-t border-gray-200 mt-auto pt-16 pb-8" id="contato">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              
              {/* Coluna 1: Sobre */}
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><i className="fa-solid fa-check"></i></div>
                  <span className="font-bold text-lg">ReciboNaHora</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Plataforma gratuita para gerar documentos, recibos e relatórios com validade jurídica. Feito para o Brasil. 🇧🇷
                </p>
              </div>
              
              {/* Coluna 2: Ferramentas */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Úteis</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="/ferramentas/mei-relatorio" className="hover:text-blue-600">Relatório MEI</a></li>
                  <li><a href="/ferramentas/calculadora-rescisao" className="hover:text-blue-600">Calculadora Trabalhista</a></li>
                  <li><a href="/ferramentas/checklist-vistoria" className="hover:text-blue-600">Checklist Imobiliário</a></li>
                </ul>
              </div>

              {/* Coluna 3: Geradores */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Geradores</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="/gerar/recibo-pro" className="hover:text-blue-600">Recibo Profissional</a></li>
                  <li><a href="/gerar/venda_veiculo" className="hover:text-blue-600">Recibo de Veículo</a></li>
                  <li><a href="/gerar/recibo_aluguel" className="hover:text-blue-600">Recibo de Aluguel</a></li>
                </ul>
              </div>

              {/* Coluna 4: Contato e Legal */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Suporte</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-blue-600"></i>
                    <a href="mailto:viacertasf@gmail.com" className="hover:text-blue-600">Fale Conosco</a>
                  </li>
                  <li><a href="/politica-privacidade" className="hover:text-blue-600">Política de Privacidade</a></li>
                  <li><a href="/termos-uso" className="hover:text-blue-600">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <div>
                <p>&copy; 2025 ReciboNaHora.com.br</p>
                <p className="text-xs mt-1 text-gray-400">Desenvolvido por <span className="font-semibold">Via Certa Digital</span></p>
              </div>
              
              <div className="flex gap-4 text-xl">
                <a href="#" className="text-gray-400 hover:text-pink-600 transition"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
