'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal } from 'lucide-react';

interface LaiPedidoData {
  destinatarioNome: string;
  destinatarioCargo: string;
  destinatarioOrgao: string;
  requerenteNome: string;
  requerenteDocumento: string;
  requerenteEndereco: string;
  requerenteEmail: string;
  pedido: string;
  formaPreferencial: string;
  cidade: string;
  data: string;
}

const generateLaiPDF = (data: LaiPedidoData) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(12);

  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const usableWidth = pageWidth - margin * 2;
  const dataObj = new Date(data.data + 'T00:00:00');
  const dataFormatada = dataObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  let y = margin;

  doc.setFont('Helvetica', 'bold');
  doc.text('EXCELENTÍSSIMO(A) SENHOR(A)', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text((data.destinatarioCargo.toUpperCase() || '[CARGO DO DESTINATÁRIO]'), pageWidth / 2, y, {
    align: 'center',
  });
  y += 5;
  doc.text((data.destinatarioOrgao.toUpperCase() || '[ÓRGÃO PÚBLICO]'), pageWidth / 2, y, {
    align: 'center',
  });
  y += 15;

  doc.setFont('Helvetica', 'normal');
  const preambulo =
    `Eu, ${data.requerenteNome || '[NOME COMPLETO]'}, ` +
    `portador(a) do documento de identidade nº ${data.requerenteDocumento || '[RG/CPF]'}, ` +
    `residente e domiciliado(a) em ${data.requerenteEndereco || '[SEU ENDEREÇO COMPLETO]'}, ` +
    `com endereço eletrônico ${data.requerenteEmail || '[SEU E-MAIL]'}, ` +
    `com fundamento na Lei nº 12.527/2011 (Lei de Acesso à Informação - LAI), venho, respeitosamente, perante Vossa Excelência, requerer o acesso às seguintes informações de interesse público:`;
  const splitPreambulo = doc.splitTextToSize(preambulo, usableWidth);
  doc.text(splitPreambulo, margin, y);
  y += doc.getTextDimensions(splitPreambulo).h + 10;

  doc.setFont('Helvetica', 'bold');
  doc.text('1. OBJETO DO PEDIDO', margin, y);
  y += 8;

  doc.setFont('Helvetica', 'normal');
  const pedidoText = doc.splitTextToSize(
    data.pedido || '[Descreva aqui, de forma clara e objetiva, a informação que você busca.]',
    usableWidth
  );
  doc.text(pedidoText, margin, y);
  y += doc.getTextDimensions(pedidoText).h + 10;

  doc.setFont('Helvetica', 'bold');
  doc.text('2. FORMA DE ACESSO', margin, y);
  y += 8;

  doc.setFont('Helvetica', 'normal');
  const formaAcesso = `Solicito que as informações sejam fornecidas, preferencialmente, por ${
    data.formaPreferencial || '[meio eletrônico (e-mail), cópia física, etc]'
  }.`;
  const splitFormaAcesso = doc.splitTextToSize(formaAcesso, usableWidth);
  doc.text(splitFormaAcesso, margin, y);
  y += doc.getTextDimensions(splitFormaAcesso).h + 15;

  doc.text('Nestes termos,', margin, y);
  y += 5;
  doc.text('Pede deferimento.', margin, y);
  y += 15;

  doc.text(`${data.cidade || '[SUA CIDADE]'}, ${dataFormatada}.`, pageWidth / 2, y, { align: 'center' });
  y += 20;

  doc.text('________________________________________', pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text(data.requerenteNome || '[NOME COMPLETO]', pageWidth / 2, y, { align: 'center' });

  doc.save('requerimento-lai.pdf');
};

export default function LaiPedidoGenerator() {
  const [data, setData] = useState<LaiPedidoData>({
    destinatarioNome: '',
    destinatarioCargo: '',
    destinatarioOrgao: '',
    requerenteNome: '',
    requerenteDocumento: '',
    requerenteEndereco: '',
    requerenteEmail: '',
    pedido: '',
    formaPreferencial: 'meio eletrônico (e-mail)',
    cidade: '',
    data: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGeneratePDF = () => {
    generateLaiPDF(data);
  };

  const getPreviewText = () => {
    const dataObj = new Date(data.data + 'T00:00:00');
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return (
      `EXCELENTÍSSIMO(A) SENHOR(A) ${data.destinatarioNome.toUpperCase() || '[NOME DO DESTINATÁRIO]'}\n` +
      `${data.destinatarioCargo.toUpperCase() || '[CARGO DO DESTINATÁRIO]'}\n` +
      `${data.destinatarioOrgao.toUpperCase() || '[ÓRGÃO PÚBLICO]'}\n\n` +
      `Eu, ${data.requerenteNome || '[NOME COMPLETO]'}, ` +
      `portador(a) do documento de identidade nº ${data.requerenteDocumento || '[RG/CPF]'}, ` +
      `residente e domiciliado(a) em ${data.requerenteEndereco || '[SEU ENDEREÇO COMPLETO]'}, ` +
      `com endereço eletrônico ${data.requerenteEmail || '[SEU E-MAIL]'}, ` +
      `com fundamento na Lei nº 12.527/2011 (Lei de Acesso à Informação - LAI), venho, respeitosamente, perante Vossa Excelência, requerer o acesso às seguintes informações de interesse público:\n\n` +
      `1. OBJETO DO PEDIDO\n${data.pedido || '[Descreva aqui, de forma clara e objetiva, a informação que você busca.]'}\n\n` +
      `2. FORMA DE ACESSO\nSolicito que as informações sejam fornecidas, preferencialmente, por ${
        data.formaPreferencial || '[meio eletrônico (e-mail), cópia física, etc]'
      }.\n\n` +
      `Nestes termos,\nPede deferimento.\n\n` +
      `${data.cidade || '[SUA CIDADE]'}, ${dataFormatada}.\n\n` +
      `________________________________________\n` +
      `${data.requerenteNome || '[NOME COMPLETO]'}`
    );
  };

  return (
    <Card className="w-full p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* Coluna de Formulário */}
        <section className="w-full min-w-0 space-y-6">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Aviso Importante!</AlertTitle>
            <AlertDescription>
              Este é um modelo genérico. Verifique sempre as exigências e canais de protocolo do órgão para o qual você está enviando o pedido.
            </AlertDescription>
          </Alert>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Destinatário</h3>
            <div className="space-y-4">
              <Input
                name="destinatarioNome"
                label="Nome do Destinatário (Opcional)"
                value={data.destinatarioNome}
                onChange={handleChange}
                placeholder="Ex: Maria da Silva"
              />
              <Input
                name="destinatarioCargo"
                label="Cargo do Destinatário"
                value={data.destinatarioCargo}
                onChange={handleChange}
                placeholder="Ex: Secretário(a) de Finanças"
              />
              <Input
                name="destinatarioOrgao"
                label="Nome do Órgão/Entidade"
                value={data.destinatarioOrgao}
                onChange={handleChange}
                placeholder="Ex: Prefeitura Municipal de..."
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Requerente</h3>
            <div className="space-y-4">
              <Input name="requerenteNome" label="Seu Nome Completo" value={data.requerenteNome} onChange={handleChange} />
              <Input name="requerenteDocumento" label="Seu CPF ou RG" value={data.requerenteDocumento} onChange={handleChange} />
              <Input name="requerenteEndereco" label="Seu Endereço Completo" value={data.requerenteEndereco} onChange={handleChange} />
              <Input
                name="requerenteEmail"
                type="email"
                label="Seu E-mail para Resposta"
                value={data.requerenteEmail}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Detalhes da Solicitação</h3>
            <div className="space-y-4">
              <Textarea
                name="pedido"
                label="Informação Solicitada"
                value={data.pedido}
                onChange={handleChange}
                rows={5}
                placeholder="Seja específico. Ex: Cópia do contrato nº 123/2023, planilha de gastos com publicidade de 2024, etc."
              />
              <Input
                name="formaPreferencial"
                label="Forma de Acesso Preferencial"
                value={data.formaPreferencial}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Local e Data</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="cidade" label="Cidade" value={data.cidade} onChange={handleChange} />
              <Input name="data" type="date" label="Data do Pedido" value={data.data} onChange={handleChange} />
            </div>
          </div>

          <div className="text-center pt-2 sm:pt-4">
            <Button size="lg" onClick={handleGeneratePDF}>
              Gerar PDF do Requerimento
            </Button>
          </div>
        </section>

        {/* Coluna de Preview */}
        <aside className="w-full min-w-0 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-base font-semibold text-slate-800">Pré-visualização</h3>
              <p className="text-xs text-slate-500 mt-1">O documento final será um PDF em formato A4.</p>
            </div>

            {/* Mobile: overflow + escala para não “apertar”; Desktop: 100% */}
            <div className="p-4 overflow-x-auto">
              <div className="origin-top-left scale-[0.88] sm:scale-100 w-[794px]">
                <div className="border border-slate-200 rounded-lg p-4 bg-white">
                  <pre className="text-[11px] sm:text-xs leading-5 text-slate-700 whitespace-pre-wrap break-words font-sans">
                    {getPreviewText()}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Card>
  );
}