import styled, { css } from 'styled-components'

import {
  Accordion as AccordionBootstrap,
  Card as CardBootstrap,
} from 'react-bootstrap'
import { theme } from '../../../styles/theme'

interface IListStyle {
  hasDot?: boolean
}

export const AccordionContainer = styled.div`
  padding: 2vh 0 0 0;
  overflow-y: auto;
`

export const Accordion = styled(AccordionBootstrap)`
  background-color: ${theme.colors.gray[100]};
`

export const Card = styled(CardBootstrap)`
  background-color: transparent;
  border: none;
`

export const CardHeader = styled(CardBootstrap.Header)`
  display: flex;
  align-items: center;

  padding: 0.5rem 0rem;

  cursor: pointer;

  background-color: transparent;
  border: none;
`

export const Title = styled.div`
  display: flex;
  flex: 1;

  margin-left: 10px;

  font-weight: 700;
  color: ${theme.colors.secondary};
`

export const AccordionToggle = styled(AccordionBootstrap.Toggle)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: transparent;
  border: none;

  div {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    background-color: ${theme.colors.secondary};

    border-radius: 3px;

    ::after {
      width: 10px;
      height: 2px;

      content: '';

      background-color: ${theme.colors.white};
    }

    ::before {
      position: absolute;

      width: 10px;
      height: 2px;

      content: '';
      background-color: ${theme.colors.white};

      transition: all 0.4s ease-in-out;
      transform: rotate(${props => (props.isActive ? '0deg' : '90deg')});
    }
  }
`

export const AccordionCollapse = styled(AccordionBootstrap.Collapse)``

export const CardBody = styled(CardBootstrap.Body)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;

  padding: 0;
`

export const LinkContainer = styled.div`
  padding: 0.5rem 1.9rem;
  cursor: pointer;
`

export const Text = styled.p`
  font-size: 2.2vh;
`

export const DetailsContainer = styled.div`
  display: flex;
  width: 60%;

  margin-bottom: 10px;

  ul {
    li {
      margin-bottom: 10px;
    }
    margin-right: 30px;
  }

  @media (max-width: 992px) {
    width: 90%;
  }
`

export const List = styled.ul`
  width: 50%;
`

export const ListName = styled.li<IListStyle>`
  font-size: 2.2vh;
  color: ${theme.colors.secondary};

  ${props =>
    props.hasDot
      ? css`
          list-style: disc;
        `
      : css`
          min-width: 2.2vh;
          min-height: 2.2vh;
          list-style: none;
        `}
`
