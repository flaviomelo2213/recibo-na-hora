'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

// UI components com imports relativos corrigidos
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';

// 1. Tipagem movida para dentro do arquivo
type ReciboSimplesData = {
  valor: string;
  pagadorNome: string;
  pagadorDocumento: string;
  beneficiarioNome: string;
  beneficiarioDocumento: string;
  referenteA: string;
  cidade: string;
  data: string;
};

// 2. Função de gerar PDF movida para dentro do arquivo
const generateReciboSimplesPDF = (data: ReciboSimplesData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const dataObj = new Date(data.data + 'T00:00:00'); // Ajuste para evitar problemas de fuso
  const dataFormatada = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  const textoRecibo = 
    `Eu, ${data.beneficiarioNome || '[Nome do Beneficiário]'}, ` +
    (data.beneficiarioDocumento ? `inscrito(a) no CPF/CNPJ sob o nº ${data.beneficiarioDocumento}, ` : '') +
    `declaro para os devidos fins que recebi de ${data.pagadorNome || '[Nome do Pagador]'}` +
    (data.pagadorDocumento ? `, inscrito(a) no CPF/CNPJ sob o nº ${data.pagadorDocumento}, ` : ', ') +
    `a importância de R$ ${data.valor || '0,00'}, referente a ${data.referenteA || '[descrição do serviço/produto]'}.`;

  const corpoDoRecibo = 
    `----------- RECIBO DE PAGAMENTO -----------\n\n` +
    `${textoRecibo}\n\n` +
    `Por ser verdade, firmo o presente.\n\n` +
    `${data.cidade || '[Cidade]'}, ${dataFormatada}.\n\n\n` +
    `________________________________________\n` +
    `${data.beneficiarioNome || '[Nome do Beneficiário]'}\n` +
    `${data.beneficiarioDocumento || '[CPF/CNPJ do Beneficiário]'}`;


  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(12);
  const splitText = doc.splitTextToSize(corpoDoRecibo, 180); // 180mm de largura útil em A4 com margens
  doc.text(splitText, 15, 20); // Margem de 15mm da esquerda, 20mm do topo
  doc.save('recibo-de-pagamento-simples.pdf');
};

export default function ReciboSimplesGenerator() {
  const [data, setData] = useState<ReciboSimplesData>({
    valor: '',
    pagadorNome: '',
    pagadorDocumento: '',
    beneficiarioNome: '',
    beneficiarioDocumento: '',
    referenteA: '',
    cidade: '',
    data: new Date().toISOString().split('T')[0], // Formato YYYY-MM-DD
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    generateReciboSimplesPDF(data);
  };

  return (
    <Card className="max-w-4xl mx-auto p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Quem Pagou</h2>
          <Input name="pagadorNome" label="Nome Completo do Pagador" value={data.pagadorNome} onChange={handleChange} />
          <Input name="pagadorDocumento" label="CPF/CNPJ do Pagador" value={data.pagadorDocumento} onChange={handleChange} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Quem Recebeu</h2>
          <Input name="beneficiarioNome" label="Nome Completo do Beneficiário" value={data.beneficiarioNome} onChange={handleChange} />
          <Input name="beneficiarioDocumento" label="CPF/CNPJ do Beneficiário" value={data.beneficiarioDocumento} onChange={handleChange} />
        </div>

        <div className="md:col-span-2 space-y-4">
           <h2 className="text-lg font-semibold text-slate-800 border-b pb-2">Detalhes do Pagamento</h2>
          <Input name="valor" type="number" label="Valor Recebido (R$)" value={data.valor} onChange={handleChange} placeholder="Ex: 150,00"/>
          <Textarea name="referenteA" label="Referente a" value={data.referenteA} onChange={handleChange} rows={3} placeholder="Ex: Consultoria de marketing digital"/>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="cidade" label="Cidade" value={data.cidade} onChange={handleChange} placeholder="Ex: São Paulo" />
            <Input name="data" type="date" label="Data de Emissão" value={data.data} onChange={handleChange} />
          </div>
        </div>

      </div>
      
      <div className="mt-8 text-center">
        <Button size="lg" onClick={handleGenerate}>
          Gerar Recibo em PDF
        </Button>
      </div>
    </Card>
  );
}
