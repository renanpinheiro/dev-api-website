import React from 'react'

import { ICaseDetail } from './CaseDetailsList.interface'
import * as S from './CaseDetailsList.style'

const CaseDetailsList = ({ title, detail, border }: ICaseDetail) => {
  return (
    <S.Container border={border}>
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
