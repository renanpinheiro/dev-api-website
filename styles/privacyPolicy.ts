import styled from 'styled-components'
import { theme } from './theme'

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

export const Content = styled.div`
  padding: 10vh 19vw 10vh 19vw;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    padding: 10vh 8vw 10vh 8vw;
    font-size: 1rem;
  }

  > ul {
    > li {
      margin-left: 1.5vw;
      list-style: disc;
      > p {
        margin-top: 2vh;
        line-height: 2.5vh;

        > b {
          font-weight: 900;
        }
      }
    }

    > strong {
      font-weight: 900;
    }

    > p {
      margin-top: 2vh;
      margin-left: 1.5vw;
      line-height: 2.5vh;

      > b {
        font-weight: 900;
      }

      > ol {
        padding: 1vh 1vw;

        > li {
          padding-bottom: 1vh;
          list-style: upper-roman;
          list-style-position: inside;

          ul {
            padding: 1vh 1vw;

            > li {
              padding-bottom: 0.5vh;
            }
          }

          > b {
            font-weight: bold;
          }
        }
      }

      > ul {
        padding-left: 2vh;
        list-style: disc;
        list-style-position: inside;

        > li {
          padding-bottom: 0.5vh;
        }
      }
    }
  }
`
