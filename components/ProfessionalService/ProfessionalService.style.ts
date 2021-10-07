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

  h2 {
    max-width: 25ch;

    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }

    @media (max-width: 1600px) {
      font-size: 2.5vw;
    }

    @media (max-width: 1200px) {
      font-size: 4vh;
    }
  }

  p {
    max-width: 70ch;
    line-height: 1.7;

    @media (max-width: 1600px) {
      max-width: 50ch;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const CheckContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  p {
    margin-left: 20px;
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
