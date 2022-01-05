import React from 'react'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { ICarrouselProps } from './Carrousel.interface'
import * as S from './carrousel.style'

const Carrousel = ({ items, title }: ICarrouselProps) => {
  const { width } = useWindowDimensions()

  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.CarrouselContent>
        {items[width >= 768 ? 3 : 2].map((item, index) => {
          return (
            <S.Item key={index} interval={2000}>
              <S.ItemContainer>
                {Object.entries(item).map(([key, value]) => {
                  return (
                    <S.ImageContainer>
                      <img key={key} src={value} alt={`image-${key + 1}`} />
                    </S.ImageContainer>
                  )
                })}
              </S.ItemContainer>
            </S.Item>
          )
        })}
      </S.CarrouselContent>
    </S.Container>
  )
}

export { Carrousel }
