import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { BoxReverse } from '../../components/BoxReverse'
import { ButtonLink } from '../../components/ButtonLink'
import { CompanyBenefits } from '../../components/CompanyBenefits'
import { Customers } from '../../components/Customers'
import { benefits } from '../../constants/benefits'
import { businessCards } from '../../constants/businessCards'
import { connectors, connectorsMobile } from '../../constants/connectors'
import { customers } from '../../constants/customers'
import { featuresCard } from '../../constants/featuresCard'
import { transformCard } from '../../constants/transformCard'
import { plataformDetails } from '../../constants/plataformDetails'
import { advantagesList } from '../../constants/advantagesList'
import { quotes } from '../../constants/quotes'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/home'
import { inlineCustomers } from '../../constants/inlineCustomers'
import { NewsletterFooter } from '../../components/NewsletterFooter'
import { CustomersContainer } from '../../components/CustomersContainer'
import { ProfessionalService } from '../../components/ProfessionalService'

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
        <meta property="og:title" content="DevApi | Segurança" key="title" />
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
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <b>Garanta a segurança da sua operação</b>
          </h1>
          <p>Proteja os dados e informações da sua empreesa com a DevApi.</p>
        </S.HeroContent>
        <S.GifContainer>
          <img src="/backgrounds/bg-security.png" />
        </S.GifContainer>
      </S.Hero>

      <S.Content>
        <S.TransformContainer>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              <b>
                Conheça a plataforma de integração de sistemas mais segura do
                mercado
              </b>
            </h2>
            <p>
              As recentes mudanças no mercado, com a LGPD, Open Finance e
              trabalho remoto, têm exigido um novo patamar de segurança às
              empresas. As soluções de integração de sistemas disponíveis no
              mercado não protegem completamente os dados trafegados por APIs e,
              por isso, o seu negócio pode ficar mais vulnerável aos ataques.
              <br />
              <br />
              Proteja os dados e informações da sua empresa com as duas camadas
              de segurança da plataforma DevApi:
            </p>

            <S.LayerContainer>
              <S.LayerImage>
                <img src="/images/layer.png" />
              </S.LayerImage>
              <S.LayersColumn>
                <b>1ª Camada</b>
                <br />
                <br />
                <p>
                  WAF, que fornece proteção na entrada de dados da plataforma,
                  além de um balanceador de carga.
                </p>

                <br />
                <br />
                <br />
                <br />

                <b>2ª Camada</b>
                <br />
                <br />
                <p>
                  Middleware de Segurança Heimdall, um módulo exclusivo que
                  identifica qualquer tentativa de ameaça à plataforma e aos
                  nossos clientes, analisando todas as informações trafegadas
                  nas requisições feitas.
                </p>
                <p>
                  Possui um dashboard com mapa das ameaças registradas e
                  relatório que pode ser utilizado para medidas judiciais contra
                  crimes cibernéticos, uma vez que armazena IP, Latitude,
                  Provedor de Internet, Data e Hora de todas as tentativas de
                  invasão/ameaças.
                </p>
                <p>
                  Além disso, nossa equipe é especialista no Padrão de
                  Desenvolvimento Seguro (PDS), uma forma de garantir mais
                  segurança, mais qualidade e maior disponibilidade de um
                  produto.
                </p>
              </S.LayersColumn>
            </S.LayerContainer>
          </S.JoinNowContainer>

          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Proteja os dados críticos da sua empresa e obtenha total{' '}
              <b>visibilidade e controle tanto na nuvem como on-premise!</b>
            </h2>

            <S.ButtonContainer>
              <ButtonLink
                text="Consulte um especialista!"
                href="/converse-com-especialista"
                target="_self"
                size="default"
                type="default"
              />
            </S.ButtonContainer>
          </S.JoinNowContainer>
        </S.TransformContainer>
        <ProfessionalService></ProfessionalService>
      </S.Content>
    </>
  )
}

export default Home
