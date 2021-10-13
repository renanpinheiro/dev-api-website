import React from 'react'

import { ButtonLink } from '../ButtonLink'

import { MiddleText } from './MiddleText'

import { ICardPlanItems } from './CardPlans.interface'

import * as S from './CardPlan.style'

const CardPlans = ({ cards }: { cards: ICardPlanItems[] }) => {
  const handleURL = (url: string) => {
    location.href = url
  }

  return (
    <S.CardsContainer>
      {cards.map((item, index) => {
        return (
          <S.Cards key={index}>
            <S.Icon src={item.imageUrl} />
            <S.TextContainer>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.text}</S.Text>
            </S.TextContainer>

            <S.ButtonContainer>
              <S.TextContainer>
                <MiddleText text={item.middleText} />
                <S.SubText>{item.subText}</S.SubText>
              </S.TextContainer>

              <ButtonLink
                text="Fale conosco"
                href="/free-trial"
                target="_self"
                type="default"
                size="large"
              />
            </S.ButtonContainer>
          </S.Cards>
        )
      })}
    </S.CardsContainer>
  )
}

export { CardPlans }
