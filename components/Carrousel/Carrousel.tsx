import React, { ReactNode } from 'react'

import { FlattenSimpleInterpolation } from 'styled-components'

import * as S from './style'
interface ICarrouselProps {
  items: ICarrousel[]
  title?: ReactNode
  dotsMargin?: string
  isCustomCarouselItem?: boolean
  carouselItemStyle?: FlattenSimpleInterpolation
}
interface ICarrousel {
  interval: number
  component: ReactNode
}

const Carrousel = ({
  items,
  title,
  dotsMargin,
  isCustomCarouselItem,
  carouselItemStyle,
}: ICarrouselProps) => {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.CarrouselContent dotsMargin={dotsMargin}>
        {items.map((item, index) => {
          return (
            <S.Item
              key={index}
              interval={item.interval}
              isCustomCarouselItem={isCustomCarouselItem}
              carouselItemStyle={carouselItemStyle}
            >
              {item.component}
            </S.Item>
          )
        })}
      </S.CarrouselContent>
    </S.Container>
  )
}

export { Carrousel }
