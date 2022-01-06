import React from 'react'
import { ICompanyBenefitsProps } from './CompanyBenefits.interface'
import * as S from './CompanyBenefits.style'

const CompanyBenefits = ({ benefit }: ICompanyBenefitsProps) => {
  return (
    <S.ListContainer>
      <S.Image src="/icons/list-point.svg" alt="Point" />
      <S.Text>{benefit}</S.Text>
    </S.ListContainer>
  )
}

export { CompanyBenefits }
