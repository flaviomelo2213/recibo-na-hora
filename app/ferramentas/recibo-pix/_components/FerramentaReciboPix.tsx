
'use client';

import React, { useState, useRef } from 'react';
import PreviewReciboPix, { type DadosReciboPix } from './PreviewReciboPix';
import { verificarCpfCnpj } from '../../../lib/documento-br';
import AdsKeeperWidget from '../../../components/ads/AdsKeeperWidget';
import { yieldToMain } from '../../../lib/yield-to-main';

// Componente principal que une o formulário e a pré-visualização
export default function FerramentaReciboPix() {
  // Estados para todos os campos do formulário
  const [formData, setFormData] = useState<DadosReciboPix>({
    id: '0001',
    chavePix: '',
    nomeBeneficiario: '',
    cpfBeneficiario: '',
    nomePagador: '',
    cpfCnpjPagador: '',
    valor: '',
    cidade: '',
    referente: 'Pagamento de serviço',
    dataPix: '',
    idTransacao: '',
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef(null);

  // Aviso amigável quando o CPF/CNPJ (opcional) não confere nos dígitos verificadores
  const avisoDocumento = (valor: string) =>
    verificarCpfCnpj(valor) === 'invalido' ? (
      <p className="mt-1 text-xs text-amber-700" role="status">
        Este CPF/CNPJ não parece válido (os dígitos verificadores não conferem). Confira os números ou deixe o campo em branco: ele é opcional.
      </p>
    ) : null;

  // Função para atualizar o estado do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para gerar o PDF
  const handleDownloadPdf = async () => {
    if (!previewRef.current || isGenerating) return;
    setIsGenerating(true);

    try {
      await yieldToMain();
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

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
    } finally {
      setIsGenerating(false);
    }
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
                <label htmlFor="cpfBeneficiario" className="block text-sm font-medium text-gray-900">CPF/CNPJ (opcional)</label>
                <input type="text" name="cpfBeneficiario" id="cpfBeneficiario" value={formData.cpfBeneficiario} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="000.000.000-00" aria-invalid={verificarCpfCnpj(formData.cpfBeneficiario) === 'invalido'} />
                {avisoDocumento(formData.cpfBeneficiario)}
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
                <label htmlFor="cpfCnpjPagador" className="block text-sm font-medium text-gray-900">CPF/CNPJ (opcional)</label>
                <input type="text" name="cpfCnpjPagador" id="cpfCnpjPagador" value={formData.cpfCnpjPagador} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="000.000.000-00" aria-invalid={verificarCpfCnpj(formData.cpfCnpjPagador) === 'invalido'} />
                {avisoDocumento(formData.cpfCnpjPagador)}
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

              <div>
                <label htmlFor="dataPix" className="block text-sm font-medium text-gray-900">Data do Pix (opcional)</label>
                <input type="date" name="dataPix" id="dataPix" value={formData.dataPix} onChange={handleInputChange} className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>

              <div>
                <label htmlFor="idTransacao" className="block text-sm font-medium text-gray-900">ID da transação (opcional)</label>
                <input type="text" name="idTransacao" id="idTransacao" value={formData.idTransacao} onChange={handleInputChange} maxLength={40} className="mt-1 w-full p-3 border border-gray-300 rounded-md font-mono focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Ex: E1234567820261110..." />
                <p className="mt-1 text-xs text-gray-500">Copie do comprovante que o banco gerou. No Pix, esse código costuma ter 32 caracteres e começar com a letra E.</p>
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
        <p className="mt-3 text-xs text-gray-500 text-center">
          Este recibo é uma declaração de quem recebeu o valor e não substitui o comprovante do banco. Usá-lo para enganar outra pessoa é proibido pelos{' '}
          <a href="/termos-uso" className="underline font-medium">Termos de Uso</a>.
        </p>
        <AdsKeeperWidget />
      </div>

    </div>
  );
}
