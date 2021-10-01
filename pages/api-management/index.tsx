import Head from 'next/head'
import React from 'react'
import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import { apis } from '../../constants/apis'
import * as S from '../../styles/apiManagement'
import { validateOddNumber } from '../../utils/validateOddNumber'

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
            <Button
              size="default"
              text="Quero agilizar a inovação!"
              type="default"
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
          <Button size="default" text="Sim, vamos lá!" type="default" />
        </S.Inovation>
      </S.Container>
    </>
  )
}

export default ApiManagement
