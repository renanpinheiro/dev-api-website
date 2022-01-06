import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { IControlContainerStyle } from './BoxReverse.interface'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10vh 8vw 0 8vw;
  text-align: j;

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const ControlContainer = styled.div<IControlContainerStyle>`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  object-fit: cover;

  @media (max-width: 900px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;

  > p {
    max-width: 50ch;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Pipe = styled.div`
  width: 5.5vw;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
