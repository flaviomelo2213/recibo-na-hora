
'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal } from 'lucide-react';
import PreviewPaper from '../../../components/PreviewPaper';

export default function DeclaracaoEnderecoGenerator() {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);

  const handleGeneratePDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    doc.setFontSize(12);
    doc.text('DECLARAÇÃO DE RESIDÊNCIA', 20, 20);
    // ... (rest of PDF generation logic) ...
    doc.save('declaracao-de-residencia.pdf');
  };

  const getPreviewText = () =>
    `DECLARAÇÃO DE RESIDÊNCIA\n\n` +
    `Eu, ${nome || '[Nome Completo]'}, ${nacionalidade || '[Nacionalidade]'}, portador(a) do RG ${
      rg || '[RG]'
    } e do CPF ${cpf || '[CPF]'}, declaro para os devidos fins que resido no endereço ${
      endereco || '[Endereço Completo]'
    }.\n\n` +
    `Declaro ainda estar ciente de que a falsidade desta declaração pode implicar sanções civis, administrativas e criminais.\n\n` +
    `${cidade || '[Cidade]'}, ${data}.\n\n` +
    `_________________________\n${nome || '[Nome Completo]'}`;

  return (
    <div>
      {/* Formulário visível apenas quando não usado como preview */}
      <div className="lg:hidden">
        <FormContent />
      </div>

      {/* Preview visível em todos os tamanhos */}
      <PreviewPaper>
        <pre className="text-sm leading-relaxed text-slate-800 whitespace-pre-wrap break-words font-serif">
          {getPreviewText()}
        </pre>
      </PreviewPaper>
    </div>
  );

  function FormContent() {
    return (
      <Card className="w-full p-4 sm:p-6 lg:p-8">
        <div className="space-y-6">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Aviso Legal</AlertTitle>
            <AlertDescription>
              Para maior validade, reconheça firma da assinatura em cartório.
            </AlertDescription>
          </Alert>

          <Input label="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input
            label="Nacionalidade"
            value={nacionalidade}
            onChange={(e) => setNacionalidade(e.target.value)}
          />
          <Input label="RG" value={rg} onChange={(e) => setRg(e.target.value)} />
          <Input label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <Input
            label="Endereço Completo com CEP"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Input label="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          <Input type="date" label="Data" value={data} onChange={(e) => setData(e.target.value)} />

          <Button size="lg" onClick={handleGeneratePDF} className="w-full">
            Gerar PDF
          </Button>
        </div>
      </Card>
    );
  }
}
