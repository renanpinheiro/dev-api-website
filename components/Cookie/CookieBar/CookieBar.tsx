import React from 'react'
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
            <a href="/politica-de-privacidade">Política de Privacidade.</a>
          </p>
          <S.ButtonContainer>
            <Button
              size="small"
              type="outline"
              text="Preferências"
              margin="0 10px 0 10px"
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
