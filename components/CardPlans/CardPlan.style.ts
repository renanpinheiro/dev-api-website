import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const CardsContainer = styled.div`
  display: flex;
  width: 85vw;
  border-radius: 8px;
  box-shadow: 0px 6px 28px #2c2d6636;
`
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17vw;
  line-height: 1;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  transition: transform 1s;
  transform: translateX(0) scale(1);

  :hover,
  :focus {
    z-index: 9;
    background-image: url('static/images/cardPlansImages/card-plan-bg.svg');
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
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
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
  font-size: 1em;
  color: ${props => props.theme.colors.primary};

  @media (min-width: 1920px) {
    font-size: 1.3em;
  }
`

export const SubText = styled.p`
  margin: 0;
  font-size: 1em;
  color: ${props => props.theme.colors.gray[600]};
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
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0rem 2rem 1.5rem 2rem;

  @media (min-width: 900px) {
    padding: 0rem 1rem 1.5rem 1rem;
  }
  @media (min-width: 1920px) {
    padding: 0rem 4rem 1.5rem 4rem;
  }
`
