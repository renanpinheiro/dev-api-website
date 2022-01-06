import React from 'react'

import * as S from './IntegrationCard.style'

import { IIntegrationCard } from './IntegrationCard.interface'

const IntegrationCard = ({ imageLeft, imageRight }: IIntegrationCard) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.ConnectorImage src={imageLeft}></S.ConnectorImage>
      </S.ImageContainer>
      <S.ConnectorContainer>
        <S.BallContainer>
          <S.LittleBallImage src="/images/littleball-left.svg"></S.LittleBallImage>
        </S.BallContainer>
        <S.ContainerDevApiLogo>
          <S.DevApiLogoImage src="/images/mini-devapi.svg"></S.DevApiLogoImage>
        </S.ContainerDevApiLogo>
        <S.BallContainer>
          <S.LittleBallImage src="/images/littleball-right.svg"></S.LittleBallImage>
        </S.BallContainer>
      </S.ConnectorContainer>
      <S.ImageContainer>
        <S.ConnectorImage src={imageRight}></S.ConnectorImage>
      </S.ImageContainer>
    </S.Container>
  )
}

export { IntegrationCard }
