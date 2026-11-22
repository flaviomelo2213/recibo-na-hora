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
    // Capas oficiais dos produtos de afiliado (página /recursos)
    remotePatterns: [
      { protocol: 'https', hostname: 'hotmart.s3.amazonaws.com', pathname: '/product_pictures/**' },
    ],
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
      // Auditoria de indexação (nov/2026): páginas duplicadas unidas na versão mais forte.
      {
        source: '/blog/diferenca-recibo-nota-fiscal',
        destination: '/comparacoes/recibo-vs-nota-fiscal',
        permanent: true,
      },
      {
        source: '/guias/nota-fiscal-ou-recibo-quando-usar',
        destination: '/comparacoes/recibo-vs-nota-fiscal',
        permanent: true,
      },
      {
        source: '/blog/recibo-tem-validade-legal',
        destination: '/guias/recibo-tem-valor-legal',
        permanent: true,
      },
      {
        source: '/guias/o-que-e-rpa',
        destination: '/blog/como-fazer-rpa',
        permanent: true,
      },
      {
        source: '/guias/como-fazer-recibo-autonomo',
        destination: '/blog/recibo-prestacao-servico-autonomo',
        permanent: true,
      },
      {
        source: '/blog/contrato-prestacao-servico-modelo',
        destination: '/modelo/contrato-prestacao-servico',
        permanent: true,
      },
      {
        source: '/blog/declaracao-endereco-como-fazer',
        destination: '/modelo/declaracao-endereco',
        permanent: true,
      },
      {
        source: '/blog/nota-promissoria-como-funciona',
        destination: '/modelo/nota-promissoria',
        permanent: true,
      },
      {
        source: '/perguntas/recibo-correto-para-mei',
        destination: '/blog/mei-nota-fiscal-ou-recibo',
        permanent: true,
      },
    ];
  },

};

module.exports = nextConfig;
