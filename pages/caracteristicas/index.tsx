import Head from 'next/head'
import React from 'react'
import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
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
        <S.ProfessionalServiceContainer>
          <S.ImageContainer>
            <img
              src="/logo/professional-service.svg"
              alt="professional-service"
            />
          </S.ImageContainer>
          <S.ProfessionalServiceText>
            <S.Pipe />
            <h2>
              <span>Professional Services,</span> um time de especialistas
              dedicado ao seu negócio
            </h2>
            <p>
              A DevApi é composta por profissionais especializados no
              desenvolvimento de integrações e APIs, de forma a maximizar os
              resultados de nossos parceiros e clientes.
            </p>
            <S.CheckContainer>
              <img src="/icons/circle-check.svg" alt="check" />
              <p>
                Uma equipe de alta performance ao serviço do sucesso da sua
                empresa!
              </p>
            </S.CheckContainer>
            <Button size="default" text="Quero um orçamento!" type="default" />
          </S.ProfessionalServiceText>
        </S.ProfessionalServiceContainer>
      </S.Container>
    </>
  )
}

export default Characteristics
