import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { BoxReverse } from '../../components/BoxReverse'
import { ButtonLink } from '../../components/ButtonLink'
import { CompanyBenefits } from '../../components/CompanyBenefits'
import { Customers } from '../../components/Customers'
import { CustomersContainer } from '../../components/CustomersContainer'
import { NewsletterFooter } from '../../components/NewsletterFooter'
import { advantagesList } from '../../constants/advantagesList'
import { benefits } from '../../constants/benefits'
import { businessCards } from '../../constants/businessCards'
import { connectors, connectorsMobile } from '../../constants/connectors'
import { customers } from '../../constants/customers'
import { featuresCard } from '../../constants/featuresCard'
import { inlineCustomers } from '../../constants/inlineCustomers'
import { plataformDetails } from '../../constants/plataformDetails'
import { quotes } from '../../constants/quotes'
import { transformCard } from '../../constants/transformCard'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
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
        <title>DevApi | Integração de Sistemas e Gestão de APIs</title>
        <meta
          property="og:title"
          content="DevApi | Integração de Sistemas e Gestão de APIs"
          key="title"
        />
        <meta
          name="description"
          content="Plataforma iPaaS para integrar sistemas, automatizar processos, orquestrar dados e gerenciar APIs. Saiba mais!"
        />
        <meta
          property="og:description"
          content="Plataforma iPaaS para integrar sistemas, automatizar processos, orquestrar dados e gerenciar APIs. Saiba mais!"
          key="description"
        />
        <meta property="og:url" content="https://www.devapi.com.br" />
      </Head>

      <S.Hero>
        <S.ContainerGrid className={'grid'}>
          <S.ContentContainer className={'flex'}>
            <S.HeroContent>
              <S.Pipe />
              <h1 className={'font-bolder'}>
                Integração de Sistemas e Gestão de APIs
              </h1>
              <p>
                Sem limites: uma única plataforma para integrar sistemas,
                automatizar processos, orquestrar dados e gerenciar APIs.
              </p>

              <ButtonLink
                text="Quero uma demonstração"
                href="/converse-com-especialista"
                target="_self"
                size="default"
                type="default"
              />
            </S.HeroContent>
          </S.ContentContainer>
          <S.GifContainer>
            <img src="/backgrounds/bg-hero.png" />
          </S.GifContainer>
        </S.ContainerGrid>
      </S.Hero>

      <S.Content>
        <S.ContentGrid className={'grid'}>
          <S.Platform>
            <S.Pipe />
            <h2 className={'font-bolder'}>Encaixe as peças da sua operação!</h2>
            <p>
              Otimize processos e gerencie APIs. Automatize dados e toda a
              operação da sua empresa. Integre sistemas em uma única plataforma
              e invista tempo para a estratégia do seu negócio.
            </p>

            <p>
              Tenha sua organização totalmente integrada ao universo da
              transformação digital.
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
        </S.ContentGrid>

        <S.ContentGrid className={'grid flex-column'}>
          <S.Carrousel>
            {isMobile ? (
              <MultiCarrouselWithOutSSR
                itemsPerSlide={3.5}
                interval={5000}
                items={connectors}
                title={
                  <S.CarrouselTitle>
                    <S.Pipe />
                    <h2>
                      Mais de&nbsp;<b>300 conectores</b> pré-construídos e
                      prontos para uso
                    </h2>
                  </S.CarrouselTitle>
                }
              />
            ) : (
              <MultiCarrouselWithOutSSR
                itemsPerSlide={11}
                interval={2000}
                items={connectors}
                title={
                  <S.CarrouselTitle>
                    <S.Pipe />
                    <h2>
                      Mais de <b>300 conectores</b> pré-construídos e prontos
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
        </S.ContentGrid>
      </S.Content>

      <S.FeaturesContainer>
        <S.ContentGrid className={'grid flex-column'}>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Garanta que os sistemas da sua empresa <b>estejam integrados</b>
            </h2>
          </S.JoinNowContainer>

          <S.SystemContainer>
            <S.CardSystemContainer>
              <h2>
                <b>iPaaS</b>
              </h2>
              <S.SystemImageContainer>
                <S.SystemImage src="/images/ipaas.svg" alt="iPaas" />
              </S.SystemImageContainer>
              <p>
                Plataforma de Integração de Sistemas como Serviço que agiliza a
                integração entre sistemas, a orquestração de dados e a
                automatização de processos, tanto na nuvem como on-premise. O
                iPaaS da DevApi funciona como um tradutor universal entre todos
                os sistemas, integrando os diferentes softwares.
              </p>
            </S.CardSystemContainer>
            <S.CardSystemContainer>
              <h2>
                <b>API Manager</b>
              </h2>
              <S.SystemImageContainer>
                <S.SystemImage
                  src="/images/api-manager.svg"
                  alt="API Manager"
                />
              </S.SystemImageContainer>
              <p>
                Tecnologia que desenvolve, monitora, distribui e monetiza APIs,
                expandindo o ecossistema entre instituições, clientes,
                fornecedores e parceiros. Com o API Manager da DevApi construa,
                distribua e gerencie APIs com agilidade, com uma arquitetura
                robusta e super segura.
              </p>
            </S.CardSystemContainer>
          </S.SystemContainer>
        </S.ContentGrid>
      </S.FeaturesContainer>

      <S.Content>
        <S.TransformContainer>
          <S.ContentGrid className={'grid flex-column'}>
            <S.JoinNowContainer>
              <S.Pipe />
              <h2>
                <b>Transforme a sua empresa!</b>
              </h2>
              <p>
                Tenha processos ágeis, seguros e eficientes. Escale a operação,
                impulsione a inovação e ganhe vantagem competitiva.
              </p>
            </S.JoinNowContainer>

            <S.Features>
              {transformCard.map((item, index) => {
                return (
                  <S.FeatureCard key={index}>
                    <a href={item.url} target="_self" rel="noreferrer">
                      <S.Icon>
                        <img src={item.icon} alt={item.title} />
                        <S.Text>
                          <b>{item.title}</b>
                          <p>{item.text}</p>
                        </S.Text>
                      </S.Icon>
                    </a>
                  </S.FeatureCard>
                )
              })}
            </S.Features>
          </S.ContentGrid>
        </S.TransformContainer>
      </S.Content>

      <S.AdventagesGrid>
        <S.ContentGrid className={'grid flex-column'}>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Vantagens para a <b>sua empresa</b>
            </h2>
          </S.JoinNowContainer>

          <S.AdvantagesContainer>
            <ul>
              {advantagesList.map((item, index) => {
                return (
                  <li key={index}>
                    <img src="/icons/check.svg" alt="Checkmark"></img>
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </S.AdvantagesContainer>
        </S.ContentGrid>
      </S.AdventagesGrid>

      <S.Content>
        <S.ContentGrid className={'grid flex-column'}>
          <S.CasesContainer>
            <S.Cases>
              <S.Pipe />
              <h2>
                Grandes empresas usam a DevApi para integrar com
                <span> velocidade e segurança</span>
              </h2>
            </S.Cases>
          </S.CasesContainer>

          <S.QuoteContainer>
            {quotes.map((item, index) => {
              return (
                <S.QuoteStructure key={index}>
                  <S.QuoteAvatar>
                    <img src={item.imageUrl} alt="Avatar" />
                    <S.QuoteTitle>
                      <h3>
                        {item.name} &nbsp;
                        <img src="/icons/quote-mark.svg" alt="Avatar" />
                      </h3>
                      <p>{item.occupation + ' | ' + item.company}</p>
                    </S.QuoteTitle>
                  </S.QuoteAvatar>
                  <S.QuoteText>
                    <p>{item.quote}</p>
                  </S.QuoteText>
                </S.QuoteStructure>
              )
            })}
          </S.QuoteContainer>

          <S.DemoContainer>
            <S.Pipe />
            <h2>
              Encaixe todas as peças da sua operação{' '}
              <strong>com a integração de sistemas</strong>
            </h2>

            <S.ButtonContainer>
              <ButtonLink
                text="Quero uma demonstração"
                href="/converse-com-especialista"
                target="_self"
                size="default"
                type="default"
              />
            </S.ButtonContainer>
          </S.DemoContainer>
        </S.ContentGrid>
      </S.Content>

      <CustomersContainer></CustomersContainer>

      <NewsletterFooter></NewsletterFooter>
    </>
  )
}

export default Home
