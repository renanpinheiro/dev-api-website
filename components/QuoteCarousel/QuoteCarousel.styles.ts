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
          height: 100%;
          width: 100% !important;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
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
  width: 75rem;
  height: 250px;
  background-color: ${theme.colors.secondary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../../static/images/backgrounds/devapi-bg-secondary.svg');
  padding: 2vh 5vh 2vh 20vh;

  border-top-left-radius: 100px;
  border-bottom-right-radius: 100px;

  @media (min-width: 1024px) and (max-width: 1366px) {
    height: auto;
    width: 100%;
  }

  @media only screen and (max-width: 1023px) {
    height: auto;
    width: 100%;
    margin-top: 10vh;
    padding: 2vh 2vw 2vh 2vh;
  }
`

export const QuoteTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  line-height: 1;
  height: 100%;

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

  @media (min-width: 1336px) and (max-width: 1600px) {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 996px) {
    width: 25px;
    height: 25px;
    margin-top: 11vh;
  }
`

export const Quote = styled.p`
  margin: 0;
  color: ${theme.colors.white};
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 20px;

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
  color: ${theme.colors.white};
  font-size: 1.125rem;

  @media only screen and (max-width: 800px) {
    margin-bottom: 2vh;
    font-size: 1.375rem;
    font-style: italic;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -3%;
  top: 10%;

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
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
`

export const CircleDetail = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid ${props => props.theme.colors.primary};
  position: absolute;
  border-radius: 50%;
  z-index: 9;
  right: 7%;
`
