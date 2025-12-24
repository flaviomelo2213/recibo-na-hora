'use client';

import React from 'react';
import Link from 'next/link';

export default function FerramentasHub() {
  const ferramentas = [
    // --- NOVIDADES JURÍDICAS & FINANCEIRAS (Destaque) ---
    { 
        slug: '/ferramentas/autorizacao-viagem', 
        titulo: "Autorização de Viagem Menor", 
        desc: "Modelo oficial (CNJ/Polícia Federal) para viagem nacional.", 
        icone: "fa-child-reaching", 
        cor: "pink" 
      },
      { 
        slug: '/gerar/recibo-salario', 
        titulo: "Recibo de Salário / Diarista", 
        desc: "Gera 2 vias (Patrão/Empregado). Ideal para domésticas e avulsos.", 
        icone: "fa-money-check-dollar", 
        cor: "blue" 
      },
      { 
        slug: '/ferramentas/nota-promissoria', 
        titulo: "Nota Promissória", 
        desc: "Gera título de crédito oficial com validade jurídica.", 
        icone: "fa-money-bill-transfer", 
        cor: "green" 
      },
      { 
        slug: '/ferramentas/procuracao-profissional', 
        titulo: "Procuração Profissional", 
        desc: "Para Advogados, Contadores e Engenheiros (OAB, CRC, CREA).", 
        icone: "fa-briefcase", 
        cor: "slate" 
      },

    // --- IMOBILIÁRIO ---
    { 
      slug: 'contrato-completo', 
      titulo: "Contrato de Aluguel Completo", 
      desc: "Gere um contrato seguro com vistoria, fiador/caução e cláusulas de multa.", 
      icone: "fa-file-signature", 
      cor: "indigo" 
    },
    { 
      slug: 'checklist-vistoria', 
      titulo: "Checklist de Vistoria", 
      desc: "Relatório profissional para entrada e saída de imóveis.", 
      icone: "fa-list-check", 
      cor: "teal" 
    },

    // --- MEI & UTILIDADE PÚBLICA ---
    { 
      slug: 'mei-relatorio', 
      titulo: "Relatório Mensal MEI", 
      desc: "Obrigatório para todo MEI. Controle sua receita bruta.", 
      icone: "fa-chart-line", 
      cor: "blue" 
    },
    { 
      slug: 'calculadora-rescisao', 
      titulo: "Calculadora Trabalhista", 
      desc: "Simule sua rescisão CLT: Férias, 13º, Multa FGTS e Saldo de Salário.", 
      icone: "fa-calculator", 
      cor: "green" 
    },
    
    // --- RECIBOS RÁPIDOS ---
    { 
      slug: '/gerar/recibo-pro', 
      titulo: "Recibo Profissional 2.0", 
      desc: "Com Logo, Assinatura e Parcelamento.", 
      icone: "fa-receipt", 
      cor: "green" 
    },
    { 
      slug: '/gerar/venda_veiculo', 
      titulo: "Recibo de Veículo", 
      desc: "Compra e venda para Carro e Moto.", 
      icone: "fa-car", 
      cor: "red" 
    },
    { 
      slug: 'prefeitura', 
      titulo: "Central do Cidadão", 
      desc: "Requerimentos de IPTU, Recursos de Multa e Zeladoria.", 
      icone: "fa-building-columns", 
      cor: "cyan" 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Ferramentas */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hub de Ferramentas</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Utilitários jurídicos e financeiros gratuitos.
          <span className="block mt-2 text-blue-400 font-bold">100% Grátis e Ilimitado.</span>
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ferramentas.map((ferramenta, idx) => (
            <Link 
              key={idx} 
              href={ferramenta.slug.startsWith('/') ? ferramenta.slug : `/ferramentas/${ferramenta.slug}`}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col"
            >
              <div className={`w-16 h-16 bg-${ferramenta.cor}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${ferramenta.icone} text-3xl text-${ferramenta.cor}-600`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {ferramenta.titulo}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                {ferramenta.desc}
              </p>
              
              <span className="text-blue-600 font-bold text-sm flex items-center bg-blue-50 w-fit px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all mt-auto">
                Acessar <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
