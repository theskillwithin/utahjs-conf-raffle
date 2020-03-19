const path = require('path')
const withOffline = require('next-offline')

const nextConfig = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['definitions'] = path.join(__dirname, 'definitions')
    return config
  },
}

module.exports = withOffline(nextConfig)
