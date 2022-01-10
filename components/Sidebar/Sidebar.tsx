import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import { IHubspotResponse } from '../Footer/NewsletterForm/NewsletterForm.interfaces'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ISidebarProps } from './Sidebar.interface'
import * as S from './Sidebar.style'

import axios from 'axios'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

const Sidebar = ({
  tags,
  ebookImg,
  ebookRedirect,
  onClickTag,
}: ISidebarProps) => {
  const hubspotApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SITE,
  })

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório! '),
    email: Yup.string().email('Digite um e-mail válido'),
  })

  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async values => {
    setLoading(true)
    const [firstName, lastName] = values.name.split(' ')

    const payloadHubspot = {
      properties: {
        firstname: firstName,
        lastname: lastName,
        email: values.email,
        hubtags: 'newsletter',
      },
    }

    hubspotApi
      .post<IHubspotResponse>('/contacts', payloadHubspot)
      .then(() => {
        setIsSuccess(true)
      })
      .catch(() => {
        setIsSuccess(false)
      })
      .finally(() => setLoading(false))
  }

  const formikbag = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  })

  return (
    <S.SideBar>
      <S.Ebook onClick={() => open(ebookRedirect, '_blank')}>
        <img src={ebookImg} alt="ebook" />
      </S.Ebook>

      <FormikProvider value={formikbag}>
        <S.NewsForm name="newsletter-devapi" onSubmit={formikbag.handleSubmit}>
          <Row>
            <Col>
              <Input type="text" name="name" placeholder="Nome " />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type="text"
                name="email"
                placeholder="Digite aqui seu email"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="submit"
                size="custom"
                text={loading ? 'Enviando...' : 'Receber novidades'}
                color="secondary"
              />
            </Col>
          </Row>
          <S.SubText>
            {isSuccess && (
              <S.Message>
                <small>Obrigado! newsletter assinado com sucesso!</small>
              </S.Message>
            )}
            Prometemos não utilizar suas informações de contato para enviar
            qualquer tipo de SPAM.
          </S.SubText>
        </S.NewsForm>
      </FormikProvider>

      {/* <S.ArticleContainer>
        <S.Pipe />
        <S.Title>Artigos mais lidos</S.Title>
        <S.Content>
          {articles.map((article, index) => (
            <S.Article key={index} onClick={() => onClick(index)}>
              <S.Image src={article.urlImage} />
              <S.TextContainer>
                <S.Text>{article.text}</S.Text>
                <S.SidebarCotainer>
                  <S.Newspaper>
                    <img
                      src="/icons/newspaper.svg"
                      alt="newspaper"
                    />
                    <p>{article.newsType}</p>
                  </S.Newspaper>
                  <S.Date>
                    <img
                      src="/icons/calendar.svg"
                      alt="calendar"
                    />
                    <p>{article.date}</p>
                  </S.Date>
                </S.SidebarCotainer>
              </S.TextContainer>
              <S.VerticalPipe />
            </S.Article>
          ))}
        </S.Content>
      </S.ArticleContainer> */}

      <S.TagsContainer>
        <S.Pipe />
        <S.Title>Tags</S.Title>
        <S.Content>
          {tags.map((tag, index) => (
            <S.Tag key={index} onClick={() => onClickTag(index)}>
              {tag.name}
            </S.Tag>
          ))}
        </S.Content>
      </S.TagsContainer>
    </S.SideBar>
  )
}

export { Sidebar }
