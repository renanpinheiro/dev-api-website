import { FormikProvider, useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { MultipleCheckbox } from '../../components/MultipleCheckbox'
import { InputText } from '../../components/InputText'
import { departaments } from '../../constants/departaments'
import { employerRanges } from '../../constants/employerRanges'
import * as S from '../../styles/freeTrial'
import { Checkbox } from '../../components/Checkbox'
import { Select } from '../../components/Select'
import { Steps } from '../../components/Steps'
import axios from 'axios'
import router from 'next/router'
import {
  stepsDepartamentsForm,
  stepsLastForm,
  stepsPersonalForm,
} from '../../constants/steps'
import * as Yup from 'yup'

const FormStepper = ({ children }) => {
  const leadsApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_LEADS,
  })

  const formsArray = React.Children.toArray(children) as React.ReactElement[]
  const [step, setStep] = useState(0)
  const [errorMessage, setErrorMessage] = useState<String>('')
  const [isLoading, setIsLoading] = useState(false)
  const currentForm = formsArray[step]

  const isLastStep = () => {
    return step === formsArray.length - 1
  }

  const isFirstStep = () => {
    return step === 0
  }

  const validationSchemas = {
    step1: Yup.object().shape({
      fullName: Yup.string().required('Campo obrigatório.'),
      email: Yup.string()
        .email('Este campo deve ser um email válido.')
        .required('Campo é obrigatório'),
      phone: Yup.string().required('Campo é obrigatório.'),
      company: Yup.string().required('Campo obrigatório.'),
      role: Yup.string().required('Campo obrigatŕoio.'),
    }),
    step2: Yup.object().shape({
      departaments: Yup.array().min(
        1,
        'É necessário selecionar ao menos uma opção.',
      ),
    }),
    step3: Yup.object().shape({
      employees: Yup.string().required('Campo obrigatório'),
    }),
  }

  const schemaArray = [
    validationSchemas.step1,
    validationSchemas.step2,
    validationSchemas.step3,
  ]

  const onSubmit = async values => {
    if (isLastStep()) {
      setIsLoading(true)
      const payload = {
        full_name: values.fullName,
        email: values.email,
        phone: values.phone,
        company: values.company,
        role: values.role,
        departaments: values.departaments,
        employees: values.employees,
        is_comunication: values.isComunication,
        is_privacy_police: values.isPrivacyPolice,
      }
      try {
        await leadsApi.post('/leads', payload)
        router.push('/')
      } catch (error) {
        const errors = {
          'Lead already exist.': 'Email já cadastrado.',
        }
        setErrorMessage(
          errors[error.response?.data?.message] ||
            'Erro ao enviar sua requisição.',
        )
      } finally {
        setIsLoading(false)
        setErrorMessage('')
      }
    } else {
      setStep(step + 1)
    }
  }
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      departaments: [],
      employees: '',
      isComunication: false,
      isPrivacyPolice: false,
    },
    onSubmit,
    validationSchema: schemaArray[step],
  })

  const goBack = () => {
    setStep(step - 1)
    setErrorMessage('')
  }

  useEffect(() => {
    console.log('------>', formik.errors)
    if (formik.errors.departaments) {
      setErrorMessage(formik.errors.departaments as String)
    }
  }, [])

  return (
    <FormikProvider value={formik}>
      <S.Form onSubmit={formik.handleSubmit}>
        {currentForm}
        <S.ErrorText hasError={!!errorMessage}>{errorMessage}</S.ErrorText>
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
            text={
              isLastStep() ? 'Enviar' : isLoading ? 'Enviando...' : 'Proximo'
            }
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
      <S.StepsContainer>
        <Steps steps={stepsPersonalForm} />
      </S.StepsContainer>
      <S.Title>Vamos desbloquear o poder da integração de sistemas?</S.Title>
      <S.SubTitle>
        Preencha os campos abaixo para que possamos entrar em contato com você.
      </S.SubTitle>
      <InputText
        name={'fullName'}
        label={'Nome Completo'}
        placeholder={'Nome'}
        isRequired
      />
      <S.DefaultContainer>
        <S.SmallContainer>
          <InputText
            name={'email'}
            label={'Email'}
            placeholder={'Email'}
            isRequired
          />
        </S.SmallContainer>
        <S.SmallContainer>
          <InputText
            name={'phone'}
            label={'Telefone'}
            isRequired
            mask={'(99)9 9999-9999'}
          />
        </S.SmallContainer>
      </S.DefaultContainer>
      <S.DefaultContainer>
        <S.SmallContainer>
          <InputText
            name={'company'}
            label={'Empresa'}
            placeholder={'Empresa'}
            isRequired
          />
        </S.SmallContainer>
        <S.SmallContainer>
          <Select
            isRequered
            name={'role'}
            label={'Cargo'}
            options={[
              { label: 'teste', value: 'teste-value' },
              { label: 'teste2', value: 'teste2-value' },
            ]}
          />
        </S.SmallContainer>
      </S.DefaultContainer>
    </>
  )
}

const DepartamentForm = () => {
  return (
    <>
      <S.StepsContainer>
        <Steps steps={stepsDepartamentsForm} />
      </S.StepsContainer>
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
      <S.StepsContainer>
        <Steps steps={stepsLastForm} />
      </S.StepsContainer>
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
      <Checkbox
        label={'Concordo em receber comunicações.'}
        name={'isComunication'}
      />
      <Checkbox
        label={
          <span>
            Concordo com a <S.Bolder>Política de privacidade.</S.Bolder>
          </span>
        }
        name={'isPrivacyPolice'}
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
