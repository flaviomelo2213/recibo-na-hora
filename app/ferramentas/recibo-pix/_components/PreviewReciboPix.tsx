'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { parseValorBR, valorPorExtenso } from '../../../lib/valor-extenso';

export interface DadosReciboPix {
  id: string;
  chavePix: string;
  nomeBeneficiario: string;
  cpfBeneficiario: string;
  nomePagador: string;
  cpfCnpjPagador: string;
  valor: string;
  cidade: string;
  referente: string;
  dataPix: string; // AAAA-MM-DD (opcional)
  idTransacao: string; // opcional
}

/** "2026-11-10" → "10/11/2026" */
export function formatarData(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${m[3]}/${m[2]}/${m[1]}` : '';
}

/**
 * Conteúdo do QR Code: texto simples com os dados digitados pelo emissor.
 * Propositalmente NÃO segue o padrão BR Code (EMV) — não pode ser lido como Pix pagável.
 */
export function textoQrRecibo(d: DadosReciboPix, dataEmissao: string): string {
  return [
    'RECIBO DE RECEBIMENTO VIA PIX - NAO E CODIGO DE PAGAMENTO',
    `Numero: ${d.id || '-'}`,
    `Recebedor: ${d.nomeBeneficiario || '-'}`,
    `Pagador: ${d.nomePagador || '-'}`,
    `Valor: R$ ${d.valor || '-'}`,
    `Data: ${formatarData(d.dataPix) || dataEmissao}`,
    'Dados informados pelo emissor via recibonahora.com.br',
  ].join('\n');
}

const PreviewReciboPix = ({ data }: { data: DadosReciboPix }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [dataEmissao, setDataEmissao] = useState('');

  // Data de emissão só no cliente, para não divergir entre servidor e navegador.
  useEffect(() => {
    setDataEmissao(new Date().toLocaleDateString('pt-BR'));
  }, []);

  useEffect(() => {
    let ativo = true;
    QRCode.toDataURL(textoQrRecibo(data, dataEmissao), { width: 320, margin: 1, errorCorrectionLevel: 'M' })
      .then((url: string) => { if (ativo) setQrCodeUrl(url); })
      .catch((err: unknown) => console.error('Falha ao gerar QR Code:', err));
    return () => { ativo = false; };
  }, [data, dataEmissao]);

  const valorNumero = parseValorBR(data.valor);
  const extenso = valorNumero !== null && valorNumero > 0 ? valorPorExtenso(valorNumero) : '';
  const recebedor = data.nomeBeneficiario || '[nome do recebedor]';
  const dataPix = formatarData(data.dataPix);

  return (
    <div id="recibo-pix-preview" className="bg-white rounded-lg shadow-lg p-8 border border-slate-300 w-full max-w-lg text-slate-800">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start pb-4 border-b-2 border-dashed border-slate-300">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Recibo de Recebimento via Pix</h2>
          <p className="text-sm text-slate-500">Recibo emitido pelo recebedor</p>
        </div>
        <span className="font-mono text-lg text-slate-700 font-bold">Nº {data.id || '0001'}</span>
      </div>

      {/* Partes */}
      <div className="py-6 space-y-4">
        <div className="p-4 rounded-md border border-slate-200">
          <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wide">Recebedor (emitente deste recibo)</p>
          <div className="space-y-1">
            <p className="font-medium text-slate-900">{data.nomeBeneficiario || '[NOME DO RECEBEDOR]'}</p>
            {data.cpfBeneficiario && <p className="text-sm text-slate-600">CPF/CNPJ: {data.cpfBeneficiario}</p>}
            <p className="text-xs text-slate-600 font-mono mt-2">Chave Pix: {data.chavePix || '[CHAVE PIX]'}</p>
          </div>
        </div>

        <div className="p-4 rounded-md border border-slate-200">
          <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wide">Pagador</p>
          <div className="space-y-1">
            <p className="font-medium text-slate-900">{data.nomePagador || '[NOME DO PAGADOR]'}</p>
            {data.cpfCnpjPagador && <p className="text-sm text-slate-600">CPF/CNPJ: {data.cpfCnpjPagador}</p>}
          </div>
        </div>

        {/* Valor — visual sóbrio, sem gradiente */}
        <div className="p-4 rounded-md border-2 border-slate-800">
          <div className="flex justify-between items-baseline gap-4">
            <span className="text-sm font-bold text-slate-700 tracking-wide">VALOR RECEBIDO</span>
            <span className="text-2xl font-bold text-slate-900">R$ {data.valor || '0,00'}</span>
          </div>
          {extenso && <p className="text-sm text-slate-600 text-right mt-1">({extenso})</p>}
        </div>

        {(dataPix || data.idTransacao) && (
          <div className="text-sm text-slate-700 space-y-1">
            {dataPix && <p><span className="font-semibold">Data do Pix:</span> {dataPix}</p>}
            {data.idTransacao && (
              <p className="break-all"><span className="font-semibold">ID da transação (informado pelo emissor):</span> <span className="font-mono text-xs">{data.idTransacao}</span></p>
            )}
          </div>
        )}

        <div className="pt-2">
          <p className="text-sm text-slate-700 leading-relaxed">
            Declaro que recebi de <strong className="font-bold">{data.nomePagador || '[PAGADOR]'}</strong> o valor acima,
            referente a <strong className="font-bold">{data.referente || '[DESCRIÇÃO DO PAGAMENTO]'}</strong>, por meio de Pix.
          </p>
        </div>
      </div>

      {/* QR Code com os dados digitados */}
      <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code com os dados do recibo" className="w-32 h-32 shrink-0 border border-slate-200 p-1 rounded-md" />
        ) : (
          <div className="w-32 h-32 shrink-0 bg-slate-100 rounded-md" />
        )}
        <div>
          <h4 className="font-bold text-slate-900">Dados informados pelo emissor</h4>
          <p className="text-sm text-slate-600">
            Este QR Code reúne os dados digitados por quem emitiu o recibo. O comprovante oficial é emitido pelo banco.
          </p>
        </div>
      </div>

      {/* Assinatura e data de emissão */}
      <div className="flex justify-between items-end mt-12 pt-8 border-t border-slate-200">
        <div className="w-2/5">
          <div className="border-b border-slate-400 mb-2" />
          <p className="text-center text-xs text-slate-600">{data.nomeBeneficiario || 'Assinatura do recebedor'}</p>
        </div>
        <div className="text-right">
          <p className="font-medium text-slate-800">{data.cidade || 'Sua cidade'}, {dataEmissao}</p>
        </div>
      </div>

      {/* Rodapé fixo: faz parte do recibo e sai sempre no PDF */}
      <p className="mt-8 pt-3 border-t border-slate-200 text-[11px] leading-snug text-slate-500 text-center">
        Documento emitido por {recebedor} via recibonahora.com.br. Não substitui o comprovante emitido pelo banco.
      </p>
    </div>
  );
};

export default PreviewReciboPix;
