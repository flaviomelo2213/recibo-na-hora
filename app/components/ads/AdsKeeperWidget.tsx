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
    <div
      className="my-6"
      data-type="_mgwidget"
      data-widget-id="2087179"
      aria-label="Conteúdo patrocinado"
    />
  );
}
