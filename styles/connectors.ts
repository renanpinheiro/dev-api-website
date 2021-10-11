import styled from 'styled-components'
import { theme } from './theme'
import {
  Button,
  FormControl as BFormControl,
  InputGroup as BInputGroup,
  Dropdown as BDropdown,
  DropdownButton as BDropdownButton,
} from 'react-bootstrap'

export const Hero = styled.section`
  position: relative;
  height: 80vh;
  padding-top: 5vh;
  background-color: ${theme.colors.gray[100]};

  @media (max-width: 768px) {
    height: 90vh;
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
    font-size: 3.75rem;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 35%;
    margin: 3vh 0;
    font-size: 1.375rem;
    line-height: 3vh;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
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
    width: 35%;
    font-size: 1.75rem;
    font-weight: 900;

    @media (max-width: 996px) {
      font-size: 1.375rem;
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
    text-align: center;
    white-space: nowrap;
  }
`

export const FormControl = styled(BFormControl)`
  height: 5vh;
  text-transform: lowercase;
  background: #eff3f6;
  border: none;

  @media (max-width: 996px) {
    height: 6vh;
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
  height: 5vh;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border: none;

  @media (max-width: 996px) {
    height: 6vh;
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
