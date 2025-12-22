'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function RelatorioMei() {
  const [dados, setDados] = useState({
    cnpj: '', empreendedor: '', periodo: '',
    vendaMercadoriaComNF: '', vendaMercadoriaSemNF: '',
    revendaMercadoriaComNF: '', revendaMercadoriaSemNF: '',
    servicosComNF: '', servicosSemNF: '',
  });

  const handleChange = (e: any) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const toNum = (str: string) => parseFloat(str.replace(',', '.') || '0');
    
    // Cálculos
    const totalVenda = toNum(dados.vendaMercadoriaComNF) + toNum(dados.vendaMercadoriaSemNF);
    const totalRevenda = toNum(dados.revendaMercadoriaComNF) + toNum(dados.revendaMercadoriaSemNF);
    const totalServico = toNum(dados.servicosComNF) + toNum(dados.servicosSemNF);
    const totalGeral = totalVenda + totalRevenda + totalServico;

    // Layout Oficial do Governo (Cópia fiel para validade)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("RELATÓRIO MENSAL DAS RECEITAS BRUTAS - MEI", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("(Anexo da Resolução CGSN nº 140, de 2018)", 105, 27, { align: "center" });

    doc.rect(10, 35, 190, 25);
    doc.text(`CNPJ: ${dados.cnpj}`, 15, 45);
    doc.text(`Empreendedor: ${dados.empreendedor.toUpperCase()}`, 15, 52);
    doc.text(`Período de Apuração (Mês/Ano): ${dados.periodo}`, 15, 59);

    // Tabela I - Revenda
    let y = 70;
    doc.setFont("helvetica", "bold");
    doc.text("I - REVENDA DE MERCADORIAS (Comércio)", 10, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Com Dispensa de Nota Fiscal: R$ " + dados.revendaMercadoriaSemNF, 15, y+5);
    doc.text("Com Emissão de Nota Fiscal: R$ " + dados.revendaMercadoriaComNF, 15, y+12);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL I: R$ " + totalRevenda.toFixed(2), 150, y+12);

    // Tabela II - Venda Industrial
    y += 25;
    doc.text("II - VENDA DE PRODUTOS INDUSTRIALIZADOS (Indústria)", 10, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Com Dispensa de Nota Fiscal: R$ " + dados.vendaMercadoriaSemNF, 15, y+5);
    doc.text("Com Emissão de Nota Fiscal: R$ " + dados.vendaMercadoriaComNF, 15, y+12);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL II: R$ " + totalVenda.toFixed(2), 150, y+12);

    // Tabela III - Serviços
    y += 25;
    doc.text("III - PRESTAÇÃO DE SERVIÇOS", 10, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.text("Com Dispensa de Nota Fiscal: R$ " + dados.servicosSemNF, 15, y+5);
    doc.text("Com Emissão de Nota Fiscal: R$ " + dados.servicosComNF, 15, y+12);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL III: R$ " + totalServico.toFixed(2), 150, y+12);

    // Total Geral
    y += 25;
    doc.setFillColor(220, 220, 220);
    doc.rect(10, y, 190, 15, 'F');
    doc.setFontSize(12);
    doc.text("TOTAL GERAL DAS RECEITAS BRUTAS NO MÊS: R$ " + totalGeral.toFixed(2), 105, y+10, {align:'center'});

    // Assinatura
    y += 40;
    doc.text("________________________________________________", 105, y, {align:'center'});
    doc.setFontSize(10);
    doc.text("Assinatura do Empresário", 105, y+5, {align:'center'});
    doc.text(`Local e Data: __________________, ${new Date().toLocaleDateString()}`, 105, y+15, {align:'center'});

    doc.save("relatorio-mensal-mei.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-slate-900 text-white p-8 rounded-t-2xl text-center">
        <h1 className="text-3xl font-bold mb-2">Relatório Mensal MEI (Obrigatório)</h1>
        <p className="text-slate-300">Preencha seus ganhos do mês e gere o PDF oficial para sua contabilidade.</p>
      </div>
      
      <div className="bg-white p-8 border border-gray-200 rounded-b-2xl shadow-lg">
        {/* Identificação */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
            <input name="cnpj" placeholder="Seu CNPJ" onChange={handleChange} className="p-3 border rounded" />
            <input name="empreendedor" placeholder="Nome Completo" onChange={handleChange} className="p-3 border rounded" />
            <input name="periodo" placeholder="Mês/Ano (Ex: 01/2025)" onChange={handleChange} className="p-3 border rounded" />
        </div>

        {/* Tabelas de Valores */}
        <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Comércio / Revenda</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input name="revendaMercadoriaSemNF" placeholder="Venda SEM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                    <input name="revendaMercadoriaComNF" placeholder="Venda COM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2">Indústria (Fabricação Própria)</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input name="vendaMercadoriaSemNF" placeholder="Venda SEM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                    <input name="vendaMercadoriaComNF" placeholder="Venda COM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-2">Prestação de Serviços</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input name="servicosSemNF" placeholder="Serviço SEM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                    <input name="servicosComNF" placeholder="Serviço COM Nota (R$)" onChange={handleChange} className="p-2 border rounded" />
                </div>
            </div>
        </div>

        <button onClick={gerarPDF} className="w-full mt-8 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">
            BAIXAR RELATÓRIO OFICIAL (PDF)
        </button>
      </div>
    </div>
  );
}
