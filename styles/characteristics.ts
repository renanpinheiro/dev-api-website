import styled from 'styled-components'
import { theme } from './theme'

interface ICharacteristicsStyle {
  position?: 'row' | 'row-reverse'
  align?: 'flex-start' | 'flex-end'
}

export const Container = styled.div``

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 25px;

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

export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const IntegrationContainer = styled.div`
  padding: 10vh 8vw 0 8vw;
`

export const IntegrationContant = styled.div<ICharacteristicsStyle>`
  display: flex;
  flex-direction: ${props => props.position};
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20vh;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 10vh;
  }
`

export const GifContainer = styled.div<ICharacteristicsStyle>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.align};

  width: 50%;

  img {
    width: 35vw;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;
    width: 100%;
    margin-top: 10vh;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 35vw;

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

  p {
    max-width: 70ch;
    line-height: 1.7;

    @media (max-width: 1600px) {
      max-width: 50ch;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;

    width: 100%;

    max-width: 90ch;
  }
`
