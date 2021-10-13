import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import { FormikProvider, useFormik } from 'formik'

import * as Yup from 'yup'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

import { ISidebarProps } from './Sidebar.interface'

import * as S from './Sidebar.style'

const Sidebar = ({
  tags,
  articles,
  ebookImg,
  ebookRedirect,
  onClick,
  onClickTag,
}: ISidebarProps) => {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido'),
  })

  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/3898021c-e125-41ca-8f3c-3cd2e9e9bb99-loader.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handleSubmit = async () => {
    setTimeout(() => {
      setIsSuccess(true)
    }, 1500)
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
        <S.NewsForm onSubmit={formikbag.handleSubmit}>
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
                text="Receber novidades"
                color={isSuccess ? 'green' : 'secondary'}
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
