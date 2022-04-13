import React, { useEffect, useState } from 'react'

import { roleOptions } from '../../constants/roleOptions'
import { Button } from '../Button'
import { InputText } from '../InputText'
import { Select } from '../Select'
import * as S from './FormPartiner.style'
import { IMessage, IPayload } from './FormPartner.interface'

import axios from 'axios'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

const FormPartner = () => {
  const [message, setMessage] = useState<IMessage>()

  const schema = Yup.object().shape({
    message: Yup.string().required('Campo Obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo Obrigatório'),
    phone: Yup.string().required('Campo Obrigatório'),
    company: Yup.string().required('Campo Obrigatório'),
    role: Yup.string().required('Campo Obrigatório'),
    fullName: Yup.string().required('Campo Obrigatório'),
  })

  const onSubmit = async (values: IPayload) => {
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SITE}/api/send-email`,
        values,
      )

      formik.resetForm()
      result.status === 200 &&
        setMessage({
          type: 'success',
          message:
            'Enviado com sucesso! Entraremos em contato o mais brevemente possível',
        })
    } catch {
      setMessage({ type: 'alert', message: 'Algo deu errado!' })
    }
  }

  const formik = useFormik({
    initialValues: {
      message: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      fullName: '',
    },
    validationSchema: schema,
    onSubmit,
  })

  useEffect(() => {
    setTimeout(() => {
      setMessage(undefined)
    }, 3000)
  }, [message])

  return (
    <S.Container>
      <S.TitleContainer>Seja um Parceiro DevApi!</S.TitleContainer>

      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <S.InputContainer>
            <InputText
              label={'Nome Completo'}
              name={'fullName'}
              placeholder={'Nome Completo'}
              type="default"
              isRequired
            />
          </S.InputContainer>
          <S.InputColumnContainer>
            <S.InputColumn>
              <InputText
                label={'Email'}
                name={'email'}
                placeholder={'Email'}
                type="default"
                isRequired
              />
            </S.InputColumn>
            <S.InputColumn>
              <InputText
                name={'phone'}
                label={'Telefone'}
                isRequired
                mask={'(99)9 9999-9999'}
                placeholder={'(  ) ________-_______'}
              />
            </S.InputColumn>

            <S.InputColumn>
              <InputText
                label={'Empresa'}
                name={'company'}
                placeholder={'Empresa'}
                type="default"
                isRequired
              />
            </S.InputColumn>
            <S.InputColumn>
              <Select
                isRequered
                name={'role'}
                label={'Cargo'}
                options={roleOptions}
              />
            </S.InputColumn>
          </S.InputColumnContainer>
          <S.InputContainer>
            <InputText
              label={'Nos conte sobre seu projeto de Parceria'}
              name={'message'}
              placeholder={'Messagem'}
              type="textarea"
              isRequired
            />
          </S.InputContainer>
          <S.ButtonContainer>
            {message ? (
              <S.Message color={message.type}>{message.message}</S.Message>
            ) : (
              <div></div>
            )}
            <Button
              buttonType="submit"
              text="Enviar"
              type="default"
              size="default"
            />
          </S.ButtonContainer>
        </form>
      </FormikProvider>
    </S.Container>
  )
}

export { FormPartner }
