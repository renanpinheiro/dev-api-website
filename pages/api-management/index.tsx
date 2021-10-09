import React from 'react'

import Head from 'next/head'

import { ButtonLink } from '../../components/ButtonLink'
import { Hero } from '../../components/Hero'
import { apis } from '../../constants/apis'

import { validateOddNumber } from '../../utils/validateOddNumber'

import * as S from '../../styles/apiManagement'

const ApiManagement = () => {
  return (
    <>
      <Head>
        <title>API Management confiável e seguro | DevApi</title>
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              <span>Acelere suas estratégias digitais </span>
              com o gerenciamento de APIs
            </h1>
            <p>
              Sem limites para a inovação com o poder do API Manager da DevApi!
              Ajudamos você a implementar estratégias de gerenciamento de APIs
              para expandir seu ecossistema e responder com agilidade às rápidas
              mudanças do mercado.
            </p>
            <ButtonLink
              text="Quero agilizar a inovação!"
              href="/free-trial"
              target="_self"
              type="default"
              size="default"
            />
          </S.HeroContent>
        </Hero>
        <S.ApiContainer>
          {apis.map((integration, index) => {
            const isOddNumber = validateOddNumber(index)
            return (
              <S.ApiContant
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
              </S.ApiContant>
            )
          })}
        </S.ApiContainer>

        <S.Inovation>
          <S.Pipe />
          <h3>
            Quer desbloquear a<span> inovação na sua empresa?</span>
          </h3>
          <ButtonLink
            text="Sim, vamos lá!"
            href="/free-trial"
            target="_self"
            type="default"
            size="default"
          />
        </S.Inovation>
      </S.Container>
    </>
  )
}

export default ApiManagement
