/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:category/:slug", destination: "/insights/:category/:slug", permanent: true },
      { source: "/category/:category", destination: "/insights/category/:category", permanent: true },
      { source: "/tag/:tag", destination: "/insights/tag/:tag", permanent: true },
    ]
  },
}

export default nextConfig
