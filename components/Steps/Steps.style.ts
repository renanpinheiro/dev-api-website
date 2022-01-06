import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import {
  IIconContainerStyle,
  IStepTextContainerStyle,
  IStepTextStyle,
} from './Steps.interface'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8vh;
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 10px;
`
export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 33%;
  height: 100%;
  padding: 15px 20px;

  @media (max-width: 600px) {
    padding: 15px 0;
  }
`

export const IconContainer = styled.div<IIconContainerStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vh;

  svg {
    font-size: 3vh;
    color: ${theme.colors.gray[400]};
  }

  ${({ isPass }) =>
    isPass &&
    css`
      background-color: #5f47ff;
      svg {
        color: #fff;
      }
    `}
  border-radius: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`

export const StepTextContainer = styled.div<IStepTextContainerStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 90%;
  ${({ isLastItem }) =>
    !isLastItem &&
    css`
      border-right: 2px solid ${theme.colors.gray[400]};
    `}

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const StepText = styled.p<IStepTextStyle>`
  font-size: 1.2rem;
  color: ${theme.colors.gray[400]};
  ${({ isPass }) =>
    isPass &&
    css`
      color: #5f47ff;
    `}
`
