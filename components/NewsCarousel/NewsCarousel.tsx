import React from 'react'

import NewsCard from '../NewsCard'
import { INewsCarouselProps } from './NewsCarousel.interface'
import * as S from './NewsCarousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const NewsCarousel = ({ newsCards }: INewsCarouselProps) => {
  const responsive = [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
      },
    },
  ]

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Pipe />
        <S.Title>
          Últimas notícias <span>e insights</span>
        </S.Title>
      </S.TitleContainer>

      <S.SliderContainer
        className="center"
        centerMode={true}
        centerPadding="75px"
        infinite
        slidesToShow={newsCards.length < 3 ? newsCards.length : 3}
        slidesToScroll={1}
        speed={500}
        autoplay
        autoplaySpeed={8000}
        responsive={responsive}
      >
        {newsCards.map((card, index) => {
          return (
            <S.CardContainer key={index}>
              <S.CardContent>
                <NewsCard newsCards={card} />
              </S.CardContent>
            </S.CardContainer>
          )
        })}
      </S.SliderContainer>
    </S.Container>
  )
}

export { NewsCarousel }
