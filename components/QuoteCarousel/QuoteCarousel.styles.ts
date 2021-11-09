import Slider from 'react-slick'

import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
`

export const Carrousel = styled(Slider)`
  & > div {
    & > div {
      @media (max-width: 996px) {
        width: 100% !important;
      }

      & > div {
        @media (max-width: 996px) {
          width: 100% !important;
          height: 100%;
          padding-right: 1.25rem;
          padding-left: 1.25rem;
        }

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`

export const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75rem;
  height: 250px;
  padding: 2vh 5vh 2vh 20vh;
  background-color: ${theme.colors.secondary};
  background-image: url('/backgrounds/devapi-bg-secondary.svg');

  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;

  @media (min-width: 1024px) and (max-width: 1366px) {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: auto;
    padding: 2vh 2vw 2vh 2vh;
    margin-top: 10vh;
  }
`

export const QuoteTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  line-height: 1;

  @media (min-width: 1600px) and (max-width: 1920px) {
    padding: 1vw;
  }

  @media (min-width: 1517px) and (max-width: 1600px) {
    padding: 1.5vw;
  }

  @media (min-width: 1336px) and (max-width: 1440px) {
    height: 100%;
  }
`

export const QuotationMark = styled.img`
  margin-bottom: 20px;
  width: 30px;
  height: 30px;
  @media (min-width: 1336px) and (max-width: 1600px) {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 996px) {
    width: 25px;
    height: 25px;
    margin-top: 11vh;
  }
`

export const Quote = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: 700;
  color: ${theme.colors.white};

  @media (min-width: 1336px) and (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 1.125rem;
    line-height: 25px;
  }
`

export const Name = styled.p`
  margin: 0;
  font-size: 1.125rem;
  color: ${theme.colors.white};

  @media only screen and (max-width: 800px) {
    margin-bottom: 2vh;
    font-size: 1.375rem;
    font-style: italic;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 10%;
  left: -3%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) and (max-width: 1600px) {
    left: -5%;
  }

  @media (min-width: 1336px) and (max-width: 1440px) {
    left: -4%;
  }

  @media (min-width: 1000px) and (max-width: 1336px) {
    left: -8%;
  }

  @media only screen and (max-width: 800px) {
    top: -15%;
    left: 20%;
  }
`
export const Icon = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (min-width: 1600px) and (max-width: 1920px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1517px) and (max-width: 1600px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1440px) and (max-width: 1517px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 160px;
    height: 160px;
  }

  @media only screen and (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
`

export const CircleDetail = styled.div`
  position: absolute;
  right: 7%;
  z-index: 9;
  width: 100%;
  height: 100%;
  border: 2px solid ${theme.colors.primary};
  border-radius: 50%;
`
