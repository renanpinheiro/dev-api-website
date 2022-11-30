import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CustomersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8vh 8vw 8vh 8vw;
  justify-content: center;
  align-content: center;
  background-color: ${theme.colors.header};

  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  > img {
    padding: 0 2vw 0 0;
    max-height: 32px;

    @media (max-width: 1300px) {
    }
  }
`
