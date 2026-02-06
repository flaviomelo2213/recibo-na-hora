
'use client';
import React, { useState } from 'react';
import jsPDF from 'jspdf';

interface ContratoData {
  locadorNome: string;
  locadorCPF: string;
  locadorEndereco: string;
  locatarioNome: string;
  locatarioCPF: string;
  locatarioEndereco: string;
  imovelEndereco: string;
  valor: string;
  diaVencimento: string;
  prazoMeses: string;
  dataInicio: string;
  cidade: string;
}

export default function ContratoLocacaoGenerator() {
  const [data, setData] = useState<ContratoData>({
    locadorNome: '',
    locadorCPF: '',
    locadorEndereco: '',
    locatarioNome: '',
    locatarioCPF: '',
    locatarioEndereco: '',
    imovelEndereco: '',
    valor: '',
    diaVencimento: '10',
    prazoMeses: '12',
    dataInicio: new Date().toISOString().split('T')[0],
    cidade: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const lineHeight = 6;
    let yPos = 20;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('CONTRATO DE LOCAÇÃO RESIDENCIAL', pageWidth / 2, yPos, { align: 'center' });

    yPos += lineHeight * 2;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('LOCADOR:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += lineHeight;
    const locadorText = `${data.locadorNome || '[NOME COMPLETO]'}, CPF ${data.locadorCPF || '[000.000.000-00]'}, residente em ${data.locadorEndereco || '[ENDEREÇO COMPLETO]'}.`;
    const locadorLines = doc.splitTextToSize(locadorText, pageWidth - 2 * margin);
    doc.text(locadorLines, margin, yPos);
    yPos += locadorLines.length * lineHeight + lineHeight;

    doc.setFont('helvetica', 'bold');
    doc.text('LOCATÁRIO:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += lineHeight;
    const locatarioText = `${data.locatarioNome || '[NOME COMPLETO]'}, CPF ${data.locatarioCPF || '[000.000.000-00]'}, residente em ${data.locatarioEndereco || '[ENDEREÇO COMPLETO]'}.`;
    const locatarioLines = doc.splitTextToSize(locatarioText, pageWidth - 2 * margin);
    doc.text(locatarioLines, margin, yPos);
    yPos += locatarioLines.length * lineHeight + lineHeight;

    doc.setFont('helvetica', 'bold');
    doc.text('DO OBJETO:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += lineHeight;
    const objetoText = `Imóvel residencial localizado em ${data.imovelEndereco || '[ENDEREÇO COMPLETO DO IMÓVEL]'}.`;
    const objetoLines = doc.splitTextToSize(objetoText, pageWidth - 2 * margin);
    doc.text(objetoLines, margin, yPos);
    yPos += objetoLines.length * lineHeight + lineHeight;

    doc.setFont('helvetica', 'bold');
    doc.text('DO VALOR E PAGAMENTO:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += lineHeight;
    const valorText = `Valor mensal do aluguel: R$ ${data.valor || '[0.000,00]'}, vencimento todo dia ${data.diaVencimento} de cada mês.`;
    const valorLines = doc.splitTextToSize(valorText, pageWidth - 2 * margin);
    doc.text(valorLines, margin, yPos);
    yPos += valorLines.length * lineHeight + lineHeight;

    doc.setFont('helvetica', 'bold');
    doc.text('DO PRAZO:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += lineHeight;
    const prazoText = `O presente contrato terá duração de ${data.prazoMeses || '12'} meses, iniciando em ${new Date(data.dataInicio).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}.`;
    const prazoLines = doc.splitTextToSize(prazoText, pageWidth - 2 * margin);
    doc.text(prazoLines, margin, yPos);
    yPos += prazoLines.length * lineHeight + lineHeight * 2;

    const dataAssinatura = `${data.cidade || '[CIDADE]'}, ${new Date().toLocaleDateString('pt-BR')}.`;
    doc.text(dataAssinatura, margin, yPos);
    yPos += lineHeight * 3;

    doc.line(margin + 10, yPos, (pageWidth / 2) - 10, yPos);
    doc.line((pageWidth / 2) + 10, yPos, pageWidth - margin - 10, yPos);
    yPos += lineHeight;
    doc.setFontSize(9);
    doc.text(data.locadorNome || '[LOCADOR]', pageWidth / 4, yPos, { align: 'center' });
    doc.text(data.locatarioNome || '[LOCATÁRIO]', (pageWidth * 3) / 4, yPos, { align: 'center' });

    doc.save('contrato-locacao-residencial.pdf');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Dados do Contrato</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Locador (Proprietário)</h3>
            <div className="space-y-3">
              <input type="text" name="locadorNome" value={data.locadorNome} onChange={handleChange} placeholder="Nome Completo" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="locadorCPF" value={data.locadorCPF} onChange={handleChange} placeholder="CPF" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="locadorEndereco" value={data.locadorEndereco} onChange={handleChange} placeholder="Endereço Completo" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Locatário (Inquilino)</h3>
            <div className="space-y-3">
              <input type="text" name="locatarioNome" value={data.locatarioNome} onChange={handleChange} placeholder="Nome Completo" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="locatarioCPF" value={data.locatarioCPF} onChange={handleChange} placeholder="CPF" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <input type="text" name="locatarioEndereco" value={data.locatarioEndereco} onChange={handleChange} placeholder="Endereço Completo" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">Dados do Imóvel e Contrato</h3>
            <div className="space-y-3">
              <textarea name="imovelEndereco" value={data.imovelEndereco} onChange={handleChange} placeholder="Endereço completo do imóvel" rows={2} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" name="valor" value={data.valor} onChange={handleChange} placeholder="Valor mensal (ex: 1.500,00)" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                <input type="text" name="diaVencimento" value={data.diaVencimento} onChange={handleChange} placeholder="Dia vencimento" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="text" name="prazoMeses" value={data.prazoMeses} onChange={handleChange} placeholder="Prazo em meses" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                <input type="date" name="dataInicio" value={data.dataInicio} onChange={handleChange} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="text" name="cidade" value={data.cidade} onChange={handleChange} placeholder="Cidade" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <button onClick={generatePDF} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
            <i className="fa-solid fa-file-pdf mr-2"></i>
            Gerar PDF
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Prévia do Contrato</h2>
        <div className="prose prose-sm max-w-none text-xs">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold">CONTRATO DE LOCAÇÃO RESIDENCIAL</h3>
          </div>
          <p><strong>LOCADOR:</strong> {data.locadorNome || '[NOME COMPLETO]'}, CPF {data.locadorCPF || '[000.000.000-00]'}, residente em {data.locadorEndereco || '[ENDEREÇO]'}.</p>
          <p><strong>LOCATÁRIO:</strong> {data.locatarioNome || '[NOME COMPLETO]'}, CPF {data.locatarioCPF || '[000.000.000-00]'}, residente em {data.locatarioEndereco || '[ENDEREÇO]'}.</p>
          <p><strong>OBJETO:</strong> Imóvel residencial localizado em {data.imovelEndereco || '[ENDEREÇO DO IMÓVEL]'}.</p>
          <p><strong>VALOR:</strong> R$ {data.valor || '[0.000,00]'} mensais, vencimento dia {data.diaVencimento} de cada mês.</p>
          <p><strong>PRAZO:</strong> {data.prazoMeses || '12'} meses, iniciando em {new Date(data.dataInicio).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}.</p>
        </div>
      </div>
    </div>
  );
}
