import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IMultiCarrouselProps } from './MultiCarrousel.interface'
import * as S from './MultiCarrousel.styles'

const MultiCarrousel = ({
  items,
  title,
  interval,
  itemsPerSlide = 10,
  itemsPerScroll = 1,
}: IMultiCarrouselProps) => {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.Carrousel
        dots={false}
        infinite
        autoplaySpeed={interval}
        arrows={false}
        speed={2000}
        slidesToShow={itemsPerSlide}
        slidesToScroll={itemsPerScroll}
      >
        {items.map((item, index) => {
          return (
            <S.ImageContainer key={index}>
              <img src={item.url} alt={item.name} />
            </S.ImageContainer>
          )
        })}
      </S.Carrousel>
    </S.Container>
  )
}

export default MultiCarrousel
