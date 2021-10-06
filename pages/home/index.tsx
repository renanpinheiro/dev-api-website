import React from 'react'
import { Hero } from '../../components/Hero'

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { CallToAction } from '../../components/CallToAction'
import QuoteCarousel from '../../components/QuoteCarousel'

import { connectors, connectorsMobile } from '../../constants/connectors'
import { constumersMobile, costumers } from '../../constants/costumers'
import { quotes } from '../../constants/quotes'

import * as S from '../../styles/home'
import { Button } from '../../components/Button'
import { plataformDetails } from '../../constants/plataformDetails'
import { businessCards } from '../../constants/businessCards'

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
        <title>DevApi</title>
      </Head>

      <S.Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <span>Desbloqueamos o poder da </span>integração de sistemas
          </h1>
          <p>
            Sem limites: uma única plataforma para integrar sistemas,
            automatizar processos, orquestrar dados e gerenciar APIs.
          </p>
          <Button size="default" text="Quero uma demo!" type="default" />
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
                  Empresas que ja desbloquearam o{' '}
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
                  Empresas que ja desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
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
            <span> transformar a sua empresa</span>
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
                  <S.CardTitle>{item.title}</S.CardTitle>
                  <p>{item.text}</p>
                  <Button size="default" text="Saiba mais" type="default" />
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

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={connectorsMobile}
              title={
                <S.CarrouselTitle>
                  Mais de 300 conectores pré-construídos{' '}
                  <span>e prontos para uso.</span>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              interval={2000}
              items={connectors}
              title={
                <S.CarrouselTitle>
                  Mais de 300 conectores pré-construídos{' '}
                  <span>e prontos para uso.</span>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>

        <S.ButtonContainer>
          <Button size="default" text="Ver conectores" type="default" />
        </S.ButtonContainer>

        <S.Quote>
          <QuoteCarousel quotes={quotes} />
        </S.Quote>

        <CallToAction />
      </S.Content>
    </>
  )
}

export default Home
