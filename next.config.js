/** @type {import('next').NextConfig} */
const { withOutstatic } = require('outstatic/next')

const nextConfig = {
  output: 'export',          // static HTML export — required for Cloudflare Pages
  trailingSlash: true,       // levery.it/work/ instead of levery.it/work
  images: {
    unoptimized: true,       // required for static export (no Next.js image server)
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'lirp.cdn-website.com' },
    ],
  },
}

module.exports = withOutstatic(nextConfig)
