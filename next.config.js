/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'helpfulabssolutions.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
