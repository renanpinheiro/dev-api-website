import React, { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Router from 'next/router'

import { handleCases } from '../../adapters/blog/handleCases'
import {
  handleCarouselPosts,
  handlePopularPosts,
  handlePosts,
} from '../../adapters/blog/handlePosts'
import { ImageCarousel } from '../../components/ImageCarousel'
import { Sidebar } from '../../components/Sidebar'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import {
  findCases,
  findPopularPosts,
  findPost,
  findTags,
} from '../../providers/blog/find'
import * as S from '../../styles/blog'
import { Article } from '../../components/Blog/Article'
import { Col, Container, Row } from 'react-bootstrap'

const CarrouselWithOutSSR = dynamic(
  () => import('../../components/Blog/Carrousel'),
  {
    ssr: false,
  },
)

const NewsCardWithOutSSR = dynamic(() => import('../../components/NewsCard'), {
  ssr: false,
})

const Blog = () => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 700

  const INTERVAL = 8000

  const [search, setSearch] = useState('')
  const [news, setNews] = useState([])
  const [newsImages, setNewsImages] = useState([])
  const [tags, setTags] = useState([])
  const [cases, setCases] = useState([])
  const [popularArticles, setPopularArticles] = useState([])
  const [searchTag, setSearchTag] = useState('')
  const [pagination, setPagination] = useState(0)

  useEffect(() => {
    handleFindPosts()
  }, [search, searchTag])

  useEffect(() => {
    handleFindTags()
    handleFindCases()
    handleFindPopularPosts()
  }, [])

  const handleFindPosts = async () => {
    const { data } = await findPost(search, searchTag, pagination)
    const posts = handlePosts(data)
    setNews(posts)

    const carouselPosts = handleCarouselPosts(data)
    setNewsImages(carouselPosts)
  }

  const handleFindTags = async () => {
    const { data } = await findTags()

    setTags(data)
  }

  const handleFindCases = async () => {
    const { data } = await findCases()
    const cases = handleCases(data)
    setCases(cases)
  }

  const handleFindPopularPosts = async () => {
    const { data } = await findPopularPosts()
    const popularPosts = handlePopularPosts(data)
    setPopularArticles(popularPosts)
  }

  const handleClickTag = (tagId: string) => {
    setSearchTag(tagId)
  }
  const handleClickTagName = (tagName: string) => {
    const value = tags.find(tag => tag.name === tagName)
    if (value) {
      setSearchTag(value.id)
    }
  }

  const handleClickNews = url => {
    Router.push(`/blog/${url}`)
  }

  const handlePagination = async () => {
    const page = pagination + 5
    setPagination(page)
    const { data } = await findPost(search, searchTag, page)
    const posts = handlePosts(data)
    news.push(...posts)
  }

  return (
    <>
      <Head>
        <title>DevApi | Blog</title>
        <meta property="description" content="Mantenha-se atualizado!" />
        <link rel="canonical" href="https://www.devapi.com.br/blog" />
      </Head>

      <S.Container>
        <S.ImageContainer>
          <S.FilterContainer>
            <S.Filters>
              <S.ButtonContainer>
                <S.Button onClick={() => handleClickTagName('Tecnologia')}>
                  Artigos
                </S.Button>
                <S.Button onClick={() => handleClickTagName('Negócios')}>
                  Cases
                </S.Button>
                <S.Button onClick={() => handleClickTagName('Inovação')}>
                  Notícias
                </S.Button>
              </S.ButtonContainer>

              <S.InputContainer>
                <S.InputFormControl
                  placeholder="Buscar..."
                  aria-label="search"
                  aria-describedby="basic-addon2"
                  name="search"
                  type="text"
                  onChange={searchTerm => {
                    setSearch(searchTerm.target.value)
                  }}
                />
                <S.InputContainer.Append>
                  <S.ButtonInput variant="outline-secondary">
                    <S.SearchIcon src="icons/search.svg" />
                  </S.ButtonInput>
                </S.InputContainer.Append>
              </S.InputContainer>
            </S.Filters>
          </S.FilterContainer>
        </S.ImageContainer>

        <S.ContentContainer>
          <S.ArticleContainer>
            {news.map((item, index) => (
              <Article key={index} news={item} />
            ))}
            <S.LoadMoreButton onClick={() => handlePagination()}>
              Carregar Mais
            </S.LoadMoreButton>
          </S.ArticleContainer>

          <Sidebar
            tags={tags}
            articles={popularArticles}
            onClick={index => handleClickNews(popularArticles[index].linkId)}
            onClickTag={index => handleClickTag(tags[index].id)}
          />
        </S.ContentContainer>
      </S.Container>
    </>
  )
}

export default Blog
