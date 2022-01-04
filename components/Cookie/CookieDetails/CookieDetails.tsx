import React, { useState } from 'react'

import Link from 'next/link'

import * as S from './CookieDetails.style'

const CookieDetails = ({ cookies }) => {
  const [openCollapse, setOpenCollapse] = useState('')

  const handleClickCollapse = (index: string) => {
    if (index !== openCollapse) {
      setOpenCollapse(index)
    } else {
      setOpenCollapse('')
    }
  }

  return (
    <S.AccordionContainer>
      {cookies.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.name ? (
              <S.Accordion activeKey={openCollapse}>
                <S.Card>
                  <S.CardHeader>
                    <S.AccordionToggle
                      eventKey={index.toString()}
                      onClick={() => handleClickCollapse(index.toString())}
                      isActive={openCollapse === index.toString()}
                    >
                      <div />
                    </S.AccordionToggle>
                    <S.Title
                      onClick={() => handleClickCollapse(index.toString())}
                    >
                      {item.name}
                    </S.Title>
                  </S.CardHeader>
                  <S.AccordionCollapse eventKey={index.toString()}>
                    <S.CardBody>
                      {item.subItem.map((detail, subIndex) => {
                        return (
                          <S.DetailsContainer key={subIndex}>
                            <S.List>
                              <S.ListName hasDot>{detail.name}</S.ListName>
                              <li>{detail.domain.title}</li>
                              <li>{detail.time.title}</li>
                              <li>{detail.type.title}</li>
                            </S.List>
                            <S.List>
                              <S.ListName hasDot={false}></S.ListName>
                              <li>{detail.domain.value}</li>
                              <li>{detail.time.value}</li>
                              <li>{detail.type.value}</li>
                            </S.List>
                          </S.DetailsContainer>
                        )
                      })}
                    </S.CardBody>
                  </S.AccordionCollapse>
                </S.Card>
              </S.Accordion>
            ) : (
              <S.LinkContainer>
                <Link href={item.url}>
                  <S.Text>{item.link}</S.Text>
                </Link>
              </S.LinkContainer>
            )}
          </React.Fragment>
        )
      })}
    </S.AccordionContainer>
  )
}

export { CookieDetails }
