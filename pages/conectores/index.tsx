import React, { useState, Fragment, useEffect } from 'react'

import Head from 'next/head'

import { Button } from '../../components/Button'
import { ButtonLink } from '../../components/ButtonLink'
import api from '../../services/api'
import * as S from '../../styles/connectors'

const ConnectorsPage = () => {
  const [hasMoreConnectors, setHasMoreConnectors] = useState(true)
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [connectors, setConnectors] = useState([])
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    findCategories()
    findConnectors('_limit=40&_start=0')
  }, [])

  useEffect(() => {
    let params = `_limit=40&_start=${page}`

    if (search) {
      params = `${params}&_q=${search}`
    }

    if (categoryId) {
      params = `${params}&Categoria=${categoryId}`
    }

    findConnectors(params)
  }, [search, categoryId, page])

  const findConnectors = async (params?: string) => {
    const { data } = await api.get(`/conectores?${params}`)

    const hasConnectors =
      data.content.length < 40 || (data.content.length === 40 && categoryId)

    const hasPage = connectors.length > 0 && page != 0 && !categoryId

    if (hasConnectors) {
      setHasMoreConnectors(false)
    } else {
      setHasMoreConnectors(true)
    }

    if (hasPage) {
      data.content.map(item => setConnectors(connector => [...connector, item]))
    } else {
      setConnectors(data.content)
    }
  }

  const findCategories = async () => {
    const { data } = await api.get('/categoria-de-conectores')

    data.push({
      id: '',
      name: 'Todas categorias',
    })

    setCategories(data)
  }

  const handleSetCategory = (category: string) => {
    setCategoryId(category)
    setPage(0)
  }

  const handleSetSearchTerm = (searchTerm: string) => {
    setSearch(searchTerm)
    setPage(0)
  }

  return (
    <>
      <Head>
        <title>DevApi | Conectores</title>
        <meta property="og:title" content="DevApi | Conectores" />
        <meta name="description" content="Mais de 300 prontos para uso." />
        <meta
          property="og:description"
          content="Mais de 300 prontos para uso."
          key="description"
        />
        <meta
          property="og:url"
          content="https://www.devapi.com.br/conectores"
        />
        <link rel="canonical" href="https://www.devapi.com.br/conectores" />
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
                  onChange={searchTerm => {
                    setTimeout(() => {
                      handleSetSearchTerm(searchTerm.target.value)
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
                onSelect={category => handleSetCategory(category)}
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
          {connectors.length > 0 &&
            connectors.map((page, index) => {
              return (
                <Fragment key={index}>
                  <S.Card>
                    <img src={page.image} title={page.name} />
                    <span>{page.name}</span>
                  </S.Card>
                </Fragment>
              )
            })}
        </S.Wrapper>

        {hasMoreConnectors && (
          <S.ContainerLoadingButton>
            <Button
              type="default"
              size="default"
              text="Carregar mais conectores"
              onClick={() => setPage(page + 40)}
            />
          </S.ContainerLoadingButton>
        )}
      </S.Content>

      <S.CornerContainer>
        <hr />
        <h2>
          Não encontrou o <b>conector que precisa?</b>
        </h2>
        <p>
          Não se preocupe! Aqui estão apenas alguns exemplos dos conectores
          disponíveis. Teremos todo o gosto em disponibilizar o conector que
          você precisa. Também é possível construir seu próprio conector ou
          importar via Swagger. Sem limites!
        </p>
        <ButtonLink
          text="Solicitar conector"
          href="/converse-com-especialista"
          target="_self"
          type="default"
          size="default"
        />
      </S.CornerContainer>
    </>
  )
}

export default ConnectorsPage
