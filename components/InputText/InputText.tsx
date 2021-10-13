import React, { useRef } from 'react'
import { useField } from 'formik'
import { IInputTextProps } from './InputText.interface'
import * as S from './InputText.style'
import InputMask from 'react-input-mask'

export const InputText = ({
  name,
  label,
  isRequired,
  placeholder,
  mask,
  type,
}: IInputTextProps) => {
  const [field, meta] = useField(name)

  if (type === 'textarea') {
    return (
      <S.Container>
        <S.Textarea
          rows={5}
          hasError={!!meta.error}
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
            hasError={!!meta.error}
            {...field}
            placeholder={placeholder}
          >
            {inputProps => <S.Input {...inputProps} />}
          </InputMask>
        ) : (
          <S.Input
            hasError={!!meta.error}
            {...field}
            placeholder={placeholder}
          />
        )}
        <S.ErrorMessage>{meta.touched && meta.error}</S.ErrorMessage>
      </S.Container>
    )
  }
}
