import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { ICookieStyle } from './Cookie.interface'

export const Container = styled.div<ICookieStyle>`
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  ${props =>
    props.isOpen
      ? css`
          position: fixed;
          z-index: 15;
          background-color: rgba(0, 0, 0, 0.6);
        `
      : css`
          position: absolute;
          z-index: 10;
        `}
`

export const CookieContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding-bottom: 5vh;
`

export const Cookie = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80vw;

  padding: 2vh 2vw;

  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 25px #5f47ff29;

  a {
    color: ${theme.colors.secondary};
  }
`

export const CookieModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 60vw;
  height: 70vh;

  background-color: ${theme.colors.white};
  border-radius: 10px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 2vh 2vw 5vh 2vw;

  h3 {
    font-size: 3vh;
    font-weight: 700;
  }
`

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Tab = styled.div<ICookieStyle>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;

  padding: 0 0 2vh 0;

  font-size: 2.7vh;
  font-weight: 700;

  cursor: pointer;

  ${props =>
    props.isActive
      ? css`
          color: ${theme.colors.secondary};
          border-bottom: 3px solid ${theme.colors.secondary};
        `
      : css`
          color: ${theme.colors.gray[300]};
          border-bottom: 3px solid ${theme.colors.gray[300]};
        `}
`

export const ContentContainer = styled.div`
  height: 100%;

  padding: 2vh 2vw;
`
