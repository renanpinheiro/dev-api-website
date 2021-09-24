import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ContainerForm = styled.div`
  margin-top: 20px;
  margin-bottom: 65px;
  max-width: 450px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

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
  width: 100%;
  height: 60px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputNewsletter = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem 0.75rem;

  color: ${theme.colors.gray[800]};
  border: 1px solid ${theme.colors.gray[500]};
  border-right: 0;
  border-radius: 5px 0 0 5px;

  background-color: white;
  background-clip: padding-box;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  &:focus {
    border: 1px solid ${theme.colors.green[100]};
    border-right: 0;
  }
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
`
export const ButtonNewsLetter = styled.button`
  width: auto;
  height: 100%;
  padding: 1rem 0.75rem;

  left: -4px;
  position: relative;
  z-index: 2;
  cursor: pointer;

  text-align: center;
  vertical-align: middle;
  font-weight: 400;
  font-size: 1rem;

  color: white;
  background-color: ${theme.colors.green[100]};

  &:active {
    background-color: ${theme.colors.green[200]};
  }

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  border: 1px solid ${theme.colors.gray[500]};
  border-left: 0;

  border-radius: 0 5px 5px 0;
  user-select: none;

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
