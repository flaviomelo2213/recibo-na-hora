'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function Home() {
  const [formData, setFormData] = useState({
    valor: '',
    pagador: '',
    referente: '',
    recebedor: '',
    cpf: '',
    cidade: '',
    data: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("RECIBO DE PAGAMENTO", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(`VALOR: R$ ${formData.valor}`, 20, 40);
    doc.text(`Recebi(emos) de ${formData.pagador.toUpperCase()}`, 20, 60);
    doc.text(`a importância de R$ ${formData.valor}`, 20, 70);
    doc.text(`referente a ${formData.referente}`, 20, 80);
    doc.text(`Para maior clareza, firmo(amos) o presente recibo.`, 20, 100);
    doc.text(`${formData.cidade}, ${formData.data.split('-').reverse().join('/')}`, 20, 120);
    doc.line(20, 150, 190, 150);
    doc.text(formData.recebedor.toUpperCase(), 105, 155, { align: "center" });
    doc.text(`CPF/CNPJ: ${formData.cpf}`, 105, 162, { align: "center" });
    doc.save("recibo-na-hora.pdf");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#0070f3', marginBottom: '10px' }}>Recibo Na Hora</h1>
        <p style={{ color: '#666' }}>Preencha os dados e baixe seu recibo PDF.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="valor" placeholder="Valor (R$)" onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        <input type="text" name="pagador" placeholder="Nome do Pagador" onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        <input type="text" name="referente" placeholder="Referente a..." onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
             <input type="text" name="cidade" placeholder="Cidade" onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
             <input type="date" name="data" value={formData.data} onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        </div>
        <input type="text" name="recebedor" placeholder="Nome de quem Assina" onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        <input type="text" name="cpf" placeholder="CPF/CNPJ" onChange={handleChange} style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }} />
        <button onClick={gerarPDF} style={{ marginTop: '20px', background: '#28a745', color: 'white', padding: '15px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>📄 Gerar PDF</button>
      </div>
    </div>
  );
}
