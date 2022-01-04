import React from 'react'
import { IQuotesCarouselProps } from './Quote.interface'

import * as S from './QuoteCarousel.styles'

const QuoteCarousel = ({ quotes }: IQuotesCarouselProps) => {
  return (
    <S.Container>
      <S.QuoteContainer>
        {quotes.map((card, index) => {
          return (
            <React.Fragment key={index}>
              <S.IconContainer>
                <S.CircleDetail />
                <S.Icon src={card.imageUrl} alt={card.name} />
              </S.IconContainer>
              <S.QuoteTexts>
                <S.LeftQuotationMark
                  src="/quotes/left-quote-mark.svg"
                  alt={''}
                />
                <S.Quote>{card.quote}</S.Quote>
                <S.Name>
                  {card.name}, {card.occupation} | {card.company}
                </S.Name>
                <S.RightQuotationMark
                  src="/quotes/right-quote-mark.svg"
                  alt={''}
                />
              </S.QuoteTexts>
              <S.QuoteButtonContainer>
                <S.QuoteButton>
                  <img src="/quotes/left-arrow.svg" alt="arrow" />
                </S.QuoteButton>
                <S.QuoteSpanContainer>
                  <S.QuoteSpan />
                </S.QuoteSpanContainer>
                <S.QuoteButton>
                  <img src="/quotes/right-arrow.svg" alt="arrow" />
                </S.QuoteButton>
              </S.QuoteButtonContainer>
            </React.Fragment>
          )
        })}
      </S.QuoteContainer>
    </S.Container>
  )
}

export { QuoteCarousel }
