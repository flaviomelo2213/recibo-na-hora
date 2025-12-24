'use client';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function RelatorioMEI() {
  const [dados, setDados] = useState({
    cnpj: '', nome: '', ano: new Date().getFullYear().toString(),
    receitaComercio: Array(12).fill('0,00'),
    receitaServico: Array(12).fill('0,00'),
  });

  const handleValorChange = (index: number, tipo: 'receitaComercio' | 'receitaServico', valor: string) => {
    const novosValores = [...dados[tipo]];
    novosValores[index] = valor;
    setDados({ ...dados, [tipo]: novosValores });
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("RELATÓRIO MENSAL DAS RECEITAS BRUTAS - MEI", 105, 20, { align: "center" });
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`CNPJ: ${dados.cnpj}`, 20, 40);
    doc.text(`Empreendedor: ${dados.nome}`, 20, 45);
    doc.text(`Ano Calendário: ${dados.ano}`, 150, 40);

    doc.autoTable({
        startY: 55,
        head: [['Mês', 'Revenda de Mercadorias (R$)', 'Prestação de Serviços (R$)']],
        body: dados.receitaComercio.map((val, i) => [
            ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'][i],
            val,
            dados.receitaServico[i]
        ]),
    } as any);

    doc.text("Declaro que as informações acima são verdadeiras.", 105, 250, { align: "center" });
    doc.line(60, 270, 150, 270);
    doc.text("Assinatura do Empresário", 105, 275, { align: "center" });

    doc.save("relatorio_mensal_mei.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-12">
        <div className="bg-blue-600 text-white p-6 text-center">
             <h1 className="text-2xl font-bold"><i className="fa-solid fa-chart-line"></i> Relatório Mensal MEI</h1>
             <p className="text-blue-100 text-sm">Preencha mensalmente para facilitar sua declaração anual (DASN).</p>
        </div>

        <div className="p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <input placeholder="CNPJ" onChange={(e) => setDados({...dados, cnpj: e.target.value})} className="p-3 border rounded" />
                <input placeholder="Nome do Empreendedor" onChange={(e) => setDados({...dados, nome: e.target.value})} className="p-3 border rounded" />
                <input placeholder="Ano (Ex: 2025)" value={dados.ano} onChange={(e) => setDados({...dados, ano: e.target.value})} className="p-3 border rounded" />
            </div>

            <div className="grid grid-cols-12 gap-2 mb-2 text-xs font-bold text-center text-slate-500">
                <div className="col-span-4 text-left pl-2">MÊS</div>
                <div className="col-span-4">COMÉRCIO (R$)</div>
                <div className="col-span-4">SERVIÇOS (R$)</div>
            </div>

            {['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'].map((mes, i) => (
                <div key={i} className="grid grid-cols-12 gap-2 mb-2 items-center">
                    <div className="col-span-4 font-bold text-slate-700 pl-2 bg-gray-50 p-2 rounded">{mes}</div>
                    <div className="col-span-4"><input placeholder="0,00" onChange={(e) => handleValorChange(i, 'receitaComercio', e.target.value)} className="w-full p-2 border rounded text-center" /></div>
                    <div className="col-span-4"><input placeholder="0,00" onChange={(e) => handleValorChange(i, 'receitaServico', e.target.value)} className="w-full p-2 border rounded text-center" /></div>
                </div>
            ))}

            <button onClick={gerarPDF} className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2">
                <i className="fa-solid fa-file-pdf"></i> BAIXAR RELATÓRIO PDF
            </button>
        </div>
      </div>

      {/* --- TEXTO RICO PARA SEO --- */}
      <section className="max-w-4xl mx-auto prose prose-slate">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Como preencher o Relatório Mensal MEI?</h2>
        <p className="text-slate-600 mb-6">
            Todo Microempreendedor Individual (MEI) tem a obrigação de controlar seu faturamento mensalmente. Embora o <strong>Relatório Mensal das Receitas Brutas</strong> não precise ser entregue em nenhum órgão público, ele é <strong>obrigatório</strong> pela legislação e deve ser guardado junto com as Notas Fiscais de compra e venda por 5 anos.
        </p>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">Passo a Passo para preencher:</h3>
        <ul className="list-decimal pl-5 space-y-3 text-slate-600">
            <li><strong>Separe suas Receitas:</strong> Identifique o que você vendeu com Nota Fiscal e o que vendeu sem Nota Fiscal.</li>
            <li><strong>Comércio vs Serviços:</strong>
                <ul className="list-disc pl-5 mt-1 text-sm text-slate-500">
                    <li>Se você vende produtos (roupas, comida, eletrônicos), preencha na coluna <strong>Revenda de Mercadorias</strong>.</li>
                    <li>Se você presta serviços (pintor, marketing, manicure), preencha na coluna <strong>Prestação de Serviços</strong>.</li>
                </ul>
            </li>
            <li><strong>Some o Total:</strong> No final do mês, some todas as vendas (dinheiro, cartão, PIX) e coloque o valor bruto.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><i className="fa-solid fa-info-circle"></i> Para que serve este relatório?</h4>
            <p className="text-sm text-blue-900 leading-relaxed">
                Este relatório é a "cola" para você fazer sua declaração anual (DASN-SIMEI) sem erros. Quando chegar em janeiro, basta pegar os 12 relatórios mensais que você gerou aqui, somar os valores e enviar para a Receita Federal. Isso evita multas e garante que você não ultrapasse o limite de faturamento do MEI (R$ 81.000,00 anuais).
            </p>
        </div>
      </section>
    </div>
  );
}
