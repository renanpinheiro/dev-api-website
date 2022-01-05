import React from 'react'

import { IStepsProps } from './Steps.interface'
import * as S from './Steps.style'

export const Steps = ({ steps }: IStepsProps) => {
  return (
    <S.Container>
      {steps.map((step, idx) => (
        <S.StepContainer key={idx}>
          <S.IconContainer isPass={step.isPass}>{step.icon}</S.IconContainer>
          <S.StepTextContainer isLastItem={idx === steps.length - 1}>
            <S.StepText isPass={step.isPass}>{step.label}</S.StepText>
          </S.StepTextContainer>
        </S.StepContainer>
      ))}
    </S.Container>
  )
}
