import React from 'react'
import { IText } from './MiddleText.interface'
import * as S from './MiddleText.style'
const MiddleText = ({ text }: IText) => {
  const splitText = text.split(':')
  const [miniText, textSpan] = splitText
  console.log(miniText)
  return (
    <>
      <S.MiddleText>
        {miniText}:<span>{textSpan}</span>
      </S.MiddleText>
    </>
  )
}

export { MiddleText }
