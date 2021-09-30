import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/plans'
import { cardPlanItems } from '../../constants/cardPlanItems'
import { ICardPlanItems } from '../../components/CardPlans/CardPlans.interface'
import { CardPlans } from '../../components/CardPlans'
const Plans = () => {
  const cards: ICardPlanItems[] = cardPlanItems

  return (
    <>
      <Head>
        <title>DevApi – Planos personalizados para você!</title>
        <meta
          property="og:title"
          content="Planos personalizados para você | DevApi"
          key="title"
        />
        <meta
          property="og:description"
          content="cDevApi é o Integrador de Sistemas (iPaaS), Seguro e Confiável, Integre Seus Sistemas de Gestão, Logística, Marketing e Ecommerce Agora. Acesse e Confira!"
          key="description"
        />
        <link rel="canonical" href="https://devapi.com.br/plano" />
      </Head>
      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <span> É a hora de </span>acelerar a transformação
          </h1>
          <p>
            Com a DevApi, conectar sistemas, processos, bancos de dados e
            arquivos é muito mais fácil do que você imagina. Conheça os nossos
            planos!
          </p>
        </S.HeroContent>
      </Hero>
      <S.Container>
        <CardPlans cards={cards} />
      </S.Container>
    </>
  )
}

export default Plans
