"use client";

import { useState } from "react";
import { DollarSign, Calculator } from "lucide-react";

export default function FerramentaValeTransporte() {
  const [salarioBruto, setSalarioBruto] = useState("");
  const [custoTransporte, setCustoTransporte] = useState("");

  const salario = parseFloat(salarioBruto.replace(/[^\d]/g, "")) || 0;
  const custo = parseFloat(custoTransporte.replace(/[^\d]/g, "")) || 0;

  const descontoMaximo = salario * 0.06;
  const descontoReal = Math.min(descontoMaximo, custo);
  const empregadorPaga = custo - descontoReal;
  const valorLiquido = salario - descontoReal;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Calculadora de Vale-Transporte
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Calcule automaticamente o desconto de 6% do Vale-Transporte sobre o salário bruto e veja quanto o empregador deve arcar.
          </p>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 sm:p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="salario" className="block text-sm font-semibold text-slate-900 mb-2">
                Salário Bruto Mensal *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R$</span>
                <input
                  id="salario"
                  type="text"
                  value={salarioBruto}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, "");
                    setSalarioBruto(value);
                  }}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                  placeholder="2500"
                />
              </div>
              <p className="mt-1 text-xs text-slate-500">Salário antes dos descontos</p>
            </div>

            <div>
              <label htmlFor="custo" className="block text-sm font-semibold text-slate-900 mb-2">
                Custo Total do Transporte *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R$</span>
                <input
                  id="custo"
                  type="text"
                  value={custoTransporte}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, "");
                    setCustoTransporte(value);
                  }}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg font-semibold"
                  placeholder="150"
                />
              </div>
              <p className="mt-1 text-xs text-slate-500">Valor gasto com transporte no mês</p>
            </div>
          </div>

          {salario > 0 && custo > 0 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-blue-900" />
                  <h3 className="text-base font-bold text-blue-900">Resultado do Cálculo</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-blue-800 mb-1">Desconto do Empregado</div>
                    <div className="text-xl font-bold text-red-700">{formatCurrency(descontoReal)}</div>
                    <div className="text-xs text-slate-600 mt-1">Máx: {formatCurrency(descontoMaximo)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-800 mb-1">Empregador Paga</div>
                    <div className="text-xl font-bold text-green-700">{formatCurrency(empregadorPaga)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-800 mb-1">Salário Líquido</div>
                    <div className="text-xl font-bold text-blue-900">{formatCurrency(valorLiquido)}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
          <h3 className="font-bold text-amber-900 mb-3">Como Funciona o Vale-Transporte?</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 mt-0.5">•</span>
              <span><strong>Desconto Máximo:</strong> O empregador pode descontar até 6% do salário bruto do empregado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 mt-0.5">•</span>
              <span><strong>Custo Real:</strong> Se o transporte custar menos que 6% do salário, desconta-se apenas o valor real.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 mt-0.5">•</span>
              <span><strong>Diferença:</strong> O empregador arca com a diferença entre o custo total e o desconto do empregado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 mt-0.5">•</span>
              <span><strong>Legislação:</strong> Regido pela Lei nº 7.418/1985 e Decreto nº 95.247/1987.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
