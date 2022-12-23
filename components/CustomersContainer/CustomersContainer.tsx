import React from 'react'

import * as S from './CustomersContainer.style'
import { inlineCustomers } from '../../constants/inlineCustomers'

const CustomersContainer = () => {
  return (
    <>
      <S.CustomersGrid>
        <S.CustomersContainer>
          {inlineCustomers.map((item, index) => {
            return <img key={index} src={item.url} alt="Clientes" />
          })}
        </S.CustomersContainer>
      </S.CustomersGrid>
    </>
  )
}
export { CustomersContainer }
