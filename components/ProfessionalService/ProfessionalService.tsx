import React from 'react'

import { ButtonLink } from '../ButtonLink'
import * as S from './ProfessionalService.style'

const ProfessionalService = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src="/logo/professional-service.svg" alt="professional-service" />
      </S.ImageContainer>

      <S.ProfessionalServiceText>
        <h2>Professional Services</h2>
        <b>Tenha um time de especialistas dedicado ao seu negócio!</b>
        <p>
          A DevApi é composta por profissionais especializados no
          desenvolvimento de integrações e APIs, de forma a maximizar os
          resultados de nossos parceiros e clientes.
        </p>
        <ButtonLink
          text="Quero um orçamento!"
          href="/converse-com-especialista"
          target="_self"
          size="default"
          type="default"
        />
      </S.ProfessionalServiceText>
    </S.Container>
  )
}

export { ProfessionalService }
