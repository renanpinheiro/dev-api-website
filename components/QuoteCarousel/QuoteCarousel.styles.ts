import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import { IFadeStyle, IQuotePaginationDivStyle } from './Quote.interface'

export const Container = styled.div`
  width: 100%;
`

export const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1640px;
  height: 485px;
  padding: 3vh 6vw 3vh 7vw;
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
    padding: 2vh 2vw 2vh 2vw;
    margin-top: 15vh;
  }
`

export const QuoteTexts = styled.div`
  display: flex;
  flex-direction: column;
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

export const LeftQuotationMark = styled.img`
  width: 121px;
  height: 94px;

  @media (min-width: 800px) and (max-width: 1600px) {
    width: 75px;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5vw;
  }

  @media only screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
    margin-top: 11vh;
  }
`

export const RightQuotationMark = styled.img`
  width: 121px;
  height: 94px;
  align-self: end;
  margin-top: -50px;

  @media (min-width: 800px) and (max-width: 1600px) {
    width: 75px;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
    margin-top: 11vh;
  }
`

export const Quote = styled.p<IFadeStyle>`
  font-size: 2.05rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.white};
  padding: 1vh 0.3vw;
  text-align: center;

  ${props =>
    props.isFade
      ? css`
          opacity: 0;
          transition: linear;
        `
      : css`
          transition: opacity 1s ease;
        `}

  @media (min-width: 1000px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 1.125rem;
    line-height: 20px;
  }
`

export const Name = styled.p<IFadeStyle>`
  padding-top: 1vw;
  font-size: 1.75rem;
  font-family: 'TT Commons';
  font-weight: 300;
  font-style: italic;
  color: ${theme.colors.white};
  align-self: center;

  ${props =>
    props.isFade
      ? css`
          opacity: 0;
          transition: linear;
        `
      : css`
          transition: opacity 1s ease;
        `}

  @media (min-width: 800px) and (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 800px) {
    left: -45%;
    font-size: 1.2rem;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: -22%;
  left: 43.5%;
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
    top: -13%;
    align-items: center;
    right: 35vw;
  }
`

export const Icon = styled.img<IFadeStyle>`
  width: 193px;
  height: 184px;
  border-radius: 50%;

  ${props =>
    props.isFade
      ? css`
          opacity: 0;
          transition: linear;
        `
      : css`
          transition: opacity 0.1s linear;
        `}

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

export const QuoteButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const QuoteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 90px;
  border-radius: 50%;
  background-color: #f6f6ff33;
  border: none;
`

export const QuoteImageButton = styled.img`
  width: 35px;
  height: 35px;
  padding: 5px;
`

export const QuoteSpanContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0vh 1vw;
`

export const QuotePaginationDiv = styled.div<IQuotePaginationDivStyle>`
  margin: 0.5vw 0.5vh;
  width: 10px;
  height: 10px;
  background-color: ${props =>
    props.isActive ? theme.colors.white : '#f6f6ff33'};
  border-radius: 50%;
`
