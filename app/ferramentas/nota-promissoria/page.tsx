'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { ToolShell, ToolShellHeader, ToolShellMain } from '@/components/layout/ToolShell';

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
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [210, 100] });
    doc.rect(5, 5, 200, 90);
    doc.rect(7, 7, 196, 86);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("NOTA PROMISSÓRIA", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text(`Nº: ${dados.numero}`, 15, 35);
    doc.text(`Vencimento: ${dados.vencimento.split('-').reverse().join('/')}`, 150, 35);
    doc.setFontSize(16);
    doc.text(`R$ ${dados.valor}`, 150, 45);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const texto = `Ao dia ${dados.vencimento.split('-').reverse().join('/')}, pagarei por esta via de NOTA PROMISSÓRIA a ${dados.credorNome.toUpperCase()} ou à sua ordem, a quantia de R$ ${dados.valor} em moeda corrente deste país.`;
    const linhas = doc.splitTextToSize(texto, 180);
    doc.text(linhas, 15, 55);
    doc.text(`Pagável em: ${dados.cidade.toUpperCase()}`, 15, 75);
    doc.setFontSize(9);
    doc.text("EMITENTE (Devedor):", 15, 82);
    doc.text(`${dados.devedorNome.toUpperCase()}`, 15, 86);
    doc.text(`CPF/CNPJ: ${dados.devedorCPF} - ${dados.devedorEndereco}`, 15, 90);
    doc.line(120, 85, 190, 85);
    doc.text("Assinatura do Emitente", 155, 89, { align: "center" });
    doc.save("nota_promissoria.pdf");
  };

  return (
    <ToolShell>
      <ToolShellHeader
        title="Gerador de Nota Promissória"
        description="Crie uma nota promissória válida em segundos. Preencha os campos, baixe em PDF e tenha um título de crédito para suas negociações."
      />
      <ToolShellMain>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
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

        <article className="prose prose-lg prose-slate mx-auto mt-12">
          <h2 className="text-3xl font-bold text-slate-900">
            O que é e Como Funciona a Nota Promissória
          </h2>
          <p>
            A <strong>Nota Promissória</strong> é um título de crédito que formaliza uma promessa de pagamento. Nela, uma pessoa ou empresa (o emitente ou devedor) se compromete a pagar um valor determinado a outra pessoa ou empresa (o beneficiário ou credor) em uma data futura. É um instrumento jurídico simples e eficaz, regulamentado pelo Decreto nº 2.044 de 1908.
          </p>

          <h3>Validade Jurídica: O Poder da Promissória</h3>
          <p>
            Uma nota promissória preenchida corretamente e assinada pelo devedor é um título executivo extrajudicial. Isso significa que, se a dívida não for paga na data combinada, o credor pode iniciar um processo de execução na justiça para cobrar o valor, de forma muito mais rápida do que em uma ação de cobrança comum.
          </p>

          <h3>Elementos Essenciais para a Validade</h3>
          <ul>
            <li><strong>Denominação "Nota Promissória":</strong> O documento deve ter esse nome para ser válido.</li>
            <li><strong>Valor por Extenso e Numeral:</strong> A quantia a ser paga, para evitar ambiguidades.</li>
            <li><strong>Nome do Credor:</strong> A quem a dívida deve ser paga.</li>
            <li><strong>Assinatura do Devedor:</strong> O elemento mais importante, que representa a concordância com a dívida.</li>
            <li><strong>Data de Vencimento:</strong> O prazo final para o pagamento.</li>
          </ul>

          <div className="p-6 mt-8 bg-sky-50 border-l-4 border-sky-400 text-sky-800 rounded-r-lg" role="alert">
            <h4 className="font-bold">Precisa Registrar em Cartório?</h4>
            <p className="mt-2">
              Não é um requisito obrigatório. A nota promissória tem validade jurídica apenas com a assinatura do devedor. No entanto, o reconhecimento de firma em cartório pode trazer uma camada extra de segurança, dificultando que o devedor conteste a autenticidade da assinatura no futuro.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">
            Passo a Passo para Usar o Gerador
          </h2>
          <ol>
            <li><strong>Preencha os Detalhes:</strong> Informe o valor, a data de vencimento e o número de controle da nota.</li>
            <li><strong>Identifique as Partes:</strong> Insira os dados completos do credor (quem vai receber) e do devedor (quem vai pagar). O endereço do devedor é importante para uma eventual cobrança judicial.</li>
            <li><strong>Gere e Baixe o PDF:</strong> Com todos os campos preenchidos, clique no botão para gerar o documento. O PDF será baixado imediatamente, pronto para ser impresso e assinado.</li>
          </ol>
        </article>
      </ToolShellMain>
    </ToolShell>
  );
}
