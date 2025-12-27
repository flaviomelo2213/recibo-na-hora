"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import PreviewReciboSimples from "./PreviewReciboSimples"; // Importando o novo componente

export default function FerramentaReciboSimples() {
  const [formData, setFormData] = useState({
    valor: "150,00",
    pagador: "José Carlos da Silva",
    referente: "Pagamento de serviço de consultoria de SEO",
    emissor: "Maria Joaquina de Amaral Pereira",
    cpfCnpj: "111.222.333-44",
    cidade: "São Paulo",
    data: new Date().toLocaleDateString('pt-BR')
  });

  const handlePrint = () => {
    const doc = new jsPDF();
    
    doc.setFillColor(40, 38, 36);
    doc.rect(10, 10, 190, 20, "F");
    doc.setTextColor(250, 250, 249);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("RECIBO DE PAGAMENTO", 105, 22, { align: "center" });

    doc.setDrawColor(231, 229, 228);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 120);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(28, 25, 23);
    doc.text(`VALOR:`, 15, 45);
    doc.text(`R$ ${formData.valor}`, 40, 45);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(87, 83, 78);
    const textoPrincipal = `Recebi(emos) de ${formData.pagador.toUpperCase()}, a importância de R$ ${formData.valor}, referente a ${formData.referente}.`;
    const linhas = doc.splitTextToSize(textoPrincipal, 170);
    doc.text(linhas, 15, 60);
    doc.text("Pelo que firmo(amos) o presente recibo, para os devidos fins de direito.", 15, 85);

    doc.text(`${formData.cidade}, ${formData.data}`, 105, 100, { align: "center" });

    doc.line(60, 115, 150, 115);
    doc.setFontSize(10);
    doc.setTextColor(28, 25, 23);
    doc.text(formData.emissor.toUpperCase(), 105, 120, { align: "center" });
    doc.text(`CPF/CNPJ: ${formData.cpfCnpj}`, 105, 125, { align: "center" });

    doc.save(`recibo-${formData.pagador.toLowerCase().replace(/\s/g, '-')}.pdf`);
  };

  return (
    // Grid principal com 2 colunas em telas grandes (lg) e 1 em telas pequenas
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Coluna da Esquerda: Formulário */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Valor do Recibo (R$)</label>
          <input 
            type="text"
            placeholder="Ex: 150,00"
            value={formData.valor}
            className="border border-gray-300 focus:border-blue-500 p-3 rounded-lg w-full text-lg font-bold text-gray-800 outline-none transition-colors bg-white"
            onChange={(e) => setFormData({...formData, valor: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Nome do Pagador</label>
            <input 
              placeholder="Ex: João da Silva"
              value={formData.pagador}
              className="border border-gray-300 p-3 rounded-md w-full bg-white focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, pagador: e.target.value})}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Referente a</label>
            <input 
              placeholder="Ex: Serviços de pintura residencial..."
              value={formData.referente}
              className="border border-gray-300 p-3 rounded-md w-full bg-white focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, referente: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Nome do Emissor</label>
            <input 
              placeholder="Seu Nome ou Nome da Empresa"
              value={formData.emissor}
              className="border border-gray-300 p-3 rounded-md w-full bg-white focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, emissor: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">CPF ou CNPJ do Emissor</label>
            <input 
              placeholder="000.000.000-00"
              value={formData.cpfCnpj}
              className="border border-gray-300 p-3 rounded-md w-full bg-white focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, cpfCnpj: e.target.value})}
            />
          </div>

          <div>
             <label className="block text-sm text-gray-600 mb-1">Cidade de Emissão</label>
             <input 
              placeholder="Sua Cidade"
              value={formData.cidade}
              className="border border-gray-300 p-3 rounded-md w-full bg-white focus:ring-1 focus:ring-blue-500 outline-none"
              onChange={(e) => setFormData({...formData, cidade: e.target.value})}
            />
          </div>
          
          <div>
             <label className="block text-sm text-gray-500 mb-1">Data</label>
             <input 
              type="text"
              value={formData.data}
              className="border border-gray-200 p-3 rounded-md w-full bg-gray-100 text-gray-500 cursor-not-allowed"
              readOnly
            />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-5 space-y-3">
            <button 
              onClick={handlePrint}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
            >
              <i className="fa-solid fa-file-pdf"></i> Gerar e Baixar PDF
            </button>
            <p className="text-center text-xs text-gray-500">Seus dados são privados e o PDF é gerado no seu navegador.</p>
        </div>
      </div>

      {/* Coluna da Direita: Pré-visualização */}
      <div className="lg:sticky lg:top-24 h-full">
        <PreviewReciboSimples formData={formData} />
      </div>

    </div>
  );
}
