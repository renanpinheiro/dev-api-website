import * as S from './SimplifiedHero.style'
import React from 'react'

const SimplifiedHero = ({ title = '', subtitle = '' }) => {
  return (
    <S.HeroContainer>
      <b>{title}</b>
      <h1>{subtitle}</h1>
    </S.HeroContainer>
  )
}

export { SimplifiedHero }
