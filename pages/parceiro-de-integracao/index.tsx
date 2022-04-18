import React, { useEffect, useRef } from 'react'

import Head from 'next/head'

import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import { ListIconCostumer } from '../../components/ListIconCostumer'
import { cardPatnerImages } from '../../constants/cardPatnerImages'
import { knowPatners } from '../../constants/knowPartners'
import { programCard } from '../../constants/programCard'
import * as S from '../../styles/partner'

const IntegrationPartner = () => {
  const formRef = useRef(null)

  const executeScroll = () => formRef.current.scrollIntoView()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>DevApi | Programa de parceiro</title>
        <meta
          property="og:title"
          content="Programa de Parceiros DevApi – São Muitas Vantagens"
          key="title"
        />
        <meta
          name="description"
          content="A DevApi tem um Programa de Parceiros que Oferece Inumeras Vantagens como Treinamento, Gestão estratégica e Muito Mais. Acesse e Confira!"
        />
        <meta
          property="og:description"
          content="A DevApi tem um Programa de Parceiros que Oferece Inumeras Vantagens como Treinamento, Gestão estratégica e Muito Mais. Acesse e Confira!"
          key="description"
        />
        <meta
          property="og:url"
          content="https://www.devapi.com.br/parceiro-de-integracao"
        />
        <link
          rel="canonical"
          href="https://www.devapi.com.br/parceiro-de-integracao"
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
            <Button
              text="Quero ser um parceiro!"
              size="default"
              type="default"
              onClick={executeScroll}
            />
          </S.HeroContent>
        </Hero>

        <S.CardImageContainer>
          {cardPatnerImages.map((card, index) => {
            return (
              <S.CardImage key={index}>
                <h2>{card.title}</h2>
                <S.ImageCardContainer>
                  <img src={card.image} alt={card.title} />
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
                  <img src={patners.imgage} alt={`parceiro-${index}`} />
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

        <S.CornerContainer ref={formRef}>
          <S.TextContainer>
            <S.Pipe />
            <h2>
              Faça parceria com a DevApi para fornecer uma plataforma de{' '}
              <b>integração de API </b> para seus clientes
            </h2>
          </S.TextContainer>

          <S.FormContainer>
            <div
              className="meetings-iframe-container"
              data-src="https://meetings.hubspot.com/michel-carnevali/parcerias?embed=true"
            ></div>
          </S.FormContainer>
        </S.CornerContainer>

        <S.ListIconContainer>
          <ListIconCostumer
            title={
              <S.ListIconlTitle>
                <S.PipeContainer>
                  <S.Pipe />
                </S.PipeContainer>
                Empresas que já desbloquearam o{' '}
                <span>poder da integração de sistemas</span>
              </S.ListIconlTitle>
            }
          />
        </S.ListIconContainer>
      </S.Container>
    </>
  )
}

export default IntegrationPartner
