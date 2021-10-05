import React from 'react'
import * as S from './FreeTest.style'
import { Button } from '../../components/Button'
const FreeTest = () => {
  const handleURL = (url: string) => {
    location.href = url
  }
  return (
    <S.FreeTestContainer>
      <S.FreeTestRows>
        <S.Pipe />
        <S.FreeTest>
          <h2>
            Quer testar a DevApi <span>gratuitamente?</span>
          </h2>
          <S.ButtonContainer>
            <Button
              onClick={() => handleURL('fale-com-um-especialista')}
              type="default"
              size="default"
              text="Converse com um especialista"
            />
          </S.ButtonContainer>
        </S.FreeTest>
      </S.FreeTestRows>
    </S.FreeTestContainer>
  )
}
export { FreeTest }
