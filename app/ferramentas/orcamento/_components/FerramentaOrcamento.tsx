'use client';

import { useState } from "react";
import { jsPDF } from "jspdf";
import DecisionScreen from "../../../components/DecisionScreen";

interface ItemOrcamento {
  descricao: string;
  qtd: number;
  valorUnitario: number;
}

export default function FerramentaOrcamento() {
  const [cliente, setCliente] = useState("Empresa Modelo Ltda.");
  const [documento, setDocumento] = useState("00.000.000/0001-00");
  const [telefone, setTelefone] = useState("(11) 99999-9999");
  const [validade, setValidade] = useState("15 dias");
  const [itens, setItens] = useState<ItemOrcamento[]>([
    { descricao: "Desenvolvimento de Website Institucional", qtd: 1, valorUnitario: 3500 },
    { descricao: "Taxa de Manutenção Mensal", qtd: 3, valorUnitario: 250 },
  ]);

  const [showDecision, setShowDecision] = useState(false);
  const [pdfInstance, setPdfInstance] = useState<jsPDF | null>(null);
  const [pdfFileName, setPdfFileName] = useState("");

  const addItem = () => {
    setItens([...itens, { descricao: "", qtd: 1, valorUnitario: 0 }]);
  };

  const removeItem = (index: number) => {
    const newItens = itens.filter((_, i) => i !== index);
    setItens(newItens);
  };

  const updateItem = (index: number, field: keyof ItemOrcamento, value: any) => {
    const newItens = [...itens];
    // @ts-ignore
    newItens[index][field] = value;
    setItens(newItens);
  };

  const totalGeral = itens.reduce((acc, item) => acc + (item.qtd * item.valorUnitario), 0);

  const generatePdfAndShowDecision = () => {
    const doc = new jsPDF();
    const fileName = `orcamento-${cliente.toLowerCase().replace(/[^a-z0-9]/g, '-')}.pdf`;

    doc.setFillColor(40, 38, 36);
    doc.rect(0, 0, 210, 40, "F");
    doc.setTextColor(252, 251, 250);
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.text("ORÇAMENTO COMERCIAL", 105, 25, { align: "center" });
    doc.setTextColor(28, 25, 23);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("DADOS DO CLIENTE:", 14, 55);
    doc.setFont("helvetica", "normal");
    doc.text(`Nome: ${cliente}`, 14, 62);
    doc.text(`CPF/CNPJ: ${documento}`, 14, 69);
    doc.text(`Telefone: ${telefone}`, 14, 76);
    doc.setFont("helvetica", "bold");
    doc.text("DETALHES DO ORÇAMENTO:", 120, 55);
    doc.setFont("helvetica", "normal");
    doc.text(`Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}`, 120, 62);
    doc.text(`Validade da Proposta: ${validade}`, 120, 69);
    doc.text(`Nº Controle: ${Math.floor(Math.random() * 10000)}`, 120, 76);
    let yPos = 90;
    doc.setFillColor(245, 245, 244);
    doc.rect(14, yPos - 5, 182, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(87, 83, 78);
    doc.text("DESCRIÇÃO DO ITEM/SERVIÇO", 16, yPos);
    doc.text("QTD", 130, yPos);
    doc.text("UNIT (R$)", 150, yPos);
    doc.text("TOTAL (R$)", 175, yPos);
    yPos += 8;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(28, 25, 23);
    itens.forEach((item) => {
      const totalItem = item.qtd * item.valorUnitario;
      const descricaoLimpa = item.descricao.substring(0, 50);
      doc.text(descricaoLimpa, 16, yPos);
      doc.text(item.qtd.toString(), 133, yPos, {align: "center"});
      doc.text(item.valorUnitario.toFixed(2), 160, yPos, {align: "right"});
      doc.text(totalItem.toFixed(2), 190, yPos, {align: "right"});
      doc.setDrawColor(231, 229, 228);
      doc.line(14, yPos + 3, 196, yPos + 3);
      yPos += 8;
    });
    yPos += 5;
    doc.setFillColor(40, 38, 36);
    doc.rect(130, yPos, 66, 12, "F");
    doc.setTextColor(250, 250, 249);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`TOTAL: R$ ${totalGeral.toFixed(2)}`, 163, yPos + 8, { align: "center" });
    doc.setTextColor(120, 113, 108);
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text("Orçamento sujeito a alteração de valores após a data de validade.", 105, 280, { align: "center" });
    doc.text("Gerado gratuitamente em CartorioPremium.com.br", 105, 285, { align: "center" });

    setPdfInstance(doc);
    setPdfFileName(fileName);
    setShowDecision(true);
  };

  const handleDownloadPdf = () => {
    if (pdfInstance) {
      pdfInstance.save(pdfFileName);
    }
  };

  if (showDecision) {
    return (
      <DecisionScreen 
        onDownloadPdf={handleDownloadPdf} 
        digitalSignUrl="https://indiquei.app/AOYZABK"
      />
    )
  }

  return (
    <div className="space-y-6">
      {/* Bloco 1: Dados do Cliente */}
      <div className="bg-stone-50/80 p-5 rounded-lg border border-stone-200">
        <h3 className="text-sm font-bold text-stone-700 mb-3 uppercase tracking-wider">1. Dados do Cliente</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            placeholder="Nome do Cliente ou Razão Social" 
            value={cliente}
            className="border border-stone-300 p-3 rounded-md w-full focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 outline-none bg-white"
            onChange={(e) => setCliente(e.target.value)}
          />
          <input 
            placeholder="CPF ou CNPJ" 
            value={documento}
            className="border border-stone-300 p-3 rounded-md w-full focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 outline-none bg-white"
            onChange={(e) => setDocumento(e.target.value)}
          />
          <input 
            placeholder="Telefone / WhatsApp" 
            value={telefone}
            className="border border-stone-300 p-3 rounded-md w-full focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 outline-none bg-white"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input 
            placeholder="Validade (Ex: 10 dias)" 
            value={validade}
            className="border border-stone-300 p-3 rounded-md w-full focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 outline-none bg-white"
            onChange={(e) => setValidade(e.target.value)}
          />
        </div>
      </div>

      {/* Bloco 2: Itens e Serviços */}
      <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
        <h3 className="text-sm font-bold text-stone-700 mb-3 uppercase tracking-wider flex justify-between items-center">
          2. Itens e Serviços
          <span className="text-xs font-normal text-stone-500">Adicione ou remova linhas</span>
        </h3>
        
        {itens.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_80px_110px_100px_auto] gap-2 mb-3 items-center bg-stone-50/80 p-2 rounded-md border border-stone-200/90">
            <div className="flex-grow w-full">
              <label className="text-xs text-stone-500 ml-1">Descrição</label>
              <input 
                placeholder="Ex: Manutenção de Ar Condicionado"
                value={item.descricao}
                onChange={(e) => updateItem(index, 'descricao', e.target.value)}
                className="border border-stone-300 p-2 rounded-md w-full text-sm"
              />
            </div>
            <div className="w-full">
               <label className="text-xs text-stone-500 ml-1">Qtd</label>
               <input 
                type="number"
                value={item.qtd}
                onChange={(e) => updateItem(index, 'qtd', Number(e.target.value))}
                className="border border-stone-300 p-2 rounded-md w-full text-sm text-center"
              />
            </div>
            <div className="w-full">
               <label className="text-xs text-stone-500 ml-1">Unit (R$)</label>
               <input 
                type="number"
                value={item.valorUnitario}
                onChange={(e) => updateItem(index, 'valorUnitario', Number(e.target.value))}
                className="border border-stone-300 p-2 rounded-md w-full text-sm text-right"
              />
            </div>
            <div className="text-right font-bold text-stone-700 self-end pb-2">
              R$ {(item.qtd * item.valorUnitario).toFixed(2)}
            </div>
            
            <div className="text-right self-end pb-1">
                <button 
                    onClick={() => removeItem(index)}
                    className="text-stone-400 hover:text-red-600 p-2 rounded-md transition-colors duration-200"
                    title="Remover item"
                >
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
          </div>
        ))}

        <button 
            onClick={addItem} 
            className="mt-3 text-amber-700 text-sm font-bold hover:underline flex items-center gap-2 px-2 py-1 rounded hover:bg-amber-50 transition-colors"
        >
          <i className="fa-solid fa-plus-circle"></i> Adicionar novo item
        </button>
      </div>

      {/* Bloco 3: Total e Ação */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-stone-800 p-6 rounded-xl shadow-lg text-white">
        <div>
            <span className="block text-stone-400 text-sm">Valor Total do Orçamento</span>
            <span className="text-3xl font-bold">R$ {totalGeral.toFixed(2)}</span>
        </div>
        
        <button 
            onClick={generatePdfAndShowDecision}
            className="mt-4 md:mt-0 bg-amber-500 text-stone-900 hover:bg-amber-600 font-bold py-3 px-8 rounded-lg shadow-md transition-all flex items-center gap-2"
        >
            <i className="fa-solid fa-check"></i> Finalizar e Gerar Documento
        </button>
      </div>
    </div>
  );
}
