import React from 'react'

import { Slider } from '../Slider'
import { IListIconCostumer } from './ListIconCostumer.interface'
import * as S from './ListIconCostumer.style'

export const ListIconCostumer = ({ title }: IListIconCostumer) => {
  return (
    <S.Container>
      <S.TitleContainer>{title}</S.TitleContainer>
      <S.ListImageContainer>
        <Slider />
      </S.ListImageContainer>
    </S.Container>
  )
}
