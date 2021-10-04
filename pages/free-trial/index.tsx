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
      <FormikProvider value={formik}>
        <S.Form>
          <InputText name={'name'} label={'Nome Completo'} isRequired />
          <S.InputContainer>
            <InputText name={'email'} label={'Email'} isRequired />
            <InputText name={'phone'} label={'Telefone'} isRequired />
          </S.InputContainer>
          <S.InputContainer>
            <InputText name={'company'} label={'Empresa'} isRequired />
            <InputText name={'role'} label={'Cargo'} isRequired />
          </S.InputContainer>
          <S.InputContainer>
            <Button text={'Proximo'} size={'small'} type={'default'} />
          </S.InputContainer>
        </S.Form>
      </FormikProvider>
    </S.Container>
  )
}

export default FreeTrial
