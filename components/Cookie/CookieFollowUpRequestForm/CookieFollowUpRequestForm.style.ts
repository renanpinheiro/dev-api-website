import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'
import { Form as FormikForm } from 'formik'

interface ILineStyle {
  width?: string
}

interface IStatusStyle {
  status: 'success' | 'pending' | string
}

const statusVariation = {
  success: css`
    background-color: #dff2bf;
    border: 2px solid ${theme.colors.green[300]};
    border-radius: 5px;
  `,
  pending: css`
    background-color: rgba(241, 196, 15, 0.5);
    border: 2px solid ${theme.colors.yellow[200]};
    border-radius: 5px;
  `,
}

export const Container = styled.div`
  height: 100%;
  max-height: 73vh;
  padding: 3vh;
  margin: 2vh 1vw;
  overflow: auto;
  font-size: 2.2vh;
  background-color: ${theme.colors.gray[100]};
  border-radius: 5px;
`

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 2.2vh;
  font-weight: 700;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  margin-top: 30px;
`

export const Line = styled.div<ILineStyle>`
  display: flex;
  justify-content: space-between;

  div {
    width: ${props => (props.width ? props.width : '49%')};
  }

  @media (max-width: 992px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`

export const Form = styled(FormikForm)`
  width: 100%;
  margin-top: 5vh;
`

export const Status = styled.div<IStatusStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6vh;
  margin-top: 30px;

  ${props => statusVariation[props.status]};
`
