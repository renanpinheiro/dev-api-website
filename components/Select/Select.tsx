import React, { useState } from 'react'
import { useField } from 'formik'
import { IOption, ISelectProps } from './Select.interface'
import * as S from './Select.style'

export const Select = ({ name, label, options }: ISelectProps) => {
  const [field, _, helpers] = useField(name)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const toggleSelect = (option: IOption) => {
    helpers.setValue(option.value)
    setValue(option.label)
    setIsOpen(false)
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input onClick={toggleOpen}>
        <S.Selection placeholder={'Selecione'} disabled value={value} />
        <S.Icon src={'/icons/arrow-down.svg'} onClick={toggleOpen} />
      </S.Input>
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
