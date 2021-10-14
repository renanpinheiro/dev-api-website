import { FormikProvider, useFormik } from 'formik'
import React, { useState } from 'react'
import { Button } from '../../Button'
import { InputText } from '../../InputText'
import * as S from './CookieForm.style'
import * as Yup from 'yup'

const CookieForm = ({ text, title, onClickBack, lgpdApi }) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [protocol, setProtocol] = useState('')

  const onSubmit = async values => {
    try {
      const response = await lgpdApi.post(`lgpd`, values)

      setProtocol('1')
      setIsStatusOpen(true)
    } catch (error) {
      setIsStatusOpen(false)
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório.'),
    email: Yup.string()
      .email('Este campo deve ser um email válido.')
      .required('Campo obrigatório'),
    phone: Yup.string().required('Campo obrigatório.'),
    cpf: Yup.string().required('Campo obrigatório.'),
    information: Yup.string().required('Campo obrigatŕoio.'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      cpf: '',
      information: '',
    },
    onSubmit,
    validationSchema: schema,
  })
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {text}
      <S.Text>
        Informe seus dados abaixo, para que possamos identificá-lo e prosseguir
        com sua solicitação.
      </S.Text>

      <FormikProvider value={formik}>
        <S.Form onSubmit={formik.handleSubmit}>
          {isStatusOpen ? (
            <S.Status status="success">
              <p>
                Sua solicitação foi validada com sucesso. Anote o número do
                protocolo: {protocol}
              </p>
              <p>Em breve entraremos em contato.</p>
            </S.Status>
          ) : (
            <>
              <S.Line>
                <InputText
                  name="name"
                  label="Nome completo"
                  isRequired
                  placeholder="Nome"
                />
                <InputText
                  name="cpf"
                  label="CPF"
                  mask="999.999.999-99"
                  isRequired
                  placeholder="CPF"
                />
              </S.Line>
              <S.Line>
                <InputText
                  name="email"
                  label="Email"
                  isRequired
                  placeholder="Email"
                />
                <InputText
                  name="phone"
                  label="Telefone"
                  mask="(99) 9 9999-9999"
                  isRequired
                  placeholder="Telefone"
                />
              </S.Line>
              <S.Line width="100%">
                <InputText
                  name="information"
                  label="Informações Adicionais"
                  type="textarea"
                  isRequired
                  placeholder="Informações Adicionais"
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
            </>
          )}
        </S.Form>
      </FormikProvider>
    </S.Container>
  )
}

export { CookieForm }
