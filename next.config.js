/** @type {import('next').NextConfig} */

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

}

module.exports = nextConfig