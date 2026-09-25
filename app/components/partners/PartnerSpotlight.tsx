'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  ACTIVE_PARTNER_OFFERS,
  type PartnerCategory,
  type PartnerOffer,
} from '@/_data/partnerOffers';

type PartnerSpotlightProps = {
  categories?: PartnerCategory[];
  compact?: boolean;
};

export default function PartnerSpotlight({
  categories,
  compact = false,
}: PartnerSpotlightProps) {
  const offers = useMemo(() => {
    if (!categories?.length) return ACTIVE_PARTNER_OFFERS;
    const allowed = new Set(categories);
    const filtered = ACTIVE_PARTNER_OFFERS.filter((offer) => allowed.has(offer.category));
    return filtered.length ? filtered : ACTIVE_PARTNER_OFFERS;
  }, [categories]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (offers.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % offers.length);
    }, 12000);
    return () => window.clearInterval(timer);
  }, [offers.length]);

  useEffect(() => {
    if (index >= offers.length) setIndex(0);
  }, [index, offers.length]);

  const offer: PartnerOffer | undefined = offers[index];

  if (!offer) {
    return (
      <aside
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        aria-label="Parcerias ReciboNaHora"
      >
        <p className="text-sm font-semibold text-slate-900">Ajude a manter o ReciboNaHora gratuito</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Você não paga nada a mais. Quando precisar contratar um serviço, usar um de nossos
          links de parceria pode gerar uma comissão para o projeto.
        </p>
        <Link
          href="/parcerias"
          className="mt-4 inline-flex text-sm font-semibold text-indigo-700 hover:underline"
        >
          Visite nossa página de parcerias
        </Link>
      </aside>
    );
  }

  return (
    <aside
      className={
        compact
          ? 'rounded-xl border border-slate-200 bg-white p-4 shadow-sm'
          : 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'
      }
      aria-label="Parceiro recomendado"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
          Parceiro recomendado
        </span>
        {offers.length > 1 ? (
          <span className="text-[11px] text-slate-400">
            {index + 1}/{offers.length}
          </span>
        ) : null}
      </div>

      <h3 className="mt-2 text-base font-bold text-slate-900">{offer.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{offer.shortDescription}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {offer.href ? (
          <a
            href={offer.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {offer.cta}
          </a>
        ) : null}

        <Link href="/parcerias" className="text-sm font-semibold text-indigo-700 hover:underline">
          Ver todas as parcerias
        </Link>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        Você não paga nada a mais. Se uma contratação elegível gerar comissão, ela ajuda a manter
        nossas ferramentas gratuitas.
      </p>
    </aside>
  );
}
