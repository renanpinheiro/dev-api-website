import React from 'react'

import { ICustomers } from './Customers.interface'
import * as S from './Customers.style'

const Customers = ({ title, items }: ICustomers) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Wrapper>
        {items.map((item, index) => {
          return (
            <S.Images key={index}>
              <img src={item.url} alt={item.name} />
            </S.Images>
          )
        })}
      </S.Wrapper>
    </S.Container>
  )
}

export { Customers }
