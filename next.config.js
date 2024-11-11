/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://content-version-system.trinhhaiyen79.workers.dev/:path*',
        // Thêm cấu hình CORS nếu cần
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    ]
  },
  // Thêm cấu hình cho production
  typescript: {
    // Bỏ qua type checking trong quá trình build để tăng tốc độ
    ignoreBuildErrors: true,
  },
  swcMinify: true, // Sử dụng SWC minifier thay vì Terser
}

module.exports = nextConfig