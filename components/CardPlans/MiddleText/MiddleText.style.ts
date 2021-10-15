import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const MiddleText = styled.p`
  padding: 3vh 0 1vh 0;
  margin: 0;
  font-size: 1.375rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    width: 100%;
    font-size: 1.25rem;
  }

  b {
    font-weight: 700;
  }
`
