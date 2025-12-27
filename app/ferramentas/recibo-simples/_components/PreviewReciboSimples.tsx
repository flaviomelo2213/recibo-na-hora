"use client";

import React from 'react';

// Este componente recebe os dados do formulário como props
export default function PreviewReciboSimples({ formData }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 h-full">
      {/* Simulação de uma folha A4 para a pré-visualização */}
      <div className="a4-preview-container text-sm text-gray-700">
        
        {/* Cabeçalho do Recibo */}
        <div className="bg-gray-800 text-white text-center py-4 rounded-t-md">
          <h2 className="text-xl font-bold">RECIBO DE PAGAMENTO</h2>
        </div>

        <div className="p-6 border-l border-r border-b border-gray-200">
          {/* Valor */}
          <div className="mb-6 pb-4 border-b border-dashed">
            <span className="font-semibold text-gray-800">VALOR:</span>
            <span className="ml-2 text-lg font-bold text-blue-600">{`R$ ${formData.valor || "0,00"}`}</span>
          </div>

          {/* Corpo do Recibo */}
          <p className="mb-8 leading-relaxed">
            Recebi(emos) de <span className="font-bold uppercase">{formData.pagador || "..."}</span>, a importância de R$ {formData.valor || "0,00"}, referente a {formData.referente || "..."}.
          </p>

          <p className="mb-10">
            Pelo que firmo(amos) o presente recibo, para os devidos fins de direito.
          </p>

          {/* Data e Local */}
          <div className="text-center mb-12 text-gray-800">
            {formData.cidade || "Sua Cidade"}, {formData.data || "dd/mm/aaaa"}
          </div>

          {/* Assinatura */}
          <div className="text-center">
            <div className="border-t border-gray-400 w-64 mx-auto mb-2"></div>
            <p className="font-bold uppercase text-gray-800">{formData.emissor || "..."}</p>
            <p className="text-xs text-gray-600">{`CPF/CNPJ: ${formData.cpfCnpj || "..."}`}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
