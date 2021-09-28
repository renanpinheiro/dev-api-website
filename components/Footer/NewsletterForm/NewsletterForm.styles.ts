import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 65px;

  @media only screen and (max-width: 828px) {
    width: auto;
    margin-top: 20px;
    margin-bottom: 25px;
  }

  @media only screen and (min-width: 1366px) {
    width: 358px;
    margin-bottom: 45px;
  }

  @media only screen and (min-width: 1517px) {
    width: 405px;
    margin-bottom: 55px;
  }
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 10px;
`
export const InputNewsletter = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem 0.75rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: ${theme.colors.gray[800]};

  background-color: white;
  background-clip: padding-box;
  border: 1px solid ${theme.colors.gray[500]};
  border-right: 0;
  border-radius: 5px 0 0 5px;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:focus {
    border: 1px solid ${theme.colors.green[100]};
    border-right: 0;
  }
`
export const ButtonNewsLetter = styled.button`
  position: relative;

  left: -4px;
  z-index: 2;
  width: auto;
  height: 100%;
  padding: 1rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;

  color: white;

  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: ${theme.colors.green[100]};

  border: 1px solid ${theme.colors.gray[500]};
  border-left: 0;

  border-radius: 0 5px 5px 0;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:active {
    background-color: ${theme.colors.green[200]};
  }

  @media only screen and (max-width: 996px) {
    font-size: 1.25rem;
  }
`
export const Message = styled.div`
  padding: 10px;
  > small {
    font-size: 1rem;
    color: ${props => props.theme.colors.green[100]};
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
  color: ${theme.colors.white};
  text-align: left;
  span {
    font-style: italic;
    font-weight: 700;
  }
`
export const CheckBoxNewsLetter = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;

  font-size: 17px;
  visibility: hidden;
  content: ' ';
  &:after {
    display: inline-block;
    width: 16px;
    height: 16px;

    color: #00bff0;

    cursor: pointer;
    visibility: visible;
    content: ' ';
    background-color: ${theme.colors.gray[900]} padding-box;
    border: 1px solid ${theme.colors.gray[500]};
    border-radius: 3px;
  }
  &:checked:after {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding-right: 2px;
    font-size: 20px;
    color: ${theme.colors.gray[100]};
    cursor: pointer;
    content: '✓';

    background-color: ${theme.colors.primary};
  }
`
