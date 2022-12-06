import styled from 'styled-components'

import { theme } from './theme'

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

export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const Content = styled.section`
  width: 100%;
  padding: 10vh 19vw;

  @media (max-width: 768px) {
    padding: 10vh 8vw;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-items: flex-start;
    margin-bottom: 4vw;
  }
`

export const Title = styled.div`
  margin: 0 0 8vh;

  > hr {
    width: 5.8vw;
    height: 0.188rem;
    margin: 0;
    background-color: ${theme.colors.secondary};
    opacity: 1;

    @media (max-width: 768px) {
      width: 18vw;
    }
  }

  > h2 {
    font-size: 2.875rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }

    > b {
      font-weight: 900;
    }
  }
`

export const Scheduling = styled.div`
  width: 100%;
`
export const AcordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10vh 8vw 10vh 8vw;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`
export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`
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
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0 0 0;

  @media (max-width: 900) {
    align-items: flex-start;
  }
`
