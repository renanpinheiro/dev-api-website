import { FormikConfig, FormikProvider, FormikValues, useFormik } from 'formik'
import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { InputText } from '../../components/InputText'
import * as S from '../../styles/freeTrial'

const FormStepper = ({ children }) => {
  const formsArray = React.Children.toArray(children) as React.ReactElement[]
  const [step, setStep] = useState(0)
  const currentForm = formsArray[step]

  function isLastStep() {
    return step === formsArray.length - 1
  }

  const onSubmit = async (values: FormikValues) => {
    if (isLastStep()) {
      console.log(values)
    } else {
      setStep(step + 1)
    }
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
    },
    onSubmit,
  })

  return (
    <FormikProvider value={formik}>
      <S.Form onSubmit={formik.handleSubmit}>{currentForm}</S.Form>
    </FormikProvider>
  )
}

const PersonalForm = () => {
  return (
    <>
      <S.Title>Vamos desbloquear o poder da integração de sistemas?</S.Title>
      <S.SubTitle>
        Preencha os campos abaixo para que possamos entrar em contato com você.
      </S.SubTitle>
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
    </>
  )
}

const DepartamentForm = () => {
  return (
    <>
      <S.Title>Qual setor a empresa está inserida?</S.Title>
      <S.SubTitle>Selecione a opção que defina o setor da empresa.</S.SubTitle>
      <Checkbox text={'Software e Cloud'} />
    </>
  )
}
const FreeTrial = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <FormStepper>
          <PersonalForm />
          <DepartamentForm />
        </FormStepper>
      </S.FormContainer>
    </S.Container>
  )
}

export default FreeTrial
