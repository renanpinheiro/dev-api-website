import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { Hero } from '../../components/Hero'
import { ButtonLink } from '../../components/ButtonLink'
import * as S from '../../styles/integrationPartner'
import { cardPatnerImages } from '../../constants/cardPatnerImages'
import { knowPatners } from '../../constants/knowPartners'
import { programCard } from '../../constants/programCard'
import { constumersMobile, costumers } from '../../constants/costumers'
import { FormPartner } from '../../components/FormPartner'
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
        <title>DevApi</title>
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
            Conheça <span>nossos parceiros</span>
          </h2>
        </S.KnowPatnersContainer>
        <S.CardPatnerContainer>
          {knowPatners.map((patners, index) => {
            return (
              <S.CardPatner key={index}>
                <S.Pipe />
                <img src={patners.imgage} />
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
            Benefícios <span>do programa</span>
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
              <span>integração de API </span> para seus clientes
            </h2>
          </S.TextContainer>
          <S.FormContaimer>
            <FormPartner />
          </S.FormContaimer>
        </S.CornerContainer>
        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={constumersMobile}
              title={
                <S.CarrouselTitle>
                  Empresas que já desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              interval={2000}
              items={costumers}
              title={
                <S.CarrouselTitle>
                  Empresas que já desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
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
