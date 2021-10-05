import { Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 13vh;
`
export const Title = styled.h2`
  width: 100%;
  margin-bottom: 15px;
`
export const SubTitle = styled.p`
  margin-bottom: 15px;
  font-size: 1.4rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38vw;
`

export const Form = styled(FormikForm)`
  width: 100%;
  margin-top: 35px;
`
export const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

export const CheckboxContainer = styled.div`
  width: 49%;
  margin-bottom: 10px;
`
export const DepartamentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 55vh;
  margin-top: 35px;
`
export const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 15vh;
  margin-top: 35px;
`

export const Bolder = styled.span`
  font-weight: bold;
`
