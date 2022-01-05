import React from "react";
import Head from 'next/head'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/cases'
import {CardCase} from '../../components/CardCase'
import {cases} from '../../constants/cases'
const Cases =()=>{
    return (<>
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
           História de <b>Sucesso</b>
          </h1>
          <p>
          Conheça algumas das nossas histórias de sucesso
          </p>
        </S.HeroContent>
      </Hero>
      <S.Container>
       <CardCase cases={cases} />
          
      </S.Container>
    </>)

}
export default Cases