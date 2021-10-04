import Head from 'next/head'
import React from 'react'
import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/solutions'

const Solutions = () => {
  return (
    <>
      <Head>
        <title>Integrações inteligentes para todos os setores | DevApi</title>
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              <span>Plataforma de integração</span> IPaaS & API Manager
            </h1>
            <p>
              Uma plataforma construída para escalar sua empresa sem limites.
              Integração de sistemas, software e aplicativos, automatização de
              processos e orquestração de dados com a melhor usabilidade através
              de APIs robustas e seguras.
            </p>
            <Button
              size="default"
              text="Quero escalabilidade!"
              type="default"
            />
          </S.HeroContent>
        </Hero>
      </S.Container>
    </>
  )
}

export default Solutions
