import React from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
