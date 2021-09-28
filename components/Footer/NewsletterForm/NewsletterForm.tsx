import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as S from './NewsletterForm.styles'
import { IValuesForm, IRdStationResponse } from './NewsletterForm.interfaces'
import { ApiRdStation } from '../../../Services/ApiRdStation'
const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/3898021c-e125-41ca-8f3c-3cd2e9e9bb99-loader.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
  // api https://api.rd.services/platform/conversions
  const handleSubmit = (email: string) => {
    const payloadRD = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'newsletter-devapi',
        email: email,
      },
    }

    ApiRdStation.post<IRdStationResponse>('/', payloadRD)
      .then(response => {
        alert(response)
        setIsSuccess(true)
      })
      .catch(error => {
        alert(error)
        setIsSuccess(false)
      })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      notifications: '',
      policy: '',
    },
    onSubmit: (values: IValuesForm) => {
      handleSubmit(values.email)
    },
  })
  return (
    <S.ContainerForm>
      <form name="newsletter-devapi" onSubmit={formik.handleSubmit}>
        <S.CheckboxContainer>
          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              name="notifications"
              value={formik.values.notifications}
              onChange={formik.handleChange}
            />
            <S.LabelCheckBox>Concordo em receber comunicações</S.LabelCheckBox>
          </S.CheckboxCol>

          <S.CheckboxCol>
            <S.CheckBoxNewsLetter
              name="policy"
              value={formik.values.policy}
              onChange={formik.handleChange}
            />
            <S.LabelCheckBox>
              Concordo com a <span>Política de privacidade</span>
            </S.LabelCheckBox>
          </S.CheckboxCol>
        </S.CheckboxContainer>

        <S.InputGroup>
          <S.InputNewsletter
            placeholder="Digite aqui seu email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <S.ButtonNewsLetter type="submit">Descobrir</S.ButtonNewsLetter>
        </S.InputGroup>
      </form>

      <S.ContainerForm>
        {isSuccess && (
          <S.Message>
            <small>Obrigado! newsletter assinado com sucesso!</small>
          </S.Message>
        )}
      </S.ContainerForm>
    </S.ContainerForm>
  )
}

export { NewsletterForm }
