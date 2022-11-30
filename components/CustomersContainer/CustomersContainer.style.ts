import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CustomersContainer = styled.div`
  width: 100%;
  padding: 8vh 8vw 8vh 8vw;
  justify-content: center;
  align-content: center;
  display: flex;
  background-color: ${theme.colors.header};

  @media (max-width: 900px) {
    display: block;
    margin: 0 auto;
  }

  > img {
    padding: 0 2vw 0 0;
    max-height: 32px;
  }
`
