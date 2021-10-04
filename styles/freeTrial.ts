import { Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div`
  display: flex;

  justify-content: center;

  min-height: 100vh;
  padding-top: 13vh;
`

export const Form = styled(FormikForm)`
  width: 35vw;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 49%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
