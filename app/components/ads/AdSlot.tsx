'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AD_CLIENT = 'ca-pub-4754892182690500';

interface AdSlotProps {
  /**
   * ID do bloco de anúncio criado no painel do Google AdSense (Anúncios > Por bloco de anúncios).
   * Os valores usados nas páginas hoje são placeholders — sem um Slot ID real, o Google
   * simplesmente não preenche o espaço e só o rótulo "Publicidade" + a área reservada aparecem.
   */
  slot: string;
  format?: string;
  className?: string;
  label?: string;
}

export default function AdSlot({
  slot,
  format = 'auto',
  className = '',
  label = 'Publicidade',
}: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense pode ainda não ter carregado (bloqueador de anúncios, script lento, etc.)
      // O placeholder abaixo permanece visível de forma discreta nesse caso.
    }
  }, []);

  return (
    <div className={`my-10 flex w-full flex-col items-center gap-1.5 ${className}`}>
      <span className="text-[11px] uppercase tracking-wider text-slate-400">{label}</span>
      <ins
        className="adsbygoogle block w-full"
        style={{ display: 'block', minHeight: 100 }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
