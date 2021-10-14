import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Cookie = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80vw;

  padding: 2vh 2vw;

  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 25px #5f47ff29;

  a {
    color: ${theme.colors.secondary};
  }

  p {
    max-width: 110ch;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    width: 95%;
    text-align: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 992px) {
    margin: 2vh 0 1vh 0;
  }
`

export const AcceptCookie = styled.div`
  position: fixed;
  display: flex;

  width: 100%;
  height: 60px;

  padding: 0 2vw;

  img {
    padding: 10px;
    cursor: pointer;
    background-color: #f6f6ff;
    border-radius: 5px;
    box-shadow: 0px 0px 0px 2px ${theme.colors.secondary};
    @media (max-width: 992px) {
      padding: 5px;
    }
  }

  @media (max-width: 992px) {
    height: 40px;
    padding: 0 5vw;
  }
`
