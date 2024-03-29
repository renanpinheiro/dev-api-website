import styled from 'styled-components'

import { theme } from '../../../styles/theme'
import { IColorNotificationStyle } from './NewsletterForm.interfaces'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;

  @media only screen and (max-width: 828px) {
    align-items: center;
    width: auto;
    margin-top: 5px;
  }

  @media only screen and (min-width: 1366px) {
    width: 400px;
  }

  @media only screen and (min-width: 1517px) {
    width: 405px;
  }
`
export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 450px;
  margin-top: 5px;

  @media only screen and (max-width: 828px) {
    width: auto;
    margin-top: 3px;
    //margin-bottom: 5px;
  }

  @media only screen and (min-width: 1366px) {
    width: 358px;
    //margin-bottom: 5px;
  }

  @media only screen and (min-width: 1517px) {
    width: 405px;
    //margin-bottom: 5px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 10px;
`

export const InputNewsletter = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  padding: 1.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.colors.gray[800]};
  background-color: white;
  background-clip: padding-box;
  border: 1px solid ${theme.colors.gray[500]};
  border-radius: 30px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  @media only screen and (min-width: 868px) and (max-width: 1366px) {
    width: 35vw;
  }
`
export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px;
`

export const ButtonNewsLetter = styled.button`
  position: absolute;
  right: 6px;
  top: 5px;
  bottom: 3px;
  z-index: 2;
  display: flex;
  align-items: center;
  width: max-content;
  height: 45px;
  padding: 5px 30px;
  margin-right: 0.05rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: ${theme.colors.green[100]};
  border: 1px solid ${theme.colors.green[100]};
  border-radius: 30px;

  &:hover {
    background-color: ${theme.colors.green[200]};
    border: 1px solid ${theme.colors.green[200]};
  }
`

export const Message = styled.div<IColorNotificationStyle>`
  left: 10vw;
  padding: 1vh 1vw;
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgba(0 0 0 20%);

  > small {
    font-size: 1rem;
    color: ${props => props.color || theme.colors.green[100]};
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  height: auto;
`

export const CheckboxCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: normal;
  width: 100%;
  padding: 5px 0 10px 10px;
  cursor: pointer;
`

export const LabelCheckBox = styled.label`
  padding-left: 10px;
  font-size: 18px;
  color: ${theme.colors.primary};
  text-align: left;

  > a {
    color: ${theme.colors.blue};
    transition: all 0.2s ease-out 0s;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`

export const CheckBoxNewsLetter = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  font-size: 17px;
  visibility: hidden;
  content: '';

  &::after {
    display: inline-block;
    width: 18px;
    height: 18px;
    color: #00bff0;
    cursor: pointer;
    visibility: visible;
    content: '';
    background-color: ${theme.colors.gray[900]} padding-box;
    border: 1px solid ${theme.colors.gray[500]};
    border-radius: 3px;
  }

  &:checked::after {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    font-size: 15px;
    color: ${theme.colors.gray[100]};
    cursor: pointer;
    content: '✓';
    background-color: ${theme.colors.tertiary};
  }
`
export const TextContainer = styled.div`
  > h2 {
    width: 100%;
    > b {
      font-weight: bold;
    }
  }
`
