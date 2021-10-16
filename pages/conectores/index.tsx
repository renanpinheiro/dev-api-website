import React, { useState, Fragment, useRef } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useUIDSeed } from 'react-uid'

import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import api from '../../services/api'

import { ButtonLink } from '../../components/ButtonLink'

import * as S from '../../styles/connectors'

interface ICategory {
  id: string
  name: string
}

interface IPagination {
  pagination: {
    page: number
    total_pages: number
  }
}

interface IConnectorsProps {
  categories: ICategory[]
}

interface IQueryKeyType {
  pageParam: number
  queryKey: [string, string]
}

const getMoreConnectors = async ({
  pageParam = 0,
  queryKey,
}: IQueryKeyType) => {
  let params = `_limit=40&_start=${pageParam}`

  const categoryId = queryKey[0]
  const search = queryKey[1]

  if (categoryId) {
    params = `${params}&Categoria=${categoryId}`
  }

  if (search) {
    params = `${params}&_q=${search}`
  }

  const { data } = await api.get(`/conectores?${params}`)

  return data
}

const ConnectorsPage = ({ categories }: IConnectorsProps) => {
  const seed = useUIDSeed()
  const loadMoreRef = useRef()

  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const { data, isSuccess, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery([categoryId, search], getMoreConnectors, {
      getNextPageParam: (data: IPagination) =>
        data.pagination.page === data.pagination.total_pages
          ? undefined
          : data.pagination.page + 40,
    })

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <Head>
        <title>DevApi | Conectores</title>
        <link rel="canonical" href="https://devapi.com.br/conectores" />
      </Head>

      <S.Hero>
        <S.HeroContent>
          <hr />
          <h1>
            Conecte qualquer sistema <b>em poucos minutos</b>
          </h1>
          <p>
            Ganhe uma agilidade e uma escalabilidade incríveis com os
            componentes prontos para uso e os recursos de última geração.
          </p>
          <ButtonLink
            text="Fale com um consultor"
            href="/converse-com-especialista"
            target="_self"
            type="default"
            size="default"
          />
        </S.HeroContent>

        <S.Search>
          <S.SearchContent>
            <span>O que você gostaria de conectar?</span>

            <S.SearchInput>
              <S.InputGroup>
                <S.FormControl
                  type="text"
                  name="search"
                  placeholder="Busca..."
                  aria-label="search"
                  aria-describedby="basic-addon2"
                  onChange={e => {
                    setTimeout(() => {
                      setSearch(e.target.value)
                    }, 1000)
                  }}
                />
                <S.InputGroup.Append>
                  <S.ButtonInput variant="outline-secondary">
                    <S.ButtonInputIcon src="icons/search.svg" />
                  </S.ButtonInput>
                </S.InputGroup.Append>
              </S.InputGroup>
            </S.SearchInput>

            <div>
              <S.DropdownButton
                id="dropdown-basic-button"
                title="Todas as categorias"
                size="md"
                onSelect={e => setCategoryId(e)}
              >
                {categories.map((item, index) => (
                  <S.Dropdown.Item
                    eventKey={item.id}
                    key={index}
                    value={item.name}
                  >
                    {item.name}
                  </S.Dropdown.Item>
                ))}
              </S.DropdownButton>
            </div>
          </S.SearchContent>
        </S.Search>
      </S.Hero>

      <S.Content>
        <S.Wrapper>
          {isSuccess &&
            data?.pages.map((page: any) => (
              <Fragment key={seed(page)}>
                {page.content.map(item => (
                  <S.Card>
                    <img src={item.image} title={item.name} />
                    <span>{item.name}</span>
                  </S.Card>
                ))}
              </Fragment>
            ))}
        </S.Wrapper>

        {hasNextPage && (
          <S.LoadMore ref={loadMoreRef}>
            <S.Preloader>
              <S.DoubleBounceIn />
              <S.DoubleBounceOut />
            </S.Preloader>
          </S.LoadMore>
        )}

        {isLoading && (
          <S.LoadMore>
            <S.Preloader>
              <S.DoubleBounceIn />
              <S.DoubleBounceOut />
            </S.Preloader>
          </S.LoadMore>
        )}
      </S.Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await api.get('/categoria-de-conectores')
  const { data } = await api.get('/conectores?_limit=40&_start=0')

  const connectors = {
    pages: [{ data }],
    pageParams: [null],
  }

  return {
    props: {
      connectors,
      categories,
    },
  }
}

export default ConnectorsPage
