import { Carousel, CarouselItem } from 'react-bootstrap'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const CarrouselContent = styled(Carousel)`
  height: 100%;

  ol {
    display: none;

    li {
      display: none;
    }
  }

  a {
    width: 10%;

    span {
      content-visibility: hidden;
      background-image: none;
    }

    @media only screen and (max-width: 770px) {
      display: none;
    }
  }

  div {
    height: 100%;

    div {
      height: 100%;
      transition-duration: 2s;
    }
  }
`

export const Item = styled(CarouselItem)`
  width: 100%;
  height: 100%;
`

export const ArrowRight = styled.p`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 3px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
`

export const ArrowLeft = styled.p`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 3px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
`
