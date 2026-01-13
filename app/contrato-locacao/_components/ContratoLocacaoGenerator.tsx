
'use client';
import React, { useState } from 'react';

export default function ContratoLocacaoGenerator() {
  // Basic state for the contract form
  const [locador, setLocador] = useState('');
  const [locatario, setLocatario] = useState('');
  const [imovel, setImovel] = useState('');
  const [valor, setValor] = useState('');

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Formulário */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Dados do Contrato</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="locador" className="block text-sm font-medium text-slate-700">Nome do Locador</label>
            <input type="text" id="locador" value={locador} onChange={(e) => setLocador(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: João da Silva" />
          </div>
          <div>
            <label htmlFor="locatario" className="block text-sm font-medium text-slate-700">Nome do Locatário</label>
            <input type="text" id="locatario" value={locatario} onChange={(e) => setLocatario(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Maria Oliveira" />
          </div>
          <div>
            <label htmlFor="imovel" className="block text-sm font-medium text-slate-700">Endereço do Imóvel</label>
            <input type="text" id="imovel" value={imovel} onChange={(e) => setImovel(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: Rua das Flores, 123, São Paulo, SP" />
          </div>
          <div>
            <label htmlFor="valor" className="block text-sm font-medium text-slate-700">Valor do Aluguel (R$)</label>
            <input type="number" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Ex: 1500.00" />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Visualização</h2>
        <div className="prose prose-sm">
          <p><strong>LOCADOR:</strong> {locador || '...'}</p>
          <p><strong>LOCATÁRIO:</strong> {locatario || '...'}</p>
          <p><strong>IMÓVEL:</strong> {imovel || '...'}</p>
          <p><strong>VALOR DO ALUGUEL:</strong> R$ {valor || '...'}</p>
          <p className="text-xs text-slate-500 mt-8">Este é um modelo simplificado. A versão completa com todas as cláusulas será gerada em PDF.</p>
        </div>
      </div>
    </div>
  );
}
