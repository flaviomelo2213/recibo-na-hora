"use client";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsOpen(false)}>
      <div
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-stone-600">
            <i className="fa-solid fa-times" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 text-stone-700 font-medium">
          <Link href="/" className="px-3 py-2 hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
            Início
          </Link>

          <div className="border-t border-stone-200 my-2"></div>

          <div>
            <button
              onClick={() => toggleCategory('recibos')}
              className="w-full text-left px-3 py-2 hover:bg-amber-50 rounded transition flex items-center justify-between"
            >
              <span>Recibos</span>
              <i className={`fa-solid fa-chevron-${expandedCategory === 'recibos' ? 'up' : 'down'} text-xs`}></i>
            </button>
            {expandedCategory === 'recibos' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/recibos" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Ver Todos
                </Link>
                <Link href="/ferramentas/recibo-simples" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Recibo Simples
                </Link>
                <Link href="/ferramentas/recibo-pix" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Recibo com PIX
                </Link>
                <Link href="/ferramentas/imobiliario" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Recibo de Aluguel
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCategory('contratos')}
              className="w-full text-left px-3 py-2 hover:bg-amber-50 rounded transition flex items-center justify-between"
            >
              <span>Contratos</span>
              <i className={`fa-solid fa-chevron-${expandedCategory === 'contratos' ? 'up' : 'down'} text-xs`}></i>
            </button>
            {expandedCategory === 'contratos' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/contratos" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Ver Todos
                </Link>
                <Link href="/contrato-locacao" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Contrato de Locação
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCategory('procuracoes')}
              className="w-full text-left px-3 py-2 hover:bg-amber-50 rounded transition flex items-center justify-between"
            >
              <span>Procurações</span>
              <i className={`fa-solid fa-chevron-${expandedCategory === 'procuracoes' ? 'up' : 'down'} text-xs`}></i>
            </button>
            {expandedCategory === 'procuracoes' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/ferramentas/procuracao-plenos-poderes" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Plenos Poderes
                </Link>
                <Link href="/ferramentas/procuracao-inss" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  INSS
                </Link>
                <Link href="/ferramentas/procuracao-bancaria" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Bancária
                </Link>
                <Link href="/ferramentas/procuracao-imoveis" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Imóveis e Inventário
                </Link>
                <div className="border-t border-stone-200 my-1 mx-3"></div>
                <Link href="/ferramentas/procuracao" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Procuração Simples
                </Link>
                <Link href="/ferramentas/procuracao-profissional" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Procuração Profissional
                </Link>
              </div>
            )}
          </div>

          <div className="border-t border-stone-200 my-2"></div>

          <Link href="/orcamentos" className="px-3 py-2 hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
            Orçamentos
          </Link>
          <Link href="/requerimentos" className="px-3 py-2 hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
            Requerimentos
          </Link>
          <Link href="/apoio-corretor" className="px-3 py-2 hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-building mr-2" />
            Apoio ao Corretor
          </Link>
          <div>
            <button
              onClick={() => toggleCategory('blog')}
              className="w-full text-left px-3 py-2 hover:bg-amber-50 rounded transition flex items-center justify-between"
            >
              <span><i className="fa-solid fa-pen-nib mr-2" />Blog</span>
              <i className={`fa-solid fa-chevron-${expandedCategory === 'blog' ? 'up' : 'down'} text-xs`}></i>
            </button>
            {expandedCategory === 'blog' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/blog" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Ver Todos
                </Link>
                <Link href="/blog/como-fazer-recibo" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Como fazer um recibo
                </Link>
                <Link href="/blog/recibo-tem-validade-legal" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Recibo tem validade legal?
                </Link>
                <Link href="/blog/diferenca-recibo-nota-fiscal" className="block px-3 py-2 text-sm hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
                  Recibo vs Nota Fiscal
                </Link>
              </div>
            )}
          </div>
          <Link href="/recursos" className="px-3 py-2 hover:bg-amber-50 rounded transition" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-bookmark mr-2" />
            Recursos
          </Link>
          <Link href="/educacao-financeira" className="px-3 py-2 bg-blue-100 text-blue-700 rounded transition font-bold" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-graduation-cap mr-2" />
            Educação Financeira
          </Link>

          <div className="border-t border-stone-200 my-2"></div>

          <Link href="/parcerias" className="px-3 py-2 hover:bg-amber-50 rounded transition text-sm" onClick={() => setIsOpen(false)}>
            Parcerias
          </Link>
          <Link href="/como-ganhamos-dinheiro" className="px-3 py-2 hover:bg-amber-50 rounded transition text-sm" onClick={() => setIsOpen(false)}>
            Transparência
          </Link>
          <Link href="/contato" className="px-3 py-2 hover:bg-amber-50 rounded transition text-sm" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </nav>
      </div>
    </div>
  );
}
