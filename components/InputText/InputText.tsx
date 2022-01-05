import React from 'react'
import InputMask from 'react-input-mask'

import { IInputTextProps } from './InputText.interface'
import * as S from './InputText.style'

import { useField } from 'formik'

export const InputText = ({
  name,
  label,
  isRequired,
  placeholder,
  mask,
  type,
}: IInputTextProps) => {
  const [field, meta] = useField(name)

  const hasError = meta.error && meta.touched

  if (type === 'textarea') {
    return (
      <S.Container>
        <S.Label isRequired={isRequired}>{label}</S.Label>
        <S.Textarea
          rows={5}
          hasError={hasError}
          {...field}
          placeholder={placeholder}
        />
        <S.ErrorMessage>{meta.touched && meta.error}</S.ErrorMessage>
      </S.Container>
    )
  } else {
    return (
      <S.Container>
        <S.Label isRequired={isRequired}>{label}</S.Label>
        {mask ? (
          <InputMask
            mask={mask}
            hasError={hasError}
            {...field}
            placeholder={placeholder}
          >
            {inputProps => <S.Input {...inputProps} />}
          </InputMask>
        ) : (
          <S.Input hasError={hasError} {...field} placeholder={placeholder} />
        )}
        <S.ErrorMessage>{meta.touched && meta.error}</S.ErrorMessage>
      </S.Container>
    )
  }
}
