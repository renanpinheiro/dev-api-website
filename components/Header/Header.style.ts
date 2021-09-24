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

  transition: all 0.3s ease-in-out;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 10vw;
  height: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
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

  @media (max-width: 1200px) {
    display: none;
  }
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 5vw;

  cursor: pointer;

  @media (max-width: 1300px) {
    margin-right: 3vw;
  }

  .active {
    font-weight: 700;
    color: ${theme.colors.secondary};
  }

  a:not(.active) {
    :hover {
      color: ${theme.colors.secondary};
    }
  }
`

export const NavLink = styled.a`
  font-size: 20px;

  @media (max-width: 1300px) {
    font-size: 18px;
  }
`

export const Arrow = styled.img`
  margin: 5px 0 0 5px;
`
