import React, { ReactNode } from 'react'
import * as S from './Hero.style'

export interface IHeroProps {
  minHeight?: number
  maxHeight?: number
  children: ReactNode
}

const Hero = ({ minHeight, maxHeight, children }: IHeroProps) => {
  return (
    <S.Container minHeight={minHeight} maxHeight={maxHeight}>
      {children}
    </S.Container>
  )
}

export { Hero }
