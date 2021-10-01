import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import * as S from './NewsletterForm.styles'

import { IValuesForm, IRdStationResponse } from './NewsletterForm.interfaces'
import { Button } from '../../Button'
const NewsletterForm = () => {
  const RDapi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_RDSTATION,
  })

  const [isSuccess, setIsSuccess] = useState(false)
  const [checkedNotification, setCheckedNotification] = useState(false)
  const [checkedPolicy, setCheckedPolicy] = useState(false)

  const handleValidation = Yup.object().shape({
    name: Yup.string().required('false'),
    email: Yup.string().email('false').required('false'),
    isNotifications: Yup.boolean().required('false').oneOf([true], 'true'),
    isPolicy: Yup.boolean().required('false').oneOf([true], 'true'),
  })

  const handleAPI = (values: IValuesForm) => {
    const payloadRD = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'newsletter-devapi (site novo)',
        email: values.email,
      },
    }

    RDapi.post<IRdStationResponse>(
      `?api_key=${process.env.NEXT_PUBLIC_KEY_RDSTATION}`,
      payloadRD,
    )
      .then(response => {
        setIsSuccess(true)
      })
      .catch(error => {
        setIsSuccess(false)
      })
  }

  const {
    handleSubmit,
    handleChange,
    resetForm,
    values,
    isValid,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      isNotifications: false,
      isPolicy: false,
    },

    validationSchema: handleValidation,
    validateOnMount: true,

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
              checked={checkedNotification}
              name="isNotifications"
              value={String(values.isNotifications)}
              onChange={handleChange}
              onClick={() => setCheckedNotification(!checkedNotification)}
            />
            <S.LabelCheckBox>Concordo em receber comunicações</S.LabelCheckBox>
          </S.CheckboxCol>

          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              checked={checkedPolicy}
              name="isPolicy"
              value={String(values.isPolicy)}
              onChange={handleChange}
              onClick={() => setCheckedPolicy(!checkedPolicy)}
            />
            <S.LabelCheckBox>
              Concordo com a <span>Política de privacidade</span>
            </S.LabelCheckBox>
          </S.CheckboxCol>
        </S.CheckboxContainer>
        <S.ButtonContainer>
          <Button
            type="default"
            text="Descobrir"
            size="default"
            isDisabled={!isValid}
          />
        </S.ButtonContainer>
      </form>
    </S.ContainerForm>
  )
}

export { NewsletterForm }
