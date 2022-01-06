import Slider from 'react-slick'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0;
`

export const SliderContainer = styled(Slider)`
  > .slick-prev {
    top: -5.5%;
    left: 81%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 3px solid ${props => props.theme.colors.primary};
    border-radius: 50%;

    :hover {
      background-color: ${props => props.theme.colors.secondary};
      border: none;
    }

    ::before {
      width: 35px;
      height: 35px;
      margin-bottom: 2px;
      font-family: sans-serif;
      font-size: 35px;
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }

    :hover::before {
      color: ${props => props.theme.colors.white};
    }

    @media (min-width: 320px) and (max-width: 992px) {
      top: -4%;
      left: 74%;
      width: 40px;
      height: 40px;
    }

    @media (min-width: 1280px) and (max-width: 1440.99px) {
      top: -5.5%;
      left: 84%;
    }

    @media (min-width: 1440.99px) and (max-width: 1919px) {
      top: -5.5%;
      left: 81%;
    }
  }

  > .slick-next {
    top: -5.5%;
    right: 12%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border: 3px solid ${props => props.theme.colors.primary};
    border-radius: 50%;

    :hover {
      background-color: ${props => props.theme.colors.secondary};
      border: none;
    }

    ::before {
      width: 35px;
      height: 35px;
      margin-bottom: 2px;
      font-family: sans-serif;
      font-size: 35px;
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }

    :hover::before {
      color: ${props => props.theme.colors.white};
    }

    @media (min-width: 320px) and (max-width: 992px) {
      top: -4%;
      right: 4%;
      width: 40px;
      height: 40px;
    }

    @media (min-width: 1280px) and (max-width: 1440.99px) {
      top: -5.5%;
      right: 6%;
    }

    @media (min-width: 1440.99px) and (max-width: 1919px) {
      top: -5.5%;
      right: 12%;
    }
  }
`

export const CardContainer = styled.div`
  border-radius: 15px;
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90rem !important;
  margin: auto;

  @media (min-width: 320px) and (max-width: 992px) {
    max-width: 100%;
    padding: 0 50px 0 20px;
    line-height: 1;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) and (max-width: 1920px) {
    max-width: 90rem;
  }
`

export const Pipe = styled.div`
  width: 120px;
  height: 3px;
  margin-bottom: 8px;
  background-color: ${props => props.theme.colors.secondary};
`

export const Title = styled.p`
  margin: 0;
  font-size: 2.7rem;
  color: ${props => props.theme.colors.primary};

  span {
    font-weight: 700;
  }

  @media (min-width: 320px) and (max-width: 992px) {
    font-size: 2rem;
  }
`
