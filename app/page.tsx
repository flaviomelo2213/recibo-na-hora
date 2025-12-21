'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');

  // O SEU INVENTÁRIO MESTRE (Adicionei o campo 'link' para funcionar)
  const documentos = [
    // Financeiro
    { id: 'recibo_simples', titulo: "Recibo Simples", desc: "Pagamentos diversos e vendas rápidas.", icone: "fa-receipt", cat: "financeiro", cor: "blue" },
    { id: 'nota_promissoria', titulo: "Nota Promissória", desc: "Promessa de pagamento com validade legal.", icone: "fa-file-signature", cat: "financeiro", cor: "indigo" },
    { id: 'vale', titulo: "Vale / Adiantamento", desc: "Comprovante de adiantamento para funcionários.", icone: "fa-money-bill-wave", cat: "financeiro", cor: "green" },
    
    // Veículos (Seu Nicho)
    { id: 'venda_veiculo', titulo: "Venda de Veículo", desc: "Contrato de compra e venda (Carro/Moto).", icone: "fa-car", cat: "veiculos", cor: "orange" },
    { id: 'sinal_veiculo', titulo: "Recibo de Sinal", desc: "Garanta o negócio com segurança.", icone: "fa-hand-holding-dollar", cat: "veiculos", cor: "orange" },
    
    // Imóveis
    { id: 'recibo_aluguel', titulo: "Recibo de Aluguel", desc: "Para locadores e inquilinos.", icone: "fa-house", cat: "imoveis", cor: "teal" },
    
    // Serviços / Oceano Azul
    { id: 'declaracao_uber', titulo: "Renda Uber/Autônomo", desc: "Comprovante de ganhos para bancos/lojas.", icone: "fa-id-card", cat: "servicos", cor: "purple" },
    { id: 'orcamento', titulo: "Orçamento", desc: "Orçamento profissional para serviços.", icone: "fa-calculator", cat: "servicos", cor: "blue" },
  ];

  const docsFiltrados = categoriaAtiva === 'todos' ? documentos : documentos.filter(doc => doc.cat === categoriaAtiva);

  return (
    <div className="max-w-7xl mx-auto pb-20">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-b from-blue-50 to-white rounded-b-3xl mb-12 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Qual documento você precisa hoje?
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-4">
          Gerador de documentos gratuito, rápido e seguro. <br/>
          <span className="text-blue-600 font-bold">Sem cadastro. Sem enrolação.</span>
        </p>
      </div>

      {/* Navegação */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-4">
        {[
          { id: 'todos', label: 'Todos', icon: 'fa-layer-group' },
          { id: 'financeiro', label: 'Dinheiro', icon: 'fa-wallet' },
          { id: 'veiculos', label: 'Veículos', icon: 'fa-car' },
          { id: 'imoveis', label: 'Imóveis', icon: 'fa-house' },
          { id: 'servicos', label: 'Serviços', icon: 'fa-briefcase' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCategoriaAtiva(tab.id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 border
              ${categoriaAtiva === tab.id 
                ? 'bg-slate-800 text-white border-slate-800 shadow-md' 
                : 'bg-white text-slate-600 hover:bg-gray-50 border-gray-200'}`}
          >
            <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
          </button>
        ))}
      </div>

      {/* Grid de Cards (Agora com Links!) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {docsFiltrados.map((doc) => (
          <Link href={`/gerar/${doc.id}`} key={doc.id} className="group no-underline">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all h-full flex flex-col items-start relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-20 h-20 bg-${doc.cor}-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150`}></div>
              
              <div className={`w-12 h-12 rounded-lg bg-${doc.cor}-100 flex items-center justify-center mb-4 relative z-10`}>
                <i className={`fa-solid ${doc.icone} text-xl text-${doc.cor}-600`}></i>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors relative z-10">
                {doc.titulo}
              </h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow relative z-10">
                {doc.desc}
              </p>
              
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center mt-auto relative z-10">
                Preencher <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
