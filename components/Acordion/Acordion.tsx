import React from 'react'

import { SelectCollapsible } from './SelectCollapsible'

import * as S from './Acrodion.style'

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
