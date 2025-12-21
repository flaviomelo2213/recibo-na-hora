import React from 'react';
import './globals.css'; 

export const metadata = {
  title: 'Recibo Na Hora | Gerador de Documentos e Recibos Online Grátis',
  description: 'Crie recibos de Aluguel, Venda de Veículos, Promissória e Comprovantes para Uber/MEI. Gerador de PDF profissional, rápido e sem cadastro.',
  keywords: 'recibo online, gerador de recibo, recibo veiculo, recibo aluguel, nota promissoria, declaração uber, ferramentas corretor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Tailwind CSS (Motor Visual) */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Ícones FontAwesome (Visual Premium) */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        {/* Fonte Inter (A mesma do ReciboOnline e Nubank) */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .glass-effect { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
        `}</style>
      </head>
      <body className="bg-gray-50 text-slate-800 flex flex-col min-h-screen">
        
        {/* --- CABEÇALHO PRO --- */}
        <header className="sticky top-0 z-50 glass-effect border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-500 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-110">
                <i className="fa-solid fa-file-invoice text-xl"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Recibo<span className="text-blue-600">NaHora</span></span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">Gerador Inteligente</span>
              </div>
            </a>

            {/* Menu Desktop (ATUALIZADO AQUI) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="/" className="hover:text-blue-600 transition">Início</a>
              <a href="/ferramentas" className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <i className="fa-solid fa-screwdriver-wrench"></i> Ferramentas Úteis
              </a>
              <a href="#" className="hover:text-blue-600 transition">Contato</a>
              <a href="#" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition shadow-lg hover:shadow-slate-900/20">
                <i className="fa-solid fa-lock mr-2"></i> Área do Cliente
              </a>
            </nav>
            
            {/* Menu Mobile */}
            <button className="md:hidden text-slate-600 text-2xl p-2">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </header>

        {children}

        {/* --- RODAPÉ --- */}
        <footer className="bg-white border-t border-gray-200 mt-auto pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><i className="fa-solid fa-check"></i></div>
                  <span className="font-bold text-lg">ReciboNaHora</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Simplificamos a burocracia do Brasil. Gere documentos com validade jurídica em segundos, direto do seu navegador.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Ferramentas</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="/ferramentas/checklist-vistoria" className="hover:text-blue-600">Checklist Vistoria</a></li>
                  <li><a href="/ferramentas" className="hover:text-blue-600">Calculadora Aluguel</a></li>
                  <li><a href="/gerar/recibo_aluguel" className="hover:text-blue-600">Recibo de Aluguel</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Veículos & Apps</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="/gerar/venda_veiculo" className="hover:text-blue-600">Recibo de Compra e Venda</a></li>
                  <li><a href="/gerar/declaracao_uber" className="hover:text-blue-600">Declaração de Renda Uber</a></li>
                  <li><a href="/gerar/isencao_multas" className="hover:text-blue-600">Isenção de Multas</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Legal & Suporte</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-blue-600">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-blue-600">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-blue-600">Fale Conosco</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; 2025 ReciboNaHora.com.br - Todos os direitos reservados.</p>
              <div className="flex gap-4 text-xl">
                <i className="fa-brands fa-instagram hover:text-blue-600 cursor-pointer"></i>
                <i className="fa-brands fa-facebook hover:text-blue-600 cursor-pointer"></i>
                <i className="fa-brands fa-whatsapp hover:text-green-600 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
