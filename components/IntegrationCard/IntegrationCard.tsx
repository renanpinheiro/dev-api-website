import React from 'react'

import { IIntegrationCard } from './IntegrationCard.interface'
import * as S from './IntegrationCard.style'

const IntegrationCard = ({ imageLeft, imageRight }: IIntegrationCard) => {
  const balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ConnectorImage src={imageLeft}></S.ConnectorImage>
      </S.ImageContainer>
      <S.BallContainer>
        {balls.map(() => {
          return <S.Balls></S.Balls>
        })}

        <S.ContainerDevApiLogo>
          <S.DevApiLogoImage src="/images/mini-devapi.svg"></S.DevApiLogoImage>
        </S.ContainerDevApiLogo>
      </S.BallContainer>
      <S.ImageContainer>
        <S.ConnectorImage src={imageRight}></S.ConnectorImage>
      </S.ImageContainer>
    </S.Container>
  )
}

export { IntegrationCard }
