import React from 'react'
import { ISelectCollapsibleProps } from './SelectCollapsible.interface'
import * as S from './SelectCollapsible.style'
const SelectCollapsible = ({ question, answer }: ISelectCollapsibleProps) => {
  return (
    <>
      <S.Container>
        <S.SelectCollapsibleContainer>
          <S.Selectable>
            <span>{question}</span>
            <img src="/arrows/arrow-dropdown.svg" />
          </S.Selectable>
          <p>{answer}</p>
        </S.SelectCollapsibleContainer>
      </S.Container>
    </>
  )
}
export { SelectCollapsible }
