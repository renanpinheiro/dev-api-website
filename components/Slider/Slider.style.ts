import styled, { keyframes } from 'styled-components'

import { ISliderAnimation } from './Slider.interface'

const rotateRight = keyframes`
  100% {
    transform: rotateY(360deg);
  }
`
const rotateLeft = keyframes`
  100% {
    transform: rotateY(-360deg);
  }
`

export const Container = styled.div``

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  perspective-origin: top;
`

export const SliderAnimation = styled.div<ISliderAnimation>`
  position: relative;
  top: 10%;
  width: 100vw;
  height: 120px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform-origin: center center;
  animation: ${props => (props.rotate === 'right' ? rotateRight : rotateLeft)}
    350s infinite linear;
`
