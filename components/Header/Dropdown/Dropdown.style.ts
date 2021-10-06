import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'
import { IDropdownStyle } from './Dropdown.interface'

export const Container = styled.div`
  position: relative;
`

export const DropdownContainer = styled.div<IDropdownStyle>`
  position: absolute;

  display: flex;
  flex-wrap: wrap;

  width: ${props => (props.hasTwoColumns ? '370px' : '195px')};

  padding: 15px 10px;
  margin-top: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 3px 10px #5f47ff29;

  ::after {
    position: absolute;
    top: -7px;
    left: 25px;
    width: 5px;
    height: 5px;

    font-size: 10px;
    color: ${theme.colors.white};

    content: '▇';
    transform: rotate(45deg);
  }
`

export const DropdownItemContainer = styled.div<IDropdownStyle>`
  ${props =>
    props.isActive &&
    css`
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.gray[100]};
    `}

  .active {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.gray[100]};
  }
`

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 175px;
  height: 50px;

  padding: 15px 0px 15px 15px;

  font-weight: 500;

  border-radius: 5px;

  :hover {
    color: ${theme.colors.secondary};
    cursor: pointer;
    background-color: ${theme.colors.gray[100]};
  }
`
