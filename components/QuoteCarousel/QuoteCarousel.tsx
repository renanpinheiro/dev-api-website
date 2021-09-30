import React from 'react'
import { IQuotesCarouselProps } from './QuoteCarousel.interface'

import * as S from './QuoteCarousel.styles'

const QuoteCarousel = ({ quotes }: IQuotesCarouselProps) => {
  return (
    <S.Container>
      <S.Carrousel
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={1}
        className="center"
        centerMode={true}
        infinite={true}
        centerPadding="90px"
        autoplay={true}
        autoplaySpeed={5000}
        speed={500}
      >
        {quotes.map((card, index) => {
          return (
            <S.QuoteContainer key={index}>
              <S.IconContainer>
                <S.CircleDetail />
                <S.Icon src={card.imageUrl} />
              </S.IconContainer>
              <S.QuoteTexts>
                <S.QuotationMark src="/quotes/quote-mark.svg" />
                <S.Quote>{card.quote}</S.Quote>
                <S.Name>{card.name}</S.Name>
              </S.QuoteTexts>
            </S.QuoteContainer>
          )
        })}
      </S.Carrousel>
    </S.Container>
  )
}

export { QuoteCarousel }
