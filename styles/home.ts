import styled from 'styled-components'
import { theme } from './theme'

export const CarrouselTitle = styled.h2`
  color: ${theme.colors.primary};

  font-size: 2.3rem;

  @media (max-width: 996px) {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  span {
    font-weight: 700;
  }
`
export const CostumersCarrouselContainer = styled.div`
  width: 100%;
  background-size: 76%;
`
