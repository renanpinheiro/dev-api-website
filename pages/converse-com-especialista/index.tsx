import React from 'react'
import { TrialForm } from '../../components/TrialForm/TrialForm'
import * as S from '../../styles/subscribe'

const Subscribe = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <TrialForm conversionIdentifier={'/converse-com-especialista'} />
      </S.FormContainer>
    </S.Container>
  )
}
export default Subscribe
