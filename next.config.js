/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://content-version-system.trinhhaiyen79.workers.dev/:path*'
      }
    ]
  }
}

module.exports = nextConfig