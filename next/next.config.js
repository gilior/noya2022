const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/audioPalyer/audioPalyer-bundle-:hash.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public,max-age=31536000,immutable",
          },
        ],
      },
    ];
  }
}

module.exports = nextConfig
