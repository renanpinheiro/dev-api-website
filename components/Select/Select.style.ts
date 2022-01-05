import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import {
  ILabelStyles,
  IOptionsContainerStyle,
  ISelectionStyle,
} from './Select.interface'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  cursor: pointer;
  border: 1px solid;
  border-color: ${theme.colors.gray[400]};
  border-radius: 5px;
`

export const Icon = styled.img`
  height: 10px;
  margin: 0 10px;
  cursor: pointer;
`

export const Selection = styled.input<ISelectionStyle>`
  width: 90%;
  height: 100%;
  padding-left: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #fff;
  border: none;
  outline: 0;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors.red};
    `};
`
export const OptionsContainer = styled.div<IOptionsContainerStyle>`
  display: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      position: absolute;
      z-index: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: 30vh;
      padding: 5px 0;
      margin-top: 70px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid ${theme.colors.gray[400]};
      border-radius: 5px;
    `};
`

export const Option = styled.p`
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 15px;
  font-size: 1.4rem;
  border-bottom: 1px solid ${theme.colors.gray[200]};

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.gray[100]};
  }
`

export const ErrorMessage = styled.p`
  height: 10px;
  color: ${theme.colors.red[200]};
`
