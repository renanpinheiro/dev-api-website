import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Circle } from '../../components/AnimatedBackground'
import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import { ProfessionalService } from '../../components/ProfessionalService'
import QuoteCarousel from '../../components/QuoteCarousel'
import { constumersMobile, costumers } from '../../constants/costumers'
import { quotes } from '../../constants/quotes'
import { ISolutionPage, solutionsPage } from '../../constants/solutionsPage'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/solutions'

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

const Solutions = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 1024

  const router = useRouter().asPath

  const currentPage = router.split('/')
  const page: ISolutionPage = solutionsPage[currentPage[currentPage.length - 1]]

  return (
    <>
      <Head>
        <title>{page ? page.metaTitle : 'Soluções | Devapi'}</title>
      </Head>

      <S.Container>
        <Hero>
          <Circle>
            <S.HeroContent>
              <S.Pipe />
              {page ? page.title : <h1></h1>}
              {page ? page.subTitle : <p></p>}
              <Button
                size="default"
                text="Fale com um consultor"
                type="default"
              />
            </S.HeroContent>
          </Circle>
        </Hero>
        <S.Content>
          <S.SolutionContainer>
            <S.TextContainer>
              <S.TitleContainer>
                <S.Pipe />
                {page ? page.contentTitle : <></>}
              </S.TitleContainer>
              <S.ParagraphContainer>
                {page ? page.contentText : <></>}
              </S.ParagraphContainer>
            </S.TextContainer>

            <S.IntegrationContainer>
              {page ? page.component : <></>}
            </S.IntegrationContainer>

            <Button
              size="default"
              text="Quero integrar agora!"
              type="default"
            />
          </S.SolutionContainer>

          <S.QuoteContainer>
            <QuoteCarousel quotes={quotes} />
          </S.QuoteContainer>

          <S.ProfessionalServiceContainer>
            <ProfessionalService />
          </S.ProfessionalServiceContainer>

          <S.CarrouselContainer>
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
          </S.CarrouselContainer>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Solutions
