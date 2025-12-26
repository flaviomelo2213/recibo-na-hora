'use client';

import { useState, useRef } from 'react';
import QRCode from 'qrcode';

export default function FerramentaReciboPix() {
  const [chavePix, setChavePix] = useState('');
  const [nomeBeneficiario, setNomeBeneficiario] = useState('');
  const [valor, setValor] = useState('');
  const [cidade, setCidade] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const gerarQrCode = async () => {
    const payload = `PIX:${chavePix}|${nomeBeneficiario}|${valor}|${cidade}`;
    try {
      const url = await QRCode.toDataURL(payload);
      setQrCodeUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-bold text-stone-800 mb-4'>Gerador de QR Code PIX</h2>
          <div className='space-y-4'>
            <input
              type='text'
              placeholder='Chave PIX'
              className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
            />
            <input
              type='text'
              placeholder='Nome do Beneficiário'
              className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
              value={nomeBeneficiario}
              onChange={(e) => setNomeBeneficiario(e.target.value)}
            />
            <input
              type='number'
              placeholder='Valor (R$)'
              className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <input
              type='text'
              placeholder='Cidade'
              className='w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500'
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <button
              onClick={gerarQrCode}
              className='w-full bg-stone-800 text-amber-50 font-bold py-3 px-4 rounded-md hover:bg-stone-900 transition-colors'
            >
              Gerar QR Code
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-white p-8 rounded-lg border border-stone-200'>
          {qrCodeUrl ? (
            <img src={qrCodeUrl} alt='QR Code PIX' className='w-64 h-64' />
          ) : (
            <p className='text-stone-500'>O QR Code será exibido aqui</p>
          )}
        </div>
      </div>
    </div>
  );
}
