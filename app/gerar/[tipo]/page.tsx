'use client';

import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';

export default function GeradorReciboPro() {
  // Estado Completo (Campos que os concorrentes têm)
  const [dados, setDados] = useState({
    valor: '',
    data: new Date().toISOString().split('T')[0],
    pagadorNome: '', pagadorCPF: '',
    recebedorNome: '', recebedorCPF: '', recebedorEndereco: '', recebedorTel: '',
    referente: '',
    cidade: '',
    formaPagamento: 'Dinheiro', // PIX, Cheque, Transferência
    parcela: 'Única', // 1 de 3, etc.
  });

  const [logo, setLogo] = useState<string | null>(null);
  const [assinatura, setAssinatura] = useState<string | null>(null);

  // Função para ler arquivos de imagem (Logo/Assinatura)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setImg: Function) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: any) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    
    // --- CABEÇALHO COM LOGO ---
    if (logo) {
        doc.addImage(logo, 'PNG', 20, 10, 30, 30); // Logo à esquerda
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("RECIBO DE PAGAMENTO", 190, 25, { align: "right" });
        doc.setFontSize(10);
        doc.text(`Nº Controle: ${Date.now().toString().slice(-6)}`, 190, 32, { align: "right" });
    } else {
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("RECIBO DE PAGAMENTO", 105, 25, { align: "center" });
    }

    // --- CAIXA DE VALOR ---
    doc.setFillColor(240, 240, 240);
    doc.rect(20, 45, 170, 15, 'F');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`VALOR: R$ ${dados.valor}`, 105, 55, { align: "center" });

    // --- CORPO DO RECIBO ---
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    let y = 80;

    const texto = `Recebi(emos) de ${dados.pagadorNome.toUpperCase()}, inscrito(a) no CPF/CNPJ ${dados.pagadorCPF}, a importância supra de R$ ${dados.valor}, referente a: ${dados.referente}.`;
    const linhas = doc.splitTextToSize(texto, 170);
    doc.text(linhas, 20, y);
    y += (linhas.length * 8) + 10;

    doc.text(`Forma de Pagamento: ${dados.formaPagamento}`, 20, y);
    doc.text(`Parcela: ${dados.parcela}`, 120, y);
    y += 20;

    doc.text(`Para maior clareza, firmo(amos) o presente recibo.`, 20, y);
    y += 15;

    doc.text(`${dados.cidade || 'Local'}, ${new Date(dados.data).toLocaleDateString('pt-BR', {day:'numeric', month:'long', year:'numeric'})}.`, 20, y);

    // --- ASSINATURA ---
    y += 30;
    if (assinatura) {
        doc.addImage(assinatura, 'PNG', 75, y - 25, 60, 20); // Imagem da assinatura
    }
    doc.line(60, y, 150, y); // Linha
    doc.setFontSize(10);
    doc.text(dados.recebedorNome.toUpperCase(), 105, y + 5, { align: "center" });
    doc.text(`CPF/CNPJ: ${dados.recebedorCPF}`, 105, y + 10, { align: "center" });
    if(dados.recebedorTel) doc.text(`Tel: ${dados.recebedorTel}`, 105, y + 15, { align: "center" });
    if(dados.recebedorEndereco) doc.text(dados.recebedorEndereco, 105, y + 20, { align: "center" });

    // --- RODAPÉ MARCA D'ÁGUA ---
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("Gerado por ReciboNaHora.com.br - Ferramentas para MEI e Profissionais", 105, 290, { align: "center" });

    doc.save("recibo-profissional.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-200">
      <div className="text-center mb-8 bg-slate-900 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2"><i className="fa-solid fa-receipt text-yellow-400"></i> Recibo Profissional 2.0</h1>
        <p className="text-slate-300 text-sm">Adicione logo, assinatura e gere um documento oficial.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* COLUNA ESQUERDA: DADOS */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-700 border-b pb-2">1. Detalhes do Pagamento</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold text-gray-500">Valor (R$)</label>
                <input name="valor" onChange={handleChange} className="w-full p-3 border rounded font-bold text-green-700" placeholder="0,00" />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-500">Data</label>
                <input type="date" name="data" value={dados.data} onChange={handleChange} className="w-full p-3 border rounded" />
            </div>
          </div>
          <input name="referente" onChange={handleChange} placeholder="Referente a (Ex: Prestação de Serviços de Pintura)" className="w-full p-3 border rounded bg-yellow-50" />
          
          <div className="grid grid-cols-2 gap-4">
            <select name="formaPagamento" onChange={handleChange} className="p-3 border rounded bg-white">
                <option>Dinheiro</option>
                <option>PIX</option>
                <option>Cartão de Crédito</option>
                <option>Cartão de Débito</option>
                <option>Transferência</option>
            </select>
            <input name="parcela" onChange={handleChange} placeholder="Parcela (Ex: 1 de 3)" className="p-3 border rounded" />
          </div>

          <h3 className="font-bold text-slate-700 border-b pb-2 pt-4">2. Quem Pagou (Cliente)</h3>
          <input name="pagadorNome" onChange={handleChange} placeholder="Nome do Pagador" className="w-full p-3 border rounded" />
          <input name="pagadorCPF" onChange={handleChange} placeholder="CPF/CNPJ do Pagador" className="w-full p-3 border rounded" />
        </div>

        {/* COLUNA DIREITA: EMISSOR E BRANDING */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-700 border-b pb-2">3. Quem Recebeu (Você/MEI)</h3>
          <input name="recebedorNome" onChange={handleChange} placeholder="Seu Nome / Razão Social" className="w-full p-3 border rounded" />
          <input name="recebedorCPF" onChange={handleChange} placeholder="Seu CPF/CNPJ" className="w-full p-3 border rounded" />
          <input name="recebedorTel" onChange={handleChange} placeholder="Seu Telefone/WhatsApp" className="w-full p-3 border rounded" />
          <input name="cidade" onChange={handleChange} placeholder="Cidade/UF" className="w-full p-3 border rounded" />

          <h3 className="font-bold text-blue-600 border-b pb-2 pt-4 flex items-center gap-2">
            <i className="fa-solid fa-star"></i> Personalização (Diferencial)
          </h3>
          
          <div className="flex gap-4">
            <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-500 mb-1">Sua Logo (Opcional)</label>
                <label className="cursor-pointer flex flex-col items-center justify-center h-20 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
                    <span className="text-xs text-blue-600 font-bold">{logo ? 'Logo Carregada!' : 'Carregar Imagem'}</span>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setLogo)} className="hidden" />
                </label>
            </div>
            <div className="w-1/2">
                <label className="block text-xs font-bold text-gray-500 mb-1">Assinatura (Opcional)</label>
                <label className="cursor-pointer flex flex-col items-center justify-center h-20 border-2 border-dashed border-green-300 rounded-lg bg-green-50 hover:bg-green-100 transition">
                    <span className="text-xs text-green-600 font-bold">{assinatura ? 'Assinatura OK!' : 'Carregar Assinatura'}</span>
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setAssinatura)} className="hidden" />
                </label>
            </div>
          </div>
        </div>
      </div>

      <button onClick={gerarPDF} className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]">
        <i className="fa-solid fa-file-invoice-dollar text-2xl"></i> BAIXAR RECIBO PROFISSIONAL
      </button>
    </div>
  );
}
