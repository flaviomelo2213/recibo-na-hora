
'use client';

import React, { useState, useRef } from 'react';
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
    cpfBeneficiario: '',
    nomePagador: '',
    cpfCnpjPagador: '',
    valor: '',
    cidade: '',
    referente: 'Pagamento de serviço',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef(null);

  // Função para atualizar o estado do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

          {/* Seção: Beneficiário (Quem Recebe) */}
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-lg font-semibold text-blue-700 mb-3">Beneficiário (Quem Recebe)</h4>

            <div className="space-y-3">
              <div>
                <label htmlFor="nomeBeneficiario" className="block text-sm font-medium text-gray-900">Nome Completo *</label>
                <input type="text" name="nomeBeneficiario" id="nomeBeneficiario" value={formData.nomeBeneficiario} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: João da Silva" required />
              </div>

              <div>
                <label htmlFor="cpfBeneficiario" className="block text-sm font-medium text-gray-900">CPF/CNPJ *</label>
                <input type="text" name="cpfBeneficiario" id="cpfBeneficiario" value={formData.cpfBeneficiario} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="000.000.000-00" required />
              </div>

              <div>
                <label htmlFor="chavePix" className="block text-sm font-medium text-gray-900">Chave PIX de Destino *</label>
                <input type="text" name="chavePix" id="chavePix" value={formData.chavePix} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="CPF, CNPJ, Celular, E-mail ou Chave Aleatória" required />
                <p className="mt-1 text-xs text-gray-500">Informe a chave PIX que receberá o pagamento</p>
              </div>
            </div>
          </div>

          {/* Seção: Pagador (Quem Paga) */}
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-lg font-semibold text-green-700 mb-3">Pagador (Quem Paga)</h4>

            <div className="space-y-3">
              <div>
                <label htmlFor="nomePagador" className="block text-sm font-medium text-gray-900">Nome Completo *</label>
                <input type="text" name="nomePagador" id="nomePagador" value={formData.nomePagador} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Ex: Maria Oliveira" required />
              </div>

              <div>
                <label htmlFor="cpfCnpjPagador" className="block text-sm font-medium text-gray-900">CPF/CNPJ *</label>
                <input type="text" name="cpfCnpjPagador" id="cpfCnpjPagador" value={formData.cpfCnpjPagador} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="000.000.000-00" required />
              </div>
            </div>
          </div>

          {/* Seção: Detalhes do Pagamento */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Detalhes do Pagamento</h4>

            <div className="space-y-3">
              <div>
                <label htmlFor="valor" className="block text-sm font-medium text-gray-900">Valor (R$) *</label>
                <input type="text" name="valor" id="valor" value={formData.valor} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="150,00" required />
              </div>

              <div>
                <label htmlFor="referente" className="block text-sm font-medium text-gray-900">Referente a *</label>
                <input type="text" name="referente" id="referente" value={formData.referente} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: Venda de produto X" required />
              </div>

              <div>
                <label htmlFor="cidade" className="block text-sm font-medium text-gray-900">Cidade da Emissão</label>
                <input type="text" name="cidade" id="cidade" value={formData.cidade} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: São Paulo" />
              </div>
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
