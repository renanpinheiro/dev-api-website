import React from 'react'
import * as S from './FreeTest.style'
import { Button } from '../../components/Button'
const FreeTest = () => {
  const handleURL = (url: string) => {
    location.href = url
  }
  return (
    <S.Container>
      <S.PipeFreeContainer>
        <S.PipeFree />
      </S.PipeFreeContainer>
      <S.FreeTestContainer>
        <S.FreeTestText>
          <S.FreeTestLeft>Quer testar a DevApi</S.FreeTestLeft>
          <S.FreeTestSpan>gratuitamente?</S.FreeTestSpan>
        </S.FreeTestText>

        <S.ButtonContainer>
          <Button
            onClick={() => handleURL('fale-com-um-especialista')}
            type="default"
            size="small"
            text="Converse com um especialista"
          />
        </S.ButtonContainer>
      </S.FreeTestContainer>
    </S.Container>
  )
}
export { FreeTest }
