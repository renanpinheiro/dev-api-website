import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5vw;

  @media (max-width: 1024px) {
    margin-top: 15vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  > a {
    padding: 0.75rem 1.75rem;
    background-color: ${theme.colors.green[100]};
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    text-align: center;

    @media (max-width: 1024px) {
      width: 100%;
      margin-top: 1vh;
      padding: 1rem 0;
      font-size: 1.25rem;
    }

    &:hover {
      background-color: ${theme.colors.green[200]};
    }
  }
`

export const Title = styled.div`
  flex-basis: 23vw;

  > hr {
    width: 7.5vw;
    height: 3px;
    margin: 0 0 2vh;
    background-color: ${theme.colors.secondary};
    border-radius: 10px;
    opacity: 1;

    @media (max-width: 1024px) {
      width: 25vw;
    }
  }

  > h3 {
    font-size: 3rem;
    color: ${theme.colors.primary};

    @media (max-width: 1024px) {
      font-size: 2rem;
    }

    > b {
      font-weight: 900;
    }
  }
`
