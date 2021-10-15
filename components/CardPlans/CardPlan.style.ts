import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 700px) {
    justify-content: center;
  }
`
export const Cards = styled.div`
  display: flex;
  flex: 0 0 24%;
  flex-direction: column;
  padding-bottom: 1.5vh;
  line-height: 1;
  text-align: center;
  vertical-align: middle;
  background-color: white;
  background-image: url('/backgrounds/card-plan-bg.svg');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -3vh;
  background-size: contain;
  border-radius: 8px;
  border-radius: 8px;
  box-shadow: 0px 6px 28px #2c2d6636;
  transition: transform 0.5s;
  transform: translateX(0) scale(1);

  :hover,
  :focus {
    z-index: 9;
    border-radius: 8px;
    box-shadow: 0px 6px 28px #2c2d6636;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    flex: 0 0 49%;
    margin-top: 10px;
  }

  @media (max-width: 700px) {
    flex: 0 0 65%;
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    flex: 0 0 90%;
    margin-top: 10px;
  }
`

export const Icon = styled.img`
  width: 8vh;
  height: 8vh;
  margin: 1vh auto 1vh auto;
`

export const Title = styled.h2`
  padding: 7vh 0 1vh 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 1vh;

  @media (max-width: 996px) {
    width: 100%;
    font-size: 1.25rem;
  }

  @media (min-width: 1600px) {
    width: 90%;
    font-size: 1.375rem;
  }
`

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2% 0;
  font-size: 1.2rem;
  line-height: 1.3;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    line-height: 1.2;
  }
`

export const SubText = styled.p`
  padding-bottom: 1.5vh;
  margin-top: 1.1vh;
  font-size: 1.75rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    font-size: 1.5rem;
  }
`

export const TextContainer = styled.div`
  padding: 0 2vw;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 2vw 3vh 2vw;
`
