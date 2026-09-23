/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig = {

  reactStrictMode: true,

  compress: true,

  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Redirects de URLs legadas.
  //
  // Antes eram feitos por `permanentRedirect()` dentro de page.tsx. Como essas
  // rotas são prerenderizadas, o Next servia a resposta do cache estático com
  // status 308 mas SEM o header `Location`, entregando uma página
  // `__next_error__` — ou seja, um beco sem saída para usuários e crawlers
  // (verificado na Fase 4B com `curl --max-redirs 0`).
  //
  // Declarados aqui, os redirects são resolvidos antes do roteamento de
  // arquivos e emitem 308 com `Location` correto. Os page.tsx originais foram
  // mantidos (nada apagado), apenas deixaram de ser alcançados.
  async redirects() {
    return [
      {
        source: '/gerar/venda_veiculo',
        destination: '/gerar/venda-veiculo',
        permanent: true,
      },
      {
        source: '/consultoria-credito',
        destination: '/educacao-financeira',
        permanent: true,
      },
    ];
  },

};

module.exports = nextConfig;
