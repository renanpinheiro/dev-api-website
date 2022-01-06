import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 5vh 8vw 5vh 8vw;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    padding: 5vh 10vw 5vh 8vh;
    justify-content: center;
  }
  @media (max-width: 415px) {
    padding: 5vh 10vw 5vh 8vh;
    justify-content: center;
  }
`
export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-top: 2vh;
  border-radius: 5px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 25px #5f47ff29;
  vertical-align: bottom;

  @media (max-width: 600px) {
    margin-left: 2vw;
    width: 35vw;
  }
  @media (max-width: 415px) {
    width: 55vw;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2vh 2vw 2vh 2vw;
  font-size: 2vh;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 1.5vh;
  }
`
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.5;
  padding: 0vh 2vw 3vh 2vw;
  font-size: 1.9vh;

  @media (max-width: 1024px) {
    font-size: 1vh;
  }
  @media (max-width: 600px) {
    font-size: 1.4vh;
  }
  @media (max-width: 376px) {
    font-size: 1.3vh;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 50%;
  padding: 1vh 2vw 5vh 2vw;

  @media (max-width: 1024px) {
    padding: 0 2vw 3vh 2vw;
  }
  @media (max-width: 600px) {
    padding: 1vh 2vw 5vh 2vw;
  }
`
export const ButtonCard = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${theme.colors.white};
  background-color: ${theme.colors.green[100]};
  border: 1px solid ${theme.colors.green[100]};
  padding: 1.5vh 1vw;
  height: 5vh;
  font-size: 2vh;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: max-content;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: ${theme.colors.green[200]};
    border: 1px solid ${theme.colors.green[200]};
  }

  @media (max-width: 1024px) {
    font-size: 0.9vh;
    font-weight: 700;
    padding: 0.5vh 1vw;
    height: 2vh;
  }
  @media (max-width: 600px) {
    font-size: 1.3vh;
    padding: 0.7vh 1vw;
    height: 3vh;
  }
  @media (max-width: 415px) {
    font-size: 1.3vh;
    padding: 0.5vh 1vw;
    height: 3vh;
  }
`
