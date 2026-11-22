'use client';

import React, { useMemo, useState } from 'react';
import { yieldToMain } from '../../lib/yield-to-main';
import { ApoioPosDownload } from '@/components/apoio/ApoioPix';
import { avisarDocumentoPronto } from '@/lib/documento-pronto';
import {
  assinaturas,
  contratoInicial,
  dataFinal,
  localData,
  montarClausulas,
  preambulo,
  tituloContrato,
  type ContratoLocacao,
  type Garantia,
  type Parte,
  type TipoLocacao,
} from './contratoTexto';

const inp = 'w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500';
const lbl = 'block text-xs font-semibold text-slate-600 mb-1';

function Campo({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className={lbl}>{label}</span>
      {children}
    </label>
  );
}

function CamposParte({
  titulo,
  parte,
  onChange,
  pjPermitido,
}: {
  titulo: string;
  parte: Parte;
  onChange: (p: Parte) => void;
  pjPermitido: boolean;
}) {
  const set = (k: keyof Parte) => (e: React.ChangeEvent<HTMLInputElement>) => onChange({ ...parte, [k]: e.target.value });
  const pj = parte.documento.replace(/\D/g, '').length === 14;
  return (
    <fieldset className="border-t border-slate-200 pt-5">
      <legend className="text-base font-semibold text-slate-800 mb-3">{titulo}</legend>
      <div className="grid sm:grid-cols-2 gap-3">
        <Campo label={pj ? 'Razão social' : 'Nome completo'} className="sm:col-span-2">
          <input className={inp} value={parte.nome} onChange={set('nome')} />
        </Campo>
        <Campo label={pjPermitido ? 'CPF ou CNPJ' : 'CPF'}>
          <input className={inp} value={parte.documento} onChange={set('documento')} inputMode="numeric" />
        </Campo>
        {pj ? (
          <Campo label="Representante legal (nome e CPF)">
            <input className={inp} value={parte.representante} onChange={set('representante')} />
          </Campo>
        ) : (
          <Campo label="RG">
            <input className={inp} value={parte.rg} onChange={set('rg')} />
          </Campo>
        )}
        {!pj && (
          <>
            <Campo label="Nacionalidade">
              <input className={inp} value={parte.nacionalidade} onChange={set('nacionalidade')} />
            </Campo>
            <Campo label="Estado civil">
              <input className={inp} value={parte.estadoCivil} onChange={set('estadoCivil')} placeholder="ex.: casado(a)" />
            </Campo>
            <Campo label="Profissão" className="sm:col-span-2">
              <input className={inp} value={parte.profissao} onChange={set('profissao')} />
            </Campo>
          </>
        )}
        <Campo label={pj ? 'Endereço da sede' : 'Endereço completo'} className="sm:col-span-2">
          <input className={inp} value={parte.endereco} onChange={set('endereco')} placeholder="Rua, número, bairro, cidade/UF, CEP" />
        </Campo>
      </div>
    </fieldset>
  );
}

