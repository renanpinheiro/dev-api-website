import styled, { css, keyframes } from 'styled-components'
import { theme } from './theme'
import {
  Button,
  FormControl as BFormControl,
  InputGroup as BInputGroup,
  Dropdown as BDropdown,
  DropdownButton as BDropdownButton,
} from 'react-bootstrap'

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`

export const Hero = styled.section`
  position: relative;
  z-index: 13;
  height: 80vh;
  padding-top: 5vh;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/backgrounds/bg-hero-connectors.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 768px) {
    height: 90vh;
    background-image: none;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  text-align: center;

  @media (max-width: 996px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }

  > hr {
    width: 13vh;
    height: 3px;
    margin-bottom: 2vh;
    background-color: ${theme.colors.secondary};

    @media (max-width: 576px) {
      width: 8vh;
    }
  }

  > h1 {
    font-size: 2.625rem;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.75rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 42%;
    margin: 3vh 0 4vh;
    font-size: 1.375rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 35%;
    }
  }
`

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5%;

  @media (max-width: 996px) {
    margin-top: -30%;
  }
`

export const SearchContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-center;
  width: 75vw;
  height: 16vh;
  padding: 0 3vw;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0px 6px 28px #5f47ff36;

  @media (max-width: 996px) {
    display: block;
    width: 100%;
    height: 100%;
    padding: 3vh;
    margin: 0 6vw;
  }

  > span {
    width: 45%;
    font-size: 1.375rem;
    font-weight: 900;

    @media (max-width: 996px) {
      font-size: 1.375rem;
    }

    @media (min-width: 1600px) {
      width: 35%;
      font-size: 1.75rem;
    }
  }
`

export const SearchInput = styled.div`
  width: 50%;
  margin: 0 1vw;

  @media (max-width: 996px) {
    width: 100%;
    margin: 2vh 0;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 10vh 5vw;

  @media (max-width: 996px) {
    padding: 20vh 1vw 10vh;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 6vw;
  height: auto;
  margin: 4vw 2.5vh 0;

  @media (max-width: 768px) {
    width: 22vw;
    margin: 3vw;
  }

  @media (max-width: 996px) {
    width: 22vw;
    margin: 4vw;
  }

  > img {
    margin-bottom: 1vh;
    border-radius: 8px;
    border-image: initial;
    box-shadow: rgb(86 57 254 / 15%) 0px 5px 40px;
  }

  > span {
    width: 100%;
    overflow: hidden;
    font-size: 0.75rem;
    text-align: center;
    white-space: nowrap;
  }
`

export const FormControl = styled(BFormControl)`
  height: 6vh;
  text-transform: lowercase;
  background: #eff3f6;
  border: none;

  @media (min-width: 1920px) {
    height: 5vh;
  }

  &:focus {
    background: #eff3f6;
    box-shadow: none;
  }
`

export const InputGroup = styled(BInputGroup)`
  height: 100%;
`

export const ButtonInput = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border: none;

  @media (min-width: 1920px) {
    height: 5vh;
  }

  :active {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }

  :hover {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }
`

export const ButtonInputIcon = styled.img`
  width: 1.5vw;
  height: 2vh;

  @media (max-width: 996px) {
    width: 5vw;
    height: 4vh;
  }
`

export const Dropdown = styled(BDropdown)``

export const DropdownButton = styled(BDropdownButton)`
  width: 100%;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: ${props => props.theme.colors.secondary};

    :hover {
      background-color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};
    }

    :active {
      background-color: ${props => props.theme.colors.secondary} !important;
      border-color: ${props => props.theme.colors.secondary} !important;
    }

    :focus {
      background-color: ${props => props.theme.colors.secondary} !important;
      border-color: ${props => props.theme.colors.secondary} !important;
    }
  }
`

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`

export const Preloader = styled.div`
  position: relative;
  display: inline-block;
  width: 2vw;
  height: 2vw;

  @media (max-width: 996px) {
    width: 4vw;
    height: 4vw;
  }
`

const BounceAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.secondary};
  border-radius: 50%;
  opacity: 0.6;
  animation: ${bounce} 2s infinite ease-in-out;
`

export const DoubleBounceIn = styled(BounceAnimation)``

export const DoubleBounceOut = styled(BounceAnimation)`
  animation-delay: -1s;
`

export const CornerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15vh 8vw 15vh 8vw;
  margin-bottom: 15vh;
  text-align: center;
  background-color: ${theme.colors.gray[100]};
  background-image: url('masks/devapi.svg');
  background-size: contain;
  border-radius: 110px 0;

  > hr {
    width: 15vh;
    height: 3px;
    margin-bottom: 2vh;
    background-color: ${theme.colors.secondary};

    @media (max-width: 576px) {
      width: 8vh;
    }
  }

  > h2 {
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1;

    @media (max-width: 996px) {
      font-size: 2rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 100%;
    margin-bottom: 30px;
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 70%;
      font-size: 1.375rem;
    }
  }
`
