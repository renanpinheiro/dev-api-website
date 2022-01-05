import React from 'react'

import * as S from './Acrodion.style'
import { SelectCollapsible } from './SelectCollapsible'

const Acordion = ({ list }) => {
  return (
    <S.AcordionContainer>
      {list.map((list, index) => {
        return (
          <SelectCollapsible
            key={index}
            answer={list.answers}
            question={list.questions}
          />
        )
      })}
    </S.AcordionContainer>
  )
}
export { Acordion }
