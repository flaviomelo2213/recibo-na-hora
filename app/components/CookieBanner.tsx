'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import Script from 'next/script';

const STORAGE_KEY = 'rnh_cookie_consent';
type Consent = 'accepted' | 'rejected' | null;
const ConsentContext = createContext(false);
export const useOptionalConsent = () => useContext(ConsentContext);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setConsent(saved === 'accepted' || saved === 'rejected' ? saved : null);
      setOpen(saved !== 'accepted' && saved !== 'rejected');
    } catch { setOpen(true); }
    setReady(true);
    // Reload after a cross-tab change so already running third-party scripts stop.
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) window.location.reload();
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  const choose = (next: Exclude<Consent, null>) => {
    try { localStorage.setItem(STORAGE_KEY, next); }
    catch {
      // A rejection must also replace a previous persisted acceptance.
      if (consent === 'accepted' && next === 'rejected') {
        window.alert('Não foi possível salvar a preferência. Permita o armazenamento do site e tente novamente.');
        return;
      }
    }
    if (consent === 'accepted' && next === 'rejected') {
      window.location.reload();
      return;
    }
    setConsent(next);
    setOpen(false);
  };

  return (
    <ConsentContext.Provider value={ready && consent === 'accepted'}>
      {children}
      {ready && (
        <div className="print:hidden">
          <div className="border-t border-slate-200 bg-white px-4 py-4 text-center">
            <button type="button" onClick={() => setOpen(true)} className="text-sm text-slate-600 underline">
              Preferências de cookies
            </button>
          </div>
          {open && (
            <section aria-label="Preferências de cookies" className="fixed bottom-0 left-0 right-0 z-[9999] max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white p-4 shadow-lg">
              <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-700">
                  <p>Com sua permissão, usamos cookies para medir o uso e exibir anúncios. Você pode usar as ferramentas sem aceitar. Consulte nossa <a href="/politica-privacidade" className="font-semibold underline">Política de Privacidade</a>.</p>
                  {consent === 'accepted' && <p className="mt-2">Ao rejeitar, a página será recarregada para interromper os serviços. Baixe seus documentos antes de continuar.</p>}
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <button type="button" onClick={() => choose('rejected')} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800">{consent === 'accepted' ? 'Rejeitar e recarregar' : 'Rejeitar'}</button>
                  <button type="button" onClick={() => choose('accepted')} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Aceitar</button>
                  {consent && <button type="button" onClick={() => setOpen(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">Fechar</button>}
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </ConsentContext.Provider>
  );
}

export function ConsentScripts() {
  const allowed = useOptionalConsent();
  if (!allowed) return null;
  return (
    <>
      <Script id="ga-gtag" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {analytics_storage:'granted', ad_storage:'granted', ad_user_data:'granted', ad_personalization:'granted'});
        gtag('js', new Date());
        gtag('config', 'G-YYX0MSP75Y', { anonymize_ip: true });
      `}</Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YYX0MSP75Y" strategy="afterInteractive" />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4754892182690500" crossOrigin="anonymous" strategy="afterInteractive" />
      <Script src="https://jsc.adskeeper.com/site/1112891.js" strategy="afterInteractive" />
    </>
  );
}
