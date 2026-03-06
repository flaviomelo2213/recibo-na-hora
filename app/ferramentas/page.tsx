
import type { Metadata } from 'next';
import { Suspense } from 'react';
import FerramentasClient from './FerramentasClient';

export const metadata: Metadata = {
  title: 'Ferramentas para Gerar Documentos Online Grátis | Recibos, Contratos e Mais — ReciboNaHora',
  description: 'Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos, procurações e requerimentos em PDF. Para autônomos, MEI e pequenos negócios.',
  alternates: {
    canonical: 'https://recibonahora.com.br/ferramentas',
  },
  openGraph: {
    title: 'Ferramentas para Gerar Documentos Online Grátis | Recibos, Contratos e Mais — ReciboNaHora',
    description: 'Plataforma gratuita com mais de 20 ferramentas para gerar recibos, contratos, orçamentos, procurações e requerimentos em PDF. Para autônomos, MEI e pequenos negócios.',
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


        {/* Bloco AEO */}
        <section className="mb-10 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-6">
          <h2 className="text-xl font-bold text-indigo-900 mb-2">
            Como encontrar a ferramenta certa para gerar documentos?
          </h2>
          <p className="text-indigo-800 mb-4">
            Use o campo de busca para filtrar por nome ou descrição, ou selecione uma categoria no menu. Em segundos você encontra o gerador ideal e cria seu documento em PDF gratuitamente, sem cadastro e sem instalar nada.
          </p>
          <ol className="list-decimal list-inside space-y-1 text-indigo-700 mb-4">
            <li>Use a barra de busca ou filtre por categoria (recibos, contratos, orçamentos)</li>
            <li>Clique na ferramenta desejada e preencha o formulário online</li>
            <li>Gere e baixe o PDF pronto para imprimir ou enviar</li>
          </ol>
          <a href="/ferramentas" className="inline-block bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
            Ver todas as ferramentas →
          </a>
        </section>

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
