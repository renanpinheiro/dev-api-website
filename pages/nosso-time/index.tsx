import React from 'react'

import Head from 'next/head'

import { Hero } from '../../components/Hero'
import * as S from '../../styles/about'

const About = () => {
  return (
    <>
      <Head>
        <title>Nosso time | DevApi</title>
      </Head>

      <Hero minHeight={40} maxHeight={65}>
        <S.HeroContainer>
          <S.Pipe />
          <h1>
            <span>Nosso</span> time
          </h1>
        </S.HeroContainer>
      </Hero>

      <S.Content>
        <S.Wrapper>
          <img src="/static/images/about-connect.svg" alt="DevApi Connect" />

          <S.Title>
            <hr />
            <h2>
              Como nasceu <b>a DevApi?</b>
            </h2>
          </S.Title>

          <S.Text>
            <p>
              A Plataforma global DevApi foi criada pelos seus founders e
              desenvolvida a partir de insights internos para otimizar tempo e
              rentabilidade financeira nas integrações que são traumáticas hoje
              no mercado. Trazendo dessa maneira custos menores, mitigando erros
              e agilizando processos morosos e de alta complexidade.
            </p>
            <p>
              Nosso propósito é revolucionar experiências em integração e APIs.
              Toda a plataforma roda em cloud, em modelo SaaS. A DevApi é um
              produto tech, feito de Dev para Dev!
            </p>
          </S.Text>
        </S.Wrapper>

        <S.Wrapper>
          <S.Title>
            <hr />
            <h2>
              <b>Founders</b>
            </h2>
          </S.Title>

          <S.Founders>
            <S.Card>
              <img src="/static/images/william-cto.png" />
              <b>William Hoffmann</b>
              <span>Chief Technology Officer</span>
              <hr />
            </S.Card>
            <S.Card>
              <img src="/static/images/Luana-ceo.png" />
              <b>Luana Ribeiro</b>
              <span>Chief Executive Officer</span>
              <hr />
            </S.Card>
          </S.Founders>
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export default About
