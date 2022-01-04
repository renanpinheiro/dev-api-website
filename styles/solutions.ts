import styled, { css } from 'styled-components'
import { theme } from './theme'

interface ITitleProps {
  width?: string
}

export const Container = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 8vw 0 8vw;
  text-align: left;

  @media (max-width: 576px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }
`
export const PipeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`
export const Pipe = styled.div`
  width: 15vh;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const Title = styled.h1<ITitleProps>`
  z-index: 4;
  width: ${props => (props.width ? props.width : '62%')};
  font-size: 2.625rem;

  @media (max-width: 996px) {
    width: 100%;
    font-size: 2rem;
  }

  @media (min-width: 1600px) {
    width: ${props => (props.width ? props.width : '62%')};
    font-size: 3.75rem;
    line-height: 7vh;
  }

  > b {
    font-weight: 700;
  }
`

export const Subtitle = styled.p`
  z-index: 4;
  width: 60%;
  margin: 3vh 0;
  font-size: 1.375rem;
  line-height: 3vh;

  @media (max-width: 996px) {
    width: 100%;
    font-size: 1.25rem;
  }

  @media (min-width: 1600px) {
    max-width: 43%;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 20;
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

  > h2 {
    width: 61%;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 2rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }
`

interface IParagraphContainerProps {
  width?: string
}
export const ParagraphContainer = styled.div<IParagraphContainerProps>`
  width: ${props => (props.width ? props.width : '50%')};

  @media (max-width: 996px) {
    width: 100%;
  }

  > p {
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      font-size: 1.25rem;
      line-height: 1.3;
    }
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
  > img {
    width: 32vw;

    @media (max-width: 996px) {
      width: 100%;
    }
  }
`
