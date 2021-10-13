import React, { useEffect } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { GTMPageView } from '../utils/seo/gtm'
import SEO from '../next-seo.config'

import { ThemeProvider } from 'styled-components'

import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>

      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        {router.asPath !== '/trial-success' && <Footer />}
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
