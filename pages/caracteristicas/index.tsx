import React from 'react'

import Head from 'next/head'

import { ButtonLink } from '../../components/ButtonLink'
import { Hero } from '../../components/Hero'
import { ProfessionalService } from '../../components/ProfessionalService'

import { integrations } from '../../constants/integrations'
import { validateOddNumber } from '../../utils/validateOddNumber'

import * as S from '../../styles/characteristics'

const Characteristics = () => {
  return (
    <>
      <Head>
        <title>DevApi | Características</title>
        <meta property="og:title" content="DevApi | Características" />
        <meta property="description" content="iPaas & API Manager." />
        <meta
          property="og:url"
          content="https://devapi.com.br/caracteristicas"
        />
        <link rel="canonical" href="https://devapi.com.br/caracteristicas" />
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              Plataforma de integração <b>iPaaS & API Manager</b>
            </h1>
            <p>
              Uma plataforma construída para escalar sua empresa sem limites.
              Integração de sistemas, software e aplicativos, automatização de
              processos e orquestração de dados com a melhor usabilidade através
              de APIs robustas e seguras.
            </p>
            <ButtonLink
              text="Quero escalabilidade!"
              href="/converse-com-especialista"
              target="_self"
              size="default"
              type="default"
            />
          </S.HeroContent>
        </Hero>

        <S.IntegrationContainer>
          {integrations.map((integration, index) => {
            const isOddNumber = validateOddNumber(index)
            return (
              <S.IntegrationContant
                position={isOddNumber ? 'row' : 'row-reverse'}
                key={index}
              >
                <S.TextContainer>
                  {integration.title}
                  <p>{integration.text}</p>
                </S.TextContainer>
                <S.GifContainer align={isOddNumber ? 'flex-end' : 'flex-start'}>
                  <img src={integration.urlGif} />
                </S.GifContainer>
              </S.IntegrationContant>
            )
          })}
        </S.IntegrationContainer>

        <ProfessionalService />
      </S.Container>
    </>
  )
}

export default Characteristics
