'use client';

import { useMemo, useState } from 'react';
import {
  CBS_REFERENCIA_PADRAO,
  TIPOS_OPERACAO,
  calcularRT,
  type AnoCalculo,
} from '@/_config/reformaTributaria';

const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const pct = (v: number) => `${v.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}%`;
const num = (s: string) => {
  const limpo = s.trim().replace(/\s/g, '').replace(/R\$/i, '');
  const n = limpo.includes(',') ? parseFloat(limpo.replace(/\./g, '').replace(',', '.')) : parseFloat(limpo);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

export default function CalculadoraRT() {
  const [valor, setValor] = useState('1.000,00');
  const [ano, setAno] = useState<AnoCalculo>(2027);
  const [tipoId, setTipoId] = useState<string>('padrao');
  const [cbsRef, setCbsRef] = useState(String(CBS_REFERENCIA_PADRAO).replace('.', ','));
  const [copiado, setCopiado] = useState(false);
  const [gerando, setGerando] = useState(false);

  const tipo = TIPOS_OPERACAO.find((t) => t.id === tipoId) ?? TIPOS_OPERACAO[0];
  const r = useMemo(() => calcularRT(num(valor), ano, tipo.reducao, num(cbsRef)), [valor, ano, tipo.reducao, cbsRef]);

  const textoResultado = [
    `Simulação Reforma Tributária (${ano}) — ${tipo.nome}`,
    ...r.memoria,
    'Fonte: recibonahora.com.br/reforma-tributaria/calculadora (estimativa, não substitui o contador)',
  ].join('\n');

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(textoResultado);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* navegador sem permissão de área de transferência */
    }
  };

  const baixarPdf = async () => {
    setGerando(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ unit: 'mm', format: 'a4' });
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text('Simulação da Reforma Tributária (CBS e IBS)', 15, 20);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      let y = 32;
      doc.text(`Ano: ${ano}   Tipo de operação: ${tipo.nome}`, 15, y);
      y += 10;
      r.memoria.forEach((linha) => {
        doc.splitTextToSize(linha, 180).forEach((l: string) => {
          doc.text(l, 15, y);
          y += 6.5;
        });
      });
      y += 6;
      doc.setFontSize(8.5);
      doc.setTextColor(110);
      doc.splitTextToSize(
        'Estimativa educativa com base na LC 214/2025. A alíquota de referência da CBS de 2027 ainda depende de resolução do Senado. Não substitui a orientação de um contador. Gerado em recibonahora.com.br.',
        180,
      ).forEach((l: string) => {
        doc.text(l, 15, y);
        y += 5;
      });
      doc.save(`simulacao-reforma-tributaria-${ano}.pdf`);
    } finally {
      setGerando(false);
    }
  };

  const campo = 'mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900';

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <form className="lg:col-span-2 ml-card p-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <label className="block text-sm font-medium text-stone-700">
          1. Valor da venda ou do serviço, sem os tributos novos (R$)
          <input className={campo} inputMode="decimal" value={valor} onChange={(e) => setValor(e.target.value)} />
        </label>

        <fieldset>
          <legend className="text-sm font-medium text-stone-700">2. Ano</legend>
          <div className="mt-1 grid grid-cols-2 gap-2">
            {([2026, 2027] as AnoCalculo[]).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAno(a)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-semibold ${ano === a ? 'border-amber-500 bg-amber-50 text-stone-900' : 'border-stone-300 bg-white text-stone-600'}`}
              >
                {a === 2026 ? '2026 (teste)' : '2027'}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm font-medium text-stone-700">
          3. Tipo de operação
          <select className={campo} value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
            {TIPOS_OPERACAO.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
          </select>
          <span className="mt-1 block text-xs text-stone-500">{tipo.ajuda}</span>
        </label>

        <label className="block text-sm font-medium text-stone-700">
          4. Alíquota de referência da CBS (%)
          <input className={campo} inputMode="decimal" value={cbsRef} onChange={(e) => setCbsRef(e.target.value)} disabled={ano === 2026} />
          <span className="mt-1 block text-xs text-stone-500">
            {ano === 2026
              ? 'Em 2026 vale a alíquota de teste de 0,9%.'
              : '11,3% foi o cálculo do TCU, em análise no Senado até 15/12/2026. Você pode mudar.'}
          </span>
        </label>
      </form>

      <div className="lg:col-span-3 space-y-4" aria-live="polite">
        <div className="ml-card p-5">
          <p className="text-sm text-stone-500">Resultado {ano} · {tipo.nome}</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-stone-50 p-3"><p className="text-xs text-stone-500">CBS ({pct(r.cbsAliq * (1 - r.reducao))})</p><p className="text-lg font-bold text-stone-900">{brl(r.cbs)}</p></div>
            <div className="rounded-xl bg-stone-50 p-3"><p className="text-xs text-stone-500">{ano === 2026 ? 'IBS' : 'IBS estadual'} ({pct(r.ibsEstAliq * (1 - r.reducao))})</p><p className="text-lg font-bold text-stone-900">{brl(r.ibsEst)}</p></div>
            {ano === 2027 && (
              <div className="rounded-xl bg-stone-50 p-3"><p className="text-xs text-stone-500">IBS municipal ({pct(r.ibsMunAliq * (1 - r.reducao))})</p><p className="text-lg font-bold text-stone-900">{brl(r.ibsMun)}</p></div>
            )}
            <div className="rounded-xl bg-amber-50 p-3"><p className="text-xs text-stone-500">Total de tributos</p><p className="text-lg font-bold text-stone-900">{brl(r.total)}</p></div>
            <div className="rounded-xl bg-stone-900 p-3 text-white"><p className="text-xs text-stone-300">Preço final</p><p className="text-lg font-bold">{brl(r.precoFinal)}</p></div>
          </div>
          {ano === 2026 && (
            <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-900">
              Em 2026 a CBS e o IBS aparecem na nota fiscal como teste e são compensados com PIS e Cofins.
            </p>
          )}
        </div>

        <div className="ml-card p-5">
          <h2 className="text-lg font-bold text-stone-900">Memória de cálculo</h2>
          <ol className="mt-3 space-y-1.5 text-sm text-stone-700 list-decimal pl-5">
            {r.memoria.map((m) => <li key={m}>{m}</li>)}
          </ol>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={copiar} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-50">
              {copiado ? 'Copiado!' : 'Copiar resultado'}
            </button>
            <button type="button" onClick={baixarPdf} disabled={gerando} className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-600 disabled:opacity-60">
              {gerando ? 'Gerando PDF…' : 'Baixar em PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
