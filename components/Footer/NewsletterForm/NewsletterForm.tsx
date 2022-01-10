import React, { useState } from 'react'

import { theme } from '../../../styles/theme'
import { Button } from '../../Button'
import { IHubspotResponse, IValuesForm } from './NewsletterForm.interfaces'
import * as S from './NewsletterForm.styles'

import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NewsletterForm = () => {
  const hubspotApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_SITE,
  })

  const [isSuccess, setIsSuccess] = useState(false)
  const [checkedNotification, setCheckedNotification] = useState(false)
  const [checkedPolicy, setCheckedPolicy] = useState(false)

  const handleValidation = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório! '),
    email: Yup.string()
      .email('Email inválido')
      .required('O Email é obrigatório!'),
    isNotifications: Yup.boolean()
      .required()
      .oneOf([true], 'Deve concordar em receber as comunicações!'),
    isPolicy: Yup.boolean()
      .required()
      .oneOf([true], 'Deve concordar com a Política de Privacidade!'),
  })

  const handleAPI = (values: IValuesForm) => {
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
  }

  const {
    handleSubmit,
    handleChange,
    resetForm,
    values,

    errors,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      isNotifications: false,
      isPolicy: false,
    },

    validationSchema: handleValidation,

    onSubmit: (values: IValuesForm) => {
      handleAPI(values)

      setTimeout(() => {
        setSubmitting(false)
        resetForm({})
        setCheckedNotification(false)
        setCheckedPolicy(false)
      }, 2000)
    },
  })

  return (
    <S.ContainerForm>
      <S.ContainerMessage>
        {isSuccess && (
          <S.Message>
            <small>
              Obrigado! {values.name} newsletter assinado com sucesso.'
            </small>
          </S.Message>
        )}
      </S.ContainerMessage>
      <form name="newsletter-devapi" onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.InputNewsletter
            placeholder="Digite seu nome"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </S.InputContainer>
        <S.ContainerMessage>
          {errors.name && (
            <S.Message color={theme.colors.red[100]}>
              <small>{errors.name}</small>
            </S.Message>
          )}
        </S.ContainerMessage>
        <S.InputContainer>
          <S.InputNewsletter
            placeholder="Digite aqui seu email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </S.InputContainer>
        <S.ContainerMessage>
          {errors.email && (
            <S.Message color={theme.colors.red[100]}>
              <small>{errors.email}</small>
            </S.Message>
          )}
        </S.ContainerMessage>
        <S.CheckboxContainer>
          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              checked={checkedNotification}
              name="isNotifications"
              value={String(values.isNotifications)}
              onChange={handleChange}
              onClick={() => setCheckedNotification(!checkedNotification)}
            />
            <S.LabelCheckBox>Concordo em receber comunicações</S.LabelCheckBox>
          </S.CheckboxCol>
          <S.ContainerMessage>
            {errors.isNotifications && (
              <S.Message color={theme.colors.red[100]}>
                <small>{errors.isNotifications}</small>
              </S.Message>
            )}
          </S.ContainerMessage>
          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              checked={checkedPolicy}
              name="isPolicy"
              value={String(values.isPolicy)}
              onChange={handleChange}
              onClick={() => setCheckedPolicy(!checkedPolicy)}
            />
            <S.LabelCheckBox>
              Concordo com a{' '}
              <a href="/politica-de-privacidade" rel="noreferrer">
                Política de privacidade
              </a>
            </S.LabelCheckBox>
          </S.CheckboxCol>
        </S.CheckboxContainer>

        <S.ContainerMessage>
          {errors.isPolicy && (
            <S.Message color={theme.colors.red[100]}>
              <small>{errors.isPolicy}</small>
            </S.Message>
          )}
        </S.ContainerMessage>
        <S.ButtonContainer>
          <Button type="default" text="Descobrir" size="default" />
        </S.ButtonContainer>
      </form>
    </S.ContainerForm>
  )
}

export { NewsletterForm }
