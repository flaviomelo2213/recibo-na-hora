'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/Alert';
import { Terminal, Wand2, KeyRound } from 'lucide-react';

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
  doc.text((data.destinatarioCargo.toUpperCase() || '[CARGO DO DESTINATÁRIO]'), pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.text((data.destinatarioOrgao.toUpperCase() || '[ÓRGÃO PÚBLICO]'), pageWidth / 2, y, { align: 'center' });
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

  // BYOK: chave do usuário (não salvamos no servidor)
  const [geminiKey, setGeminiKey] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGeneratePDF = () => {
    generateLaiPDF(data);
  };

  async function handleImproveWithAI() {
    setAiError(null);

    if (!geminiKey.trim()) {
      setAiError('Cole sua Gemini API Key (Google AI Studio) para usar a IA.');
      return;
    }
    if (!data.pedido.trim()) {
      setAiError('Escreva um rascunho no campo “Informação Solicitada” antes de pedir melhoria.');
      return;
    }

    setAiLoading(true);
    try {
      const res = await fetch('/api/ai/rewrite', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          kind: 'lai',
          tone: 'formal',
          text: data.pedido,
          geminiApiKey: geminiKey.trim(),
          model: 'gemini-2.5-flash', // você pode trocar depois; este é o exemplo comum na doc :contentReference[oaicite:5]{index=5}
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(json?.error || 'Falha ao chamar IA.');
      }

      const improved = String(json?.improvedText ?? '').trim();
      if (!improved) throw new Error('IA retornou vazio. Tente novamente.');

      setData((prev) => ({ ...prev, pedido: improved }));
    } catch (err: any) {
      setAiError(err?.message || 'Erro inesperado ao chamar IA.');
    } finally {
      setAiLoading(false);
    }
  }

  const getPreviewText = () => {
    const dataObj = new Date(data.data + 'T00:00:00');
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

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
        {/* Formulário */}
        <section className="w-full min-w-0 space-y-6">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Aviso Importante!</AlertTitle>
            <AlertDescription>
              Este é um modelo genérico. Verifique sempre as exigências e canais de protocolo do órgão para o qual você está enviando o pedido.
            </AlertDescription>
          </Alert>

          {aiError ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {aiError}
            </div>
          ) : null}

          {/* BYOK Key */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-slate-600" />
              <h3 className="text-sm font-semibold text-slate-900">Usar minha chave do Google (Gemini)</h3>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Você cria uma Gemini API Key no Google AI Studio e cola aqui. Nós não armazenamos essa chave.
            </p>
            <div className="mt-3 space-y-3">
              <Input
                name="geminiKey"
                label="Gemini API Key (BYOK)"
                value={geminiKey}
                onChange={(e) => setGeminiKey((e.target as HTMLInputElement).value)}
                placeholder="Cole aqui sua API key do Google AI Studio"
              />
              <a
                className="text-xs font-medium text-indigo-700 hover:text-indigo-800"
                href="https://ai.google.dev/gemini-api/docs/api-key"
                target="_blank"
                rel="noreferrer"
              >
                Como criar minha Gemini API Key
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Destinatário</h3>
            <div className="space-y-4">
              <Input name="destinatarioNome" label="Nome do Destinatário (Opcional)" value={data.destinatarioNome} onChange={handleChange} />
              <Input name="destinatarioCargo" label="Cargo do Destinatário" value={data.destinatarioCargo} onChange={handleChange} />
              <Input name="destinatarioOrgao" label="Nome do Órgão/Entidade" value={data.destinatarioOrgao} onChange={handleChange} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 mb-4">Requerente</h3>
            <div className="space-y-4">
              <Input name="requerenteNome" label="Seu Nome Completo" value={data.requerenteNome} onChange={handleChange} />
              <Input name="requerenteDocumento" label="Seu CPF ou RG" value={data.requerenteDocumento} onChange={handleChange} />
              <Input name="requerenteEndereco" label="Seu Endereço Completo" value={data.requerenteEndereco} onChange={handleChange} />
              <Input name="requerenteEmail" type="email" label="Seu E-mail para Resposta" value={data.requerenteEmail} onChange={handleChange} />
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-3 border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Detalhes da Solicitação</h3>

              <button
                type="button"
                onClick={handleImproveWithAI}
                disabled={aiLoading}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60 disabled:cursor-not-allowed transition"
                title="Melhorar o texto do pedido com IA (usa a sua chave do Google)"
              >
                <Wand2 className="h-4 w-4" />
                {aiLoading ? 'Gerando…' : 'Melhorar com IA'}
              </button>
            </div>

            <div className="space-y-4">
              <Textarea name="pedido" label="Informação Solicitada" value={data.pedido} onChange={handleChange} rows={6} />
              <Input name="formaPreferencial" label="Forma de Acesso Preferencial" value={data.formaPreferencial} onChange={handleChange} />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Evite colocar CPF/RG/endereço no campo do pedido. A IA serve apenas para melhorar a redação.
            </p>
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
