'use client';

import { useState } from 'react';
import { lerNumeroBR } from '@/_config/reformaTributaria';

const num = lerNumeroBR;

/** LC 214/2025, art. 251: pessoa física é contribuinte se, no ano anterior, alugou mais de 3 imóveis E recebeu mais de R$ 240 mil. */
const LIMITE_RECEITA = 240000;
const LIMITE_IMOVEIS = 3;

export default function SouContribuinte() {
  const [imoveis, setImoveis] = useState('2');
  const [receita, setReceita] = useState('60.000');

  const qtd = Math.floor(num(imoveis));
  const rec = num(receita);
  const passaImoveis = qtd > LIMITE_IMOVEIS;
  const passaReceita = rec > LIMITE_RECEITA;
  const contribuinte = passaImoveis && passaReceita;

  const campo = 'mt-1 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900';

  return (
    <div className="ml-card p-5">
      <h2 className="text-xl font-bold text-stone-900">Sou contribuinte de IBS e CBS no aluguel?</h2>
      <p className="mt-1 text-sm text-stone-600">Para pessoa física. Use os números do ano anterior.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-stone-700">
          Quantos imóveis diferentes você alugou?
          <input className={campo} inputMode="numeric" value={imoveis} onChange={(e) => setImoveis(e.target.value)} />
        </label>
        <label className="block text-sm font-medium text-stone-700">
          Receita total com aluguéis no ano (R$)
          <input className={campo} inputMode="decimal" value={receita} onChange={(e) => setReceita(e.target.value)} />
        </label>
      </div>
      <div className={`mt-4 rounded-xl p-4 ${contribuinte ? 'bg-amber-50 border border-amber-200' : 'bg-emerald-50 border border-emerald-200'}`} aria-live="polite">
        <p className="font-bold text-stone-900">{contribuinte ? 'Sim, pelos números informados.' : 'Não, pelos números informados.'}</p>
        <ul className="mt-2 text-sm text-stone-700 space-y-1">
          <li>{passaImoveis ? '✔' : '✘'} Mais de 3 imóveis alugados ({qtd})</li>
          <li>{passaReceita ? '✔' : '✘'} Receita acima de R$ 240 mil</li>
        </ul>
        <p className="mt-2 text-xs text-stone-500">
          {contribuinte
            ? 'As duas condições foram atendidas. Converse com um contador sobre o cadastro e a apuração.'
            : 'É preciso cumprir as duas condições ao mesmo tempo. Quem não se enquadra continua só com o Imposto de Renda.'}
        </p>
      </div>
      <p className="mt-3 text-xs text-stone-500">
        O valor de R$ 240 mil é corrigido pelo IPCA. Há regras especiais para receitas muito altas no próprio ano e para venda de imóveis, que esta verificação não cobre.
      </p>
    </div>
  );
}
