const path = require('path')
const withOffline = require('next-offline')

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    return config
  },
}

module.exports = withOffline(nextConfig)
