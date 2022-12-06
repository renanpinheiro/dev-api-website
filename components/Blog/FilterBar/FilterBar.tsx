import * as S from './FilterBar.style'
import React from 'react'

const FilterBar = ({ title = '', subtitle = '' }) => {
  return (
    <S.HeroContainer>
      <b>{title}</b>
      <h1>{subtitle}</h1>
    </S.HeroContainer>
  )
}

export { FilterBar }
