// const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    domains : ['gateway.pinata.cloud']
  },
  webpack : config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net : false,
      os : false,
      tls : false,
      fs : false
    }
    return config
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/create-nft": { page: "/create-nft" },
      "/my-nfts": { page: "/my-nfts" },
      "/my-collection": { page: "/my-collection" }
    };
  },
  images: {
    unoptimized: true,
  },
  
}

module.exports = nextConfig
