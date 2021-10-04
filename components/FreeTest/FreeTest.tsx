import React from 'react'
import * as S from './FreeTest.style'
import { Button } from '../../components/Button'
const FreeTest = () => {
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
