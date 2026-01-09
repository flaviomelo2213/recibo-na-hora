"use client";

import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

export interface ProcuracaoData {
  outorganteNome: string;
  outorganteCPF: string;
  outorganteRG: string;
  outorganteEndereco: string;
  outorgadoNome: string;
  outorgadoCPF: string;
  outorgadoRG: string;
  outorgadoEndereco: string;
  poderes: string;
  cidade: string;
  data: string;
}

interface FerramentaProcuracaoProps {
  data: ProcuracaoData;
  setData: React.Dispatch<React.SetStateAction<ProcuracaoData>>;
}

export default function FerramentaProcuracao({ data, setData }: FerramentaProcuracaoProps) {
  useEffect(() => {
    if (!data.data) {
      const today = new Date().toISOString().split("T")[0];
      setData((prev) => ({ ...prev, data: today }));
    }
  }, [data.data, setData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // =========================
  // IA (BYOK Gemini)
  // =========================
  const [geminiKey, setGeminiKey] = useState("");
  const [persistKey, setPersistKey] = useState(true);
  const [showKey, setShowKey] = useState(false);
  const [tone, setTone] = useState<"formal" | "profissional" | "simples">("formal");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem("rnh_procuracao_ai_persist");
      const shouldPersist = p === null ? true : p === "1";
      setPersistKey(shouldPersist);

      const savedKey = localStorage.getItem("rnh_gemini_api_key") || "";
      if (shouldPersist) setGeminiKey(savedKey);

      const savedTone = (localStorage.getItem("rnh_procuracao_ai_tone") as any) || "formal";
      if (savedTone === "formal" || savedTone === "profissional" || savedTone === "simples") {
        setTone(savedTone);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("rnh_procuracao_ai_persist", persistKey ? "1" : "0");
      if (!persistKey) localStorage.removeItem("rnh_gemini_api_key");
      else localStorage.setItem("rnh_gemini_api_key", geminiKey);
    } catch {
      // ignore
    }
  }, [persistKey, geminiKey]);

  useEffect(() => {
    try {
      localStorage.setItem("rnh_procuracao_ai_tone", tone);
    } catch {
      // ignore
    }
  }, [tone]);

  async function rewritePoderesWithAI() {
    setAiError(null);

    const key = geminiKey.trim();
    if (!key) {
      setAiError("Cole sua Gemini API Key para usar a IA.");
      return;
    }
    if (!data.poderes.trim()) {
      setAiError('Escreva o texto em "Poderes" antes de pedir melhoria.');
      return;
    }

    setAiLoading(true);
    try {
      const res = await fetch("/api/ai/rewrite", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind: "procuracao",
          tone,
          model: "gemini-2.5-flash",
          geminiApiKey: key,
          text: data.poderes,
        }),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok) throw new Error(json?.error || "Falha ao chamar IA. Verifique sua chave.");

      const improved = String(json?.improvedText ?? "").trim();
      if (!improved) throw new Error("IA retornou vazio. Tente novamente.");

      setData((prev) => ({ ...prev, poderes: improved }));
    } catch (err: any) {
      setAiError(err?.message || "Erro inesperado ao usar IA.");
    } finally {
      setAiLoading(false);
    }
  }

  // =========================
  // PDF
  // =========================
  const generatePDF = () => {
    const doc = new jsPDF();
    const text = `
PROCURAÇÃO

OUTORGANTE: ${data.outorganteNome}, CPF nº ${data.outorganteCPF}, RG nº ${data.outorganteRG}, residente e domiciliado(a) em ${data.outorganteEndereco}.

OUTORGADO: ${data.outorgadoNome}, CPF nº ${data.outorgadoCPF}, RG nº ${data.outorgadoRG}, com endereço em ${data.outorgadoEndereco}.

PODERES: Pelo presente instrumento, o outorgante nomeia e constitui seu bastante procurador o outorgado para o fim específico de: ${data.poderes}.

${data.cidade}, ${new Date(data.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}.

_________________________________________
${data.outorganteNome}
    `;
    doc.text(text, 10, 10);
    doc.save("procuracao.pdf");
  };

  return (
    <div className="space-y-6">
      {/* Painel IA (opcional) */}
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles text-indigo-600"></i> Melhorar texto com IA (opcional)
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
            {showKey ? "Ocultar" : "Mostrar"}
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
            type={showKey ? "text" : "password"}
            placeholder="Cole sua Gemini API Key aqui"
            className="w-full p-3 border rounded"
          />

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
            className="w-full p-3 border rounded bg-white"
            title="Tom da reescrita"
          >
            <option value="formal">Tom: Formal</option>
            <option value="profissional">Tom: Profissional</option>
            <option value="simples">Tom: Simples</option>
          </select>
        </div>

        <label className="mt-3 flex items-center gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            checked={persistKey}
            onChange={(e) => setPersistKey(e.target.checked)}
          />
          Salvar chave neste navegador
        </label>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Outorgante (Quem concede os poderes)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="outorganteNome" value={data.outorganteNome} onChange={handleChange} placeholder="Nome Completo" className="p-2 border rounded" />
          <input type="text" name="outorganteCPF" value={data.outorganteCPF} onChange={handleChange} placeholder="CPF" className="p-2 border rounded" />
          <input type="text" name="outorganteRG" value={data.outorganteRG} onChange={handleChange} placeholder="RG" className="p-2 border rounded" />
          <input type="text" name="outorganteEndereco" value={data.outorganteEndereco} onChange={handleChange} placeholder="Endereço Completo" className="p-2 border rounded sm:col-span-2" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Outorgado (Quem recebe os poderes)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" name="outorgadoNome" value={data.outorgadoNome} onChange={handleChange} placeholder="Nome Completo do Profissional/Representante" className="p-2 border rounded" />
          <input type="text" name="outorgadoCPF" value={data.outorgadoCPF} onChange={handleChange} placeholder="CPF/CNPJ" className="p-2 border rounded" />
          <input type="text" name="outorgadoRG" value={data.outorgadoRG} onChange={handleChange} placeholder="RG/Inscrição Profissional" className="p-2 border rounded" />
          <input type="text" name="outorgadoEndereco" value={data.outorgadoEndereco} onChange={handleChange} placeholder="Endereço Profissional" className="p-2 border rounded sm:col-span-2" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Detalhes da Procuração</h3>

          <button
            type="button"
            onClick={rewritePoderesWithAI}
            disabled={aiLoading}
            className="text-sm font-bold bg-white border border-indigo-200 rounded-lg px-3 py-2 hover:bg-indigo-50 transition disabled:opacity-60"
            title="Melhorar o texto de poderes com IA"
          >
            {aiLoading ? "Melhorando…" : "Melhorar com IA"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <textarea
            name="poderes"
            value={data.poderes}
            onChange={handleChange}
            placeholder="Descreva os poderes concedidos..."
            className="p-2 border rounded h-24"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="cidade" value={data.cidade} onChange={handleChange} placeholder="Cidade" className="p-2 border rounded" />
            <input type="date" name="data" value={data.data} onChange={handleChange} className="p-2 border rounded" />
          </div>
        </div>
      </div>

      <button
        onClick={generatePDF}
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Gerar PDF
      </button>
    </div>
  );
}
