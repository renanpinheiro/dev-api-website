import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { ICheckStyles } from './Checkbox.interface'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  cursor: pointer;
  border: 1px solid ${theme.colors.gray[400]};
  border-radius: 10px;
`
export const Label = styled.label`
  padding-left: 15px;
  font-size: 1.4rem;
`

export const Check = styled.label<ICheckStyles>`
  width: 25px;
  height: 25px;
  margin: 0 15px;
  text-align: center;
  border: 1px solid ${theme.colors.gray[500]};
  border-radius: 5px;

  ${({ isChecked }) =>
    isChecked &&
    css`
      font-size: 1.6rem;
      color: #fff;
      ::after {
        content: '✔';
      }
      background-color: ${theme.colors.green[200]};
    `}
`
