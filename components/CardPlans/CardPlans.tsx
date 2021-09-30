import React from 'react'

import { Button } from '../Button'

import * as S from './CardPlan.style'
import { ICardPlanItems } from './CardPlans.interface'

const CardPlans = ({ cards }: { cards: ICardPlanItems[] }) => {
  const hangleStrongNumberText = (text: string) => {
    const splitText = text.split(':')

    return <span>{{ splitText }}</span>
  }
  const handleURL = (url: string) => {
    location.href = url
  }
  return (
    <S.Container>
      <S.CardsContainer>
        {cards.map((item, index) => {
          return (
            <S.Cards key={index}>
              <S.Icon src={item.imageUrl} />
              <S.TextContainer>
                <S.Title>{item.title}</S.Title>
                <S.Text>{item.text}</S.Text>
                <S.MiddleText>{item.middleText}</S.MiddleText>
              </S.TextContainer>
              <S.ButtonContainer>
                <S.SubText>{item.subText}</S.SubText>
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
    </S.Container>
  )
}

export { CardPlans }
