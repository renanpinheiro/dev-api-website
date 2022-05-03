// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    )

    // Important: return the modified config
    return config
  },
}

module.exports = withImages({
  esModule: true,
})

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_RDSTATION: process.env.NEXT_PUBLIC_API_RDSTATION,
    NEXT_PUBLIC_KEY_RDSTATION: process.env.NEXT_PUBLIC_KEY_RDSTATION,
  },
}
