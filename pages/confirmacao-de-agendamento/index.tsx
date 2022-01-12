import React from 'react'

import Head from 'next/head'

import * as S from '../../styles/trialSuccess'

const TrialSuccess = () => {
  return (
    <>
      <Head>
        <title>DevApi | Confirmação de Agendamento</title>
        <meta
          property="og:title"
          content="DevApi | Confirmação de Agendamento"
          key="title"
        />
        <meta name="description" content="Confirmação de Agendamento" />
        <meta
          property="og:description"
          content="Confirmação de Agendamento"
          key="description"
        />
        <meta property="og:url" content="https://www.devapi.com.br/cases" />
        <link rel="canonical" href="https://www.devapi.com.br/cases" />
      </Head>

      <S.Container>
        <S.InfoContainer>
          <S.Pipe />
          <h2>
            Estamos <span>integrados!</span>
          </h2>
          <p>
            Agendamento confirmado. Iremos enviar um email para você com os
            dados de acesso à reunião. Conte com a gente!
          </p>
        </S.InfoContainer>
      </S.Container>
    </>
  )
}

export default TrialSuccess
