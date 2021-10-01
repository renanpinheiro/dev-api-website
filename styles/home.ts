import styled from 'styled-components'
import { theme } from './theme'

export const CarrouselTitle = styled.h2`
  font-size: 2.3rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  span {
    font-weight: 700;
  }
`
export const CarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw;
  background-size: 76%;
`

export const Container = styled.div`
  padding-top: 13vh;
`

export const QuoteContainer = styled.div`
  padding: 20px 0;
`
export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5vh 8vw 0 8vw;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ActionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35ch;
  margin-right: 3vw;

  @media (max-width: 1024px) {
    align-items: center;
    width: 100%;
    padding-bottom: 1vh;
    text-align: center;
  }

  h3 {
    font-size: 2.2rem;
  }

  span {
    font-weight: 700;
  }
`
