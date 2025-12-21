'use client';

import React from 'react';
import Link from 'next/link';

export default function FerramentasHub() {
  const ferramentas = [
    { 
      slug: 'checklist-vistoria', 
      titulo: "Checklist de Vistoria", 
      desc: "Gere um relatório profissional de entrada/saída de imóvel.", 
      icone: "fa-list-check", 
      cor: "blue" 
    },
    { 
      slug: 'calculadora-viabilidade', 
      titulo: "Alugar ou Financiar?", 
      desc: "Calculadora matemática para ajudar seu cliente a decidir.", 
      icone: "fa-calculator", 
      cor: "green" 
    },
    { 
      slug: '/gerar/recibo_aluguel', // Reutilizando o que já existe
      titulo: "Recibo de Aluguel Pro", 
      desc: "Emita recibos com cálculo de multa e juros automático.", 
      icone: "fa-file-invoice-dollar", 
      cor: "purple" 
    },
    { 
      slug: '/gerar/contrato_locacao', // Reutilizando
      titulo: "Contrato de Locação", 
      desc: "Minuta simples para fechamento rápido de negócio.", 
      icone: "fa-pen-nib", 
      cor: "orange" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Ferramentas */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hub do Corretor</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Ferramentas gratuitas para agilizar suas vendas e locações. 
          Gere leads qualificados e profissionalize seu atendimento.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ferramentas.map((ferramenta, idx) => (
            <Link 
              key={idx} 
              href={ferramenta.slug.startsWith('/') ? ferramenta.slug : `/ferramentas/${ferramenta.slug}`}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={`w-14 h-14 bg-${ferramenta.cor}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${ferramenta.icone} text-2xl text-${ferramenta.cor}-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{ferramenta.titulo}</h3>
              <p className="text-gray-500 text-sm mb-4">{ferramenta.desc}</p>
              <span className="text-blue-600 font-bold text-sm flex items-center">
                Acessar Ferramenta <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
{ 
      slug: 'prefeitura', 
      titulo: "Central do Cidadão", 
      desc: "Requerimentos de IPTU, Recursos de Multa e Zeladoria.", 
      icone: "fa-building-columns", 
      cor: "blue" 
    },
