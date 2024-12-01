/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Generates static HTML/CSS/JS
  basePath: '/modiprabal.github.io', // Your repository name
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: '/modiprabal.github.io/', // Your repository name with trailing slash
}

module.exports = nextConfig
