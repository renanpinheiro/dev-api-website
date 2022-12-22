import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'
import { IContainerStyles, IHeaderStyle } from './Header.interface'

export const Container = styled.div<IContainerStyles>`
  position: fixed;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  user-select: none;
  background-color: ${theme.colors.header};
  transition: all 0.3s ease-in-out;
  ${({ isCentralized }) =>
    isCentralized &&
    css`
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        padding: 2vh 0;
      }
      div {
        width: auto;
      }
    `}
`

export const ContainerGrid = styled.div`
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 10vw;

  @media (max-width: 450px) {
    padding-top: 2vh;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 90px;
  height: 100%;
  padding: 2vh 0 2vh 0;
  cursor: pointer;
`

export const NavBarContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: right;
  margin-right: 2.5vw;
  cursor: pointer;

  @media (max-width: 1600px) {
    margin-right: 4vw;
  }

  @media (max-width: 1599.99px) {
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

export const NavLink = styled.a<IHeaderStyle>`
  color: ${theme.colors.primary};
  text-decoration: none;
  ${props =>
    props.isActive &&
    css`
      font-weight: 700;
      color: ${theme.colors.secondary};
    `}

  @media (max-width: 1300px) {
    font-size: 18px;
  }
`

export const Arrow = styled.img`
  width: 100%;
  height: 100%;
  margin: 5px 0 0 5px;
`

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`

export const Menu = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;

  > span {
    margin-right: 0.625rem;
    font-size: 1.25rem;
    color: ${theme.colors.primary};
  }
`

export const Burger = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin-top: -2%;

  div {
    position: relative;
    width: 2rem;
    height: 0.125rem;
    background: ${theme.colors.tertiary};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    @media (max-width: 1280px) {
      height: 0.25rem;
    }
  }
`
