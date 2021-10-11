import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { IButtonStyle } from './ButtonLink.interface'

const type = {
  default: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.green[100]};
    border: 1px solid ${theme.colors.green[100]};

    :hover {
      background-color: ${theme.colors.green[200]};
      border: 1px solid ${theme.colors.green[200]};
    }
  `,

  outline: css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.secondary};

    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};
    }
  `,
}

const size = {
  small: css`
    height: 40px;
    padding: 5px 20px;
    font-size: 1.125rem;
    font-weight: 700;
  `,

  default: css`
    height: 45px;
    padding: 5px 30px;
    font-size: 1.3rem;
    font-weight: 700;
  `,

  large: css`
    height: 50px;
    padding: 5px 20px;
    font-size: 1.75rem;
    font-weight: 700;
  `,
}

export const Container = styled.div<IButtonStyle>`
  width: max-content;
  margin: ${props => props.margin};

  > a {
    display: flex;
    align-items: center;
    width: max-content;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.2s ease-out 0s;

    ${props => size[props.size]}
    ${props => type[props.type]}

    &:disabled {
      background-color: ${theme.colors.gray[600]};

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`
