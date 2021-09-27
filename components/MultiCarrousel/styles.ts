import Slider from 'react-slick'

import styled from 'styled-components'
export const Container = styled.div`
  padding: 45px 10vh;
`

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const ImageContainer = styled.div`
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 220px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
`

export const Image = styled.img`
  pointer-events: none;
  width: 100%;
  object-fit: contain;
`

export const Carrousel = styled(Slider)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
