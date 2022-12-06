import * as S from './Article.style'
import React from 'react'
import Link from 'next/link'

const Article = ({ news }) => {
  return (
    <Link href={`blog/${news.linkId}`}>
      <S.Article>
        <S.ArticleImage>
          <img src={news.imageUrl} alt="news" />
        </S.ArticleImage>
        <S.ArticleTag>Artigo</S.ArticleTag>
        <S.ArticleTitle>{news.title}</S.ArticleTitle>
        <S.ArticleDate>
          <img src="icons/calendar-green.svg" alt="calendar" />
          <p>{news.date}</p>
        </S.ArticleDate>
      </S.Article>
    </Link>
  )
}

export { Article }
