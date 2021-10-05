import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import * as S from '../../styles/freeTrial'

const FreeTrial = () => {
  const onSubmit = async values => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit,
  })

  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>Vamos desbloquear o poder da integração de sistemas?</S.Title>
        <S.SubTitle>
          Preencha os campos abaixo para que possamos entrar em contato com
          você.
        </S.SubTitle>
        <FormikProvider value={formik}>
          <S.Form>
            <InputText
              name={'name'}
              label={'Nome Completo'}
              placeholder={'Nome'}
              isRequired
            />
            <S.InputContainer>
              <InputText
                name={'email'}
                label={'Email'}
                placeholder={'Email'}
                isRequired
              />
              <InputText name={'phone'} label={'Telefone'} isRequired />
            </S.InputContainer>
            <S.InputContainer>
              <InputText
                name={'company'}
                label={'Empresa'}
                placeholder={'Empresa'}
                isRequired
              />
              <InputText name={'role'} label={'Cargo'} isRequired />
            </S.InputContainer>
            <S.ButtonContainer>
              <Button text={'Proximo'} size={'default'} type={'default'} />
            </S.ButtonContainer>
          </S.Form>
        </FormikProvider>
      </S.FormContainer>
    </S.Container>
  )
}

export default FreeTrial
