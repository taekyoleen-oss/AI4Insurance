/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

export default nextConfig
