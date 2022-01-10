import React from 'react'

import { IListIconCostumer } from './ListIconCostumer.interface'
import * as S from './ListIconCostumer.style'

export const ListIconCostumer = ({ items, title }: IListIconCostumer) => {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.ListImageContainer>
        {items.map((item, index) => {
          return (
            <S.ImageContainer key={index}>
              <S.Image src={item.url} alt={item.name} />
            </S.ImageContainer>
          )
        })}
      </S.ListImageContainer>
    </S.Container>
  )
}
