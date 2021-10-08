import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { ICheckStyles } from './Checkbox.interface'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
`
export const Label = styled.label`
  padding-left: 10px;
  font-size: 1.2rem;
  cursor: pointer;
`

export const Check = styled.label<ICheckStyles>`
  width: 20px;
  height: 20px;
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
        content: '✔';
      }
      background-color: ${theme.colors.green[200]};
    `}
`
