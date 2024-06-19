/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
      unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      '/contact': { page: '/contact' },
    }
  },
}

module.exports = nextConfig
