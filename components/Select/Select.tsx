import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { IOption, ISelectProps } from './Select.interface'
import * as S from './Select.style'

export const Select = ({ name, label, options, isRequered }: ISelectProps) => {
  const [field, meta, helpers] = useField(name)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (field.value) {
      const selectedOption = options.find(
        option => option.value === field.value,
      )
      setValue(selectedOption.label)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const toggleSelect = (option: IOption) => {
    helpers.setValue(option.value)
    setValue(option.label)
    setIsOpen(false)
  }

  useEffect(() => {
    if (meta.touched) setIsOpen(false)
  }, [meta.touched])

  return (
    <S.Container>
      <S.Label isRequired={isRequered}>{label}</S.Label>
      <S.Input onClick={toggleOpen}>
        <S.Selection placeholder={'Selecione'} disabled value={value} />
        <S.Icon src={'/icons/arrow-down.svg'} onClick={toggleOpen} />
      </S.Input>
      <S.ErrorMessage>{meta.error && meta.error}</S.ErrorMessage>

      <S.OptionsContainer isOpen={isOpen}>
        {options.map((option, idx) => {
          return (
            <S.Option key={idx} onClick={() => toggleSelect(option)}>
              {option.label}
            </S.Option>
          )
        })}
      </S.OptionsContainer>
    </S.Container>
  )
}
