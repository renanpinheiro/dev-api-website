import styled from 'styled-components'
import { theme } from './theme'

export const Hero = styled.section`
  height: 100vh;
  background-color: ${theme.colors.gray[100]};
`

export const Content = styled.section`
  width: 100%;
  padding: 10vh 8vw;

  @media (max-width: 768px) {
    padding: 10vh 8vw;
  }
`

export const Carrousel = styled.section`
  width: 100%;
  background-size: 76%;
`

export const CarrouselTitle = styled.h2`
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  span {
    font-weight: 700;
  }
`

export const Quote = styled.div`
  padding: 15vh 0 0;
`
