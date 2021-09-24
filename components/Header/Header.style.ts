import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { IHeaderContainerStyle } from './Header.interface'

export const Container = styled.div<IHeaderContainerStyle>`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 13vh;

  padding: 0vh 8vw 0 8vw;

  user-select: none;

  background-color: ${props => (props.isScrollStyle ? 'white' : 'transparent')};

  background-color: ${theme.colors.gray[550]};
  transition: all 0.3s ease-in-out;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 18vw;
  height: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 22vw;
  height: 100%;
`

export const Logo = styled.img`
  height: 100%;

  padding: 2vh 0 2vh 0;
  cursor: pointer;
`

export const NavBarContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  height: 100%;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const NavLink = styled.div`
  font-size: 20px;
  cursor: pointer;
`
