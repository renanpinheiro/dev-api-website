import { FormikConfig, FormikProvider, FormikValues, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { MultipleCheckbox } from '../../components/MultipleCheckbox'
import { InputText } from '../../components/InputText'
import { departaments } from '../../constants/departaments'
import { employerRanges } from '../../constants/employerRanges'
import * as S from '../../styles/freeTrial'
import { Checkbox } from '../../components/Checkbox'

const FormStepper = ({ children }) => {
  const formsArray = React.Children.toArray(children) as React.ReactElement[]
  const [step, setStep] = useState(0)
  const currentForm = formsArray[step]

  const isLastStep = () => {
    return step === formsArray.length - 1
  }

  const isFirstStep = () => {
    return step === 0
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
      departaments: [],
      employees: '',
      agreeComunication: false,
      agreePrivacyPolice: false,
    },
    onSubmit,
  })

  const goBack = () => {
    setStep(step - 1)
  }

  return (
    <FormikProvider value={formik}>
      <S.Form onSubmit={formik.handleSubmit}>
        {currentForm}
        <S.ButtonContainer>
          {!isFirstStep() ? (
            <Button
              text={'Voltar'}
              size={'default'}
              type={'outline'}
              buttonType={'button'}
              onClick={goBack}
            />
          ) : (
            <div></div>
          )}
          <Button
            text={isLastStep() ? 'Enviar' : 'Proximo'}
            size={'default'}
            type={'default'}
          />
        </S.ButtonContainer>
      </S.Form>
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
    </>
  )
}

const DepartamentForm = () => {
  return (
    <>
      <S.Title>Qual setor a empresa está inserida?</S.Title>
      <S.SubTitle>Selecione a opção que defina o setor da empresa.</S.SubTitle>
      <S.DepartamentContainer>
        {departaments.map((departament, idx) => (
          <S.CheckboxContainer key={idx}>
            <MultipleCheckbox
              text={departament}
              name={'departaments'}
              isMultiple
            />
          </S.CheckboxContainer>
        ))}
      </S.DepartamentContainer>
    </>
  )
}

const LastForm = () => {
  return (
    <>
      <S.Title>Para finalizar, quantos funcionários a empresa tem?</S.Title>
      <S.SubTitle>
        Selecione a opção que defina a quantidade de colaboradores da empresa.
      </S.SubTitle>
      <S.RangeContainer>
        {employerRanges.map((range, idx) => {
          return (
            <S.CheckboxContainer key={idx}>
              <MultipleCheckbox text={range} name={'employees'} />
            </S.CheckboxContainer>
          )
        })}
      </S.RangeContainer>
      <Checkbox label={'Concordo em receber comunicações.'} name={'agree'} />
      <Checkbox
        label={
          <span>
            Concordo com a <S.Bolder>Política de privacidade.</S.Bolder>
          </span>
        }
        name={'agree'}
      />
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
          <LastForm />
        </FormStepper>
      </S.FormContainer>
    </S.Container>
  )
}

export default FreeTrial
