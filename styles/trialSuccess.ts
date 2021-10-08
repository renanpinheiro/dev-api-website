import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 13vh 8vw 0 8vw;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10vh 0;

  h2 {
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }
  }

  p {
    max-width: 120ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
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

export const ImgContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`
