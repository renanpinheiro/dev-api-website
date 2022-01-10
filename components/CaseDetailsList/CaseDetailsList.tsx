import React from 'react'

import { ICaseDetail } from './CaseDetailsList.interface'
import * as S from './CaseDetailsList.style'

const CaseDetailsList = ({ title, detail, hasBorder }: ICaseDetail) => {
  return (
    <S.Container hasBorder={hasBorder}>
      <S.ContainerColuns>
        <S.TitleContainer>
          <S.Pipe />
          <S.TitleText>{title}</S.TitleText>
        </S.TitleContainer>
        <S.DetailContainer>
          <div dangerouslySetInnerHTML={{ __html: detail }} />
        </S.DetailContainer>
      </S.ContainerColuns>
    </S.Container>
  )
}
export { CaseDetailsList }
