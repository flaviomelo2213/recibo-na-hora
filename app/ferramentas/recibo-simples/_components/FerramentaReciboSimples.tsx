"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function FerramentaReciboSimples() {
  const [formData, setFormData] = useState({
    valor: "",
    pagador: "", // Quem pagou
    referente: "", // Motivo (serviço, produto)
    emissor: "", // Quem recebeu (assinatura)
    cpfCnpj: "",
    cidade: "",
    data: new Date().toLocaleDateString('pt-BR')
  });

  const handlePrint = () => {
    const doc = new jsPDF();
    
    // Moldura do Recibo
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 100); // Caixa principal
    
    // Título
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("RECIBO DE PAGAMENTO", 105, 25, { align: "center" });

    // Número do Recibo (Gerado aleatório para parecer pro)
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Nº ${Math.floor(Math.random() * 10000)}`, 180, 25);

    // Valor R$
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setFillColor(230, 230, 230); // Fundo cinza leve
    doc.rect(140, 35, 50, 12, "F"); // Caixa do valor
    doc.text(`R$ ${formData.valor}`, 165, 43, { align: "center" });

    // Corpo do texto
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const textoPrincipal = `Recebi(emos) de ${formData.pagador.toUpperCase()}, a importância de R$ ${formData.valor}, referente a ${formData.referente}.`;
    const linhas = doc.splitTextToSize(textoPrincipal, 170);
    doc.text(linhas, 20, 60);

    doc.text("Pelo que firmo(amos) o presente recibo para dar plena e rasa quitação.", 20, 85);

    // Data e Local
    doc.text(`${formData.cidade}, ${formData.data}`, 105, 95, { align: "center" });

    // Assinatura
    doc.line(60, 115, 150, 115); // Linha assinatura
    doc.setFontSize(10);
    doc.text(formData.emissor.toUpperCase(), 105, 120, { align: "center" });
    doc.text(`CPF/CNPJ: ${formData.cpfCnpj}`, 105, 125, { align: "center" });

    doc.save("recibo_pagamento.pdf");
  };

  return (
    <div className="space-y-5">
      {/* Valor em destaque */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Valor do Recibo (R$)</label>
        <input 
          type="text"
          placeholder="Ex: 150,00" 
          className="border-2 border-green-100 focus:border-green-500 p-3 rounded-lg w-full text-lg font-bold text-green-800 outline-none transition-colors"
          onChange={(e) => setFormData({...formData, valor: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm text-gray-600 mb-1">Nome do Pagador (Quem pagou)</label>
          <input 
            placeholder="Ex: João da Silva" 
            className="border p-3 rounded w-full bg-gray-50"
            onChange={(e) => setFormData({...formData, pagador: e.target.value})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm text-gray-600 mb-1">Referente a (Motivo)</label>
          <input 
            placeholder="Ex: Serviços de pintura residencial..." 
            className="border p-3 rounded w-full bg-gray-50"
            onChange={(e) => setFormData({...formData, referente: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Nome do Emissor (Você)</label>
          <input 
            placeholder="Seu Nome ou Empresa" 
            className="border p-3 rounded w-full bg-gray-50"
            onChange={(e) => setFormData({...formData, emissor: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">CPF ou CNPJ do Emissor</label>
          <input 
            placeholder="000.000.000-00" 
            className="border p-3 rounded w-full bg-gray-50"
            onChange={(e) => setFormData({...formData, cpfCnpj: e.target.value})}
          />
        </div>

        <div>
           <label className="block text-sm text-gray-600 mb-1">Cidade</label>
           <input 
            placeholder="Sua Cidade" 
            className="border p-3 rounded w-full bg-gray-50"
            onChange={(e) => setFormData({...formData, cidade: e.target.value})}
          />
        </div>
        
        <div>
           <label className="block text-sm text-gray-600 mb-1">Data</label>
           <input 
            type="text"
            value={formData.data}
            className="border p-3 rounded w-full bg-gray-100 text-gray-500 cursor-not-allowed"
            readOnly
          />
        </div>
      </div>

      <button 
        onClick={handlePrint}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all mt-6 flex items-center justify-center gap-3 text-lg"
      >
        <i className="fa-solid fa-print"></i> Gerar Recibo PDF Grátis
      </button>
      <p className="text-center text-xs text-gray-400 mt-2">Nenhum dado fica salvo. Totalmente seguro.</p>
    </div>
  );
}
