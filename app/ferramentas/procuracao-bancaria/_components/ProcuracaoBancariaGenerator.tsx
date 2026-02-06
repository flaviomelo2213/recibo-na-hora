"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";

interface ProcuracaoData {
  outorganteNome: string;
  outorganteCPF: string;
  outorganteRG: string;
  outorganteEndereco: string;
  outorgadoNome: string;
  outorgadoCPF: string;
  outorgadoRG: string;
  outorgadoEndereco: string;
  banco: string;
  agencia: string;
  conta: string;
  cidade: string;
  data: string;
}

export default function ProcuracaoBancariaGenerator() {
  const [data, setData] = useState<ProcuracaoData>({
    outorganteNome: "",
    outorganteCPF: "",
    outorganteRG: "",
    outorganteEndereco: "",
    outorgadoNome: "",
    outorgadoCPF: "",
    outorgadoRG: "",
    outorgadoEndereco: "",
    banco: "",
    agencia: "",
    conta: "",
    cidade: "",
    data: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const lineHeight = 7;
    let yPos = 20;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("PROCURAÇÃO BANCÁRIA", pageWidth / 2, yPos, { align: "center" });

    yPos += lineHeight * 2;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    const outorganteText = `OUTORGANTE: ${data.outorganteNome || "[NOME COMPLETO]"}, ${data.outorganteCPF ? `portador do CPF nº ${data.outorganteCPF}` : "CPF [000.000.000-00]"}, ${data.outorganteRG ? `RG nº ${data.outorganteRG}` : "RG [00.000.000-0]"}, residente e domiciliado em ${data.outorganteEndereco || "[ENDEREÇO COMPLETO]"}.`;

    const outorganteLines = doc.splitTextToSize(outorganteText, pageWidth - 2 * margin);
    doc.text(outorganteLines, margin, yPos);
    yPos += outorganteLines.length * lineHeight + lineHeight;

    const outorgadoText = `OUTORGADO: ${data.outorgadoNome || "[NOME COMPLETO]"}, ${data.outorgadoCPF ? `portador do CPF nº ${data.outorgadoCPF}` : "CPF [000.000.000-00]"}, ${data.outorgadoRG ? `RG nº ${data.outorgadoRG}` : "RG [00.000.000-0]"}, com endereço em ${data.outorgadoEndereco || "[ENDEREÇO COMPLETO]"}.`;

    const outorgadoLines = doc.splitTextToSize(outorgadoText, pageWidth - 2 * margin);
    doc.text(outorgadoLines, margin, yPos);
    yPos += outorgadoLines.length * lineHeight + lineHeight;

    const bancoInfo = `INSTITUIÇÃO BANCÁRIA: ${data.banco || "[NOME DO BANCO]"}, Agência ${data.agencia || "[0000]"}, Conta ${data.conta || "[00000-0]"}.`;
    const bancoLines = doc.splitTextToSize(bancoInfo, pageWidth - 2 * margin);
    doc.text(bancoLines, margin, yPos);
    yPos += bancoLines.length * lineHeight + lineHeight;

    const poderesText = `PODERES: Pelo presente instrumento particular de procuração, o OUTORGANTE, acima qualificado, nomeia e constitui seu bastante procurador o OUTORGADO, com poderes específicos para representá-lo perante a instituição bancária acima mencionada, podendo abrir e encerrar contas correntes, contas poupança e aplicações financeiras, movimentar contas, efetuar depósitos e saques, transferências e pagamentos, emitir e assinar cheques, contratar e cancelar serviços bancários, cartões de crédito e débito, solicitar empréstimos e financiamentos, fornecer e assinar documentos, prestar declarações, receber correspondências bancárias, extratos e documentos, consultar saldos e movimentações, bem como praticar todos os atos necessários ao bom e fiel cumprimento do presente mandato bancário.`;

    const poderesLines = doc.splitTextToSize(poderesText, pageWidth - 2 * margin);
    doc.text(poderesLines, margin, yPos);
    yPos += poderesLines.length * lineHeight + lineHeight * 2;

    const localData = `${data.cidade || "[CIDADE]"}, ${new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}.`;
    doc.text(localData, margin, yPos);
    yPos += lineHeight * 3;

    doc.line(margin + 40, yPos, pageWidth - margin - 40, yPos);
    yPos += lineHeight;
    doc.setFontSize(10);
    doc.text(data.outorganteNome || "[NOME DO OUTORGANTE]", pageWidth / 2, yPos, { align: "center" });
    yPos += lineHeight * 0.8;
    doc.text("Outorgante", pageWidth / 2, yPos, { align: "center" });

    yPos += lineHeight * 2;
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setFont("helvetica", "bold");
    const avisoText = "OBRIGATÓRIO: Esta procuração DEVE ser reconhecida em cartório com firma reconhecida para ter validade bancária.";
    const avisoLines = doc.splitTextToSize(avisoText, pageWidth - 2 * margin);
    doc.text(avisoLines, margin, yPos);

    doc.save("procuracao-bancaria.pdf");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-building-columns text-blue-600"></i>
          Dados da Procuração
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-3">
              Outorgante (Titular da conta)
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="outorganteNome"
                value={data.outorganteNome}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="outorganteCPF"
                  value={data.outorganteCPF}
                  onChange={handleChange}
                  placeholder="CPF"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="outorganteRG"
                  value={data.outorganteRG}
                  onChange={handleChange}
                  placeholder="RG"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="outorganteEndereco"
                value={data.outorganteEndereco}
                onChange={handleChange}
                placeholder="Endereço Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">
              Outorgado (Procurador)
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="outorgadoNome"
                value={data.outorgadoNome}
                onChange={handleChange}
                placeholder="Nome Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="outorgadoCPF"
                  value={data.outorgadoCPF}
                  onChange={handleChange}
                  placeholder="CPF"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="outorgadoRG"
                  value={data.outorgadoRG}
                  onChange={handleChange}
                  placeholder="RG"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="outorgadoEndereco"
                value={data.outorgadoEndereco}
                onChange={handleChange}
                placeholder="Endereço Completo"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Dados Bancários</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="banco"
                value={data.banco}
                onChange={handleChange}
                placeholder="Nome do Banco"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="agencia"
                  value={data.agencia}
                  onChange={handleChange}
                  placeholder="Agência"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="conta"
                  value={data.conta}
                  onChange={handleChange}
                  placeholder="Conta"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Local e Data</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="cidade"
                value={data.cidade}
                onChange={handleChange}
                placeholder="Cidade"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="date"
                name="data"
                value={data.data}
                onChange={handleChange}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            onClick={generatePDF}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-file-pdf"></i>
            Gerar PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i className="fa-solid fa-eye text-amber-600"></i>
          Prévia do Documento
        </h2>

        <div className="prose prose-sm max-w-none">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold">PROCURAÇÃO BANCÁRIA</h3>
          </div>

          <div className="space-y-4 text-sm">
            <p>
              <strong>OUTORGANTE:</strong> {data.outorganteNome || "[NOME COMPLETO]"},
              {data.outorganteCPF ? ` portador do CPF nº ${data.outorganteCPF}` : " CPF [000.000.000-00]"},
              {data.outorganteRG ? ` RG nº ${data.outorganteRG}` : " RG [00.000.000-0]"},
              residente e domiciliado em {data.outorganteEndereco || "[ENDEREÇO COMPLETO]"}.
            </p>

            <p>
              <strong>OUTORGADO:</strong> {data.outorgadoNome || "[NOME COMPLETO]"},
              {data.outorgadoCPF ? ` portador do CPF nº ${data.outorgadoCPF}` : " CPF [000.000.000-00]"},
              {data.outorgadoRG ? ` RG nº ${data.outorgadoRG}` : " RG [00.000.000-0]"},
              com endereço em {data.outorgadoEndereco || "[ENDEREÇO COMPLETO]"}.
            </p>

            <p>
              <strong>INSTITUIÇÃO BANCÁRIA:</strong> {data.banco || "[NOME DO BANCO]"},
              Agência {data.agencia || "[0000]"}, Conta {data.conta || "[00000-0]"}.
            </p>

            <p>
              <strong>PODERES:</strong> Pelo presente instrumento particular de procuração, o OUTORGANTE, acima qualificado,
              nomeia e constitui seu bastante procurador o OUTORGADO, com poderes específicos para representá-lo perante a
              instituição bancária acima mencionada, podendo abrir e encerrar contas correntes, contas poupança e aplicações
              financeiras, movimentar contas, efetuar depósitos e saques, transferências e pagamentos, emitir e assinar
              cheques, contratar e cancelar serviços bancários, cartões de crédito e débito, solicitar empréstimos e
              financiamentos, fornecer e assinar documentos, prestar declarações, receber correspondências bancárias, extratos
              e documentos, consultar saldos e movimentações, bem como praticar todos os atos necessários ao bom e fiel
              cumprimento do presente mandato bancário.
            </p>

            <p className="mt-6">
              {data.cidade || "[CIDADE]"}, {new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}.
            </p>

            <div className="mt-8 text-center">
              <div className="border-t border-slate-400 w-64 mx-auto mb-2"></div>
              <p className="font-medium">{data.outorganteNome || "[NOME DO OUTORGANTE]"}</p>
              <p className="text-xs text-slate-600">Outorgante</p>
            </div>

            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-xs text-red-900 font-bold">
                OBRIGATÓRIO: Esta procuração DEVE ser reconhecida em cartório com firma reconhecida para ter validade bancária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
