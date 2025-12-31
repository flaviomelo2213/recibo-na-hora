import type { Metadata } from "next";
import { Suspense } from "react";
import FerramentasClient from "./FerramentasClient";

export const metadata: Metadata = {
  title: "Ferramentas | ReciboNaHora",
  description:
    "Biblioteca de ferramentas gratuitas para gerar recibos, contratos, orçamentos e requerimentos. Busque por categoria e encontre o modelo ideal.",
  openGraph: {
    title: "Ferramentas | ReciboNaHora",
    description:
      "Biblioteca de ferramentas gratuitas para gerar recibos, contratos, orçamentos e requerimentos. Busque por categoria e encontre o modelo ideal.",
  },
};

export default function FerramentasPage() {
  return (
    <main className="bg-[#F8FAF0]">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Ferramentas
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Busque por nome, descrição ou categoria. Itens marcados como “Em breve” aparecem sem link.
          </p>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <FerramentasClient />
        </Suspense>
      </section>
    </main>
  );
}
