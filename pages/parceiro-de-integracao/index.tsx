import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { ButtonLink } from '../../components/ButtonLink'
import { Hero } from '../../components/Hero'
import { FormPartner } from '../../components/FormPartner'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { cardPatnerImages } from '../../constants/cardPatnerImages'
import { knowPatners } from '../../constants/knowPartners'
import { programCard } from '../../constants/programCard'
import { constumersMobile, costumers } from '../../constants/costumers'

import * as S from '../../styles/partner'

const CarrouselWithOutSSR = dynamic(
  () => import('../../components/Carrousel'),
  {
    ssr: false,
  },
)

const MultiCarrouselWithOutSSR = dynamic(
  () => import('../../components/MultiCarrousel/MultiCarrousel'),
  {
    ssr: false,
  },
)

const IntegrationPartner = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <>
      <Head>
        <title>DevApi | Programa de parceiros</title>
        <link
          rel="canonical"
          href="https://devapi.com.br/parceiro-de-integracao"
        />
      </Head>

      <S.Container>
        <Hero>
          <S.HeroContent>
            <S.Pipe />
            <h1>
              Vamos andar <b>lado a lado!</b>
            </h1>
            <p>
              Com o programa de parcerias da DevApi, você pode oferecer aos seus
              clientes mais flexibilidade, funcionalidades e benefícios
              financeiros provenientes de seu próprio aplicativo, serviço ou
              solução. Junte-se a nós!
            </p>
            <ButtonLink
              text="Quero ser um parceiro!"
              href="/free-trial"
              target="_self"
              size="default"
              type="default"
            />
          </S.HeroContent>
        </Hero>

        <S.CardImageContainer>
          {cardPatnerImages.map((card, index) => {
            return (
              <S.CardImage key={index}>
                <h2>{card.title}</h2>
                <S.ImageCardContainer>
                  <img src={card.image} />
                </S.ImageCardContainer>
              </S.CardImage>
            )
          })}
        </S.CardImageContainer>

        <S.KnowPatnersContainer>
          <S.Pipe />
          <h2>
            Conheça <b>nossos parceiros</b>
          </h2>
        </S.KnowPatnersContainer>

        <S.CardPatnerContainer>
          {knowPatners.map((patners, index) => {
            return (
              <S.CardPatner key={index}>
                <S.CardPatnerHeader>
                  <S.Pipe />
                  <img src={patners.imgage} />
                </S.CardPatnerHeader>

                <p>{patners.text}</p>

                {patners.subText.map((text, idx) => {
                  return (
                    <S.SubtextContainer key={idx}>
                      <S.SubText>
                        <p>{text}</p>
                      </S.SubText>
                    </S.SubtextContainer>
                  )
                })}
              </S.CardPatner>
            )
          })}
        </S.CardPatnerContainer>

        <S.FeatureContainer>
          <S.Pipe />
          <h2>
            Benefícios <b>do programa</b>
          </h2>

          <S.Features>
            {programCard.map((item, index) => {
              return (
                <S.FeatureCard key={index}>
                  <S.Icon>
                    <img src={item.icon} />
                  </S.Icon>
                  <S.Text>
                    <S.Title>{item.title}</S.Title>
                    <p>{item.text}</p>
                  </S.Text>
                </S.FeatureCard>
              )
            })}
          </S.Features>
        </S.FeatureContainer>

        <S.CornerContainer>
          <S.TextContainer>
            <S.Pipe />
            <h2>
              Faça parceria com a DevApi para fornecer uma plataforma de{' '}
              <b>integração de API </b> para seus clientes
            </h2>
          </S.TextContainer>

          <S.FormContainer>
            <FormPartner />
          </S.FormContainer>
        </S.CornerContainer>

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={constumersMobile}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    Empresas que já desbloquearam o{' '}
                    <b>poder da integração de sistemas</b>
                  </h2>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              interval={2000}
              items={costumers}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    Empresas que já desbloquearam o{' '}
                    <b>poder da integração de sistemas</b>
                  </h2>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>
      </S.Container>
    </>
  )
}

export default IntegrationPartner
