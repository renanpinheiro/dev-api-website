import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { IButtonStyledProps, IContainerStyledProps } from './Button.interface'

export const Container = styled.div<IContainerStyledProps>`
  width: ${props => props.size};

  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`

export const BootstrapButton = styled(Button)<IButtonStyledProps>`
  border: 0;
  height: ${props => (props.height ? props.height : '55px')};
  width: 100%;
  background-color: ${props => props.color};
  font-weight: 700;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
  transition: all 0.2s;
  opacity: 1;

  :hover,
  :focus {
    background-color: ${props => (props.disabled ? 'none' : props.color)};
    border-color: ${props => props.color};
    box-shadow: none;
  }

  :active {
    background-color: ${props => props.color} !important;
    border-color: ${props => props.color} !important;
    box-shadow: none !important;
  }

  :disabled {
    background-color: ${props => props.color} !important;
    border-color: ${props => props.color} !important;
  }

  :disabled {
    opacity: 0.2;
  }
`
