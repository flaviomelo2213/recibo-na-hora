'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal } from 'lucide-react';

export default function ItbiModeloGenerator() {
  const [requerente, setRequerente] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);

  const formatDateLongPtBR = (iso: string) => {
    try {
      const d = new Date(iso + 'T00:00:00');
      return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch {
      return iso;
    }
  };

  const getPreviewText = () =>
    `À\nSecretaria de Finanças de ${cidade || '[Cidade]'}\n\n` +
    `Eu, ${requerente || '[Nome Completo]'}, CPF ${cpf || '[CPF]'}, venho solicitar a isenção/redução do ITBI referente à aquisição do meu primeiro imóvel, conforme a legislação municipal e as regras do SFH.\n\n` +
    `Termos em que, pede deferimento.\n\n` +
    `${cidade || '[Cidade]'}, ${formatDateLongPtBR(data)}.\n\n` +
    `_________________________\n${requerente || '[Nome Completo]'}`;

  const handleGeneratePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');

    const marginX = 20;
    const marginTop = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const usableWidth = pageWidth - marginX * 2;
    const bottomLimit = pageHeight - 20;

    let y = marginTop;

    const addBlock = (text: string, font: 'normal' | 'bold' = 'normal', size = 12, gap = 6) => {
      doc.setFont('times', font);
      doc.setFontSize(size);

      const lines = doc.splitTextToSize(text, usableWidth);
      const blockHeight = lines.length * gap;

      if (y + blockHeight > bottomLimit) {
        doc.addPage();
        y = marginTop;
      }

      doc.text(lines, marginX, y);
      y += blockHeight + 2;
    };

    // Cabeçalho
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('REQUERIMENTO DE ISENÇÃO/REDUÇÃO DE ITBI', pageWidth / 2, y, { align: 'center' });
    y += 14;

    // Destinatário
    addBlock(`À`, 'bold', 12, 6);
    addBlock(`Secretaria de Finanças de ${cidade || '[CIDADE]'}`, 'bold', 12, 6);
    y += 4;

    // Qualificação
    addBlock(
      `Eu, ${requerente || '[NOME COMPLETO]'}, inscrito(a) no CPF nº ${cpf || '[CPF]'}, venho, respeitosamente, requerer:`,
      'normal',
      12,
      6
    );

    // Pedido
    addBlock(
      `A isenção/redução do ITBI referente à aquisição do meu primeiro imóvel, conforme a legislação municipal aplicável e as regras do Sistema Financeiro da Habitação (SFH), se pertinente, bem como a análise e deferimento do presente pedido.`,
      'normal',
      12,
      6
    );

    addBlock(
      `Solicito, ainda, a indicação de eventuais documentos complementares necessários para instrução do processo, caso aplicável.`,
      'normal',
      12,
      6
    );

    y += 8;

    // Fecho
    addBlock(`Termos em que, pede deferimento.`, 'normal', 12, 6);
    y += 10;

    // Local/data
    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.text(`${cidade || '[CIDADE]'}, ${formatDateLongPtBR(data)}.`, pageWidth / 2, y, { align: 'center' });
    y += 18;

    // Assinatura
    doc.text('________________________________________', pageWidth / 2, y, { align: 'center' });
    y += 6;
    doc.text(requerente || '[NOME COMPLETO]', pageWidth / 2, y, { align: 'center' });
    y += 5;
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(`CPF: ${cpf || '[CPF]'}`, pageWidth / 2, y, { align: 'center' });

    // Rodapé
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text('Gerado por ReciboNaHora.com.br', pageWidth / 2, pageHeight - 10, { align: 'center' });

    doc.save('requerimento-itbi.pdf');
  };

  return (
    <Card className="w-full p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* Formulário */}
        <section className="w-full min-w-0 space-y-6">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Modelo Genérico</AlertTitle>
            <AlertDescription>
              Consulte a legislação e os formulários da sua prefeitura. Este modelo é um ponto de partida.
            </AlertDescription>
          </Alert>

          <Input label="Nome Completo" value={requerente} onChange={(e) => setRequerente(e.target.value)} />
          <Input label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Input label="Cidade do Imóvel" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          <Input type="date" label="Data" value={data} onChange={(e) => setData(e.target.value)} />

          <Button size="lg" onClick={handleGeneratePDF} className="w-full">
            Gerar PDF
          </Button>
        </section>

        {/* Preview */}
        <aside className="w-full min-w-0 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200">
              <h3 className="text-base font-semibold text-slate-800">Pré-visualização</h3>
              <p className="text-xs text-slate-500 mt-1">O documento final será um PDF em formato A4.</p>
            </div>

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
