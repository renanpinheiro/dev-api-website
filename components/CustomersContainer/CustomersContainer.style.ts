import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CustomersGrid = styled.div`
  display: flex;
  background-color: ${theme.colors.header};
`
export const CustomersContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4rem 0;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  > img {
    @media (max-width: 768px) {
      margin: 2rem;
    }
  }
`
