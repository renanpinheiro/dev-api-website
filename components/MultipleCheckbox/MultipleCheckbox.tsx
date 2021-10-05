import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import { IMultipleCheckboxProps } from './MultipleCheckbox.interface'
import * as S from './MultipleCheckbox.style'

export const MultipleCheckbox = ({
  text,
  name,
  isMultiple,
}: IMultipleCheckboxProps) => {
  const [field, _, helpers] = useField(name)

  const [isChecked, setIsChecked] = useState(false)

  const onClickCheck = () => {
    !isMultiple && helpers.setValue(text)
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (isMultiple) {
      if (isChecked) {
        helpers.setValue([...field.value, text])
      } else {
        const newValue = field.value.filter(value => value !== text)
        helpers.setValue(newValue)
      }
    }
  }, [isChecked])

  useEffect(() => {
    if (!isMultiple) {
      if (field.value === text) {
        setIsChecked(true)
      } else {
        setIsChecked(false)
      }
    }
  }, [field.value])

  return (
    <S.Container onClick={onClickCheck} isChecked={isChecked}>
      <S.Label>{text}</S.Label>
      <S.Check isChecked={isChecked} />
    </S.Container>
  )
}
