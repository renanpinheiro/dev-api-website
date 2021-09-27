import React, { useState, useEffect } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import {
  ContainerForm,
  InputGroup,
  InputNewsletter,
  ButtonNewsLetter,
  Message,
} from './styles'

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
      <ContainerForm>
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
            <InputGroup>
              <InputNewsletter
                placeholder="Digite aqui seu email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <ButtonNewsLetter type="submit" onClick={handleSubmit}>
                Descobrir{' '}
              </ButtonNewsLetter>
            </InputGroup>
          </Form>
        </Formik>
        <ContainerForm>
          {isSuccess && (
            <Message>
              <small>Obrigado! newsletter assinado com sucesso!</small>
            </Message>
          )}
        </ContainerForm>
      </ContainerForm>
    </>
  )
}

export { NewsletterForm }
