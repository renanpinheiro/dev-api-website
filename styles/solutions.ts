import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
  z-index: 1;
`

export const HeroContent = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 0 8vw 0 8vw;

  text-align: left;

  h1 {
    z-index: 4;
    max-width: 20ch;
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 400;
    }
  }

  p {
    z-index: 4;
    max-width: 65ch;
    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.7;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    justify-content: flex-end;
    padding: 25px;
    text-align: left;
    background-size: 100%;
  }
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

export const Content = styled.div`
  position: relative;
  z-index: 7;

  width: 100%;

  margin-top: 30px;

  background-color: white;
`

export const QuoteContainer = styled.div`
  padding: 0 3vw 10vh 6vw;
`

export const ProfessionalServiceContainer = styled.div``

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 10vh;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  padding: 10vh 8vw 10vh 8vw;

  @media (max-width: 996px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    max-width: 25ch;

    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }

    @media (max-width: 1600px) {
      font-size: 2.5vw;
    }

    @media (max-width: 1200px) {
      font-size: 4vh;
    }
  }
`

export const ParagraphContainer = styled.div`
  width: 40vw;

  p {
    overflow: hidden;
    font-size: 2vh;

    line-height: 1.7;
  }

  @media (max-width: 996px) {
    width: 100%;
  }
`

export const CarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw 10vh 8vw;
`

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

export const IntegrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10vh;

  @media (max-width: 996px) {
    flex-direction: column;

    padding: 0 8vw 0 8vw;
  }
`

export const ImageContainer = styled.div`
  img {
    width: 30vw;

    @media (max-width: 996px) {
      width: 100%;
    }
  }
`
