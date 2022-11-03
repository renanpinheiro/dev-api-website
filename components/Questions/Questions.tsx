import React from 'react'

import { Acordion } from '../Acordion'
import * as S from './Questions.style'

const Questions = ({ listQuestions }) => {
  return (
    <>
      <S.QuestionsContainer>
        <h2>
          Perguntas <b>frequentes</b>
        </h2>
      </S.QuestionsContainer>
      <Acordion list={listQuestions} />
    </>
  )
}
export { Questions }
