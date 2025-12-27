"use client";
import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

export interface ProcuracaoData {
  outorganteNome: string;
  outorganteCPF: string;
  outorganteRG: string;
  outorganteEndereco: string;
  outorgadoNome: string;
  outorgadoCPF: string;
  outorgadoRG: string;
  outorgadoEndereco: string;
  poderes: string;
  cidade: string;
  data: string;
}

interface FerramentaProcuracaoProfissionalProps {
  data: ProcuracaoData;
  setData: React.Dispatch<React.SetStateAction<ProcuracaoData>>;
}

export default function FerramentaProcuracaoProfissional({ data, setData }: FerramentaProcuracaoProfissionalProps) {
  
  useEffect(() => {
    if (!data.data) {
      const today = new Date().toISOString().split('T')[0];
      setData(prev => ({ ...prev, data: today }));
    }
  }, [data.data, setData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const text = `
      PROCURAÇÃO

      OUTORGANTE: ${data.outorganteNome}, CPF nº ${data.outorganteCPF}, RG nº ${data.outorganteRG}, residente e domiciliado(a) em ${data.outorganteEndereco}.

      OUTORGADO: ${data.outorgadoNome}, CPF nº ${data.outorgadoCPF}, RG nº ${data.outorgadoRG}, com endereço em ${data.outorgadoEndereco}.

      PODERES: Pelo presente instrumento, o outorgante nomeia e constitui seu bastante procurador o outorgado para o fim específico de: ${data.poderes}.

      ${data.cidade}, ${new Date(data.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}.

      _________________________________________
      ${data.outorganteNome}
    `;
    doc.text(text, 10, 10);
    doc.save("procuracao.pdf");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Outorgante (Quem concede os poderes)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="outorganteNome" value={data.outorganteNome} onChange={handleChange} placeholder="Nome Completo" className="p-2 border rounded" />
          <input type="text" name="outorganteCPF" value={data.outorganteCPF} onChange={handleChange} placeholder="CPF" className="p-2 border rounded" />
          <input type="text" name="outorganteRG" value={data.outorganteRG} onChange={handleChange} placeholder="RG" className="p-2 border rounded" />
          <input type="text" name="outorganteEndereco" value={data.outorganteEndereco} onChange={handleChange} placeholder="Endereço Completo" className="p-2 border rounded sm:col-span-2" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Outorgado (Quem recebe os poderes)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="outorgadoNome" value={data.outorgadoNome} onChange={handleChange} placeholder="Nome Completo do Profissional/Representante" className="p-2 border rounded" />
          <input type="text" name="outorgadoCPF" value={data.outorgadoCPF} onChange={handleChange} placeholder="CPF/CNPJ" className="p-2 border rounded" />
          <input type="text" name="outorgadoRG" value={data.outorgadoRG} onChange={handleChange} placeholder="RG/Inscrição Profissional" className="p-2 border rounded" />
          <input type="text" name="outorgadoEndereco" value={data.outorgadoEndereco} onChange={handleChange} placeholder="Endereço Profissional" className="p-2 border rounded sm:col-span-2" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Detalhes da Procuração</h3>
        <div className="grid grid-cols-1 gap-4">
          <textarea name="poderes" value={data.poderes} onChange={handleChange} placeholder="Descreva os poderes concedidos..." className="p-2 border rounded h-24" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="cidade" value={data.cidade} onChange={handleChange} placeholder="Cidade" className="p-2 border rounded" />
            <input type="date" name="data" value={data.data} onChange={handleChange} className="p-2 border rounded" />
          </div>
        </div>
      </div>
      <button onClick={generatePDF} className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Gerar PDF
      </button>
    </div>
  );
}
