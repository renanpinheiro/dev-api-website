import React, { useState, useEffect } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import * as S from './styles'

interface Values {
  email: string
}
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
  const handleSubmit = () => {
    setTimeout(() => {
      setEmail('')
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <>
      <S.ContainerForm>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>,
          ) => {
            setTimeout(() => {
              setIsSuccess(true)
              setSubmitting(false)
            }, 1500)
          }}
        >
          <Form name="newsletter-devapi">
            <S.InputGroup>
              <S.InputNewsletter
                placeholder="Digite aqui seu email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <S.ButtonNewsLetter type="submit" onClick={handleSubmit}>
                Descobrir{' '}
              </S.ButtonNewsLetter>
            </S.InputGroup>
          </Form>
        </Formik>
        <S.ContainerForm>
          {isSuccess && (
            <S.Message>
              <small>Obrigado! newsletter assinado com sucesso!</small>
            </S.Message>
          )}
        </S.ContainerForm>
      </S.ContainerForm>
    </>
  )
}

export { NewsletterForm }
