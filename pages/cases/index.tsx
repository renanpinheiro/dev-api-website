import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import { Button } from '../../components/Button'
import { CardCase } from '../../components/CardCase'
import { Hero } from '../../components/Hero'
import api from '../../services/api'
import * as S from '../../styles/cases'

const Cases = () => {
  const [caseState, setCaseState] = useState([])
  const findCases = async () => {
    const { data } = await api.get('/cases')
    if (data.length > 0) {
      setCaseState(data)
    }
  }

  useEffect(() => {
    findCases()
  }, [])

  return (
    <>
      <Head>
        <title>DevApi | Planos</title>
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
            <Button type="default" text="Quero ser um case!" size="small" />
          </S.ButtonContainer>
        </S.HistorySuccessContainer>
      </S.Container>
    </>
  )
}
export default Cases
