import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 8vw 5vh 8vw;
`
export const ListColumn = styled.ul`
  column-count: 2;
  @media (max-width: 996px) {
    column-count: 1;
  }

  color: ${theme.colors.secondary};
`
export const ListItem = styled.li`
  display: flex;

  align-self: center;
  justify-self: center;

  max-width: 45ch;

  :before {
    padding-right: 8px;
    font-size: 3rem;

    content: '•';
  }

  span {
    padding-top: 10px;

    font-size: 16px;
    line-height: 2;
    color: ${theme.colors.primary};
  }
`
