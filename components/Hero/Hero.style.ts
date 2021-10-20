import styled from 'styled-components'
import { theme } from '../../styles/theme'

import { IContainerStyle } from './Hero.interface'

export const Container = styled.div<IContainerStyle>`
  position: relative;
  z-index: 13;
  height: ${props => (props.maxHeight ? `${props.maxHeight}vh` : '80vh')};
  padding-top: 5vh;
  background-color: ${theme.colors.gray[100]};

  @media (max-width: 768px) {
    height: ${props => (props.minHeight ? `${props.minHeight}vh` : '80vh')};
  }
`
