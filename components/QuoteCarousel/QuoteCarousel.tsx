import React, { useState } from 'react'

import * as S from './QuoteCarousel.styles'

const QuoteCarousel = ({ quotes }) => {
  const [quote, setQuote] = useState<number>(0)
  const [fade, setFade] = useState(false)

  const handlePreviousQuote = () => {
    setFade(true)
    const hasFinished = quote === 0

    hasFinished ? setQuote(quotes.length - 1) : setQuote(quote - 1)

    setInterval(() => {
      setFade(false)
    }, 3000)
  }

  const handleNextQuote = () => {
    setFade(true)

    const hasFinished = quote >= quotes.length - 1
    hasFinished ? setQuote(0) : setQuote(quote + 1)

    setInterval(() => {
      setFade(false)
    }, 3000)
  }

  return (
    <S.Container>
      <S.QuoteContainer>
        <S.IconContainer>
          <S.Icon
            fade={fade}
            src={quotes[quote].imageUrl}
            alt={quotes[quote].name}
          />
        </S.IconContainer>

        <S.QuoteTexts>
          <S.LeftQuotationMark
            src="/quotes/left-quote-mark.svg"
            alt="left-quote"
          />
          <S.Quote fade={fade}>{quotes[quote].quote}</S.Quote>
          <S.Name fade={fade}>
            {quotes[quote].name}, {quotes[quote].occupation} |{' '}
            {quotes[quote].company}
          </S.Name>
          <S.RightQuotationMark
            src="/quotes/right-quote-mark.svg"
            alt="right-quote"
          />
        </S.QuoteTexts>
        <S.QuoteButtonContainer>
          <S.QuoteButton onClick={handlePreviousQuote}>
            <S.QuoteImageButton src="/quotes/left-arrow.svg" alt="arrow" />
          </S.QuoteButton>
          <S.QuoteSpanContainer>
            {quotes.map((item, quoteIndex) => {
              const isActive = quoteIndex === quote
              return <S.QuoteSpan isActive={isActive} />
            })}
          </S.QuoteSpanContainer>
          <S.QuoteButton onClick={handleNextQuote}>
            <S.QuoteImageButton src="/quotes/right-arrow.svg" alt="arrow" />
          </S.QuoteButton>
        </S.QuoteButtonContainer>
      </S.QuoteContainer>
    </S.Container>
  )
}

export { QuoteCarousel }
