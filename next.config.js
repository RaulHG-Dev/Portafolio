/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
