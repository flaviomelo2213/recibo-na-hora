'use client';
import React, { useState } from 'react';

export default function CalculadoraRescisao() {
  const [salario, setSalario] = useState('');
  const [mesesTrabalhados, setMesesTrabalhados] = useState('');
  const [feriasVencidas, setFeriasVencidas] = useState(false);
  const [avisoPrevio, setAvisoPrevio] = useState('trabalhado'); // trabalhado, indenizado, nao
  const [resultado, setResultado] = useState<any>(null);

  const calcular = () => {
    const sal = parseFloat(salario);
    const meses = parseInt(mesesTrabalhados);
    
    if (!sal || !meses) return;

    const saldoSalario = sal; // Simplificado para exemplo
    const decimoTerceiro = (sal / 12) * meses;
    const feriasProp = (sal / 12) * meses + ((sal / 12) * meses) / 3;
    const valorFeriasVencidas = feriasVencidas ? (sal + sal/3) : 0;
    
    let total = saldoSalario + decimoTerceiro + feriasProp + valorFeriasVencidas;

    setResultado({
        saldoSalario, decimoTerceiro, feriasProp, valorFeriasVencidas, total
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
        <div className="bg-green-700 text-white p-6 text-center">
             <h1 className="text-2xl font-bold"><i className="fa-solid fa-calculator"></i> Calculadora de Rescisão CLT</h1>
             <p className="text-green-100 text-sm">Simule seus direitos trabalhistas (Férias, 13º e Saldo).</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-700">Último Salário Bruto (R$)</label>
                <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} placeholder="Ex: 2500.00" className="w-full p-3 border rounded bg-gray-50" />
                
                <label className="block text-sm font-bold text-slate-700">Meses Trabalhados no Ano</label>
                <input type="number" value={mesesTrabalhados} onChange={(e) => setMesesTrabalhados(e.target.value)} placeholder="Ex: 8" className="w-full p-3 border rounded bg-gray-50" />

                <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" checked={feriasVencidas} onChange={(e) => setFeriasVencidas(e.target.checked)} id="ferias" className="w-5 h-5" />
                    <label htmlFor="ferias" className="text-slate-700">Tenho férias vencidas (1 ano sem tirar)</label>
                </div>

                <button onClick={calcular} className="w-full mt-4 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                    CALCULAR AGORA
                </button>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Resultado da Simulação</h3>
                {resultado ? (
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between"><span>Saldo de Salário:</span> <strong>R$ {resultado.saldoSalario.toFixed(2)}</strong></div>
                        <div className="flex justify-between"><span>13º Proporcional:</span> <strong>R$ {resultado.decimoTerceiro.toFixed(2)}</strong></div>
                        <div className="flex justify-between"><span>Férias + 1/3:</span> <strong>R$ {resultado.feriasProp.toFixed(2)}</strong></div>
                        {resultado.valorFeriasVencidas > 0 && <div className="flex justify-between text-blue-600"><span>Férias Vencidas:</span> <strong>R$ {resultado.valorFeriasVencidas.toFixed(2)}</strong></div>}
                        <div className="border-t border-green-300 pt-3 mt-3 flex justify-between text-lg font-bold text-green-900">
                            <span>TOTAL ESTIMADO:</span> <span>R$ {resultado.total.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-green-700 mt-4 text-center">* Valores aproximados. Não substitui cálculo contábil oficial.</p>
                    </div>
                ) : (
                    <div className="text-center text-green-700/50 py-10">
                        <i className="fa-solid fa-calculator text-4xl mb-2"></i>
                        <p>Preencha os dados ao lado para ver o resultado.</p>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* --- TEXTO RICO PARA SEO (MONETIZAÇÃO) --- */}
      <section className="max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Entenda seu Cálculo de Rescisão</h2>
        
        <p className="text-slate-600 mb-6 leading-relaxed">
            A <strong>rescisão de contrato de trabalho</strong> é o momento em que se encerra o vínculo entre empresa e funcionário. Saber calcular os valores corretos é essencial para não sair no prejuízo. Nossa calculadora online ajuda você a ter uma estimativa precisa dos seus direitos baseada na CLT (Consolidação das Leis do Trabalho).
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">💰 O que é Saldo de Salário?</h3>
                <p className="text-sm text-slate-500">São os dias que você trabalhou no mês da demissão. Se você saiu no dia 15, deve receber pelos 15 dias trabalhados.</p>
             </div>
             <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold text-slate-800 mb-2 text-lg">🏖️ Férias Proporcionais</h3>
                <p className="text-sm text-slate-500">Para cada mês que você trabalhou mais de 14 dias, você ganha o direito a 1/12 avos de férias, sempre com o acréscimo de 1/3 constitucional.</p>
             </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Diferença entre Demissão e Pedido de Demissão</h3>
        <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                    <strong>Demissão sem Justa Causa:</strong> O patrão te demite. Você recebe tudo: Aviso prévio, Férias, 13º e a Multa de 40% do FGTS. Também pode sacar o FGTS e pedir Seguro-Desemprego.
                </div>
            </li>
            <li className="flex gap-4 items-start">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                    <strong>Pedido de Demissão:</strong> Você pede para sair. Você recebe Férias e 13º, mas <strong>NÃO</strong> saca o FGTS, não recebe a multa de 40% e não tem direito ao Seguro-Desemprego.
                </div>
            </li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mt-8">
            <h4 className="font-bold text-yellow-800 mb-2">💡 Dica de Ouro: Onde encontrar as informações?</h4>
            <p className="text-sm text-yellow-900">
                Para usar a calculadora com exatidão, pegue sua <strong>Carteira de Trabalho Digital</strong> ou seu último <strong>Holerite</strong>. Lá você encontra a data exata de admissão e o valor bruto do seu salário (sem os descontos de INSS/Vale Transporte).
            </p>
        </div>
      </section>
    </div>
  );
}
