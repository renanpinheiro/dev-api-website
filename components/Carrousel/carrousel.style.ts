import { Carousel, CarouselItem } from 'react-bootstrap'

import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div``

export const TitleContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
`

export const CarrouselContent = styled(Carousel)`
  ol {
    li {
      width: 7px;
      height: 6px;
      background-color: ${theme.colors.primary};
      background-clip: border-box;
      border: 1px solid ${theme.colors.primary};
      border-radius: 100%;
      opacity: 1;

      &.active {
        width: 50px;
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};
        border-radius: 6px;
        transition: width 0.8s cubic-bezier(0.01, 0.29, 1, 0.68);
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

export const Item = styled(CarouselItem)`
  height: 140px;
  img {
    max-width: 120px;
    object-fit: contain;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  height: 100px;
`
