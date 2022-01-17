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
  width: 220px;
  margin: 0 25px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

export const Image = styled.img`
  width: 100%;
  height: 90px;
  margin-bottom: 1vh;
  pointer-events: none;
  object-fit: contain;
  border-radius: 8px;
  border-image: initial;
  box-shadow: rgb(86 57 254 / 15%) 0 5px 40px;
`

export const Carrousel = styled(Slider)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
