import React from 'react'

import { constumersMobile, costumers } from '../../constants/costumers'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/home'
import dynamic from 'next/dynamic'
import QuoteCarousel from '../../components/QuoteCarousel'
import { quotes } from '../../constants/quotes'
import { connectors, connectorsMobile } from '../../constants/connectors'

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

const Home = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <S.Container>
      <S.CarrouselContainer>
        {isMobile ? (
          <CarrouselWithOutSSR
            items={constumersMobile}
            title={
              <S.CarrouselTitle>
                Empresas que ja desbloquearam o{' '}
                <span>poder da integração de sistemas.</span>
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
                <span>poder da integração de sistemas.</span>
              </S.CarrouselTitle>
            }
          />
        )}
      </S.CarrouselContainer>

      <S.CarrouselContainer>
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
      </S.CarrouselContainer>
      <S.QuoteContainer>
        <QuoteCarousel quotes={quotes} />
      </S.QuoteContainer>
    </S.Container>
  )
}

export default Home
