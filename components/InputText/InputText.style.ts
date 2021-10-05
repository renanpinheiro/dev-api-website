import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { IInputStyles, ILabelStyles } from './InputText.interface'

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;

  margin-bottom: 20px;
`

export const Label = styled.label<ILabelStyles>`
  margin-bottom: 5px;
  font-size: 1.2rem;

  ${({ isRequired }) =>
    isRequired &&
    css`
      ::after {
        color: ${theme.colors.red[200]};
        content: ' *';
      }
    `}
`

export const Input = styled.input<IInputStyles>`
  width: 100%;
  height: 40px;
  padding-left: 15px;
  font-size: 1.2rem;
  border: 1px solid;
  border-color: ${theme.colors.gray[400]};
  border-radius: 5px;

  :focus-visible {
    outline: none;
  }

  :focus {
    border-color: ${theme.colors.gray[700]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors.red};
    `};
`
