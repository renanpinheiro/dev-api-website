import React from 'react'

import { ButtonLink } from '../ButtonLink'
import * as S from './CallToAction.style'

const CallToAction = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <hr />
          <h3>
            Solicite uma <b>demonstração agora!</b>
          </h3>
        </S.Title>
        <ButtonLink
          text="Converse com um especialista"
          href="/converse-com-especialista"
          target="_self"
          type="default"
          size="default"
        />
      </S.Wrapper>
    </S.Container>
  )
}

export { CallToAction }
