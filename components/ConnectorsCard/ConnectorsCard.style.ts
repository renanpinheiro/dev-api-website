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
  box-shadow: 0px 10px 25px #5f47ff29;

  @media (max-width: 1400px) {
    height: 32vh;
    padding: 30px 20px;
  }

  @media (max-width: 996px) {
    width: 100%;
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
    box-shadow: 0px 10px 25px #5f47ff29;

    @media (max-width: 996px) {
      width: 20vw;
      height: 20vw;
    }
  }

  span {
    margin-top: 10px;
    font-size: 1rem;
  }

  @media (max-width: 996px) {
    width: 13vw;
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
  max-width: 40ch;
  text-align: center;
  display: flex;
`
