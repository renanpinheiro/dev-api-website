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

  const newsMobileCarrouselItems = cases.map((item, index) => {
    return {
      interval: INTERVAL,
      component: (
        <S.Box>
          <S.CaseContainer key={index}>
            <S.SidebarCotainer height="40px">
              <S.CaseType width="50px" height="24px">
                {item.type}
              </S.CaseType>
              <S.Date width="15px" height="15px">
                <img src="icons/calendar.svg" alt="calendar" />
                <p>{item.date}</p>
              </S.Date>
            </S.SidebarCotainer>
            <S.TextContainer>
              <S.VerticalPipe />
              <S.Text>{item.text}</S.Text>
            </S.TextContainer>
          </S.CaseContainer>
        </S.Box>
      ),
    }
  })

  return (
    <>
      <Head>
        <title>DevApi | Blog</title>
        <meta property="description" content="Mantenha-se atualizado!" />
        <link rel="canonical" href="https://www.devapi.com.br/blog" />
      </Head>

      <S.Container>
        <S.ImageContainer>
          <ImageCarousel items={newsImages} />
          <S.FilterContainer>
            <S.Filters>
              <S.TextContainer margin="0px 0px 0px 0px">
                <S.VerticalPipe />
                <S.Text fontSize="1.5rem">
                  <span>Descubra</span> novas ideias
                </S.Text>
              </S.TextContainer>

              <S.ButtonContainer>
                <S.Button
                  hoverImg="icons/ic-newspaper-white.svg"
                  onClick={() => handleClickTagName('Tecnologia')}
                >
                  <S.IconButton img="icons/ic-newspaper.svg" />
                  Tecnologia
                </S.Button>
                <S.Button
                  hoverImg="icons/ic-hand-white.svg"
                  onClick={() => handleClickTagName('Negócios')}
                >
                  <S.IconButton img="icons/ic-hand.svg" />
                  Negócios
                </S.Button>
                <S.Button
                  hoverImg="icons/ic-rocket-white.svg"
                  onClick={() => handleClickTagName('Inovação')}
                >
                  <S.IconButton img="icons/ic-rocket.svg" />
                  Inovação
                </S.Button>
              </S.ButtonContainer>

              <S.InputContainer>
                <S.InputFormControl
                  placeholder="Busca..."
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

        {/* <S.CasesContainer>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={newsMobileCarrouselItems}
              dotsMargin="-1.5rem"
              isCustomCarouselItem
            />
          ) : (
            <>
              {cases.map((item, index) => (
                <S.CaseContainer key={index}>
                  <S.SidebarCotainer height="auto">
                    <S.CaseType width="50px" height="24px">
                      {item.type}
                    </S.CaseType>
                    <S.Date width="15px" height="15px">
                      <img src="icons/calendar.svg" alt="calendar" />
                      <p>{item.date}</p>
                    </S.Date>
                  </S.SidebarCotainer>
                  <S.TextContainer>
                    <S.VerticalPipe />
                    <S.Text>{item.text}</S.Text>
                  </S.TextContainer>
                </S.CaseContainer>
              ))}
            </>
          )}
        </S.CasesContainer> */}

        <S.ContentContainer>
          <S.Content>
            {news.map((item, index) => (
              <NewsCardWithOutSSR
                key={index}
                newsCards={item}
                padding="0px 0px 30px 0px"
                gridColum="auto 80px !important"
                gridRow={
                  isMobile
                    ? '250px 235px 80px !important'
                    : '400px 300px 80px !important'
                }
              />
            ))}
            <S.LoadMoreButton onClick={() => handlePagination()}>
              Carregar Mais
            </S.LoadMoreButton>
          </S.Content>

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
