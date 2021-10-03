import React from 'react'

import Link from 'next/link'

import * as S from './CallToAction.style'

const CallToAction = () => {
  return (
    <S.Container>
      <S.Warp>
        <S.Title>
          <hr />
          <h3>
            Quer testar a DevApi <b>gratuitamente?</b>
          </h3>
        </S.Title>
        <Link href="/free-trial">
          <a title="Converse com um especialista">
            Converse com um especialista
          </a>
        </Link>
      </S.Warp>
    </S.Container>
  )
}

export { CallToAction }
