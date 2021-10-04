import React from 'react'
import * as S from './Hero.style'

import { IHeroProps } from './Hero.interface'

const Hero = ({ minHeight, maxHeight, children }: IHeroProps) => {
  return (
    <S.Container minHeight={minHeight} maxHeight={maxHeight}>
      {children}
    </S.Container>
  )
}

export { Hero }