export default function ContratoLocacaoGenerator() {
  const [c, setC] = useState<ContratoLocacao>(contratoInicial);
  const [gerandoPdf, setGerandoPdf] = useState(false);
  const up = (patch: Partial<ContratoLocacao>) => setC((prev) => ({ ...prev, ...patch }));
  const txt = (k: keyof ContratoLocacao) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    up({ [k]: e.target.value } as Partial<ContratoLocacao>);

  const clausulas = useMemo(() => montarClausulas(c), [c]);
  const fim = dataFinal(c.dataInicio, parseInt(c.prazoMeses, 10) || 0);
  const res = c.tipo === 'residencial';

  const setTipo = (tipo: TipoLocacao) =>
    up({ tipo, prazoMeses: tipo === 'residencial' ? '30' : '60', animais: tipo === 'residencial' ? c.animais : false });

  const generatePDF = async () => {
    if (gerandoPdf) return;
    setGerandoPdf(true);
    try {
      await yieldToMain();
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();
      const m = 18;
      const larg = W - 2 * m;
      const lh = 5.2;
      let y = 20;
      const quebra = (h: number) => {
        if (y + h > H - 18) {
          doc.addPage();
          y = 20;
        }
      };
      const paragrafo = (t: string, bold = false, size = 10) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        doc.setFontSize(size);
        const linhas = doc.splitTextToSize(t, larg);
        for (const linha of linhas) {
          quebra(lh);
          doc.text(linha, m, y);
          y += lh;
        }
        y += 2;
      };

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text(tituloContrato(c), W / 2, y, { align: 'center' });
      y += 10;
      preambulo(c).forEach((p) => paragrafo(p));
      clausulas.forEach((cl, i) => {
        y += 1;
        quebra(lh * 3);
        paragrafo(`CLÁUSULA ${i + 1}ª — ${cl.titulo}`, true);
        cl.paragrafos.forEach((p, j) => paragrafo(cl.paragrafos.length > 1 ? `${i + 1}.${j + 1}. ${p}` : p));
      });
      y += 3;
      paragrafo(localData(c));
      y += 6;
      const ass = assinaturas(c);
      for (let i = 0; i < ass.length; i += 2) {
        quebra(24);
        y += 12;
        [ass[i], ass[i + 1]].forEach((a, k) => {
          if (!a) return;
          const x0 = k === 0 ? m : W / 2 + 6;
          const x1 = k === 0 ? W / 2 - 6 : W - m;
          doc.line(x0, y, x1, y);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.text(a.papel, (x0 + x1) / 2, y + 4.5, { align: 'center' });
          doc.setFont('helvetica', 'normal');
          if (a.nome) doc.text(a.nome, (x0 + x1) / 2, y + 9, { align: 'center' });
        });
        y += 12;
      }
      const total = doc.getNumberOfPages();
      for (let p = 1; p <= total; p++) {
        doc.setPage(p);
        doc.setFontSize(7.5);
        doc.setFont('helvetica', 'normal');
        doc.text(`Página ${p} de ${total} — Rubricas: ________  ________`, W / 2, H - 8, { align: 'center' });
      }
      doc.save(`contrato-locacao-${c.tipo}.pdf`);
      avisarDocumentoPronto();
    } finally {
      setGerandoPdf(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-5">
        <h2 className="text-2xl font-bold text-slate-800">Dados do contrato</h2>

        <div>
          <span className={lbl}>Tipo de locação</span>
          <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Tipo de locação">
            {(['residencial', 'comercial'] as TipoLocacao[]).map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={c.tipo === t}
                onClick={() => setTipo(t)}
                className={`p-3 rounded-xl border-2 text-left transition ${c.tipo === t ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <span className="block font-bold text-slate-900 text-sm">{t === 'residencial' ? 'Residencial' : 'Comercial'}</span>
                <span className="block text-xs text-slate-500">
                  {t === 'residencial' ? 'Casa ou apartamento para moradia' : 'Loja, sala, galpão ou ponto comercial'}
                </span>
              </button>
            ))}
          </div>
        </div>

        <CamposParte titulo="Locador (proprietário)" parte={c.locador} onChange={(locador) => up({ locador })} pjPermitido />
        <CamposParte titulo="Locatário (inquilino)" parte={c.locatario} onChange={(locatario) => up({ locatario })} pjPermitido={!res} />

        <fieldset className="border-t border-slate-200 pt-5 space-y-3">
          <legend className="text-base font-semibold text-slate-800 mb-1">Imóvel</legend>
          <Campo label="Endereço completo do imóvel">
            <input className={inp} value={c.imovelEndereco} onChange={txt('imovelEndereco')} placeholder="Rua, número, complemento, bairro, cidade/UF, CEP" />
          </Campo>
          <Campo label="Descrição (opcional)">
            <input
              className={inp}
              value={c.imovelDescricao}
              onChange={txt('imovelDescricao')}
              placeholder={res ? 'ex.: apartamento com 2 quartos e 1 vaga de garagem' : 'ex.: loja térrea com 80 m² e banheiro'}
            />
          </Campo>
          {!res && (
            <Campo label="Atividade que será exercida no imóvel">
              <input className={inp} value={c.atividade} onChange={txt('atividade')} placeholder="ex.: comércio de roupas, escritório de contabilidade" />
            </Campo>
          )}
        </fieldset>

        <fieldset className="border-t border-slate-200 pt-5 grid sm:grid-cols-2 gap-3">
          <legend className="text-base font-semibold text-slate-800 mb-1">Prazo e valores</legend>
          <Campo label="Prazo (meses)">
            <input className={inp} type="number" min={1} max={240} value={c.prazoMeses} onChange={txt('prazoMeses')} />
          </Campo>
          <Campo label={`Início${fim ? ` (término: ${fim.split('-').reverse().join('/')})` : ''}`}>
            <input className={inp} type="date" value={c.dataInicio} onChange={txt('dataInicio')} />
          </Campo>
          <Campo label="Aluguel mensal (R$)">
            <input className={inp} value={c.valor} onChange={txt('valor')} placeholder="ex.: 1.500,00" inputMode="decimal" />
          </Campo>
          <Campo label="Dia do vencimento">
            <input className={inp} type="number" min={1} max={31} value={c.diaVencimento} onChange={txt('diaVencimento')} />
          </Campo>
          <Campo label="Forma de pagamento" className="sm:col-span-2">
            <input className={inp} value={c.formaPagamento} onChange={txt('formaPagamento')} />
          </Campo>
          <Campo label="Índice de reajuste anual">
            <select className={inp} value={c.indiceReajuste} onChange={txt('indiceReajuste')}>
              <option>IPCA (IBGE)</option>
              <option>IGP-M (FGV)</option>
              <option>INPC (IBGE)</option>
              <option>IVAR (FGV)</option>
            </select>
          </Campo>
          <Campo label="Multa por atraso (%)">
            <input className={inp} type="number" min={0} max={20} value={c.multaAtrasoPct} onChange={txt('multaAtrasoPct')} />
          </Campo>
          <Campo label="Multa por devolução antecipada (nº de aluguéis)" className="sm:col-span-2">
            <input className={inp} type="number" min={0} max={12} value={c.multaRescisaoAlugueis} onChange={txt('multaRescisaoAlugueis')} />
          </Campo>
          {!res && Number(c.prazoMeses) < 60 && (
            <p className="sm:col-span-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
              Dica: em locação comercial, contratos escritos de 5 anos ou mais podem dar ao inquilino direito à renovação (ação
              renovatória, art. 51 da Lei 8.245/1991).
            </p>
          )}
        </fieldset>

        <fieldset className="border-t border-slate-200 pt-5 space-y-2">
          <legend className="text-base font-semibold text-slate-800 mb-1">Quem paga as contas do imóvel (inquilino)</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {(
              [
                ['iptu', 'IPTU'],
                ['condominio', 'Condomínio'],
                ['agua', 'Água'],
                ['luz', 'Luz'],
                ['gas', 'Gás'],
              ] as const
            ).map(([k, nome]) => (
              <label key={k} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={c.encargos[k]}
                  onChange={(e) => up({ encargos: { ...c.encargos, [k]: e.target.checked } })}
                />
                {nome}
              </label>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={c.aguaLuzInclusas} onChange={(e) => up({ aguaLuzInclusas: e.target.checked })} />
            Água e luz já inclusas no valor do aluguel
          </label>
          {res && (
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={c.animais} onChange={(e) => up({ animais: e.target.checked })} />
              Permite animais de estimação
            </label>
          )}
        </fieldset>

        <fieldset className="border-t border-slate-200 pt-5 space-y-3">
          <legend className="text-base font-semibold text-slate-800 mb-1">Garantia (só uma, pela lei)</legend>
          <select className={inp} value={c.garantia} onChange={(e) => up({ garantia: e.target.value as Garantia })}>
            <option value="caucao">Caução em dinheiro (até 3 aluguéis)</option>
            <option value="fiador">Fiador</option>
            <option value="seguro">Seguro-fiança</option>
            <option value="nenhuma">Sem garantia</option>
          </select>
          {c.garantia === 'caucao' && (
            <Campo label="Valor da caução (R$)">
              <input className={inp} value={c.caucaoValor} onChange={txt('caucaoValor')} placeholder="ex.: 4.500,00" inputMode="decimal" />
            </Campo>
          )}
          {c.garantia === 'seguro' && (
            <Campo label="Seguradora (opcional)">
              <input className={inp} value={c.seguradora} onChange={txt('seguradora')} />
            </Campo>
          )}
          {c.garantia === 'fiador' && (
            <div className="space-y-3">
              <CamposParte titulo="Fiador" parte={c.fiador} onChange={(p) => up({ fiador: { ...c.fiador, ...p } })} pjPermitido={false} />
              <div className="grid sm:grid-cols-2 gap-3">
                <Campo label="Telefone do fiador">
                  <input className={inp} value={c.fiador.telefone} onChange={(e) => up({ fiador: { ...c.fiador, telefone: e.target.value } })} />
                </Campo>
                <Campo label="Nome do cônjuge (se casado)">
                  <input className={inp} value={c.fiador.conjugeNome} onChange={(e) => up({ fiador: { ...c.fiador, conjugeNome: e.target.value } })} />
                </Campo>
                <Campo label="RG do cônjuge">
                  <input className={inp} value={c.fiador.conjugeRg} onChange={(e) => up({ fiador: { ...c.fiador, conjugeRg: e.target.value } })} />
                </Campo>
                <Campo label="CPF do cônjuge">
                  <input className={inp} value={c.fiador.conjugeCpf} onChange={(e) => up({ fiador: { ...c.fiador, conjugeCpf: e.target.value } })} />
                </Campo>
                <Campo label="Imóvel do fiador (endereço e matrícula)" className="sm:col-span-2">
                  <input className={inp} value={c.fiador.imovelGarantia} onChange={(e) => up({ fiador: { ...c.fiador, imovelGarantia: e.target.value } })} />
                </Campo>
              </div>
            </div>
          )}
        </fieldset>

        <fieldset className="border-t border-slate-200 pt-5 space-y-3">
          <legend className="text-base font-semibold text-slate-800 mb-1">Cláusulas extras (opcional)</legend>
          {c.clausulasExtras.map((t, i) => (
            <textarea
              key={i}
              rows={2}
              className={inp}
              value={t}
              placeholder={i === 0 ? 'ex.: O imóvel é entregue com armários na cozinha, que deverão ser devolvidos em bom estado.' : 'Outra condição combinada'}
              onChange={(e) => {
                const arr = [...c.clausulasExtras];
                arr[i] = e.target.value;
                up({ clausulasExtras: arr });
              }}
            />
          ))}
          {c.clausulasExtras.length < 5 && (
            <button type="button" onClick={() => up({ clausulasExtras: [...c.clausulasExtras, ''] })} className="text-sm font-semibold text-blue-700">
              + Adicionar cláusula
            </button>
          )}
        </fieldset>

        <fieldset className="border-t border-slate-200 pt-5 grid sm:grid-cols-2 gap-3">
          <legend className="text-base font-semibold text-slate-800 mb-1">Assinatura</legend>
          <Campo label="Cidade/UF da assinatura">
            <input className={inp} value={c.cidadeAssinatura} onChange={txt('cidadeAssinatura')} placeholder="ex.: Campinas/SP" />
          </Campo>
          <Campo label="Data da assinatura">
            <input className={inp} type="date" value={c.dataAssinatura} onChange={txt('dataAssinatura')} />
          </Campo>
          <Campo label="Foro (comarca)" className="sm:col-span-2">
            <input className={inp} value={c.foro} onChange={txt('foro')} placeholder="Em branco = cidade da assinatura" />
          </Campo>
          <Campo label="Testemunha 1 (nome)">
            <input className={inp} value={c.testemunha1} onChange={txt('testemunha1')} />
          </Campo>
          <Campo label="Testemunha 2 (nome)">
            <input className={inp} value={c.testemunha2} onChange={txt('testemunha2')} />
          </Campo>
        </fieldset>

        <button
          onClick={generatePDF}
          disabled={gerandoPdf}
          aria-busy={gerandoPdf}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {gerandoPdf ? 'Gerando PDF...' : (
            <>
              <i className="fa-solid fa-file-pdf mr-2"></i>
              Baixar contrato em PDF
            </>
          )}
        </button>
        <p className="text-xs text-slate-500">
          Os dados ficam só no seu navegador. Anexe o laudo de vistoria com fotos e, se quiser mais segurança, reconheça as
          firmas em cartório.
        </p>
        <ApoioPosDownload />
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Prévia do contrato</h2>
        <div className="font-serif text-[13px] leading-relaxed text-slate-800 space-y-3" id="previa-contrato">
          <p className="text-center font-bold">{tituloContrato(c)}</p>
          {preambulo(c).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {clausulas.map((cl, i) => (
            <div key={cl.titulo} className="space-y-1.5">
              <p className="font-bold">
                CLÁUSULA {i + 1}ª — {cl.titulo}
              </p>
              {cl.paragrafos.map((p, j) => (
                <p key={j}>{cl.paragrafos.length > 1 ? `${i + 1}.${j + 1}. ${p}` : p}</p>
              ))}
            </div>
          ))}
          <p>{localData(c)}</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-6">
            {assinaturas(c).map((a) => (
              <div key={a.papel} className="text-center text-[11px]">
                <div className="border-t border-slate-400 pt-1 font-bold">{a.papel}</div>
                {a.nome && <div>{a.nome}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
