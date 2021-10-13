import React from 'react'

import Link from 'next/link'

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
        <Link href="/converse-com-especialista">
          <a title="Converse com um especialista">
            Converse com um especialista
          </a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}

export { CallToAction }
