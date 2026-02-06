"use client";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsOpen(false)}>
      <div
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-stone-600">
            <i className="fa-solid fa-times" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 text-stone-700 font-medium">
          <Link href="/" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link href="/ferramentas" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Todas as Ferramentas
          </Link>
          <Link href="/educacao-financeira" className="hover:text-blue-600 transition font-bold" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-graduation-cap mr-2" />
            Educação Financeira
          </Link>
          <Link href="/apoio-corretor" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-building mr-2" />
            Apoio ao Corretor
          </Link>
          <Link href="/requerimentos" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Requerimentos
          </Link>
          <Link href="/parcerias" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Parcerias
          </Link>
          <Link href="/como-ganhamos-dinheiro" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Transparência
          </Link>
          <Link href="/contato" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </nav>
      </div>
    </div>
  );
}
