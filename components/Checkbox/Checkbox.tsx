import React, { useState } from 'react'
import { ICheckboxProps } from './Checkbox.interface'
import * as S from './Checkbox.style'

export const Checkbox = ({ text }: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const onClickCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <S.Container onClick={onClickCheck}>
      <S.Label>{text}</S.Label>
      <S.Check isChecked={isChecked} />
    </S.Container>
  )
}
