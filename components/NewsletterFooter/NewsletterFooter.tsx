import React from 'react'

import * as S from './NewsletterFooter.style'
import { NewsletterForm } from '../Footer/NewsletterForm'

const NewsletterFooter = () => {
  return (
    <>
      <S.NewsletterFooterContainer>
        <S.TextContainer>
          <h2>
            Sua empresa totalmente <b>integrada ao mundo digital</b> de forma
            segura, fácil e eficiente.
          </h2>
        </S.TextContainer>

        <NewsletterForm />
      </S.NewsletterFooterContainer>
    </>
  )
}
export { NewsletterFooter }
