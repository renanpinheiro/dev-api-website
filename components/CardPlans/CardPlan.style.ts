import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CardsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  width: 86vw;
  height: 60vh;
  border-radius: 8px;

  @media (min-width: 1600px) {
    width: 86vw;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 100%;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  background-color: white;
  background-image: url('/backgrounds/card-plan-bg.svg');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  border-radius: 8px;
  box-shadow: 0px 6px 28px #2c2d6636;
  transition: transform 1s;
  transform: translateX(0) scale(1);

  :hover,
  :focus {
    z-index: 9;
    background-image: url('/backgrounds/card-plan-bg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 8px;
    box-shadow: 0px 6px 28px #2c2d6636;
    transform: scale(1.1);

    @media (min-width: 900px) {
      background-position-x: 50%;
      background-position-y: 0%;
      background-size: 140%;
    }
    @media (min-width: 1200px) {
      background-position-x: 50%;
      background-position-y: 0%;
      background-size: 120%;
    }
    @media (min-width: 1366px) {
      background-size: 103%;
    }
    @media (min-width: 1600px) {
      background-position-y: -4%;
    }
    @media (min-width: 1920px) {
      height: 90%;
      background-position-y: -12%;
    }
  }
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 1rem auto 2rem auto;

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
`

export const Title = styled.h2`
  padding: 3rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 7px;

  @media (min-width: 900px) {
    letter-spacing: 4px;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
    letter-spacing: 4px;
  }
  @media (min-width: 1600px) {
    font-size: 1.7rem;
    letter-spacing: 5px;
  }
  @media (min-width: 1920px) {
    font-size: 2rem;
    letter-spacing: 6px;
  }
`

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2% 0;
  font-size: 1em;

  color: ${theme.colors.black};
  @media (min-width: 1920px) {
    font-size: 1.3em;
  }
`

export const SubText = styled.p`
  padding-bottom: 1rem;
  margin: 0;
  font-size: 1.3em;
  color: ${theme.colors.gray[900]};
`

export const TextContainer = styled.div`
  padding: 0rem 0.6rem;

  @media (min-width: 1200px) {
    padding: 0rem 1.1rem;
  }
  @media (min-width: 1600px) {
    padding: 0rem 2.1rem;
  }
  @media (min-width: 1920px) {
    padding: 0rem 2.2rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 2rem 1.5rem 2rem;

  @media (min-width: 900px) {
    padding: 0rem 1rem 1.5rem 1rem;
  }
  @media (min-width: 1920px) {
    padding: 0rem 4rem 1.5rem 4rem;
  }
`
