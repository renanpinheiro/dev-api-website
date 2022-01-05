import React from 'react'

import { IHeroProps } from './Hero.interface'
import * as S from './Hero.style'

const Hero = ({ minHeight, maxHeight, children }: IHeroProps) => {
  return (
    <S.Container minHeight={minHeight} maxHeight={maxHeight}>
      {children}
    </S.Container>
  )
}

export { Hero }
