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
        <title>DevApi | API Management</title>
        <meta property="og:title" content="DevApi | API Management" />
        <meta
          name="description"
          content="Agilidade e escalabilidade incríveis!"
        />
        <meta
          property="og:description"
          content="Agilidade e escalabilidade incríveis!"
          key="description"
        />
        <meta
          property="og:url"
          content="https://devapi.com.br/api-management"
        />
        <link rel="canonical" href="https://www.devapi.com.br/api-management" />
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              Acelere suas estratégias digitais{' '}
              <b>com o gerenciamento de APIs</b>
            </h1>
            <p>
              Sem limites para a inovação com o poder do API Manager da DevApi!
              Ajudamos você a implementar estratégias de gerenciamento de APIs
              para expandir seu ecossistema e responder com agilidade às rápidas
              mudanças do mercado.
            </p>
            <ButtonLink
              text="Quero agilizar a inovação!"
              href="/converse-com-especialista"
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
                  <img src={integration.urlGif} alt={`api-${index}`} />
                </S.GifContainer>
              </S.ApiContant>
            )
          })}
        </S.ApiContainer>

        <S.Inovation>
          <S.Pipe />
          <h3>
            Quer desbloquear a <b>inovação na sua empresa?</b>
          </h3>
          <ButtonLink
            text="Sim, vamos lá!"
            href="/converse-com-especialista"
            target="_self"
            type="default"
            size="large"
          />
        </S.Inovation>
      </S.Container>
    </>
  )
}

export default ApiManagement
