'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function CalculadoraRescisao() {
  const [dados, setDados] = useState({
    nome: '',
    cargo: '',
    salario: '',
    inicio: '',
    fim: '',
    motivo: 'sem_justa_causa',
    saldoFgts: ''
  });

  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    // Tratamento de valores
    const salario = parseFloat(dados.salario.replace(',', '.'));
    if (isNaN(salario) || !dados.inicio || !dados.fim) {
      alert("Por favor, preencha os valores corretamente.");
      return;
    }

    const inicio = new Date(dados.inicio);
    const fim = new Date(dados.fim);
    
    // Diferença em meses e dias
    const diffTime = Math.abs(fim.getTime() - inicio.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Cálculo de meses trabalhados no ano corrente (para 13º)
    const mesesTrabalhadosAno = fim.getMonth() + 1; 
    
    // Cálculos CLT (Estimativas)
    const saldoSalario = (salario / 30) * fim.getDate(); // Dias trabalhados no mês da saída
    const decimoTerceiro = (salario / 12) * mesesTrabalhadosAno; // Proporcional
    const feriasVencidas = (salario / 12) * mesesTrabalhadosAno; // Férias Proporcionais
    const tercoFerias = feriasVencidas / 3; // 1/3 Constitucional
    
    // Multa FGTS (Apenas se demitido sem justa causa)
    const multaFgts = dados.motivo === 'sem_justa_causa' ? (parseFloat(dados.saldoFgts || '0') * 0.4) : 0;

    // Aviso Prévio (Estimado: 30 dias + 3 dias por ano trabalhado)
    const anosTrabalhados = Math.floor(diffDays / 365);
    const diasAviso = 30 + (anosTrabalhados * 3);
    const valorAviso = dados.motivo === 'sem_justa_causa' ? ((salario / 30) * diasAviso) : 0;

    const total = saldoSalario + decimoTerceiro + feriasVencidas + tercoFerias + multaFgts + valorAviso;

    setResultado({
      diasTrabalhados: diffDays,
      saldoSalario,
      decimoTerceiro,
      feriasProporcionais: feriasVencidas + tercoFerias,
      multaFgts,
      valorAviso,
      total
    });
  };

  const gerarPDF = () => {
    if (!resultado) return;
    const doc = new jsPDF();
    
    // Cabeçalho Profissional
    doc.setFillColor(33, 37, 41); // Cor escura (Slate 900)
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("SIMULAÇÃO DE RESCISÃO", 105, 20, { align: "center" });
    doc.setFontSize(10);
    doc.text("Baseado na Consolidação das Leis do Trabalho (CLT)", 105, 30, { align: "center" });
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    
    let y = 60;
    doc.setFont("helvetica", "bold");
    doc.text("DADOS DO CONTRATO", 20, y);
    doc.setFont("helvetica", "normal");
    y += 10;
    
    doc.text(`Funcionário: ${dados.nome.toUpperCase() || 'NÃO INFORMADO'}`, 20, y);
    doc.text(`Cargo: ${dados.cargo.toUpperCase() || '-'}`, 120, y);
    y += 10;
    doc.text(`Admissão: ${dados.inicio.split('-').reverse().join('/')}`, 20, y);
    doc.text(`Saída: ${dados.fim.split('-').reverse().join('/')}`, 120, y);
    y += 10;
    doc.text(`Motivo: ${dados.motivo === 'sem_justa_causa' ? 'Demissão sem Justa Causa' : 'Pedido de Demissão'}`, 20, y);
    
    doc.line(20, y+5, 190, y+5);
    y += 15;

    // Detalhamento Financeiro
    doc.setFont("helvetica", "bold");
    doc.text("DETALHAMENTO DOS VALORES (ESTIMATIVA)", 20, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    
    const linha = (texto: string, valor: number) => {
        doc.text(texto, 20, y);
        doc.text(`R$ ${valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 160, y);
        y += 8;
    };

    linha("Saldo de Salário:", resultado.saldoSalario);
    linha("13º Salário Proporcional:", resultado.decimoTerceiro);
    linha("Férias Proporcionais + 1/3:", resultado.feriasProporcionais);
    if(resultado.valorAviso > 0) linha("Aviso Prévio Indenizado:", resultado.valorAviso);
    if(resultado.multaFgts > 0) linha("Multa 40% FGTS:", resultado.multaFgts);

    y += 10;
    doc.setDrawColor(0);
    doc.setFillColor(240, 240, 240);
    doc.rect(20, y-5, 170, 15, 'F');
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL LÍQUIDO ESTIMADO:", 25, y+5);
    doc.text(`R$ ${resultado.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 160, y+5);

    // Rodapé Legal e Branding
    y = 260;
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text("AVISO LEGAL: Este documento é apenas uma simulação para fins informativos.", 105, y, { align: "center" });
    doc.text("Os valores reais podem variar dependendo de convenções coletivas, descontos de INSS/IRRF e outros.", 105, y+5, { align: "center" });
    
    doc.setDrawColor(200);
    doc.line(50, y+15, 160, y+15);
    
    doc.setFontSize(9);
    doc.setTextColor(0);
    doc.text("Gerado por ReciboNaHora.com.br", 105, y+25, { align: "center" });
    doc.text("Via Certa Digital - CNPJ 27.779.948/0001-43", 105, y+30, { align: "center" });
    
    doc.save("calculo-rescisao.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Topo da Calculadora */}
        <div className="bg-slate-900 text-white p-8 text-center">
          <h1 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3">
            <i className="fa-solid fa-calculator text-blue-400"></i> Calculadora Trabalhista
          </h1>
          <p className="text-slate-300">Simule sua rescisão de contrato (CLT) de forma rápida e segura.</p>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Inputs Pessoais */}
            <div className="space-y-5">
              <h3 className="font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                <i className="fa-solid fa-user text-blue-600"></i> Dados do Contrato
              </h3>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ex: João Silva" onChange={e => setDados({...dados, nome: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Data Admissão</label>
                    <input type="date" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setDados({...dados, inicio: e.target.value})} />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Data Saída</label>
                    <input type="date" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" onChange={e => setDados({...dados, fim: e.target.value})} />
                 </div>
              </div>
            </div>

            {/* Inputs Financeiros */}
            <div className="space-y-5">
              <h3 className="font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
                <i className="fa-solid fa-money-bill-wave text-green-600"></i> Valores
              </h3>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Salário Bruto (R$)</label>
                <input type="number" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ex: 2500.00" onChange={e => setDados({...dados, salario: e.target.value})} />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Motivo da Saída</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white" onChange={e => setDados({...dados, motivo: e.target.value})}>
                  <option value="sem_justa_causa">Demissão sem Justa Causa</option>
                  <option value="pedido_demissao">Pedido de Demissão</option>
                  <option value="justa_causa">Demissão por Justa Causa</option>
                </select>
              </div>

              {dados.motivo === 'sem_justa_causa' && (
                <div className="animate-fade-in-down">
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Saldo do FGTS (R$)</label>
                    <input type="number" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Para cálculo da multa de 40%" onChange={e => setDados({...dados, saldoFgts: e.target.value})} />
                </div>
              )}
            </div>
          </div>

          <button onClick={calcular} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] mb-8 text-lg">
            <i className="fa-solid fa-calculator mr-2"></i> Calcular Rescisão
          </button>

          {/* Área de Resultados */}
          {resultado && (
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 animate-fade-in">
              <h3 className="text-xl font-bold text-green-900 mb-6 text-center border-b border-green-200 pb-4">
                Resumo da Simulação
              </h3>
              
              <div className="space-y-4 text-green-900 text-sm md:text-base">
                <div className="flex justify-between">
                    <span>Saldo de Salário:</span>
                    <span className="font-bold">R$ {resultado.saldoSalario.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                    <span>13º Proporcional:</span>
                    <span className="font-bold">R$ {resultado.decimoTerceiro.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                    <span>Férias + 1/3:</span>
                    <span className="font-bold">R$ {resultado.feriasProporcionais.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
                {resultado.multaFgts > 0 && (
                    <div className="flex justify-between">
                        <span>Multa 40% FGTS:</span>
                        <span className="font-bold">R$ {resultado.multaFgts.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                    </div>
                )}
                {resultado.valorAviso > 0 && (
                    <div className="flex justify-between">
                        <span>Aviso Prévio:</span>
                        <span className="font-bold">R$ {resultado.valorAviso.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                    </div>
                )}
                
                <div className="flex justify-between text-2xl font-extrabold text-green-800 pt-4 border-t border-green-200 mt-4">
                    <span>TOTAL LÍQUIDO:</span>
                    <span>R$ {resultado.total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button onClick={gerarPDF} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors">
                    <i className="fa-solid fa-file-pdf text-xl"></i> Baixar Relatório PDF
                </button>
                <button onClick={() => setResultado(null)} className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-xl border border-gray-300 transition-colors">
                    Nova Simulação
                </button>
              </div>
              
              <p className="text-xs text-center text-green-800 mt-6 opacity-70">
                * Valores estimados para fins de simulação. Não substitui o cálculo oficial do contador ou homologação.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
