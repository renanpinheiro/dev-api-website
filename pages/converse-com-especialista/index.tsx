import React, { useRef, useEffect } from 'react'

import Head from 'next/head'

import { Button } from '../../components/Button'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/speakExpert'

const SpeakExpert = () => {
  const formRef = useRef(null)

  const executeScroll = () => formRef.current.scrollIntoView()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>DevApi | Converse com um especialista</title>
        <meta
          property="og:title"
          content="Nosso time de especialistas está pronto para te ajudar com a nossa plataforma. Envie uma mensagem que responderemos o mais rápido possível!"
          key="title"
        />
        <meta
          name="description"
          content="Nosso time de especialistas está pronto para te ajudar com a nossa plataforma. Envie uma mensagem que responderemos o mais rápido possível!"
        />
        <meta
          property="og:description"
          content="Nosso time de especialistas está pronto para te ajudar com a nossa plataforma. Envie uma mensagem que responderemos o mais rápido possível!"
          key="description"
        />
        <meta
          property="og:url"
          content="https://www.devapi.com.br/converse-com-especialista"
        />
        <link
          rel="canonical"
          href="https://www.devapi.com.br/converse-com-especialista"
        />
      </Head>

      <Hero>
        <S.HeroContainer>
          <S.Pipe />
          <h1>
            Vamos desbloquear o poder da <b>integração de sistemas?</b>
          </h1>

          <p>
            Agende uma conversa com um de nossos especialistas em Integrações e
            APIs.
          </p>

          <Button
            text="Agendar conversa!"
            size="default"
            type="default"
            onClick={executeScroll}
          />
        </S.HeroContainer>
      </Hero>

      <S.Content ref={formRef}>
        <S.Wrapper>
          <S.Title>
            <hr />
            <h2>
              Escolha a melhor <b>data e horário</b>
            </h2>
          </S.Title>

          <S.Scheduling>
            <div
              className="meetings-iframe-container"
              data-src="https://meetings.hubspot.com/michel-carnevali/agendamento?embed=true"
            ></div>
          </S.Scheduling>
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export default SpeakExpert
