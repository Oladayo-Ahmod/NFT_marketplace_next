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
  }
}

module.exports = nextConfig
