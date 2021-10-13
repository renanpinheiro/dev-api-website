import React from 'react'

import Link from 'next/link'

import { INewsCardProps } from './NewsCard.interface'

import marked from 'marked'

import * as S from './NewsCard.style'

const NewsCard = ({
  newsCards,
  padding,
  gridColum,
  gridRow,
}: INewsCardProps) => {
  return (
    <S.Container padding={padding}>
      <Link href={`blog/${newsCards.linkId}`}>
        <a>
          <S.Grid gridColum={gridColum} gridRow={gridRow}>
            <S.Image>
              <img src={newsCards.imageUrl} alt="news" />
            </S.Image>
            <S.TextContainer>
              <S.Pipe />

              <S.Title>{newsCards.title}</S.Title>
              <br />
              <S.Text
                dangerouslySetInnerHTML={{
                  __html: marked(newsCards.short_text),
                }}
              />
            </S.TextContainer>
            <S.SidebarCotainer>
              <S.Newspaper>
                <img src="icons/newspaper.svg" alt="newspaper" />
                <p>{newsCards.newsType}</p>
              </S.Newspaper>
              <S.Date>
                <img src="icons/user.svg" alt="calendar" />
                <p>{newsCards.author}</p>
              </S.Date>
              <S.Date>
                <img src="icons/calendar.svg" alt="calendar" />
                <p>{newsCards.date}</p>
              </S.Date>
            </S.SidebarCotainer>
            <S.ButtonContainer>
              <img src="icons/arrow.svg" alt="arrow" />
            </S.ButtonContainer>
          </S.Grid>
        </a>
      </Link>
    </S.Container>
  )
}

export { NewsCard }
