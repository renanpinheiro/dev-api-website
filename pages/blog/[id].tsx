import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import {
  handleHeaderImage,
  handlePopularPosts,
  handlePostDetails,
  handlePostsCarousel,
} from '../../adapters/blog/handlePosts'
import { ImageCarousel } from '../../components/ImageCarousel'
import { Sidebar } from '../../components/Sidebar'
import {
  findPopularPosts,
  findPostById,
  findTags,
} from '../../providers/blog/find'
import * as S from '../../styles/blog'

import { marked } from 'marked'

const NewsCarouselWithOutSSR = dynamic(
  () => import('../../components/NewsCarousel'),
  {
    ssr: false,
  },
)

const BlogDetails = () => {
  const router = useRouter()
  const routerId = router.asPath
  const [splitId] = routerId.split('?')
  const [, , currentId] = splitId.split('/')

  const [popularArticles, setPopularArticles] = useState([])
  const [tags, setTags] = useState([])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [newsImages, setNewsImages] = useState([])
  const [newsCards, setNewsCards] = useState([])

  useEffect(() => {
    if (router.isReady) handleFindPostById(currentId)

    handleFindTags()
    handleFindPopularPosts()
  }, [currentId])

  const handlePostTitle = title => title && `${title}`

  const handleFindPostById = async id => {
    const { data } = await findPostById(id)

    const handledPostDetails = handlePostDetails(data)
    const handledPostTitle = handlePostTitle(handledPostDetails.title)
    const handledPostDate = handledPostDetails.date
    setTitle(handledPostTitle)
    setDate(handledPostDate)

    const content = marked(handledPostDetails.text)
    setText(content)

    const headerPost = handleHeaderImage(data)
    setNewsImages([headerPost])

    const articleRelated = handlePostsCarousel(data.articles_related)
    setNewsCards(articleRelated)
  }

  const handleFindPopularPosts = async () => {
    const { data } = await findPopularPosts()
    const popularPosts = handlePopularPosts(data)
    setPopularArticles(popularPosts)
  }

  const handleFindTags = async () => {
    const { data } = await findTags()
    setTags(data)
  }

  const handleClickTag = () => {
    Router.push('/blog')
  }

  const handleClickNews = url => {
    Router.push(`/blog/${url}`)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:title" key="title" content={title} />
        <meta property="og:description" key="description" content={title} />
      </Head>

      <S.Container>
        <S.ImageContainer />

        <S.ContentContainer>
          <S.Content>
            <Link href="/blog">
              <S.ReturnButtonContainer>
                <img src="/icons/caret-left.svg" alt="caret" />
                <span>Todos os posts</span>
              </S.ReturnButtonContainer>
            </Link>

            <S.ArticleTag>Artigo</S.ArticleTag>

            <S.ArticleTitle>{title}</S.ArticleTitle>
            <S.ArticleDate>
              <img src="/icons/calendar-green.svg" alt="calendar" />
              <p>{date}</p>
            </S.ArticleDate>

            <S.Post dangerouslySetInnerHTML={{ __html: text }} />
          </S.Content>

          <S.SidebarContainer>
            <Sidebar
              tags={tags}
              articles={popularArticles}
              onClick={index => handleClickNews(popularArticles[index].linkId)}
              onClickTag={index => handleClickTag()}
            />

            <S.SidebarLine />

            <Link href="https://conteudo.devapi.com.br/e-book-devapi-rh">
              <img src="/images/rh-ebook.png"></img>
            </Link>

            <S.SidebarLine />

            <Link href="https://conteudo.devapi.com.br/e-book-devapi-ecommerce">
              <img src="/images/integration-ecommerce.png"></img>
            </Link>
          </S.SidebarContainer>
        </S.ContentContainer>

        {newsCards.length && <NewsCarouselWithOutSSR newsCards={newsCards} />}
      </S.Container>
    </>
  )
}

export default BlogDetails
