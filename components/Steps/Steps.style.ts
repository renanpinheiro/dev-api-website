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
  width: 100%;
  height: 10vh;
  border: 1px solid ${theme.colors.gray[400]};
  border-radius: 10px;
`
export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 15px 25px;
`

export const IconContainer = styled.div<IIconContainerStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  svg {
    font-size: 40px;
    color: ${theme.colors.gray[500]};
  }
  ${({ isPass }) =>
    isPass &&
    css`
      background-color: #5f47ff;
      svg {
        color: #fff;
      }
    `}
  border-radius: 50%;
`

export const StepTextContainer = styled.div<IStepTextContainerStyle>`
  display: flex;
  align-items: center;
  width: 7vw;
  height: 5vh;

  ${({ isLastItem }) =>
    !isLastItem &&
    css`
      border-right: 2px solid ${theme.colors.gray[400]};
    `}
`
export const StepText = styled.p<IStepTextStyle>`
  padding-left: 20px;
  font-size: 1.2rem;
  color: ${theme.colors.gray[500]};
  ${({ isPass }) =>
    isPass &&
    css`
      color: #5f47ff;
    `}
`
