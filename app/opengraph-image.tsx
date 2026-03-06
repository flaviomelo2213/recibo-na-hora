import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ReciboNaHora — Gerador gratuito de recibos e documentos';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1e293b 60%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            padding: '64px',
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '999px',
              padding: '8px 20px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              100% Gratuito · Sem Cadastro
            </span>
          </div>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                background: '#f59e0b',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
              }}
            >
              📄
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '68px',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Recibo<span style={{ color: '#f59e0b' }}>NaHora</span>
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '28px',
              color: '#93c5fd',
              textAlign: 'center',
              maxWidth: '800px',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Gerador gratuito de recibos, contratos, procurações e documentos em PDF
          </p>

          {/* Features row */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '8px',
            }}
          >
            {['Recibos', 'Contratos', 'Procurações', 'Orçamentos', 'MEI'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '20px',
                }}
              >
                <span style={{ color: '#4ade80' }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
