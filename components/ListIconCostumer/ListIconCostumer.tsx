import React from 'react'
import * as S from './ListIconCostumer.style'
import { IListIconCostumer } from './ListIconCostumer.interface'

export const ListIconCostumer = ({ items, title }: IListIconCostumer) => {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.ListImageContainer>
        {items.map((item, index) => {
          return (
            <S.ImageContainer>
              <S.Image src={item.url} alt={item.name} />
            </S.ImageContainer>
          )
        })}
      </S.ListImageContainer>
    </S.Container>
  )
}
