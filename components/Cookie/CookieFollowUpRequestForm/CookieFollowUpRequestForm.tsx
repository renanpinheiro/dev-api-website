import React, { useState } from 'react'

import { Button } from '../../Button'
import { InputText } from '../../InputText'
import * as S from './CookieFollowUpRequestForm.style'

import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

const CookieFollowUpRequestForm = ({ onClickBack, lgpdApi }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [request, setRequest] = useState({
    text: '',
    status: '',
  })

  const onSubmit = async values => {
    try {
      const response = await lgpdApi.get(`lgpd/${values.protocol}`)

      setRequest(response.data)
      setIsStatusOpen(true)
    } catch (error) {
      setIsStatusOpen(false)
    }
  }

  const schema = Yup.object().shape({
    protocol: Yup.string().required('Campo obrigatório.'),
    email: Yup.string()
      .email('Este campo deve ser um email válido.')
      .required('Campo obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      protocol: '',
      email: '',
    },
    onSubmit,
    validationSchema: schema,
  })

  return (
    <S.Container>
      <S.Title>Acompanhamento de solicitação</S.Title>
      Para acompanhar sua solicitação digite o número do seu protocolo e email.
      <FormikProvider value={formik}>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Line>
            <InputText
              name="protocol"
              label="Protocolo"
              isRequired
              placeholder="Protocolo"
            />
            <InputText
              name="email"
              label="Email"
              isRequired
              placeholder="Email"
            />
          </S.Line>

          <S.ButtonContainer>
            <Button
              size="small"
              text="Voltar"
              type="outline"
              margin="0 10px 0 0"
              onClick={onClickBack}
            />
            <Button
              size="small"
              text="Enviar"
              type="default"
              buttonType="submit"
            />
          </S.ButtonContainer>
        </S.Form>
      </FormikProvider>
      {isStatusOpen && (
        <S.Status status={request.status || 'pending'}>
          <p>{request.text}</p>
        </S.Status>
      )}
    </S.Container>
  )
}

export { CookieFollowUpRequestForm }
