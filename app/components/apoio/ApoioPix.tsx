'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import QRCode from 'qrcode';
import { APOIO_PIX } from '../../_config/apoio';
import { gerarBrCodeEstatico } from '../../lib/pix-brcode';
import { EVENTO_DOCUMENTO_PRONTO } from '../../lib/documento-pronto';
import { dicaPara } from './dicas';

/** BR Code estático (sem valor) gerado a partir da chave de apoio. */
const BR_CODE_APOIO = gerarBrCodeEstatico({ chave: APOIO_PIX.chave, nome: APOIO_PIX.titular, cidade: APOIO_PIX.cidade });

/** Chave Pix visível + botão de copiar. */
export function ChavePixApoio({ mostrarChave = true }: { mostrarChave?: boolean }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(APOIO_PIX.chave);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      // Sem acesso à área de transferência: a chave continua visível para copiar manualmente.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {mostrarChave && <code className="break-all rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-xs text-slate-800 select-all">
        {APOIO_PIX.chave}
      </code>}
      <button
        type="button"
        onClick={copiar}
        className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-50"
      >
        {copiado ? 'Chave copiada!' : 'Copiar chave'}
      </button>
    </div>
  );
}

/** QR Code Pix de apoio, com visual neutro do site. */
export function QrApoio({ tamanho = 160 }: { tamanho?: number }) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    QRCode.toDataURL(BR_CODE_APOIO, { width: tamanho * 2, margin: 1, errorCorrectionLevel: 'M', color: { dark: '#0f172a', light: '#ffffff' } })
      .then(setUrl)
      .catch(() => setUrl(''));
  }, [tamanho]);
  return url ? (
    <img src={url} alt="QR Code Pix para apoiar o ReciboNaHora" width={tamanho} height={tamanho} className="rounded-md border border-slate-200 bg-white p-1" />
  ) : (
    <div style={{ width: tamanho, height: tamanho }} className="rounded-md border border-slate-200 bg-slate-50" />
  );
}

/**
 * Caixa abaixo do botão de download: antes do download mostra uma dica da ferramenta; depois, o convite de apoio.
 * A altura é fixa desde o início, então a troca não causa pulo de layout nem empurra anúncios.
 * Não é pop-up, modal nem elemento fixo; nunca entra no PDF (fica fora da área capturada e some na impressão).
 */
export function ApoioPosDownload() {
  const [visivel, setVisivel] = useState(false);
  const [mostrarQr, setMostrarQr] = useState(false);
  const dica = dicaPara(usePathname());

  useEffect(() => {
    const mostrar = () => setVisivel(true);
    window.addEventListener(EVENTO_DOCUMENTO_PRONTO, mostrar);
    return () => window.removeEventListener(EVENTO_DOCUMENTO_PRONTO, mostrar);
  }, []);

  return (
    <div className="no-print print:hidden my-8 h-[250px] sm:h-[210px]">
      <section
        aria-label={visivel ? 'Apoie o ReciboNaHora' : 'Dica'}
        className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700"
      >
        {!visivel ? (
          <div className="space-y-3">
            <p><span className="font-semibold text-slate-900">Dica:</span> {dica.texto}</p>
            <a href={dica.href} className="inline-block font-semibold text-slate-700 underline">{dica.link}</a>
          </div>
        ) : mostrarQr ? (
          <div className="flex h-full items-start gap-4 sm:items-center">
            <div className="shrink-0">
              <QrApoio tamanho={130} />
            </div>
            <div className="min-w-0 space-y-2">
              <p className="text-xs sm:text-sm">Escaneie no app do seu banco e escolha o valor. Titular: {APOIO_PIX.titular}.</p>
              <div className="hidden sm:block"><ChavePixApoio /></div>
              <div className="sm:hidden"><ChavePixApoio mostrarChave={false} /></div>
              <button type="button" onClick={() => setMostrarQr(false)} className="text-xs font-semibold text-slate-600 underline">
                Ocultar QR Code
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="font-semibold text-slate-900">Documento pronto!</p>
            <p>
              O recibonahora é gratuito e mantido por uma pessoa. Se ajudou, você pode apoiar com qualquer valor via Pix.
            </p>
            <ChavePixApoio />
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button type="button" onClick={() => setMostrarQr(true)} className="font-semibold text-slate-700 underline">
                Mostrar QR Code
              </button>
              <a href="/apoie" className="text-slate-500 underline">Saiba mais sobre o apoio</a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
