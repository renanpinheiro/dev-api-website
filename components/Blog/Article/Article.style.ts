import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border-radius: 15px;
  margin-bottom: 4vh;
`

export const ArticleImage = styled.div`
  border-radius: inherit;

  background: linear-gradient(
    to bottom,
    ${theme.colors.primary} 0%,
    ${theme.colors.tertiary} 100%
  );

  > img {
    border-radius: inherit;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    max-height: 200px;
    max-width: 405px;

    &:hover {
      opacity: 0.3;
    }
  }
`

export const ArticleTag = styled.div`
  padding: 0.5rem 1rem;
  background: ${theme.colors.secondary};
  max-width: fit-content;
  border-radius: 5px;
  margin: 10px 0;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 0.75rem;
`

export const ArticleTitle = styled.div`
  font-weight: 900;
`

export const ArticleDate = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  > img {
    margin-right: 0.5rem;
  }

  > p {
    color: ${theme.colors.gray[550]};
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`
