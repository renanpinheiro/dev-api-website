import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 8vw 0 8vw;

  @media (max-width: 900px) {
    align-items: flex-start;
    padding-left: 0;
  }
`
export const ListColumn = styled.ul`
  column-count: 2;
  color: ${theme.colors.secondary};

  @media (max-width: 996px) {
    column-count: 1;
    align-items: flex-start;
  }
`
export const ListItem = styled.li`
  display: flex;
  align-self: center;
  width: 100%;

  @media (max-width: 996px) {
    padding: 0;
  }

  @media (min-width: 1600px) {
    padding: 0 10vh;
  }

  :before {
    padding-right: 8px;
    font-size: 3rem;
    content: '•';
  }

  > span {
    padding-top: 10px;
    font-size: 1.375rem;
    line-height: 1.5;
    color: ${theme.colors.primary};
  }
`
