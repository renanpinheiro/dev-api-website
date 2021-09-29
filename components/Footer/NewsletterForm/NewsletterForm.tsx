import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import * as S from './NewsletterForm.styles'
import { theme } from '../../../styles/theme'
import { IValuesForm, IRdStationResponse } from './NewsletterForm.interfaces'

const NewsletterForm = () => {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RDSTATION,
  })

  const [isSuccess, setIsSuccess] = useState(false)

  const handleValidation = Yup.object().shape({
    name: Yup.string().required('O Nome é obrigatório.'),
    email: Yup.string()
      .email('Email inválido.')
      .required('O Email é obrigatório.'),
    notifications: Yup.string().required(
      'Você não concordou em receber as notificações',
    ),
    policy: Yup.string().required(
      'Você não concordou com a Política de privacidade',
    ),
  })

  const handleAPI = (values: IValuesForm) => {
    const payloadRD = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'newsletter-devapi',
        email: values.email,
      },
    }

    api
      .post<IRdStationResponse>(process.env.NEXT_PUBLIC_KEY, payloadRD)
      .then(response => {
        console.log(response.status)
        setIsSuccess(true)
      })
      .catch(error => {
        console.log(error)
        setIsSuccess(false)
      })
  }

  const { handleSubmit, handleChange, values, errors, touched, setSubmitting } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        notifications: '',
        policy: '',
      },
      validationSchema: handleValidation,
      onSubmit: (values: IValuesForm) => {
        alert('submit')
        handleAPI(values)

        setTimeout(() => {
          setSubmitting(false)
        }, 3000)
      },
    })
  return (
    <S.ContainerForm>
      <S.ContainerMessage>
        {touched.notifications && errors.notifications ? (
          <S.Message color={theme.colors.red[100]}>
            <small>{errors.notifications}</small>
          </S.Message>
        ) : null}
        {touched.policy && errors.policy ? (
          <S.Message color={theme.colors.red[100]}>
            <small>{errors.policy}</small>
          </S.Message>
        ) : null}
        {touched.email && errors.email ? (
          <S.Message color={theme.colors.red[100]}>
            <small>{errors.email}</small>
          </S.Message>
        ) : null}
        {touched.name && errors.name ? (
          <S.Message color={theme.colors.red[100]}>
            <small>{errors.name}</small>
          </S.Message>
        ) : null}
        {isSuccess && (
          <S.Message>
            <small>
              'Obrigado!{values.name} newsletter assinado com sucesso!'
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
        <S.InputContainer>
          <S.InputNewsletter
            placeholder="Digite aqui seu email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </S.InputContainer>
        <S.CheckboxContainer>
          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              name="notifications"
              value={values.notifications}
              onChange={handleChange}
            />
            <S.LabelCheckBox>Concordo em receber comunicações</S.LabelCheckBox>
          </S.CheckboxCol>

          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              name="policy"
              value={values.policy}
              onChange={handleChange}
            />
            <S.LabelCheckBox>
              Concordo com a <span>Política de privacidade</span>
            </S.LabelCheckBox>
          </S.CheckboxCol>
        </S.CheckboxContainer>
        <S.ButtonContainer>
          <S.ButtonNewsLetter type="submit">Descobrir</S.ButtonNewsLetter>
        </S.ButtonContainer>
      </form>
    </S.ContainerForm>
  )
}

export { NewsletterForm }
