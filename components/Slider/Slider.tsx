import React from 'react'

import styled from 'styled-components'

import { costumers } from '../../constants/custumers'
import * as S from './Slider.style'

interface ISliderStyle {
  rotate: number
  color: string
}

const Side = styled.div<ISliderStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 150px;
  width: 158px;

  background-color: ${props => props.color};
  transform: ${props => `rotateY(${props.rotate}deg)`} translateZ(3000px);
  overflow: hidden;

  padding: 1vh;
`

const Slider = () => {
  const firstLine = []
  const secondLine = []

  const rotate = 360 / 120

  const customersLength = costumers.length

  const costumersHalfLength = customersLength / 2

  const halfStart = costumers.slice(0, costumersHalfLength)
  const halfEnd = costumers.slice(costumersHalfLength, customersLength)

  firstLine.push(...firstLine, halfStart)
  secondLine.push(...secondLine, halfEnd)

  const firstCount = Number((120 / halfStart.length).toFixed(0))
  const secondCount = Number((120 / halfEnd.length).toFixed(0))

  for (let index = 0; index < firstCount; index++) {
    firstLine.push(...halfStart)
  }

  for (let index = 0; index < secondCount; index++) {
    secondLine.push(...halfEnd)
  }

  return (
    <S.Container>
      <S.Slider>
        <S.SliderAnimation rotate="right">
          {firstLine.map((item, index) => {
            return (
              <Side key={index} color="white" rotate={rotate * (index + 1)}>
                <img src={item.url}></img>
              </Side>
            )
          })}
        </S.SliderAnimation>
      </S.Slider>
      <S.Slider>
        <S.SliderAnimation rotate="left">
          {secondLine.map((item, index) => {
            return (
              <Side key={index} color="white" rotate={rotate * (index + 1)}>
                <img src={item.url}></img>
              </Side>
            )
          })}
        </S.SliderAnimation>
      </S.Slider>
    </S.Container>
  )
}

export { Slider }
