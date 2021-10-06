import React, { useRef } from 'react'
import * as S from './Steps.style'
import { IStepsProps } from './Steps.interface'

export const Steps = ({ steps }: IStepsProps) => {
  return (
    <S.Container>
      {steps.map((step, idx) => (
        <S.StepContainer>
          <S.IconContainer isPass={step.isPass}>{step.icon}</S.IconContainer>
          <S.StepTextContainer isLastItem={idx === steps.length - 1}>
            <S.StepText isPass={step.isPass}>{step.label}</S.StepText>
          </S.StepTextContainer>
        </S.StepContainer>
      ))}
    </S.Container>
  )
}
