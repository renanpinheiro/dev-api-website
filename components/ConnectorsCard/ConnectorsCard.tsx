import React from 'react'
import { HiPlusSm } from 'react-icons/hi'

import { IConnectorsCardProps } from './ConnectorsCard.interface'
import * as S from './ConnectorsCard.style'

const ConnectorsCard = ({ connectors, text }: IConnectorsCardProps) => {
  return (
    <S.Container>
      <S.ConnectorsContainer>
        {connectors.map((item, index) => {
          const hasPlus = index !== connectors.length - 1
          return (
            <React.Fragment key={index}>
              <S.Connector>
                <img src={item.url} alt={item.name} />
                <span>{item.name}</span>
              </S.Connector>

              {hasPlus && (
                <S.Plus>
                  <HiPlusSm />
                </S.Plus>
              )}
            </React.Fragment>
          )
        })}
      </S.ConnectorsContainer>

      <S.Text>
        <p>{text}</p>
      </S.Text>
    </S.Container>
  )
}

export { ConnectorsCard }
