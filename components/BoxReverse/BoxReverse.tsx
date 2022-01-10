import React from 'react'
import { IBoxReverseProps } from './BoxReverse.interface'

import * as S from './BoxReverse.style'

const BoxReverse = ({
  title,
  image,
  content,
  flexDirection,
  hasPipe,
}: IBoxReverseProps) => {
  return (
    <S.Container>
      <S.ControlContainer flexDirection={flexDirection}>
        <S.Text>
          {hasPipe && <S.Pipe />}
          {title}
          {content}
        </S.Text>
        <S.ImageContainer>
          <S.Image src={image} alt="Image" />
        </S.ImageContainer>
      </S.ControlContainer>
    </S.Container>
  )
}

export { BoxReverse }
