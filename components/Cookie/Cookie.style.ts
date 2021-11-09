import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { ICookieStyle } from './Cookie.interface'

import {
  Accordion as AccordionBootstrap,
  Card as CardBootstrap,
} from 'react-bootstrap'

export const Cookie = styled.div`
  position: absolute;
  bottom: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  transition: all 0.3s ease-in-out;
  z-index: 25;
`

export const CookieContainer = styled.div<ICookieStyle>`
  display: flex;
  align-items: flex-end;
  justify-content: ${props => (props.isActive ? 'flex-start' : 'center')};
  width: 100%;
  height: 100%;
`

export const CookieModalOverlay = styled.div<ICookieStyle>`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.isOpen
      ? css`
          position: fixed;
          z-index: 1001;
          background-color: rgba(0, 0, 0, 0.6);
        `
      : css`
          position: absolute;
        `}
`

export const CookieModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50vw;
  max-height: 80vh;
  background-color: ${theme.colors.white};
  border-radius: 10px;

  @media (max-width: 992px) {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3vh 2vw 5vh 2vw;

  h3 {
    font-size: 3vh;
    font-weight: 700;
  }

  @media (max-width: 992px) {
    padding: 2vh 6vw;
  }
`

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Tab = styled.div<ICookieStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: 0 0 2vh 0;

  font-size: 2.7vh;
  font-weight: 700;

  cursor: pointer;

  ${props =>
    props.isActive
      ? css`
          color: ${theme.colors.secondary};
          border-bottom: 3px solid ${theme.colors.secondary};
        `
      : css`
          color: ${theme.colors.gray[400]};
          border-bottom: 3px solid ${theme.colors.gray[400]};
        `}

  @media (max-width: 992px) {
    max-width: 16ch;
    font-size: 2.5vh;
    text-align: center;
  }
`

export const ContentContainer = styled.div`
  height: 100%;
  max-height: 73vh;

  padding: 2vh 2vw;
  overflow: auto;

  font-size: 2.2vh;

  @media (max-width: 992px) {
    padding: 2vh 6vw;
  }
`

export const AccordionContainer = styled.div`
  padding: 2vh 0;
  overflow-y: auto;
`

export const Accordion = styled(AccordionBootstrap)`
  margin-bottom: 20px;
  overflow: auto;
  background-color: ${theme.colors.gray[100]};
`

export const Card = styled(CardBootstrap)`
  background-color: transparent;
  border: none;
`

export const CardHeader = styled(CardBootstrap.Header)`
  display: flex;
  align-items: center;

  height: 60px;

  cursor: pointer;

  background-color: transparent;
  border: none;
`

export const Title = styled.div`
  font-weight: 700;
`

export const CardBody = styled(CardBootstrap.Body)``

export const AccordionToggle = styled(AccordionBootstrap.Toggle)`
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: flex-start;

  height: 100%;

  background-color: transparent;
  border: none;

  img {
    width: 15px;
    height: 100%;
    margin-left: 30px;

    @media (max-width: 992px) {
      margin-left: 15px;
    }
  }
`

export const AccordionCollapse = styled(AccordionBootstrap.Collapse)``

export const Plans = styled.div`
  padding: 0.5rem 1rem;

  margin-bottom: 70px;
  color: ${theme.colors.primary};
`

export const Text = styled.p``

export const SwitchContainer = styled.div``

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  margin-top: 30px;
`
