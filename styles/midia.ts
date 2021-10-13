import styled from 'styled-components'
import { theme } from './theme'

export const HeroContainer = styled.div`
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
    width: 42%;
    margin: 3vh 0;
    font-size: 1.375rem;
    line-height: 3vh;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
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
  padding: 10vh 8vw;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 3vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 4vh;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vh 0;
  text-align: center;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: rgb(95 71 255 / 21%) 0px 6px 28px;

  @media (max-width: 768px) {
    padding: 5vh 3vh 0;
  }

  > h3 {
    padding: 3vh 0;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 3vh;

    @media (max-width: 1366px) {
      font-size: 1.25rem;
    }
  }

  > img {
    width: 8vw;

    @media (max-width: 768px) {
      width: 40%;
    }
  }
`

export const KnowMoreLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 70%;
  height: 100%;
  padding-bottom: 2.5vh;

  > a {
    padding: 0.7vw 0;
    margin-bottom: 1vh;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.white};
    text-decoration: none;
    background-color: ${theme.colors.green[100]};
    border-radius: 5px;
    transition: all 1s;

    @media (max-width: 1366px) {
      padding: 1.5vh 0;
      font-size: 1.25rem;
    }

    &:hover {
      background-color: ${theme.colors.green[200]};
    }
  }
`
