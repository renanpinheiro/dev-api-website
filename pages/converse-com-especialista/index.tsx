import React from 'react'

import Head from 'next/head'

import { TrialForm } from '../../components/TrialForm/TrialForm'

import * as S from '../../styles/subscribe'

const Subscribe = () => {
  return (
    <>
      <Head>
        <title>DevApi | Converse com um especialista</title>
        <link
          rel="canonical"
          href="https://devapi.com.br/fale-com-especialista"
        />
      </Head>

      <S.Container>
        <S.FormContainer>
          <TrialForm conversionIdentifier={'converse-com-especialista'} />
        </S.FormContainer>
      </S.Container>
    </>
  )
}
export default Subscribe
