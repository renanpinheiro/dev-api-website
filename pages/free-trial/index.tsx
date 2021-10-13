import React from 'react'
import { TrialForm } from '../../components/TrialForm/TrialForm'
import * as S from '../../styles/freeTrial'

const FreeTrial = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <TrialForm conversionIdentifier={'free-trial'} />
      </S.FormContainer>
    </S.Container>
  )
}

export default FreeTrial
