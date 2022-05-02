import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Circle } from '../../components/AnimatedBackground'
import { ButtonLink } from '../../components/ButtonLink'
import { Customers } from '../../components/Customers'
import { Hero } from '../../components/Hero'
import { ProfessionalService } from '../../components/ProfessionalService'
import QuoteCarousel from '../../components/QuoteCarousel'
import { customers } from '../../constants/customers'
import { quotes } from '../../constants/quotes'
import { ISolutionPage, solutionsPage } from '../../constants/solutionsPage'
import * as S from '../../styles/solutions'

const IntegrationCardWithoutSSR = dynamic(
  () => import('../../components/IntegrationCard'),
  {
    ssr: false,
  },
)

const Solutions = () => {
  const router = useRouter().asPath

  const [filterPage] = router.split('?')

  const currentPage = filterPage.split('/')

  const page: ISolutionPage = solutionsPage[currentPage[currentPage.length - 1]]

  return (
    <>
      <Head>
        <title>{page ? page.seo.metaTitle : 'Devapi | Soluções'}</title>
        <meta
          name="description"
          content={page ? page.seo.metaTitle : 'Devapi | Soluções'}
        />
      </Head>

      <S.Container>
        <Hero>
          <Circle>
            <S.HeroContent>
              <S.Pipe />

              {page && (
                <S.Title
                  width={page.title.width}
                  dangerouslySetInnerHTML={{ __html: `${page.title.text}` }}
                />
              )}
              {page && <S.Subtitle>{page.subtitle}</S.Subtitle>}

              <ButtonLink
                text="Fale com um consultor"
                href="/converse-com-especialista"
                target="_self"
                size="default"
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
                {page && page.contentTitle}

                <S.ParagraphContainer>
                  {page && page.contentText}
                </S.ParagraphContainer>

                {!page?.textJoinNow && (
                  <>
                    <ButtonLink
                      text="Quero integrar agora!"
                      href="/converse-com-especialista"
                      target="_self"
                      size="default"
                      type="default"
                    />
                  </>
                )}
              </S.TitleContainer>

              <S.ComponentContainer>
                {page?.integrationCard ? (
                  page.integrationCard.map((pageAtributes, index) => {
                    return (
                      <IntegrationCardWithoutSSR
                        imageLeft={pageAtributes.imageLeft}
                        imageRight={pageAtributes.imageRight}
                        key={index}
                      ></IntegrationCardWithoutSSR>
                    )
                  })
                ) : (
                  <S.IntegrationContainer>
                    {page && page.component}
                  </S.IntegrationContainer>
                )}
              </S.ComponentContainer>
            </S.TextContainer>

            {page?.textJoinNow && (
              <S.JoinNowContainer>
                <S.PipeJoinNow />
                {page.textJoinNow}

                <S.IntegrationContainer>
                  {page && page.component}
                </S.IntegrationContainer>

                <ButtonLink
                  text="Quero integrar agora!"
                  href="/converse-com-especialista"
                  target="_self"
                  size="default"
                  type="default"
                />
              </S.JoinNowContainer>
            )}
          </S.SolutionContainer>

          <S.QuoteContainer>
            <QuoteCarousel quotes={quotes} />
          </S.QuoteContainer>

          <S.ProfessionalServiceContainer>
            <ProfessionalService />
          </S.ProfessionalServiceContainer>

          <S.ListIconContainer>
            <Customers
              title={
                <S.ListIconlTitle>
                  <S.PipeContainer>
                    <S.Pipe />
                  </S.PipeContainer>
                  Empresas que já desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
                </S.ListIconlTitle>
              }
              items={customers}
            />
          </S.ListIconContainer>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Solutions
