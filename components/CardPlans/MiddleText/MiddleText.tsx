import React from 'react'

import { IText } from './MiddleText.interface'
import * as S from './MiddleText.style'

const MiddleText = ({ text }: IText) => {
  const splitText = text.split(':')
  const [miniText, textSpan] = splitText

  return (
    <S.MiddleText>
      {miniText}: <b>{textSpan}</b>
    </S.MiddleText>
  )
}

export { MiddleText }
