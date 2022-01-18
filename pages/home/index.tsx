import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { BoxReverse } from '../../components/BoxReverse'
import { ButtonLink } from '../../components/ButtonLink'
import { CompanyBenefits } from '../../components/CompanyBenefits'
import { ListIconCostumer } from '../../components/ListIconCostumer'
import { benefits } from '../../constants/benefits'
import { businessCards } from '../../constants/businessCards'
import { connectors, connectorsMobile } from '../../constants/connectors'
import { costumers } from '../../constants/costumers'
import { featuresCard } from '../../constants/featuresCard'
import { plataformDetails } from '../../constants/plataformDetails'
import { quotes } from '../../constants/quotes'
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
            href="/converse-com-especialista"
            target="_self"
            size="default"
            type="default"
          />
        </S.HeroContent>
        <S.GifContainer>
          <img src="/gifs/ipaas.gif" />
        </S.GifContainer>
      </S.Hero>

      <S.Content>
        <S.PlatformContainer>
          <S.Platform>
            <S.Pipe />
            <h2>
              Plataforma de integração e gestão de APIs.
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

        <S.CarrouselImageContainer>
          <img
            src="/images/connectors-computer.png"
            alt="Connectors Computer"
          />
        </S.CarrouselImageContainer>

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={connectorsMobile}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    Mais de 300 conectores pré-construídos{' '}
                    <b> e prontos para uso </b>
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
                    Mais de 300 conectores pré-construídos{' '}
                    <b> e prontos para uso </b>
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
                        return (
                          <img
                            src={connector.urlImage}
                            key={index}
                            alt={connector.name}
                          />
                        )
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
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              As empresas possuem diversos sistemas{' '}
              <b>que não conversam entre si</b>
            </h2>
            <p>Com o iPaaS e API Manager da DevApi isso acabou!</p>
          </S.JoinNowContainer>

          <S.SystemContainer>
            <S.IPaasContainer>
              <h2>
                <b>iPaaS</b>
              </h2>
              <p>
                Plataforma de Integração de Sistemas como Serviço que agiliza a
                integração entre sistemas, a orquestração de dados e a
                automatização de processos, tanto na nuvem como on-premise. O
                iPaaS da DevApi funciona como um tradutor universal entre todos
                os sistemas, colocando os diferentes softwares para conversar
                entre si.
              </p>
              <S.SystemImageContainer>
                <S.SystemImage src="/images/ipaas.png" alt="iPaas" />
              </S.SystemImageContainer>
            </S.IPaasContainer>
            <S.ApiManagerContainer>
              <h2>
                <b>API Manager</b>
              </h2>
              <p>
                Com o API Manager da DevApi sua empresa pode construir,
                distribuir e gerenciar APIs de maneira veloz e altamente
                escalável, com uma arquitetura ágil, robusta e muito segura.
                Fundamental para desenvolver, monitorar, distribuir e monetizar
                APIs, expandindo o ecossistema entre instituições, clientes,
                fornecedores e parceiros.
              </p>
              <S.SystemImageContainer>
                <S.SystemImage
                  src="/images/api-manager.png"
                  alt="API Manager"
                />
              </S.SystemImageContainer>
            </S.ApiManagerContainer>
          </S.SystemContainer>
        </S.FeaturesContainer>

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
                    <img src={item.icon} alt={item.title} />
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

        <S.Quote>
          <QuoteCarouselWithOutSSR quotes={quotes} />
        </S.Quote>

        <BoxReverse
          hasPipe={true}
          title={
            <S.ContentContainer>
              <h2>
                Metodologia <b>Full Cycle</b>
              </h2>
            </S.ContentContainer>
          }
          content={
            <S.ContentContainer>
              <p>
                Do kickoff à entrega, passando por desenvolvimento, homologação
                e onboarding,<b> você jamais estará sozinho!</b> O resultado é
                mais entregas em menor tempo e com maior qualidade, redução de
                custos, mais transparência e visibilidade do projeto,
                antecipação de problemas e tomadas de decisão mais assertivas.
              </p>

              <p>
                A plataforma iPaaS & API Manager da DevApi é uma{' '}
                <b>
                  {' '}
                  plataforma de integração híbrida (HIP) projetada para
                  simplificar integrações complexas, minimizando o tempo de
                  entrega.{' '}
                </b>{' '}
                Em paralelo, colocamos à sua disposição um time especialista em
                integração de sistemas e APIs, arquitetura, infraestrutura,
                desenvolvimento, segurança, soluções de negócio e customer
                success para apoiar você com foco nas necessidades da sua
                operação.
              </p>

              <p>
                Do início ao fim, estaremos sempre do seu lado. Conte com a
                gente:{' '}
                <b>
                  {' '}
                  um time de especialistas ao serviço do sucesso da sua empresa!{' '}
                </b>
              </p>

              <ButtonLink
                text="Conversar com o time!"
                href="/converse-com-especialista"
                target="_self"
                type="default"
                size="default"
                margin="45px 0px 0px 0px"
              />
            </S.ContentContainer>
          }
          image="/images/full-cycle.png"
        />

        <BoxReverse
          flexDirection="row-reverse"
          hasPipe={true}
          title={
            <S.ContentContainer>
              <h2>
                Em 2022, as APIs serão o{' '}
                <b> principal vetor de ataque às empresas</b>
              </h2>
            </S.ContentContainer>
          }
          content={
            <S.ContentContainer>
              <p>
                A segurança da sua empresa começa aqui! As soluções de
                integração disponíveis no mercado não protegem completamente os
                dados trafegados por APIs e, por isso, sua empresa fica
                vulnerável a ataques. Além disso, as recentes mudanças no
                mercado, com a LGPD, Open Finance e trabalho remoto, impõem a
                necessidade de um novo patamar de segurança.
              </p>

              <p>
                <b>
                  {' '}
                  Vai deixar os dados da sua empresa expostos? Garanta a
                  segurança da sua operação!
                </b>{' '}
              </p>

              <ButtonLink
                text="Quero integrações seguras!"
                href="/converse-com-especialista"
                target="_self"
                type="default"
                size="default"
                margin="45px 0px 0px 0px"
              />
            </S.ContentContainer>
          }
          image="/images/lgpd.png"
        />

        <S.SecurityContainer>
          <S.SecurityTextContainer>
            <S.Pipe />
            <h2>
              Conheça a plataforma e integração de sistemas
              <b> mais segura do mercado</b>
            </h2>
            <p>A DevApi conta com três camadas de segurança:</p>
          </S.SecurityTextContainer>
        </S.SecurityContainer>

        <BoxReverse
          hasPipe={false}
          title={
            <S.SecurityContentContainer>
              <h2>
                <b>1° Camada</b>
              </h2>
            </S.SecurityContentContainer>
          }
          content={
            <S.SecurityContentContainer>
              <p>
                Na 1° camada, utilizamos <b>WAF</b>, que fornece proteção na
                entrada de dados da plataforma, além de um balanceador de carga.
              </p>
            </S.SecurityContentContainer>
          }
          image="/images/security.png"
        />

        <BoxReverse
          hasPipe={false}
          flexDirection="row-reverse"
          title={
            <S.SecurityContentContainer>
              <h2>
                <b>2° Camada</b>
              </h2>
            </S.SecurityContentContainer>
          }
          content={
            <S.SecurityContentContainer>
              <p>
                A 2ª camada é o <b>Middleware de Segurança Heimdall</b>, um
                módulo exclusivo cujo nome remete ao deus nórdico que tem a
                missão de guardar a ponte entre céu e a terra. O Heimdall
                identifica qualquer tentativa de ameaça à plataforma e aos
                nossos clientes, analisando todas as informações trafegadas nas
                requisições feitas. Possui um dashboard com mapa das ameaças
                registradas e um relatório que pode ser utilizado para medidas
                judiciais contra crimes cibernéticos, uma vez que armazena IP,
                Latitude, Provedor de Internet, Data e Hora de todas as
                tentativas de invasão/ameaças.
              </p>
            </S.SecurityContentContainer>
          }
          image="/images/heimdal.png"
        />

        <BoxReverse
          hasPipe={false}
          title={
            <S.SecurityContentContainer>
              <h2>
                <b>3° Camada</b>
              </h2>
            </S.SecurityContentContainer>
          }
          content={
            <S.SecurityContentContainer>
              <p>
                A 3ª camada usa a{' '}
                <b>
                  Criptografia AES, da Agência Nacional de Segurança Americana
                  (NSA)
                </b>
                , utilizada na transmissão de dados governamentais e dados
                particulares de saúde, considerada a mais robusta que existe.
                Máxima segurança para a sua empresa!
              </p>
            </S.SecurityContentContainer>
          }
          image="/images/aes.png"
        />

        <S.SecurityContainer>
          <S.SecurityTextContainer>
            <p>
              Além de todas as camadas de segurança, nossa equipe é especialista
              no Padrão de Desenvolvimento Seguro (PDS). Esse padrão é uma forma
              de garantir mais segurança, mais qualidade e maior disponibilidade
              de um produto.{' '}
            </p>
            <p>
              {' '}
              <b>
                Proteja os dados críticos da sua empresa e obtenha total
                visibilidade e controle tanto na nuvem como on-premise!{' '}
              </b>
            </p>

            <ButtonLink
              text="Consulte um especialista!"
              href="/converse-com-especialista"
              target="_self"
              type="default"
              size="default"
              margin="45px 0px 0px 0px"
            />
          </S.SecurityTextContainer>
        </S.SecurityContainer>

        <S.BenefitsContainer>
          <S.CompanyContainer>
            <S.Pipe />
            <h2>
              <b> Com a Plataforma de Integração e Gestão de APIs</b> da DevApi,
              sua empresa vai:
            </h2>
          </S.CompanyContainer>

          {benefits.map((description, index) => (
            <CompanyBenefits description={description} key={index} />
          ))}
        </S.BenefitsContainer>

        <S.UnlockContainer>
          <S.UnlockTextContainer>
            <S.Pipe />
            <h2>
              Encaixe todas as peças da sua operação e
              <b> desbloqueie agora o poder da integração de sistemas</b>
            </h2>

            <ButtonLink
              text="Consulte um especialista!"
              href="/converse-com-especialista"
              target="_self"
              type="default"
              size="default"
            />
          </S.UnlockTextContainer>
        </S.UnlockContainer>
      </S.Content>
    </>
  )
}

export default Home
