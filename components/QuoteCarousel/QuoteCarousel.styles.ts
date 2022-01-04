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
  width: 1640px;
  height: 485px;
  padding: 3vh 13vh 3vh 13vh;
  background-color: ${theme.colors.secondary};
  margin-top: 11vh;

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
    margin-top: 15vh;
  }
`

export const QuoteTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  line-height: 1;
  text-align: center;

  p:nth-child(3) {
    padding: 2vh 0vh 0vh 50vh;
  }

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

export const LeftQuotationMark = styled.img`
  margin-bottom: 20px;
  width: 121px;
  height: 94px;

  @media (min-width: 1000px) and (max-width: 1600px) {
    width: 101px;
    height: 74px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5vh;
  }

  @media only screen and (max-width: 996px) {
    width: 25px;
    height: 25px;
    margin-top: 11vh;
  }
`

export const RightQuotationMark = styled.img`
  width: 121px;
  height: 94px;
  align-self: end;

  @media (min-width: 1000px) and (max-width: 1600px) {
    width: 101px;
    height: 74px;
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
  font-size: 1.9rem;
  font-weight: 700;
  color: ${theme.colors.white};

  @media (min-width: 1000px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 1.125rem;
    line-height: 20px;
  }
`

export const Name = styled.p`
  margin: 0;
  font-size: 1.75rem;
  font-family: 'TT Commons';
  font-weight: 300;
  font-style: italic;
  color: ${theme.colors.white};

  @media only screen and (max-width: 800px) {
    left: -45%;
    font-size: 1.375rem;
    font-style: italic;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: -22%;
  left: 44%;
  display: flex;

  @media (min-width: 1440px) and (max-width: 1600px) {
    left: 45%;
  }

  @media (min-width: 1336px) and (max-width: 1440px) {
    top: -19%;
    left: 45%;
  }

  @media (min-width: 1000px) and (max-width: 1336px) {
    top: -16%;
    left: 40%;
  }

  @media only screen and (max-width: 800px) {
    top: -9%;
    left: 30%;
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
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1000px) and (max-width: 1440px) {
    width: 150px;
    height: 150px;
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

export const ButtonContainer = styled.div`
  margin-top: -55px;
  display: flex;
  justify-content: center;

  button:nth-child(1) {
    background-image: url('/quotes/left-arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 53px;
    width: 53px;
    margin: 0vh 0vh 0vh 1vh;
    border-radius: 100%;
    background-color: #f6f6ff33;
    border: none;
  }
  button:nth-child(2) {
    background-image: url('/quotes/right-arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 53px;
    width: 53px;
    margin: 0vh 0vh 0vh 1vh;
    border-radius: 100%;
    background-color: #f6f6ff33;
    border: none;
  }
`
