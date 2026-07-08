'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AD_CLIENT = 'ca-pub-4754892182690500';

/**
 * Slot IDs reais do AdSense nunca são uma sequência de zeros — esse padrão só
 * bate com os placeholders usados no código enquanto os blocos de anúncio
 * reais ainda não foram criados no painel do AdSense.
 */
const PLACEHOLDER_SLOT_PATTERN = /^0{9}\d$/;

interface AdSlotProps {
  /**
   * ID do bloco de anúncio criado no painel do Google AdSense (Anúncios > Por bloco de anúncios).
   * Enquanto o valor bater com o padrão de placeholder (ex: "0000000001"), o componente
   * não renderiza a tag <ins> nem chama adsbygoogle.push — evita solicitar um anúncio
   * com slot inexistente. Troque pelo Slot ID real para ativar o anúncio de verdade.
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
  const isPlaceholder = PLACEHOLDER_SLOT_PATTERN.test(slot);
  const pushed = useRef(false);

  useEffect(() => {
    if (isPlaceholder) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense pode ainda não ter carregado (bloqueador de anúncios, script lento, etc.)
    }
  }, [isPlaceholder]);

  if (isPlaceholder) {
    // Nenhum <ins class="adsbygoogle"> e nenhuma chamada push() acontece aqui —
    // não há solicitação de anúncio nenhuma até o slot real ser configurado.
    return null;
  }

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
