/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bỏ output: 'export' vì chúng ta cần dynamic routes
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig