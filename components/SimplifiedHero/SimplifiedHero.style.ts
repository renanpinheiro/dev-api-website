import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 40vh;
  padding: 30vh 10vw 20vh 10vw;
  text-align: center;
  background: transparent url('/backgrounds/faq.png') 0% 0% no-repeat
    padding-box;

  @media (max-width: 576px) {
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    background: transparent url('/backgrounds/faq.png') padding-box;
  }

  > h1 {
    font-size: 2.5rem;
    font-weight: 900;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.75rem;
    }
  }

  > b {
    color: ${theme.colors.secondary};
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  > p {
    width: 70%;
    margin: 3vh 0;
    margin-bottom: 30px;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.2;
    }

    @media (min-width: 1600px) {
      width: 40%;
    }
  }
`
