import React from 'react'
import { useField } from 'formik'
import { IInputTextProps } from './InputText.interface'
import * as S from './InputText.style'

export const InputText = ({ name, label, isRequired }: IInputTextProps) => {
  const [field, meta] = useField(name)
  return (
    <S.Container>
      <S.Label isRequired={isRequired}>{label}</S.Label>
      <S.Input hasError={!!meta.error} {...field} />
    </S.Container>
  )
}
