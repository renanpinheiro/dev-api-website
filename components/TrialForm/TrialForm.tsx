import React, { useState } from 'react'

import Link from 'next/link'
import router from 'next/router'

import axios from 'axios'
import { FormikConfig, FormikProvider, FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

import { emailCorporateValidation } from '../../utils/validation'

import { Button } from '../../components/Button'
import { MultipleCheckbox } from '../../components/MultipleCheckbox'
import { InputText } from '../../components/InputText'
import { Checkbox } from '../../components/Checkbox'
import { Select } from '../../components/Select'
import { Steps } from '../../components/Steps'

import { departaments } from '../../constants/departaments'
import { employerRanges } from '../../constants/employerRanges'

import {
  stepsDepartamentsForm,
  stepsLastForm,
  stepsPersonalForm,
} from '../../constants/steps'
import { roleOptions } from '../../constants/roleOptions'

import { IFormStepperProps, ITrialFormProps } from './TrialForm.interface'

import { removePhoneMask } from '../../utils/removePhoneMask'

import * as S from './TrialForm.style'

const FormStepper = ({ children, conversionIdentifier }: IFormStepperProps) => {
  const leadsApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
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

  const onSubmit = async values => {
    if (isLastStep()) {
      setIsLoading(true)
      const payload = {
        conversion_identifier: conversionIdentifier,
        full_name: values.formFullName,
        email: values.formEmail,
        phone: removePhoneMask(values.formPhone),
        company: values.formCompany,
        role: values.formRole,
        departaments: values.formDepartaments,
        employees: values.formEmployees,
        is_comunication: values.isComunication,
        is_privacy_police: values.isPrivacyPolice,
      }
      try {
        await leadsApi.post('leads', payload)
        setErrorMessage('')
        router.push('/trial-success')
      } catch (error) {
        setErrorMessage(
          'Desculpe, não conseguimos enviar seus dados, por favor tente novamente!',
        )
      } finally {
        setIsLoading(false)
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
      departaments: '',
      employees: '',
      isComunication: false,
      isPrivacyPolice: false,
    },
    validateOnChange: !!currentForm.props.validateOnChange,
    onSubmit,
    validationSchema: currentForm.props.validationSchema,
  })

  const goBack = () => {
    setStep(step - 1)
    setErrorMessage('')
  }

  const isDisable = () => {
    if (isLastStep()) {
      if (
        formik.values.isComunication &&
        formik.values.isPrivacyPolice &&
        isLastStep()
      ) {
        return false
      }
      return true
    }
  }

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
              isLastStep() ? 'Enviar' : isLoading ? 'Enviando...' : 'Próximo'
            }
            size="default"
            type="default"
            buttonType="submit"
            isDisabled={isDisable()}
          />
        </S.ButtonContainer>
      </S.Form>
    </FormikProvider>
  )
}

const PersonalForm = ({}: Pick<
  FormikConfig<FormikValues>,
  'validationSchema' | 'validateOnChange'
>) => {
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
        name={'formFullName'}
        label={'Nome Completo'}
        placeholder={'Nome'}
        isRequired
      />
      <S.DefaultContainer>
        <S.SmallContainer>
          <InputText
            name={'formEmail'}
            label={'Email'}
            placeholder={'Email'}
            isRequired
          />
        </S.SmallContainer>
        <S.SmallContainer>
          <InputText
            name={'formPhone'}
            label={'Telefone'}
            isRequired
            mask={'(99)9 9999-9999'}
          />
        </S.SmallContainer>
      </S.DefaultContainer>
      <S.DefaultContainer>
        <S.SmallContainer>
          <InputText
            name={'formCompany'}
            label={'Empresa'}
            placeholder={'Empresa'}
            isRequired
          />
        </S.SmallContainer>
        <S.SmallContainer>
          <Select
            isRequered
            name={'formRole'}
            label={'Cargo'}
            options={roleOptions}
          />
        </S.SmallContainer>
      </S.DefaultContainer>
    </>
  )
}

const DepartamentForm = ({}: Pick<
  FormikConfig<FormikValues>,
  'validationSchema' | 'validateOnChange'
>) => {
  const [errorMessage, setErrorMessage] = useState<String>('')

  return (
    <>
      <S.StepsContainer>
        <Steps steps={stepsDepartamentsForm} />
      </S.StepsContainer>
      <S.Title>Qual setor a empresa está inserida?</S.Title>
      <S.SubTitle>Selecione a opção que defina o setor da empresa.</S.SubTitle>
      <S.ErrorText hasError={!!errorMessage}>{errorMessage}</S.ErrorText>

      <S.DepartamentContainer>
        {departaments.map((departament, idx) => (
          <S.CheckboxContainer key={idx}>
            <MultipleCheckbox
              text={departament}
              name={'formDepartaments'}
              setError={setErrorMessage}
            />
          </S.CheckboxContainer>
        ))}
      </S.DepartamentContainer>
    </>
  )
}

const LastForm = ({}: Pick<
  FormikConfig<FormikValues>,
  'validationSchema' | 'validateOnChange'
>) => {
  const [errorMessage, setErrorMessage] = useState<String>('')

  return (
    <>
      <S.StepsContainer>
        <Steps steps={stepsLastForm} />
      </S.StepsContainer>
      <S.Title>Para finalizar, quantos funcionários a empresa tem?</S.Title>
      <S.SubTitle>
        Selecione a opção que defina a quantidade de colaboradores da empresa.
      </S.SubTitle>
      <S.ErrorText hasError={!!errorMessage}>{errorMessage}</S.ErrorText>

      <S.RangeContainer>
        {employerRanges.map((range, idx) => {
          return (
            <S.CheckboxContainer key={idx}>
              <MultipleCheckbox
                text={range}
                name={'formEmployees'}
                setError={setErrorMessage}
              />
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
            Concordo com a{' '}
            <S.Bolder>
              <Link href="/free-trial">
                <a title="Política de privacidade">Política de privacidade.</a>
              </Link>
            </S.Bolder>
          </span>
        }
        name={'isPrivacyPolice'}
      />
    </>
  )
}

const TrialForm = ({ conversionIdentifier }: ITrialFormProps) => {
  // validate email corporate
  Yup.addMethod(Yup.string, 'emailCorporate', function () {
    return this.test({
      name: 'email',
      message: 'Informe um email corporativo',
      test: (email = '') => {
        return emailCorporateValidation(email)
      },
    })
  })

  const validationSchemas = {
    step1: Yup.object().shape({
      formFullName: Yup.string().required('Campo obrigatório.'),
      formEmail: Yup.string()
        .email('Este campo deve ser um email válido.')
        .emailCorporate()
        .required('Campo obrigatório'),
      formPhone: Yup.string().required('Campo obrigatório.'),
      formCompany: Yup.string().required('Campo obrigatório.'),
      formRole: Yup.string().required('Campo obrigatŕoio.'),
    }),
    step2: Yup.object().shape({
      formDepartaments: Yup.string().required(
        'É necessário selecionar uma opção.',
      ),
    }),
    step3: Yup.object().shape({
      formEmployees: Yup.string().required(
        'É necessário selecionar uma opção.',
      ),
    }),
  }

  return (
    <FormStepper conversionIdentifier={conversionIdentifier}>
      <PersonalForm
        validationSchema={validationSchemas.step1}
        validateOnChange
      />
      <DepartamentForm validationSchema={validationSchemas.step2} />
      <LastForm validationSchema={validationSchemas.step3} />
    </FormStepper>
  )
}

export { TrialForm }
