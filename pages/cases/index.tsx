import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Router from 'next/router'

import { Button } from '../../components/Button'
import { CardCase } from '../../components/CardCase'
import { Hero } from '../../components/Hero'
import { findCases } from '../../providers/cases/find'
import * as S from '../../styles/cases'
const Cases = () => {
  const [caseState, setCaseState] = useState([])

  useEffect(() => {
    handleFindCases()
  }, [])

  const handleFindCases = async () => {
    const { data } = await findCases()
    if (data.length > 0) {
      setCaseState(data)
    }
  }

  const handleRouterTalk = () => {
    Router.push('/converse-com-especialista')
  }

  return (
    <>
      <Head>
        <title>DevApi | Cases</title>
        <meta property="og:title" content="DevApi | Cases" key="title" />
        <meta
          name="description"
          content="Conheça algumas das nossas histórias de sucesso"
        />
        <meta
          property="og:description"
          content="Conheça algumas das nossas histórias de sucesso"
          key="description"
        />
        <meta property="og:url" content="https://www.devapi.com.br/cases" />
        <link rel="canonical" href="https://www.devapi.com.br/cases" />
      </Head>
      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            História de <b>Sucesso</b>
          </h1>
          <p>Conheça algumas das nossas histórias de sucesso</p>
        </S.HeroContent>
      </Hero>
      <S.Container>
        <CardCase cases={caseState} />

        <S.HistorySuccessContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.HistorySuccessTitle>
            Venha construir sua <span>história de sucesso</span>
          </S.HistorySuccessTitle>
          <S.ButtonContainer>
            <Button
              type="default"
              text="Quero ser um case!"
              size="small"
              onClick={() => handleRouterTalk()}
            />
          </S.ButtonContainer>
        </S.HistorySuccessContainer>
      </S.Container>
    </>
  )
}
export default Cases
