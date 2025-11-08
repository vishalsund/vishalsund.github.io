const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true // Required for static export
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

module.exports = withMDX(nextConfig)