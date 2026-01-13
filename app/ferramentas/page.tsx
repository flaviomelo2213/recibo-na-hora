
import type { Metadata } from 'next';
import { Suspense } from 'react';
import FerramentasClient from './FerramentasClient';

export const metadata: Metadata = {
  title: 'Ferramentas | ReciboNaHora',
  description: 'Biblioteca de ferramentas gratuitas para gerar recibos, contratos, orçamentos e requerimentos. Busque por categoria e encontre o modelo ideal.',
  openGraph: {
    title: 'Ferramentas | ReciboNaHora',
    description: 'Biblioteca de ferramentas gratuitas para gerar recibos, contratos, orçamentos e requerimentos. Busque por categoria e encontre o modelo ideal.',
  }
};

export default function FerramentasPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Nossas Ferramentas
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore nossa coleção de geradores de documentos. Busque por nome, descrição ou filtre por categoria para encontrar exatamente o que você precisa.
          </p>
        </header>

        {/* O Suspense é usado para aguardar o carregamento do FerramentasClient, que é um Client Component. */}
        <Suspense 
          fallback={
            <div className="text-center">
              <i className="fa-solid fa-spinner fa-spin text-4xl text-slate-500"></i>
              <p className="mt-2 text-slate-600">Carregando ferramentas...</p>
            </div>
          }
        >
          <FerramentasClient />
        </Suspense>
      </section>
    </main>
  );
}
