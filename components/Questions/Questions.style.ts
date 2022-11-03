import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    @media (max-width: 576px) {
      margin-top: 10px;
    }

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    > b {
      font-weight: 700;
    }
  }
`
