const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RDSTATION: process.env.NEXT_PUBLIC_RDSTATION,
    NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
  },
}
