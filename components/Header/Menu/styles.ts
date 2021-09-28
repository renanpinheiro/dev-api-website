import styled from 'styled-components'

interface IContainerProps {
  open: boolean
}

interface IOverlayProps {
  isOverlay: boolean
}

export const Overlay = styled.div<IOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1005;
  width: 100%;
  height: 100vh;
  visibility: ${props => (props.isOverlay ? 'visible' : 'hidden')};
  background: #06071a;
  opacity: ${props => (props.isOverlay ? 0.5 : 0)};
`

export const Menu = styled.div<IContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1080;
  display: flex;
  flex-direction: column;
  width: 72%;
  height: 100vh;
  padding: 7rem 3rem 3rem 3rem;
  text-align: left;
  background-image: url('/backgrounds/bg-menu.svg');
  background-position: center;
  background-size: cover;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 992px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 1600px) {
    padding-top: 1.5rem;
  }

  @media (min-width: 1280px) and (max-width: 1600px) {
    width: 81%;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 15rem;

  @media (max-width: 992px) {
    padding-top: 2.5rem;
    padding-left: 0;
  }
`

export const Close = styled.div`
  position: fixed;
  top: 5%;
  right: 17%;
  z-index: 1082;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    top: 2%;
    right: 1.25rem;
  }

  &:hover {
    cursor: pointer;
  }

  > span {
    display: flex;
    margin-right: 0.625rem;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.primary};

    @media (max-width: 992px) {
      display: none;
    }
  }

  > svg {
    font-size: 2.625rem;
    color: ${props => props.theme.colors.primary};

    @media (max-width: 992px) {
      font-size: 2rem;
    }
  }
`

export const BgCicle = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1081;
  display: block;
  width: 50%;
  height: 40%;
  background-image: url('../static/images/bg-menu-circle.svg');

  @media (max-width: 992px) {
    display: none;
  }

  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 65%;
    height: 40%;
  }
`

export const Nav = styled.div`
  > ul {
    list-style: none;

    @media (max-width: 992px) {
      padding-right: 5rem;
      padding-left: 5rem;
    }

    > li {
      > a {
        display: flex;
        align-items: center;
        font-size: 3.875rem;
        font-weight: 600;
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        transition: all 0.2s;

        @media (max-width: 992px) {
          font-size: 1.75rem;
        }

        @media (max-width: 1366px) {
          font-size: 2.8rem;
        }

        &:hover {
          color: ${props => props.theme.colors.secondary};
        }
      }

      > h6 {
        display: flex;
        align-items: center;
        font-size: clamp(42px, 45px, 62px);
        font-weight: 600;
        color: ${props => props.theme.colors.primary};

        @media (max-width: 992px) {
          font-size: 1.75rem;
        }
      }
    }

    .activeLink {
      color: ${props => props.theme.colors.secondary};

      &::before {
        position: relative;
        right: 20px;
        display: block;
        width: 60px;
        height: 4px;
        margin-left: -60px;
        content: '';
        background-color: ${props => props.theme.colors.secondary};

        @media (max-width: 992px) {
          right: 15px;
          width: 45px;
          height: 2px;
          margin-left: -45px;
        }
      }
    }
  }
`

export const Subnav = styled.div`
  > ul {
    list-style: none;

    > li {
      margin-left: 30px;
      line-height: 3rem;

      @media (max-width: 992px) {
        line-height: 2.5rem;
      }

      > a {
        display: flex;
        font-size: 38px;
        font-weight: 500;
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        @media (max-width: 992px) {
          font-size: 1.375rem;
        }

        &:hover {
          color: ${props => props.theme.colors.secondary};
          text-decoration: none;
        }

        &.active {
          color: ${props => props.theme.colors.secondary};
        }
      }
    }
  }
`

export const SignUp = styled.button`
  display: none;

  @media (max-width: 992px) {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1.125rem;
    font-size: 1.375rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondary};
    border: none;
  }
`
