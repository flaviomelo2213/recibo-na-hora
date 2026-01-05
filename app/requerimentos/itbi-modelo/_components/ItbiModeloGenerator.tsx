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

  const handleGeneratePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.setFontSize(12);
    doc.text('REQUERIMENTO DE ISENÇÃO/REDUÇÃO DE ITBI', 20, 20);
    // ... (rest of PDF generation logic) ...
    doc.save('requerimento-itbi.pdf');
  };

  const getPreviewText = () =>
    `À\nSecretaria de Finanças de ${cidade || '[Cidade]'}\n\n` +
    `Eu, ${requerente || '[Nome Completo]'}, CPF ${cpf || '[CPF]'}, venho solicitar a isenção/redução do ITBI referente à aquisição do meu primeiro imóvel, conforme a legislação municipal e as regras do SFH.\n\n` +
    `Termos em que, pede deferimento.\n\n` +
    `${cidade || '[Cidade]'}, ${data}.\n\n` +
    `_________________________\n${requerente || '[Nome Completo]'}`;

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
