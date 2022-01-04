import styled from 'styled-components'
import { theme } from './theme'

export const HeroContainer = styled.section`
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
export const PipeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const Content = styled.section`
  width: 100%;
  padding: 10vh 19vw;

  @media (max-width: 768px) {
    padding: 10vh 8vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-items: flex-start;
    margin-bottom: 4vw;
  }

  > img {
    width: 100%;

    @media (max-width: 768px) {
      margin-bottom: 4vw;
    }
  }
`

export const Title = styled.div`
  margin: 6vw 0 1vh;

  > hr {
    width: 5.8vw;
    height: 0.188rem;
    margin: 0;
    background-color: ${theme.colors.secondary};
    opacity: 1;

    @media (max-width: 768px) {
      width: 18vw;
    }
  }

  > h2 {
    font-size: 2.875rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }

    > b {
      font-weight: 900;
    }
  }
`

export const Text = styled.div`
  align-items: flex-start;
  justify-items: flex-start;
  margin-top: 2vh;

  > p {
    margin-bottom: 1vw;
    font-size: 1.25rem;
    line-height: 1.5;

    @media (max-width: 768px) {
      margin-bottom: 2.5vw;
      font-size: 1rem;
    }
  }
`

export const Founders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2vw;
`

export const Card = styled.div`
  display: flex;
  flex-basis: 350px;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  align-items: center;
  margin: 0 1.5vw;
  border-radius: 8px;
  box-shadow: rgb(44 45 102 / 21%) 0px 6px 28px;

  @media (max-width: 768px) {
    margin: 3vh 0;
  }

  @media (min-width: 1600px) {
    flex-basis: 450px;
  }

  > img {
    width: 100%;
    vertical-align: middle;
    background-position: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  > a {
    margin: 1vw 0 0.5vw;
    font-size: 1.75rem;
    font-weight: 700;
    color: ${theme.colors.primary};
    text-align: center;
    text-decoration: none;

    @media (max-width: 768px) {
      margin: 5vw 0 0.5vw;
      font-size: 1.5rem;
    }
  }

  > span {
    font-size: 1.5rem;
    color: #c2c2c2;
  }

  > hr {
    width: 220px;
    height: 4px;
    margin: 1vw 0 0;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    opacity: 1;

    @media (max-width: 768px) {
      margin: 7vw 0 0;
    }
  }
`
export const ListIconContainer = styled.div`
  width: 100vw;
  padding-top: 5vh;
  
  @media (max-width: 1024px) {
    width: 100%;
    margin: 3vh 0;
  }
`

export const ListIconlTitle = styled.h2`
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
