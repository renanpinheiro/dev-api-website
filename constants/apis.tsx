import React from 'react'

import * as S from '../styles/apiManagement'

export const apis = [
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          API <b>Management</b>
        </h2>
      </>
    ),
    text: 'Crie integrações robustas com arquitetura flexível e segura, utilizando os mais de 300 conectores pré-configurados disponíveis, importando ou criando seus conectores personalizados. Centralize as integrações e gerencie suas APIs em uma única plataforma!',
    urlGif: '/gifs/API-1.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          APIs <b>personalizáveis</b>
        </h2>
      </>
    ),
    text: 'Desenvolva APIs que atendam totalmente às suas necessidades! Com a nossa plataforma high-code você cria soluções flexíveis segundo o seu padrão de arquitetura e estrutura de endpoints, fazendo o deploy da sua integração com apenas um clique.',
    urlGif: '/gifs/API-2.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Crie <b>políticas de acesso</b>
        </h2>
      </>
    ),
    text: 'Com a DevApi você pode criar grupos e políticas de acesso às suas APIs. Através de tokens de autenticação de usuários é possível criar acessos personalizados para cada tipo de colaborador. Em caso de acesso indevido, você recebe informações com data, IP e geolocalização.',
    urlGif: '/gifs/API-3.gif',
  },
  {
    title: (
      <>
        <S.Pipe />
        <h2>
          Visão <b> 360° das APIs</b>
        </h2>
      </>
    ),
    text: 'Tenha uma visão completa das suas APIs em tempo real, visualize número total de requisições, número de chamadas por endpoint, tenant, log de erros e muito mais!',
    urlGif: '/gifs/API-4.gif',
  },
]
