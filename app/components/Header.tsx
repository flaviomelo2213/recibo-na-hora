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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="/" className="hover:text-amber-600 transition">
              Início
            </a>
            <a
              href="/ferramentas"
              className="text-amber-700 font-bold hover:text-amber-800 transition flex items-center gap-2 bg-amber-100 px-3 py-1.5 rounded-full"
            >
              <i className="fa-solid fa-layer-group" /> Ferramentas
            </a>
            <a
              href="/educacao-financeira"
              className="text-blue-700 font-bold hover:text-blue-800 transition flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-full"
            >
              <i className="fa-solid fa-graduation-cap" /> Educação Financeira
            </a>
            <a href="/apoio-corretor" className="hover:text-amber-600 transition">
              Corretor
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
            <a href="/contato" className="hover:text-amber-600 transition">
              Contato
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
