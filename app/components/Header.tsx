'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 glass-effect border-b border-stone-200 shadow-sm">
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
          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-stone-600">
            <a href="/" className="hover:text-amber-600 transition">
              Início
            </a>

            <div className="relative group">
              <button className="hover:text-amber-600 transition flex items-center gap-1 py-2">
                Recibos <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/recibos" className="block px-4 py-2 hover:bg-amber-50 transition">Ver Todos os Recibos</a>
                  <a href="/ferramentas/recibo-simples" className="block px-4 py-2 hover:bg-amber-50 transition">Recibo Simples</a>
                  <a href="/ferramentas/recibo-pix" className="block px-4 py-2 hover:bg-amber-50 transition">Recibo com PIX</a>
                  <a href="/ferramentas/imobiliario" className="block px-4 py-2 hover:bg-amber-50 transition">Recibo de Aluguel</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-amber-600 transition flex items-center gap-1 py-2">
                Contratos <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/contratos" className="block px-4 py-2 hover:bg-amber-50 transition">Ver Todos os Contratos</a>
                  <a href="/contrato-locacao" className="block px-4 py-2 hover:bg-amber-50 transition">Contrato de Locação</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-amber-600 transition flex items-center gap-1 py-2">
                Procurações <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/ferramentas/procuracao-plenos-poderes" className="block px-4 py-2 hover:bg-amber-50 transition">Plenos Poderes</a>
                  <a href="/ferramentas/procuracao-inss" className="block px-4 py-2 hover:bg-amber-50 transition">INSS</a>
                  <a href="/ferramentas/procuracao-bancaria" className="block px-4 py-2 hover:bg-amber-50 transition">Bancária</a>
                  <a href="/ferramentas/procuracao-imoveis" className="block px-4 py-2 hover:bg-amber-50 transition">Imóveis e Inventário</a>
                  <div className="border-t border-stone-200 my-1"></div>
                  <a href="/ferramentas/procuracao" className="block px-4 py-2 hover:bg-amber-50 transition">Procuração Simples</a>
                  <a href="/ferramentas/procuracao-profissional" className="block px-4 py-2 hover:bg-amber-50 transition">Procuração Profissional</a>
                </div>
              </div>
            </div>

            <a href="/orcamentos" className="hover:text-amber-600 transition">
              Orçamentos
            </a>
            <a href="/apoio-corretor" className="hover:text-amber-600 transition">
              Corretor
            </a>
            <a href="/requerimentos" className="hover:text-amber-600 transition">
              Requerimentos
            </a>
            <div className="relative group">
              <button className="hover:text-amber-600 transition flex items-center gap-1 py-2">
                Blog <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/blog" className="block px-4 py-2 hover:bg-amber-50 transition">Ver Todos os Posts</a>
                  <a href="/blog/como-fazer-recibo" className="block px-4 py-2 hover:bg-amber-50 transition">Como fazer um recibo</a>
                  <a href="/blog/recibo-tem-validade-legal" className="block px-4 py-2 hover:bg-amber-50 transition">Recibo tem validade legal?</a>
                  <a href="/blog/diferenca-recibo-nota-fiscal" className="block px-4 py-2 hover:bg-amber-50 transition">Recibo vs Nota Fiscal</a>
                </div>
              </div>
            </div>
            <a href="/recursos" className="hover:text-amber-600 transition">
              Recursos
            </a>
            <a
              href="/educacao-financeira"
              className="text-blue-700 font-bold hover:text-blue-800 transition flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-full"
            >
              <i className="fa-solid fa-graduation-cap" /> Educação
            </a>
          </nav>

          {/* Botão do Menu Mobile */}
          <button
            type="button"
            className="md:hidden text-stone-600 text-2xl p-2"
            aria-label="Abrir menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </header>

      {/* Componente do Menu Mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
}
