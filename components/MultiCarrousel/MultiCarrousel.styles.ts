import Slider from 'react-slick'

import styled from 'styled-components'
export const Container = styled.div``

export const TitleContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px !important;
  margin: 0 25px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

export const Image = styled.img`
  width: 100%;
  height: 90px;
  pointer-events: none;
  object-fit: contain;
`

export const Carrousel = styled(Slider)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
