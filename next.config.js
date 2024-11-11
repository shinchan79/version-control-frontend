/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: '/',
  distDir: 'out',
  env: {
    NEXT_PUBLIC_API_URL: 'https://content-version-system.trinhhaiyen79.workers.dev'
  },
  experimental: {
    optimizeFonts: true
  }
}

module.exports = nextConfig