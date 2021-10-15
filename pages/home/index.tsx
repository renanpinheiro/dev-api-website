import React from 'react'

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { ButtonLink } from '../../components/ButtonLink'
import { CallToAction } from '../../components/CallToAction'

import { businessCards } from '../../constants/businessCards'
import { connectors, connectorsMobile } from '../../constants/connectors'
import { constumersMobile, costumers } from '../../constants/costumers'
import { featuresCard } from '../../constants/featuresCard'
import { plataformDetails } from '../../constants/plataformDetails'
import { quotes } from '../../constants/quotes'

import * as S from '../../styles/home'

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

const QuoteCarouselWithOutSSR = dynamic(
  () => import('../../components/QuoteCarousel'),
  {
    ssr: false,
  },
)

const Home = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <>
      <Head>
        <title>DevApi | Integração de sistemas</title>
      </Head>

      <S.Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            Desbloqueamos o poder da <b>integração de sistemas</b>
          </h1>
          <p>
            Sem limites: uma única plataforma para integrar sistemas,
            automatizar processos, orquestrar dados e gerenciar APIs.
          </p>

          <ButtonLink
            text="Quero uma demo!"
            href="/free-trial"
            target="_self"
            size="default"
            type="default"
          />
        </S.HeroContent>
        <S.GifContainer>
          <img src="/gifs/home.gif" alt="platform" />
        </S.GifContainer>
      </S.Hero>

      <S.Content>
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

        <S.PlatformContainer>
          <S.Platform>
            <S.Pipe />
            <h2>
              Plataforma de integração e gestão de APIs.{' '}
              <span>Encaixe as peças da sua operação!</span>
            </h2>
            <p>
              Integre. Automatize. Otimize. Das regras de negócio mais complexas
              aos processos mais avançados, somos o parceiro estratégico do seu
              sucesso. Gerencie APIs, automatize dados e processos e integre
              todos os sistemas em uma única plataforma. Acelere a transformação
              digital da sua empresa com uma plataforma de integração sem
              limites!
            </p>
          </S.Platform>

          <S.PlatformDetails>
            {plataformDetails.map((item, index) => {
              return (
                <S.DetailsContainer key={index}>
                  <S.DetailsCard>
                    <img src={item.urlImage} alt={item.text} />
                  </S.DetailsCard>
                  <S.DetailsText>
                    <p>{item.text}</p>
                    <span>{item.detail}</span>
                  </S.DetailsText>
                </S.DetailsContainer>
              )
            })}
          </S.PlatformDetails>
        </S.PlatformContainer>

        <S.BusinessContainer>
          <S.Pipe />
          <h2>
            Prepare-se para
            <b> transformar a sua empresa</b>
          </h2>
          <p>
            À medida que os negócios crescem, a complexidade da operação aumenta
            e as organizações enfrentam uma série de desafios tecnológicos, de
            gestão e estratégicos. A integração de sistemas passa a ser
            fundamental para dar escala à operação, impulsionar a inovação e
            ganhar vantagem competitiva. Integre rapidamente cenários que antes
            pareciam impossíveis e libere a equipe para focar na proposta de
            valor central da sua empresa.
          </p>

          <S.CardContainer>
            {businessCards.map((item, index) => {
              return (
                <S.Card key={index}>
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <ButtonLink
                    text="Saiba mais"
                    href={item.link}
                    target="_self"
                    size="default"
                    type="default"
                  />

                  <S.ConnectorsContainer>
                    {item.connectors ? (
                      item.connectors.map((connector, index) => {
                        return <img src={connector.urlImage} key={index} />
                      })
                    ) : (
                      <S.Invisible />
                    )}
                  </S.ConnectorsContainer>
                </S.Card>
              )
            })}
          </S.CardContainer>
        </S.BusinessContainer>

        <S.FeaturesContainer>
          <S.Pipe />
          <h2>Poderosa, mas simples e intuitiva</h2>
          <p>
            Os líderes de negócio se surpreendem. Os líderes técnicos confiam.
            Os desenvolvedores agradecem.
          </p>

          <S.Features>
            {featuresCard.map((item, index) => {
              return (
                <S.FeatureCard key={index}>
                  <S.Icon>
                    <img src={item.icon} />
                  </S.Icon>
                  <S.Text>
                    <b>{item.title}</b>
                    <p>{item.text}</p>
                  </S.Text>
                </S.FeatureCard>
              )
            })}
          </S.Features>
        </S.FeaturesContainer>

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={connectorsMobile}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    <b> Mais de 300 conectores</b> pré-construídos e prontos
                    para uso
                  </h2>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              itemsPerSlide={9}
              interval={2000}
              items={connectors}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    <b> Mais de 300 conectores</b> pré-construídos e prontos
                    para uso
                  </h2>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>

        <S.ButtonContainer>
          <ButtonLink
            text="Ver conectores"
            href="/conectores"
            target="_self"
            size="default"
            type="default"
          />
        </S.ButtonContainer>

        <S.Quote>
          <QuoteCarouselWithOutSSR quotes={quotes} />
        </S.Quote>

        <S.CallToActionContainer>
          <CallToAction />
        </S.CallToActionContainer>
      </S.Content>
    </>
  )
}

export default Home
