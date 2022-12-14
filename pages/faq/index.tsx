import React, { useRef, useEffect } from 'react'

import Head from 'next/head'

import { Questions } from '../../components/Questions'
import { Button } from '../../components/Button'
import { ButtonLink } from '../../components/ButtonLink'
import { commonQuestions } from '../../constants/commonQuestions'
import * as S from '../../styles/faq'
import { SimplifiedHero } from '../../components/SimplifiedHero'

const Faq = () => {
  const listQuestions = commonQuestions

  return (
    <>
      <Head>
        <title>DevApi | F.A.Q</title>
        <meta property="og:url" content="https://www.devapi.com.br/faq" />
        <link rel="canonical" href="https://www.devapi.com.br/faq" />
      </Head>

      <SimplifiedHero
        title={'FAQ'}
        subtitle={'Perguntas Frequentes'}
      ></SimplifiedHero>

      <S.Content>
        <S.Wrapper>
          <Questions listQuestions={listQuestions} showTitle={false} />
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export default Faq
