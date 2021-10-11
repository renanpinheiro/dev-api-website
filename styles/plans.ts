import styled from 'styled-components'
import { theme } from './theme'
export const Container = styled.div``
export const CardContainer = styled.div`
  width: 100%;
  padding: 10vh 8vw 0 8vw;
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 8vh 8vw 8vh 8vw;

  text-align: center;

  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  h1 {
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 400;
    }
  }

  p {
    max-width: 90ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.7;
  }

  @media (max-width: 900px) {
    align-items: flex-start;

    text-align: left;
    background-size: 100%;
  }
`

export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    align-items: flex-start;

    text-align: left;
  }
`
export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.2rem;
    text-align: center;
    @media (max-width: 900px) {
      align-items: flex-start;
      font-size: 2rem;
    }
  }

  span {
    font-weight: 700;
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
export const ContainerItegration = styled.div`
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
    padding-left: 0;
    text-align: left;
  }
`
export const CarrouselTitle = styled.h2`
  font-size: 2.3rem;
  color: ${theme.colors.primary};
  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: left;
  }

  span {
    font-weight: 700;
  }
`
export const CostumersCarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw;
  background-size: 76%;
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 3vw 3vh 6vw;
`

export const FreeTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
    padding: 10vh 8vw 0 8vw;
  }
`
export const AcordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10vh 8vw 10vh 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
`

export const ListIntegrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
`
export const ListColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`
export const ListIntegrationTitle = styled.h2`
  font-size: 3.2rem;
  color: ${theme.colors.primary};
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2rem !important;
    text-align: left;
  }

  span {
    font-weight: 700;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0 0 0;

  @media (max-width: 900) {
    align-items: flex-start;
  }
`
