import React, { ReactNode } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as S from './MultiCarrousel.styles'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

interface IMultiCarrouselProps {
  items: IMultiCarrousel[]
  title: ReactNode
  interval: number
  itemsPerSlide?: number
  itemsPerScroll?: number
}

export interface IMultiCarrousel {
  url: string
}

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
        autoplay
        autoplaySpeed={interval}
        arrows={false}
        speed={2000}
        slidesToShow={itemsPerSlide}
        slidesToScroll={itemsPerScroll}
      >
        {items.map((item, index) => {
          return (
            <S.ImageContainer key={index}>
              <S.Image className="d-block w-100" src={item.url} />
            </S.ImageContainer>
          )
        })}
      </S.Carrousel>
    </S.Container>
  )
}

export default MultiCarrousel
