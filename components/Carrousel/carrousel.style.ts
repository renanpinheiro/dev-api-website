import { Carousel, CarouselItem } from 'react-bootstrap'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { theme } from '../../styles/theme'
import { ICarouselStyle } from './Carrousel.interface'

export const Container = styled.div``

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`

export const CarrouselContent = styled(Carousel)<ICarouselStyle>`
  ol {
    margin: ${props => props.dotsMargin};

    li {
      width: 7px;
      height: 6px;
      border-radius: 100%;
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      background-clip: border-box;
      opacity: 1;

      &.active {
        width: 50px;
        border-radius: 6px;
        transition: width 0.8s cubic-bezier(0.01, 0.29, 1, 0.68);
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};
      }
    }
  }

  a {
    span {
      display: none;
    }
  }

  div {
    div {
      transition: transform 0.8s ease-in-out;
    }
  }
`

export const Item = styled(CarouselItem)<ICarouselStyle>`
  ${props =>
    props.isCustomCarouselItem
      ? props.carouselItemStyle
      : css`
          img {
            width: 50% 
            height: 50px;
            margin-bottom: 30px;
            object-fit: contain;
          }
        `}
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
`
