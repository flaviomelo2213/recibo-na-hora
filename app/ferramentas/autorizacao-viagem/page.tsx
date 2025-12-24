'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function AutorizacaoViagem() {
  const [dados, setDados] = useState({
    // Responsável 1 (Quem autoriza)
    resp1Nome: '', resp1CPF: '', resp1RG: '', resp1Endereco: '',
    // Menor
    menorNome: '', menorNasc: '', menorRG: '',
    // Dados da Viagem
    tipoViagem: 'Acompanhado(a)', // ou Desacompanhado
    acompanhanteNome: '', acompanhanteRG: '', acompanhanteCPF: '',
    destino: '', validadeAte: '',
  });

  const handleChange = (e: any) => setDados({ ...dados, [e.target.name]: e.target.value });

  const gerarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    let y = 20;

    const addTexto = (texto: string, negrito = false, alinhamento: 'left' | 'center' | 'justify' = 'justify') => {
        doc.setFont("times", negrito ? "bold" : "normal");
        doc.setFontSize(12);
        const linhas = doc.splitTextToSize(texto, 170);
        doc.text(linhas, (alinhamento === 'center' ? 105 : margem), y, { align: alinhamento === 'justify' ? 'left' : alinhamento });
        y += (linhas.length * 6) + 4;
    };

    doc.setFontSize(14);
    addTexto("AUTORIZAÇÃO DE VIAGEM NACIONAL PARA CRIANÇA OU ADOLESCENTE", true, "center");
    y += 5;
    doc.setFontSize(10);
    addTexto("(Conforme Resolução nº 131/2011 do Conselho Nacional de Justiça - CNJ)", false, "center");
    y += 15;

    addTexto(`Eu, ${dados.resp1Nome.toUpperCase()}, portador(a) do RG nº ${dados.resp1RG} e CPF nº ${dados.resp1CPF}, residente e domiciliado(a) à ${dados.resp1Endereco}, na qualidade de pai/mãe/responsável legal, AUTORIZO:`);
    
    addTexto(`O(a) menor ${dados.menorNome.toUpperCase()}, nascido(a) em ${dados.menorNasc.split('-').reverse().join('/')}, portador(a) do RG nº ${dados.menorRG}.`);

    if (dados.tipoViagem === 'Acompanhado(a)') {
        addTexto(`A viajar em território nacional ACOMPANHADO(A) do(a) Sr(a). ${dados.acompanhanteNome.toUpperCase()}, portador(a) do RG nº ${dados.acompanhanteRG} e CPF nº ${dados.acompanhanteCPF}.`);
    } else {
        addTexto(`A viajar em território nacional DESACOMPANHADO(A).`);
    }

    addTexto(`Esta autorização é válida para viagem com destino a cidade de ${dados.destino.toUpperCase()}, com validade até ${dados.validadeAte.split('-').reverse().join('/')}.`);
    
    addTexto("O presente documento é válido sem emendas ou rasuras.");

    y += 30;
    addTexto("________________________________________________", false, "center");
    addTexto(`Assinatura do Responsável: ${dados.resp1Nome.toUpperCase()}`, false, "center");
    addTexto(`(Reconhecer firma em cartório)`, false, "center");
    
    y += 10;
    addTexto(`Local e Data: ______________________, ${new Date().toLocaleDateString('pt-BR')}`, false, "center");

    doc.save("autorizacao_viagem_menor.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
             <h1 className="text-2xl font-bold text-slate-900"><i className="fa-solid fa-child-reaching text-blue-500"></i> Autorização de Viagem (CNJ)</h1>
             <p className="text-slate-500 text-sm">Para menores em território nacional. Obrigatório reconhecimento de firma em cartório.</p>
        </div>

        <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-blue-900">1. Dados do Responsável (Quem Autoriza)</h3>
                <input name="resp1Nome" placeholder="Nome Completo do Pai/Mãe" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                <div className="grid grid-cols-2 gap-2">
                    <input name="resp1CPF" placeholder="CPF" onChange={handleChange} className="p-3 border rounded" />
                    <input name="resp1RG" placeholder="RG" onChange={handleChange} className="p-3 border rounded" />
                </div>
                <input name="resp1Endereco" placeholder="Endereço Completo" onChange={handleChange} className="w-full p-3 border rounded mt-2" />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-gray-800">2. Dados do Menor</h3>
                <input name="menorNome" placeholder="Nome Completo da Criança/Adolescente" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                <div className="grid grid-cols-2 gap-2">
                    <div><label className="text-xs">Data Nasc.</label><input type="date" name="menorNasc" onChange={handleChange} className="w-full p-3 border rounded" /></div>
                    <div><label className="text-xs">RG do Menor</label><input name="menorRG" placeholder="RG" onChange={handleChange} className="w-full p-3 border rounded" /></div>
                </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2 text-yellow-900">3. Dados da Viagem</h3>
                <label className="block text-sm font-bold mb-2">Como o menor irá viajar?</label>
                <select name="tipoViagem" onChange={handleChange} className="w-full p-3 border rounded mb-4 bg-white">
                    <option value="Acompanhado(a)">Acompanhado de um Adulto (que não seja o pai/mãe)</option>
                    <option value="Desacompanhado">Totalmente Desacompanhado (Sozinho)</option>
                </select>

                {dados.tipoViagem === 'Acompanhado(a)' && (
                    <div className="animate-fade-in mb-4">
                        <input name="acompanhanteNome" placeholder="Nome do Acompanhante (Adulto)" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                         <div className="grid grid-cols-2 gap-2">
                            <input name="acompanhanteCPF" placeholder="CPF do Acompanhante" onChange={handleChange} className="p-3 border rounded" />
                            <input name="acompanhanteRG" placeholder="RG do Acompanhante" onChange={handleChange} className="p-3 border rounded" />
                        </div>
                    </div>
                )}
                 <div className="grid grid-cols-2 gap-2">
                    <input name="destino" placeholder="Cidade de Destino" onChange={handleChange} className="p-3 border rounded" />
                     <div><label className="text-xs">Válido Até</label><input type="date" name="validadeAte" onChange={handleChange} className="w-full p-3 border rounded" /></div>
                </div>
            </div>

            <button onClick={gerarPDF} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                <i className="fa-solid fa-file-pdf"></i> GERAR AUTORIZAÇÃO CNJ
            </button>
            <p className="text-xs text-center text-gray-500 mt-2 bg-yellow-100 p-2 rounded">Atenção: É necessário reconhecer firma da assinatura do responsável em cartório para ter validade.</p>
        </div>
      </div>
    </div>
  );
}
