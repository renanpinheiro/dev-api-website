import React from 'react'

import {
  IFindArticlesRelated,
  IFindPopularPosts,
  IFindResponse,
} from '../../providers/blog/shared.interface'
import * as S from '../../styles/blog'
import { convertDate } from '../../utils/formatter'

export const handlePosts = (posts: IFindResponse[]) => {
  return posts.map(post => {
    return {
      imageUrl: post.images.medium,
      title: post.title,
      short_text: post.short_text,
      text: post.text,
      newsType: post.type,
      date: convertDate(post.createt_at).withMonth,
      id: post.id,
      linkId: post.link_id,
      type: post.type,
      author: post.author,
      articles_related: post.articles_related,
      tag: post.tag,
    }
  })
}

export const handleCarouselPosts = (posts: IFindResponse[]) => {
  return posts.map(post => {
    return {
      interval: 8000,
      component: (
        <S.ImageCarouselItems>
          <S.Image>
            <img src={post.images.big} />
          </S.Image>
          <S.ImageHeaderContainer>
            <S.CaseType>{post.type}</S.CaseType>
            <S.Title>{post.title}</S.Title>
            <S.Pipe />
            <S.SidebarCotainer>
              <S.User>
                <img src="icons/user.svg" alt="user" />
                <p>{post.author}</p>
              </S.User>
              <S.Date>
                <img src="icons/calendar.svg" alt="calendar" />
                <p>{convertDate(post.createt_at).withMonth}</p>
              </S.Date>
            </S.SidebarCotainer>
          </S.ImageHeaderContainer>
        </S.ImageCarouselItems>
      ),
    }
  })
}

export const handlePopularPosts = (posts: IFindPopularPosts[]) => {
  return posts.map(post => ({
    urlImage: post.images.small,
    text: post.text,
    newsType: post.type,
    date: convertDate(post.createt_at).withMonth,
    linkId: post.link_id,
  }))
}

export const handlePostDetails = (post: IFindResponse) => {
  return {
    id: post.id,
    linkId: post.link_id,
    title: post.title,
    images: post.images,
    text: post.text,
    shortText: post.short_text,
    type: post.type,
    author: post.author,
    articlesRelated: post.articles_related,
    tag: post.tag,
    createt_at: post.createt_at,
  }
}

export const handleHeaderImage = (post: IFindResponse) => {
  return {
    interval: 8000,
    component: (
      <S.ImageCarouselItems>
        <S.Image>
          <img src={post.images.big} />
        </S.Image>
        <S.ImageHeaderContainer>
          <S.CaseType>{post.type}</S.CaseType>
          <S.Title>{post.title}</S.Title>
          <S.Pipe />
          <S.SidebarCotainer>
            <S.User>
              <img src="/icons/user.svg" alt="user" />
              <p>{post.author}</p>
            </S.User>
            <S.Date>
              <img src="/icons/calendar.svg" alt="calendar" />
              <p>{convertDate(post.createt_at).withMonth}</p>
            </S.Date>
          </S.SidebarCotainer>
        </S.ImageHeaderContainer>
      </S.ImageCarouselItems>
    ),
  }
}

export const handlePostsCarousel = (articles: IFindArticlesRelated[]) => {
  return articles.map(article => ({
    imageUrl: article.images.medium,
    title: article.title,
    text: article.short_text,
    newsType: article.type,
    date: convertDate(article.createt_at).withMonth,
    linkId: article.link_id,
  }))
}
