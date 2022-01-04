import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Acordion } from '../../components/Acordion'
import { ButtonLink } from '../../components/ButtonLink'
import { CallToAction } from '../../components/CallToAction'
import { CardPlans } from '../../components/CardPlans'
import { Hero } from '../../components/Hero'
import { ListColumn } from '../../components/ListColumn'
import { ListIconCostumer } from '../../components/ListIconCostumer'
import QuoteCarousel from '../../components/QuoteCarousel'

import { cardPlanItems } from '../../constants/cardPlanItems'
import { commonQuestions } from '../../constants/commonQuestions'
import { costumers } from '../../constants/costumers'
import { listIntegration } from '../../constants/listIntegration'
import { quotes } from '../../constants/quotes'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { ICardPlanItems } from '../../components/CardPlans/CardPlans.interface'

import * as S from '../../styles/plans'

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
  const { width } = useWindowDimensions()

  const cards: ICardPlanItems[] = cardPlanItems
  const listQuestions = commonQuestions

  const isMobile = width <= 1024

  return (
    <>
      <Head>
        <title>DevApi | Planos</title>
        <meta property="og:title" content="DevApi | Planos" key="title" />
        <meta
          name="description"
          content="É hora de acelerar a transformação!"
        />
        <meta
          property="og:description"
          content="É hora de acelerar a transformação!"
          key="description"
        />
        <meta property="og:url" content="https://www.devapi.com.br/planos" />
        <link rel="canonical" href="https://www.devapi.com.br/planos" />
      </Head>

      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            É a hora de <b>acelerar a transformação</b>
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
          <S.ContainerCallToAction>
            <CallToAction />
          </S.ContainerCallToAction>
        </S.ContainerItegration>

        <S.QuoteContainer>
          <QuoteCarousel quotes={quotes} />
        </S.QuoteContainer>

        <S.ListIconContainer>
          <ListIconCostumer
            items={costumers}
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

        <S.ListIntegrationContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>

          <S.ListIntegrationTitle>
            <b>Reduza em até 20x o tempo</b> de ter toda a sua empresa integrada
          </S.ListIntegrationTitle>

          <S.ListColumnContainer>
            <ListColumn list={listIntegration} />
          </S.ListColumnContainer>

          <S.ButtonContainer>
            <ButtonLink
              text="Quero integrar meus sistemas"
              href="/converse-com-especialista"
              target="_self"
              type="default"
              size="default"
            />
          </S.ButtonContainer>
        </S.ListIntegrationContainer>

        <S.AcordionContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.QuestionsContainer>
            <h2>
              Perguntas <b>frequentes</b>
            </h2>
          </S.QuestionsContainer>

          <Acordion list={listQuestions} />

          <S.ButtonContainer>
            <ButtonLink
              text="Vamos conversar"
              href="/converse-com-especialista"
              target="_self"
              type="default"
              size="default"
            />
          </S.ButtonContainer>
        </S.AcordionContainer>
      </S.Container>
    </>
  )
}

export default Plans
