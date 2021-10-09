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
        <S.Pipe />
        <h2>
          <span>Professional Services,</span> um time de especialistas dedicado
          ao seu negócio
        </h2>
        <p>
          A DevApi é composta por profissionais especializados no
          desenvolvimento de integrações e APIs, de forma a maximizar os
          resultados de nossos parceiros e clientes.
        </p>
        <S.CheckContainer>
          <img src="/icons/circle-check.svg" alt="check" />
          <p>
            Uma equipe de alta performance ao serviço do sucesso da sua empresa!
          </p>
        </S.CheckContainer>
        <ButtonLink
          text="Quero um orçamento!"
          href="/free-trial"
          target="_self"
          size="default"
          type="default"
        />
      </S.ProfessionalServiceText>
    </S.Container>
  )
}

export { ProfessionalService }
