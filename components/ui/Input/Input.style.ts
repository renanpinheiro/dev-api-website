import styled, { css } from 'styled-components'

interface IContainerProps {
  isErrored: boolean
}

export const Container = styled.div<IContainerProps>`
  margin-bottom: 1rem;

  > input,
  > textarea {
    display: block;
    width: 100%;
    height: calc(2.438em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.white};
    background-clip: padding-box;
    border: 1px solid ${props => props.theme.colors.gray[800]};
    border-radius: 0.25rem;

    ${props =>
      props.isErrored &&
      css`
        border-color: ${props => props.theme.colors.red};
      `}

    &:focus {
      outline: none;
      border-color: ${props =>
        props.isErrored
          ? props.theme.colors.red
          : props.theme.colors.gray[800]};
    }
  }

  > textarea {
    min-height: 100px;
  }

  > label {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }

  > span {
    display: block;
    margin-top: 5px;
    color: ${props => props.theme.colors.red};
  }
`
