import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useRouter } from 'next/router'

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
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
