import styled from 'styled-components'
import { theme } from '../../styles/theme'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 2rem;
`
export const Selectable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 22px;
    font-weight: 700;
  }
  cursor: pointer;
  user-select: none;
`
export const SelectCollapsibleContainer = styled.div`
  width: 80%;
  height: auto;
  padding: 12px;

  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 5px;
  p {
    display: none;
  }
  :active {
    p {
      display: block;
      padding: 10px;
    }

    span {
      color: ${theme.colors.secondary};
    }
  }
  :checked {
    p {
      display: block;
      padding: 10px;
    }

    span {
      color: ${theme.colors.secondary};
    }
  }
`
