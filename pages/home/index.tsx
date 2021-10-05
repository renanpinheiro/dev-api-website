import React from 'react'
import { Hero } from '../../components/Hero'

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { CallToAction } from '../../components/CallToAction'
import QuoteCarousel from '../../components/QuoteCarousel'

import { connectors, connectorsMobile } from '../../constants/connectors'
import { constumersMobile, costumers } from '../../constants/costumers'
import { quotes } from '../../constants/quotes'

import * as S from '../../styles/home'

const CarrouselWithOutSSR = dynamic(
  () => import('../../components/Carrousel'),
  {
    ssr: false,
  },
)

const MultiCarrouselWithOutSSR = dynamic(
  () => import('../../components/MultiCarrousel/MultiCarrousel'),
  {
    ssr: false,
  },
)

const QuoteCarouselWithOutSSR = dynamic(
  () => import('../../components/QuoteCarousel'),
  {
    ssr: false,
  },
)

const Home = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <>
      <Head>
        <title>DevApi</title>
      </Head>

      <S.Hero></S.Hero>

      <S.Content>
        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={constumersMobile}
              title={
                <S.CarrouselTitle>
                  Empresas que ja desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              interval={2000}
              items={costumers}
              title={
                <S.CarrouselTitle>
                  Empresas que ja desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={connectorsMobile}
              title={
                <S.CarrouselTitle>
                  Mais de 300 conectores pré-construídos{' '}
                  <span>e prontos para uso.</span>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              interval={2000}
              items={connectors}
              title={
                <S.CarrouselTitle>
                  Mais de 300 conectores pré-construídos{' '}
                  <span>e prontos para uso.</span>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>

        <S.Quote>
          <QuoteCarousel quotes={quotes} />
        </S.Quote>

        <CallToAction />
      </S.Content>
    </>
  )
}

export default Home
