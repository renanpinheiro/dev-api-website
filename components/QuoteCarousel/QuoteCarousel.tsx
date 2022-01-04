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
                <S.ButtonContainer>
                  <button />
                  <button />
                </S.ButtonContainer>
              </React.Fragment>
            )
          })}
        </S.QuoteContainer>
      </S.Carrousel>
    </S.Container>
  )
}

export { QuoteCarousel }
