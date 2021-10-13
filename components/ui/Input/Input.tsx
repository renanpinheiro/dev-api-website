import React, { useRef } from 'react'

import { useField } from 'formik'

import { IInputProps } from './Input.interface'

import * as S from './Input.style'

type InputProps = JSX.IntrinsicElements['input'] & IInputProps<false>
type TextAreaProps = JSX.IntrinsicElements['textarea'] & IInputProps<true>

const Input: React.FC<InputProps | TextAreaProps> = ({
  label,
  name,
  multiline,
  mask,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const [field, meta] = useField({ name })
  const hasError = meta.error && meta.touched

  const handleMaskChange = e => {
    const { regex, replace } = mask
    const value = e.target.value.replace(regex, replace)

    field.onChange({ target: { name: field.name, value: value } })
  }

  const props = {
    ...rest,
    ...field,
    ref: inputRef,
    id: field.name,
    'aria-label': field.name,
  } as InputProps | TextAreaProps

  const getInput = () => {
    if (multiline) return <textarea {...(props as TextAreaProps)} />
    if (mask) {
      return <input {...(props as InputProps)} onChange={handleMaskChange} />
    }
    return <input {...(props as InputProps)} />
  }

  return (
    <S.Container isErrored={hasError}>
      {label && <label htmlFor={field.value}>{label}</label>}

      {getInput()}

      {hasError && <span>{meta.error}</span>}
    </S.Container>
  )
}

export { Input }
