
'use client';

import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PreviewReciboPix from './PreviewReciboPix';

// Componente principal que une o formulário e a pré-visualização
export default function FerramentaReciboPix() {
  // Estados para todos os campos do formulário
  const [formData, setFormData] = useState({
    id: '0001',
    chavePix: '',
    nomeBeneficiario: '',
    valor: '',
    cidade: '',
    referente: 'Pagamento de serviço',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef(null);

  // Função para atualizar o estado do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para gerar o PDF
  const handleDownloadPdf = async () => {
    if (!previewRef.current) return;
    setIsGenerating(true);

    const canvas = await html2canvas(previewRef.current, {
      scale: 2, // Aumenta a resolução da captura
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`recibo-pix-${formData.id || 'doc'}.pdf`);
    setIsGenerating(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* Coluna 1: Formulário de Entrada */}
      <div className="lg:col-span-1">
        <div className="space-y-5 p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">Preencha os Dados do Recibo</h3>

          {/* Campo: Chave PIX */}
          <div className="sm:col-span-2">
            <label htmlFor="chavePix" className="block text-sm font-medium leading-6 text-gray-900">Chave PIX (CPF, CNPJ, Celular, etc.)</label>
            <div className="mt-2">
              <input type="text" name="chavePix" id="chavePix" value={formData.chavePix} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Digite a chave PIX" />
            </div>
          </div>

          {/* Campo: Nome do Beneficiário */}
          <div className="sm:col-span-2">
            <label htmlFor="nomeBeneficiario" className="block text-sm font-medium leading-6 text-gray-900">Nome Completo do Beneficiário</label>
            <div className="mt-2">
              <input type="text" name="nomeBeneficiario" id="nomeBeneficiario" value={formData.nomeBeneficiario} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ex: João da Silva" />
            </div>
          </div>
          
          {/* Campo: Valor */}
          <div className="sm:col-span-1">
            <label htmlFor="valor" className="block text-sm font-medium leading-6 text-gray-900">Valor (R$)</label>
            <div className="mt-2">
              <input type="text" name="valor" id="valor" value={formData.valor} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="150,00" />
            </div>
          </div>

          {/* Campo: Referente a */}
          <div className="sm:col-span-2">
            <label htmlFor="referente" className="block text-sm font-medium leading-6 text-gray-900">Referente a</label>
            <div className="mt-2">
              <input type="text" name="referente" id="referente" value={formData.referente} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ex: Venda de produto X" />
            </div>
          </div>

          {/* Campo: Cidade */}
          <div className="sm:col-span-1">
            <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">Cidade da Emissão</label>
            <div className="mt-2">
              <input type="text" name="cidade" id="cidade" value={formData.cidade} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Ex: São Paulo" />
            </div>
          </div>

        </div>
      </div>

      {/* Coluna 2: Pré-visualização e Ações */}
      <div className="lg:col-span-1 lg:sticky top-8 self-start">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Pré-visualização do Recibo</h3>
        <div ref={previewRef} className="mb-6">
          <PreviewReciboPix data={formData} />
        </div>
        <button 
          onClick={handleDownloadPdf}
          disabled={isGenerating}
          className="w-full bg-blue-600 text-white font-bold py-4 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          <i className="fa-solid fa-file-arrow-down"></i>
          {isGenerating ? 'Gerando PDF...' : 'Baixar Recibo em PDF'}
        </button>
      </div>

    </div>
  );
}
