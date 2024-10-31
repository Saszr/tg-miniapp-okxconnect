import { fileURLToPath } from 'node:url'
import { createJiti } from 'jiti'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts')

const jiti = createJiti(fileURLToPath(import.meta.url))
const { serverEnvs } = await jiti.import('./src/env/server')
await jiti.import('./src/env/client')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  transpilePackages: ['jotai-devtools'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xelene.me',
      },
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: serverEnvs.NODE_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: serverEnvs.NODE_ENV === 'production',
  },
}

export default withNextIntl(nextConfig)
