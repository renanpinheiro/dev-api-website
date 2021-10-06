import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { Hero } from '../../components/Hero'

import * as S from '../../styles/midia'

const Midia = () => {
  return (
    <>
      <Head>
        <title>DevApi na mídia | DevApi</title>
      </Head>

      <Hero>
        <S.HeroContainer>
          <S.Pipe />
          <h1>
            <span>DevApi</span> na mídia
          </h1>
          <p>
            Saiba como a DevApi tem sido destaque em grandes portais de
            comunicação e fique por dentro das últimas atualizações do mundo das
            integrações.
          </p>
        </S.HeroContainer>
      </Hero>

      <S.Content>
        <S.Wrapper>
          <S.Card>
            <img
              src="http://www.aintec.com.br/wp-content/uploads/2015/10/img-lg.jpg"
              title="Gazeta do Povo"
            />
            <h3>Um raio-x do ecossistema de inovação no Paraná</h3>

            <S.CardFooter>
              <Link href="">
                <a title="Saiba mais">Saiba mais</a>
              </Link>
            </S.CardFooter>
          </S.Card>

          <S.Card>
            <img
              src="http://www.aintec.com.br/wp-content/uploads/2015/10/img-lg.jpg"
              title="Gazeta do Povo"
            />
            <h3>
              DevApi pretende aumentar a captação de leads no dashboard em até
              39,5%
            </h3>

            <S.CardFooter>
              <Link href="">
                <a title="Saiba mais">Saiba mais</a>
              </Link>
            </S.CardFooter>
          </S.Card>

          <S.Card>
            <img
              src="http://www.aintec.com.br/wp-content/uploads/2015/10/img-lg.jpg"
              title="Gazeta do Povo"
            />
            <h3>
              Como as startups brasileiras estão lidando com os desafios de
              adequação à LGPD
            </h3>

            <S.CardFooter>
              <Link href="">
                <a title="Saiba mais">Saiba mais</a>
              </Link>
            </S.CardFooter>
          </S.Card>
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export default Midia
