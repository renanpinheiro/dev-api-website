import React from 'react'

import { ICarrouselProps } from './ImageCarousel.interface'
import * as S from './ImageCarousel.style'

const ImageCarousel = ({ items, isControls }: ICarrouselProps) => {
  const next = (
    <span aria-hidden="true" className="carousel-control-next-icon">
      <S.ArrowRight />
    </span>
  )
  const prev = (
    <span aria-hidden="true" className="carousel-control-prev-icon">
      <S.ArrowLeft />
    </span>
  )
  return (
    <S.Container>
      <S.CarrouselContent controls={isControls} nextIcon={next} prevIcon={prev}>
        {items.map((item, index) => {
          return (
            <S.Item key={index} interval={item.interval}>
              {item.component}
            </S.Item>
          )
        })}
      </S.CarrouselContent>
    </S.Container>
  )
}

export { ImageCarousel }
