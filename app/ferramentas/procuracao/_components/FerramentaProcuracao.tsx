"use client";

import { useState } from "react";
import { yieldToMain } from "../../../lib/yield-to-main";
import { ApoioPosDownload } from '@/components/apoio/ApoioPix';
import { avisarDocumentoPronto } from '@/lib/documento-pronto';

export default function FerramentaProcuracao() {
  const [formData, setFormData] = useState({
    outorganteNome: "",
    outorganteCpf: "",
    outorgadoNome: "",
    outorgadoCpf: "",
    poderes: "Ambos", // Simples ou Amplos
    finalidade: "",
    cidade: "",
  });

  const [gerandoPdf, setGerandoPdf] = useState(false);

  const handlePrint = async () => {
    if (gerandoPdf) return;
    setGerandoPdf(true);
    try {
      await yieldToMain();
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
    
      doc.setFontSize(18);
      doc.text("PROCURAÇÃO", 105, 20, { align: "center" });

      doc.setFontSize(12);
      const texto = `PELO PRESENTE INSTRUMENTO PARTICULAR, eu, ${formData.outorganteNome}, inscrito no CPF ${formData.outorganteCpf}, nomeio e constituo meu bastante procurador(a) o Sr(a). ${formData.outorgadoNome}, CPF ${formData.outorgadoCpf}, a quem confiro poderes para ${formData.finalidade}.`;
    
      // Quebra de linha automática
      const splitText = doc.splitTextToSize(texto, 170);
      doc.text(splitText, 20, 40);

      doc.text(`Local e Data: ${formData.cidade}, ${new Date().toLocaleDateString()}`, 20, 100);
      doc.text("___________________________________________", 105, 120, { align: "center" });
      doc.text("Assinatura do Outorgante", 105, 125, { align: "center" });

      doc.save("procuracao.pdf");
      avisarDocumentoPronto();
    } finally {
      setGerandoPdf(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          placeholder="Nome do Outorgante (Quem passa o poder)" 
          className="border p-3 rounded w-full"
          onChange={(e) => setFormData({...formData, outorganteNome: e.target.value})}
        />
        <input 
          placeholder="CPF do Outorgante" 
          className="border p-3 rounded w-full"
          onChange={(e) => setFormData({...formData, outorganteCpf: e.target.value})}
        />
        <input 
          placeholder="Nome do Procurador (Quem recebe)" 
          className="border p-3 rounded w-full"
          onChange={(e) => setFormData({...formData, outorgadoNome: e.target.value})}
        />
        <input 
          placeholder="Finalidade (Ex: Vender o carro placa XYZ)" 
          className="border p-3 rounded w-full md:col-span-2"
          onChange={(e) => setFormData({...formData, finalidade: e.target.value})}
        />
        <input 
          placeholder="Cidade Atual" 
          className="border p-3 rounded w-full"
          onChange={(e) => setFormData({...formData, cidade: e.target.value})}
        />
      </div>

      <button 
        onClick={handlePrint} disabled={gerandoPdf} aria-busy={gerandoPdf}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow transition-all mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {gerandoPdf ? 'Gerando PDF...' : (
          <><i className="fa-solid fa-file-pdf"></i> Baixar Procuração em PDF</>
        )}
      </button>
      <ApoioPosDownload />
    </div>
  );
}
