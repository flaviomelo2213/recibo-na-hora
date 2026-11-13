'use client';

import React, { useState, useEffect, useRef, useId } from 'react';
import { Download, Share2, Info } from 'lucide-react';
import Link from 'next/link';
import { validateReceipt, type ReceiptFields } from '@/lib/receipt-validation';

import PreviewPaper from '../../../components/PreviewPaper';
import { Card } from '../../../components/ui/Card';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Button } from '../../../components/ui/Button';
import AdsKeeperWidget from '../../../components/ads/AdsKeeperWidget';
import { yieldToMain } from '../../../lib/yield-to-main';
import { ApoioPosDownload } from '@/components/apoio/ApoioPix';
import { avisarDocumentoPronto } from '@/lib/documento-pronto';

interface ReciboData {
  pagadorNome: string;
  pagadorCpfCnpj: string;
  recebedorNome: string;
  recebedorCpfCnpj: string;
  valor: string;
  valorExtenso: string;
  descricao: string;
  cidade: string;
  data: string;
}

function formatarCpfCnpj(valor: string): string {
  const digitos = valor.replace(/\D/g, '');
  if (digitos.length <= 11) {
    return digitos
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    return digitos
      .slice(0, 14)
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
}

export default function ReciboSimplesGenerator() {
  const [data, setData] = useState<ReciboData>({
    pagadorNome: '',
    pagadorCpfCnpj: '',
    recebedorNome: '',
    recebedorCpfCnpj: '',
    valor: '',
    valorExtenso: '',
    descricao: '',
    cidade: '',
    data: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const errorPrefix = useId();
  const [errors, setErrors] = useState<Partial<Record<keyof ReceiptFields, string>>>({});
  const errorProps = (name: keyof ReceiptFields) => ({
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${errorPrefix}-${name}` : undefined,
  });
  const fieldError = (name: keyof ReceiptFields) => errors[name] ? (
    <p id={`${errorPrefix}-${name}`} className="mt-1 text-sm text-red-700">{errors[name]}</p>
  ) : null;
  const validate = () => {
    const next = validateReceipt(data);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    return !first;
  };

  // =========================
  // IA (BYOK Gemini) — Descrição
  // =========================
  const [geminiKey, setGeminiKey] = useState('');
  const [persistKey, setPersistKey] = useState(true);
  const [showKey, setShowKey] = useState(false);
  const [tone, setTone] = useState<'formal' | 'profissional' | 'simples'>('profissional');
  const [aiLoadingDescricao, setAiLoadingDescricao] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem('rnh_recibo_ai_persist');
      const shouldPersist = p === null ? true : p === '1';
      setPersistKey(shouldPersist);

      const savedKey = localStorage.getItem('rnh_gemini_api_key') || '';
      if (shouldPersist) setGeminiKey(savedKey);

      const savedTone = (localStorage.getItem('rnh_recibo_ai_tone') as any) || 'profissional';
      if (savedTone === 'formal' || savedTone === 'profissional' || savedTone === 'simples') {
        setTone(savedTone);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('rnh_recibo_ai_persist', persistKey ? '1' : '0');
      if (!persistKey) localStorage.removeItem('rnh_gemini_api_key');
      else localStorage.setItem('rnh_gemini_api_key', geminiKey);
    } catch {
      // ignore
    }
  }, [persistKey, geminiKey]);

  useEffect(() => {
    try {
      localStorage.setItem('rnh_recibo_ai_tone', tone);
    } catch {
      // ignore
    }
  }, [tone]);

  async function melhorarDescricaoComIA() {
    setAiError(null);

    const key = geminiKey.trim();
    if (!key) {
      setAiError('Cole sua Gemini API Key para usar a IA.');
      return;
    }
    if (!data.descricao.trim()) {
      setAiError('Escreva a descrição antes de pedir melhoria.');
      return;
    }

    setAiLoadingDescricao(true);
    try {
      const res = await fetch('/api/ai/rewrite', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          kind: 'recibo',
          tone,
          model: 'gemini-2.5-flash',
          geminiApiKey: key,
          text: data.descricao,
        }),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) throw new Error(json?.error || 'Falha ao chamar IA. Verifique sua chave.');

      const improved = String(json?.improvedText ?? '').trim();
      if (!improved) throw new Error('IA retornou vazio. Tente novamente.');

      setData((prev) => ({ ...prev, descricao: improved }));
    } catch (err: any) {
      setAiError(err?.message || 'Erro inesperado ao usar IA.');
    } finally {
      setAiLoadingDescricao(false);
    }
  }

  // =========================
  // Datas e form
  // =========================
  useEffect(() => {
    if (!data.data) {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      setData((prev) => ({ ...prev, data: `${year}-${month}-${day}` }));
    }
  }, [data.data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'pagadorCpfCnpj' || name === 'recebedorCpfCnpj') {
      setData((prev) => ({ ...prev, [name]: formatarCpfCnpj(value) }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getReciboText = () => {
    const valorFormatado = Number(data.valor || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const dataObj = data.data ? new Date(data.data + 'T00:00:00') : new Date();
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const textoRecibo =
      `Eu, ${data.recebedorNome || '[Nome do Recebedor]'}, ` +
      (data.recebedorCpfCnpj ? `inscrito(a) no CPF/CNPJ sob o nº ${data.recebedorCpfCnpj}, ` : '') +
      `declaro que recebi de ${data.pagadorNome || '[Nome do Pagador]'}` +
      (data.pagadorCpfCnpj ? `, inscrito(a) no CPF/CNPJ sob o nº ${data.pagadorCpfCnpj}, ` : ', ') +
      `a importância de R$ ${valorFormatado} (${data.valorExtenso || '[Valor por Extenso]'}), referente a ${
        data.descricao || '[Descrição do pagamento]'
      }.`;

    return (
      `----------- RECIBO DE PAGAMENTO -----------\n\n` +
      `Valor: R$ ${valorFormatado}\n\n` +
      `${textoRecibo}\n\n` +
      `Por ser verdade, firmo o presente recibo, para que produza seus devidos e legais efeitos.\n\n` +
      `${data.cidade || '[Cidade]'}, ${dataFormatada}.\n\n\n` +
      `________________________________________\n` +
      `${data.recebedorNome || '[Nome do Recebedor]'}\n`
    );
  };

  const [gerandoPdf, setGerandoPdf] = useState(false);

  const handleDownloadPdf = async () => {
    if (gerandoPdf) return;
    setGerandoPdf(true);
    try {
      await yieldToMain();
      const { jsPDF } = await import('jspdf');
      if (!validate()) return;
      const doc = new jsPDF('p', 'mm', 'a4');
      const text = getReciboText();

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      const splitText = doc.splitTextToSize(text, 180);
      let y = 20;
      for (const line of splitText) {
        if (y > 277) { doc.addPage(); y = 20; }
        doc.text(line, 15, y);
        y += 6;
      }
      doc.save('recibo-de-pagamento.pdf');
      avisarDocumentoPronto();
    } finally {
      setGerandoPdf(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!validate()) return;
    const valor = data.valor ? `R$ ${data.valor}` : '';
    const recebedor = data.recebedorNome || '';
    const texto = `Gerado no ReciboNaHora: Recibo de ${valor} para ${recebedor}.`;
    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  const FormFields = (
    <form ref={formRef} noValidate onSubmit={(event) => { event.preventDefault(); handleDownloadPdf(); }}>
    <Card className="p-6 md:p-8">
      <div className="space-y-6">
        {Object.keys(errors).length > 0 && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">Preencha os campos indicados antes de gerar ou compartilhar o recibo.</p>}
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Para quem você pagou?</legend>
          <div><Input
            label="Nome do Recebedor"
            name="recebedorNome"
            value={data.recebedorNome}
            onChange={handleInputChange}
            placeholder="Ex: João da Silva"
            {...errorProps("recebedorNome")}
            required
          />
            {fieldError("recebedorNome")}
          </div>
          <Input
            label="CPF/CNPJ do Recebedor"
            name="recebedorCpfCnpj"
            value={data.recebedorCpfCnpj}
            onChange={handleInputChange}
            placeholder="00.000.000/0000-00"
          />
        </fieldset>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Quem realizou o pagamento?</legend>
          <div><Input
            label="Nome do Pagador"
            name="pagadorNome"
            value={data.pagadorNome}
            onChange={handleInputChange}
            placeholder="Ex: Maria Souza"
            {...errorProps("pagadorNome")}
            required
          />
            {fieldError("pagadorNome")}
          </div>
          <Input
            label="CPF/CNPJ do Pagador"
            name="pagadorCpfCnpj"
            value={data.pagadorCpfCnpj}
            onChange={handleInputChange}
            placeholder="000.000.000-00"
          />
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4">Detalhes do Pagamento</legend>

          {/* Painel IA (opcional) */}
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <i className="fa-solid fa-wand-magic-sparkles text-indigo-600"></i> IA (Gemini BYOK) — opcional
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Use sua Gemini API Key para melhorar a descrição do pagamento. A chave fica só no seu navegador.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                {showKey ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>

            {aiError ? (
              <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {aiError}
              </div>
            ) : null}

            <div className="mt-3 grid md:grid-cols-2 gap-3">
              <input
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                type={showKey ? 'text' : 'password'}
                placeholder="Cole sua Gemini API Key aqui"
                className="w-full p-3 border rounded"
              />

              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as any)}
                className="w-full p-3 border rounded bg-white"
                title="Tom da reescrita"
              >
                <option value="profissional">Tom: Profissional</option>
                <option value="formal">Tom: Formal</option>
                <option value="simples">Tom: Simples</option>
              </select>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
              <label className="flex items-center gap-2 text-xs text-slate-600">
                <input type="checkbox" checked={persistKey} onChange={(e) => setPersistKey(e.target.checked)} />
                Salvar chave neste navegador
              </label>

              <button
                type="button"
                onClick={melhorarDescricaoComIA}
                disabled={aiLoadingDescricao}
                className="text-sm font-bold bg-white border border-indigo-200 rounded-lg px-3 py-2 hover:bg-indigo-50 transition disabled:opacity-60"
              >
                {aiLoadingDescricao ? 'Melhorando…' : 'Melhorar descrição com IA'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div><Input
              label="Valor (R$)"
              name="valor"
              value={data.valor}
              onChange={handleInputChange}
              placeholder="150,00"
              type="number"
              step="0.01"
              min="0.01"
              {...errorProps("valor")}
            required
            />
            {fieldError("valor")}
          </div>
            <div><Input
              label="Valor por Extenso"
              name="valorExtenso"
              value={data.valorExtenso}
              onChange={handleInputChange}
              placeholder="Cento e cinquenta reais"
              {...errorProps("valorExtenso")}
            required
            />
            {fieldError("valorExtenso")}
          </div>
          </div>

          <div><Textarea
            rows={3}
            label="Descrição do Pagamento"
            name="descricao"
            value={data.descricao}
            onChange={handleInputChange}
            {...errorProps("descricao")}
            required
          />
            {fieldError("descricao")}
          </div>
        </fieldset>

        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <legend className="text-lg font-semibold text-slate-800 mb-4 col-span-full">Local e Data</legend>
          <div><Input
            label="Cidade de Emissão"
            name="cidade"
            value={data.cidade}
            onChange={handleInputChange}
            placeholder="Ex: São Paulo"
            {...errorProps("cidade")}
            required
          />
            {fieldError("cidade")}
          </div>
          <div><Input
            label="Data do Pagamento"
            name="data"
            value={data.data}
            onChange={handleInputChange}
            type="date"
            {...errorProps("data")}
            required
          />
            {fieldError("data")}
          </div>
        </fieldset>

        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button type="submit" size="lg" disabled={gerandoPdf} aria-busy={gerandoPdf}>
              {gerandoPdf ? 'Gerando PDF...' : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Baixar PDF
                </>
              )}
            </Button>
            <Button type="button" onClick={handleShareWhatsApp} variant="success" size="lg">
              <Share2 className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
          <ApoioPosDownload />

          <AdsKeeperWidget />

          <Card className="p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Info className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="font-semibold text-slate-800">Parceria Recomendada</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Precisa de assinatura com validade jurídica?
                  <Link href="/parcerias" className="text-indigo-600 font-semibold hover:underline ml-1">
                    Veja nossos parceiros.
                  </Link>
                </p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right">Podemos receber uma comissão.</p>
          </Card>
        </div>
      </div>
    </Card>
    </form>
  );

  const Preview = (
    <PreviewPaper>
      <div className="p-2 text-sm text-slate-800 whitespace-pre-wrap font-mono">{getReciboText()}</div>
    </PreviewPaper>
  );

  return (
    <div className="lg:flex gap-8">
      <div className="flex-1">{FormFields}</div>
      <div className="flex-1 mt-8 lg:mt-0">{Preview}</div>
    </div>
  );
}
