'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function NotaPromissoria() {
  const [dados, setDados] = useState({
    numero: '01/01',
    valor: '',
    vencimento: '',
    credorNome: '', credorCPF: '',
    devedorNome: '', devedorCPF: '', devedorEndereco: '',
    cidade: '', dataEmissao: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: any) => setDados({ ...dados, [e.target.name]: e.target.value });

  const gerarPDF = () => {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [210, 100] }); // Formato alongado tipo cheque
    
    // Borda decorativa
    doc.setLineWidth(0.5);
    doc.rect(5, 5, 200, 90);
    doc.rect(7, 7, 196, 86);

    // Título
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("NOTA PROMISSÓRIA", 105, 20, { align: "center" });

    // Campos Superiores
    doc.setFontSize(12);
    doc.text(`Nº: ${dados.numero}`, 15, 35);
    doc.text(`Vencimento: ${dados.vencimento.split('-').reverse().join('/')}`, 150, 35);
    
    doc.setFontSize(16);
    doc.text(`R$ ${dados.valor}`, 150, 45);

    // Texto Legal
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const texto = `Ao dia ${dados.vencimento.split('-').reverse().join('/')}, pagarei por esta via de NOTA PROMISSÓRIA a ${dados.credorNome.toUpperCase()} ou à sua ordem, a quantia de R$ ${dados.valor} em moeda corrente deste país.`;
    const linhas = doc.splitTextToSize(texto, 180);
    doc.text(linhas, 15, 55);

    doc.text(`Pagável em: ${dados.cidade.toUpperCase()}`, 15, 75);

    // Dados do Devedor (Emitente)
    doc.setFontSize(9);
    doc.text("EMITENTE (Devedor):", 15, 82);
    doc.text(`${dados.devedorNome.toUpperCase()}`, 15, 86);
    doc.text(`CPF/CNPJ: ${dados.devedorCPF} - ${dados.devedorEndereco}`, 15, 90);

    // Assinatura
    doc.line(120, 85, 190, 85);
    doc.text("Assinatura do Emitente", 155, 89, { align: "center" });

    doc.save("nota_promissoria.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* --- GERADOR (Parte Funcional) --- */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
        <div className="bg-slate-900 text-white p-6 text-center">
             <h1 className="text-2xl font-bold"><i className="fa-solid fa-money-bill-transfer"></i> Gerador de Nota Promissória</h1>
             <p className="text-slate-300 text-sm">Válido juridicamente em todo território nacional.</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h3 className="font-bold text-slate-700 border-b pb-2">1. Detalhes do Pagamento</h3>
                <div className="grid grid-cols-2 gap-2">
                    <input name="numero" placeholder="Nº (Ex: 01/02)" value={dados.numero} onChange={handleChange} className="p-3 border rounded bg-gray-50" />
                    <input name="valor" type="number" placeholder="Valor (R$)" onChange={handleChange} className="p-3 border rounded bg-gray-50 font-bold text-green-700" />
                </div>
                <label className="block text-xs font-bold text-slate-500">Data de Vencimento</label>
                <input name="vencimento" type="date" onChange={handleChange} className="w-full p-3 border rounded bg-gray-50" />
                
                <h3 className="font-bold text-slate-700 border-b pb-2 mt-4">2. Credor (Quem recebe)</h3>
                <input name="credorNome" placeholder="Nome Completo" onChange={handleChange} className="w-full p-3 border rounded" />
                <input name="credorCPF" placeholder="CPF ou CNPJ" onChange={handleChange} className="w-full p-3 border rounded" />
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-red-700 border-b pb-2">3. Devedor (Quem paga)</h3>
                <input name="devedorNome" placeholder="Nome do Pagador" onChange={handleChange} className="w-full p-3 border rounded" />
                <input name="devedorCPF" placeholder="CPF/CNPJ do Pagador" onChange={handleChange} className="w-full p-3 border rounded" />
                <input name="devedorEndereco" placeholder="Endereço Completo" onChange={handleChange} className="w-full p-3 border rounded" />

                <div className="grid grid-cols-2 gap-2 mt-4">
                    <input name="cidade" placeholder="Cidade" onChange={handleChange} className="p-3 border rounded" />
                    <input name="dataEmissao" type="date" value={dados.dataEmissao} onChange={handleChange} className="p-3 border rounded" />
                </div>

                <button onClick={gerarPDF} className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:-translate-y-1">
                    <i className="fa-solid fa-print"></i> BAIXAR NOTA PROMISSÓRIA
                </button>
            </div>
        </div>
      </div>

      {/* --- CONTEÚDO SEO (O Segredo do Concorrente) --- */}
      <section className="max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">O que é uma Nota Promissória?</h2>
        <p className="text-slate-600 mb-6">
            A <strong>Nota Promissória</strong> é um título de crédito oficial regulamentado pelo Decreto nº 2.044/1908 e pela Lei Uniforme de Genebra. Ela funciona como uma promessa de pagamento solene, onde uma pessoa (emitente) se compromete a pagar um valor específico a outra (beneficiário) em uma data definida.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-blue-600">Tem validade jurídica?</h3>
                <p className="text-sm text-slate-500">
                    Sim! Uma nota promissória preenchida corretamente e assinada tem força executiva extrajudicial. Isso significa que, em caso de não pagamento, o credor pode acionar a justiça diretamente para cobrar a dívida, sem precisar de longos processos de conhecimento.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-green-600">Precisa registrar em cartório?</h3>
                <p className="text-sm text-slate-500">
                    Não é obrigatório. A nota promissória tem validade apenas com a assinatura do devedor. No entanto, reconhecer firma da assinatura em cartório traz mais segurança para o credor e evita que o devedor alegue que a assinatura não é dele.
                </p>
            </div>
        </div>

        <h3 className="font-bold text-slate-900 mb-3">Como preencher corretamente:</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
            <li><strong>Valor:</strong> Deve ser preenchido numericamente e, preferencialmente, por extenso para evitar rasuras.</li>
            <li><strong>Vencimento:</strong> Se não houver data, considera-se pagamento à vista.</li>
            <li><strong>Assinatura:</strong> É o item mais importante. Sem a assinatura do emitente, o documento não tem valor.</li>
        </ul>
      </section>
    </div>
  );
}
