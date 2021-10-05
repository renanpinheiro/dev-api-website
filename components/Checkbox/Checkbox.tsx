import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import { ICheckboxProps } from './Checkbox.interface'
import * as S from './Checkbox.style'

export const Checkbox = ({ text, name }: ICheckboxProps) => {
  const [field, _, helpers] = useField(name)

  const [isChecked, setIsChecked] = useState(false)

  const onClickCheck = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (isChecked) {
      helpers.setValue([...field.value, text])
    } else {
      const newValue = field.value.filter(value => value !== text)
      helpers.setValue(newValue)
    }
  }, [isChecked])

  return (
    <S.Container onClick={onClickCheck} isChecked={isChecked}>
      <S.Label>{text}</S.Label>
      <S.Check isChecked={isChecked} />
    </S.Container>
  )
}
