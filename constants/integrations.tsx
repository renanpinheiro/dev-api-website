import React from 'react'
import * as S from '../styles/characteristics'

export const integrations = [
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Crie um conector personalizado ou{' '}
          <b>utilize um dos mais de 300 já existentes</b>
        </h2>
      </>
    ),
    text: 'Seja utilizando os conectores pré-configurados, importando ou criando seus conectores personalizados, você integra com total segurança as mais diversas aplicações e bancos de dados em poucos minutos.',
    urlGif: '/gifs/integration-1.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Crie integrações <b>até 75% mais rápido</b>
        </h2>
      </>
    ),
    text: 'Utilize a nossa plataforma no-code para criar integrações ágeis, através de uma interface simples e intuitiva de arrastar e soltar, sem precisar escrever uma linha de código.',
    urlGif: '/gifs/integration-2.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Versatilidade para <b>criar integrações complexas</b>
        </h2>
      </>
    ),
    text: 'Em nossa plataforma high-code você não precisa se preocupar com as configurações do ambiente de desenvolvimento: toda a estrutura de pastas, conectores e configuração de deploy já estão prontas, basta construir sua lógica entre os conectores.',
    urlGif: '/gifs/integration-3.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          <b>Automatize as integrações</b> através de eventos inteligentes
        </h2>
      </>
    ),
    text: 'Com a DevApi você pode criar rotinas para automatizar e criar padrões de execução das integrações conforme as regras de negócio da sua empresa.',
    urlGif: '/gifs/integration-4.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Dashboards completos e <b> gestão centralizada em tempo real</b>
        </h2>
      </>
    ),
    text: 'Obtenha uma visão completa e centralizada das suas APIs e integrações, visualize o número total de requisições, chamadas por conector e tenant, log de erros e muito mais!',
    urlGif: '/gifs/integration-5.gif',
  },
]
