import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { QueryClientProvider, QueryClient } from 'react-query'

import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ThemeProvider } from 'styled-components'

import { Cookie } from '../components/Cookie'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import SEO from '../next-seo.config'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { GTMPageView } from '../utils/seo/gtm'

const queryClient = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const [cookies, setCookie, removeCookie] = useCookies(['__Secure'])
  const hasDevapiCookie = cookies.__Secure === 'accept'
  const [isAcceptCookies, setIsAcceptCookies] = useState(hasDevapiCookie)

  // hubspot
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js.hs-scripts.com/20991234.js'
    script.async = true
    script.defer = true
    script.id = 'hs-script-loader'
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
