/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    // domains: ['127.0.0.1'],
    remotePatterns: [{
      protocol: 'http',
      hostname: '127.0.0.1',
      port: '1337'
    }]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      },
      {
        source: '/index',
        destination: '/home'
      }
    ]
  }
}

module.exports = nextConfig
