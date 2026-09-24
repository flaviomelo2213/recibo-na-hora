'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    _mgq?: unknown[];
  }
}

export default function AdsKeeperWidget() {
  useEffect(() => {
    window._mgq = window._mgq || [];
    window._mgq.push(['_mgc.load']);
  }, []);

  return (
    <aside
      role="complementary"
      aria-label="Conteúdo patrocinado"
      className="mt-10 pt-6 border-t border-slate-200"
    >
      <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
        Conteúdo patrocinado
      </p>
      <div
        className="min-h-[250px]"
        data-type="_mgwidget"
        data-widget-id="2087179"
      />
    </aside>
  );
}
