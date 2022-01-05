import React from 'react'

import Link from 'next/link'

import { Button } from '../../Button'
import * as S from './CookieBar.style'

const CookieBar = ({
  isAcceptCookies,
  handleClickPreferences,
  handleClickAccept,
}) => {
  return (
    <>
      {isAcceptCookies ? (
        <S.AcceptCookie>
          <img
            src="/icons/cookie.png"
            alt="cookie"
            onClick={handleClickPreferences}
          />
        </S.AcceptCookie>
      ) : (
        <S.Cookie>
          <p>
            Clicando em "Aceito todos os Cookies", você concorda com o
            armazenamento de cookies no seu dispositivo para melhorar a
            experiência e navegação no site. Para saber mais, acesse a{' '}
            <Link href="/politica-de-privacidade">
              <a title="Política de Privacidade" rel="noreferrer">
                Política de Privacidade.
              </a>
            </Link>
          </p>
          <S.ButtonContainer>
            <Button
              size="small"
              type="outline"
              text="Preferências"
              margin="0 20px 0 20px"
              onClick={handleClickPreferences}
            />
            <Button
              size="small"
              type="default"
              text="Aceitar todos"
              onClick={handleClickAccept}
            />
          </S.ButtonContainer>
        </S.Cookie>
      )}
    </>
  )
}

export { CookieBar }
