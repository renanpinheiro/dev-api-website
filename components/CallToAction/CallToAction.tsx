import React from 'react'

import Link from 'next/link'

import { ButtonLink } from '../ButtonLink'

import * as S from './CallToAction.style'

const CallToAction = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <hr />
          <h3>
            Quer testar a DevApi <b>gratuitamente?</b>
          </h3>
        </S.Title>
        <ButtonLink
          text="Converse com um especialista"
          href="/converse-com-especialista"
          target="_self"
          type="default"
          size="small"
        />
      </S.Wrapper>
    </S.Container>
  )
}

export { CallToAction }
