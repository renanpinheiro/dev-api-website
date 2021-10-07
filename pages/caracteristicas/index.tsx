import Head from 'next/head'
import React from 'react'
import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import { ProfessionalService } from '../../components/ProfessionalService'
import { integrations } from '../../constants/integrations'
import * as S from '../../styles/characteristics'
import { validateOddNumber } from '../../utils/validateOddNumber'

const Characteristics = () => {
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
              <span>Plataforma de integração</span> iPaaS & API Manager
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
