import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8vh 8vw;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/devapi.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1200px) {
    flex-direction: column;
    border-top-left-radius: 80px;
    border-bottom-right-radius: 80px;
  }
`

export const ImageContainer = styled.div`
  width: 35vw;

  img {
    width: 100%;
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 10vh;
  }
`

export const ProfessionalServiceText = styled.div`
  width: 35vw;

  @media (max-width: 1200px) {
    width: 100%;
  }

  > h2 {
    max-width: 25ch;
    margin-bottom: 15px;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 800;
    color: ${theme.colors.secondary};

    @media (min-width: 1600px) {
      width: 98%;
    }
  }

  > b {
    color: ${theme.colors.primary};
    font-weight: 900;
    font-size: 2rem;
    line-height: 42px;
  }

  > p {
    margin: 2vh 0 4vh 0;
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.1rem;
    }

    @media (min-width: 1600px) {
      width: 96%;
      font-size: 1.375rem;
    }
  }
`

export const Pipe = styled.div`
  width: 15vh;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  > img {
    width: 5vh;
    height: auto;
    padding-right: 10px;
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      font-size: 1.1rem;
      line-height: 1.1;
    }

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }
`
