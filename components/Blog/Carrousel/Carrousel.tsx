import React from 'react'

import { ICarrouselProps } from './Carrousel.interface'
import * as S from './Carrousel.style'

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
