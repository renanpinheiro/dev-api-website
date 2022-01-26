import React from 'react'

import { ICompanyBenefitsProps } from './CompanyBenefits.interface'
import * as S from './CompanyBenefits.style'

const CompanyBenefits = ({ description }: ICompanyBenefitsProps) => {
  return (
    <S.ListContainer>
      <S.Point />
      <S.Text>{description}</S.Text>
    </S.ListContainer>
  )
}

export { CompanyBenefits }
