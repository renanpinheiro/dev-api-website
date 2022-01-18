import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  height: 28vh;
  padding: 35px 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 25px #5f47ff29;

  @media (max-width: 1400px) {
    padding: 30px 20px;
  }

  @media (max-width: 996px) {
    width: 100%;
    height: auto;
    padding: 25px 20px;
    margin: 0;
    margin-top: 10px;
  }
`

export const ConnectorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Connector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5vw;
  margin: 10px;

  > img {
    width: 6vw;
    height: 6vw;
    border-radius: 10px;
    box-shadow: 0 10px 25px #5f47ff29;

    @media (max-width: 996px) {
      width: 20vw;
      height: 20vw;
    }
  }

  span {
    margin-top: 10px;
    font-size: 0.875rem;

    @media (min-width: 1600px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    width: 13vw;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    width: 20vw;
  }
`

export const Plus = styled.span`
  margin: 10px 0;
  margin-bottom: 4vh;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.secondary};

  @media (max-width: 996px) {
    margin-bottom: 3vh;
  }
`

export const Text = styled.div`
  display: flex;
  max-width: 40ch;
  text-align: center;

  > p {
    line-height: 1.3;
  }
`
