'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { parseValorBR, valorPorExtenso } from '../../../lib/valor-extenso';
import { gerarBrCodeEstatico, normalizarChavePix, valorBrCode } from '../../../lib/pix-brcode';

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
}

/**
 * Pix Copia e Cola (BR Code estático) para o pagador pagar ao recebedor.
 * Devolve '' enquanto a chave ou o valor não forem válidos — aí o QR Code não aparece.
 */
export function brCodePedido(d: DadosReciboPix): string {
  const chave = normalizarChavePix(d.chavePix);
  const valor = valorBrCode(parseValorBR(d.valor));
  if (!chave || !valor || !d.nomeBeneficiario.trim()) return '';
  return gerarBrCodeEstatico({ chave, nome: d.nomeBeneficiario, cidade: d.cidade, valor });
}

const PreviewReciboPix = ({ data }: { data: DadosReciboPix }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [dataEmissao, setDataEmissao] = useState('');

  // Data de emissão só no cliente, para não divergir entre servidor e navegador.
  useEffect(() => {
    setDataEmissao(new Date().toLocaleDateString('pt-BR'));
  }, []);

  const copiaECola = brCodePedido(data);

  useEffect(() => {
    let ativo = true;
    if (!copiaECola) { setQrCodeUrl(''); return; }
    QRCode.toDataURL(copiaECola, { width: 320, margin: 1, errorCorrectionLevel: 'M' })
      .then((url: string) => { if (ativo) setQrCodeUrl(url); })
      .catch((err: unknown) => console.error('Falha ao gerar QR Code:', err));
    return () => { ativo = false; };
  }, [copiaECola]);

  const valorNumero = parseValorBR(data.valor);
  const extenso = valorNumero !== null && valorNumero > 0 ? valorPorExtenso(valorNumero) : '';
  const recebedor = data.nomeBeneficiario || '[nome do recebedor]';

  return (
    <div id="recibo-pix-preview" className="bg-white rounded-lg shadow-lg p-8 border border-slate-300 w-full max-w-lg text-slate-800">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2 pb-4 border-b-2 border-dashed border-slate-300 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold text-slate-900">Recibo de Recebimento via Pix</h2>
          <p className="mt-1 text-sm text-slate-700 break-words">
            Pedido de pagamento via Pix. Pague na chave informada e guarde o comprovante do seu banco.
          </p>
        </div>
        <span className="order-first self-end shrink-0 whitespace-nowrap font-mono text-lg text-slate-700 font-bold sm:order-last sm:self-start">Nº {data.id || '0001'}</span>
      </div>

      {/* Aviso em destaque: faz parte do documento e sai sempre no PDF */}
      <div className="mt-4 rounded-md border-2 border-amber-500 bg-amber-50 p-3 text-sm text-amber-900">
        <p className="font-bold uppercase tracking-wide">Válido somente com o comprovante bancário</p>
        <p className="mt-1 break-words">
          Este recibo só tem validade acompanhado do comprovante da transação emitido pelo banco.
          Sozinho, ele não prova que o pagamento foi feito.
        </p>
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
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <span className="text-sm font-bold text-slate-700 tracking-wide">VALOR A PAGAR</span>
            <span className="whitespace-nowrap text-2xl font-bold text-slate-900">R$ {data.valor || '0,00'}</span>
          </div>
          {extenso && <p className="mt-1 text-sm text-slate-600 sm:text-right">({extenso})</p>}
        </div>

        <div className="pt-2">
          <p className="text-sm text-slate-700 leading-relaxed break-words">
            Pagador: <strong className="font-bold">{data.nomePagador || '[PAGADOR]'}</strong>. Referente a:{' '}
            <strong className="font-bold">{data.referente || '[DESCRIÇÃO DO PAGAMENTO]'}</strong>.
          </p>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed break-words">
            Depois de pago, este documento serve como recibo de quitação, desde que acompanhado do comprovante da
            transação emitido pelo banco.
          </p>
        </div>
      </div>

      {/* Pague por Pix: QR Code pagável (BR Code estático) para a chave do recebedor */}
      <div className="pt-6 border-t border-slate-200">
        <h4 className="font-bold text-slate-900">Pague por Pix e confira os dados</h4>
        <div className="mt-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt="QR Code Pix para pagamento" className="w-32 h-32 shrink-0 border border-slate-200 p-1 rounded-md" />
          ) : (
            <div className="w-32 h-32 shrink-0 bg-slate-100 rounded-md flex items-center justify-center p-2 text-center text-[11px] text-slate-500">
              Preencha nome, chave Pix e valor para gerar o QR Code
            </div>
          )}
          <p className="text-sm text-slate-600 break-words">
            Escaneie o QR Code ou use o Pix Copia e Cola no aplicativo do seu banco. Antes de confirmar, confira se o
            nome de quem recebe e o valor mostrados no app são os mesmos deste documento.
          </p>
        </div>
        {copiaECola && (
          <div className="mt-3">
            <p className="text-xs font-semibold text-slate-600">Pix Copia e Cola:</p>
            <p className="mt-1 break-all rounded bg-slate-50 p-2 font-mono text-[10px] leading-snug text-slate-700">{copiaECola}</p>
          </div>
        )}
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
        Documento emitido por {recebedor} via recibonahora.com.br. Não é comprovante bancário: só tem validade
        acompanhado do comprovante da transação emitido pelo banco.
      </p>
    </div>
  );
};

export default PreviewReciboPix;
