import React, { useState } from 'react'

import Head from 'next/head'

import { Button } from '../../components/Button'
import { ButtonLink } from '../../components/ButtonLink'

import * as S from '../../styles/connectors'

import ConnectorsData from '../../constants/connectors.json'

const Connectors = () => {
  const [pageCurrent, setPageCurrent] = useState(1)

  const handleLoadConnectors = pageCurrent => {
    let page = pageCurrent + 1
    setPageCurrent(page)
  }

  return (
    <>
      <Head>
        <title>Conectores | DevApi</title>
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
            href="/free-trial"
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
                  placeholder="Busca..."
                  aria-label="search"
                  aria-describedby="basic-addon2"
                  name="search"
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
              >
                {ConnectorsData.categories.map((item, index) => (
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
          {ConnectorsData.connectors.map(item => (
            <S.Card>
              <img src={item.image} title={item.name} />
              <span>B2W</span>
            </S.Card>
          ))}

          <S.More>
            <Button
              text="Ver mais conectores"
              type="default"
              size="default"
              buttonType="button"
              onClick={() => handleLoadConnectors(pageCurrent)}
            />
          </S.More>
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export default Connectors
