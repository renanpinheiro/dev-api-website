import React from 'react'

import { Acordion } from '../Acordion'
import * as S from './Questions.style'

const Questions = ({ listQuestions, showTitle }) => {
  return (
    <>
      <S.QuestionsContainer>
        {showTitle && (
          <h2>
            Perguntas <b>Frequentes</b>
          </h2>
        )}
      </S.QuestionsContainer>
      <Acordion list={listQuestions} />
    </>
  )
}
export { Questions }
