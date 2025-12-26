'use client';

import { useState } from 'react';

export default function FerramentaValeTransporte() {
  const [salarioBruto, setSalarioBruto] = useState('');
  const [gastoTransporte, setGastoTransporte] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularDesconto = () => {
    const salario = parseFloat(salarioBruto);
    const transporte = parseFloat(gastoTransporte);

    if (isNaN(salario) || isNaN(transporte)) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const descontoMaximo = salario * 0.06;
    const descontoFinal = Math.min(descontoMaximo, transporte);

    setResultado(`O desconto do vale-transporte será de R$ ${descontoFinal.toFixed(2)}`);
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold text-stone-800 mb-4'>Calculadora de Vale-Transporte</h2>
      <div className='space-y-4'>
        <input
          type='number'
          placeholder='Salário Bruto (R$)'
          className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
          value={salarioBruto}
          onChange={(e) => setSalarioBruto(e.target.value)}
        />
        <input
          type='number'
          placeholder='Gasto Mensal com Transporte (R$)'
          className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
          value={gastoTransporte}
          onChange={(e) => setGastoTransporte(e.target.value)}
        />
        <button
          onClick={calcularDesconto}
          className='w-full bg-stone-800 text-amber-50 font-bold py-3 px-4 rounded-md hover:bg-stone-900 transition-colors'
        >
          Calcular Desconto
        </button>
        {resultado && (
          <div className='p-4 bg-amber-100 border border-amber-200 text-amber-800 rounded-md'>
            {resultado}
          </div>
        )}
      </div>
    </div>
  );
}
