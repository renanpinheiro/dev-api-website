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

  @media (max-width: 576px) {
    align-items: flex-start;
    padding: 25px;
    text-align: left;
    background-size: 100%;
  }

  > h1 {
    font-size: 2.625rem;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.75rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 70%;
    margin: 3vh 0;
    margin-bottom: 30px;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.2;
    }

    @media (min-width: 1600px) {
      width: 55%;
    }
  }
`

export const Pipe = styled.div`
  width: 17vh;
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

  @media (max-width: 1200px) {
    justify-content: center;
    width: 100%;
    max-width: 90ch;
  }

  > h2 {
    width: 100%;
    font-size: 2.375rem;
    line-height: 1;

    @media (max-width: 996px) {
      font-size: 2rem;
    }

    @media (min-width: 1600px) {
      width: 98%;
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 100%;
    margin-top: 3vh;
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 96%;
      font-size: 1.375rem;
    }
  }
`
