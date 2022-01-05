import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5vh 8vw 5vh 8vw;
  margin-bottom: 10vh;

  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/devapi.svg');
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: 180px;
  border-bottom-right-radius: 180px;

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
    font-size: 2.625rem;
    line-height: 1;

    @media (max-width: 996px) {
      font-size: 2rem;
    }

    @media (min-width: 1600px) {
      width: 98%;
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 100%;
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 1.375rem;
      width: 96%;
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

  @media (max-width: 996px) {
    align-items: flex-start;
  }

  > img {
    padding-right: 10px;
    width: 5vh;
    height: auto;
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      font-size: 1.25rem;
      line-height: 1.1;
    }

    @media (max-width: 1600px) {
      font-size: 1.375rem;
    }
  }
`
