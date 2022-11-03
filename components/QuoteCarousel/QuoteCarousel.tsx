import React from 'react'

import * as S from './QuoteCarousel.styles'
import dynamic from 'next/dynamic'

// import OwlCarousel from '@ntegral/react-owl-carousel'
const OwlCarousel = dynamic(import('@ntegral/react-owl-carousel'), {
  ssr: false,
})

const QuoteCarousel = ({ quotes }) => {
  return (
    <S.Container>
      <S.FeaturesContainer>
        <S.Pipe />
        <h2>Depoimentos</h2>
        <p>
          Nossos clientes fazem questão de deixarem seus feedbacks com relação a
          exelência do nosso trabalho
        </p>
      </S.FeaturesContainer>
      <S.QuoteContainer>
        <OwlCarousel
          loop
          autoplay
          autoplaySpeed={10000}
          autoplayTimeout={10000}
          margin={90}
          responsive={{
            200: {
              margin: 20,
              items: 1,
            },
            1040: {
              items: 3,
              margin: 60,
            },
          }}
        >
          {quotes.map((item, index) => {
            return (
              <S.QuoteStructure key={index}>
                <S.Image>
                  <img src={item.imageUrl} alt={item.name} />
                </S.Image>
                <S.Quote>{item.quote}</S.Quote>
                <S.NameContainer>
                  <S.Name>{item.name}</S.Name>
                  <S.Company>{item.company}</S.Company>
                </S.NameContainer>
              </S.QuoteStructure>
            )
          })}
        </OwlCarousel>
      </S.QuoteContainer>
    </S.Container>
  )
}

export { QuoteCarousel }
