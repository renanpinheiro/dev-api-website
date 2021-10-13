import React, { useState } from 'react'
import { Button } from '../Button'
import * as S from './Cookie.style'

import { IoMdClose } from 'react-icons/io'
import { theme } from '../../styles/theme'
import { cookieContent } from '../../constants/cookieContent'
import { Switch } from '../Switch'
import { CookieDetails } from './CookieDetails'

const Cookie = () => {
  const [isOpenPreferences, setIsOpenPreferences] = useState(false)
  const [isAcceptCookies, setIsAcceptCookies] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [openCollapse, setOpenCollapse] = useState('')

  const currentModalContent = cookieContent[activeTab]

  const handleClickPreferences = () => {
    setIsOpenPreferences(true)
  }

  const handleCloseModal = () => {
    setIsOpenPreferences(false)
  }

  const handleSelectTab = (tab: number) => {
    setActiveTab(tab)
    setOpenCollapse('')
  }

  const handleClickAccept = () => {
    setIsAcceptCookies(true)
  }

  const handleClickCollapse = (index: string) => {
    if (index !== openCollapse) {
      setOpenCollapse(index)
    } else {
      setOpenCollapse('')
    }
  }

  return (
    <S.Container isOpen={isOpenPreferences}>
      {!isOpenPreferences ? (
        <S.CookieContainer>
          {isAcceptCookies ? (
            <S.AcceptCookie>
              <img
                src="/icons/cookie.png"
                alt="cookie"
                onClick={handleClickPreferences}
              />
            </S.AcceptCookie>
          ) : (
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
              <Button
                size="small"
                type="default"
                text="Aceitar todos"
                onClick={handleClickAccept}
              />
            </S.Cookie>
          )}
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

          <S.ContentContainer>
            {currentModalContent.text}
            {activeTab === 1 && (
              <S.ButtonContainer>
                <Button
                  type="default"
                  size="small"
                  text="Acompanhar Solicitação"
                />
              </S.ButtonContainer>
            )}
            <S.AccordionContainer>
              {currentModalContent.collapse.map((item, index) => {
                return (
                  <S.Accordion key={index} activeKey={openCollapse}>
                    <S.Card>
                      <S.CardHeader>
                        <S.Title
                          onClick={() => handleClickCollapse(index.toString())}
                        >
                          {item.title}
                        </S.Title>
                        <S.AccordionToggle
                          eventKey={index.toString()}
                          onClick={() => handleClickCollapse(index.toString())}
                        >
                          <img src="/arrows/arrow-dropdown.svg" alt="arrow" />
                        </S.AccordionToggle>
                        {item.switch && (
                          <S.SwitchContainer>
                            <Switch />
                          </S.SwitchContainer>
                        )}
                      </S.CardHeader>
                      <S.AccordionCollapse eventKey={index.toString()}>
                        <S.CardBody>
                          <S.Text>{item.text}</S.Text>
                          {item.cookies && <CookieDetails />}
                          {item.button && (
                            <S.ButtonContainer>
                              <Button
                                type="default"
                                size="small"
                                text="Solicitar"
                              />
                            </S.ButtonContainer>
                          )}
                        </S.CardBody>
                      </S.AccordionCollapse>
                    </S.Card>
                  </S.Accordion>
                )
              })}
            </S.AccordionContainer>
            {activeTab === 0 && (
              <S.ButtonContainer>
                <Button
                  type="default"
                  size="small"
                  text="Aceitar Todos os Cookies"
                />
              </S.ButtonContainer>
            )}
          </S.ContentContainer>
        </S.CookieModal>
      )}
    </S.Container>
  )
}

export { Cookie }
