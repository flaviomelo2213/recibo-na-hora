'use client';

import React, { useEffect, useState, ChangeEvent } from 'react';
import type { CurriculumData } from './types';
import SignaturePad from './SignaturePad';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface FerramentaCurriculoProfissionalProps {
  data: CurriculumData;
  onDataChange: (data: CurriculumData) => void;
}

export default function FerramentaCurriculoProfissional({ data, onDataChange }: FerramentaCurriculoProfissionalProps) {
  const [showSignaturePad, setShowSignaturePad] = useState(false);

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    onDataChange({ ...data, dadosPessoais: { ...data.dadosPessoais, [e.target.name]: e.target.value } });
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onDataChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: 'fotoDataUrl' | 'assinaturaDataUrl') => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onDataChange({ ...data, [field]: event.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddItem = (list: 'experiencia' | 'educacao') => {
    const newItem =
      list === 'experiencia'
        ? { id: Date.now(), cargo: '', empresa: '', inicio: '', fim: '', atividades: '' }
        : { id: Date.now(), curso: '', instituicao: '', ano: '' };
    onDataChange({ ...data, [list]: [...data[list], newItem] });
  };

  const handleRemoveItem = (list: 'experiencia' | 'educacao', id: number) => {
    onDataChange({ ...data, [list]: data[list].filter((item) => item.id !== id) });
  };

  const handleItemChange = (
    list: 'experiencia' | 'educacao',
    id: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedList = data[list].map((item) => (item.id === id ? { ...item, [e.target.name]: e.target.value } : item));
    onDataChange({ ...data, [list]: updatedList as any });
  };

  const generatePDF = () => {
    const previewElement = document.getElementById('preview-content');
    if (previewElement) {
      html2canvas(previewElement, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('curriculo.pdf');
      });
    }
  };

  // =========================
  // IA (BYOK Gemini) — Currículo
  // =========================
  const [geminiKey, setGeminiKey] = useState('');
  const [persistKey, setPersistKey] = useState(true);
  const [showKey, setShowKey] = useState(false);
  const [tone, setTone] = useState<'formal' | 'profissional' | 'simples'>('profissional');

  const [aiError, setAiError] = useState<string | null>(null);
  const [aiLoadingResumo, setAiLoadingResumo] = useState(false);
  const [aiLoadingHabilidades, setAiLoadingHabilidades] = useState(false);
  const [aiLoadingAtividades, setAiLoadingAtividades] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const p = localStorage.getItem('rnh_curriculo_ai_persist');
      const shouldPersist = p === null ? true : p === '1';
      setPersistKey(shouldPersist);

      const savedKey = localStorage.getItem('rnh_gemini_api_key') || '';
      if (shouldPersist) setGeminiKey(savedKey);

      const savedTone = (localStorage.getItem('rnh_curriculo_ai_tone') as any) || 'profissional';
      if (savedTone === 'formal' || savedTone === 'profissional' || savedTone === 'simples') {
        setTone(savedTone);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('rnh_curriculo_ai_persist', persistKey ? '1' : '0');
      if (!persistKey) localStorage.removeItem('rnh_gemini_api_key');
      else localStorage.setItem('rnh_gemini_api_key', geminiKey);
    } catch {
      // ignore
    }
  }, [persistKey, geminiKey]);

  useEffect(() => {
    try {
      localStorage.setItem('rnh_curriculo_ai_tone', tone);
    } catch {
      // ignore
    }
  }, [tone]);

  async function rewriteWithAI(text: string) {
    setAiError(null);

    const key = geminiKey.trim();
    if (!key) throw new Error('Cole sua Gemini API Key para usar a IA.');
    if (!text.trim()) throw new Error('Escreva um texto antes de pedir melhoria.');

    const res = await fetch('/api/ai/rewrite', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        kind: 'curriculo',
        tone,
        model: 'gemini-2.5-flash',
        geminiApiKey: key,
        text,
      }),
    });

    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.error || 'Falha ao chamar IA. Verifique sua chave.');

    const improved = String(json?.improvedText ?? '').trim();
    if (!improved) throw new Error('IA retornou vazio. Tente novamente.');
    return improved;
  }

  async function improveResumo() {
    setAiError(null);
    setAiLoadingResumo(true);
    try {
      const improved = await rewriteWithAI(data.resumo || '');
      onDataChange({ ...data, resumo: improved });
    } catch (err: any) {
      setAiError(err?.message || 'Erro inesperado ao usar IA.');
    } finally {
      setAiLoadingResumo(false);
    }
  }

  async function improveHabilidades() {
    setAiError(null);
    setAiLoadingHabilidades(true);
    try {
      const improved = await rewriteWithAI(data.habilidades || '');
      onDataChange({ ...data, habilidades: improved });
    } catch (err: any) {
      setAiError(err?.message || 'Erro inesperado ao usar IA.');
    } finally {
      setAiLoadingHabilidades(false);
    }
  }

  async function improveAtividades(itemId: number, current: string) {
    setAiError(null);
    setAiLoadingAtividades((p) => ({ ...p, [itemId]: true }));
    try {
      const improved = await rewriteWithAI(current || '');
      const updated = data.experiencia.map((it) => (it.id === itemId ? { ...it, atividades: improved } : it));
      onDataChange({ ...data, experiencia: updated as any });
    } catch (err: any) {
      setAiError(err?.message || 'Erro inesperado ao usar IA.');
    } finally {
      setAiLoadingAtividades((p) => ({ ...p, [itemId]: false }));
    }
  }

  // =========================
  // UI
  // =========================
  return (
    <div>
      {showSignaturePad && (
        <SignaturePad
          onSave={(dataUrl) => onDataChange({ ...data, assinaturaDataUrl: dataUrl })}
          onClose={() => setShowSignaturePad(false)}
        />
      )}

      <div className="space-y-6">
        {/* Painel IA (BYOK) */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <i className="fa-solid fa-wand-magic-sparkles text-indigo-600"></i> Melhorar textos com IA (opcional)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Cole sua Gemini API Key (BYOK). A chave fica só no seu navegador.
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

          <label className="mt-3 flex items-center gap-2 text-xs text-slate-600">
            <input type="checkbox" checked={persistKey} onChange={(e) => setPersistKey(e.target.checked)} />
            Salvar chave neste navegador
          </label>
        </div>

        {/* Dados Pessoais */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Dados Pessoais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="nome" placeholder="Nome Completo" value={data.dadosPessoais.nome} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="cargo" placeholder="Cargo Desejado" value={data.dadosPessoais.cargo} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="email" type="email" placeholder="E-mail" value={data.dadosPessoais.email} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="telefone" placeholder="Telefone" value={data.dadosPessoais.telefone} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="cidade" placeholder="Cidade, Estado" value={data.dadosPessoais.cidade} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="linkedin" placeholder="URL LinkedIn" value={data.dadosPessoais.linkedin} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
            <input name="portfolio" placeholder="URL Portfólio/Site" value={data.dadosPessoais.portfolio} onChange={handlePersonalInfoChange} className="p-2 border rounded-md" />
          </div>
        </div>

        {/* Resumo */}
        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="font-semibold mb-2">Resumo Profissional</h3>
            <button
              type="button"
              onClick={improveResumo}
              disabled={aiLoadingResumo}
              className="text-sm font-bold bg-white border border-indigo-200 rounded-lg px-3 py-2 hover:bg-indigo-50 transition disabled:opacity-60"
              title="Melhorar o resumo com IA"
            >
              {aiLoadingResumo ? 'Melhorando…' : 'Melhorar com IA'}
            </button>
          </div>
          <textarea
            name="resumo"
            placeholder="Fale sobre você..."
            value={data.resumo}
            onChange={handleFieldChange}
            className="p-2 border rounded-md w-full h-24"
          />
        </div>

        {/* Foto e Assinatura */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Foto e Assinatura</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Foto Profissional</label>
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'fotoDataUrl')} className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div>
              <label className="text-sm font-medium">Assinatura</label>
              <div className="flex gap-2 mt-1">
                <button onClick={() => setShowSignaturePad(true)} className="p-2 border rounded-md w-full hover:bg-slate-50" type="button">
                  Desenhar
                </button>
                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'assinaturaDataUrl')} className="p-2 border rounded-md w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Experiência Profissional</h3>
          {data.experiencia.map((item) => (
            <div key={item.id} className="border p-3 rounded-md mb-3 space-y-2">
              <input name="cargo" placeholder="Cargo" value={item.cargo} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-full" />
              <div className="flex gap-2">
                <input name="empresa" placeholder="Empresa" value={item.empresa} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md flex-1" />
                <input name="inicio" placeholder="Início" value={item.inicio} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-28" />
                <input name="fim" placeholder="Fim" value={item.fim} onChange={(e) => handleItemChange('experiencia', item.id, e)} className="p-2 border rounded-md w-28" />
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                <label className="text-sm font-medium text-slate-700">Principais atividades</label>
                <button
                  type="button"
                  onClick={() => improveAtividades(item.id, item.atividades)}
                  disabled={!!aiLoadingAtividades[item.id]}
                  className="text-sm font-bold bg-white border border-indigo-200 rounded-lg px-3 py-2 hover:bg-indigo-50 transition disabled:opacity-60"
                  title="Melhorar atividades com IA"
                >
                  {aiLoadingAtividades[item.id] ? 'Melhorando…' : 'Melhorar com IA'}
                </button>
              </div>

              <textarea
                name="atividades"
                placeholder="Principais atividades"
                value={item.atividades}
                onChange={(e) => handleItemChange('experiencia', item.id, e)}
                className="p-2 border rounded-md w-full h-20"
              />

              <button onClick={() => handleRemoveItem('experiencia', item.id)} className="text-red-500 text-sm" type="button">
                Remover
              </button>
            </div>
          ))}
          <button onClick={() => handleAddItem('experiencia')} className="p-2 border rounded-md hover:bg-slate-50" type="button">
            + Adicionar Experiência
          </button>
        </div>

        {/* Educação */}
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-3">Educação</h3>
          {data.educacao.map((item) => (
            <div key={item.id} className="border p-3 rounded-md mb-3 space-y-2">
              <input name="curso" placeholder="Curso" value={item.curso} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md w-full" />
              <div className="flex gap-2">
                <input name="instituicao" placeholder="Instituição" value={item.instituicao} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md flex-1" />
                <input name="ano" placeholder="Ano de Conclusão" value={item.ano} onChange={(e) => handleItemChange('educacao', item.id, e)} className="p-2 border rounded-md w-40" />
              </div>
              <button onClick={() => handleRemoveItem('educacao', item.id)} className="text-red-500 text-sm" type="button">
                Remover
              </button>
            </div>
          ))}
          <button onClick={() => handleAddItem('educacao')} className="p-2 border rounded-md hover:bg-slate-50" type="button">
            + Adicionar Formação
          </button>
        </div>

        {/* Habilidades e Idiomas */}
        <div className="p-4 border rounded-md">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="font-semibold mb-3">Habilidades e Idiomas</h3>
            <button
              type="button"
              onClick={improveHabilidades}
              disabled={aiLoadingHabilidades}
              className="text-sm font-bold bg-white border border-indigo-200 rounded-lg px-3 py-2 hover:bg-indigo-50 transition disabled:opacity-60"
              title="Melhorar habilidades com IA"
            >
              {aiLoadingHabilidades ? 'Melhorando…' : 'Melhorar com IA'}
            </button>
          </div>

          <textarea
            name="habilidades"
            placeholder="Ex: HTML, CSS, React, Liderança"
            value={data.habilidades}
            onChange={handleFieldChange}
            className="p-2 border rounded-md w-full mb-2"
          />

          <input
            name="idiomas"
            placeholder="Ex: Inglês (Fluente), Espanhol (Básico)"
            value={data.idiomas}
            onChange={handleFieldChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        {/* Ações */}
        <div className="flex gap-3">
          <button onClick={generatePDF} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition" type="button">
            Baixar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
