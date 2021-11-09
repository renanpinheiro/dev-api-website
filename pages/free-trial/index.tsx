import React from 'react'

import Head from 'next/head'

import { TrialForm } from '../../components/TrialForm/TrialForm'

import * as S from '../../styles/freeTrial'

const FreeTrial = () => {
  return (
    <>
      <Head>
        <title>DevApi | Crie sua conta grátis</title>
        <meta
          property="og:title"
          content="DevApi | Crie sua conta grátis"
          key="title"
        />
        <meta
          property="og:url"
          content="https://www.devapi.com.br/free-trial"
        />
        <meta property="description" content="Crie sua conta grátis" />
        <link rel="canonical" href="https://www.devapi.com.br/free-trial" />
      </Head>

      <S.Container>
        <S.FormContainer>
          <TrialForm conversionIdentifier={'free-trial'} />
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default FreeTrial
