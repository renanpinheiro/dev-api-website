import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const NewsletterFooterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 6rem 12rem;
  text-align: center;
  background: transparent url('/backgrounds/Apresentação-DevApi.png') 0% 0%
    round padding-box;

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

  @media (min-width: 900px) {
    text-align: left;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
`

export const TextContainer = styled.div`
  margin-bottom: 2vh;
  > h2 {
    width: 55%;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      text-align: center;
    }
    > b {
      font-weight: bold;
    }
  }
`
