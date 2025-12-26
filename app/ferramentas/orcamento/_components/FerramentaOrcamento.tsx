"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

// Interface para definir o que é um item
interface ItemOrcamento {
  descricao: string;
  qtd: number;
  valorUnitario: number;
}

export default function FerramentaOrcamento() {
  const [cliente, setCliente] = useState("");
  const [documento, setDocumento] = useState(""); // CPF ou CNPJ
  const [telefone, setTelefone] = useState("");
  const [validade, setValidade] = useState("15 dias");
  
  // Começa com um item vazio
  const [itens, setItens] = useState<ItemOrcamento[]>([
    { descricao: "Serviço / Produto Exemplo", qtd: 1, valorUnitario: 100 }
  ]);

  // Função para adicionar nova linha
  const addItem = () => {
    setItens([...itens, { descricao: "", qtd: 1, valorUnitario: 0 }]);
  };

  // Função para remover linha
  const removeItem = (index: number) => {
    const newItens = itens.filter((_, i) => i !== index);
    setItens(newItens);
  };

  // Atualizar valores da linha
  const updateItem = (index: number, field: keyof ItemOrcamento, value: any) => {
    const newItens = [...itens];
    // @ts-ignore
    newItens[index][field] = value;
    setItens(newItens);
  };

  // Calcular Total Geral
  const totalGeral = itens.reduce((acc, item) => acc + (item.qtd * item.valorUnitario), 0);

  const handlePrint = () => {
    const doc = new jsPDF();
    
    // --- CABEÇALHO ---
    doc.setFillColor(41, 128, 185); // Azul bonito
    doc.rect(0, 0, 210, 40, "F"); // Barra azul no topo
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.text("ORÇAMENTO", 105, 25, { align: "center" });
    
    // --- DADOS DO CLIENTE ---
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("DADOS DO CLIENTE:", 14, 55);
    doc.setFont("helvetica", "normal");
    
    doc.text(`Nome: ${cliente}`, 14, 62);
    doc.text(`CPF/CNPJ: ${documento}`, 14, 69);
    doc.text(`Telefone: ${telefone}`, 14, 76);

    // --- DADOS DO ORÇAMENTO ---
    doc.setFont("helvetica", "bold");
    doc.text("DETALHES:", 120, 55);
    doc.setFont("helvetica", "normal");
    doc.text(`Data de Emissão: ${new Date().toLocaleDateString()}`, 120, 62);
    doc.text(`Validade: ${validade}`, 120, 69);
    doc.text(`Nº Controle: ${Math.floor(Math.random() * 10000)}`, 120, 76);

    // --- TABELA DE ITENS (Cabeçalho) ---
    let yPos = 90;
    doc.setFillColor(240, 240, 240);
    doc.rect(14, yPos - 5, 182, 8, "F"); // Fundo cinza cabeçalho
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("DESCRIÇÃO", 16, yPos);
    doc.text("QTD", 130, yPos);
    doc.text("UNIT (R$)", 150, yPos);
    doc.text("TOTAL (R$)", 175, yPos);

    // --- ITENS (Loop) ---
    yPos += 8;
    doc.setFont("helvetica", "normal");
    
    itens.forEach((item) => {
      const totalItem = item.qtd * item.valorUnitario;
      
      // Limita o tamanho do texto para não quebrar o layout
      const descricaoLimpa = item.descricao.substring(0, 50); 

      doc.text(descricaoLimpa, 16, yPos);
      doc.text(item.qtd.toString(), 130, yPos);
      doc.text(item.valorUnitario.toFixed(2), 150, yPos);
      doc.text(totalItem.toFixed(2), 175, yPos);
      
      doc.setDrawColor(200, 200, 200);
      doc.line(14, yPos + 2, 196, yPos + 2); // Linha separadora
      yPos += 8;
    });

    // --- TOTAL FINAL ---
    yPos += 5;
    doc.setFillColor(41, 128, 185); 
    doc.rect(130, yPos, 66, 12, "F"); // Fundo azul total
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`TOTAL: R$ ${totalGeral.toFixed(2)}`, 163, yPos + 8, { align: "center" });

    // --- RODAPÉ ---
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text("Este orçamento não garante reserva de estoque. Sujeito a alteração após validade.", 105, 280, { align: "center" });
    doc.text("Gerado gratuitamente por ReciboNaHora.com.br", 105, 285, { align: "center" });

    doc.save("orcamento_comercial.pdf");
  };

  return (
    <div className="space-y-6">
      {/* Bloco 1: Quem é o cliente? */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">1. Dados do Cliente</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            placeholder="Nome do Cliente" 
            className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setCliente(e.target.value)}
          />
          <input 
            placeholder="CPF ou CNPJ" 
            className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setDocumento(e.target.value)}
          />
          <input 
            placeholder="Telefone / WhatsApp" 
            className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input 
            placeholder="Validade (Ex: 10 dias)" 
            value={validade}
            className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setValidade(e.target.value)}
          />
        </div>
      </div>

      {/* Bloco 2: Itens */}
      <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide flex justify-between items-center">
          2. Itens e Serviços
          <span className="text-xs font-normal text-gray-500">Adicione quantos itens precisar</span>
        </h3>
        
        {itens.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-2 mb-3 items-end md:items-center bg-gray-50 p-2 rounded border border-gray-100">
            <div className="flex-grow w-full">
              <label className="text-xs text-gray-500 ml-1">Descrição</label>
              <input 
                placeholder="Ex: Formatação de PC"
                value={item.descricao}
                onChange={(e) => updateItem(index, 'descricao', e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="w-20">
               <label className="text-xs text-gray-500 ml-1">Qtd</label>
               <input 
                type="number"
                value={item.qtd}
                onChange={(e) => updateItem(index, 'qtd', Number(e.target.value))}
                className="border p-2 rounded w-full text-center"
              />
            </div>
            <div className="w-28">
               <label className="text-xs text-gray-500 ml-1">Unit (R$)</label>
               <input 
                type="number"
                value={item.valorUnitario}
                onChange={(e) => updateItem(index, 'valorUnitario', Number(e.target.value))}
                className="border p-2 rounded w-full text-right"
              />
            </div>
            <div className="w-24 text-right font-bold text-gray-700 pt-4">
              R$ {(item.qtd * item.valorUnitario).toFixed(2)}
            </div>
            
            <button 
                onClick={() => removeItem(index)}
                className="text-red-400 hover:text-red-600 p-2 pt-4"
                title="Remover item"
            >
                <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}

        <button 
            onClick={addItem} 
            className="mt-2 text-blue-600 text-sm font-bold hover:underline flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 transition"
        >
          <i className="fa-solid fa-plus-circle"></i> Adicionar novo item
        </button>
      </div>

      {/* Bloco 3: Total e Ação */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-600 p-6 rounded-xl shadow-lg text-white">
        <div>
            <span className="block text-blue-200 text-sm">Valor Total do Orçamento</span>
            <span className="text-3xl font-bold">R$ {totalGeral.toFixed(2)}</span>
        </div>
        
        <button 
            onClick={handlePrint}
            className="mt-4 md:mt-0 bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-md transition-all flex items-center gap-2"
        >
            <i className="fa-solid fa-file-pdf"></i> Baixar PDF Agora
        </button>
      </div>
    </div>
  );
}
