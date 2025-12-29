'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal } from 'lucide-react';

// Simplified generator, you can expand this based on real needs
export default function ItbiModeloGenerator() {
    const [requerente, setRequerente] = useState('');
    const [cpf, setCpf] = useState('');
    const [cidade, setCidade] = useState('');
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);

    const handleGeneratePDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.setFontSize(12);
        doc.text("REQUERIMENTO DE ISENÇÃO/REDUÇÃO DE ITBI", 20, 20);
        // ... (rest of PDF generation logic) ...
        doc.save('requerimento-itbi.pdf');
    };

    const getPreviewText = () => (
        `À\nSecretaria de Finanças de ${cidade || '[Cidade]'}\n\n` +
        `Eu, ${requerente || '[Nome Completo]'}, CPF ${cpf || '[CPF]'}, venho solicitar a isenção/redução do ITBI referente à aquisição do meu primeiro imóvel, conforme a legislação municipal e as regras do SFH.\n\n` +
        `Termos em que, pede deferimento.\n\n` +
        `${cidade || '[Cidade]'}, ${data}.\n\n` +
        `_________________________\n${requerente || '[Nome Completo]'}`
    );

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Modelo Genérico</AlertTitle>
                  <AlertDescription>
                    Consulte a legislação e os formulários da sua prefeitura. Este modelo é um ponto de partida.
                  </AlertDescription>
                </Alert>
                <Input label="Nome Completo" value={requerente} onChange={e => setRequerente(e.target.value)} />
                <Input label="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                <Input label="Cidade do Imóvel" value={cidade} onChange={e => setCidade(e.target.value)} />
                <Input type="date" label="Data" value={data} onChange={e => setData(e.target.value)} />
                 <Button size="lg" onClick={handleGeneratePDF} className="w-full">Gerar PDF</Button>
            </div>
            <div>
                <div className="sticky top-24">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Pré-visualização</h3>
                    <div className="bg-white rounded-md shadow-sm p-6 border border-slate-200 aspect-[210/297]">
                        <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans">{getPreviewText()}</pre>
                    </div>
                </div>
            </div>
        </div>
    </Card>
  );
}
