'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const ReciboDeAluguelGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    locadorNome: '',
    locadorCpfCnpj: '',
    locatarioNome: '',
    locatarioCpf: '',
    valor: '',
    imovelEndereco: '',
    mesReferencia: '',
    cidade: '',
    dataRecebimento: new Date().toISOString().split('T')[0],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const gerarPdf = () => {
    const doc = new jsPDF();

    doc.text("Recibo de Aluguel", 20, 20);
    doc.text(`Locador: ${formData.locadorNome}`, 20, 30);
    doc.text(`CPF/CNPJ do Locador: ${formData.locadorCpfCnpj}`, 20, 40);
    doc.text(`Locatário: ${formData.locatarioNome}`, 20, 50);
    doc.text(`CPF do Locatário: ${formData.locatarioCpf}`, 20, 60);
    doc.text(`Valor: R$ ${formData.valor}`, 20, 70);
    doc.text(`Endereço do Imóvel: ${formData.imovelEndereco}`, 20, 80);
    doc.text(`Mês de Referência: ${formData.mesReferencia}`, 20, 90);
    doc.text(`Cidade: ${formData.cidade}`, 20, 100);
    doc.text(`Data de Recebimento: ${formData.dataRecebimento}`, 20, 110);

    doc.save("recibo_de_aluguel.pdf");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Dados do Locador</h3>
          <input
            type="text"
            name="locadorNome"
            placeholder="Nome do Locador"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="locadorCpfCnpj"
            placeholder="CPF/CNPJ do Locador"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Dados do Locatário</h3>
          <input
            type="text"
            name="locatarioNome"
            placeholder="Nome do Locatário"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="locatarioCpf"
            placeholder="CPF do Locatário"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Detalhes do Aluguel</h3>
          <input
            type="text"
            name="valor"
            placeholder="Valor do Aluguel"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imovelEndereco"
            placeholder="Endereço do Imóvel"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="mesReferencia"
            placeholder="Mês de Referência"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
           <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dataRecebimento"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.dataRecebimento}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={gerarPdf}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Gerar PDF do Recibo
        </button>
      </div>
    </div>
  );
};

export default ReciboDeAluguelGenerator;
