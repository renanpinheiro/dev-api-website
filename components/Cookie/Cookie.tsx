import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import dynamic from 'next/dynamic'

import axios from 'axios'

import { Button } from '../Button'
import { CookieDetails } from './CookieDetails'
import { CookieForm } from './CookieForm'
import { CookieFollowUpRequestForm } from './CookieFollowUpRequestForm'
import { Switch } from '../Switch'

import { cookieContent } from '../../constants/cookieContent'

import { theme } from '../../styles/theme'
import * as S from './Cookie.style'

const CookieBarSSR = dynamic(() => import('./CookieBar'), {
  ssr: false,
})

const Cookie = ({ acceptCookie, isActiveCookies }) => {
  const lgpdApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

  const [isAcceptCookies, setIsAcceptCookies] = useState(isActiveCookies)
  const [isOpenPreferences, setIsOpenPreferences] = useState(false)
  const [isOpenRequestForm, setIsOpenRequestForm] = useState(false)
  const [isOpenFollowUpRequest, setIsOpenFollowUpRequest] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [openForm, setOpenForm] = useState(0)
  const [openCollapse, setOpenCollapse] = useState('')

  const currentModalContent = cookieContent[activeTab]

  useEffect(() => {
    acceptCookie(isAcceptCookies)
  }, [isAcceptCookies])

  const handleSwitch = () => {
    setIsAcceptCookies(!isAcceptCookies)
  }

  const handleClickPreferences = () => {
    setIsOpenPreferences(true)
  }

  const handleCloseModal = () => {
    setIsOpenPreferences(false)
    setOpenCollapse('')
    setIsOpenRequestForm(false)
    setActiveTab(0)
    setIsOpenFollowUpRequest(false)
  }

  const handleSelectTab = (tab: number) => {
    setOpenCollapse('')
    setIsOpenRequestForm(false)
    setActiveTab(tab)
    setIsOpenFollowUpRequest(false)
  }

  const handleClickAccept = () => {
    setIsAcceptCookies(true)
    setIsOpenPreferences(false)
  }

  const handleClickCollapse = (index: string) => {
    if (index !== openCollapse) {
      setOpenCollapse(index)
    } else {
      setOpenCollapse('')
    }
  }

  const handleClickRequest = (index: number) => {
    setIsOpenRequestForm(!isOpenRequestForm)
    setOpenForm(index)
  }

  const handleClickBack = () => {
    setIsOpenRequestForm(false)
    setOpenCollapse('')
    setIsOpenFollowUpRequest(false)
  }

  const handleClickFollowUpRequest = () => {
    setIsOpenFollowUpRequest(!isOpenFollowUpRequest)
  }

  return (
    <>
      {!isOpenPreferences ? (
        <S.Cookie>
          <S.CookieContainer>
            <CookieBarSSR
              isAcceptCookies={isAcceptCookies}
              handleClickAccept={handleClickAccept}
              handleClickPreferences={handleClickPreferences}
            />
          </S.CookieContainer>
        </S.Cookie>
      ) : (
        <S.CookieModalOverlay isOpen={isOpenPreferences}>
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
            {!isOpenRequestForm ? (
              <S.ContentContainer>
                {!isOpenFollowUpRequest ? (
                  <>
                    {currentModalContent.text}
                    {activeTab === 1 && (
                      <S.ButtonContainer>
                        <Button
                          type="default"
                          size="small"
                          text="Acompanhar Solicitação"
                          onClick={handleClickFollowUpRequest}
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
                                  onClick={() =>
                                    handleClickCollapse(index.toString())
                                  }
                                >
                                  {item.title}
                                </S.Title>
                                <S.AccordionToggle
                                  eventKey={index.toString()}
                                  onClick={() =>
                                    handleClickCollapse(index.toString())
                                  }
                                >
                                  <img
                                    src="/arrows/arrow-dropdown.svg"
                                    alt="arrow"
                                  />
                                </S.AccordionToggle>
                                {item.switch && (
                                  <S.SwitchContainer>
                                    <Switch
                                      isChecked={isActiveCookies}
                                      onChange={handleSwitch}
                                    />
                                  </S.SwitchContainer>
                                )}
                              </S.CardHeader>
                              <S.AccordionCollapse eventKey={index.toString()}>
                                <S.CardBody>
                                  <S.Text>{item.text}</S.Text>
                                  {item.cookies && (
                                    <CookieDetails cookies={item.cookies} />
                                  )}
                                  {item.button && (
                                    <S.ButtonContainer>
                                      <Button
                                        type="default"
                                        size="small"
                                        text="Solicitar"
                                        onClick={() =>
                                          handleClickRequest(index)
                                        }
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
                          onClick={handleClickAccept}
                        />
                      </S.ButtonContainer>
                    )}
                  </>
                ) : (
                  <CookieFollowUpRequestForm
                    onClickBack={handleClickBack}
                    lgpdApi={lgpdApi}
                  />
                )}
              </S.ContentContainer>
            ) : (
              <CookieForm
                onClickBack={handleClickBack}
                text={currentModalContent.collapse[openForm].text}
                title={currentModalContent.collapse[openForm].title}
                lgpdApi={lgpdApi}
              />
            )}
          </S.CookieModal>
        </S.CookieModalOverlay>
      )}
    </>
  )
}

export { Cookie }
