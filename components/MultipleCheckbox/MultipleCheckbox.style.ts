import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import { ICheckStyles } from './MultipleCheckbox.interface'

export const Container = styled.div<ICheckStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  cursor: pointer;
  border: 1px solid ${theme.colors.gray[400]};
  border-radius: 5px;
  ${({ isChecked }) =>
    isChecked &&
    css`
      border: 2px solid ${theme.colors.green[200]};
    `}
`
export const Label = styled.label`
  padding-left: 15px;
  font-size: 1.2rem;
  cursor: pointer;
`

export const Check = styled.label<ICheckStyles>`
  width: 20px;
  height: 20px;
  margin: 0 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${theme.colors.gray[500]};
  border-radius: 2px;
  ${({ isChecked }) =>
    isChecked &&
    css`
      font-size: 1.4rem;
      color: #fff;
      ::after {
        content: '';
      }
      background-color: ${theme.colors.green[200]};
    `}
`
