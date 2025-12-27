
'use client';

import { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';

// Componente que renderiza a pré-visualização do recibo
const PreviewReciboPix = ({ data }: { data: any }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const previewRef = useRef(null);

  // Gera o QR Code em tempo real sempre que os dados mudam
  useEffect(() => {
    const generateQRCode = async () => {
      // Payload simplificado para o QR Code. Pode ser melhorado para o padrão BRCODE.
      const text = `PIX:${data.chavePix || 'chave'}|${data.valor || '0.00'}|${data.nomeBeneficiario || 'nome'}`;
      try {
        const url = await QRCode.toDataURL(text, { width: 128, margin: 1 });
        setQrCodeUrl(url);
      } catch (err) {
        console.error('Falha ao gerar QR Code:', err);
      }
    };

    generateQRCode();
  }, [data]);

  return (
    <div ref={previewRef} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 w-full max-w-lg">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start pb-4 border-b-2 border-dashed">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Recibo de Pagamento PIX</h2>
          <p className="text-sm text-gray-500">Comprovante de Transação Instantânea</p>
        </div>
        <span className="font-mono text-lg text-gray-700 font-bold">#{data.id || '0001'}</span>
      </div>

      {/* Corpo do Recibo */}
      <div className="py-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Recebemos de:</span>
          <span className="font-medium text-gray-800">Pagador não identificado (via PIX)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Beneficiário:</span>
          <span className="font-medium text-gray-800">{data.nomeBeneficiario || 'Não informado'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Chave PIX:</span>
          <span className="font-mono text-gray-800">{data.chavePix || 'Não informada'}</span>
        </div>
        <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
          <span className="text-gray-600 font-bold">VALOR TOTAL:</span>
          <span className="text-2xl font-bold text-blue-600">R$ {data.valor || '0,00'}</span>
        </div>
        <div className="pt-2">
           <p className="text-sm text-gray-600">Eu, <strong className='font-bold'>{data.nomeBeneficiario || "(Nome do Beneficiário)"}</strong>, declaro que recebi o valor descrito neste recibo, referente a <strong className='font-bold'>{data.referente || "(descrição do pagamento)"}</strong>.</p>
        </div>
      </div>

      {/* Rodapé com QR Code */}
      <div className="flex items-center gap-6 pt-6 border-t">
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code PIX" className="w-24 h-24 border p-1 rounded-md" />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse"></div>
        )}
        <div>
          <h4 className="font-bold text-gray-800">Validação</h4>
          <p className="text-sm text-gray-600">Este QR Code contém as informações do PIX para simples conferência. O comprovante oficial é emitido pelo seu banco.</p>
        </div>
      </div>
      
      {/* Assinatura e Data */}
      <div className="flex justify-between items-end mt-12 pt-8 border-t">
          <div className="w-2/5">
              <div className="border-b border-gray-400 mb-2"></div>
              <p className="text-center text-xs text-gray-600">{data.nomeBeneficiario || 'Assinatura do Beneficiário'}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-800">{data.cidade || 'Sua Cidade'}, {new Date().toLocaleDateString('pt-BR')}</p>
          </div>
      </div>

    </div>
  );
};

export default PreviewReciboPix;
