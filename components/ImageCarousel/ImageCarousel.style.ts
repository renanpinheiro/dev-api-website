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
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  height: 30px;
  width: 30px;
`

export const ArrowLeft = styled.p`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);

  height: 30px;
  width: 30px;
`
