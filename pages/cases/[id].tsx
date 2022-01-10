import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Router, { useRouter } from 'next/router'

import { Button } from '../../components/Button'
import { CaseDetailsList } from '../../components/CaseDetailsList'
import { Hero } from '../../components/Hero'
import { findCasesById } from '../../providers/cases/find'
import * as S from '../../styles/cases'

const CaseDetails = () => {
  const router = useRouter()
  const routerId = router.asPath
  const [splitId] = routerId.split('?')
  const [, , currentId] = splitId.split('/')
  const [titleCase, setTitleCase] = useState('')
  const [shortTextCase, setShortTextCase] = useState('')
  const [imageCase, setImagetCase] = useState('')
  const [aboutCase, setaboutCase] = useState('')
  const [challengeCase, setchallengeCase] = useState('')
  const [objectiveCase, setObjectiveCase] = useState('')
  const [solutionCase, setSolutionCase] = useState('')
  const [resultCase, setResultCase] = useState('')
  const [seoTitleCase, setSeoTitleCase] = useState('')
  const [seoDescriptionCase, setSeoDescriptionCase] = useState('')

  const handleRoputerAnchor = (anchor: string) => {
    Router.push(anchor)
  }
  const handleRouterTalk = () => {
    Router.push('/converse-com-especialista')
  }
  const handleFindCasesById = async (link_id: string) => {
    const { data } = await findCasesById(link_id)
    if (data) {
      setTitleCase(data.title)
      setShortTextCase(data.short_text)
      setImagetCase(data.image_main)
      setaboutCase(data.about_text)
      setchallengeCase(data.challenge_text)
      setObjectiveCase(data.objective_text)
      setSolutionCase(data.solution_text)
      setResultCase(data.result_text)
      setSeoDescriptionCase(data.seo.meta_description)
      setSeoTitleCase(data.seo.meta_title)
    }
  }

  useEffect(() => {
    if (router.isReady) handleFindCasesById(currentId)
  }, [currentId])

  return (
    <>
      <Head>
        <title>{setSeoTitleCase}</title>
        <meta name="description" content={seoDescriptionCase} />
        <meta property="og:title" key="title" content={seoTitleCase} />
        <meta
          property="og:description"
          key="description"
          content={seoDescriptionCase}
        />
      </Head>
      <Hero>
        <S.HeroColumns>
          <S.HeroContentDetails>
            <S.Pipe />
            <h1>
              <b>{titleCase}</b>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: shortTextCase }} />

            <Button
              type="default"
              size="small"
              text="Conheça essa história"
              onClick={() => handleRoputerAnchor('#cases')}
            />
          </S.HeroContentDetails>
          <S.HeroContentImage>
            <img src={imageCase} alt={titleCase} />
          </S.HeroContentImage>
        </S.HeroColumns>
      </Hero>
      <S.Container id="cases">
        <S.DatailsListContainer>
          <CaseDetailsList title="Sobre" detail={aboutCase} border="true" />

          <CaseDetailsList
            title="Desafio"
            detail={challengeCase}
            border="true"
          />

          <CaseDetailsList
            title="Objetivo"
            detail={objectiveCase}
            border="true"
          />

          <CaseDetailsList
            title="Solução"
            detail={solutionCase}
            border="true"
          />

          <CaseDetailsList
            title="Resultado"
            detail={resultCase}
            border="false"
          />
        </S.DatailsListContainer>

        <S.HistorySuccessContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.HistorySuccessTitle>
            Venha construir sua <span>história de sucesso</span>
          </S.HistorySuccessTitle>
          <S.ButtonContainer>
            <Button
              type="default"
              text="Quero ser um case!"
              size="small"
              onClick={() => handleRouterTalk()}
            />
          </S.ButtonContainer>
        </S.HistorySuccessContainer>
      </S.Container>
    </>
  )
}
export default CaseDetails
