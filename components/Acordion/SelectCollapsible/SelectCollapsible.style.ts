import styled from 'styled-components'
import { theme } from '../../../styles/theme'

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
export const SelectCollapsibleContainerUp = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;

  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 5px;
  transition: all 0.3s linear;

  img {
    transition: transform 0.6s ease;
  }
  p {
    display: none;
    transition: transform 0.6s, display 1s ease;
  }

  span {
    color: ${theme.colors.primary};
  }

  :hover {
    span {
      color: ${theme.colors.secondary};
    }
  }
`
export const SelectCollapsibleContainerDown = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border: 2px solid ${theme.colors.gray[300]};
  border-radius: 5px;
  transition: max-height 0.6s, padding 0.6s ease;

  p {
    display: block;
    padding-top: 1.5rem;
    transition: max-height 0.6s, padding 0.6s ease;
  }
  img {
    transition: transform 0.6s ease;

    transform: rotate(180deg);
  }
  span {
    color: ${theme.colors.secondary};
  }
`
