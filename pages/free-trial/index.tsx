import React from 'react'

import Head from 'next/head'

import { TrialForm } from '../../components/TrialForm/TrialForm'

import * as S from '../../styles/freeTrial'

const FreeTrial = () => {
  return (
    <>
      <Head>
        <title>DevApi | Free trial</title>
        <link rel="canonical" href="https://devapi.com.br/free-trial" />
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
