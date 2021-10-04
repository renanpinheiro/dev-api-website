import React from 'react'
import { Button } from '../Button'

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
        <Button size="default" text="Quero um orçamento!" type="default" />
      </S.ProfessionalServiceText>
    </S.Container>
  )
}

export { ProfessionalService }
