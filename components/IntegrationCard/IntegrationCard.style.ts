import styled, { keyframes } from 'styled-components'

import { theme } from '../../styles/theme'

const ballAnimation = keyframes`
  0% { transform: scale(0.5); }
  50% { transform: scale(1); }
  100% { transform: scale(0.5); }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  height: 14vh;
  padding: 7vh 2vw;
  margin-bottom: 20px;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 10px 25px #5f47ff29;
  opacity: 1;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 9vh;
  height: 9vh;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 10px 25px #5f47ff29;
  opacity: 1;
`
export const ConnectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ConnectorImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export const ContainerDevApiLogo = styled.div`
  position: absolute;
  left: 3.85vw;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 2vw;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 15px #5f47ff33;

  @media (max-width: 900px) {
    left: 16.9vw;
  }
`
export const LittleBallImage = styled.img`
  object-fit: cover;
  width: 100%;
`
export const DevApiLogoImage = styled.img`
  width: 21px;
`

export const BallContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 46%;
  height: 30px;

  > div:nth-child(1) {
    animation: 3s ${ballAnimation} infinite linear;
  }

  > div:nth-child(2) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 500ms;
  }

  > div:nth-child(3) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 1s;
  }

  > div:nth-child(4) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 1500ms;
  }

  > div:nth-child(5) {
    background-color: transparent;
  }

  > div:nth-child(6) {
    background-color: transparent;
  }

  > div:nth-child(7) {
    animation: 3s ${ballAnimation} infinite linear;
  }

  > div:nth-child(8) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 500ms;
  }

  > div:nth-child(9) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 1s;
  }

  > div:nth-child(10) {
    animation: 3s ${ballAnimation} infinite linear;
    animation-delay: 1500ms;
  }
`

export const Balls = styled.div`
  z-index: 9;
  min-width: 10px;
  height: 10px;
  background-color: ${theme.colors.secondary};
  border-radius: 50%;
  transform: scale(0.5);
`
