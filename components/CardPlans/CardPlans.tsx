import React from 'react'

import { Button } from '../Button'

import * as S from './CardPlan.style'
import { ICardPlanItems } from './CardPlans.interface'
import { MiddleText } from './MiddleText'
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
              <Button
                onClick={() => handleURL(item.url)}
                text={item.buttonText}
                type="default"
                size="default"
              />
            </S.ButtonContainer>
          </S.Cards>
        )
      })}
    </S.CardsContainer>
  )
}

export { CardPlans }
