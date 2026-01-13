
'use client';
import React, { useState } from 'react';

interface Resultado {
  saldoSalario: number;
  decimoTerceiro: number;
  feriasProp: number;
  valorFeriasVencidas: number;
  total: number;
}

export default function RescisaoCalculator() {
  const [salario, setSalario] = useState('');
  const [mesesTrabalhados, setMesesTrabalhados] = useState('');
  const [feriasVencidas, setFeriasVencidas] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const calcular = () => {
    const sal = parseFloat(salario);
    const meses = parseInt(mesesTrabalhados);
    
    if (isNaN(sal) || isNaN(meses) || sal <= 0 || meses <= 0) {
        alert('Por favor, preencha o salário e os meses trabalhados com valores válidos.');
        return;
    }

    const saldoSalario = sal; // Simplificado
    const decimoTerceiro = (sal / 12) * meses;
    const feriasProp = (sal / 12) * meses + ((sal / 12) * meses) / 3;
    const valorFeriasVencidas = feriasVencidas ? (sal + sal/3) : 0;
    
    const total = saldoSalario + decimoTerceiro + feriasProp + valorFeriasVencidas;

    setResultado({
        saldoSalario,
        decimoTerceiro,
        feriasProp,
        valorFeriasVencidas,
        total
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="bg-slate-800 text-white p-6">
        <h2 className="text-2xl font-bold text-center">Calculadora de Rescisão Trabalhista (CLT)</h2>
        <p className="text-slate-300 text-center mt-2">Estime os principais valores a receber em uma demissão sem justa causa.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Coluna de Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="salario" className="block text-sm font-bold text-slate-700 mb-2">Salário Bruto (R$)</label>
            <input id="salario" type="number" value={salario} onChange={(e) => setSalario(e.target.value)} placeholder="Ex: 3000.00" className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-indigo-500" />
          </div>
          
          <div>
            <label htmlFor="meses" className="block text-sm font-bold text-slate-700 mb-2">Meses Trabalhados no Ano</label>
            <input id="meses" type="number" value={mesesTrabalhados} onChange={(e) => setMesesTrabalhados(e.target.value)} placeholder="Ex: 6" className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <input id="ferias" type="checkbox" checked={feriasVencidas} onChange={(e) => setFeriasVencidas(e.target.checked)} className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
            <label htmlFor="ferias" className="text-slate-700 font-medium">Possuo férias vencidas (não gozadas há mais de 1 ano)</label>
          </div>

          <button onClick={calcular} className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Calcular Rescisão
          </button>
        </div>

        {/* Coluna de Resultados */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
          <h3 className="font-bold text-slate-800 text-xl mb-4 text-center border-b border-slate-200 pb-3">Resultado da Estimativa</h3>
          {resultado ? (
            <div className="space-y-4">
              <ResultRow label="Saldo de Salário" value={resultado.saldoSalario} />
              <ResultRow label="13º Proporcional" value={resultado.decimoTerceiro} />
              <ResultRow label="Férias Proporcionais + 1/3" value={resultado.feriasProp} />
              {resultado.valorFeriasVencidas > 0 && <ResultRow label="Férias Vencidas + 1/3" value={resultado.valorFeriasVencidas} isHighlight />}
              
              <div className="border-t-2 border-slate-300 border-dashed pt-4 mt-4 text-center">
                <p className="text-sm text-slate-600">Valor Bruto Estimado</p>
                <p className="text-3xl font-bold text-indigo-700">R$ {resultado.total.toFixed(2)}</p>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">* Esta é uma simulação para fins didáticos. O valor final pode variar e não inclui descontos de INSS, IRRF, nem o saque do FGTS e multa de 40%.</p>
            </div>
          ) : (
            <div className="text-center text-slate-500 py-10">
              <i className="fa-solid fa-file-invoice-dollar text-5xl mb-4 text-slate-400"></i>
              <p className="font-medium">Preencha os campos ao lado para simular o cálculo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ResultRowProps {
    label: string;
    value: number;
    isHighlight?: boolean;
}

const ResultRow = ({ label, value, isHighlight }: ResultRowProps) => (
    <div className={`flex justify-between items-center p-3 rounded-lg ${isHighlight ? 'bg-indigo-100' : 'bg-white'}`}>
        <span className={`text-sm font-medium ${isHighlight ? 'text-indigo-800' : 'text-slate-600'}`}>{label}:</span>
        <strong className={`text-md font-bold ${isHighlight ? 'text-indigo-800' : 'text-slate-800'}`}>R$ {value.toFixed(2)}</strong>
    </div>
);
