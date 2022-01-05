import React from "react";

import {ICardCases} from './CardCase.interface'
import {Button} from '../../components/Button'
import * as S from './CardCase.style'

export const CardCase=({cases}:ICardCases)=>{
    return (
        <S.Container>
            {
               cases.map((value,index)=>{
                return (
                   <S.CardBox key={index}>
                       <S.ImageContainer>
                           <img src={value.image} />
                       </S.ImageContainer>
                       <S.Title>
                           {value.title}
                       </S.Title>
                       <S.ContentText>
                       {value.content}
                       </S.ContentText>
                       <S.ButtonContainer>
                          <S.ButtonCard type="button">Conheça essa história</S.ButtonCard>
                       </S.ButtonContainer>
                   </S.CardBox>)
               })
            }
        </S.Container>
    )
}