/**
 *                        DEFAULT SEO OPTIONS
 *
 * Set your default on-page SEO options here.
 * These will appear in the <head></head> of each page of your web app.
 *
 * Feel free to add, remove, or keep all these options.
 * For more info: https://github.com/garmeeh/next-seo#nextseo-options
 */
export default {
  noindex: false,
  openGraph: {
    images: [
      {
        url: 'https://devapi-cdn-static.s3.amazonaws.com/website/logo.png',
        width: 1200,
        height: 630,
        alt: 'DevApi',
      },
    ],
    site_name: 'DevApi',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}
