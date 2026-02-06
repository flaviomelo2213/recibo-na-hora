"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";

interface RpaData {
  numeroRecibo: string;
  prestadorNome: string;
  prestadorCPF: string;
  prestadorEndereco: string;
  tomadorNome: string;
  tomadorCNPJ: string;
  tomadorEndereco: string;
  servicoDescricao: string;
  valorBruto: string;
  aliquotaINSS: string;
  aliquotaIRRF: string;
  aliquotaISS: string;
  cidade: string;
  data: string;
}

export default function ReciboRpaGenerator() {
  const [data, setData] = useState<RpaData>({
    numeroRecibo: "001",
    prestadorNome: "",
    prestadorCPF: "",
    prestadorEndereco: "",
    tomadorNome: "",
    tomadorCNPJ: "",
    tomadorEndereco: "",
    servicoDescricao: "",
    valorBruto: "",
    aliquotaINSS: "11",
    aliquotaIRRF: "0",
    aliquotaISS: "5",
    cidade: "",
    data: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const valorBrutoNum = parseFloat(data.valorBruto.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
  const inss = valorBrutoNum * (parseFloat(data.aliquotaINSS) / 100);
  const irrf = valorBrutoNum * (parseFloat(data.aliquotaIRRF) / 100);
  const iss = valorBrutoNum * (parseFloat(data.aliquotaISS) / 100);
  const totalDescontos = inss + irrf + iss;
  const valorLiquido = valorBrutoNum - totalDescontos;

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const lineHeight = 7;
    let yPos = 20;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("RECIBO DE PAGAMENTO A AUTÔNOMO (RPA)", pageWidth / 2, yPos, { align: "center" });

    yPos += lineHeight * 2;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`RPA Nº: ${data.numeroRecibo || "001"}`, margin, yPos);
    doc.text(`Data: ${new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`, pageWidth - margin - 40, yPos);

    yPos += lineHeight * 2;
    doc.setFont("helvetica", "bold");
    doc.text("TOMADOR DE SERVIÇOS (Contratante):", margin, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    const tomadorLines = doc.splitTextToSize(
      `${data.tomadorNome || "[NOME DA EMPRESA]"}\nCNPJ: ${data.tomadorCNPJ || "[00.000.000/0000-00]"}\n${data.tomadorEndereco || "[ENDEREÇO COMPLETO]"}`,
      pageWidth - 2 * margin
    );
    doc.text(tomadorLines, margin, yPos);
    yPos += tomadorLines.length * lineHeight + lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("PRESTADOR DE SERVIÇOS (Autônomo):", margin, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    const prestadorLines = doc.splitTextToSize(
      `${data.prestadorNome || "[NOME COMPLETO]"}\nCPF: ${data.prestadorCPF || "[000.000.000-00]"}\n${data.prestadorEndereco || "[ENDEREÇO COMPLETO]"}`,
      pageWidth - 2 * margin
    );
    doc.text(prestadorLines, margin, yPos);
    yPos += prestadorLines.length * lineHeight + lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("DESCRIÇÃO DOS SERVIÇOS:", margin, yPos);
    doc.setFont("helvetica", "normal");
    yPos += lineHeight;
    const servicoLines = doc.splitTextToSize(
      data.servicoDescricao || "[DESCRIÇÃO DETALHADA DOS SERVIÇOS PRESTADOS]",
      pageWidth - 2 * margin
    );
    doc.text(servicoLines, margin, yPos);
    yPos += servicoLines.length * lineHeight + lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("VALORES:", margin, yPos);
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.text(`Valor Bruto:`, margin, yPos);
    doc.text(formatCurrency(valorBrutoNum), pageWidth - margin - 40, yPos, { align: "right" });
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("(-) RETENÇÕES:", margin, yPos);
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.text(`INSS (${data.aliquotaINSS}%):`, margin + 5, yPos);
    doc.text(formatCurrency(inss), pageWidth - margin - 40, yPos, { align: "right" });
    yPos += lineHeight;
    doc.text(`IRRF (${data.aliquotaIRRF}%):`, margin + 5, yPos);
    doc.text(formatCurrency(irrf), pageWidth - margin - 40, yPos, { align: "right" });
    yPos += lineHeight;
    doc.text(`ISS (${data.aliquotaISS}%):`, margin + 5, yPos);
    doc.text(formatCurrency(iss), pageWidth - margin - 40, yPos, { align: "right" });
    yPos += lineHeight * 1.5;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("VALOR LÍQUIDO A RECEBER:", margin, yPos);
    doc.text(formatCurrency(valorLiquido), pageWidth - margin - 40, yPos, { align: "right" });

    yPos += lineHeight * 3;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const declaracaoText = `Declaro que recebi da empresa ${data.tomadorNome || "[TOMADOR]"} o valor líquido acima discriminado, referente aos serviços prestados conforme descrito neste recibo.`;
    const declaracaoLines = doc.splitTextToSize(declaracaoText, pageWidth - 2 * margin);
    doc.text(declaracaoLines, margin, yPos);
    yPos += declaracaoLines.length * lineHeight + lineHeight * 2;

    doc.text(`${data.cidade || "[CIDADE]"}, ${new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}.`, margin, yPos);
    yPos += lineHeight * 3;

    doc.line(margin + 20, yPos, pageWidth - margin - 20, yPos);
    yPos += lineHeight;
    doc.text(data.prestadorNome || "[NOME DO PRESTADOR]", pageWidth / 2, yPos, { align: "center" });
    yPos += lineHeight * 0.8;
    doc.setFontSize(9);
    doc.text(`CPF: ${data.prestadorCPF || "[000.000.000-00]"}`, pageWidth / 2, yPos, { align: "center" });

    doc.save(`recibo-rpa-${data.numeroRecibo}.pdf`);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-file-invoice text-blue-600"></i>
          Dados do Recibo RPA
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Número do Recibo</label>
            <input
              type="text"
              name="numeroRecibo"
              value={data.numeroRecibo}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="001"
            />
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Prestador de Serviços (Autônomo)</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="prestadorNome"
                value={data.prestadorNome}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="prestadorCPF"
                value={data.prestadorCPF}
                onChange={handleChange}
                placeholder="CPF"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="prestadorEndereco"
                value={data.prestadorEndereco}
                onChange={handleChange}
                placeholder="Endereço Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Tomador de Serviços (Empresa)</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="tomadorNome"
                value={data.tomadorNome}
                onChange={handleChange}
                placeholder="Nome da Empresa"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="tomadorCNPJ"
                value={data.tomadorCNPJ}
                onChange={handleChange}
                placeholder="CNPJ"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="tomadorEndereco"
                value={data.tomadorEndereco}
                onChange={handleChange}
                placeholder="Endereço Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Detalhes do Serviço</h3>
            <div className="space-y-3">
              <textarea
                name="servicoDescricao"
                value={data.servicoDescricao}
                onChange={handleChange}
                placeholder="Descrição detalhada dos serviços prestados"
                rows={3}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="valorBruto"
                value={data.valorBruto}
                onChange={handleChange}
                placeholder="Valor Bruto (ex: 1500,00)"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Retenções de Impostos (%)</h3>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-600 mb-1">INSS</label>
                <input
                  type="text"
                  name="aliquotaINSS"
                  value={data.aliquotaINSS}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="11"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">IRRF</label>
                <input
                  type="text"
                  name="aliquotaIRRF"
                  value={data.aliquotaIRRF}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">ISS</label>
                <input
                  type="text"
                  name="aliquotaISS"
                  value={data.aliquotaISS}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="5"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Local e Data</h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="cidade"
                value={data.cidade}
                onChange={handleChange}
                placeholder="Cidade"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                name="data"
                value={data.data}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={generatePDF}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-file-pdf"></i>
            Gerar PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-eye text-amber-600"></i>
          Prévia do Recibo
        </h2>

        <div className="prose prose-sm max-w-none text-xs">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold">RECIBO DE PAGAMENTO A AUTÔNOMO (RPA)</h3>
            <p className="text-xs text-slate-600">RPA Nº: {data.numeroRecibo || "001"} - Data: {new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-3 rounded">
              <p className="font-bold text-slate-700">TOMADOR DE SERVIÇOS:</p>
              <p>{data.tomadorNome || "[NOME DA EMPRESA]"}</p>
              <p className="text-xs">CNPJ: {data.tomadorCNPJ || "[00.000.000/0000-00]"}</p>
              <p className="text-xs">{data.tomadorEndereco || "[ENDEREÇO]"}</p>
            </div>

            <div className="bg-blue-50 p-3 rounded">
              <p className="font-bold text-blue-700">PRESTADOR DE SERVIÇOS:</p>
              <p>{data.prestadorNome || "[NOME COMPLETO]"}</p>
              <p className="text-xs">CPF: {data.prestadorCPF || "[000.000.000-00]"}</p>
              <p className="text-xs">{data.prestadorEndereco || "[ENDEREÇO]"}</p>
            </div>

            <div>
              <p className="font-bold text-slate-700">SERVIÇOS PRESTADOS:</p>
              <p className="text-xs">{data.servicoDescricao || "[DESCRIÇÃO DOS SERVIÇOS]"}</p>
            </div>

            <div className="border-t border-slate-300 pt-3">
              <div className="flex justify-between mb-1">
                <span>Valor Bruto:</span>
                <span className="font-bold">{formatCurrency(valorBrutoNum)}</span>
              </div>
              <div className="text-xs space-y-1 ml-4 text-slate-600">
                <div className="flex justify-between">
                  <span>(-) INSS ({data.aliquotaINSS}%):</span>
                  <span>{formatCurrency(inss)}</span>
                </div>
                <div className="flex justify-between">
                  <span>(-) IRRF ({data.aliquotaIRRF}%):</span>
                  <span>{formatCurrency(irrf)}</span>
                </div>
                <div className="flex justify-between">
                  <span>(-) ISS ({data.aliquotaISS}%):</span>
                  <span>{formatCurrency(iss)}</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t border-slate-300">
                <span className="font-bold text-green-700">VALOR LÍQUIDO:</span>
                <span className="font-bold text-green-700 text-lg">{formatCurrency(valorLiquido)}</span>
              </div>
            </div>

            <p className="text-xs mt-4 text-slate-700 italic">
              Declaro que recebi da empresa {data.tomadorNome || "[TOMADOR]"} o valor líquido acima, referente aos serviços prestados.
            </p>

            <div className="mt-6 text-center">
              <p className="text-xs">{data.cidade || "[CIDADE]"}, {new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</p>
              <div className="border-t border-slate-400 w-64 mx-auto mt-6 mb-2"></div>
              <p className="font-medium">{data.prestadorNome || "[NOME DO PRESTADOR]"}</p>
              <p className="text-xs text-slate-600">CPF: {data.prestadorCPF || "[000.000.000-00]"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
