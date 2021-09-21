import React from 'react'

import DevninjasLogo from '../../static/images/logo.svg'
import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <DevninjasLogo />
      </S.Logo>

      <S.Title>NextJs Website Starter</S.Title>
      <S.Description>
        A starter for creating websites using NextJs.
      </S.Description>
    </S.Container>
  )
}

export default Main
