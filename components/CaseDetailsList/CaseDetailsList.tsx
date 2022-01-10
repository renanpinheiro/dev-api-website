import React from 'react'

import { ICaseDetail } from './CaseDetailsList.interface'
import * as S from './CaseDetailsList.style'

const CaseDetailsList = ({ title, detail, border }: ICaseDetail) => {
  return (
    <S.container border={border}>
      <S.containerColuns>
        <S.TitleContainer>
          <S.Pipe />
          <S.TitleText>{title}</S.TitleText>
        </S.TitleContainer>
        <S.DetailContainer>
          <div dangerouslySetInnerHTML={{ __html: detail }} />
        </S.DetailContainer>
      </S.containerColuns>
    </S.container>
  )
}
export { CaseDetailsList }
