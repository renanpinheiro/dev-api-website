import styled from 'styled-components'
import { theme } from './theme'
export const Container = styled.div``
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 5vh 0 8vw 0;
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 8vh 0 8vh 0;

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

  @media (max-width: 576px) {
    align-items: flex-start;
    padding: 25px;
    text-align: left;
    background-size: 100%;
  }
`

export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vw;
`
export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 20px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
export const ContainerItegration = styled.div`
  padding: 5vh 0 8vh 0;
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
export const CostumersCarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw;
  background-size: 76%;
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vw 3vw 6vh 6vw;
`

export const FreeTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8vh 0 8vh 0;
`
export const AcordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5vh 0 8vh 0;
  h2 {
    font-size: 3.2rem;
  }
  span {
    font-weight: 700;
  }
`
export const FreeTestRows = styled.div`
  display: flex;
  flex-direction: column;

  width: 40vw;
`
export const FreeTest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 2.3rem;
    color: ${theme.colors.primary};

    @media (max-width: 996px) {
      margin-top: 10px;
      font-size: 1.375rem;
    }

    span {
      font-weight: 700;
    }
  }
`
export const ListIntegrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 5vh 8vw 5vh 8vw;
`

export const ListIntegrationTitle = styled.h2`
  font-size: 3.2rem;
  color: ${theme.colors.primary};
  text-align: center;
  @media (max-width: 996px) {
    width: 55%;
  }

  @media (max-width: 1024px) {
    width: auto;
  }
  @media (max-width: 1366px) {
    width: 75%;
  }

  @media (max-width: 1700px) {
    font-size: 2.5rem;
  }
  span {
    font-weight: 700;
  }
`
export const ButtonContainer = styled.div`
  padding: 3vh 0 3vh 0;
`
