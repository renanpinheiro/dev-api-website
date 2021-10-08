import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import { IMultipleCheckboxProps } from './MultipleCheckbox.interface'
import * as S from './MultipleCheckbox.style'

export const MultipleCheckbox = ({
  text,
  name,
  isMultiple,
  setError,
}: IMultipleCheckboxProps) => {
  const [field, meta, helpers] = useField(name)
  const [isChecked, setIsChecked] = useState(false)

  const onClickCheck = () => {
    if (isMultiple) {
      setIsChecked(!isChecked)
    } else {
      helpers.setValue(text)
    }
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

  useEffect(() => {
    if (isMultiple) {
      const isChecked = !!field.value.find(value => value === text)
      setIsChecked(isChecked)
    }
  }, [])

  useEffect(() => {
    if (meta.touched) setError(meta.error)
  }, [meta.error])

  return (
    <S.Container onClick={onClickCheck} isChecked={isChecked}>
      <S.Label>{text}</S.Label>
      <S.Check isChecked={isChecked} />
    </S.Container>
  )
}
