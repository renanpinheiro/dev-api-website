import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`

export const SwitchContainer = styled.div`
  position: relative;
  height: 23px;

  & > input {
    position: relative;
    margin: -2px 0px 0 0;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      content: '';
    }

    &::before {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      transition: all 0.25s ease-in-out;
    }

    &::after {
      border-radius: 21px;
      box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
      transition: all 0.2s;
    }

    &:not(:checked):not(:disabled):hover::before {
      background-color: ${theme.colors.gray[600]};
    }

    &:checked::after {
      right: 0;
    }

    &:checked::before {
      background-color: ${theme.colors.green[100]};
    }

    &:disabled {
      cursor: default;
    }

    &:disabled::after {
      background-color: ${theme.colors.white};
      box-shadow: none;
    }

    &:disabled::before {
      background-color: ${theme.colors.white};
      border-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
    }

    &:disabled:checked::before {
      background-color: ${theme.colors.white};
    }

    &:disabled:checked:after {
      background-color: ${theme.colors.gray[600]};
      box-shadow: none;
    }

    label {
      display: block;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.375rem;
  height: 1.375rem;
  cursor: pointer;
  background: ${theme.colors.gray[600]};
  border-radius: 15px;

  &::after {
    display: block;
    width: 14px;
    height: 14px;
    margin: 4px;
    content: '';
    background: ${theme.colors.white};
    border-radius: 50%;
    transition: 0.3s;
  }
`
export const SwitchInput = styled.input`
  z-index: 1;
  width: 2.375rem;
  height: 1.625rem;
  border-radius: 15px;
  opacity: 0;

  &:checked + label {
    background: ${theme.colors.green[100]};

    &::after {
      display: block;
      width: 0.875rem;
      height: 0.875rem;
      margin-left: 1.25rem;
      content: '';
      border-radius: 50%;
      transition: 0.3s;
    }
  }

  &:disabled + label {
    opacity: 0.7;
  }
`
