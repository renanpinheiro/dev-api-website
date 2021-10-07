import React from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import api from '../../services/api'

import { Hero } from '../../components/Hero'

import * as S from '../../styles/midia'

interface Midia {
  title: string
  link: string
  image: string
}

interface MidiaProps {
  allMidias: Midia[]
}

const Midias = ({ allMidias }: MidiaProps) => {
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
          {allMidias.map(midia => (
            <S.Card>
              <img src={midia.image} />
              <h3>{midia.title}</h3>
              <S.KnowMoreLink>
                <Link href={midia.link}>
                  <a title="Saiba mais" target="_blank">
                    Saiba mais
                  </a>
                </Link>
              </S.KnowMoreLink>
            </S.Card>
          ))}
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const { data } = await api.get(`/midias`)

  const allMidias = data

  return {
    props: {
      allMidias,
    },
  }
}

export default Midias
