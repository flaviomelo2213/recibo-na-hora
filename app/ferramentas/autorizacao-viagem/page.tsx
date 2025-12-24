'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function AutorizacaoViagem() {
  const [dados, setDados] = useState({
    resp1Nome: '', resp1CPF: '', resp1RG: '', resp1Endereco: '',
    menorNome: '', menorNasc: '', menorRG: '',
    tipoViagem: 'Acompanhado(a)', 
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
    addTexto("AUTORIZAÇÃO DE VIAGEM NACIONAL", true, "center");
    y += 5;
    doc.setFontSize(10);
    addTexto("(Conforme Resolução nº 131/2011 do CNJ)", false, "center");
    y += 15;

    addTexto(`Eu, ${dados.resp1Nome.toUpperCase()}, portador(a) do RG nº ${dados.resp1RG} e CPF nº ${dados.resp1CPF}, residente em ${dados.resp1Endereco}, na qualidade de responsável legal, AUTORIZO:`);
    
    addTexto(`O(a) menor ${dados.menorNome.toUpperCase()}, nascido(a) em ${dados.menorNasc.split('-').reverse().join('/')}, RG nº ${dados.menorRG}.`);

    if (dados.tipoViagem === 'Acompanhado(a)') {
        addTexto(`A viajar em território nacional ACOMPANHADO(A) de ${dados.acompanhanteNome.toUpperCase()}, RG nº ${dados.acompanhanteRG}, CPF nº ${dados.acompanhanteCPF}.`);
    } else {
        addTexto(`A viajar em território nacional DESACOMPANHADO(A).`);
    }

    addTexto(`Destino: ${dados.destino.toUpperCase()}. Validade: Até ${dados.validadeAte.split('-').reverse().join('/')}.`);
    
    y += 30;
    addTexto("________________________________________________", false, "center");
    addTexto(dados.resp1Nome.toUpperCase(), false, "center");
    addTexto("(Reconhecer Firma em Cartório por Autenticidade ou Semelhança)", false, "center");
    
    y += 10;
    addTexto(`Data: ${new Date().toLocaleDateString('pt-BR')}`, false, "center");

    doc.save("autorizacao_viagem.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
        <div className="text-center mb-8 bg-pink-600 text-white p-6 rounded-xl">
             <h1 className="text-2xl font-bold"><i className="fa-solid fa-child-reaching"></i> Autorização de Viagem (CNJ)</h1>
             <p className="text-pink-100 text-sm">Modelo oficial para menores em território nacional.</p>
        </div>

        <div className="space-y-6">
            <h3 className="font-bold text-slate-700 border-b pb-2">1. Responsável e Menor</h3>
            <input name="resp1Nome" placeholder="Nome do Responsável (Pai/Mãe)" onChange={handleChange} className="w-full p-3 border rounded" />
            <div className="grid grid-cols-2 gap-2">
                <input name="resp1RG" placeholder="RG Responsável" onChange={handleChange} className="p-3 border rounded" />
                <input name="resp1CPF" placeholder="CPF Responsável" onChange={handleChange} className="p-3 border rounded" />
            </div>
            <input name="resp1Endereco" placeholder="Endereço Completo" onChange={handleChange} className="w-full p-3 border rounded" />
            
            <div className="bg-pink-50 p-4 rounded border border-pink-100">
                <input name="menorNome" placeholder="Nome do Menor" onChange={handleChange} className="w-full p-3 border rounded mb-2" />
                <div className="grid grid-cols-2 gap-2">
                    <input name="menorRG" placeholder="RG do Menor" onChange={handleChange} className="p-3 border rounded" />
                    <input type="date" name="menorNasc" onChange={handleChange} className="p-3 border rounded" />
                </div>
            </div>

            <h3 className="font-bold text-slate-700 border-b pb-2">2. Dados da Viagem</h3>
            <select name="tipoViagem" onChange={handleChange} className="w-full p-3 border rounded bg-white mb-2">
                <option value="Acompanhado(a)">Viajar Acompanhado(a) de Adulto</option>
                <option value="Desacompanhado">Viajar Desacompanhado(a)</option>
            </select>
            
            {dados.tipoViagem === 'Acompanhado(a)' && (
                <div className="animate-fade-in space-y-2">
                    <input name="acompanhanteNome" placeholder="Nome do Acompanhante" onChange={handleChange} className="w-full p-3 border rounded" />
                    <div className="grid grid-cols-2 gap-2">
                         <input name="acompanhanteRG" placeholder="RG Acompanhante" onChange={handleChange} className="p-3 border rounded" />
                         <input name="acompanhanteCPF" placeholder="CPF Acompanhante" onChange={handleChange} className="p-3 border rounded" />
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-2 gap-2 mt-2">
                <input name="destino" placeholder="Cidade de Destino" onChange={handleChange} className="p-3 border rounded" />
                <input type="date" name="validadeAte" onChange={handleChange} className="p-3 border rounded" />
            </div>

            <button onClick={gerarPDF} className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition">
                <i className="fa-solid fa-file-pdf"></i> GERAR AUTORIZAÇÃO PDF
            </button>
        </div>
      </div>

      {/* --- TEXTO SEO + AVISO LEGAL --- */}
      <section className="max-w-3xl mx-auto prose prose-slate">
        <h2 className="text-2xl font-bold text-slate-900">Como funciona a Autorização de Viagem para Menores?</h2>
        <p className="text-slate-600">
            Segundo a Resolução nº 131 do CNJ, nenhuma criança ou adolescente menor de 16 anos pode viajar para fora da comarca onde reside desacompanhado dos pais ou responsáveis sem expressa autorização judicial ou extrajudicial (escrita).
        </p>

        <h3 className="font-bold text-slate-800 mt-4">Passo a Passo Obrigatório:</h3>
        <ol className="list-decimal pl-5 text-slate-600 space-y-2">
            <li>Preencha o formulário acima com os dados exatos dos documentos (RG/Certidão).</li>
            <li>Gere e <strong>imprima 2 vias</strong> do documento.</li>
            <li>O responsável (pai ou mãe) deve ir ao cartório e <strong>Reconhecer Firma</strong> da assinatura.</li>
            <li>Uma via ficará retida na empresa de transporte (ônibus/avião) e a outra fica com o acompanhante.</li>
        </ol>

        {/* AVISO LEGAL PADRÃO */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-8">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <i className="fa-solid fa-scale-balanced"></i> Aviso Legal Importante
            </h4>
            <p className="text-sm text-red-900 leading-relaxed text-justify">
                Este modelo segue os padrões do CNJ, mas as regras de embarque podem variar conforme a empresa de transporte (aéreo/terrestre). 
                <strong>Verifique sempre com a companhia aérea ou rodoviária</strong> quais são as exigências específicas antes da viagem. 
                O ReciboNaHora não se responsabiliza por impedimentos de embarque decorrentes de preenchimento incorreto ou falta de reconhecimento de firma.
            </p>
        </div>
      </section>
    </div>
  );
}
