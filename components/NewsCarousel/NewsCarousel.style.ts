import Slider from 'react-slick'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
`

export const SliderContainer = styled(Slider)`
  > .slick-prev {
    left: 81%;
    top: -5.5%;
    width: 60px;
    height: 60px;

    border: 3px solid ${props => props.theme.colors.primary};
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    :hover {
      background-color: ${props => props.theme.colors.secondary};
      border: none;
    }
    :before {
      font-size: 35px;
      font-family: 'sans-serif';
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }
    :hover:before {
      color: ${props => props.theme.colors.white};
    }
    ::before {
      width: 35px;
      height: 35px;
      margin-bottom: 2px;
    }
    @media (min-width: 320px) and (max-width: 992px) {
      left: 74%;
      top: -4%;
      width: 40px;
      height: 40px;
    }

    @media (min-width: 1280px) and (max-width: 1440.99px) {
      left: 84%;
      top: -5.5%;
    }

    @media (min-width: 1440.99px) and (max-width: 1919px) {
      left: 81%;
      top: -5.5%;
    }
  }
  > .slick-next {
    top: -5.5%;
    right: 12%;
    width: 60px;
    height: 60px;

    border: 3px solid ${props => props.theme.colors.primary};
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    :hover {
      background-color: ${props => props.theme.colors.secondary};
      border: none;
    }
    :before {
      font-size: 35px;
      font-family: 'sans-serif';
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }
    :hover:before {
      color: ${props => props.theme.colors.white};
    }
    ::before {
      width: 35px;
      height: 35px;
      margin-bottom: 2px;
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
  justify-content: center;
  align-items: center;
`
export const TitleContainer = styled.div`
  width: 90rem !important;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

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
  background-color: ${props => props.theme.colors.secondary};
  margin-bottom: 8px;
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
