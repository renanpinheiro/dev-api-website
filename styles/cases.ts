import styled from 'styled-components'

import { theme } from './theme'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8vh 20vw 8vh 15vw;

  @media (max-width: 1024px) {
    padding: 8vh 8vw 8vh 8vw;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`
export const CardContainer = styled.div`
  width: 100%;
  padding: 10vh 8vw 0 8vw;
`
export const HeroColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    padding: 12vh 5vw 5vw 8vh;
  }
`
export const HeroContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25vh 0 8vh 8vw;
  text-align: left;

  @media (max-width: 1024px) {
    align-items: flex-start;
    padding: 15vh 0 8vh 8vw;
    text-align: left;
    background-size: 100%;
  }

  @media (max-width: 600px) {
    padding: 0;
  }

  > h1 {
    font-size: 2.625rem;

    @media (max-width: 576px) {
      font-size: 2rem;
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
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.2;
    }

    @media (max-width: 600px) {
      width: 100%;
      font-size: 1rem;
      line-height: 1.2;
    }

    @media (min-width: 1600px) {
      width: 55%;
    }
  }
`
export const HeroContentImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8vh 5vw 8vh 0;

  @media (max-width: 1024px) {
    img {
      width: 60vw;
    }
    padding: 12vh 5vw 8vh 0;
  }

  @media (max-width: 375px) {
    padding-top: 3vh;
    img {
      display: none;
    }
  }
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

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
    text-align: left;
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

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.2;
    }

    @media (min-width: 1600px) {
      width: 55%;
    }
  }
`
export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 414px) {
    align-items: flex-start;
    padding-left: 8vw;
  }
`
export const Pipe = styled.div`
  width: 10vw;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
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
    font-size: 2rem;
    text-align: left;
  }

  > b {
    font-weight: 700;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2vh 0 8vh 0;
`
export const HistorySuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  padding-top: 5vh;
  text-align: center;
`

export const HistorySuccessTitle = styled.h2`
  font-size: 2.8rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  @media (max-width: 414px) {
    padding-left: 8vw;
    text-align: left;
  }

  span {
    font-weight: 700;
  }
`

export const DatailsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 10vw;

  @media (max-width: 1024px) {
    padding: 0 5vw;
  }

  @media (max-width: 600px) {
    padding: 0 15vw;
  }
`
