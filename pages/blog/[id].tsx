import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import marked from 'marked'

import { ImageCarousel } from '../../components/ImageCarousel'
import { Sidebar } from '../../components/Sidebar'

import * as S from '../../styles/blog'

import {
  handleHeaderImage,
  handlePopularPosts,
  handlePostDetails,
  handlePostsCarousel,
} from '../../adapters/blog/handlePosts'
import {
  findEbook,
  findPopularPosts,
  findPostById,
  findTags,
} from '../../providers/blog/find'

const NewsCarouselWithOutSSR = dynamic(
  () => import('../../components/NewsCarousel'),
  {
    ssr: false,
  },
)

const BlogDetails = () => {
  const router = useRouter()
  const { id } = router.query

  const [popularArticles, setPopularArticles] = useState([])
  const [tags, setTags] = useState([])
  const [ebookImg, setEbookImg] = useState('')
  const [ebookRedirect, setEbookRedirect] = useState('')
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [newsImages, setNewsImages] = useState([])
  const [newsCards, setNewsCards] = useState([])

  useEffect(() => {
    handleFindPostById(id)
    handleFindTags()
    handleFindPopularPosts()
    handleFindEbook()
  }, [])

  const handlePostTitle = title => title && `${title} | DevApi`

  const handleFindPostById = async id => {
    const { data } = await findPostById(id)
    const handledPostDetails = handlePostDetails(data)
    const handledPostTitle = handlePostTitle(handledPostDetails.title)
    setTitle(handledPostTitle)

    const content = marked(handledPostDetails.text)
    setText(content)

    const headerPost = handleHeaderImage(data)
    setNewsImages([headerPost])

    const articleRelated = handlePostsCarousel(data.articles_related)
    setNewsCards(articleRelated)
  }

  const handleFindEbook = async () => {
    const { data }: any = await findEbook()
    setEbookImg(data.media)
    setEbookRedirect(data.link)
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
        <S.ImageContainer>
          <ImageCarousel items={newsImages} isControls={false} />
        </S.ImageContainer>

        <S.ContentContainer>
          <S.Content>
            <Link href="/blog">
              <S.ReturnButtonContainer>
                <img src="/icons/ic-arrow-primary.svg" alt="arrow" />
                <span>Todos os posts</span>
              </S.ReturnButtonContainer>
            </Link>

            <S.Paragraph dangerouslySetInnerHTML={{ __html: text }} />
          </S.Content>
          <Sidebar
            tags={tags}
            articles={popularArticles}
            ebookRedirect={ebookRedirect}
            ebookImg={ebookImg}
            onClick={index => handleClickNews(popularArticles[index].linkId)}
            onClickTag={handleClickTag}
          />
        </S.ContentContainer>

        {newsCards.length && <NewsCarouselWithOutSSR newsCards={newsCards} />}
      </S.Container>
    </>
  )
}

export default BlogDetails
