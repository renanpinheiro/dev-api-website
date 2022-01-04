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
      width: 40%;
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
`

export const Title = styled.div`
  margin: 0 0 8vh;

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

export const Scheduling = styled.div`
  width: 100%;
`
