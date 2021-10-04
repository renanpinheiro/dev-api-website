import { Col } from 'react-bootstrap'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { IColPropsStyle } from './ListColumn.interface'
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ListColumn = styled.ul<IColPropsStyle>`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(${props => props.col || 1}, 1fr);

  padding: 3rem;
  color: ${theme.colors.secondary};
`
export const ListItem = styled.li`
  display: flex;

  align-self: center;
  justify-self: center;

  width: 90%;
  padding-left: 1rem;

  :before {
    padding-right: 8px;
    font-size: 3rem;

    content: '•';
  }

  span {
    /* white-space: pre-wrap; */
    padding-top: 10px;

    font-size: 16px;
    line-height: 2;
    color: ${theme.colors.primary};
  }
`
