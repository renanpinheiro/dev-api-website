import React, { useEffect, useState } from 'react'
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
import { Cookie } from '../components/Cookie'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { useCookies } from 'react-cookie'

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const [cookies, setCookie, removeCookie] = useCookies(['__Secure'])
  const hasDevapiCookie = cookies.__Secure === 'accept'
  const [isAcceptCookies, setIsAcceptCookies] = useState(hasDevapiCookie)

  // rdstation
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/3898021c-e125-41ca-8f3c-3cd2e9e9bb99-loader.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  const acceptCookie = (isAccept: boolean) => {
    setCookie('__Secure', 'accept', { path: '/' })
    setIsAcceptCookies(isAccept)

    if (!isAccept) {
      removeCookie('__Secure', { path: '/' })
    }
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
        />
        {isAcceptCookies && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TPHLSXZ');`,
            }}
          />
        )}
      </Head>

      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
        {router.asPath !== '/trial-success' && <Footer />}
        <GlobalStyle />
        <Cookie
          acceptCookie={isAccept => acceptCookie(isAccept)}
          isActiveCookies={isAcceptCookies}
        />
      </ThemeProvider>
    </>
  )
}

export default MyApp
