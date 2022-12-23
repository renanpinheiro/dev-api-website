import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CustomersGrid = styled.div`
  display: flex;
`
export const CustomersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4rem 6rem;
  justify-content: center;
  align-content: center;
  background-color: ${theme.colors.header};

  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  > img {
    padding: 0 2rem 0 0;
    max-height: 16px;

    @media (max-width: 768px) {
      margin: 2rem;
    }
  }
`
