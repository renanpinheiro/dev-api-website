import styled from 'styled-components'

import { theme } from './theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 13vh 8vw 0 8vw;
  background-image: url('/images/connect-world.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: 100vh;
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
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  p {
    max-width: 120ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.7rem;
    line-height: 1.3;
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
    height: 100%;
    object-fit: contain;
  }
`
