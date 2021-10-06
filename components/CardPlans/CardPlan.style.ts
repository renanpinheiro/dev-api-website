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
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    grid-gap: 20px;
    width: 70vw;
  }
  @media (max-width: 1024px) {
    width: 84vw;
  }
  @media (max-width: 1280px) {
    width: 84vw;
  }
  @media (max-width: 1366px) {
    width: 86vw;
  }
  @media (max-width: 1440px) {
    width: 80vw;
  }
  @media (max-width: 1600px) {
    width: 80vw;
  }
  @media (max-width: 1920px) {
    width: 82vw;
  }
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 18em;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  background-color: white;
  background-image: url('/backgrounds/card-plan-bg.svg');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -4.5rem;
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
  }
  @media (max-width: 800px) {
    width: 32vw;
    height: 18em;
  }
  @media (max-width: 1024px) {
    width: 20vw;
    height: 40em;
    background-position-x: 50%;
    background-position-y: -1rem;
  }
  @media (max-width: 1280px) {
    width: 20vw;
    height: 40em;
    background-position-x: 50%;
    background-position-y: -3rem;
  }
  @media (max-width: 1366px) {
    width: 20vw;
    height: 40em;
  }
  @media (max-width: 1440px) {
    width: 18vw;
    height: 40em;
  }
  @media (max-width: 1600px) {
    width: 18vw;
    height: 41em;
  }

  @media (max-width: 1920px) {
    width: 18.5vw;
    height: 25.5em;
  }
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 1rem auto 2rem auto;
  @media (max-width: 800px) {
    width: 45px;
    height: 45px;
    margin: 0.5rem auto auto auto;
  }
  @media (min-width: 1024px) {
    width: 25px;
    height: 25px;
    margin: 0.25rem auto 0.2rem auto;
  }
  @media (min-width: 1280px) {
    width: 30px;
    height: 30px;
    margin: 0.25rem auto 0.2rem auto;
  }
  @media (min-width: 1366px) {
    width: 30px;
    height: 30px;
    margin: 0.25rem auto 0.2rem auto;
  }
  @media (min-width: 1440px) {
    width: 30px;
    height: 30px;
    margin: 0.25rem auto 0.2rem auto;
  }
  @media (min-width: 1600px) {
    width: 54px;
    height: 54px;
    margin: 0.25rem auto auto auto;
  }
  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
`

export const Title = styled.h2`
  padding: 3.2rem 0 1rem 0;
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 7px;

  @media (min-width: 800px) {
    padding: 1.5rem 0 0.5rem 0;
    font-size: 1rem;
    letter-spacing: 4px;
  }
  @media (min-width: 1024px) {
    padding: 0.8rem 0 0.7rem 0;
    font-size: 1rem;
    letter-spacing: 4px;
  }
  @media (min-width: 1200px) {
    font-size: 1rem;
    letter-spacing: 4px;
  }
  @media (min-width: 1366px) {
    font-size: 1.5rem;
    letter-spacing: 4px;
  }
  @media (min-width: 1600px) {
    font-size: 1.7rem;
    letter-spacing: 5px;
  }
  @media (min-width: 1920px) {
    font-size: 1.7rem;
    letter-spacing: 7px;
  }
`

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2% 0;
  font-size: 1rem;

  color: ${theme.colors.black};
  @media (max-width: 1024px) {
    font-size: 0.5rem;
  }
  @media (max-width: 1280px) {
    font-size: 0.6rem;
  }
  @media (max-width: 1366px) {
    font-size: 0.8rem;
  }

  @media (max-width: 1920px) {
    font-size: 1rem;
  }
`

export const SubText = styled.p`
  padding-bottom: 1rem;
  margin: 0;
  font-size: 1.2rem;
  color: ${theme.colors.gray[900]};

  @media (max-width: 1024px) {
    font-size: 0.8em;
  }
  color: ${theme.colors.black};
  @media (max-width: 1280px) {
    font-size: 0.7rem;
  }
  @media (max-width: 1366px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1600px) {
    font-size: 1rem;
  }
  @media (max-width: 1920px) {
    font-size: 1.3rem;
  }
`

export const TextContainer = styled.div`
  padding: 0rem 0.6rem;

  @media (min-width: 124px) {
    font-size: 0.8em;
  }
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

  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 2rem 1.5rem 2rem;

  @media (max-width: 900px) {
    padding: 0rem 1rem 1.5rem 1rem;
  }
  @media (max-width: 1024px) {
    button {
      height: 35px;
      font-size: 1rem;
    }
    justify-content: center;
  }
  @media (max-width: 1920px) {
    padding: 0rem 4rem 1.5rem 4rem;
  }
`
