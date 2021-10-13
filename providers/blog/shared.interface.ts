/* eslint-disable camelcase */
export interface IFindResponse {
  id: string
  link_id: string
  title: string
  images: IFindImagesResponse
  text: string
  short_text: string
  type: string
  author: string
  articles_related: IFindArticlesRelated[]
  tag: IFindTagResponse[]
  createt_at: string
}

export interface IFindArticlesRelated {
  id: string
  title: string
  short_text: string
  link_id: string
  type: string
  images: IFindImagesResponse
  tag: IFindTagResponse[]
  author: string
  createt_at: string
}

export interface IFindTagResponse {
  id: string
  name: string
}

export interface IFindImagesResponse {
  small: string
  medium: string
  big: string
}

export interface IFindCasesResponse {
  title: string
  createt_at: string
}

export interface IFindPopularPosts {
  id: string
  link_id: string
  title: string
  images: IFindImagesResponse
  text: string
  type: string
  author: string
  createt_at: string
}
