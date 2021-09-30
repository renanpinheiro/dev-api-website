const withImages = require('next-images')

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
