import React, { useState } from 'react'
import { Button } from '../Button'
import * as S from './Cookie.style'

import { IoMdClose } from 'react-icons/io'
import { theme } from '../../styles/theme'
import { cookieContent } from '../../constants/cookieContent'

const Cookie = () => {
  const [isOpenPreferences, setIsOpenPreferences] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const currentModalContent = cookieContent[activeTab]

  const handleClickPreferences = () => {
    setIsOpenPreferences(true)
  }

  const handleCloseModal = () => {
    setIsOpenPreferences(false)
  }

  const handleSelectTab = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    <S.Container isOpen={isOpenPreferences}>
      {!isOpenPreferences ? (
        <S.CookieContainer>
          <S.Cookie>
            <p>
              Clicando em "Aceito todos os Cookies", você concorda com o
              armazenamento de cookies no seu dispositivo para melhorar a
              experiência e navegação no site. Para saber mais, acesse a{' '}
              <a href="/politica-de-privacidade">Política de Privacidade.</a>
            </p>
            <Button
              size="small"
              type="outline"
              text="Preferências"
              margin="0 10px 0 10px"
              onClick={handleClickPreferences}
            />
            <Button size="small" type="default" text="Aceitar todos" />
          </S.Cookie>
        </S.CookieContainer>
      ) : (
        <S.CookieModal>
          <S.TitleContainer>
            <h3>Preferências</h3>
            <IoMdClose
              color={theme.colors.primary}
              onClick={handleCloseModal}
              style={{ cursor: 'pointer', fontSize: '3vh' }}
            />
          </S.TitleContainer>

          <S.TabContainer>
            <S.Tab
              isActive={activeTab === 0}
              onClick={() => handleSelectTab(0)}
            >
              Preferências de Cookies
            </S.Tab>
            <S.Tab
              isActive={activeTab === 1}
              onClick={() => handleSelectTab(1)}
            >
              Seus Direitos e Solicitações
            </S.Tab>
          </S.TabContainer>

          <S.ContentContainer>{currentModalContent.text}</S.ContentContainer>
        </S.CookieModal>
      )}
    </S.Container>
  )
}

export { Cookie }
