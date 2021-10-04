import React from 'react'
import * as S from './Hero.style'

const Hero = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export { Hero }
