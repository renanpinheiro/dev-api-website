import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FreeTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 8vh 0 8vh 0;
`

export const FreeTestRows = styled.div`
  display: flex;
  flex-direction: column;
`
export const FreeTest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 996px) {
    flex-direction: column;

    font-size: 1.375rem;
  }

  h2 {
    max-width: 18ch;
    font-size: 2.3rem;
    color: ${theme.colors.primary};

    @media (max-width: 996px) {
      flex-direction: column;

      font-size: 1.375rem;
    }
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    span {
      font-weight: 700;
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.1rem 0 0 0;
`
export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
