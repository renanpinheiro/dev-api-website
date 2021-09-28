import React from 'react'

import MultiCarrousel from '../../components/MultiCarrousel/MultiCarrousel'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { constumersMobile } from '../../constants/costumers'

const CarrouselWithOutSSR = dynamic(
  () => import('../../components/Carrousel'),
  {
    ssr: false,
  },
)

export const ClientCarrouselContainer = styled.div`
  width: 100%;
  background-color: rgba(224, 224, 224, 0.35);
  background-size: 76%;

  @media (max-width: 996px) {
    background-color: rgba(224, 224, 224, 0.1);
    background-size: 100%;
  }
`

const Home = () => {
  return (
    <>
      <div>HOME</div>
      <ClientCarrouselContainer>
        <CarrouselWithOutSSR
          items={constumersMobile}
          title={
            <div>
              Conexões que conquistaram a{' '}
              <span>confiança de grandes clientes</span>
            </div>
          }
        />
      </ClientCarrouselContainer>
    </>
  )
}

export default Home
