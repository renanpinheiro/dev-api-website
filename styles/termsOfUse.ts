import styled from 'styled-components'

import { theme } from './theme'

export const Container = styled.div`
  width: 100%;
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
  padding: 10vh 10vw 10vh 10vw;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    padding: 10vh 8vw 10vh 8vw;
    font-size: 1rem;
  }

  > strong {
    font-weight: 900;
  }

  > p {
    margin-top: 2vh;
    line-height: 2.5vh;
    font-size: 1.125rem;

    > b {
      font-weight: 900;
    }

    > ul {
      padding: 1vw 4vh;

      li:before {
        content: '- ';
      }

      > li {
        @media (max-width: 768px) {
          padding-top: 1vh;
        }
      }
    }
  }
`
