import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'
import { theme } from '../../styles/theme'
import { IErrorTextStyle } from './TrialForm.interface'

export const Form = styled(FormikForm)`
  width: 100%;
`
export const DefaultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

export const CheckboxContainer = styled.div`
  flex: 0 1 49%;
  margin: 0 0 10px 0;

  @media (max-width: 900px) {
    flex: 0 1 100%;
  }
`

export const DepartamentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 900px) {
    height: 60vh;
    overflow: scroll;
  }
`
export const RangeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const Bolder = styled.span`
  font-weight: bold;
`
export const StepsContainer = styled.div`
  width: 100%;
  margin: 5vh 0;
`

export const ErrorText = styled.p<IErrorTextStyle>`
  height: 15px;
  font-size: 1rem;
  color: ${theme.colors.red[200]};

  ${({ hasError }) =>
    hasError &&
    css`
      ::before {
        content: '•  ';
      }
    `}
`

export const Title = styled.h2`
  width: 100%;
  margin-bottom: 15px;
`
export const SubTitle = styled.p`
  margin-bottom: 4vh;
  font-size: 1.4rem;
`
