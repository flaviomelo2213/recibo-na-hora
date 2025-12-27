
"use client";

import { useState } from 'react';

export default function ContatoPage() {
  const [email, setEmail] = useState('contato@recibonahora.com.br');

  return (
    <div className="bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">Entre em Contato</h2>
        <p className="mt-2 text-lg leading-8 text-neutral-600">
          Tem alguma dúvida, sugestão ou encontrou algum problema? Adoraríamos ouvir de você.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="text-center p-8 border-2 border-dashed border-neutral-200 rounded-lg">
          <h3 className="text-base font-semibold leading-7 text-neutral-900">Nosso canal de suporte principal é via e-mail.</h3>
          <p className="mt-4 text-lg font-bold leading-6 text-primary-dark">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Nos esforçamos para responder a todas as mensagens em até 48 horas úteis.
          </p>
        </div>
      </div>
    </div>
  );
}
