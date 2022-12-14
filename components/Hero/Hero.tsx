import React from 'react'

import { IHeroProps } from './Hero.interface'
import * as S from './Hero.style'

const Hero = ({
  minHeight,
  maxHeight,
  children,
  backgroundUrl,
}: IHeroProps) => {
  return (
    <S.Container
      minHeight={minHeight}
      maxHeight={maxHeight}
      backgroundUrl={backgroundUrl}
    >
      {children}
    </S.Container>
  )
}

export { Hero }
