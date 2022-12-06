import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import { IHubspotResponse } from '../Footer/NewsletterForm/NewsletterForm.interfaces'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { ISidebarProps } from './Sidebar.interface'
import * as S from './Sidebar.style'

import axios from 'axios'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { NewsletterFooter } from '../NewsletterFooter'
import { NewsletterForm } from '../Footer/NewsletterForm'

const Sidebar = ({ tags, onClickTag }: ISidebarProps) => {
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
      email: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  })

  return (
    <S.SideBar>
      {/*<FormikProvider value={formikbag}>*/}
      {/*  <S.NewsForm name="newsletter-devapi" onSubmit={formikbag.handleSubmit}>*/}
      {/*    <Row>*/}
      {/*      <Col>*/}
      {/*        <Input*/}
      {/*          type="text"*/}
      {/*          name="email"*/}
      {/*          placeholder="Digite aqui seu email"*/}
      {/*        />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*      <Col>*/}
      {/*        <Button*/}
      {/*          type="submit"*/}
      {/*          size="custom"*/}
      {/*          text={loading ? 'Enviando...' : 'Receber novidades'}*/}
      {/*          color="green"*/}
      {/*          borderRadius="30px"*/}
      {/*        />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <S.SubText>*/}
      {/*      {isSuccess && (*/}
      {/*        <S.Message>*/}
      {/*          <small>Obrigado! newsletter assinado com sucesso!</small>*/}
      {/*        </S.Message>*/}
      {/*      )}*/}
      {/*    </S.SubText>*/}
      {/*  </S.NewsForm>*/}
      {/*</FormikProvider>*/}
      <NewsletterForm />
    </S.SideBar>
  )
}

export { Sidebar }
