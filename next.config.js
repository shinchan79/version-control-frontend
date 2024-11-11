/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Xóa rewrites và headers vì không hoạt động với output: 'export'
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  // Thêm basePath nếu cần
  basePath: '',
  // Thêm trailingSlash để đảm bảo URL endpoints nhất quán
  trailingSlash: true,
  // Tắt strict mode trong development
  reactStrictMode: false,
  // Cấu hình env variables public
  env: {
    NEXT_PUBLIC_API_URL: 'https://content-version-system.trinhhaiyen79.workers.dev'
  }
}

module.exports = nextConfig