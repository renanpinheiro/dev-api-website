import Head from 'next/head'
import React from 'react'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/plans'
const Plans = () => {
  return (
    <>
      <Head>
        <title>DevApi – Planos personalizados para você!</title>
        <meta
          property="og:title"
          content="DevApi – Plataforma de Gerenciamento de APIs"
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
    </>
  )
}

export default Plans
