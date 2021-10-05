import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import { ICheckboxProps } from './Checkbox.interface'
import * as S from './Checkbox.style'

export const Checkbox = ({ label, name }: ICheckboxProps) => {
  const [field, _, helpers] = useField(name)

  const [isChecked, setIsChecked] = useState<boolean>(field.value)

  const onClickCheck = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (isChecked) {
      helpers.setValue(true)
    } else {
      helpers.setValue(false)
    }
  }, [isChecked])

  return (
    <S.Container>
      <S.Check isChecked={isChecked} onClick={onClickCheck} />
      <S.Label onClick={onClickCheck}>{label}</S.Label>
    </S.Container>
  )
}
