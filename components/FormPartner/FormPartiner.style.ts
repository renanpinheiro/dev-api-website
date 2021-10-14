import { propTypes } from 'react-bootstrap/esm/Image'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { IColorNotificationStyle } from './FormPartner.interface'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;

  padding: 1vh;
`
export const TitleContainer = styled.h2`
  padding-bottom: 3vh;
  font-size: 3.5vh;
  font-weight: 700;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const InputColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
`
export const InputColumn = styled.div`
  flex: 0 0 49%;
  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`
const colorVaritation = {
  success: css`
    color: ${theme.colors.green[100]};
  `,
  alert: css`
    color: ${theme.colors.red[100]};
  `,
}

export const Message = styled.p<IColorNotificationStyle>`
  ${({ color }) => colorVaritation[color]}
`
