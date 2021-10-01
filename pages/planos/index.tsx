import Head from 'next/head'

import React from 'react'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/plans'
import { cardPlanItems } from '../../constants/cardPlanItems'
import { ICardPlanItems } from '../../components/CardPlans/CardPlans.interface'
import { CardPlans } from '../../components/CardPlans'

import { constumersMobile, costumers } from '../../constants/costumers'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import dynamic from 'next/dynamic'
import QuoteCarousel from '../../components/QuoteCarousel'
import { quotes } from '../../constants/quotes'
import { Button } from '../../components/Button'
import { ListColumn } from '../../components/ListColumn'

import { listIntegration } from '../../constants/listIntegration'
import { SelectCollapsible } from '../../components/SelectCollapsible'

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

const Plans = () => {
  const cards: ICardPlanItems[] = cardPlanItems
  const list = listIntegration
  const { width } = useWindowDimensions()
  const isMobile = width <= 1024
  return (
    <>
      <Head>
        <title>DevApi – Planos personalizados para você!</title>
        <meta
          property="og:title"
          content="Planos personalizados para você | DevApi"
          key="title"
        />
        <meta
          property="og:description"
          content="cDevApi é o Integrador de Sistemas (iPaaS), Seguro e Confiável, Integre Seus Sistemas de Gestão, Logística, Marketing e Ecommerce Agora. Acesse e Confira!"
          key="description"
        />
        <link rel="canonical" href="https://devapi.com.br/plano" />
      </Head>
      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <span> É a hora de </span>acelerar a transformação
          </h1>
          <p>
            Com a DevApi, conectar sistemas, processos, bancos de dados e
            arquivos é muito mais fácil do que você imagina. Conheça os nossos
            planos!
          </p>
        </S.HeroContent>
      </Hero>
      <S.Container>
        <S.CardContainer>
          <CardPlans cards={cards} />
        </S.CardContainer>

        <S.ContainerItegration>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.CostumersCarrouselContainer>
            {isMobile ? (
              <CarrouselWithOutSSR
                items={constumersMobile}
                title={
                  <S.CarrouselTitle>
                    Empresas que ja desbloquearam o{' '}
                    <span>poder da integração de sistemas.</span>
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
                    <span>poder da integração de sistemas.</span>
                  </S.CarrouselTitle>
                }
              />
            )}
          </S.CostumersCarrouselContainer>
          <S.FreeTestContainer>
            <S.FreeTestRows>
              <S.Pipe />
              <S.FreeTest>
                <h2>
                  Quer testar a DevApi <span>gratuitamente?</span>
                </h2>
                <Button
                  type="default"
                  size="default"
                  text="Converse com um especialista"
                />
              </S.FreeTest>
            </S.FreeTestRows>
          </S.FreeTestContainer>

          <S.QuoteContainer>
            <QuoteCarousel quotes={quotes} />
          </S.QuoteContainer>
        </S.ContainerItegration>

        <S.PipeContainer>
          <S.Pipe />
        </S.PipeContainer>

        <S.ListIntegrationContainer>
          <S.ListIntegrationTitle>
            <span>Reduza em até 20x o tempo</span> de ter toda a sua empresa
            integrada
          </S.ListIntegrationTitle>
          <ListColumn list={list} col={2} />
        </S.ListIntegrationContainer>

        <SelectCollapsible
          question="O que é a integração de sistemas?"
          answer="A integração de sistemas faz parte do DNA da DevApi. O uso de software é uma realidade nas empresas de todos os portes. Mas como cada software se comunica de um jeito, é como se não existisse uma língua comum para que eles possam conversar entre si. A DevApi funciona como um tradutor universal entre esses diferentes sistemas. Sistemas integrados se comunicam de maneira eficiente, os dados são trafegados sem erro, os processos são otimizados e automatizados. Com a integração de sistemas você evita que informações importantes sejam duplicadas ou perdidas, uma vez que os diversos sistemas passam a estar vinculados e se tornam parte de um macrossistema. Dessa forma, com baixo investimento de tempo e esforço e sem custos de desenvolvimento para implementar, atualizar e escalar, a integração de sistemas com a DevApi se torna essencial para aumentar a eficiência operacional e a inovação nas empresas."
        />
      </S.Container>
    </>
  )
}

export default Plans
