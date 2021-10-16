import React from 'react'

import Head from 'next/head'

import * as S from '../../styles/trialSuccess'

const TrialSuccess = () => {
  return (
    <S.Container>
      <S.InfoContainer>
        <S.Pipe />
        <h2>
          Formulário enviado com <span>sucesso!</span>
        </h2>
        <p>Entraremos em contato o mais brevemente possível.</p>
      </S.InfoContainer>
    </S.Container>
  )
}

export default TrialSuccess
