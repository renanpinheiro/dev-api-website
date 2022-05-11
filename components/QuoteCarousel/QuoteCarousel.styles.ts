import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5vw 0 3vw;
`

export const Pipe = styled.div`
  width: 7vw;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 8vw 0 8vw;
  margin-bottom: 5vh;
  text-align: center;

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > div {
    > div {
      @media screen and (max-width: 900px) {
        width: 88vw;
      }

      > div {
        height: 55vh;
        margin-top: 20px;
      }
    }
  }
`

export const QuoteStructure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 45vh;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 19px -8px gray;
`

export const Image = styled.div`
  width: 30%;
  margin-bottom: 1.5vh;
`
export const Quote = styled.p`
  margin-bottom: 1.5vh;
  font-size: 1.4rem;
  text-align: justify;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`
export const Company = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`
