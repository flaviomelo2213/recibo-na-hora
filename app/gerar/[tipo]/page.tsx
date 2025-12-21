'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useParams } from 'next/navigation';

export default function GeradorUniversal() {
  const params = useParams();
  const tipo = params.tipo; // Pega o id do documento da URL

  // Estado Único para todos os formulários
  const [formData, setFormData] = useState<any>({
    valor: '', data: new Date().toISOString().split('T')[0], cidade: '',
    pagadorNome: '', pagadorCPF: '',
    recebedorNome: '', recebedorCPF: '',
    referente: '',
    // Campos específicos Veículo
    veiculoModelo: '', placa: '', ano: '',
    // Campos específicos Aluguel
    enderecoImovel: '', inicio: '', fim: '',
    // Campos específicos Promissória
    vencimento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- LÓGICA DE GERAÇÃO DO PDF PARA CADA TIPO ---
  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");

    if (tipo === 'recibo_simples' || tipo === 'recibo_aluguel') {
        doc.setFontSize(22);
        doc.text(tipo === 'recibo_aluguel' ? "RECIBO DE ALUGUEL" : "RECIBO DE PAGAMENTO", 105, 20, { align: "center" });
        
        doc.setFontSize(12);
        doc.rect(20, 35, 170, 120); // Borda
        
        doc.text(`VALOR: R$ ${formData.valor}`, 30, 50);
        doc.text(`Recebi(emos) de ${formData.pagadorNome.toUpperCase()}`, 30, 70);
        if(formData.pagadorCPF) doc.text(`CPF: ${formData.pagadorCPF}`, 30, 77);
        
        doc.text(`A importância de R$ ${formData.valor}`, 30, 90);
        doc.text(`Referente a: ${formData.referente || (tipo === 'recibo_aluguel' ? 'Aluguel do imóvel' : 'Serviços prestados')}`, 30, 105);
        if(tipo === 'recibo_aluguel' && formData.enderecoImovel) doc.text(`Imóvel: ${formData.enderecoImovel}`, 30, 115);

        doc.text(`${formData.cidade}, ${formData.data.split('-').reverse().join('/')}`, 30, 135);
        
        doc.line(30, 155, 120, 155);
        doc.text(formData.recebedorNome.toUpperCase(), 30, 160);
        doc.text(`CPF/CNPJ: ${formData.recebedorCPF}`, 30, 166);
    } 
    
    else if (tipo === 'nota_promissoria') {
        doc.setFontSize(20);
        doc.text("NOTA PROMISSÓRIA", 105, 20, { align: "center" });
        doc.rect(20, 30, 170, 100);
        doc.setFontSize(12);
        doc.text(`No dia ${formData.vencimento ? formData.vencimento.split('-').reverse().join('/') : '___/___/___'} pagarei por esta única via de NOTA PROMISSÓRIA`, 30, 50);
        doc.text(`a ${formData.recebedorNome.toUpperCase()} ou à sua ordem,`, 30, 60);
        doc.text(`a quantia de R$ ${formData.valor}.`, 30, 70);
        doc.text(`Pagável em ${formData.cidade}.`, 30, 80);
        doc.setFontSize(10);
        doc.text("EMITENTE (Devedor):", 30, 100);
        doc.text(`Nome: ${formData.pagadorNome.toUpperCase()}`, 30, 108);
        doc.text(`CPF: ${formData.pagadorCPF}`, 30, 114);
        doc.line(100, 120, 180, 120);
        doc.text("Assinatura", 140, 125, {align: 'center'});
    }

    else if (tipo === 'venda_veiculo' || tipo === 'sinal_veiculo') {
        doc.setFontSize(18);
        doc.text(tipo === 'sinal_veiculo' ? "RECIBO DE SINAL (VEÍCULO)" : "RECIBO DE COMPRA E VENDA", 105, 20, { align: "center" });
        doc.setFontSize(12);
        const texto = `Eu, ${formData.recebedorNome.toUpperCase()} (Vendedor), CPF ${formData.recebedorCPF}, declaro que RECEBI de ${formData.pagadorNome.toUpperCase()} (Comprador), CPF ${formData.pagadorCPF}, o valor de R$ ${formData.valor}.`;
        const veiculo = `Referente ao veículo: ${formData.veiculoModelo.toUpperCase()}, Placa ${formData.placa.toUpperCase()}, Ano ${formData.ano}.`;
        
        const splitTexto = doc.splitTextToSize(texto, 170);
        doc.text(splitTexto, 20, 50);
        doc.text(veiculo, 20, 50 + (splitTexto.length * 7) + 10);
        
        doc.text(`${formData.cidade}, ${formData.data.split('-').reverse().join('/')}`, 20, 120);
        doc.line(20, 150, 150, 150);
        doc.text("Assinatura do Vendedor", 20, 156);
    }

    else if (tipo === 'declaracao_uber') {
        doc.setFontSize(18);
        doc.text("DECLARAÇÃO DE RENDIMENTOS", 105, 20, { align: "center" });
        doc.setFontSize(12);
        const texto = `Eu, ${formData.recebedorNome.toUpperCase()}, inscrito(a) no CPF sob o nº ${formData.recebedorCPF}, DECLARO para os devidos fins de comprovação de renda que exerço atividade autônoma de Motorista de Aplicativo/Prestador de Serviços.`;
        const renda = `Declaro que minha renda média mensal é de R$ ${formData.valor}.`;
        
        const splitTexto = doc.splitTextToSize(texto, 170);
        doc.text(splitTexto, 20, 50);
        doc.text(renda, 20, 50 + (splitTexto.length * 7) + 10);
        doc.text("Declaro ser verdade e dou fé.", 20, 100);
        
        doc.text(`${formData.cidade}, ${formData.data.split('-').reverse().join('/')}`, 20, 120);
        doc.line(50, 150, 160, 150);
        doc.text("Assinatura do Declarante", 105, 156, { align: "center" });
    }

    else {
        alert("Modelo em desenvolvimento!");
        return;
    }

    doc.save(`${tipo}.pdf`);
  };

  // --- INTERFACE (O que aparece na tela) ---
  const titulos: any = {
    recibo_simples: "Gerar Recibo Simples",
    nota_promissoria: "Gerar Nota Promissória",
    venda_veiculo: "Recibo de Venda de Veículo",
    sinal_veiculo: "Recibo de Sinal (Veículo)",
    recibo_aluguel: "Recibo de Aluguel",
    declaracao_uber: "Declaração de Renda (Autônomo)"
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-slate-800">{titulos[tipo as string] || "Gerador de Documento"}</h1>
        <p className="text-gray-500 text-sm">Preencha os dados abaixo.</p>
      </div>

      <div className="space-y-4">
        {/* CAMPOS COMUNS */}
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-bold text-gray-700">Valor (R$)</label>
                <input name="valor" onChange={handleChange} className="w-full p-3 border rounded-lg" placeholder="0,00" />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700">Data</label>
                <input type="date" name="data" value={formData.data} onChange={handleChange} className="w-full p-3 border rounded-lg" />
            </div>
        </div>

        {/* CAMPOS DINÂMICOS */}
        {(tipo === 'venda_veiculo' || tipo === 'sinal_veiculo') && (
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 grid grid-cols-3 gap-3">
                <input name="veiculoModelo" onChange={handleChange} placeholder="Modelo do Veículo" className="col-span-3 p-2 border rounded" />
                <input name="placa" onChange={handleChange} placeholder="Placa" className="p-2 border rounded" />
                <input name="ano" onChange={handleChange} placeholder="Ano" className="p-2 border rounded" />
            </div>
        )}
        
        {(tipo === 'nota_promissoria') && (
            <div>
                <label className="block text-sm font-bold text-gray-700">Data de Vencimento</label>
                <input type="date" name="vencimento" onChange={handleChange} className="w-full p-3 border rounded-lg" />
            </div>
        )}

        {(tipo === 'recibo_aluguel') && (
            <input name="enderecoImovel" onChange={handleChange} placeholder="Endereço do Imóvel" className="w-full p-3 border rounded-lg" />
        )}

        {tipo !== 'declaracao_uber' && (
            <>
                <div className="grid grid-cols-2 gap-4">
                    <input name="pagadorNome" onChange={handleChange} placeholder="Quem Paga (Nome)" className="p-3 border rounded-lg" />
                    <input name="pagadorCPF" onChange={handleChange} placeholder="CPF do Pagador" className="p-3 border rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input name="recebedorNome" onChange={handleChange} placeholder="Quem Recebe (Nome)" className="p-3 border rounded-lg" />
                    <input name="recebedorCPF" onChange={handleChange} placeholder="CPF/CNPJ Recebedor" className="p-3 border rounded-lg" />
                </div>
            </>
        )}

        {tipo === 'declaracao_uber' && (
            <div className="bg-purple-50 p-4 rounded-lg">
                <p className="mb-2 text-sm text-purple-800 font-bold">Dados do Motorista/Autônomo:</p>
                <input name="recebedorNome" onChange={handleChange} placeholder="Seu Nome Completo" className="w-full p-3 border rounded-lg mb-2" />
                <input name="recebedorCPF" onChange={handleChange} placeholder="Seu CPF" className="w-full p-3 border rounded-lg" />
            </div>
        )}
        
        {tipo !== 'declaracao_uber' && (
            <input name="referente" onChange={handleChange} placeholder="Referente a (Opcional)" className="w-full p-3 border rounded-lg" />
        )}
        
        <input name="cidade" onChange={handleChange} placeholder="Cidade" className="w-full p-3 border rounded-lg" />

        <button onClick={gerarPDF} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg mt-6 text-lg transition-transform hover:scale-[1.02]">
          <i className="fa-solid fa-download mr-2"></i> Baixar PDF
        </button>
      </div>
    </div>
  );
}
