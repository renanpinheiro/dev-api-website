import styled, { css, keyframes } from 'styled-components'
import { theme } from '../../styles/theme'
import { IHeroStyles, IHeroCircleStyle } from './Circle.interface'

const circleAnimation = (translate: string, position: number) => {
  const rotate = position + 360
  return keyframes`
       from {
         transform: rotate(${position}deg) translate(${translate}) rotate(-${position}deg);

       }
       to {
         transform: rotate(${rotate}deg) translate(${translate}) rotate(-${rotate}deg);
       }
     `
}

export const Container = styled.div`
  position: relative;
  z-index: 3;
  height: 80vh;

  max-height: 80vh;
  padding-top: 5vh;
  background-color: ${theme.colors.gray[100]};
  background-color: ${theme.colors.gray[100]};
`

export const BackgroundCircleContainer = styled.div`
  position: absolute;
  bottom: 38vh;
  left: 45vw;
  z-index: 3;
  background-color: white;
  transform: scale(1);

  @media (max-width: 1500px) {
    transform: scale(0.8);
  }

  @media (max-width: 1200px) {
    transform: scale(0.7);
  }

  @media (max-width: 900px) {
    bottom: 60vh;
    left: 30vw;

    transform: scale(0.5);
  }

  @media (max-width: 500px) {
    bottom: 60vh;
    left: 0vw;

    transform: scale(0.5);
  }
`

export const CircleContainer = styled.div<IHeroStyles>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.width};
  height: ${props => props.height};

  margin: auto;
  border: 2px solid ${theme.colors.gray[400]};
  border-radius: 50%;
`

export const Circle = styled.div<IHeroCircleStyle>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
  overflow: hidden;

  border-radius: 50%;
  animation: ${props =>
      circleAnimation(props.translatePosition, props.position)}
    ${props => props.timer} linear infinite;

  ${props =>
    props.type === 'default'
      ? css`
          width: 50px;
          height: 50px;

          padding: 4px;
          background-color: white;

          border: 2px solid ${theme.colors.gray[400]};

          img {
            height: 80%;
          }
        `
      : css`
          width: 20px;
          height: 20px;
          background-color: ${theme.colors.gray[400]};
          border: 2px solid ${theme.colors.gray[400]};
        `}
`

export const Logo = styled.img`
  height: 30%;
  margin-bottom: 15px;
`
